// Catálogo do Corredor das Ligas (protótipo de 06/11/2026).
// Cada liga é um "volume" na estante. O conteúdo histórico será preenchido liga a liga,
// no mesmo método da Bundesliga (Fase 1: resultados; Fase 2: detalhes), sempre com fonte.
//
// Cores: tons aproximados para a lombada. `colorBasis` indica a origem:
//  - 'marca-aproximada': tom aproximado da identidade visual da liga, ainda não conferido no manual de marca oficial;
//  - 'cores-nacionais': cores da bandeira do país, usadas até a conferência da identidade visual da liga.
// Nenhum logotipo é reproduzido; a lombada mostra só o nome e as cores.

export type Confederation = 'UEFA' | 'CONMEBOL' | 'CONCACAF' | 'AFC' | 'CAF' | 'OFC' | 'EXTINTAS'
export type LeagueVolumeStatus = 'em-escrita' | 'em-branco'
export type ColorBasis = 'marca-aproximada' | 'cores-nacionais'

export interface LeagueVolume {
  id: string
  name: string
  country: string
  confederation: Confederation
  color: string
  accent: string
  colorBasis: ColorBasis
  status: LeagueVolumeStatus
  note?: string
}

export const confederationShelves: Array<{ id: Confederation; title: string; subtitle: string }> = [
  { id: 'UEFA', title: 'Europa', subtitle: 'UEFA' },
  { id: 'CONMEBOL', title: 'América do Sul', subtitle: 'CONMEBOL' },
  { id: 'CONCACAF', title: 'Américas do Norte e Central e Caribe', subtitle: 'CONCACAF' },
  { id: 'AFC', title: 'Ásia e Austrália', subtitle: 'AFC' },
  { id: 'CAF', title: 'África', subtitle: 'CAF' },
  { id: 'OFC', title: 'Oceania', subtitle: 'OFC' },
  { id: 'EXTINTAS', title: 'Ligas extintas', subtitle: 'Arquivo histórico' },
]

type Row = [id: string, name: string, country: string, color: string, accent: string, basis?: ColorBasis]
const M: ColorBasis = 'marca-aproximada'
const N: ColorBasis = 'cores-nacionais'

