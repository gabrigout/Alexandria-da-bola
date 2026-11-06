import type { BundesligaMatch } from './types'
import { matches1963_64 } from './matches-1963-64'
import { matches1964_65 } from './matches/1964-65'
import { matches1965_66 } from './matches/1965-66'
import { matches1966_67 } from './matches/1966-67'
import { matches1967_68 } from './matches/1967-68'
import { matches1968_69 } from './matches/1968-69'
import { matches1969_70 } from './matches/1969-70'
import { matches1970_71 } from './matches/1970-71'
import { matches1971_72 } from './matches/1971-72'
import { matches1972_73 } from './matches/1972-73'

export const bundesligaMatches: BundesligaMatch[] = [
  ...matches1963_64,
  ...matches1964_65,
  ...matches1965_66,
  ...matches1966_67,
  ...matches1967_68,
  ...matches1968_69,
  ...matches1969_70,
  ...matches1970_71,
  ...matches1971_72,
  ...matches1972_73,
].sort((a, b) =>
  a.seasonId.localeCompare(b.seasonId) ||
  a.date.localeCompare(b.date) ||
  a.round - b.round ||
  a.id.localeCompare(b.id),
)
