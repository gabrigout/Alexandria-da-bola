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
  bundesligaSourceNotes,
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
    expect(result.totals.clubs).toBe(59)
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
    const firstFiveMatches = bundesligaMatches.filter((match) => Number(match.seasonId.slice(0, 4)) <= 1967)
    expect(firstFiveMatches).toHaveLength(1398)
    expect(new Set(firstFiveMatches.map((match) => match.id)).size).toBe(1398)
    for (const item of expected) {
      const seasonMatches = firstFiveMatches.filter((match) => match.seasonId === item.seasonId)
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
    expect(bundesligaMatchClubs).toHaveLength(43)
    expect(bundesligaMatches.every((match) =>
      clubIds.has(match.homeClubId) && clubIds.has(match.awayClubId) &&
      match.sourceIds.length >= 2 && match.sourceIds.every((sourceId) => sourceIds.has(sourceId)),
    )).toBe(true)
  })

  it('indexa a cobertura básica completa do segundo bloco de cinco temporadas', () => {
    const expected = [
      { seasonId: '1968-69', matches: 306, teams: 18, goals: 873 },
      { seasonId: '1969-70', matches: 306, teams: 18, goals: 951 },
      { seasonId: '1970-71', matches: 306, teams: 18, goals: 926 },
      { seasonId: '1971-72', matches: 306, teams: 18, goals: 1006 },
      { seasonId: '1972-73', matches: 306, teams: 18, goals: 1045 },
    ]
    const secondFiveMatches = bundesligaMatches.filter((match) => {
      const startYear = Number(match.seasonId.slice(0, 4))
      return startYear >= 1968 && startYear <= 1972
    })

    expect(secondFiveMatches).toHaveLength(1530)
    expect(new Set(secondFiveMatches.map((match) => match.id)).size).toBe(1530)
    expect(bundesligaMatches).toHaveLength(19292)
    expect(new Set(bundesligaMatches.map((match) => match.id)).size).toBe(19292)

    for (const item of expected) {
      const seasonMatches = secondFiveMatches.filter((match) => match.seasonId === item.seasonId)
      const teamIds = new Set(seasonMatches.flatMap((match) => [match.homeClubId, match.awayClubId]))
      const roundIds = new Set(seasonMatches.map((match) => match.round))
      const goals = seasonMatches.reduce((total, match) => total + match.homeGoals + match.awayGoals, 0)

      expect(seasonMatches).toHaveLength(item.matches)
      expect(teamIds.size).toBe(item.teams)
      expect(roundIds.size).toBe(34)
      expect(goals).toBe(item.goals)

      for (const clubId of teamIds) {
        expect(seasonMatches.filter((match) => match.homeClubId === clubId)).toHaveLength(17)
        expect(seasonMatches.filter((match) => match.awayClubId === clubId)).toHaveLength(17)
      }
    }
  })

  it('indexa a cobertura básica completa de 1973/74 a 2025/26', () => {
    const expected = [
      { seasonId: '1973-74', matches: 306, teams: 18, rounds: 34, goals: 1085 },
      { seasonId: '1974-75', matches: 306, teams: 18, rounds: 34, goals: 1056 },
      { seasonId: '1975-76', matches: 306, teams: 18, rounds: 34, goals: 1009 },
      { seasonId: '1976-77', matches: 306, teams: 18, rounds: 34, goals: 1084 },
      { seasonId: '1977-78', matches: 306, teams: 18, rounds: 34, goals: 1014 },
      { seasonId: '1978-79', matches: 306, teams: 18, rounds: 34, goals: 963 },
      { seasonId: '1979-80', matches: 306, teams: 18, rounds: 34, goals: 1023 },
      { seasonId: '1980-81', matches: 306, teams: 18, rounds: 34, goals: 1039 },
      { seasonId: '1981-82', matches: 306, teams: 18, rounds: 34, goals: 1081 },
      { seasonId: '1982-83', matches: 306, teams: 18, rounds: 34, goals: 1036 },
      { seasonId: '1983-84', matches: 306, teams: 18, rounds: 34, goals: 1097 },
      { seasonId: '1984-85', matches: 306, teams: 18, rounds: 34, goals: 1074 },
      { seasonId: '1985-86', matches: 306, teams: 18, rounds: 34, goals: 992 },
      { seasonId: '1986-87', matches: 306, teams: 18, rounds: 34, goals: 990 },
      { seasonId: '1987-88', matches: 306, teams: 18, rounds: 34, goals: 962 },
      { seasonId: '1988-89', matches: 306, teams: 18, rounds: 34, goals: 852 },
      { seasonId: '1989-90', matches: 306, teams: 18, rounds: 34, goals: 790 },
      { seasonId: '1990-91', matches: 306, teams: 18, rounds: 34, goals: 886 },
      { seasonId: '1991-92', matches: 380, teams: 20, rounds: 38, goals: 994 },
      { seasonId: '1992-93', matches: 306, teams: 18, rounds: 34, goals: 893 },
      { seasonId: '1993-94', matches: 306, teams: 18, rounds: 34, goals: 895 },
      { seasonId: '1994-95', matches: 306, teams: 18, rounds: 34, goals: 918 },
      { seasonId: '1995-96', matches: 306, teams: 18, rounds: 34, goals: 831 },
      { seasonId: '1996-97', matches: 306, teams: 18, rounds: 34, goals: 911 },
      { seasonId: '1997-98', matches: 306, teams: 18, rounds: 34, goals: 883 },
      { seasonId: '1998-99', matches: 306, teams: 18, rounds: 34, goals: 866 },
      { seasonId: '1999-00', matches: 306, teams: 18, rounds: 34, goals: 885 },
      { seasonId: '2000-01', matches: 306, teams: 18, rounds: 34, goals: 897 },
      { seasonId: '2001-02', matches: 306, teams: 18, rounds: 34, goals: 893 },
      { seasonId: '2002-03', matches: 306, teams: 18, rounds: 34, goals: 821 },
      { seasonId: '2003-04', matches: 306, teams: 18, rounds: 34, goals: 909 },
      { seasonId: '2004-05', matches: 306, teams: 18, rounds: 34, goals: 890 },
      { seasonId: '2005-06', matches: 306, teams: 18, rounds: 34, goals: 861 },
      { seasonId: '2006-07', matches: 306, teams: 18, rounds: 34, goals: 837 },
      { seasonId: '2007-08', matches: 306, teams: 18, rounds: 34, goals: 860 },
      { seasonId: '2008-09', matches: 306, teams: 18, rounds: 34, goals: 894 },
      { seasonId: '2009-10', matches: 306, teams: 18, rounds: 34, goals: 866 },
      { seasonId: '2010-11', matches: 306, teams: 18, rounds: 34, goals: 894 },
      { seasonId: '2011-12', matches: 306, teams: 18, rounds: 34, goals: 875 },
      { seasonId: '2012-13', matches: 306, teams: 18, rounds: 34, goals: 898 },
      { seasonId: '2013-14', matches: 306, teams: 18, rounds: 34, goals: 967 },
      { seasonId: '2014-15', matches: 306, teams: 18, rounds: 34, goals: 843 },
      { seasonId: '2015-16', matches: 306, teams: 18, rounds: 34, goals: 866 },
      { seasonId: '2016-17', matches: 306, teams: 18, rounds: 34, goals: 877 },
      { seasonId: '2017-18', matches: 306, teams: 18, rounds: 34, goals: 855 },
      { seasonId: '2018-19', matches: 306, teams: 18, rounds: 34, goals: 973 },
      { seasonId: '2019-20', matches: 306, teams: 18, rounds: 34, goals: 982 },
      { seasonId: '2020-21', matches: 306, teams: 18, rounds: 34, goals: 928 },
      { seasonId: '2021-22', matches: 306, teams: 18, rounds: 34, goals: 954 },
      { seasonId: '2022-23', matches: 306, teams: 18, rounds: 34, goals: 971 },
      { seasonId: '2023-24', matches: 306, teams: 18, rounds: 34, goals: 985 },
      { seasonId: '2024-25', matches: 306, teams: 18, rounds: 34, goals: 959 },
      { seasonId: '2025-26', matches: 306, teams: 18, rounds: 34, goals: 990 },
    ]
    for (const item of expected) {
      const seasonMatches = bundesligaMatches.filter((match) => match.seasonId === item.seasonId)
      const teamIds = new Set(seasonMatches.flatMap((match) => [match.homeClubId, match.awayClubId]))
      const roundIds = new Set(seasonMatches.map((match) => match.round))
      const goals = seasonMatches.reduce((total, match) => total + match.homeGoals + match.awayGoals, 0)
      expect(seasonMatches, `partidas ${item.seasonId}`).toHaveLength(item.matches)
      expect(teamIds.size, `clubes ${item.seasonId}`).toBe(item.teams)
      expect(roundIds.size, `rodadas ${item.seasonId}`).toBe(item.rounds)
      expect(item.matches).toBe(item.teams * (item.teams - 1))
      expect(item.rounds).toBe(2 * (item.teams - 1))
      expect(goals, `gols ${item.seasonId}`).toBe(item.goals)
      for (const clubId of teamIds) {
        expect(seasonMatches.filter((match) => match.homeClubId === clubId), `casa ${item.seasonId} ${clubId}`).toHaveLength(item.teams - 1)
        expect(seasonMatches.filter((match) => match.awayClubId === clubId), `fora ${item.seasonId} ${clubId}`).toHaveLength(item.teams - 1)
      }
      const perRound = new Map<number, number>()
      for (const match of seasonMatches) perRound.set(match.round, (perRound.get(match.round) ?? 0) + 1)
      expect([...perRound.values()].every((count) => count === item.teams / 2), `jogos por rodada ${item.seasonId}`).toBe(true)
    }
  })

  it('cobre 1963/64 a 2025/26 sem lacunas e com 19.292 partidas contando a temporada em andamento', () => {
    const seasons = new Set(bundesligaMatches.map((match) => match.seasonId))
    for (let year = 1963; year <= 2026; year += 1) {
      expect(seasons.has(`${year}-${String((year + 1) % 100).padStart(2, '0')}`), `temporada ausente: ${year}`).toBe(true)
    }
    expect(bundesligaMatches.reduce((total, match) => total + match.homeGoals + match.awayGoals, 0)).toBe(59235)
  })

  it('mantém dedução de pontos separada dos resultados em campo (1999/2000 e 2003/04)', () => {
    const points = (seasonId: string, clubId: string) => {
      let total = 0
      for (const match of bundesligaMatches.filter((entry) => entry.seasonId === seasonId)) {
        if (match.homeClubId === clubId) total += match.homeGoals > match.awayGoals ? 3 : match.homeGoals === match.awayGoals ? 1 : 0
        if (match.awayClubId === clubId) total += match.awayGoals > match.homeGoals ? 3 : match.homeGoals === match.awayGoals ? 1 : 0
      }
      return total
    }
    expect(points('1999-00', 'eintracht-frankfurt')).toBe(41)
    expect(points('2003-04', 'fc-kaiserslautern')).toBe(39)
    const ids = bundesligaSourceNotes.map((note) => note.id)
    expect(ids).toContain('eintracht-frankfurt-points-deduction-1999-00')
    expect(ids).toContain('kaiserslautern-points-deduction-2003-04')
    expect(ids).toContain('union-berlin-bochum-awarded-2024-25')
  })

  it('registra a temporada 2026/27 como parcial: rodadas 1 a 8 e classificação igual à tabela independente de 05/11/2026', () => {
    const season = bundesligaMatches.filter((match) => match.seasonId === '2026-27')
    expect(season).toHaveLength(72)
    expect(new Set(season.map((match) => match.round))).toEqual(new Set([1, 2, 3, 4, 5, 6, 7, 8]))
    for (let round = 1; round <= 8; round += 1) expect(season.filter((match) => match.round === round)).toHaveLength(9)
    expect(season.every((match) => match.date <= '2026-11-06')).toBe(true)
    expect(season.reduce((total, match) => total + match.homeGoals + match.awayGoals, 0)).toBe(252)
    const table = new Map<string, { w: number; d: number; l: number; gf: number; ga: number }>()
    for (const match of season) {
      for (const [clubId, gf, ga] of [[match.homeClubId, match.homeGoals, match.awayGoals], [match.awayClubId, match.awayGoals, match.homeGoals]] as const) {
        const row = table.get(clubId) ?? { w: 0, d: 0, l: 0, gf: 0, ga: 0 }
        row.gf += gf; row.ga += ga
        if (gf > ga) row.w += 1; else if (gf === ga) row.d += 1; else row.l += 1
        table.set(clubId, row)
      }
    }
    const expected: Array<[string, number, number, number, number, number]> = [
      ['bayern-munich', 5, 3, 0, 27, 8], ['borussia-dortmund', 5, 3, 0, 14, 6], ['sc-freiburg', 5, 1, 2, 18, 10],
      ['rb-leipzig', 5, 0, 3, 22, 11], ['werder-bremen', 4, 3, 1, 17, 14], ['bayer-leverkusen', 4, 1, 3, 18, 16],
      ['sv-elversberg', 4, 1, 3, 16, 16], ['eintracht-frankfurt', 3, 2, 3, 13, 18], ['fsv-mainz-05', 3, 1, 4, 17, 17],
      ['fc-augsburg', 2, 3, 3, 18, 15], ['vfb-stuttgart', 3, 0, 5, 14, 15], ['tsg-hoffenheim', 3, 0, 5, 14, 16],
      ['fc-koln', 2, 3, 3, 9, 12], ['sc-paderborn-07', 2, 3, 3, 6, 9], ['hamburger-sv', 3, 0, 5, 7, 19],
      ['union-berlin', 1, 4, 3, 7, 19], ['schalke-04', 1, 3, 4, 4, 9], ['borussia-monchengladbach', 1, 1, 6, 11, 22],
    ]
    expect(table.size).toBe(18)
    for (const [clubId, w, d, l, gf, ga] of expected) {
      expect(table.get(clubId), `classificação 2026/27: ${clubId}`).toEqual({ w, d, l, gf, ga })
    }
  })

})
