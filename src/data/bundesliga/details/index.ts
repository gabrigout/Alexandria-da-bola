import type { BundesligaMatchDetail } from '../types'
export { bundesligaDetailCoverage } from './coverage'

const loaders: Record<string, () => Promise<BundesligaMatchDetail[]>> = {
  '2009-10': () => import('./2009-10').then((module) => module.details2009_10),
  '2010-11': () => import('./2010-11').then((module) => module.details2010_11),
  '2011-12': () => import('./2011-12').then((module) => module.details2011_12),
  '2012-13': () => import('./2012-13').then((module) => module.details2012_13),
  '2013-14': () => import('./2013-14').then((module) => module.details2013_14),
  '2014-15': () => import('./2014-15').then((module) => module.details2014_15),
  '2015-16': () => import('./2015-16').then((module) => module.details2015_16),
  '2016-17': () => import('./2016-17').then((module) => module.details2016_17),
  '2017-18': () => import('./2017-18').then((module) => module.details2017_18),
  '2018-19': () => import('./2018-19').then((module) => module.details2018_19),
  '2019-20': () => import('./2019-20').then((module) => module.details2019_20),
  '2020-21': () => import('./2020-21').then((module) => module.details2020_21),
  '2021-22': () => import('./2021-22').then((module) => module.details2021_22),
  '2022-23': () => import('./2022-23').then((module) => module.details2022_23),
  '2023-24': () => import('./2023-24').then((module) => module.details2023_24),
  '2024-25': () => import('./2024-25').then((module) => module.details2024_25),
  '2025-26': () => import('./2025-26').then((module) => module.details2025_26),
  '2026-27': () => import('./2026-27').then((module) => module.details2026_27),
}

export const detailSeasonIds = Object.keys(loaders)

/** Carrega sob demanda os detalhes (Fase 2) de uma temporada. Retorna lista vazia quando a temporada não tem camada de detalhes. */
export async function loadSeasonDetails(seasonId: string): Promise<BundesligaMatchDetail[]> {
  const load = loaders[seasonId]
  return load ? load() : []
}