const rows: Record<Confederation, Row[]> = {
  UEFA: [
    ['premier-league', 'Premier League', 'Inglaterra', '#3d195b', '#00ff85', M],
    ['laliga', 'LaLiga', 'Espanha', '#ff4b44', '#ffffff', M],
    ['serie-a', 'Serie A', 'Itália', '#1a2b5f', '#00a3e0', M],
    ['bundesliga', 'Bundesliga', 'Alemanha', '#d20515', '#ffffff', M],
    ['ligue-1', 'Ligue 1', 'França', '#0a1f44', '#e9f04a', M],
    ['eredivisie', 'Eredivisie', 'Países Baixos', '#f26b21', '#1c1c1c', M],
    ['primeira-liga', 'Primeira Liga', 'Portugal', '#1b2a4a', '#00c389', M],
    ['pro-league', 'Pro League', 'Bélgica', '#1a1a1a', '#fdda24', N],
    ['scottish-premiership', 'Scottish Premiership', 'Escócia', '#2e1a47', '#e8e2f0', M],
    ['super-lig', 'Süper Lig', 'Turquia', '#e30a17', '#ffffff', N],
    ['super-league-grecia', 'Super League', 'Grécia', '#0d5eaf', '#ffffff', N],
    ['bundesliga-austria', 'Bundesliga', 'Áustria', '#ed2939', '#ffffff', N],
    ['super-league-suica', 'Super League', 'Suíça', '#da291c', '#ffffff', N],
    ['superliga-dinamarca', 'Superliga', 'Dinamarca', '#c8102e', '#ffffff', N],
    ['allsvenskan', 'Allsvenskan', 'Suécia', '#005bac', '#fecc00', N],
    ['eliteserien', 'Eliteserien', 'Noruega', '#ba0c2f', '#00205b', N],
    ['veikkausliiga', 'Veikkausliiga', 'Finlândia', '#003580', '#ffffff', N],
    ['besta-deild', 'Besta deild', 'Islândia', '#02529c', '#dc1e35', N],
    ['league-of-ireland', 'League of Ireland', 'Irlanda', '#169b62', '#ff883e', N],
    ['nifl-premiership', 'NIFL Premiership', 'Irlanda do Norte', '#1c3f94', '#ffffff', N],
    ['cymru-premier', 'Cymru Premier', 'País de Gales', '#00b140', '#d30731', N],
    ['ekstraklasa', 'Ekstraklasa', 'Polônia', '#1f2a44', '#e4002b', M],
    ['primeira-liga-tcheca', 'Primeira Liga Tcheca', 'Tchéquia', '#11457e', '#d7141a', N],
    ['primeira-liga-eslovaca', 'Primeira Liga Eslovaca', 'Eslováquia', '#0b4ea2', '#ee1c25', N],
    ['nb-i', 'NB I', 'Hungria', '#436f4d', '#cd2a3e', N],
    ['superliga-romenia', 'SuperLiga', 'Romênia', '#002b7f', '#fcd116', N],
    ['parva-liga', 'Parva Liga', 'Bulgária', '#00966e', '#d62612', N],
    ['superliga-servia', 'SuperLiga', 'Sérvia', '#c6363c', '#0c4076', N],
    ['hnl', 'HNL', 'Croácia', '#171796', '#ff0000', N],
    ['prvaliga', 'PrvaLiga', 'Eslovênia', '#005da4', '#ed1c24', N],
    ['premijer-liga-bosnia', 'Premijer liga', 'Bósnia e Herzegovina', '#002395', '#fecb00', N],
    ['premier-league-ucrania', 'Premier League Ucraniana', 'Ucrânia', '#0057b7', '#ffd700', N],
    ['premier-league-russia', 'Premier League Russa', 'Rússia', '#0039a6', '#d52b1e', N],
    ['ligat-haal', "Ligat ha'Al", 'Israel', '#0038b8', '#ffffff', N],
    ['primeira-divisao-chipre', 'Primeira Divisão Cipriota', 'Chipre', '#d57800', '#4e5b31', N],
    ['premier-league-cazaquistao', 'Premier League Cazaque', 'Cazaquistão', '#00afca', '#fec50c', N],
  ],
  CONMEBOL: [
    ['brasileirao', 'Brasileirão Série A', 'Brasil', '#009c3b', '#ffdf00', N],
    ['liga-profesional-argentina', 'Liga Profesional', 'Argentina', '#75aadb', '#ffffff', N],
    ['primera-division-uruguai', 'Primera División', 'Uruguai', '#0038a8', '#fcd116', N],
    ['primera-division-chile', 'Primera División', 'Chile', '#d52b1e', '#0039a6', N],
    ['primera-a-colombia', 'Primera A', 'Colômbia', '#fcd116', '#003893', N],
    ['liga-1-peru', 'Liga 1', 'Peru', '#d91023', '#ffffff', N],
    ['ligapro-equador', 'LigaPro', 'Equador', '#ffd100', '#0072ce', N],
    ['primera-division-paraguai', 'Primera División', 'Paraguai', '#d52b1e', '#0038a8', N],
    ['division-profesional-bolivia', 'División Profesional', 'Bolívia', '#007934', '#f9e300', N],
    ['liga-futve', 'Liga FUTVE', 'Venezuela', '#cf142b', '#ffcc00', N],
  ],
  CONCACAF: [
    ['mls', 'Major League Soccer', 'Estados Unidos e Canadá', '#0b1c2c', '#c8102e', M],
    ['liga-mx', 'Liga MX', 'México', '#006847', '#ce1126', N],
    ['canadian-premier-league', 'Canadian Premier League', 'Canadá', '#d80621', '#ffffff', N],
    ['liga-nacional-honduras', 'Liga Nacional', 'Honduras', '#0073cf', '#ffffff', N],
    ['primera-division-costa-rica', 'Primera División', 'Costa Rica', '#002b7f', '#ce1126', N],
    ['liga-panamena', 'Liga Panameña de Fútbol', 'Panamá', '#005293', '#d21034', N],
    ['liga-nacional-guatemala', 'Liga Nacional', 'Guatemala', '#4997d0', '#ffffff', N],
    ['primera-division-el-salvador', 'Primera División', 'El Salvador', '#0f47af', '#ffffff', N],
    ['jamaica-premier-league', 'Jamaica Premier League', 'Jamaica', '#009b3a', '#fed100', N],
  ],
  AFC: [
    ['saudi-pro-league', 'Saudi Pro League', 'Arábia Saudita', '#006c35', '#ffffff', N],
    ['j1-league', 'J1 League', 'Japão', '#1a1a1a', '#e60012', M],
    ['k-league-1', 'K League 1', 'Coreia do Sul', '#0047a0', '#cd2e3a', N],
    ['chinese-super-league', 'Chinese Super League', 'China', '#de2910', '#ffde00', N],
    ['a-league-men', 'A-League Men', 'Austrália', '#00843d', '#ffcd00', N],
    ['qatar-stars-league', 'Qatar Stars League', 'Catar', '#8a1538', '#ffffff', N],
    ['uae-pro-league', 'UAE Pro League', 'Emirados Árabes Unidos', '#00732f', '#ff0000', N],
    ['persian-gulf-pro-league', 'Persian Gulf Pro League', 'Irã', '#239f40', '#da0000', N],
    ['iraq-stars-league', 'Iraq Stars League', 'Iraque', '#ce1126', '#007a3d', N],
    ['indian-super-league', 'Indian Super League', 'Índia', '#ff9933', '#138808', N],
    ['thai-league-1', 'Thai League 1', 'Tailândia', '#2d2a4a', '#a51931', N],
    ['liga-1-indonesia', 'Liga 1', 'Indonésia', '#ce1126', '#ffffff', N],
    ['malaysia-super-league', 'Malaysia Super League', 'Malásia', '#010066', '#ffcc00', N],
    ['v-league-1', 'V.League 1', 'Vietnã', '#da251d', '#ffff00', N],
    ['uzbekistan-super-league', 'Super League', 'Uzbequistão', '#0099b5', '#1eb53a', N],
  ],
  CAF: [
    ['premier-league-egito', 'Premier League Egípcia', 'Egito', '#ce1126', '#000000', N],
    ['botola-pro', 'Botola Pro', 'Marrocos', '#c1272d', '#006233', N],
    ['ligue-1-argelia', 'Ligue Professionnelle 1', 'Argélia', '#006633', '#d21034', N],
    ['ligue-1-tunisia', 'Ligue Professionnelle 1', 'Tunísia', '#e70013', '#ffffff', N],
    ['premiership-africa-do-sul', 'Premiership', 'África do Sul', '#007a4d', '#ffb612', N],
    ['npfl', 'NPFL', 'Nigéria', '#008751', '#ffffff', N],
    ['ghana-premier-league', 'Ghana Premier League', 'Gana', '#ce1126', '#fcd116', N],
    ['ligue-1-senegal', 'Ligue 1', 'Senegal', '#00853f', '#fdef42', N],
    ['ligue-1-costa-do-marfim', 'Ligue 1', 'Costa do Marfim', '#f77f00', '#009e60', N],
    ['elite-one', 'Elite One', 'Camarões', '#007a5e', '#ce1126', N],
    ['linafoot', 'Linafoot', 'RD Congo', '#007fff', '#f7d618', N],
    ['girabola', 'Girabola', 'Angola', '#cc092f', '#000000', N],
    ['mocambola', 'Moçambola', 'Moçambique', '#009739', '#fce100', N],
  ],
  OFC: [
    ['national-league-nova-zelandia', 'National League', 'Nova Zelândia', '#00247d', '#cc142b', N],
    ['premier-league-fiji', 'Premier League', 'Fiji', '#68bfe5', '#002868', N],
  ],
  EXTINTAS: [
    ['ddr-oberliga', 'DDR-Oberliga', 'Alemanha Oriental', '#1a1a1a', '#ffce00', N],
    ['campeonato-sovietico', 'Campeonato Soviético', 'União Soviética', '#cc0000', '#ffd700', N],
    ['primeira-liga-iugoslava', 'Primeira Liga Iugoslava', 'Iugoslávia', '#003893', '#de0000', N],
    ['primeira-liga-tchecoslovaca', 'Primeira Liga Tchecoslovaca', 'Tchecoslováquia', '#11457e', '#d7141a', N],
    ['nasl', 'NASL', 'Estados Unidos e Canadá', '#0a3161', '#b31942', N],
  ],
}

export const leagueVolumes: LeagueVolume[] = (Object.keys(rows) as Confederation[]).flatMap((confederation) =>
  rows[confederation].map(([id, name, country, color, accent, basis]) => ({
    id, name, country, confederation, color, accent,
    colorBasis: basis ?? N,
    status: id === 'bundesliga' ? 'em-escrita' : 'em-branco',
    note: id === 'bundesliga'
      ? 'Resultados de todas as partidas de 1963/64 a 2026/27 (Fase 1) e gols, estádio e público de 2009/10 em diante (Fase 2).'
      : undefined,
  })),
)
