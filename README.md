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

O catálogo geral está em `src/data/archive.js`. A Bundesliga possui módulo próprio em `src/data/bundesliga/`, com índice permanente de temporadas, entidades conectadas, referências individualizadas e validação estrutural em JavaScript.

A primeira coleção contém **49 registros**: 7 ligas, 5 copas, 25 clubes e 12 jogadores. É um núcleo inicial pesquisado, não uma enciclopédia completa. Elencos, temporadas, estatísticas e títulos serão acrescentados progressivamente e sempre com referência própria.

## Tecnologias

- React 19 + JavaScript (JSX)
- Vite
- HTML e CSS responsivo
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

## Bundesliga

O módulo indexa temporadas de 1963/64 a 2026/27. A temporada inaugural possui classificação completa, 15 artilheiros, marcos históricos e conexão com a final da DFB-Pokal de 1963/64. Temporadas ainda não pesquisadas permanecem sinalizadas como pendentes. Futebol feminino e seleções nacionais possuem catálogos separados.

## Estado do projeto

A aplicação utiliza JavaScript/JSX, HTML e CSS com React e Vite. O módulo inicial da Bundesliga foi incorporado. Build, testes no navegador/iPhone e confirmação do deploy devem ser verificados após a publicação.

---
Projeto de portfólio em desenvolvimento.


## Base técnica

- React + TypeScript para a aplicação, componentes e modelos do acervo.
- Vite para desenvolvimento e build.
- JavaScript permanece nas configurações auxiliares, como `vite.config.js`.
- `npm run typecheck` verifica os tipos.
- `npm test` executa os testes automatizados de validação da Bundesliga.
- `npm run build` executa tipagem, testes e build de produção.
