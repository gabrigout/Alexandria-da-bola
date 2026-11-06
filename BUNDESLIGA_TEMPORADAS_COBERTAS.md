# Bundesliga — inventário de temporadas já cobertas (Fase 1)

**Projeto:** Alexandria da Bola  
**Branch que contém estes dados:** `feat/bundesliga-fase-1-1973-2027`  
**Diretório dos arquivos:** `src/data/bundesliga/`  
**Data do inventário:** 06/11/2026

> IMPORTANTE PARA CLAUDE E OUTRAS IAs: estes dados já estão versionados na branch indicada. Não comece pela branch `main` nem conclua que só existe 1963/64. Faça checkout/clone explicitamente da branch `feat/bundesliga-fase-1-1973-2027`. Se a ferramenta de integração não mostrar branches automaticamente, abra os links abaixo ou configure o repositório para usar essa branch.

## Temporadas cobertas

| Temporada | Clubes | Rodadas | Partidas | Gols | Arquivo |
|---|---:|---:|---:|---:|---|
| 1963/64 | 16 | 30 | 240 | 857 | `src/data/bundesliga/matches-1963-64.ts` |
| 1964/65 | 16 | 30 | 240 | 796 | `src/data/bundesliga/matches/1964-65.ts` |
| 1965/66 | 18 | 34 | 306 | 987 | `src/data/bundesliga/matches/1965-66.ts` |
| 1966/67 | 18 | 34 | 306 | 895 | `src/data/bundesliga/matches/1966-67.ts` |
| 1967/68 | 18 | 34 | 306 | 993 | `src/data/bundesliga/matches/1967-68.ts` |
| 1968/69 | 18 | 34 | 306 | 873 | `src/data/bundesliga/matches/1968-69.ts` |
| 1969/70 | 18 | 34 | 306 | 951 | `src/data/bundesliga/matches/1969-70.ts` |
| 1970/71 | 18 | 34 | 306 | 926 | `src/data/bundesliga/matches/1970-71.ts` |
| 1971/72 | 18 | 34 | 306 | 1.006 | `src/data/bundesliga/matches/1971-72.ts` |
| 1972/73 | 18 | 34 | 306 | 1.045 | `src/data/bundesliga/matches/1972-73.ts` |
| **Total** | — | — | **2.928** | **9.329** | — |

Os totais de gols são somas dos placares cadastrados. A cobertura é de resultados básicos, não uma auditoria ficha a ficha de todos os jogos. Muitos registros ainda não têm autores/minutos de gols, escalações, arbitragem, estádio, público ou outros metadados; não inventar esses dados.

## Links diretos para os arquivos na branch correta

- [1963/64](https://github.com/gabrigout/Alexandria-da-bola/blob/feat/bundesliga-fase-1-1973-2027/src/data/bundesliga/matches-1963-64.ts)
- [1964/65](https://github.com/gabrigout/Alexandria-da-bola/blob/feat/bundesliga-fase-1-1973-2027/src/data/bundesliga/matches/1964-65.ts)
- [1965/66](https://github.com/gabrigout/Alexandria-da-bola/blob/feat/bundesliga-fase-1-1973-2027/src/data/bundesliga/matches/1965-66.ts)
- [1966/67](https://github.com/gabrigout/Alexandria-da-bola/blob/feat/bundesliga-fase-1-1973-2027/src/data/bundesliga/matches/1966-67.ts)
- [1967/68](https://github.com/gabrigout/Alexandria-da-bola/blob/feat/bundesliga-fase-1-1973-2027/src/data/bundesliga/matches/1967-68.ts)
- [1968/69](https://github.com/gabrigout/Alexandria-da-bola/blob/feat/bundesliga-fase-1-1973-2027/src/data/bundesliga/matches/1968-69.ts)
- [1969/70](https://github.com/gabrigout/Alexandria-da-bola/blob/feat/bundesliga-fase-1-1973-2027/src/data/bundesliga/matches/1969-70.ts)
- [1970/71](https://github.com/gabrigout/Alexandria-da-bola/blob/feat/bundesliga-fase-1-1973-2027/src/data/bundesliga/matches/1970-71.ts)
- [1971/72](https://github.com/gabrigout/Alexandria-da-bola/blob/feat/bundesliga-fase-1-1973-2027/src/data/bundesliga/matches/1971-72.ts)
- [1972/73](https://github.com/gabrigout/Alexandria-da-bola/blob/feat/bundesliga-fase-1-1973-2027/src/data/bundesliga/matches/1972-73.ts)

## Arquivos de apoio que Claude deve inspecionar

- `src/data/bundesliga/matches.ts` — agregador das partidas.
- `src/data/bundesliga/match-clubs.ts` — cadastro/identificadores dos clubes.
- `src/data/bundesliga/sources.ts` — fontes e referências.
- `src/data/bundesliga/types.ts` — tipos dos registros.
- `src/data/bundesliga/seasons/index.ts` — índice das temporadas e status de cobertura.
- `src/data/bundesliga/validate.ts` e `validate.test.ts` — regras e testes de integridade.

## Ponto de continuidade

A próxima temporada a pesquisar e cadastrar é **1973/74**. A ausência de arquivo 1973/74 significa que o terceiro bloco ainda não foi implantado. Continuar cronologicamente, mantendo a Fase 1 (cobertura básica) separada da Fase 2 (enriquecimento editorial detalhado).

## Verificação do inventário

Na branch indicada, os nove arquivos de 1964/65 a 1972/73 foram consultados diretamente e retornaram conteúdo; o arquivo de 1963/64 também foi localizado. Este inventário serve para orientar a localização dos dados, mas não substitui a execução dos testes do projeto.
