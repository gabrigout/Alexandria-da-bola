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
