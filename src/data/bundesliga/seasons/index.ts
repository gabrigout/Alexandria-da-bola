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
    const phase2 = inaugural
      ? ' Fase 2: só as fichas documentadas à mão; nas demais partidas, registro de gols, estádio e público não encontrado.'
      : startYear <= 2008
        ? ' Fase 2: registro de gols, estádio e público não encontrado nas fontes abertas consultadas.'
        : ' Fase 2: gols com autor e minuto, estádio e público registrados quando a fonte informa; o restante consta como registro não encontrado.'
    return {
      id, label: startYear + '/' + String(endYear).slice(-2), startYear, endYear,
      status: inaugural ? 'documentada' : current ? 'em-andamento' : 'pendente',
      hasDetailedRecord: inaugural, updatePolicy: 'revisao-ao-final-da-temporada', note: note + phase2,
    }
  },
)

export const bundesligaCurrentSeasonId = '2026-27'
