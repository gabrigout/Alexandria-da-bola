# Alexandria — A Biblioteca do Futebol

Uma biblioteca digital interativa dedicada à história do futebol. Explore temporadas, clubes, jogadores, competições, estatísticas e acontecimentos históricos em uma experiência imersiva que transforma a memória do futebol em conhecimento acessível.

> Toda história deixa vestígios. No futebol, cada ano conta uma história.

## Conceito

A Alexandria transforma a memória do futebol em um arquivo digital navegável. A experiência combina uma identidade visual editorial, uma linha do tempo e uma representação tridimensional formada por partículas.

## Tecnologias

- React + TypeScript
- Vite
- Three.js
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

**Primeiro protótipo de interface.** A estrutura inicial inclui:

- Página de entrada com identidade visual escura e detalhes dourados.
- Objeto abstrato tridimensional em partículas, renderizado com Three.js.
- Linha do tempo com marcos históricos selecionáveis.
- Busca por ano ou acontecimento.
- Painel de registro para cada ano selecionado.
- Layout adaptável a telas menores.

Os textos históricos atualmente exibidos são uma amostra inicial, não um catálogo completo. A expansão do acervo deverá usar fontes verificáveis e diferenciar ano civil de temporada esportiva (por exemplo, 2002 e 2001/02). Dados não confirmados ou indisponíveis não devem ser inventados.

## Próximas etapas

1. Refinar a forma tridimensional e a interação com os anos.
2. Criar a arquitetura de dados históricos.
3. Desenvolver páginas de clubes, jogadores, competições e temporadas.
4. Adicionar filtros, relações entre registros e comparações.
5. Integrar fontes e referências para cada informação histórica.
6. Testar acessibilidade, desempenho e responsividade.

---

Projeto de portfólio em desenvolvimento.
