# Alexandria — A Biblioteca do Futebol

A Alexandria é uma biblioteca digital dedicada à história do futebol. O projeto combina um salão de museu, um atlas-múndi interativo e um acervo pesquisável que conecta competições, ligas, copas, clubes e jogadores.

> O futebol tem um mundo de histórias. Explore cada uma delas.

## Experiência

- Atlas-múndi plano com países selecionáveis e territórios preenchidos por suas bandeiras nacionais quando há código de bandeira disponível.
- Navegação por país e continentes, com aproximação, deslocamento e seleção.
- Acervo histórico com filtros para **Ligas**, **Copas**, **Clubes** e **Jogadores**.
- Busca textual nos registros.
- Fichas com origem, marcos históricos, legado, fatos essenciais, fonte de pesquisa e ligações para entidades relacionadas.
- Interface responsiva, incluindo telas de celular, em português brasileiro.

## Acervo inicial

O módulo de dados está em `src/data/archive.ts`. Cada registro possui identificador estável, categoria, país, ano de referência, resumo, origem, cronologia, legado, fontes e conexões. Quando há informações essenciais verificadas, elas aparecem em uma ficha de dados rápidos.

A primeira coleção contém **40 registros**: 7 ligas, 5 copas, 18 clubes e 10 jogadores. É um núcleo inicial pesquisado, não uma enciclopédia completa. Elencos, temporadas, estatísticas e títulos serão acrescentados progressivamente e sempre com referência própria.

## Tecnologias

- React 19 + TypeScript
- Vite
- CSS responsivo
- Lucide React
- Dados cartográficos Natural Earth em GeoJSON
- Bandeiras servidas pelo FlagCDN

## Executar localmente

Requisitos: Node.js 20.19+ ou 22.12+.

```bash
npm install
npm run dev
```

Para validar a versão de produção:

```bash
npm run build
npm run preview
```

## Fontes e critérios editoriais

O acervo prioriza federações, confederações, ligas, clubes, arquivos e publicações reconhecidas. Cada ficha indica uma fonte-base; novos dados estatísticos ou de temporadas devem receber referências específicas. Ano de fundação, ano de criação de uma liga e primeira temporada não são necessariamente a mesma coisa e devem ser distinguidos. Também se deve separar ano civil de temporada (por exemplo, 2002 e 2001/02).

Conteúdo não confirmado deve permanecer marcado como pendente. Não inventar números, elencos, estatísticas, títulos ou relações entre jogadores e clubes.

## Estado do projeto

A navegação inicial do acervo e as fichas históricas já estão incorporadas ao código. A base está sendo ampliada por etapas. Ainda é necessário executar build e testes formais, validar o comportamento em iPhone e desktop e revisar cada ficha antes de considerar o conteúdo completo.

---
Projeto de portfólio em desenvolvimento.
