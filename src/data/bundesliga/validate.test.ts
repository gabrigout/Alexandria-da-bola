import { describe, expect, it } from 'vitest'
import {
  bundesligaAwards,
  bundesligaClubs,
  bundesligaCoaches,
  bundesligaMatches,
  bundesligaMatchClubs,
  bundesligaSeasonIndex,
  bundesligaPlayers,
  bundesligaSources,
  inauguralSeason,
  validateBundesligaData,
} from './index'

const dataset = {
  clubs: bundesligaClubs,
  matchClubs: bundesligaMatchClubs,
  seasonIndex: bundesligaSeasonIndex,
  seasons: [inauguralSeason],
  sources: bundesligaSources,
  players: bundesligaPlayers,
  coaches: bundesligaCoaches,
  awards: bundesligaAwards,
  matches: bundesligaMatches,
}

describe('validação do acervo Bundesliga', () => {
  it('aceita a temporada inaugural e as relações cadastradas', () => {
    const result = validateBundesligaData(dataset)
    expect(result.valid).toBe(true)
    expect(result.errors).toEqual([])
    expect(result.totals.clubs).toBe(24)
    expect(result.totals.seasons).toBe(1)
  })

  it('mantém fichas históricas iniciais para os 16 clubes fundadores', () => {
    expect(bundesligaClubs).toHaveLength(16)
    expect(bundesligaClubs.every((club) => club.foundedOn && club.city && club.foundationNote && club.identity)).toBe(true)
    expect(bundesligaClubs.every((club) => club.inauguralSeason.played === 30)).toBe(true)
  })

  it('registra as 50 posições nominais da tabela de artilharia DFB consultada', () => {
    expect(inauguralSeason.topScorers).toHaveLength(50)
    expect(bundesligaPlayers).toHaveLength(50)
    expect(inauguralSeason.topScorers[0]).toMatchObject({ playerName: 'Uwe Seeler', goals: 30 })
    expect(inauguralSeason.topScorers[49]).toMatchObject({ playerName: 'Alfred Heiß', goals: 6 })
  })

  it('mantém a artilharia sincronizada com os cadastros individuais', () => {
    expect(inauguralSeason.topScorers).toHaveLength(50)
    for (const scorer of inauguralSeason.topScorers) {
      const player = bundesligaPlayers.find((entry) => entry.id === scorer.playerId)
      expect(player, `cadastro ausente: ${scorer.playerName}`).toBeDefined()
      expect(player?.name).toBe(scorer.playerName)
      expect(player?.clubs.some((club) => club.clubId === scorer.clubId)).toBe(true)
      const stats = player?.seasonStats.find((entry) =>
        entry.seasonId === inauguralSeason.id &&
        entry.competitionId === inauguralSeason.competitionId,
      )
      expect(stats?.goals).toBe(scorer.goals)
      expect(stats?.penalties ?? 0).toBe(scorer.penalties)
    }
  })

  it('documenta a partida que estabeleceu o recorde de público da temporada', () => {
    const match = bundesligaMatches.find((entry) => entry.id === '1963-09-21-hertha-koeln')
    expect(match).toMatchObject({
      date: '1963-09-21',
      round: 5,
      homeClubId: 'hertha-bsc',
      awayClubId: 'fc-koln',
      homeGoals: 0,
      awayGoals: 3,
      stadium: 'Olympiastadion',
      city: 'Berlim, Alemanha',
      attendance: 85411,
      referee: 'Josef Kandlbinder',
    })
    expect(match?.events?.map((event) => [event.minute, event.player])).toEqual([
      [2, 'Christian Müller'],
      [71, 'Hans Sturm'],
      [86, 'Christian Müller'],
    ])
    expect(inauguralSeason.statistics.recordAttendanceContext).toContain('21/09/1963')
    expect(inauguralSeason.statistics.recordAttendanceContext).toContain('85.411')
  })

  it('registra a expulsão de Helmut Rahn sem anacronismo de cartões', () => {
    const match = bundesligaMatches.find((entry) => entry.id === '1963-09-14-meidericher-hertha')
    expect(match).toMatchObject({
      date: '1963-09-14',
      round: 4,
      homeGoals: 1,
      awayGoals: 3,
      stadium: 'Wedaustadion',
      attendance: 32000,
    })
    expect(match?.events).toContainEqual({
      minute: 77,
      type: 'sending-off',
      player: 'Helmut Rahn',
      clubId: 'meidericher-sv',
    })
    const msv = bundesligaClubs.find((club) => club.id === 'meidericher-sv')
    expect(msv?.identity).toContain('foi expulso aos 77 minutos')
    expect(msv?.identity).not.toContain('cartão vermelho')
  })


  it('documenta Borussia Dortmund 3–3 TSV 1860 München com a ficha oficial do DFB', () => {
    const match = bundesligaMatches.find((entry) => entry.id === '1963-08-31-dortmund-1860')
    expect(match).toMatchObject({
      date: '1963-08-31',
      round: 2,
      homeClubId: 'borussia-dortmund',
      awayClubId: 'tsv-1860-munich',
      homeGoals: 3,
      awayGoals: 3,
      stadium: 'Stadion Rote Erde',
      attendance: 23000,
      referee: 'Edgar Deuschel',
    })
    expect(match?.events?.map((event) => [event.minute, event.player])).toEqual([
      [8, 'Hans Küppers'],
      [16, 'Willi Sturm'],
      [27, 'Gerd Cyliax'],
      [49, 'Peter Grosser'],
      [63, 'Peter Grosser'],
      [80, 'Willi Sturm'],
    ])
  })

  it('documenta Hamburger SV 4–2 1. FC Saarbrücken com a ficha oficial do DFB', () => {
    const match = bundesligaMatches.find((entry) => entry.id === '1963-08-31-hamburg-saarbruecken')
    expect(match).toMatchObject({
      date: '1963-08-31',
      round: 2,
      homeClubId: 'hamburger-sv',
      awayClubId: 'fc-saarbrucken',
      homeGoals: 4,
      awayGoals: 2,
      stadium: 'Volksparkstadion',
      attendance: 32000,
      referee: 'Günther Baumgärtel',
    })
    expect(match?.events?.map((event) => [event.minute, event.player])).toEqual([
      [29, 'Dieter Krafczyk'],
      [37, 'Dieter Krafczyk'],
      [45, 'Charly Dörfel'],
      [55, 'Charly Dörfel'],
      [70, 'Uwe Seeler'],
      [78, 'Charly Dörfel'],
    ])
  })


  it('completa a primeira rodada com oito partidas e cronologias coerentes', () => {
    const roundOne = bundesligaMatches.filter((match) => match.seasonId === '1963-64' && match.round === 1)
    expect(roundOne).toHaveLength(8)
    expect(roundOne.every((match) => match.date === '1963-08-24')).toBe(true)
    expect(new Set(roundOne.map((match) => match.id)).size).toBe(8)
    for (const match of roundOne.filter((entry) => entry.events?.length)) {
      const homeGoals = match.events?.filter((event) => event.type === 'goal' && event.clubId === match.homeClubId).length ?? 0
      const awayGoals = match.events?.filter((event) => event.type === 'goal' && event.clubId === match.awayClubId).length ?? 0
      expect(homeGoals, `gols do mandante incompatíveis: ${match.id}`).toBe(match.homeGoals)
      expect(awayGoals, `gols do visitante incompatíveis: ${match.id}`).toBe(match.awayGoals)
    }
  })


  it('completa a segunda rodada com oito partidas e cronologias coerentes', () => {
    const roundTwo = bundesligaMatches.filter((match) => match.seasonId === '1963-64' && match.round === 2)
    expect(roundTwo).toHaveLength(8)
    expect(roundTwo.every((match) => match.date === '1963-08-31')).toBe(true)
    expect(new Set(roundTwo.map((match) => match.id)).size).toBe(8)
    for (const match of roundTwo.filter((entry) => entry.events?.length)) {
      const homeGoals = match.events?.filter((event) => event.type === 'goal' && event.clubId === match.homeClubId).length ?? 0
      const awayGoals = match.events?.filter((event) => event.type === 'goal' && event.clubId === match.awayClubId).length ?? 0
      expect(homeGoals, `gols do mandante incompatíveis: ${match.id}`).toBe(match.homeGoals)
      expect(awayGoals, `gols do visitante incompatíveis: ${match.id}`).toBe(match.awayGoals)
    }
  })


  it('completa a terceira rodada com oito partidas e cronologias coerentes', () => {
    const roundThree = bundesligaMatches.filter((match) => match.seasonId === '1963-64' && match.round === 3)
    expect(roundThree).toHaveLength(8)
    expect(roundThree.every((match) => match.date === '1963-09-07')).toBe(true)
    expect(new Set(roundThree.map((match) => match.id)).size).toBe(8)
    for (const match of roundThree.filter((entry) => entry.events?.length)) {
      const homeGoals = match.events?.filter((event) => event.type === 'goal' && event.clubId === match.homeClubId).length ?? 0
      const awayGoals = match.events?.filter((event) => event.type === 'goal' && event.clubId === match.awayClubId).length ?? 0
      expect(homeGoals, `gols do mandante incompatíveis: ${match.id}`).toBe(match.homeGoals)
      expect(awayGoals, `gols do visitante incompatíveis: ${match.id}`).toBe(match.awayGoals)
    }
  })


  it('completa a quarta rodada com oito partidas e cronologias coerentes', () => {
    const roundFour = bundesligaMatches.filter((match) => match.seasonId === '1963-64' && match.round === 4)
    expect(roundFour).toHaveLength(8)
    expect(roundFour.every((match) => match.date === '1963-09-14')).toBe(true)
    expect(new Set(roundFour.map((match) => match.id)).size).toBe(8)
    for (const match of roundFour.filter((entry) => entry.events?.length)) {
      const homeGoals = match.events?.filter((event) => event.type === 'goal' && event.clubId === match.homeClubId).length ?? 0
      const awayGoals = match.events?.filter((event) => event.type === 'goal' && event.clubId === match.awayClubId).length ?? 0
      expect(homeGoals, `gols do mandante incompatíveis: ${match.id}`).toBe(match.homeGoals)
      expect(awayGoals, `gols do visitante incompatíveis: ${match.id}`).toBe(match.awayGoals)
    }
  })


  it('completa a quinta rodada com oito partidas e cronologias coerentes', () => {
    const roundFive = bundesligaMatches.filter((match) => match.seasonId === '1963-64' && match.round === 5)
    expect(roundFive).toHaveLength(8)
    expect(roundFive.every((match) => match.date === '1963-09-21')).toBe(true)
    expect(new Set(roundFive.map((match) => match.id)).size).toBe(8)
    for (const match of roundFive.filter((entry) => entry.events?.length)) {
      const homeGoals = match.events?.filter((event) => event.type === 'goal' && event.clubId === match.homeClubId).length ?? 0
      const awayGoals = match.events?.filter((event) => event.type === 'goal' && event.clubId === match.awayClubId).length ?? 0
      expect(homeGoals, `gols do mandante incompatíveis: ${match.id}`).toBe(match.homeGoals)
      expect(awayGoals, `gols do visitante incompatíveis: ${match.id}`).toBe(match.awayGoals)
    }
  })


  it('completa a sexta rodada com oito partidas e cronologias coerentes', () => {
    const roundSix = bundesligaMatches.filter((match) => match.seasonId === '1963-64' && match.round === 6)
    expect(roundSix).toHaveLength(8)
    expect(roundSix.every((match) => match.date === '1963-10-05')).toBe(true)
    expect(new Set(roundSix.map((match) => match.id)).size).toBe(8)
    for (const match of roundSix.filter((entry) => entry.events?.length)) {
      const homeGoals = match.events?.filter((event) => event.type === 'goal' && event.clubId === match.homeClubId).length ?? 0
      const awayGoals = match.events?.filter((event) => event.type === 'goal' && event.clubId === match.awayClubId).length ?? 0
      expect(homeGoals, `gols do mandante incompatíveis: ${match.id}`).toBe(match.homeGoals)
      expect(awayGoals, `gols do visitante incompatíveis: ${match.id}`).toBe(match.awayGoals)
    }
  })


  it('completa a sétima rodada com oito partidas e cronologias coerentes', () => {
    const roundSeven = bundesligaMatches.filter((match) => match.seasonId === '1963-64' && match.round === 7)
    expect(roundSeven).toHaveLength(8)
    expect(roundSeven.every((match) => match.date === '1963-10-12')).toBe(true)
    expect(new Set(roundSeven.map((match) => match.id)).size).toBe(8)
    for (const match of roundSeven.filter((entry) => entry.events?.length)) {
      const homeGoals = match.events?.filter((event) => event.type === 'goal' && event.clubId === match.homeClubId).length ?? 0
      const awayGoals = match.events?.filter((event) => event.type === 'goal' && event.clubId === match.awayClubId).length ?? 0
      expect(homeGoals, `gols do mandante incompatíveis: ${match.id}`).toBe(match.homeGoals)
      expect(awayGoals, `gols do visitante incompatíveis: ${match.id}`).toBe(match.awayGoals)
    }
  })


  it('completa a oitava rodada com oito partidas e cronologias coerentes', () => {
    const roundEight = bundesligaMatches.filter((match) => match.seasonId === '1963-64' && match.round === 8)
    expect(roundEight).toHaveLength(8)
    expect(roundEight.every((match) => match.date === '1963-10-19')).toBe(true)
    expect(new Set(roundEight.map((match) => match.id)).size).toBe(8)
    for (const match of roundEight.filter((entry) => entry.events?.length)) {
      const homeGoals = match.events?.filter((event) => event.type === 'goal' && event.clubId === match.homeClubId).length ?? 0
      const awayGoals = match.events?.filter((event) => event.type === 'goal' && event.clubId === match.awayClubId).length ?? 0
      expect(homeGoals, `gols do mandante incompatíveis: ${match.id}`).toBe(match.homeGoals)
      expect(awayGoals, `gols do visitante incompatíveis: ${match.id}`).toBe(match.awayGoals)
    }
  })


  it('completa a nona rodada com oito partidas e cronologias coerentes', () => {
    const roundNine = bundesligaMatches.filter((match) => match.seasonId === '1963-64' && match.round === 9)
    expect(roundNine).toHaveLength(8)
    expect(roundNine.every((match) => match.date === '1963-10-26')).toBe(true)
    expect(new Set(roundNine.map((match) => match.id)).size).toBe(8)
    for (const match of roundNine.filter((entry) => entry.events?.length)) {
      const homeGoals = match.events?.filter((event) => event.type === 'goal' && event.clubId === match.homeClubId).length ?? 0
      const awayGoals = match.events?.filter((event) => event.type === 'goal' && event.clubId === match.awayClubId).length ?? 0
      expect(homeGoals, `gols do mandante incompatíveis: ${match.id}`).toBe(match.homeGoals)
      expect(awayGoals, `gols do visitante incompatíveis: ${match.id}`).toBe(match.awayGoals)
    }
  })


  it('completa a décima rodada com oito partidas e cronologias coerentes', () => {
    const roundTen = bundesligaMatches.filter((match) => match.seasonId === '1963-64' && match.round === 10)
    expect(roundTen).toHaveLength(8)
    expect(roundTen.every((match) => match.date === '1963-11-09')).toBe(true)
    expect(new Set(roundTen.map((match) => match.id)).size).toBe(8)
    for (const match of roundTen.filter((entry) => entry.events?.length)) {
      const homeGoals = match.events?.filter((event) => event.type === 'goal' && event.clubId === match.homeClubId).length ?? 0
      const awayGoals = match.events?.filter((event) => event.type === 'goal' && event.clubId === match.awayClubId).length ?? 0
      expect(homeGoals, `gols do mandante incompatíveis: ${match.id}`).toBe(match.homeGoals)
      expect(awayGoals, `gols do visitante incompatíveis: ${match.id}`).toBe(match.awayGoals)
    }
  })

  it('detecta identificador de clube duplicado', () => {
    const result = validateBundesligaData({
      ...dataset,
      clubs: [...bundesligaClubs, bundesligaClubs[0]],
    })
    expect(result.valid).toBe(false)
    expect(result.errors.some((error) => error.includes('duplicado'))).toBe(true)
  })

  it('detecta pontuação incompatível com a regra histórica', () => {
    const invalidSeason = {
      ...inauguralSeason,
      standings: inauguralSeason.standings.map((row, index) =>
        index === 0 ? { ...row, points: row.points + 1 } : row,
      ),
    }
    const result = validateBundesligaData({ ...dataset, seasons: [invalidSeason] })
    expect(result.valid).toBe(false)
    expect(result.errors.some((error) => error.includes('Pontuação incompatível'))).toBe(true)
  })
  it('indexa a cobertura básica completa das cinco primeiras temporadas', () => {
    const expected = [
      { seasonId: '1963-64', matches: 240, teams: 16, goals: 857, gamesPerClub: 30 },
      { seasonId: '1964-65', matches: 240, teams: 16, goals: 796, gamesPerClub: 30 },
      { seasonId: '1965-66', matches: 306, teams: 18, goals: 987, gamesPerClub: 34 },
      { seasonId: '1966-67', matches: 306, teams: 18, goals: 895, gamesPerClub: 34 },
      { seasonId: '1967-68', matches: 306, teams: 18, goals: 993, gamesPerClub: 34 },
    ]
    expect(bundesligaMatches).toHaveLength(1398)
    expect(new Set(bundesligaMatches.map((match) => match.id)).size).toBe(1398)
    for (const item of expected) {
      const seasonMatches = bundesligaMatches.filter((match) => match.seasonId === item.seasonId)
      const teamIds = new Set(seasonMatches.flatMap((match) => [match.homeClubId, match.awayClubId]))
      const goals = seasonMatches.reduce((total, match) => total + match.homeGoals + match.awayGoals, 0)
      const appearances = new Map<string, { total: number; home: number; away: number }>()
      for (const match of seasonMatches) {
        const home = appearances.get(match.homeClubId) ?? { total: 0, home: 0, away: 0 }
        home.total += 1; home.home += 1; appearances.set(match.homeClubId, home)
        const away = appearances.get(match.awayClubId) ?? { total: 0, home: 0, away: 0 }
        away.total += 1; away.away += 1; appearances.set(match.awayClubId, away)
      }
      expect(seasonMatches).toHaveLength(item.matches)
      expect(teamIds.size).toBe(item.teams)
      expect(goals).toBe(item.goals)
      expect([...appearances.values()].every((entry) =>
        entry.total === item.gamesPerClub && entry.home === item.gamesPerClub / 2 && entry.away === item.gamesPerClub / 2,
      )).toBe(true)
    }
  })
  it('resolve todos os clubes e fontes das partidas importadas', () => {
    const clubIds = new Set([...bundesligaClubs, ...bundesligaMatchClubs].map((club) => club.id))
    const sourceIds = new Set(bundesligaSources.map((source) => source.id))
    expect(bundesligaMatchClubs).toHaveLength(8)
    expect(bundesligaMatches.every((match) =>
      clubIds.has(match.homeClubId) && clubIds.has(match.awayClubId) &&
      match.sourceIds.length >= 2 && match.sourceIds.every((sourceId) => sourceIds.has(sourceId)),
    )).toBe(true)
  })

})
