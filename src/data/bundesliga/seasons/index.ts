import type { BundesligaSeasonIndexEntry } from '../types'

export const bundesligaSeasonIndex: BundesligaSeasonIndexEntry[] = Array.from(
  { length: 64 },
  (_, index): BundesligaSeasonIndexEntry => {
    const startYear = 1963 + index
    const endYear = startYear + 1
    const id = String(startYear) + '-' + String(endYear).slice(-2)
    const inaugural = id === '1963-64'
    const current = id === '2026-27'
    const basicCoverage = startYear >= 1963 && startYear <= 2025
    const note = inaugural
      ? 'Classificação e artilharia documentadas; resultados básicos das 240 partidas indexados. Fichas individuais e enriquecimento de eventos ainda são parciais.'
      : basicCoverage
        ? 'Resultados básicos de todas as partidas indexados; classificação, artilharia e dossiê editorial ainda aguardam auditoria.'
        : current
          ? 'Temporada em andamento. Cobertura básica parcial: 72 partidas encerradas (rodadas 1 a 8, até 01/11/2026), data de corte 06/11/2026; consolidar ficha completa ao fim da edição.'
          : 'Temporada ainda não pesquisada e validada.'
    return {
      id, label: startYear + '/' + String(endYear).slice(-2), startYear, endYear,
      status: inaugural ? 'documentada' : current ? 'em-andamento' : 'pendente',
      hasDetailedRecord: inaugural, updatePolicy: 'revisao-ao-final-da-temporada', note,
    }
  },
)

export const bundesligaCurrentSeasonId = '2026-27'
