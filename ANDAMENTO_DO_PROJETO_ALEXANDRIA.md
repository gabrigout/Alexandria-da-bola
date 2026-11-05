# ALEXANDRIA — CONTROLE E ANDAMENTO DO PROJETO

> **Documento central de continuidade do projeto.**  
> Última atualização: **05/11/2026**  
> Repositório: [gabrigout/Alexandria-da-bola](https://github.com/gabrigout/Alexandria-da-bola)  
> Site publicado: [https://alexandria-da-bola.vercel.app](https://alexandria-da-bola.vercel.app)

Este arquivo é a fonte de contexto compartilhada entre o usuário, o ChatGPT e **qualquer outra IA, pessoa desenvolvedora ou colaborador** que participe da Alexandria. Ele registra o que é o projeto, o que já foi construído, as decisões tomadas, as etapas, as pendências e o histórico de mudanças.

**Regra principal: nenhuma mudança no projeto deve ficar sem registro aqui.** Isso vale para alterações de código, conteúdo, design, estrutura, tecnologia, dados, funcionalidades, publicação e decisões de direção.

---

## 1. Instrução obrigatória para qualquer IA que assumir o projeto

Antes de sugerir ou executar qualquer alteração:

1. Leia este documento inteiro.
2. Consulte o repositório e confira os arquivos atuais. Este documento é um histórico de continuidade, não substitui a verificação do estado real do código.
3. Leia o README e os arquivos diretamente relacionados à tarefa.
4. Considere as decisões marcadas como **definidas** como compromissos atuais. Não trate ideias marcadas como **provisórias**, **em discussão** ou **pendentes** como decisões aprovadas.
5. Não mude o conceito, o escopo ou a identidade do produto por conta própria. Apresente a proposta e siga a direção que o usuário aprovar.
6. Preserve funcionalidades existentes que não façam parte da alteração solicitada.
7. Não invente fatos históricos, estatísticas, fontes, resultados de testes ou status de publicação. Diferencie informação confirmada, hipótese e conteúdo ainda não pesquisado.

### Obrigação de atualização do documento

**Toda IA que fizer ou orientar uma mudança que efetivamente entre no projeto deve registrar essa mudança neste arquivo.** Não importa se a alteração foi feita pelo ChatGPT, Claude, Gemini, Copilot, outra IA ou por uma pessoa com auxílio de IA.

- Atualize a seção de estado atual quando uma mudança alterar o que o projeto é ou o que já funciona.
- Acrescente uma entrada ao **Histórico de alterações** para cada conjunto de mudanças relacionado.
- Registre arquivos afetados, motivo, resultado, decisões tomadas, validações realizadas e situação do deploy.
- Sempre que possível, atualize este documento no mesmo commit das alterações de código ou imediatamente depois.
- Não apague nem reescreva entradas antigas do histórico para esconder mudanças. Corrija informações incorretas com uma nova anotação.
- Se a IA não tiver acesso de escrita ao GitHub, deve entregar ao usuário o texto exato da atualização para ser incorporado aqui. Deve avisar claramente que o documento ainda não foi atualizado no repositório.
- Se o usuário informar que outra IA fez mudanças, quem assumir a continuidade deve registrar essas mudanças com base nas informações disponíveis e marcar como **não verificadas** aquilo que ainda não foi conferido no código.
- Não declare uma alteração como testada se apenas leu o código. Informe separadamente o que foi inspecionado, o que foi executado e o que foi confirmado no site.

### Prompt de continuidade para copiar em outra IA

> Você está participando do desenvolvimento do projeto Alexandria — A Biblioteca do Futebol. Antes de fazer qualquer coisa, leia integralmente o arquivo `ANDAMENTO_DO_PROJETO_ALEXANDRIA.md` na raiz do repositório GitHub `gabrigout/Alexandria-da-bola`. Ele é o documento central de continuidade e contém o contexto, as decisões, as fases, o estado atual e as regras de colaboração.
>
> Confira também o código atual antes de trabalhar. Não suponha que o documento substitui a leitura dos arquivos. Respeite as decisões aprovadas e não transforme ideias provisórias em decisões sem autorização do usuário.
>
> **Registre obrigatoriamente neste mesmo documento toda mudança que você fizer no projeto**, inclusive alterações de código, interface, conteúdo, estrutura, tecnologia, dados ou configuração. Ao concluir, atualize o estado atual e acrescente uma entrada no Histórico de alterações, informando arquivos, motivo, resultado, testes/validações realmente executados e situação do deploy. Faça o commit do registro junto com a mudança ou imediatamente depois. Se não puder editar o documento no GitHub, entregue a atualização pronta para o usuário e deixe explícito que ela ainda não foi registrada.
>
> Não invente fatos, fontes nem resultados de testes. Ao terminar, informe o que mudou, o que foi verificado, o que falta e confirme se o documento de continuidade foi atualizado.

---

## 2. Identificação e objetivo

**Nome de trabalho:** Alexandria — A Biblioteca do Futebol  
**Assinatura usada no protótipo:** THE FOOTBALL MEMORY ARCHIVE  
**Natureza:** projeto de portfólio e produto digital em desenvolvimento.  
**Objetivo inicial:** criar uma experiência digital dedicada à memória e à história do futebol, com navegação, pesquisa e consulta a registros históricos.

A ideia original foi inspirada no conceito de uma grande biblioteca/arquivo histórico: um lugar para explorar a história do futebol, seus clubes, jogadores, competições, temporadas, estatísticas, personagens e acontecimentos.

**Atenção: a direção do produto está em reavaliação.** O conceito acima descreve a origem do projeto, mas não deve ser tratado como escopo final imutável. O usuário sinalizou que deseja mudar um pouco a proposta e ainda vai apresentar a nova direção. Até essa conversa acontecer, não faça uma reformulação ampla por conta própria.

---

## 3. Histórico da ideia e experiência imaginada inicialmente

A primeira proposta tinha estes elementos:

- Uma entrada imersiva, com estética editorial e atmosfera de arquivo histórico.
- Paleta escura, com preto e detalhes dourados.
- Uma representação tridimensional de partículas no centro da experiência, inicialmente imaginada como um cérebro formado por pontos.
- Cada ponto/ano serviria como caminho para explorar registros do futebol.
- Uma linha do tempo ampla, começando em 1863 e avançando até o presente.
- Registros sobre acontecimentos históricos, clubes, jogadores, competições, temporadas, títulos, artilheiros, estatísticas e personagens.
- Possibilidade futura de relacionar e comparar clubes, jogadores e temporadas.
- Experiência responsiva, incluindo uso em celular.

Frase de apresentação usada no primeiro protótipo:

> Toda história deixa vestígios. No futebol, cada ano conta uma história.

Esses elementos são referências da concepção inicial. A nova direção que o usuário apresentar terá prioridade e deverá ser registrada como uma decisão de produto.

---

## 4. Fases do projeto

As fases abaixo organizam o trabalho conhecido até agora. As fases futuras são um roteiro de referência e podem ser reorganizadas depois da redefinição do conceito.

| Fase | Nome | Situação | Descrição |
|---|---|---|---|
| 0 | Fundação técnica e repositório | **Concluída** | Criar o projeto React/Vite, estruturar os arquivos iniciais e conectar o GitHub. |
| 1 | Primeiro protótipo visual | **Concluída como protótipo** | Criar a identidade visual inicial, a tela de entrada, a representação de partículas, a linha do tempo e o primeiro painel de registro. Não significa que a experiência final esteja pronta. |
| 2 | Redefinição do conceito e da experiência | **Concluída na direção da entrada** | Conceito do museu/biblioteca monumental com globo terrestre suspenso aprovado e documentado na seção 12. |
| 3 | Arquitetura do produto e dos dados | **Planejada** | Definir navegação, entidades, relações, estrutura de conteúdo, fontes e arquitetura técnica de acordo com o conceito aprovado. |
| 4 | Desenvolvimento das funcionalidades centrais | **Planejada** | Construir os fluxos principais de navegação, consulta, pesquisa e interação definidos para o produto. |
| 5 | Conteúdo e acervo | **Planejada** | Pesquisar, cadastrar, revisar e referenciar os conteúdos que fizerem parte do escopo aprovado. |
| 6 | Qualidade e evolução do portfólio | **Planejada** | Testar funcionamento, responsividade, acessibilidade, desempenho, consistência editorial e apresentação pública. |

### Foco atual

**A direção criativa da nova entrada está aprovada. O foco é validar o protótipo visual implementado em `main`.**

O novo conceito coloca um globo terrestre realista suspenso no centro de um salão clássico de biblioteca/museu. A navegação prevista começa em Mundo → Continente → País. O código inicial dessa experiência foi incorporado, mas build, testes em dispositivo e atualização do deploy ainda precisam ser confirmados.

Não ampliar o acervo nem tratar a seleção demonstrativa de países como conteúdo final antes de validar a experiência e definir a arquitetura dos dados.

---

## 5. O que já foi feito

### Repositório e publicação

- Repositório GitHub criado: [gabrigout/Alexandria-da-bola](https://github.com/gabrigout/Alexandria-da-bola).
- Branch principal identificada: `main`.
- Projeto importado na Vercel.
- Deploy inicial concluído e site aberto com sucesso no navegador do usuário.
- URL pública observada: [https://alexandria-da-bola.vercel.app](https://alexandria-da-bola.vercel.app).
- O repositório foi identificado anteriormente como privado. Conferir a visibilidade atual antes de qualquer mudança ou de apresentar o código como público.

### Base técnica criada

Tecnologias identificadas no projeto:

- React 19
- TypeScript
- Vite
- Three.js
- CSS responsivo
- Lucide React para ícones

Configurações de publicação usadas na Vercel:

- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`
- Nenhuma variável de ambiente foi necessária na configuração inicial.

Scripts existentes em `package.json`:

- `npm run dev`
- `npm run build`
- `npm run preview`

### Arquivos principais já identificados

- `package.json`
- `index.html`
- `vite.config.ts`
- `tsconfig.json`
- `src/main.tsx`
- `src/App.tsx`
- `src/index.css`
- `.gitignore`
- `README.md`

A lista deve ser conferida no repositório antes de futuras alterações, pois pode mudar.

### Interface do protótipo inicial (antes da nova entrada)

O protótipo observado contém:

- Tela de entrada com o título “Toda história deixa vestígios”.
- Texto de apresentação e botão “Entrar na biblioteca”.
- Identidade visual preta e dourada, com tipografia editorial.
- Objeto de partículas renderizado com Three.js. Na implementação atual ele se aproxima mais de uma forma oval/esférica abstrata do que de um cérebro claramente reconhecível.
- Linha do tempo com nove marcos históricos.
- Busca por ano ou nome do marco cadastrado.
- Painel/modal ao selecionar um ano ou marco.
- Adaptação visual para telas pequenas.

### Marcos cadastrados no código inicial

A lista inicial de marcos em `src/App.tsx` contém:

- 1863 — As regras do jogo
- 1872 — O primeiro encontro
- 1904 — Uma federação mundial
- 1930 — A primeira Copa
- 1958 — O mundo conhece Pelé
- 1970 — O tri no México
- 1991 — Uma nova era
- 2002 — O pentacampeonato
- 2022 — Uma final para a história

Esses são apenas marcos demonstrativos do protótipo, não um acervo completo ou uma pesquisa histórica exaustiva.

---

## 6. Histórico do ponto de parada anterior

**Nota:** esta seção registra a experiência do protótipo original, antes da redefinição aprovada na seção 12. Ela não descreve a versão atual do código.

Na versão inicial publicada, o usuário abriu o site pelo celular e selecionou o registro de 1863.

O painel exibiu:

- Ano: 1863
- Título: “As regras do jogo”
- Texto curto informando que a Football Association foi fundada em Londres e estabeleceu um código comum para o futebol.
- Etiquetas “Arquivo cronológico” e “Registro em construção”.

O usuário avaliou a experiência com a observação:

> “cada ano conta algo simples e raso”

Foi discutida uma possibilidade de aprofundar os registros históricos, com contexto, acontecimentos, personagens, competições, legado e fontes. Porém, **essa proposta não foi aprovada como direção final**: em seguida, o usuário disse “que tal mudar um pouco?” e pediu primeiro este documento de continuidade para poder compartilhar o contexto com outras IAs.

**Portanto, o próximo passo não é alterar o código. É ouvir a nova proposta do usuário e registrar a direção escolhida.**

---

## 7. Limitações conhecidas do protótipo atual

Com base na leitura de `src/App.tsx` e nos testes visuais relatados pelo usuário:

1. A linha do tempo apresenta apenas nove marcos cadastrados.
2. A busca filtra os marcos que existem na lista; ainda não é uma busca abrangente por todo o conteúdo da história do futebol.
3. A seleção de anos sem marco cadastrado abre um painel genérico, sem conteúdo histórico específico.
4. O clique nos pontos do objeto 3D gera um ano a partir do índice do ponto; ainda não existe uma associação editorial real entre cada partícula e um acontecimento histórico.
5. O painel de registro tem conteúdo curto e não representa ainda uma ficha histórica completa.
6. Não há, no protótipo inspecionado, uma arquitetura de acervo com entidades relacionadas para jogadores, clubes, competições e temporadas.
7. A interface foi aberta com sucesso no celular, mas ainda precisa de avaliação mais ampla em diferentes tamanhos de tela e dispositivos.
8. Não foi feita, nesta etapa de acompanhamento, uma execução independente de `npm run build` ou de testes automatizados. O deploy inicial foi concluído e o site foi visualizado no navegador, mas isso não substitui uma rotina formal de testes.

Esses pontos descrevem o estado do primeiro protótipo. Algumas limitações podem deixar de ser relevantes dependendo da nova proposta.

---

## 8. Decisões e princípios de trabalho

### Decisões técnicas/operacionais atuais

- O repositório GitHub é a referência central do código.
- A branch principal conhecida é `main`.
- O site inicial está publicado pela Vercel.
- O projeto foi iniciado com React, TypeScript, Vite e Three.js.
- O desenvolvimento tem sido conduzido com apoio de IA e alterações diretamente no GitHub, pois o usuário está trabalhando pelo celular e não está usando terminal local neste momento.

### Princípios que devem ser preservados

- **Não inventar história:** informações factuais devem ser pesquisadas e sustentadas por fontes adequadas.
- **Separar ano civil de temporada:** por exemplo, 2002 não é necessariamente a mesma referência que a temporada 2001/02.
- **Ser transparente:** marcar informações como pendentes, não confirmadas ou indisponíveis quando for o caso.
- **Não confundir protótipo com produto pronto:** aparência publicada não significa que conteúdo, funcionalidades ou validações estejam completos.
- **Priorizar a direção do usuário:** sugestões de IA são propostas até serem aprovadas.
- **Pensar no portfólio:** registrar escolhas que contribuam para um projeto demonstrável, bem estruturado e funcional, sem aumentar o escopo sem necessidade.

### Decisões ainda abertas

- Estrutura definitiva da arquitetura de dados e necessidade (ou não) de backend.
- Fonte cartográfica e método preciso para identificar/realçar continentes e países no globo.
- Profundidade e prioridade dos módulos nacionais: história, ligas, clubes, seleções, jogadores, títulos, rivalidades, épocas, partidas e documentos.
- Fontes históricas e padrão editorial para cada tipo de registro.
- Comportamento final de zoom, seleção, painéis e transições após os testes em dispositivos reais.
- Inclusão e posicionamento de estátuas/esculturas de grandes nomes no ambiente.

As decisões aprovadas sobre a composição central e a direção visual do salão estão registradas na seção 12; os pontos acima continuam pendentes.

---

## 9. Padrão obrigatório para conteúdo histórico

Quando o projeto voltar a trabalhar com fatos históricos:

- Priorize fontes primárias, arquivos oficiais, federações, clubes, competições, documentos e publicações reconhecidas.
- Registre a fonte junto ao dado ou ao texto correspondente, de forma que seja possível rastrear a informação.
- Diferencie fato confirmado, interpretação editorial e informação ainda em apuração.
- Confira datas, nomes, placares, títulos, estatísticas e contexto em fontes adequadas.
- Não preencha lacunas com números ou narrativas inventadas.
- Considere que diferentes fontes podem usar critérios distintos para estatísticas e reconhecimentos; explique divergências relevantes.

A estrutura concreta das referências deverá ser definida conforme a nova direção do produto.

---

## 10. Como registrar cada nova mudança

Toda mudança incorporada ao projeto deve gerar uma nova entrada no histórico. Use este modelo e preencha os campos aplicáveis:

```markdown
### AAAA-MM-DD — Título objetivo da mudança

- **Responsável:** ChatGPT / Claude / Gemini / outra IA / usuário / colaborador
- **Tipo:** conceito / design / código / conteúdo / dados / arquitetura / infraestrutura / publicação
- **Motivo:** por que a mudança foi feita.
- **O que mudou:** descrição objetiva do antes e depois.
- **Arquivos afetados:** listar caminhos dos arquivos.
- **Decisões relacionadas:** decisões aprovadas e questões que continuam pendentes.
- **Validação:** testes executados e seus resultados; informar também o que não foi testado.
- **Commit/PR:** link ou identificador, quando disponível.
- **Deploy:** não publicado / publicado / publicação pendente / não se aplica.
```

### Histórico de alterações

#### 2026-11-05 — Criação do documento central de continuidade

- **Responsável:** ChatGPT, com base no histórico do projeto e na inspeção dos arquivos do repositório.
- **Tipo:** documentação / governança do projeto.
- **Motivo:** criar um ponto único de continuidade para o usuário e para qualquer IA que venha a colaborar com a Alexandria.
- **O que mudou:** criado este documento com a visão inicial, fases, estado técnico, publicação, limitações, ponto de parada, regras de colaboração e modelo obrigatório de histórico.
- **Arquivos afetados:** `ANDAMENTO_DO_PROJETO_ALEXANDRIA.md`.
- **Decisões relacionadas:** a direção do produto está em reavaliação; aguardar a nova proposta do usuário antes de alterar o conceito ou o código.
- **Validação:** conteúdo confrontado com o README, `package.json`, `src/App.tsx`, `src/index.css`, `index.html` e o estado publicado relatado pelo usuário. Não foi executado build local.
- **Commit/PR:** registrado no commit de criação deste arquivo no GitHub.
- **Deploy:** não se aplica; mudança apenas documental.

#### 2026-11-05 — Implementação do protótipo visual da nova entrada

- **Responsável:** ChatGPT, seguindo a direção aprovada pelo usuário.
- **Tipo:** design / código / documentação.
- **Motivo:** iniciar a materialização do conceito do salão monumental com globo terrestre suspenso.
- **O que mudou:** a esfera abstrata de partículas foi substituída por um globo 3D; foram adicionados rotação por toque/arraste, zoom por pinça/roda do mouse, identificação aproximada de continentes, painel demonstrativo de países, navegação por seções e cartões de exploração. A linha do tempo e a busca existentes foram preservadas como conteúdo complementar. A composição arquitetônica do salão foi criada em CSS e o HTML recebeu novos metadados.
- **Arquivos afetados:** `src/App.tsx`, `src/index.css`, `index.html`, `README.md`, `ANDAMENTO_DO_PROJETO_ALEXANDRIA.md`.
- **Decisões relacionadas:** o globo é o protagonista visual e permanece suspenso, sem pedestal. A seleção geográfica por limites aproximados e a lista de países são apenas demonstrativas; ainda não existe acervo nacional integrado.
- **Validação:** leitura prévia dos arquivos atuais e confirmação de gravação dos commits no GitHub. Não foi executado `npm run build`, teste automatizado ou teste visual em dispositivo físico. A execução de workflows do GitHub não retornou workflows associados ao commit consultado. O site de produção não pôde ser confirmado nesta etapa.
- **Commits de código/documentação:** `9fb7204` (App inicial), `f4bec98` (CSS), `44ff97c` (metadados), `99989fb` (README) e `ff2cfb9` (URL da textura terrestre).
- **Deploy:** atualização de produção não verificada; não afirmar que o novo protótipo já está publicado.


---

## 11. Checklist para retomar o projeto

Quando uma nova sessão ou outra IA assumir o trabalho:

- [ ] Ler este documento integralmente.
- [ ] Conferir o estado atual do repositório e da branch principal.
- [ ] Ler o README e os arquivos relacionados à tarefa.
- [ ] Conferir as decisões aprovadas nas seções 12 e 13 antes de propor novas mudanças de conceito.
- [ ] Registrar as decisões aprovadas neste documento.
- [ ] Só então planejar e executar mudanças de código.
- [ ] Atualizar este documento em toda mudança incorporada.
- [ ] Informar ao usuário o que foi alterado, o que foi verificado e o que ainda falta.

**Ponto de retomada atual:** validar o protótipo visual da nova entrada em desktop e iPhone; verificar o carregamento da textura e o desempenho do globo; depois planejar a arquitetura de continentes e países.


---

## 12. Protótipo da nova entrada — 5 de novembro de 2026

- **Direção aprovada:** transformar a página inicial em um museu/biblioteca monumental da história do futebol, com um globo terrestre realista suspenso no centro do salão.
- **Arquivos alterados:**
  - \`src/App.tsx\`: substituída a esfera abstrata por um globo 3D em Three.js; adicionados rotação por arraste/toque, zoom por pinça/roda do mouse, seleção aproximada de continentes por clique/toque, painel de países demonstrativo, navegação por seções, cartões de exploração e registros da linha do tempo.
  - \`src/index.css\`: criada a ambientação visual do salão clássico com arcos, colunas, estantes, piso geométrico, iluminação dourada, tipografia editorial e layout responsivo para telas móveis.
- **Experiência do globo:** textura terrestre externa carregada por URL com mapa procedural de contingência caso a textura não esteja disponível; atmosfera sutil, rotação lenta e controles por ponteiro. O mapa procedural é ilustrativo e a identificação de continentes é aproximada, não uma fronteira geográfica precisa.
- **Hierarquia demonstrativa:** Mundo → Continente → País. A seleção de país mostra categorias previstas para o acervo, mas ainda não abre páginas nacionais nem contém base de dados histórica completa.
- **Conteúdo preservado/adaptado:** linha do tempo de marcos históricos mantida e reorganizada como seção secundária, com painel de registro.
- **Decisões de escopo:** este é um primeiro protótipo navegável da entrada; não representa a conclusão do acervo, da pesquisa histórica, das páginas de competições, clubes, seleções ou jogadores.
- **Validação:** alterações gravadas na branch \`main\` por commits GitHub. Não foi executado build, teste automatizado, teste visual em dispositivo físico ou verificação do deploy nesta etapa. Não afirmar que o deploy de produção já foi atualizado até conferir a Vercel.
- **Próxima etapa:** validar a tela em iPhone e desktop; ajustar escala/posição do globo e composição do salão; conferir o carregamento da textura e consumo de GPU; depois desenhar a experiência completa de continente e país com dados históricos verificados.
