import type { BundesligaSource, BundesligaSourceNote } from './types'
export const bundesligaSources: BundesligaSource[] = [
{id:'dfb-inaugural-season',title:'Saison 1963/1964: Wie alles begann',publisher:'Deutscher Fußball-Bund (DFB)',url:'https://www.dfb.de/news/detail/saison-19631964-wie-alles-begann-35097',type:'historia-oficial',notes:'Início, seleção dos 16 clubes, regras, recordes, campeão, rebaixados e artilheiro.'},
{id:'dfb-season-table-1963-64',title:'Bundesliga 1963/64 — 30. Spieltag',publisher:'DFB Datencenter',url:'https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/current',type:'base-oficial',notes:'Classificação final e estatísticas dos clubes.'},
{id:'dfb-top-scorers-1963-64',title:'Bundesliga 1963/64 — alle Torjäger',publisher:'DFB Datencenter',url:'https://datencenter.dfb.de/competitions/bundesliga/seasons/1963-1964/top_scorer?datacenter_name=datacenter',type:'estatistica-oficial',notes:'Artilharia, gols e gols de pênalti.'},
{id:'rsssf-germany-1963-64',title:'Germany 1963/64',publisher:'RSSSF',url:'https://www.rsssf.org/tablesd/duit64.html',type:'base-independente',notes:'Conferência independente; diverge do DFB nas posições 10 e 11.'},
{id:'dfb-pokal-final-1963-64',title:'DFB-Pokal 1963/64 — Final',publisher:'DFB Datencenter',url:'https://datencenter.dfb.de/datencenter/dfb-pokal/1963-1964/finale/tsv-1860-muenchen-eintracht-frankfurt-562756',type:'registro-oficial',notes:'Final, placar, estádio, público e gols.'},
{id:'dfb-uwe-seeler-profile',title:'Uwe Seeler — perfil de jogador',publisher:'DFB Datencenter',url:'https://datencenter.dfb.de/personen/uwe-seeler/spieler',type:'perfil-oficial',notes:'Carreira, prêmios e artilharia.'}
];
export const bundesligaSourceNotes: BundesligaSourceNote[] = [
{id:'rsssf-vs-dfb-positions-10-11',severity:'divergencia',subject:'Classificação 1963/64: posições 10 e 11',adoptedSourceId:'dfb-season-table-1963-64',note:'O DFB coloca Werder Bremen em 10º e Eintracht Braunschweig em 11º. A RSSSF inverte a ordem. A Alexandria adota a tabela oficial do DFB e preserva a divergência.'},
{id:'historical-goal-quotient',severity:'criterio-historico',subject:'Desempate por quociente de gols',adoptedSourceId:'dfb-inaugural-season',note:'Em 1963/64 o critério de desempate era o quociente de gols, não o saldo de gols moderno.'}
];