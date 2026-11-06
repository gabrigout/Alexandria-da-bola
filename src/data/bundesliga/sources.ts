import type { BundesligaSource, BundesligaSourceNote } from './types'

export const bundesligaSources: BundesligaSource[] = [
  {
    "id": "dfb-inaugural-season",
    "title": "Saison 1963/1964: Wie alles begann",
    "publisher": "Deutscher Fußball-Bund (DFB)",
    "url": "https://www.dfb.de/news/detail/saison-19631964-wie-alles-begann-35097",
    "type": "historia-oficial",
    "notes": "Seleção dos 16 clubes, regras, estreia, público, campeão e artilharia."
  },
  {
    "id": "dfb-season-table-1963-64",
    "title": "Bundesliga 1963/64 — 30. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/current",
    "type": "base-oficial",
    "notes": "Classificação final e estatísticas dos 16 participantes."
  },
  {
    "id": "dfb-founders-list-1963-64",
    "title": "Saison 1963/1964 — Vereine",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/competitions/bundesliga/seasons/1963-1964/teams?datacenter_name=datacenter",
    "type": "lista-oficial",
    "notes": "Lista dos 16 participantes da edição inaugural."
  },
  {
    "id": "dfb-top-scorers-1963-64",
    "title": "Bundesliga 1963/64 — alle Torjäger",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/competitions/bundesliga/seasons/1963-1964/top_scorer?datacenter_name=datacenter",
    "type": "estatistica-oficial",
    "notes": "50 posições nominais na captura consultada, do artilheiro até jogadores com seis gols; consulta datada de 22/04/2026."
  },
  {
    "id": "rsssf-germany-1963-64",
    "title": "Germany 1963/64",
    "publisher": "RSSSF",
    "url": "https://www.rsssf.org/tablesd/duit64.html",
    "type": "base-independente",
    "notes": "Resultados e conferência independente da tabela final."
  },
  {
    "id": "dfb-pokal-final-1963-64",
    "title": "DFB-Pokal 1963/64 — Final",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/dfb-pokal/1963-1964/finale/tsv-1860-muenchen-eintracht-frankfurt-562756",
    "type": "registro-oficial",
    "notes": "Final, estádio, público e gols."
  },
  {
    "id": "fc-koln-history",
    "title": "Clubgeschichte — 1. FC Köln",
    "publisher": "1. FC Köln",
    "url": "https://fc.de/club/ueber-den-fc/historie-und-erfolge/clubgeschichte",
    "type": "historia-clube",
    "notes": "Fundação em 13/02/1948 pela união do Kölner BC 01 e Sülz 07."
  },
  {
    "id": "msv-duisburg-dfb-profile",
    "title": "MSV Duisburg — perfil de clube",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/clubs/msv-02-e-v-duisburg",
    "type": "perfil-oficial",
    "notes": "Fundação em 17/09/1902, cidade, cores e participações."
  },
  {
    "id": "eintracht-frankfurt-history",
    "title": "Chronik 1899–1920",
    "publisher": "Eintracht Frankfurt Historie & Museum",
    "url": "https://museum.eintracht.de/chronik/1899-1920/",
    "type": "historia-clube",
    "notes": "Origem em 08/03/1899 como Frankfurter Fußball-Klub Victoria e fusões."
  },
  {
    "id": "borussia-dortmund-history",
    "title": "1909 — Die Gründerjahre",
    "publisher": "Borussia Dortmund",
    "url": "https://www.bvb.de/de/de/der-bvb/die-bvb-historie/jahrzehnte/1909-die-gruenderjahre.html",
    "type": "historia-clube",
    "notes": "Fundação em 19/12/1909 e primeiro jogo oficial."
  },
  {
    "id": "vfb-stuttgart-history",
    "title": "Gedenktafel — Gründung des FV Stuttgart 1893",
    "publisher": "SportRegion Stuttgart",
    "url": "https://www.sportregion-stuttgart.de/kommunikation/details/news/gedenktafel-vfb-geburtstagsfeier-an-historischer-staette",
    "type": "historia-regional",
    "notes": "Fundação do FV Stuttgart 1893 em 09/09/1893."
  },
  {
    "id": "hsv-history",
    "title": "Die Geschichte des HSV",
    "publisher": "Hamburger SV",
    "url": "https://www.hsv.de/unser-hsv/historie/die-geschichte-des-hsv",
    "type": "historia-clube",
    "notes": "Predecessor SC Germania (1887), fusões em 1919 e adoção do ano 1887."
  },
  {
    "id": "tsv1860-history",
    "title": "Historie — TSV München von 1860",
    "publisher": "TSV München von 1860",
    "url": "https://tsv1860.org/historie.html",
    "type": "historia-clube",
    "notes": "Origem da associação em 1860; história das seções esportivas."
  },
  {
    "id": "schalke-history",
    "title": "FAQ — Warum heißt der Verein Schalke 04?",
    "publisher": "FC Schalke 04",
    "url": "https://schalke04.de/f-a-q/",
    "type": "historia-clube",
    "notes": "Fundação como Westfalia Schalke em 04/05/1904."
  },
  {
    "id": "nuernberg-dfb-profile",
    "title": "1. FC Nürnberg — Vereinsprofil",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/vereine/1-fc-nuernberg-e-v",
    "type": "perfil-oficial",
    "notes": "Fundação em 04/05/1900, cidade e cores."
  },
  {
    "id": "werder-history",
    "title": "Gründung am 04. Februar 1899",
    "publisher": "SV Werder Bremen",
    "url": "https://www.werder.de/news/weitere-news/2025-2026/infotafel-buergerpark-13102025",
    "type": "historia-clube",
    "notes": "O clube reconhece a fundação em 04/02/1899, no Stadtwerder."
  },
  {
    "id": "braunschweig-history",
    "title": "Gründung — Eintracht Braunschweig",
    "publisher": "Eintracht Braunschweig",
    "url": "https://www.eintracht.com/eintracht/chronik/gruendung",
    "type": "historia-clube",
    "notes": "Fundação em 15/12/1895 como futebol e críquete."
  },
  {
    "id": "kaiserslautern-dfb-profile",
    "title": "1. FC Kaiserslautern — Vereinsprofil",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/clubs/1-fc-kaiserslautern-e-v",
    "type": "perfil-oficial",
    "notes": "Fundação em 02/06/1900, cidade e cores."
  },
  {
    "id": "ksc-history",
    "title": "Chronik des Karlsruher SC",
    "publisher": "Karlsruher SC",
    "url": "https://www.ksc.de/club/allgemein/chronik",
    "type": "historia-clube",
    "notes": "Fusão que criou o KSC em 16/10/1952 e a origem de Phönix."
  },
  {
    "id": "hertha-history",
    "title": "Satzung Hertha BSC",
    "publisher": "Hertha BSC",
    "url": "https://content.herthabsc.com/site/binaries/content/assets/mitglieder/herthabsc_satzung-151225.pdf",
    "type": "documento-oficial",
    "notes": "Estatuto registra fundação em 25/07/1892 e cores azul e branco."
  },
  {
    "id": "preussen-history",
    "title": "Vereinsgeschichte — SC Preußen Münster",
    "publisher": "SC Preußen Münster",
    "url": "https://scpreussen-muenster.de/verein/e-v/historie/",
    "type": "historia-clube",
    "notes": "Fundação em 30/04/1906 por estudantes."
  },
  {
    "id": "saarbruecken-history",
    "title": "Portrait und Chronik — 1. FC Saarbrücken",
    "publisher": "1. FC Saarbrücken",
    "url": "https://www.fc-saarbruecken.de/verein/chronik/",
    "type": "historia-clube",
    "notes": "Fundação em 18/04/1903 como departamento de futebol do TV Malstatt."
  },
  {
    "id": "dfb-uwe-seeler-profile",
    "title": "Uwe Seeler — perfil de jogador",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/personen/uwe-seeler/spieler",
    "type": "perfil-oficial",
    "notes": "Perfil institucional, carreira, títulos e reconhecimentos."
  },
  {
    "id": "ksc-statutes",
    "title": "Satzung des Karlsruher SC",
    "publisher": "Karlsruher SC",
    "url": "https://www.ksc.de/fileadmin/ev.ksc.de/KSC_eV_Satzung_Stand_12_11_2025.pdf",
    "type": "documento-oficial",
    "notes": "O estatuto registra a origem no KFC Phönix e reconhece 6 de junho de 1894 como data histórica de fundação."
  },
  {
    "id": "sportschau-top-scorers-1963-64",
    "title": "Übersicht über die Torjäger — 30. Spieltag 1963/1964",
    "publisher": "Sportschau (ARD)",
    "url": "https://www.sportschau.de/live-und-ergebnisse/fussball/deutschland-bundesliga/se2585/1963-1964/statistik-torjaeger-uebersicht",
    "type": "estatistica-independente",
    "notes": "Confere os principais números da artilharia, incluindo 20 gols para Timo Konietzka; consultada em 05/11/2026."
  },
  {
    "id": "dfb-match-meidericher-hertha-1963-09-14",
    "title": "Meidericher SV — Hertha BSC, 1:3, 4. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/4-spieltag/msv-duisburg-hertha-bsc-188003",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, estádio, público, árbitro, placar, autores dos gols e minuto do evento de Helmut Rahn."
  },
  {
    "id": "dfb-match-hertha-koeln-1963-09-21",
    "title": "Hertha BSC — 1. FC Köln, 0:3, 5. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/5-spieltag/hertha-bsc-1-fc-koeln-188007",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Olympiastadion, público de 85.411, árbitro, placar e autores/minutos dos gols."
  },
  {
    "id": "hertha-attendance-record-1963",
    "title": "Damals wars: Zuschauerrekord gegen Köln",
    "publisher": "Hertha BSC",
    "url": "https://www.herthabsc.com/de/nachrichten/2015/09/2574-damals-wars_x003a_-zuschauerrekord-gegen-koln",
    "type": "historia-oficial-de-clube",
    "notes": "O clube recorda o jogo contra o 1. FC Köln em 21/09/1963 e o público recorde de 85.411 pessoas."
  },
  {
    "id": "sport1-first-sending-off",
    "title": "Bundesliga-Wissen zum Angeben",
    "publisher": "SPORT1",
    "url": "https://www.sport1.de/news/fussball/bundesliga/2022/04/bundesliga-am-wochende-fert-die-bundesliga-den-2000-spieltag-ihrer-geschichte-sport1-liefert-angeberwissen",
    "type": "historia-independente",
    "notes": "Identifica Helmut Rahn como o primeiro jogador expulso da Bundesliga, na quarta rodada de 14/09/1963."
  },


  {
    "id": "dfb-match-dortmund-1860-1963-08-31",
    "title": "Borussia Dortmund — TSV 1860 München, 3:3, 2. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/2-spieltag/borussia-dortmund-tsv-1860-muenchen-187981",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Stadion Rote Erde, público de 23.000, árbitro Edgar Deuschel, placar e cronologia dos seis gols."
  },
  {
    "id": "dfb-match-hamburg-saarbruecken-1963-08-31",
    "title": "Hamburger SV — 1. FC Saarbrücken, 4:2, 2. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/2-spieltag/hamburger-sv-1-fc-saarbruecken-187982",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Volksparkstadion, público de 32.000, árbitro Günther Baumgärtel, placar e cronologia dos seis gols."
  },

  {
    "id": "dfb-match-saarbruecken-koeln-1963-08-24",
    "title": "1. FC Saarbrücken — 1. FC Köln, 0:2, 1. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/1/1-fc-saarbruecken-1-fc-koeln-187974",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Ludwigsparkstadion, público de 35.000, árbitro Rudolf Kreitlein, placar e gols de Wolfgang Overath (22') e Christian Müller (43')."
  },
  {
    "id": "dfb-match-tsv-braunschweig-1963-08-24",
    "title": "TSV 1860 München — Eintracht Braunschweig, 1:1, 1. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/1/tsv-1860-muenchen-eintracht-braunschweig-187975",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Stadion an der Grünwalder Straße, público de 35.000, árbitro Helmut Fritz, placar e gols de Rudi Brunnenmeier (17') e Klaus Gerwien (74')."
  },
  {
    "id": "dfb-match-frankfurt-kaiserslautern-1963-08-24",
    "title": "Eintracht Frankfurt — 1. FC Kaiserslautern, 1:1, 1. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/1/eintracht-frankfurt-1-fc-kaiserslautern-187976",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Waldstadion, público de 30.000, árbitro Johannes Malka, placar e gols de pênalti de Jürgen Neumann (38') e Lothar Schämer (40')."
  },
  {
    "id": "dfb-match-schalke-stuttgart-1963-08-24",
    "title": "FC Schalke 04 — VfB Stuttgart, 2:0, 1. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/1/fc-schalke-04-vfb-stuttgart-187977",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Glückauf-Kampfbahn, público de 30.000, árbitro Gerhard Schulenburg, placar e gols de Willi Koslowski (37') e Waldemar Gerhardt (42')."
  },
  {
    "id": "dfb-match-muenster-hamburg-1963-08-24",
    "title": "SC Preußen Münster — Hamburger SV, 1:1, 1. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/1-spieltag/preussen-muenster-hamburger-sv-187978",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Preußenstadion, público de 30.000, árbitro Kurt Tschenscher, placar e gols de Falk Dörr (70') e Charly Dörfel (86')."
  },
  {
    "id": "dfb-match-karlsruhe-meidericher-1963-08-24",
    "title": "Karlsruher SC — Meidericher SV, 1:4, 1. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/1/karlsruher-sc-msv-duisburg-187979",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, público de 40.000, árbitro Walter Zimmermann, placar e gols de Werner Krämer (29' e 88'), Johann Cichy (33'), Helmut Rahn (37') e Erwin Metzger (83'). O DFB exibe o nome atual BBBank Wildpark; o nome histórico do estádio não foi inferido."
  },
  {
    "id": "dfb-match-hertha-nuernberg-1963-08-24",
    "title": "Hertha BSC — 1. FC Nürnberg, 1:1, 1. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/1-spieltag/hertha-bsc-1-fc-nuernberg-187980",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Olympiastadion, público de 60.000, árbitro Rolf Seekamp, placar e gols de Max Morlock (40') e Hans-Günter Schimmöller (63', pênalti)."
  },

  {
    "id": "dfb-match-nuernberg-werder-1963-08-31",
    "title": "1. FC Nürnberg — SV Werder Bremen, 3:0, 2. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/2-spieltag/1-fc-nuernberg-sv-werder-bremen-187983",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Städtisches Stadion, público de 33.000, árbitro Horst Mathieu, placar e gols de Heinrich Müller (41'), Max Morlock (45') e Heinz Strehl (74')."
  },
  {
    "id": "dfb-match-koeln-karlsruhe-1963-08-31",
    "title": "1. FC Köln — Karlsruher SC, 4:0, 2. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/2-spieltag/1-fc-koeln-karlsruher-sc-187984",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Müngersdorfer Stadion (1923–1973), público de 21.000, árbitro Werner Treichel, placar e gols de Wolfgang Overath (10'), Hans Sturm (16' e 77') e Heinz Hornig (68')."
  },
  {
    "id": "dfb-match-kaiserslautern-schalke-1963-08-31",
    "title": "1. FC Kaiserslautern — FC Schalke 04, 2:3, 2. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/2-spieltag/1-fc-kaiserslautern-fc-schalke-04-187985",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Betzenbergstadion, público de 34.000, árbitro Karl Riegg, placar e cronologia dos gols, incluindo gol contra de Willi Schulz (28')."
  },
  {
    "id": "dfb-match-stuttgart-hertha-1963-08-31",
    "title": "VfB Stuttgart — Hertha BSC, 2:0, 2. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/2-spieltag/vfb-stuttgart-hertha-bsc-187986",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Neckarstadion, público de 40.000, árbitro Fritz Schörnich, placar e gols de Rolf Geiger (8') e Erwin Waldner (30')."
  },
  {
    "id": "dfb-match-meidericher-frankfurt-1963-08-31",
    "title": "Meidericher SV — Eintracht Frankfurt, 3:1, 2. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/2-spieltag/msv-duisburg-eintracht-frankfurt-187987",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Wedaustadion, público de 36.000, árbitro Werner Spiewak, placar e gols de Helmut Rahn (6'), Hartmut Heidemann (43'), Werner Krämer (57') e Horst Trimhold (62')."
  },
  {
    "id": "dfb-match-braunschweig-muenster-1963-08-31",
    "title": "Eintracht Braunschweig — SC Preußen Münster, 1:0, 2. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/2-spieltag/eintracht-braunschweig-preussen-muenster-187988",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Eintracht-Stadion, público de 28.000, árbitro Günther Sparing, placar e gol de Jürgen Moll (15')."
  },
  {
    "id": "dfb-match-tsv-koeln-1963-09-07",
    "title": "TSV 1860 München — 1. FC Köln, 1:3, 3. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/3-spieltag/tsv-1860-muenchen-1-fc-koeln-187989",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Stadion an der Grünwalder Straße, público de 45.000, árbitro Herbert Lutz, placar e gols de Wolfgang Overath (48'), Hans Auernhammer (55', pênalti), Hans Sturm (66', pênalti) e Hans Schäfer (77')."
  },
  {
    "id": "dfb-match-karlsruhe-hamburg-1963-09-07",
    "title": "Karlsruher SC — Hamburger SV, 0:4, 3. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/3-spieltag/karlsruher-sc-hamburger-sv-187990",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, público de 55.000, árbitro Johannes Malka, placar e gols de Charly Dörfel (12' e 44'), Uwe Seeler (17') e Willi Giesemann (53'). O DFB mostra a denominação comercial atual BBBank Wildpark; o nome histórico do estádio foi omitido."
  },
  {
    "id": "dfb-match-frankfurt-nuernberg-1963-09-07",
    "title": "Eintracht Frankfurt — 1. FC Nürnberg, 2:3, 3. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/3-spieltag/eintracht-frankfurt-1-fc-nuernberg-187991",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Waldstadion, público de 55.000, árbitro Kurt Handwerker, placar e cronologia dos cinco gols, incluindo o pênalti de Willi Huberts (82')."
  },
  {
    "id": "dfb-match-schalke-dortmund-1963-09-07",
    "title": "FC Schalke 04 — Borussia Dortmund, 3:1, 3. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/3-spieltag/fc-schalke-04-borussia-dortmund-187992",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Glückauf-Kampfbahn, público de 38.000, árbitro Helmut Fritz, placar e gols de Reinhold Wosab (6'), Manfred Berz (44'), Waldemar Gerhardt (51') e gol contra de Lothar Geisler (55')."
  },
  {
    "id": "dfb-match-werder-stuttgart-1963-09-07",
    "title": "SV Werder Bremen — VfB Stuttgart, 2:2, 3. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/3-spieltag/sv-werder-bremen-vfb-stuttgart-187993",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Weserstadion, público de 30.000, árbitro Günther Baumgärtel, placar e gols de Dieter Meyer (2'), Gerhard Wanner (10'), Dieter Höller (11') e Gerhard Zebrowski (63')."
  },
  {
    "id": "dfb-match-hertha-kaiserslautern-1963-09-07",
    "title": "Hertha BSC — 1. FC Kaiserslautern, 2:2, 3. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/3-spieltag/hertha-bsc-1-fc-kaiserslautern-187994",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Olympiastadion, público de 40.000, árbitro Walter Zimmermann, placar e gols de Winfried Richter (13'), Co Prins (36'), Carl-Heinz Rühl (73') e Helmut Faeder (79')."
  },
  {
    "id": "dfb-match-muenster-meidericher-1963-09-07",
    "title": "SC Preußen Münster — Meidericher SV, 4:2, 3. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/3-spieltag/preussen-muenster-msv-duisburg-187995",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Preußenstadion, público de 38.000, árbitro Karl Niemeyer, placar e gols de Hermann Lulka (17', 30' e 52'), Helmut Tybussek (72'), Helmut Rahn (85') e Heinz Versteeg (89')."
  },
  {
    "id": "dfb-match-saarbruecken-braunschweig-1963-09-07",
    "title": "1. FC Saarbrücken — Eintracht Braunschweig, 2:2, 3. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/3-spieltag/1-fc-saarbruecken-eintracht-braunschweig-187996",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Ludwigsparkstadion, público de 17.000, árbitro Josef Kandlbinder, placar e gols de Klaus Gerwien (43'), Rainer Schönwälder (48' e 57') e Jürgen Moll (72', pênalti)."
  },

  {
    "id": "dfb-match-koeln-schalke-1963-09-14",
    "title": "1. FC Köln — FC Schalke 04, 2:2, 4. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/4-spieltag/1-fc-koeln-fc-schalke-04-187997",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Müngersdorfer Stadion, público de 58.000, árbitro Fritz Schörnich, placar e gols de Heinz Hornig (1'), Waldemar Gerhardt (5'), Stan Libuda (32') e Hans Sturm (68')."
  },
  {
    "id": "dfb-match-nuernberg-muenster-1963-09-14",
    "title": "1. FC Nürnberg — SC Preußen Münster, 2:2, 4. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/4-spieltag/1-fc-nuernberg-preussen-muenster-187998",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Städtisches Stadion, público de 33.000, árbitro Gerhard Schulenburg, placar e gols de pênalti de Stefan Reisch (2'), Hermann Lulka (32'), Manfred Rummel (37') e Max Morlock (54')."
  },
  {
    "id": "dfb-match-dortmund-saarbruecken-1963-09-14",
    "title": "Borussia Dortmund — 1. FC Saarbrücken, 2:1, 4. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/4-spieltag/borussia-dortmund-1-fc-saarbruecken-187999",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Stadion Rote Erde, público de 18.000, árbitro Günther Sparing, placar e gols de Dieter Krafczyk (18'), Reinhold Wosab (78') e Timo Konietzka (82')."
  },
  {
    "id": "dfb-match-hamburg-frankfurt-1963-09-14",
    "title": "Hamburger SV — Eintracht Frankfurt, 3:0, 4. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/4-spieltag/hamburger-sv-eintracht-frankfurt-188000",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Volksparkstadion, público de 65.000, árbitro Hans-Joachim Weyland, placar e gols de Uwe Seeler (3' e 53') e Charly Dörfel (57')."
  },
  {
    "id": "dfb-match-stuttgart-tsv-1963-09-14",
    "title": "VfB Stuttgart — TSV 1860 München, 1:1, 4. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/4-spieltag/vfb-stuttgart-tsv-1860-muenchen-188001",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Neckarstadion, público de 45.000, árbitro Kurt Tschenscher, placar e gols de Hans Küppers (17') e Hans Arnold (24')."
  },
  {
    "id": "dfb-match-kaiserslautern-werder-1963-09-14",
    "title": "1. FC Kaiserslautern — SV Werder Bremen, 3:0, 4. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/4-spieltag/1-fc-kaiserslautern-sv-werder-bremen-188002",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Betzenbergstadion, público de 22.000, árbitro Rudolf Kreitlein, placar e gols de Willy Reitgaßl (27' e 84') e Winfried Richter (63')."
  },
  {
    "id": "dfb-match-braunschweig-karlsruhe-1963-09-14",
    "title": "Eintracht Braunschweig — Karlsruher SC, 2:0, 4. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/4-spieltag/eintracht-braunschweig-karlsruher-sc-188004",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Eintracht-Stadion, público de 22.000, árbitro Willi Thier, placar e gols de Hans-Georg Dulz (37') e Klaus Gerwien (68')."
  },

  {
    "id": "dfb-match-werder-meidericher-1963-09-21",
    "title": "SV Werder Bremen — Meidericher SV, 1:1, 5. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/5-spieltag/sv-werder-bremen-msv-duisburg-188012",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Weserstadion, público de 27.000, árbitro Helmut Fritz, placar e gols de Heinz Versteeg (15') e Arnold Schütz (80')."
  },
  {
    "id": "dfb-match-muenster-stuttgart-1963-09-21",
    "title": "SC Preußen Münster — VfB Stuttgart, 4:2, 5. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/en/data-center/bundesliga/1963-1964/5-matchday/preussen-munster-vfb-stuttgart-188011",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Preußenstadion, público de 30.000, árbitro Werner Treichel, placar e seis gols. A cronologia completa foi conferida também na RSSSF."
  },
  {
    "id": "dfb-match-tsv-kaiserslautern-1963-09-21",
    "title": "TSV 1860 München — 1. FC Kaiserslautern, 3:0, 5. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/5-spieltag/188009",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Stadion an der Grünwalder Straße, público de 30.000, árbitro Fritz Leidag, placar, pênalti desperdiçado por Hans Küppers aos 43' e gols de Alfons Stemmer (50', pênalti), Rudi Brunnenmeier (63') e Hans Küppers (76')."
  },
  {
    "id": "dfb-match-frankfurt-braunschweig-1963-09-21",
    "title": "Eintracht Frankfurt — Eintracht Braunschweig, 3:0, 5. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/5-spieltag/eintracht-frankfurt-eintracht-braunschweig-188010",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Waldstadion, público de 22.500, árbitro Alfred Ott, placar e gols de Horst Trimhold (8') e Wolfgang Solz (29' e 87')."
  },
  {
    "id": "dfb-match-karlsruhe-dortmund-1963-09-21",
    "title": "Karlsruher SC — Borussia Dortmund, 1:3, 5. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/5/karlsruher-sc-borussia-dortmund-188008",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, público de 30.000, árbitro Herbert Lutz, placar e gols de Hans-Jürgen Kurrat (3'), Burghard Rylewicz (11'), Hartmann Madl (46') e Gerd Cyliax (83'). O DFB exibe a denominação comercial atual BBBank Wildpark; o nome histórico do estádio foi omitido."
  },
  {
    "id": "dfb-team-saarbruecken-1963-64",
    "title": "1. FC Saarbrücken — calendário da Bundesliga 1963/64",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/competitions/bundesliga/seasons/1963-1964/teams/1-fc-saarbruecken",
    "type": "calendario-oficial-de-clube",
    "notes": "Confirma o confronto em casa com 1. FC Nürnberg em 21/09/1963 e o resultado de 3:5; não comprova a cronologia individual dos gols."
  },
  {
    "id": "dfb-team-nuernberg-1963-64",
    "title": "1. FC Nürnberg — calendário da Bundesliga 1963/64",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/competitions/bundesliga/seasons/1963-1964/teams/1-fc-nuernberg",
    "type": "calendario-oficial-de-clube",
    "notes": "Confirma o jogo fora contra 1. FC Saarbrücken em 21/09/1963 e o resultado de 3:5; não comprova a cronologia individual dos gols."
  },
  {
    "id": "dfb-team-schalke-1963-64",
    "title": "FC Schalke 04 — calendário da Bundesliga 1963/64",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/competitions/bundesliga/seasons/1963-1964/teams/fc-schalke-04",
    "type": "calendario-oficial-de-clube",
    "notes": "Confirma o jogo em casa contra Hamburger SV em 21/09/1963 e o resultado de 1:0; a cronologia do gol é conferida na RSSSF."
  },
  {
    "id": "dfb-team-hamburg-1963-64",
    "title": "Hamburger SV — calendário da Bundesliga 1963/64",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/competitions/bundesliga/seasons/1963-1964/teams/hamburger-sv-943",
    "type": "calendario-oficial-de-clube",
    "notes": "Confirma a partida fora contra FC Schalke 04 em 21/09/1963 e o resultado de 1:0; a cronologia do gol é conferida na RSSSF."
  },
  {
    "id": "bdfutbol-bundesliga-1963-64-matchday-5",
    "title": "Clasificación Bundesliga 1963-64 — jornada 5",
    "publisher": "BDFutbol",
    "url": "https://www.bdfutbol.com/es/t/tger1963-64.html?jornada=5&tab=results",
    "type": "base-de-dados-historica",
    "notes": "Confere resultados da 5ª rodada e, para Saarbrücken–Nürnberg e Schalke–Hamburger SV, estádio e árbitro. Usada como fonte complementar, não como substituta das fontes oficiais."
  },

  {
    "id": "dfb-match-kaiserslautern-muenster-1963-10-05",
    "title": "1. FC Kaiserslautern — SC Preußen Münster, 0:0, 6. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/6-spieltag/1-fc-kaiserslautern-preussen-muenster-188014",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Betzenbergstadion, público de 15.000, árbitro Rolf Seekamp, placar sem gols e escalações."
  },
  {
    "id": "dfb-match-hamburg-hertha-1963-10-05",
    "title": "Hamburger SV — Hertha BSC, 5:1, 6. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/6-spieltag/hamburger-sv-hertha-bsc-188015",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Volksparkstadion, público de 40.000, árbitro Karl Riegg, placar e gols de Ernst Kreuz (24'), Helmut Faeder (45'), Uwe Seeler (57'), Dieter Seeler (60'), Willi Giesemann (61') e Charly Dörfel (70')."
  },
  {
    "id": "dfb-match-nuernberg-karlsruhe-1963-10-05",
    "title": "1. FC Nürnberg — Karlsruher SC, 2:4, 6. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/6-spieltag/1-fc-nuernberg-karlsruher-sc-188016",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Städtisches Stadion, público de 22.000, árbitro Günther Sparing, placar e gols de Heinrich Müller (3'), Hartmann Madl (33'), Max Morlock (45') e Otto Geisert (55', 65' e 90')."
  },
  {
    "id": "dfb-match-meidericher-tsv-1963-10-05",
    "title": "Meidericher SV — TSV 1860 München, 3:0, 6. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/en/data-center/bundesliga/1963-1964/6-matchday/msv-duisburg-tsv-1860-munich-188017",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Wedaustadion, público de 20.000, árbitro Gerhard Pooch, placar e gols de Werner Kubek (40' e 82') e Werner Krämer (64')."
  },
  {
    "id": "dfb-match-braunschweig-schalke-1963-10-05",
    "title": "Eintracht Braunschweig — FC Schalke 04, 4:3, 6. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/6-spieltag/eintracht-braunschweig-fc-schalke-04-188018",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Eintracht-Stadion, público de 32.000, árbitro Kurt Handwerker, placar e cronologia dos sete gols."
  },
  {
    "id": "dfb-match-dortmund-frankfurt-1963-10-05",
    "title": "Borussia Dortmund — Eintracht Frankfurt, 3:0, 6. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/6/borussia-dortmund-eintracht-frankfurt-188019",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Stadion Rote Erde, público de 18.000, árbitro Walter Zimmermann, placar e gols de Lothar Emmerich (10'), Theo Redder (30') e Timo Konietzka (37')."
  },
  {
    "id": "dfb-match-stuttgart-saarbruecken-1963-10-05",
    "title": "VfB Stuttgart — 1. FC Saarbrücken, 3:1, 6. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/6-spieltag/vfb-stuttgart-1-fc-saarbruecken-188020",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Neckarstadion, público de 28.000, árbitro Hans-Joachim Weyland, placar e gols de Dieter Höller (12' e 60'), Rainer Schönwälder (71') e Friedrich Zipperer (89')."
  },
  {
    "id": "dfb-match-koeln-werder-1963-10-05",
    "title": "1. FC Köln — SV Werder Bremen, 4:3, 6. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/6-spieltag/1-fc-koeln-sv-werder-bremen-188013",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Müngersdorfer Stadion (1923–1973), público de 23.000, árbitro Edgar Deuschel, placar e cronologia dos sete gols."
  },

  {
    "id": "dfb-match-frankfurt-koeln-1963-10-12",
    "title": "Eintracht Frankfurt — 1. FC Köln, 2:1, 7. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/7/eintracht-frankfurt-1-fc-koeln-188021",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Waldstadion, público de 41.000, árbitro Helmut Fritz, placar e gols de Willi Huberts (20'), Horst Trimhold (33') e Christian Müller (41')."
  },
  {
    "id": "dfb-match-hertha-braunschweig-1963-10-12",
    "title": "Hertha BSC — Eintracht Braunschweig, 1:2, 7. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/en/data-center/bundesliga/1963-1964/7/hertha-bsc-eintracht-braunschweig-188022",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Olympiastadion, público de 25.000, árbitro Oswald Fritz, placar e gols de Manfred Wuttich (34' e 36') e Uwe Klimaschefski (44')."
  },
  {
    "id": "dfb-match-tsv-nuernberg-1963-10-12",
    "title": "TSV 1860 München — 1. FC Nürnberg, 5:0, 7. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/7/tsv-1860-muenchen-1-fc-nuernberg-188023",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Stadion an der Grünwalder Straße, público de 44.000, árbitro Rudolf Kreitlein, placar e gols de Rudi Brunnenmeier (1', 27' e 55') e Wilfried Kohlars (43' e 46')."
  },
  {
    "id": "dfb-match-karlsruhe-stuttgart-1963-10-12",
    "title": "Karlsruher SC — VfB Stuttgart, 0:3, 7. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/7-spieltag/karlsruher-sc-vfb-stuttgart-188024",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, público de 55.000, árbitro Josef Kandlbinder, placar e gols de Hans Arnold (22'), Theodor Hoffmann (32') e Dieter Höller (63'). O DFB exibe a denominação comercial atual BBBank Wildpark; o nome histórico do estádio foi omitido."
  },
  {
    "id": "dfb-match-schalke-meidericher-1963-10-12",
    "title": "FC Schalke 04 — Meidericher SV, 2:2, 7. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/7-spieltag/fc-schalke-04-msv-duisburg-188025",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Glückauf-Kampfbahn, público de 30.000, árbitro Ewald Regely, placar e gols de Waldemar Gerhardt (13'), Werner Lotz (38'), Stan Libuda (42') e Heinz Versteeg (55')."
  },
  {
    "id": "dfb-match-muenster-dortmund-1963-10-12",
    "title": "SC Preußen Münster — Borussia Dortmund, 1:2, 7. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/7-spieltag/preussen-muenster-borussia-dortmund-188026",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Preußenstadion, público de 38.000, árbitro Berthold Schmidt, placar e gols de Manfred Pohlschmidt (42'), Franz Brungs (65') e Lothar Emmerich (82')."
  },
  {
    "id": "dfb-match-werder-hamburg-1963-10-12",
    "title": "SV Werder Bremen — Hamburger SV, 4:2, 7. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/7-spieltag/sv-werder-bremen-hamburger-sv-188027",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Weserstadion, público de 40.000, árbitro Erwin Sturm, placar e gols de Gerhard Zebrowski (10'), Arnold Schütz (14', 47' e 79'), Charly Dörfel (25') e Uwe Seeler (55')."
  },
  {
    "id": "dfb-match-saarbruecken-kaiserslautern-1963-10-12",
    "title": "1. FC Saarbrücken — 1. FC Kaiserslautern, 2:4, 7. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/7-spieltag/1-fc-saarbruecken-1-fc-kaiserslautern-188028",
    "type": "ficha-oficial-de-partida",
    "notes": "Data, rodada, Ludwigsparkstadion, público de 28.000, árbitro Alfred Ott, placar e gols de Werner Rinas (11'), Willy Reitgaßl (38' e 62'), Heinz Vollmar (42'), Winfried Richter (66') e Co Prins (69')."
  },

  {
    "id": "dfb-match-hamburg-tsv-1963-10-19",
    "title": "Hamburger SV — TSV 1860 München, 5:0, 8. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/8-spieltag/hamburger-sv-tsv-1860-muenchen-188029",
    "type": "ficha-oficial-de-partida",
    "notes": "Volksparkstadion, 57.000, árbitro Horst Mathieu; gols de Uwe Seeler (19', 22' e 76'), Charly Dörfel (38') e Willi Giesemann (72')."
  },
  {
    "id": "dfb-match-koeln-muenster-1963-10-19",
    "title": "1. FC Köln — SC Preußen Münster, 3:0, 8. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/8-spieltag/1-fc-koeln-preussen-muenster-188030",
    "type": "ficha-oficial-de-partida",
    "notes": "Müngersdorfer Stadion, 25.000, árbitro Hans-Joachim Weyland; gol contra de Dagmar Drewes (22'), Wolfgang Overath (80') e Christian Müller (90'). A RSSSF atribui o gol de abertura a Overath; Alexandria adota provisoriamente a ficha DFB."
  },
  {
    "id": "dfb-match-nuernberg-schalke-1963-10-19",
    "title": "1. FC Nürnberg — FC Schalke 04, 0:2, 8. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/8/1-fc-nuernberg-fc-schalke-04-188031",
    "type": "ficha-oficial-de-partida",
    "notes": "Städtisches Stadion, 36.000, árbitro Alfred Ott; dois gols de Klaus Matischak (25' e 64')."
  },
  {
    "id": "dfb-match-stuttgart-frankfurt-1963-10-19",
    "title": "VfB Stuttgart — Eintracht Frankfurt, 0:0, 8. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/en/matches/vfb-stuttgart-eintracht-frankfurt-188032/liveticker",
    "type": "ficha-oficial-de-partida",
    "notes": "Neckarstadion, Stuttgart, 50.000, árbitro Karl Niemeyer e placar sem gols."
  },
  {
    "id": "dfb-match-dortmund-hertha-1963-10-19",
    "title": "Borussia Dortmund — Hertha BSC, 7:2, 8. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/8-spieltag/borussia-dortmund-hertha-bsc-188033",
    "type": "ficha-oficial-de-partida",
    "notes": "Stadion Rote Erde, 28.000, árbitro Werner Spiewak e cronologia dos nove gols."
  },
  {
    "id": "dfb-match-meidericher-saarbruecken-1963-10-19",
    "title": "Meidericher SV — 1. FC Saarbrücken, 3:1, 8. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/8-spieltag/msv-duisburg-1-fc-saarbruecken-188034",
    "type": "ficha-oficial-de-partida",
    "notes": "Wedaustadion, 25.000, árbitro Kurt Handwerker; gol contra de Hartmut Heidemann (21'), Werner Krämer (33' e 50') e Heinz Versteeg (72'). RSSSF atribui o gol contra a Rainer Schönwälder; Alexandria adota provisoriamente a ficha DFB."
  },
  {
    "id": "dfb-match-kaiserslautern-karlsruhe-1963-10-19",
    "title": "1. FC Kaiserslautern — Karlsruher SC, 1:0, 8. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/8/1-fc-kaiserslautern-karlsruher-sc-188035",
    "type": "ficha-oficial-de-partida",
    "notes": "Betzenbergstadion, 15.000, árbitro Fritz Schörnich; gol de Walter Gawletta (16')."
  },
  {
    "id": "dfb-match-braunschweig-werder-1963-10-19",
    "title": "Eintracht Braunschweig — SV Werder Bremen, 1:1, 8. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/8-spieltag/eintracht-braunschweig-sv-werder-bremen-188036",
    "type": "ficha-oficial-de-partida",
    "notes": "Eintracht-Stadion, 28.000, árbitro Gerhard Pooch; gols de Manfred Wuttich (31') e Arnold Schütz (44')."
  },

  {
    "id": "dfb-match-stuttgart-dortmund-1963-10-26",
    "title": "VfB Stuttgart — Borussia Dortmund, 2:1, 9. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/9-spieltag/vfb-stuttgart-borussia-dortmund-188037",
    "type": "ficha-oficial-de-partida",
    "notes": "Neckarstadion, 60.000, árbitro Oswald Fritz; Rolf Geiger (12' e 80') e Willi Sturm (61')."
  },
  {
    "id": "dfb-match-schalke-werder-1963-10-26",
    "title": "FC Schalke 04 — SV Werder Bremen, 2:3, 9. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/9-spieltag/fc-schalke-04-sv-werder-bremen-188038",
    "type": "ficha-oficial-de-partida",
    "notes": "Glückauf-Kampfbahn, 30.000, árbitro Kurt Tschenscher; Klaus Matischak (20' e 54'), Diethelm Ferner (31' e 87') e Arnold Schütz (79')."
  },
  {
    "id": "dfb-match-hamburg-braunschweig-1963-10-26",
    "title": "Hamburger SV — Eintracht Braunschweig, 2:1, 9. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/en/data-center/bundesliga/1963-1964/9-matchday/hamburger-sv-eintracht-braunschweig-188039",
    "type": "ficha-oficial-de-partida",
    "notes": "Volksparkstadion, 45.000, árbitro Herbert Lutz; Willi Giesemann (21' e 72') e Manfred Wuttich (33')."
  },
  {
    "id": "dfb-match-koeln-meidericher-1963-10-26",
    "title": "1. FC Köln — Meidericher SV, 3:3, 9. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/9-spieltag/1-fc-koeln-msv-duisburg-188040",
    "type": "ficha-oficial-de-partida",
    "notes": "Müngersdorfer Stadion, 42.000, árbitro Günther Baumgärtel; gols de Wolfgang Overath (8' e 88'), Werner Krämer (30'), Gustav Walenciak (32'), Christian Müller (68') e Heinz Versteeg (80')."
  },
  {
    "id": "dfb-match-nuernberg-kaiserslautern-1963-10-26",
    "title": "1. FC Nürnberg — 1. FC Kaiserslautern, 0:5, 9. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/9-spieltag/1-fc-nuernberg-1-fc-kaiserslautern-188041",
    "type": "ficha-oficial-de-partida",
    "notes": "Städtisches Stadion, 20.000, árbitro Willi Thier; gols de Winfried Richter (13'), Co Prins (32'), Erich Meier (36' e 50') e Gerd Schneider (47'). A ficha também registra pênalti desperdiçado por Peter von Kummant aos 50'."
  },
  {
    "id": "dfb-match-muenster-tsv-1963-10-26",
    "title": "SC Preußen Münster — TSV 1860 München, 0:0, 9. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/9-spieltag/preussen-muenster-tsv-1860-muenchen-188042",
    "type": "ficha-oficial-de-partida",
    "notes": "Preußenstadion, 25.000, árbitro Helmut Fritz e placar sem gols."
  },
  {
    "id": "dfb-match-hertha-frankfurt-1963-10-26",
    "title": "Hertha BSC — Eintracht Frankfurt, 1:3, 9. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/en/data-center/bundesliga/1963-1964/9-matchday/hertha-bsc-eintracht-frankfurt-188043",
    "type": "ficha-oficial-de-partida",
    "notes": "Olympiastadion, 22.000, árbitro Gerhard Schulenburg; Helmut Faeder (36'), Willi Huberts (53' e 60') e Wolfgang Solz (85'). A ficha registra pênalti desperdiçado por Hans-Günter Schimmöller aos 88'."
  },
  {
    "id": "dfb-match-saarbruecken-karlsruhe-1963-10-26",
    "title": "1. FC Saarbrücken — Karlsruher SC, 1:3, 9. Spieltag",
    "publisher": "DFB Datencenter",
    "url": "https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/9-spieltag/1-fc-saarbruecken-karlsruher-sc-188044",
    "type": "ficha-oficial-de-partida",
    "notes": "Ludwigsparkstadion, 15.000, árbitro Werner Treichel; Otto Geisert (42'), Siegfried Stark (51' e 86') e Dieter Krafczyk (87'). A ficha registra pênalti desperdiçado por Krafczyk aos 16'."
  },
]

export const bundesligaSourceNotes: BundesligaSourceNote[] = [
  {
    "id": "rsssf-vs-dfb-positions-10-11",
    "severity": "divergencia",
    "subject": "Classificação 1963/64: posições 10 e 11",
    "adoptedSourceId": "dfb-season-table-1963-64",
    "note": "O DFB coloca Werder Bremen em 10º e Eintracht Braunschweig em 11º. A RSSSF inverte a ordem. A Alexandria adota a tabela oficial do DFB."
  },
  {
    "id": "historical-goal-quotient",
    "severity": "criterio-historico",
    "subject": "Desempate por quociente de gols",
    "adoptedSourceId": "dfb-inaugural-season",
    "note": "Em 1963/64 o critério de desempate era o quociente de gols, não o saldo de gols moderno."
  },
  {
    "id": "dfb-attendance-average-arithmetic",
    "severity": "divergencia-aritmetica",
    "subject": "Público total e média de público",
    "adoptedSourceId": "dfb-inaugural-season",
    "note": "O DFB publica 6.057.335 espectadores e média de 25.134 por partida. Dividindo o total por 240 jogos, obtém-se aproximadamente 25.239. A Alexandria preserva o número médio publicado pelo DFB e anota a diferença."
  },
  {
    "id": "rsssf-vs-dfb-konietzka-goals",
    "severity": "divergencia",
    "subject": "Timo Konietzka — gols na Bundesliga 1963/64",
    "adoptedSourceId": "dfb-top-scorers-1963-64",
    "note": "DFB Datencenter e Sportschau registram 20 gols; a linha-resumo da RSSSF registra 22. A Alexandria adota 20, com base no DFB e na confirmação da Sportschau, mantendo a divergência documentada."
  },

  {
    "id": "saarbruecken-nuernberg-krafczyk-minute",
    "severity": "divergencia",
    "subject": "1. FC Saarbrücken 3–5 1. FC Nürnberg — minuto do gol de Dieter Krafczyk",
    "adoptedSourceId": "rsssf-germany-1963-64",
    "note": "A RSSSF registra o gol de Dieter Krafczyk aos 35 minutos; a página histórica do 1. FC Nürnberg na Wikipedia italiana reproduz 20 minutos. Como não foi localizada ficha individual DFB com a cronologia, a Alexandria adota provisoriamente 35' da RSSSF e mantém a divergência explícita para revisão futura."
  },


  {
    "id": "koeln-muenster-own-goal-1963-10-19",
    "severity": "divergencia",
    "subject": "1. FC Köln 3–0 SC Preußen Münster — autoria do gol aos 22 minutos",
    "adoptedSourceId": "dfb-match-koeln-muenster-1963-10-19",
    "note": "A ficha individual do DFB registra gol contra de Dagmar Drewes aos 22'; a RSSSF atribui o gol a Wolfgang Overath. O cadastro adota provisoriamente a ficha individual do DFB."
  },
  {
    "id": "meidericher-saarbruecken-own-goal-1963-10-19",
    "severity": "divergencia",
    "subject": "Meidericher SV 3–1 1. FC Saarbrücken — autoria do gol aos 21 minutos",
    "adoptedSourceId": "dfb-match-meidericher-saarbruecken-1963-10-19",
    "note": "A ficha individual do DFB registra gol contra de Hartmut Heidemann aos 21'; a RSSSF atribui o gol contra a Rainer Schönwälder. O cadastro adota provisoriamente a ficha individual do DFB."
  },

]
