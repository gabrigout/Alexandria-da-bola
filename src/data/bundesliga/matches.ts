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
import { matches1973_74 } from './matches/1973-74'
import { matches1974_75 } from './matches/1974-75'
import { matches1975_76 } from './matches/1975-76'
import { matches1976_77 } from './matches/1976-77'
import { matches1977_78 } from './matches/1977-78'
import { matches1978_79 } from './matches/1978-79'
import { matches1979_80 } from './matches/1979-80'
import { matches1980_81 } from './matches/1980-81'
import { matches1981_82 } from './matches/1981-82'
import { matches1982_83 } from './matches/1982-83'
import { matches1983_84 } from './matches/1983-84'
import { matches1984_85 } from './matches/1984-85'
import { matches1985_86 } from './matches/1985-86'
import { matches1986_87 } from './matches/1986-87'
import { matches1987_88 } from './matches/1987-88'
import { matches1988_89 } from './matches/1988-89'
import { matches1989_90 } from './matches/1989-90'
import { matches1990_91 } from './matches/1990-91'
import { matches1991_92 } from './matches/1991-92'
import { matches1992_93 } from './matches/1992-93'
import { matches1993_94 } from './matches/1993-94'
import { matches1994_95 } from './matches/1994-95'
import { matches1995_96 } from './matches/1995-96'
import { matches1996_97 } from './matches/1996-97'
import { matches1997_98 } from './matches/1997-98'
import { matches1998_99 } from './matches/1998-99'
import { matches1999_00 } from './matches/1999-00'
import { matches2000_01 } from './matches/2000-01'
import { matches2001_02 } from './matches/2001-02'
import { matches2002_03 } from './matches/2002-03'
import { matches2003_04 } from './matches/2003-04'
import { matches2004_05 } from './matches/2004-05'
import { matches2005_06 } from './matches/2005-06'
import { matches2006_07 } from './matches/2006-07'
import { matches2007_08 } from './matches/2007-08'
import { matches2008_09 } from './matches/2008-09'
import { matches2009_10 } from './matches/2009-10'
import { matches2010_11 } from './matches/2010-11'
import { matches2011_12 } from './matches/2011-12'
import { matches2012_13 } from './matches/2012-13'
import { matches2013_14 } from './matches/2013-14'
import { matches2014_15 } from './matches/2014-15'
import { matches2015_16 } from './matches/2015-16'
import { matches2016_17 } from './matches/2016-17'
import { matches2017_18 } from './matches/2017-18'
import { matches2018_19 } from './matches/2018-19'
import { matches2019_20 } from './matches/2019-20'
import { matches2020_21 } from './matches/2020-21'
import { matches2021_22 } from './matches/2021-22'
import { matches2022_23 } from './matches/2022-23'
import { matches2023_24 } from './matches/2023-24'
import { matches2024_25 } from './matches/2024-25'
import { matches2025_26 } from './matches/2025-26'
import { matches2026_27 } from './matches/2026-27'

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
  ...matches1973_74,
  ...matches1974_75,
  ...matches1975_76,
  ...matches1976_77,
  ...matches1977_78,
  ...matches1978_79,
  ...matches1979_80,
  ...matches1980_81,
  ...matches1981_82,
  ...matches1982_83,
  ...matches1983_84,
  ...matches1984_85,
  ...matches1985_86,
  ...matches1986_87,
  ...matches1987_88,
  ...matches1988_89,
  ...matches1989_90,
  ...matches1990_91,
  ...matches1991_92,
  ...matches1992_93,
  ...matches1993_94,
  ...matches1994_95,
  ...matches1995_96,
  ...matches1996_97,
  ...matches1997_98,
  ...matches1998_99,
  ...matches1999_00,
  ...matches2000_01,
  ...matches2001_02,
  ...matches2002_03,
  ...matches2003_04,
  ...matches2004_05,
  ...matches2005_06,
  ...matches2006_07,
  ...matches2007_08,
  ...matches2008_09,
  ...matches2009_10,
  ...matches2010_11,
  ...matches2011_12,
  ...matches2012_13,
  ...matches2013_14,
  ...matches2014_15,
  ...matches2015_16,
  ...matches2016_17,
  ...matches2017_18,
  ...matches2018_19,
  ...matches2019_20,
  ...matches2020_21,
  ...matches2021_22,
  ...matches2022_23,
  ...matches2023_24,
  ...matches2024_25,
  ...matches2025_26,
  ...matches2026_27,
].sort((a, b) =>
  a.seasonId.localeCompare(b.seasonId) ||
  a.date.localeCompare(b.date) ||
  a.round - b.round ||
  a.id.localeCompare(b.id),
)
