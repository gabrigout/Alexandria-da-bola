import type { BundesligaValidationInput, BundesligaClub, BundesligaSeason } from './types'

export interface BundesligaValidationResult {
  valid: boolean
  errors: string[]
  warnings: string[]
  totals: {
    clubs: number
    seasons: number
    sources: number
    players: number
    coaches: number
    awards: number
    matches: number
  }
}

export function validateBundesligaData({
  clubs = [],
  seasons = [],
  sources = [],
  players = [],
  coaches = [],
  awards = [],
  matches = [],
}: BundesligaValidationInput = {}): BundesligaValidationResult {
  const errors: string[] = []
  const warnings: string[] = []
  const clubIds = new Set<string>()
  const playerIds = new Set(players.map((item) => item.id))
  const sourceIds = new Set(sources.map((item) => item.id))
  const seasonIds = new Set(seasons.map((item) => item.id))

  const checkDuplicates = (items: Array<{ id: string }>, label: string) => {
    const ids = new Set<string>()
    for (const item of items) {
      if (!item.id) errors.push(`${label} sem identificador.`)
      else if (ids.has(item.id)) errors.push(`ID de ${label.toLowerCase()} duplicado: ${item.id}`)
      ids.add(item.id)
    }
  }

  const checkSources = (owner: string, ids: string[] = []) => {
    for (const id of ids) {
      if (!sourceIds.has(id)) errors.push(`Fonte não cadastrada em ${owner}: ${id}`)
    }
  }

  checkDuplicates(clubs, 'Clube')
  checkDuplicates(players, 'Jogador')
  checkDuplicates(coaches, 'Treinador')
  checkDuplicates(awards, 'Premiação')
  checkDuplicates(matches, 'Partida')
  checkDuplicates(sources, 'Fonte')
  checkDuplicates(seasons, 'Temporada')

  clubs.forEach((club: BundesligaClub) => {
    if (!club.name) errors.push(`Clube sem nome: ${club.id}`)
    if (!club.foundedOn || !club.city || !club.colors || !club.foundationNote || !club.identity) {
      errors.push(`Ficha inicial incompleta para o clube: ${club.id}`)
    }
    if (!club.inauguralSeason || club.inauguralSeason.played !== 30) {
      errors.push(`Dados inaugurais ausentes ou incompletos para o clube: ${club.id}`)
    }
    if (club.inauguralSeason && club.inauguralSeason.points !== club.inauguralSeason.wins * 2 + club.inauguralSeason.draws) {
      errors.push(`Pontuação de 1963/64 incompatível no perfil: ${club.id}`)
    }
    clubIds.add(club.id)
    checkSources(`clube ${club.id}`, club.sourceIds)
  })

  seasons.forEach((season: BundesligaSeason) => {
    if (!season.standings.length) warnings.push(`Temporada sem classificação: ${season.id}`)

    season.standings.forEach((row) => {
      if (!clubIds.has(row.clubId)) errors.push(`Clube inexistente na temporada ${season.id}: ${row.clubId}`)
      if (row.played !== row.wins + row.draws + row.losses) errors.push(`Jogos incompatíveis: ${row.clubName}`)
      if (row.goalDifference !== row.goalsFor - row.goalsAgainst) errors.push(`Saldo incorreto: ${row.clubName}`)
      if (row.points !== row.wins * season.rules.pointsForWin + row.draws * season.rules.pointsForDraw) {
        errors.push(`Pontuação incompatível: ${row.clubName}`)
      }
    })

    season.topScorers.forEach((scorer) => {
      if (!playerIds.has(scorer.playerId)) errors.push(`Jogador inexistente na artilharia ${season.id}: ${scorer.playerId}`)
      if (!clubIds.has(scorer.clubId)) errors.push(`Clube inexistente na artilharia ${season.id}: ${scorer.clubId}`)
      checkSources(`artilheiro ${scorer.playerId}`, scorer.sourceIds)
    })

    checkSources(`temporada ${season.id}`, season.sourceIds)
    checkSources(`regras ${season.id}`, season.rules.sourceIds)
    checkSources(`estatísticas ${season.id}`, season.statistics.sourceIds)
    season.historicalNotes.forEach((note) => checkSources(`nota histórica ${season.id}`, note.sourceIds))
    season.notableMatches.forEach((match) => checkSources(`partida histórica ${match.id}`, match.sourceIds))
  })

  players.forEach((player) => {
    player.clubs.forEach((club) => {
      if (!clubIds.has(club.clubId)) errors.push(`Clube inexistente no histórico de ${player.name}: ${club.clubId}`)
    })
    player.notableSeasonIds.forEach((id) => {
      if (!seasonIds.has(id)) errors.push(`Temporada inexistente no histórico de ${player.name}: ${id}`)
    })
    checkSources(`jogador ${player.id}`, player.sourceIds)
  })

  coaches.forEach((coach) => {
    if (!clubIds.has(coach.clubId)) errors.push(`Clube inexistente para treinador ${coach.name}: ${coach.clubId}`)
    coach.seasonIds.forEach((id) => {
      if (!seasonIds.has(id)) errors.push(`Temporada inexistente para treinador ${coach.name}: ${id}`)
    })
    checkSources(`treinador ${coach.id}`, coach.sourceIds)
  })

  awards.forEach((award) => {
    if (!seasonIds.has(award.seasonId)) errors.push(`Temporada inexistente na premiação ${award.id}: ${award.seasonId}`)
    if (!playerIds.has(award.recipientId) && !clubIds.has(award.recipientId)) {
      errors.push(`Destinatário inexistente na premiação ${award.id}: ${award.recipientId}`)
    }
    checkSources(`premiação ${award.id}`, award.sourceIds)
  })

  matches.forEach((match) => {
    if (!seasonIds.has(match.seasonId)) errors.push(`Temporada inexistente na partida ${match.id}: ${match.seasonId}`)
    if (!clubIds.has(match.homeClubId)) errors.push(`Mandante inexistente na partida ${match.id}: ${match.homeClubId}`)
    if (!clubIds.has(match.awayClubId)) errors.push(`Visitante inexistente na partida ${match.id}: ${match.awayClubId}`)
    checkSources(`partida ${match.id}`, match.sourceIds)
  })

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    totals: {
      clubs: clubs.length,
      seasons: seasons.length,
      sources: sources.length,
      players: players.length,
      coaches: coaches.length,
      awards: awards.length,
      matches: matches.length,
    },
  }
}
