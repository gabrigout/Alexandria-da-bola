import type { BundesligaMatch } from './types'
import { matches1963_64 } from './matches-1963-64'
import { matches1964_65 } from './matches/1964-65'
import { matches1965_66 } from './matches/1965-66'
import { matches1966_67 } from './matches/1966-67'
import { matches1967_68 } from './matches/1967-68'

export const bundesligaMatches: BundesligaMatch[] = [
  ...matches1963_64,
  ...matches1964_65,
  ...matches1965_66,
  ...matches1966_67,
  ...matches1967_68,
].sort((a, b) =>
  a.seasonId.localeCompare(b.seasonId) ||
  a.date.localeCompare(b.date) ||
  a.round - b.round ||
  a.id.localeCompare(b.id),
)
