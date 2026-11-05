# Alexandria — A Biblioteca do Futebol

Uma biblioteca digital interativa dedicada à memória e à história do futebol. A experiência parte de um grande salão de biblioteca/museu, com um globo terrestre 3D suspenso que conduz a exploração do mundo para continentes e países.

> O futebol tem um mundo de histórias. Explore cada uma delas.

## Conceito e experiência

A página de entrada apresenta:

- Um ambiente inspirado em um salão clássico de biblioteca e museu, com arquitetura monumental, estantes, colunas e piso de mármore escuro.
- Um globo terrestre 3D realista como elemento central, suspenso no espaço e sem pedestal.
- Interação por arrasto/toque para girar, gesto de pinça para zoom em dispositivos móveis e roda do mouse para zoom em desktop.
- Seleção aproximada de continentes no globo, com navegação demonstrativa para países.
- Caminho de navegação conceitual: Mundo → Continente → País → acervo nacional.
- Áreas de entrada para competições, personagens e linha do tempo.
- Linha do tempo histórica e busca preservadas como conteúdo complementar do protótipo.

A identidade visual combina preto, grafite, mármore, bronze e ouro envelhecido. A arquitetura do salão foi criada com CSS e o atlas é desenhado em SVG a partir de geometrias GeoJSON do Natural Earth.

## Tecnologias

- React 19 + TypeScript
- Vite
- CSS responsivo
- Lucide React

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

## Estado atual

**Protótipo visual do atlas plano interativo incorporado ao código; validação pendente.** O atlas carrega geometrias de países em GeoJSON do Natural Earth por uma URL externa. A interação de zoom, arrasto e seleção de países está implementada; a validação visual e o teste de carregamento ainda estão pendentes. A fronteiras vêm da base cartográfica Natural Earth em escala mundial; países muito pequenos e áreas de alta latitude têm limitações de representação. A lista de países e a navegação do acervo ainda são demonstrativas.

Os registros históricos na linha do tempo continuam sendo uma amostra inicial, não um catálogo completo. A expansão do acervo deverá usar fontes verificáveis e diferenciar ano civil de temporada esportiva (por exemplo, 2002 e 2001/02). Dados não confirmados ou indisponíveis não devem ser inventados.

## Próximas etapas

1. Validar visualmente a sala, o globo e os gestos em desktop e iPhone.
2. Refinar a seleção de continentes com dados cartográficos reais, em vez de limites aproximados.
3. Definir a estrutura de dados e a navegação Mundo → Continente → País.
4. Desenvolver o acervo nacional e as páginas de competições, clubes, seleções e jogadores.
5. Pesquisar e referenciar cada conteúdo histórico.
6. Testar acessibilidade, desempenho, responsividade e publicação.

---

Projeto de portfólio em desenvolvimento.
