import { describe, expect, it } from 'vitest'
import {
  bundesligaAwards,
  bundesligaClubs,
  bundesligaCoaches,
  bundesligaMatches,
  bundesligaPlayers,
  bundesligaSources,
  inauguralSeason,
  validateBundesligaData,
} from './index'

const dataset = {
  clubs: bundesligaClubs,
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
    expect(result.totals.clubs).toBe(16)
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
})
