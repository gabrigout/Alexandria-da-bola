# DIRETRIZ DO PROJETO — ALEXANDRIA DA BOLA

> **Documento central de continuidade do projeto.**  
> Última atualização: **05/11/2026**  
> Repositório: [gabrigout/Alexandria-da-bola](https://github.com/gabrigout/Alexandria-da-bola)  
> Site publicado: [https://alexandria-da-bola.vercel.app](https://alexandria-da-bola.vercel.app)

Este arquivo é a fonte de contexto compartilhada entre o usuário, o ChatGPT e **qualquer outra IA, pessoa desenvolvedora ou colaborador** que participe da Alexandria. Ele registra o que é o projeto, o que já foi construído, as decisões tomadas, as etapas, as pendências e o histórico de mudanças.

**Regra principal: nenhuma mudança no projeto deve ficar sem registro aqui.** Isso vale para alterações de código, conteúdo, design, estrutura, tecnologia, dados, funcionalidades, publicação e decisões de direção.

---

## 1. Instrução obrigatória para qualquer IA que assumir o projeto

Antes de sugerir ou executar qualquer alteração:

### Identificação obrigatória da IA

**Toda IA deve se identificar explicitamente no início de cada nova tarefa ou sessão de trabalho, antes de pesquisar, planejar ou alterar o projeto.** A identificação deve aparecer também no relatório final da tarefa.

Use este formato:

- **IA/assistente:** nome do produto ou assistente (ex.: ChatGPT, Claude, Gemini, Copilot).
- **Modelo:** nome exato do modelo, se estiver disponível na interface ou no ambiente. Nunca invente uma versão; se não souber, escreva "não informado".
- **Responsabilidade nesta tarefa:** papel que vai desempenhar (ex.: pesquisador histórico, desenvolvedor frontend, revisor de dados, responsável por testes).
- **Escopo autorizado:** o que pretende investigar ou modificar nesta tarefa.

A IA deve se identificar novamente quando iniciar uma nova tarefa, mesmo que já tenha se identificado em uma tarefa anterior. Não precisa repetir a identificação em todas as mensagens da mesma tarefa, mas deve mantê-la no registro de alterações. Se estiver apenas respondendo uma dúvida sem trabalhar no projeto, a identificação não é necessária.

### Leitura e diagnóstico obrigatórios

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

> Você está participando do desenvolvimento do projeto Alexandria — A Biblioteca do Futebol. Antes de fazer qualquer coisa, leia integralmente o arquivo `DIRETRIZ_DO_PROJETO.md` na raiz do repositório GitHub `gabrigout/Alexandria-da-bola`. Ele é o documento central de continuidade e contém o contexto, as decisões, as fases, o estado atual e as regras de colaboração.
>
> **Antes de qualquer ação, identifique-se:** informe o nome do assistente/IA, o modelo exato quando disponível (sem inventar versões), a função que exercerá e o escopo da tarefa. Repita essa identificação no relatório final e no registro de alterações. Se o modelo não estiver visível, escreva "não informado".
>
> Confira também o código atual antes de trabalhar. Não suponha que o documento substitui a leitura dos arquivos. Respeite as decisões aprovadas e não transforme ideias provisórias em decisões sem autorização do usuário.
>
> **Registre obrigatoriamente neste mesmo documento toda mudança que você fizer no projeto**, inclusive alterações de código, interface, conteúdo, estrutura, tecnologia, dados ou configuração. Ao concluir, atualize o estado atual e acrescente uma entrada no Histórico de alterações, informando arquivos, motivo, resultado, testes/validações realmente executados e situação do deploy. Faça o commit do registro junto com a mudança ou imediatamente depois. Se não puder editar o documento no GitHub, entregue a atualização pronta para o usuário e deixe explícito que ela ainda não foi registrada.
>
> Não invente fatos, fontes nem resultados de testes. Ao terminar, informe o que mudou, o que foi verificado, o que falta e confirme se o documento de continuidade foi atualizado.
>
> **Perfil de colaboração do usuário — Vibe Coder:** o usuário conduz o produto por ideias, objetivos, referências e aprovação de resultados; não é responsável por programar nem por executar comandos técnicos. Assuma a execução técnica de ponta a ponta sempre que as ferramentas e permissões disponíveis permitirem. Não peça que o usuário edite código, rode terminal, resolva conflitos Git ou localize arquivos como procedimento padrão. Se uma ação realmente depender dele (por exemplo, autorização, credencial, escolha de produto ou operação local inacessível), explique exatamente o motivo e dê instruções simples, sem jargão desnecessário.
>
> Apresente decisões técnicas em linguagem clara: o que será feito, por que, o que pode mudar e como será verificado. Não transfira ao usuário decisões internas de implementação que a IA pode resolver com segurança. Quando houver alternativas que mudem significativamente o produto, custo, privacidade, segurança ou experiência, explique prós e contras e peça aprovação antes de escolher.
>
> Nunca peça ao usuário para copiar e colar código como primeira solução. Prefira editar diretamente o repositório/ambiente conectado. Se não houver acesso técnico, entregue uma instrução pronta para outra IA ou ferramenta executar, e deixe claro que a alteração ainda não foi feita.
>
> O usuário aprova direção e resultado; a IA responde pela qualidade da execução técnica, pela validação e pela documentação.

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

A Alexandria possui duas camadas de organização, que não devem ser confundidas:

1. **Fases gerais do produto:** etapas amplas de concepção, arquitetura, desenvolvimento, conteúdo e qualidade.
2. **Etapas operacionais do acervo:** lotes menores de pesquisa, modelagem, cadastro e validação dentro de um módulo específico, como a Bundesliga.

As etapas operacionais não substituem nem reiniciam as fases gerais. A numeração usada no histórico detalha a execução do acervo e deve ser lida junto ao quadro de situação abaixo.

### Fases gerais do produto

| Fase | Nome | Situação conhecida | Escopo |
|---|---|---|---|
| 0 | Fundação técnica e repositório | Concluída | Base React/Vite, estrutura inicial, GitHub e Vercel. |
| 1 | Protótipo visual inicial | Concluída como protótipo | Primeira identidade visual e navegação experimental. |
| 2 | Direção do produto e experiência | Direção de entrada aprovada; evolução contínua | Salão/museu, atlas-múndi e acervo histórico conectado. Mudanças amplas dependem de aprovação do usuário. |
| 3 | Arquitetura do produto e dos dados | Parcialmente implementada; revisar conforme módulos | Entidades, relações, fontes, validações e estrutura dos módulos. Não presumir que toda arquitetura está concluída. |
| 4 | Funcionalidades centrais | Em desenvolvimento contínuo | Navegação, atlas, busca, fichas, relações e experiência de consulta. |
| 5 | Conteúdo e acervo histórico | Em andamento | Pesquisa, cadastro e revisão por lotes, começando pela Bundesliga 1963/64. |
| 6 | Qualidade, revisão e evolução | Parcial/contínua | Testes, revisão visual, acessibilidade, desempenho, consistência editorial e publicação. |

### Etapas operacionais do acervo Bundesliga

| Etapa | Trabalho | Situação |
|---|---|---|
| 1 | Auditoria documental da temporada inaugural e conferência da artilharia | Concluída e registrada na seção 25. |
| 2 | Consolidação/conferência da artilharia e integridade dos registros | Concluída e registrada na seção 25. |
| 3 | Cadastro de partidas históricas especiais e correção editorial sobre a expulsão de Helmut Rahn | Concluída e registrada na seção 27. |
| 4 | Primeiro lote de ampliação das partidas documentadas | Concluído: duas partidas da 2ª rodada adicionadas; seção 28. |
| 5 | Inventário e cadastro das 240 partidas em lotes cronológicos | **Próxima etapa.** Existem 5 registros individuais; falta conferir a matriz completa e cadastrar os 235 restantes. Execução em lotes pequenos, começando após sincronização/diagnóstico no VS Code. |
| 6 | Reconciliação estatística e auditoria integral da temporada | Pendente: conferir 240 partidas, 16 clubes, 30 jogos por clube, 857 gols, classificação, pontuação e integridade dos eventos. |
| 7 | Fechamento editorial do dossiê Bundesliga 1963/64 | Pendente: consolidar fontes, divergências, lacunas, fichas e critérios de completude. |
| 8 | Revisão da interface e qualidade do módulo Bundesliga | Pendente: testar navegação, fichas, responsividade, acessibilidade, busca/filtros e inspeção visual. |
| 9 | Aceite e encerramento formal da temporada inaugural | Pendente: checklist final, relatório de cobertura, documentação e decisão sobre merge/publicação. |

**Regra de numeração:** a expressão “Fase 5” pode se referir à fase geral de conteúdo e acervo; “Etapa 5” pode se referir ao próximo lote operacional da Bundesliga. A IA deve sempre dizer qual camada está mencionando. Não renumerar etapas concluídas nem apagar seu histórico.

### Foco atual

**A base da aplicação está restaurada para TypeScript e a expansão enciclopédica da Bundesliga está em andamento.**

O foco imediato é consolidar a temporada inaugural de 1963/64 com dados documentados e criar fichas enciclopédicas dos 16 clubes participantes. O índice de temporadas futuras já está estruturado, mas a presença de uma temporada no índice não significa que seu conteúdo esteja pesquisado ou completo.

A entrada cartográfica e o catálogo geral permanecem parte do produto; não devem ser removidos durante a expansão histórica. A prioridade atual é qualidade factual, relações entre entidades, fontes por informação e transparência sobre lacunas.

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

- **Responsável:** nome da IA/assistente ou pessoa; informar também o modelo exato quando disponível (não inventar versões).
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
- **Arquivos afetados:** `DIRETRIZ_DO_PROJETO.md`.
- **Decisões relacionadas:** a direção do produto está em reavaliação; aguardar a nova proposta do usuário antes de alterar o conceito ou o código.
- **Validação:** conteúdo confrontado com o README, `package.json`, `src/App.tsx`, `src/index.css`, `index.html` e o estado publicado relatado pelo usuário. Não foi executado build local.
- **Commit/PR:** registrado no commit de criação deste arquivo no GitHub.
- **Deploy:** não se aplica; mudança apenas documental.

#### 2026-11-05 — Implementação do protótipo visual da nova entrada

- **Responsável:** ChatGPT, seguindo a direção aprovada pelo usuário.
- **Tipo:** design / código / documentação.
- **Motivo:** iniciar a materialização do conceito do salão monumental com globo terrestre suspenso.
- **O que mudou:** a esfera abstrata de partículas foi substituída por um globo 3D; foram adicionados rotação por toque/arraste, zoom por pinça/roda do mouse, identificação aproximada de continentes, painel demonstrativo de países, navegação por seções e cartões de exploração. O globo recebeu mapa terrestre, relevo e camada sutil de nuvens por texturas do repositório oficial de exemplos do Three.js, além de um mapa procedural de contingência. A linha do tempo e a busca existentes foram preservadas como conteúdo complementar. A composição arquitetônica do salão foi criada em CSS e o HTML recebeu novos metadados.
- **Arquivos afetados:** `src/App.tsx`, `src/index.css`, `index.html`, `README.md`, `DIRETRIZ_DO_PROJETO.md`.
- **Decisões relacionadas:** o globo é o protagonista visual e permanece suspenso, sem pedestal. A seleção geográfica por limites aproximados e a lista de países são apenas demonstrativas; ainda não existe acervo nacional integrado.
- **Validação:** leitura prévia dos arquivos atuais e confirmação de gravação dos commits no GitHub. Não foi executado `npm run build`, teste automatizado ou teste visual em dispositivo físico. A execução de workflows do GitHub não retornou workflows associados ao commit consultado. O site de produção não pôde ser confirmado nesta etapa.
- **Commits de código/documentação:** `9fb7204` (App inicial), `f4bec98` (primeira versão do CSS), `72cdf07` (refinamento adicional do CSS do salão, commit atribuído à conta GitHub `gabrigout` e preservado), `44ff97c` (metadados), `99989fb` (README), `ff2cfb9` (textura terrestre), `ef10ebb` (relevo e nuvens), `db76632` (estado do README).
- **Deploy:** Vercel retornou status **success** para o commit `b006210` na branch `main`, que já incluía o código do globo e o refinamento de CSS `72cdf07`. O último commit consultado (`f72b90d`, apenas documentação) ainda estava **pending** na Vercel no momento da checagem. A inspeção visual final do site publicado ainda não foi feita.


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
- **Validação inicial:** alterações gravadas na branch \`main\` por commits GitHub. Não foi executado build local, teste automatizado ou teste visual em dispositivo físico. A verificação de status da Vercel retornou **success** para o commit `b006210`; isso confirma o pipeline associado ao commit, mas não substitui a inspeção visual da página no iPhone e no desktop.
- **Próxima etapa:** validar a tela em iPhone e desktop; ajustar escala/posição do globo e composição do salão; conferir o carregamento da textura e consumo de GPU; depois desenhar a experiência completa de continente e país com dados históricos verificados.


---

## 13. Nova direção do mapa — 5 de novembro de 2026

- **Pedido do usuário:** o globo estava realista demais e girava; substituir por um mapa-múndi aberto, plano, com continentes corretamente representados e seleção direta de países quando houver zoom.
- **Decisão visual:** retirar a esfera 3D e apresentar um atlas plano, de aparência cartográfica/editorial, dentro do salão clássico. O mapa aberto deve ser o foco visual, sem rotação automática.
- **Implementação em src/App.tsx:**
  - Removido o componente Three.js do globo, inclusive texturas, relevo, nuvens, atmosfera e animação de rotação.
  - Adicionado mapa-múndi SVG a partir de GeoJSON público do Natural Earth, com geometrias por país, fronteiras nacionais e projeção equiretangular.
  - Cada país é uma forma SVG independente e clicável; ao selecionar, o mapa aproxima a região e abre o painel do país.
  - Adicionados controles de aproximar, afastar, voltar ao mundo inteiro, arrasto para mover e filtros rápidos por continente.
  - O painel lateral recebe o nome do país e a hierarquia Mundo → Continente → País.
- **Implementação em src/index.css:** estilo de atlas antigo, cores discretas para países, contornos dourados, controles cartográficos, responsividade para celular e área de mapa com proporção 2:1.
- **Fonte cartográfica:** https://github.com/nvkelso/natural-earth-vector (arquivo GeoJSON ne_110m_admin_0_countries.geojson). A geometria é carregada do repositório externo em tempo de execução; é necessária conexão à internet para o mapa detalhado aparecer. Não foi criada cópia local dos dados.
- **Limitações conhecidas:** escala Natural Earth 1:110m é adequada para visão mundial e seleção geral, mas não oferece fronteiras detalhadas de municípios ou ilhas muito pequenas. A projeção equiretangular distorce áreas em latitudes elevadas. O catálogo de países/continentes é navegação cartográfica, não conteúdo histórico nacional já preenchido.
- **Arquivos afetados:** src/App.tsx, src/index.css, DIRETRIZ_DO_PROJETO.md.
- **Commits desta etapa:** 406cc61 (atlas e seleção de países), 584a171 (estilo do atlas), 1d8c583 (aproximação automática ao selecionar país), 1befb19 (remoção do import Three.js obsoleto), c330461 (README atualizado).
- **Validação:** código gravado na branch main. Não foi executado build TypeScript/Vite nem teste visual em navegador ou iPhone nesta etapa. A consulta de status do commit documental `0503ce7` retornou Vercel **pending**; a conclusão do deploy mais recente ainda não foi confirmada.
- **Próximos passos:** validar o mapa em iPhone e desktop; confirmar se o endpoint GeoJSON responde com CORS; verificar nomes e classificação dos países; testar zoom/arrasto e seleção em países pequenos; se o carregamento remoto for instável, incorporar o GeoJSON ao projeto localmente e registrar a licença/atribuição da fonte.


---

## 14. Idioma obrigatório da interface — 5 de novembro de 2026

- **Decisão do usuário:** toda a experiência visível da Alexandria deve estar em português brasileiro. Não exibir nomes de países em inglês, como “Brazil”.
- **Implementação:** os nomes dos países vindos da cartografia agora são localizados com `Intl.DisplayNames(['pt-BR'], { type: 'region' })`, usando os códigos ISO de duas letras do GeoJSON. Há fallback para nomes alternativos quando o código não é reconhecido. O rodapé em inglês foi traduzido para “A MEMÓRIA DO FUTEBOL”.
- **Arquivo alterado:** `src/App.tsx`.
- **Commit:** `82f9533`.
- **Validação:** alteração registrada na branch `main`. Build e teste visual ainda não executados; verificar especialmente nomes de territórios com códigos ISO ausentes ou especiais.
- **Regra para próximas alterações:** textos, menus, botões, mensagens, nomes de países/continentes e conteúdo editorial devem ser escritos em português brasileiro. Manter nomes oficiais próprios quando não houver tradução consagrada; não deixar rótulos em inglês na interface.


---

## 15. Bandeiras nacionais e atlas tecnológico flutuante — 5 de novembro de 2026

- **Pedido do usuário:** exibir a bandeira de cada país sobre sua região correspondente e transformar o mapa em uma peça mais tecnológica e visualmente flutuante.
- **O que mudou em `src/App.tsx`:**
  - Cada país passou a guardar o código ISO de duas letras e o centro aproximado de sua caixa geográfica.
  - Bandeiras são sobrepostas às geometrias do mapa em coordenadas cartográficas, acompanhando zoom e deslocamento.
  - Bandeiras são obtidas em tempo de execução pelo serviço FlagCDN (`https://flagcdn.com/w40/{código}.png`); territórios sem código ISO de duas letras válido não recebem imagem.
  - Para evitar excesso de elementos na visão mundial, países muito pequenos só exibem a bandeira quando o usuário aproxima o mapa. O ponto de posicionamento é o centro da caixa delimitadora, não um centroide geográfico exato.
  - Texto de apresentação atualizado para falar em mapa, não globo.
- **O que mudou em `src/index.css`:**
  - Superfície cartográfica com aparência de painel holográfico, brilho azul-esverdeado, contornos luminosos, sombra projetada e reflexo sutil.
  - Movimento vertical muito discreto para transmitir suspensão, sem girar o mapa.
  - Ajustes para telas pequenas e respeito à preferência do sistema por movimento reduzido.
- **Arquivos afetados:** `src/App.tsx`, `src/index.css`, `DIRETRIZ_DO_PROJETO.md`.
- **Fontes externas em tempo de execução:** geometrias Natural Earth já usadas anteriormente; bandeiras fornecidas pelo FlagCDN. Ambas dependem de conexão à internet. A disponibilidade/CORS das imagens de bandeiras ainda precisa ser observada no navegador real.
- **Validação:** gravação dos dois arquivos de código confirmada no GitHub, branch `main`. Não foi executado `npm run build`, verificação TypeScript, teste automatizado nem inspeção visual em navegador/iPhone nesta etapa. Portanto, a implementação está registrada no repositório, mas ainda não está tecnicamente validada.
- **Deploy:** verificar o estado da Vercel para o commit de documentação após este registro; não presumir publicação até status de sucesso.
- **Próximos testes:** conferir legibilidade e colisão de bandeiras na Europa/Caribe; validar códigos ISO especiais; confirmar carregamento FlagCDN e GeoJSON; observar a animação e desempenho em iPhone.


---

## 16. Mapa-múndi preenchido pelas bandeiras nacionais — 5 de novembro de 2026

- **Ajuste de direção visual solicitado pelo usuário:** em vez de bandeiras pequenas suspensas sobre os países, cada território deve ser preenchido pela imagem de sua própria bandeira, respeitando seu contorno geográfico, conforme a referência visual enviada.
- **Implementação em `src/App.tsx`:**
  - Cada país com código ISO de duas letras válido recebe uma imagem de bandeira como textura.
  - A imagem é dimensionada para a caixa geográfica do país e recortada por um `clipPath` SVG com a geometria real do território.
  - O recorte acompanha a projeção, zoom e deslocamento do mapa; a camada de contorno permanece por cima para manter fronteiras e seleção interativa.
  - A camada antiga de pequenos marcadores de bandeira foi removida.
  - Países/territórios sem código ISO de duas letras válido podem continuar sem bandeira; isso inclui alguns casos especiais do conjunto cartográfico.
- **Implementação em `src/index.css`:** textura das bandeiras com contraste e saturação ajustados; fronteiras e realce de seleção mantêm o aspecto tecnológico do atlas.
- **Arquivos alterados nesta etapa:** `src/App.tsx`, `src/index.css`, `DIRETRIZ_DO_PROJETO.md`.
- **Fonte externa das bandeiras:** FlagCDN (`https://flagcdn.com/w320/{código}.png`); carregamento depende de conexão à internet. A cartografia continua vindo do conjunto Natural Earth já utilizado.
- **Limitações conhecidas:** a imagem da bandeira é esticada para preencher a caixa delimitadora do país antes do recorte, portanto a proporção dos símbolos pode variar e territórios multipartes muito dispersos podem apresentar textura esticada. Países pequenos podem ter baixa definição no panorama mundial. Países sem código ISO válido não são preenchidos.
- **Validação:** gravações confirmadas na branch `main`. Não foi executado build, checagem TypeScript ou teste visual real em navegador/iPhone nesta etapa. É necessário conferir carregamento das imagens, recortes em países multipartes e desempenho com muitas imagens SVG.
- **Deploy:** verificar a Vercel para o commit documental após este registro. Não declarar publicação concluída enquanto o estado não for `success`.


---

## 17. Correção de bandeiras ausentes no mapa — 5 de novembro de 2026

- **Relato do usuário:** na versão publicada no iPhone, muitos países apareciam apenas com o contorno, sem a bandeira preenchendo o território.
- **Diagnóstico no código:** os identificadores SVG dos recortes (`clipPath`) eram numerados com base na lista filtrada de países com bandeira, mas cada imagem consultava o índice do país na lista original. Quando havia países sem código ISO válido antes de outro país, o índice divergia e a imagem era recortada pelo contorno errado ou por um recorte inexistente.
- **Correção em `src/App.tsx`:**
  - Os recortes agora usam identificadores estáveis derivados do código geográfico do país, tanto na definição quanto na imagem.
  - A identificação da bandeira tenta primeiro `ISO_A2` e, quando não for válido, utiliza `ISO_A2_EH` do Natural Earth.
  - As bandeiras continuam sendo preenchimentos recortados pelos contornos dos países; não voltaram a ser marcadores sobrepostos.
- **Arquivo afetado nesta correção:** `src/App.tsx`.
- **Commit:** `82b65b3`.
- **Validação:** alteração gravada na branch `main`. Não foi possível executar o build nem fazer teste visual direto no iPhone nesta sessão. A confirmação final depende de observar o novo deploy e verificar especialmente Europa, África, América Central e Caribe.
- **Deploy:** consultar o estado da Vercel para este commit antes de afirmar que a correção está publicada.


---

## 18. Primeiro catálogo pesquisável de ligas, copas, clubes e jogadores — 5 de novembro de 2026

- **Pedido do usuário:** começar a incorporar informações históricas abrangentes sobre criação e trajetória de ligas, copas, clubes e jogadores, relacionando os registros.
- **Arquitetura de dados:** criado `src/data/archive.ts` com um modelo tipado para cada registro: identificador, categoria, país, ano de referência, subtítulo, resumo, origem, cronologia, legado, fatos essenciais, fonte-base, estado editorial e IDs relacionados.
- **Conteúdo inicial:** 40 registros no total, distribuídos em 7 ligas, 5 copas, 18 clubes e 10 jogadores. Os registros incluem, entre outros, Campeonato Brasileiro, Premier League, Bundesliga, LaLiga, Serie A, Ligue 1, Eredivisie, Copa do Mundo masculina e feminina, Copa do Brasil, Libertadores, Liga dos Campeões, clubes do Brasil e de ligas europeias, além de Pelé, Garrincha, Rogério Ceni, Messi, Di Stéfano, Zico, Marta, Ronaldinho, Ronaldo Fenômeno e Maradona.
- **Navegação em `src/App.tsx`:** filtros por categoria, busca textual, cartões de acervo e fichas detalhadas em painel; cada ficha apresenta origem/criação, marcos históricos, legado, fatos essenciais e conexões clicáveis com outros registros.
- **Estilo em `src/index.css`:** catálogo responsivo, fichas e cartões em continuidade com a identidade escura/editorial da Alexandria.
- **Fontes de pesquisa usadas como ponto de partida:** FIFA, CBF, CONMEBOL, UEFA, FIGC, Premier League, Bundesliga, RFEF, FFF, KNVB e páginas institucionais dos clubes. As URLs-base estão registradas nas próprias fichas em `src/data/archive.ts`.
- **Auditoria estrutural realizada:** 40 identificadores de registro únicos; todas as referências em `relatedIds` apontam para registros existentes. Os dados rápidos foram estruturados em 21 fichas. Algumas relações de jogadores, clubes e competições continuam deliberadamente incompletas.
- **Critérios editoriais:** distinguir ano de fundação, primeira temporada e mudança de formato; separar ano civil de temporada; não incluir estatísticas sem referência específica; tratar a coleção como primeiro núcleo de pesquisa, não como acervo exaustivo.
- **Arquivos afetados:** `src/data/archive.ts`, `src/App.tsx`, `src/index.css`, `README.md`, `DIRETRIZ_DO_PROJETO.md`.
- **Commits desta etapa:** `7641221` (estrutura inicial de dados), `f507e93` (expansão de registros), `df2d401` (novos registros internacionais e futebol feminino), `4fd8a4a` (fatos essenciais), `263a102` (navegação/fichas), `44877d1` (exibição dos fatos), `2c3de46` e `a1ef61f` (estilos), `2c3de46` (estilo do catálogo), `a1ef61f` (fatos rápidos), além dos commits de README e documentação.
- **Validação:** arquivos confirmados na branch `main`; IDs e referências cruzadas auditados. Não foi executado `npm run build`, teste TypeScript, teste automatizado ou inspeção visual após a implementação. O deploy depende da confirmação da Vercel para o commit documental final.
- **Próximas expansões:** temporadas e campeões por edição; tabelas de títulos e artilheiros com fonte por temporada; elencos históricos e trajetórias completas; clubes de cada liga; copas nacionais e continentais; futebol feminino; torneios regionais e seleções.


---

## 19. Expansão do acervo — clubes europeus e novas lendas — 5 de novembro de 2026

- **Objetivo:** ampliar as ligações entre ligas nacionais, clubes históricos e jogadores que marcaram suas competições.
- **Novos registros em `src/data/archive.ts`:**
  - Clubes: Juventus, Milan, Internazionale, Napoli, Manchester United, Arsenal e Paris Saint-Germain.
  - Jogadores: Johan Cruyff e Cristiano Ronaldo.
- **Novas conexões:** Serie A agora se relaciona com Juventus, Milan, Inter e Napoli; Premier League com Liverpool, Manchester United e Arsenal; Ligue 1 com Paris Saint-Germain e Ronaldinho; Eredivisie com Ajax, PSV, Feyenoord e Johan Cruyff. As fichas dos jogadores também apontam para clubes e competições relevantes em suas carreiras.
- **Fatos rápidos adicionados:** datas de fundação, origem institucional, primeiros títulos ou marcos de trajetória, quando sustentados pelas fontes indicadas. A ficha de Cristiano Ronaldo usa o levantamento da UEFA atualizado em maio de 2026 para partidas e gols da Liga dos Campeões; números de carreira fora desse recorte não foram extrapolados.
- **Fontes usadas:** páginas institucionais da Juventus, AC Milan, Inter, Napoli, Manchester United, Arsenal e PSG; história e arquivo do Ajax; UEFA para Johan Cruyff e Cristiano Ronaldo. Os links estão vinculados diretamente às fichas.
- **Total atualizado:** 49 registros únicos — 7 ligas, 5 copas, 25 clubes e 12 jogadores.
- **Auditoria estrutural:** 49 identificadores únicos; todas as referências `relatedIds` têm destino existente.
- **Arquivos afetados nesta expansão:** `src/data/archive.ts`, `README.md`, `DIRETRIZ_DO_PROJETO.md`. O painel e a busca do acervo já exibem fichas, fatos e relações por meio das alterações da seção 18.
- **Commits desta expansão:** `cb8ddeb` (novos registros e conexões), `c761599` (atalhos no menu e busca ampliada), `824ca32` (README atualizado na expansão anterior; contagem refeita nesta etapa).
- **Validação:** conteúdo confirmado no GitHub e IDs/relações cruzadas auditados. Não foi executado `npm run build`, teste TypeScript, teste automatizado ou inspeção visual em iPhone/desktop. A publicação deve ser confirmada pelo estado da Vercel do commit documental final.
- **Próximas expansões:** incluir mais clubes por liga e suas principais eras; criar páginas de temporadas com campeões, vice-campeões e artilheiros; aprofundar Copas nacionais e continentais; adicionar elencos históricos e trajetórias de técnicos; expandir futebol feminino e competições de seleções.


---

## 20. Migração para JavaScript e fundação enciclopédica da Bundesliga — 5 de novembro de 2026

- **Responsável:** ChatGPT, com autorização expressa do usuário.
- **Tipo:** arquitetura / código / dados / documentação.
- **Motivo:** abandonar TypeScript e preparar a expansão permanente da Bundesliga, preservando interface e acervo geral.
- **Decisões aplicadas:** JavaScript/JSX com React 19 e Vite; dados modulares por entidade; temporadas conectadas por IDs; estatísticas com fontes e limitações; lacunas marcadas como pendentes; atualização ao fim de cada temporada; futebol feminino separado; seleções nacionais em catálogo próprio; português brasileiro.
- **Migração técnica:** App.tsx → App.jsx; main.tsx → main.jsx; archive.ts → archive.js; vite.config.ts → vite.config.js; index.html atualizado; build usa vite build; removidos typescript, @types/* e tsconfig.json.
- **Bundesliga:** criada seção própria com seletor de temporadas, tabela inaugural, artilharia, contexto histórico, estatísticas e fontes. Índice de 64 temporadas, de 1963/64 a 2026/27: 1 ficha detalhada inicial, 62 temporadas históricas pendentes e 1 atual em andamento. Indexação não significa que todas as fichas estejam pesquisadas.
- **Temporada 1963/64:** 16 clubes, 30 rodadas, 240 partidas, 857 gols, média 3,57, público total 6.057.335, campeão 1. FC Köln, rebaixados Preußen Münster e Saarbrücken. A classificação DFB, 15 artilheiros e o primeiro gol por Timo Konietzka foram cadastrados. A final DFB-Pokal de 13/06/1964 (TSV 1860 München 2–0 Eintracht Frankfurt) está conectada.
- **Divergência documental:** DFB Datencenter coloca Werder Bremen em 10º e Eintracht Braunschweig em 11º; RSSSF inverte a ordem. A Alexandria adota a tabela oficial do DFB e registra a divergência em sources.js.
- **Arquivos novos:** BundesligaArchive.jsx; competition.js; clubs.js; players.js; coaches.js; awards.js; matches.js; catalogs.js; sources.js; validate.js; index.js; seasons/index.js; seasons/1963-64.js.
- **Arquivos alterados:** App.jsx; main.jsx; archive.js; index.css; package.json; vite.config.js; index.html; README.md e este documento.
- **Arquivos removidos:** App.tsx; main.tsx; archive.ts; vite.config.ts; tsconfig.json.
- **Validação estrutural preparada:** validateBundesligaData() verifica IDs, consistência de jogos, saldo, pontuação histórica e referências. Execução real do build e testes visuais deve ser registrada separadamente.
- **Deploy:** verificar o estado efetivo da Vercel/GitHub após o commit; não presumir sucesso.
- **Pendências:** pesquisar as 63 temporadas restantes; completar clubes históricos, jogadores, treinadores, partidas, estádios, premiações, campanhas europeias, seleções e futebol feminino; validar em iPhone e desktop.


---

## 21. Correção do último resíduo TypeScript após a migração — 5 de novembro de 2026

- **Diagnóstico:** a primeira versão migrada manteve quatro anotações de tipos TypeScript em `src/App.jsx` (parâmetros de função e genérico de `useRef`). O Vercel marcou o deploy do commit `70887b328b124b4113ca3a1264826cf185a8608c` como falha. A configuração de build já estava sem o compilador TypeScript.
- **Correção:** removidas as quatro anotações em `src/App.jsx`, mantendo o comportamento e os estados da interface.
- **Validação estática:** busca textual no arquivo confirmou ausência de anotações de tipo, genéricos de hooks, declarações `type` e casts TypeScript conhecidos. Build e inspeção em navegador ainda dependem do novo deploy.
- **Deploy:** um novo commit foi enviado para disparar uma tentativa de build limpa na Vercel. Registrar o resultado do novo status antes de considerar publicado.


---

## 21. Correção da migração e confirmação da publicação — 5 de novembro de 2026

- **Responsável:** ChatGPT.
- **Tipo:** correção de código / validação / publicação.
- **Motivo:** o primeiro deploy da migração foi reprovado pela Vercel porque a conversão automática deixou anotações TypeScript residuais e uma expressão incompleta na função que transforma a geometria do atlas.
- **Correções em `src/App.jsx`:**
  - Removidas as anotações residuais de `continentName`, `zoomTo`, `zoomBy` e `selectContinent`.
  - Removido o parâmetro genérico de `useRef`, mantendo `useRef(null)`.
  - Corrigida a ramificação de geometrias multipoligonais para usar `geometry.coordinates`, sem o sufixo inválido que havia restado após a conversão de tipos.
- **Commit da correção:** `887387a237463e203baef9c8402098ca0e1be7ee`.
- **Inspeção após correção:** árvore do repositório consultada; nenhum arquivo `.ts` ou `.tsx` permaneceu. As verificações textuais para anotações e construções TypeScript residuais no `App.jsx` não encontraram ocorrências.
- **Build/publicação:** o status check da Vercel para o commit `887387a237463e203baef9c8402098ca0e1be7ee` retornou `success`. A pipeline da Vercel foi aprovada e a publicação foi concluída segundo o status do provedor.
- **O que não foi executado:** não foi realizado build local por terminal, nem teste visual manual em iPhone ou desktop. A confirmação de Vercel não substitui esses testes de interface.
- **Deploy:** sucesso reportado pela Vercel para o commit acima. Site: https://alexandria-da-bola.vercel.app
- **Pendência de qualidade:** abrir o site no iPhone, percorrer o atlas, conferir o seletor de temporadas, a tabela horizontal em telas estreitas e o catálogo geral preservado.


---

## 22. Restauração controlada do TypeScript no núcleo — 5 de novembro de 2026

- **Responsável:** ChatGPT, com autorização expressa do usuário.
- **Tipo:** arquitetura / migração / qualidade / testes.
- **Motivo:** retomar tipagem estática na aplicação principal para reduzir inconsistências à medida que o acervo, as entidades relacionadas e os componentes crescem.
- **Estratégia:** migração isolada em `chore/restore-typescript-core`, baseada no commit de produção `28196a2ff45d564cdb2955a180ae45673ce64f34`. A branch principal e o deploy de produção permanecem preservados durante a validação.
- **Arquitetura:** React, componentes e dados do acervo passam para TypeScript (`.tsx`/`.ts`). JavaScript permanece nas configurações auxiliares, como `vite.config.js`; não será introduzida a linguagem Java.
- **Proteções adicionadas:** TypeScript em modo estrito; comando `typecheck`; testes automatizados com Vitest; build configurado para executar tipagem e testes antes de gerar os arquivos de produção.
- **Validação de dados:** ampliada a função `validateBundesligaData` para conferir IDs duplicados, relações de clubes/jogadores, fontes, tabelas, pontuação histórica, treinadores, premiações e partidas.
- **Ajustes de qualidade incluídos nesta migração:** a seção da temporada inaugural passa a exibir os 15 artilheiros cadastrados (antes mostrava somente oito); removida a duplicação da definição e da camada de grade SVG do atlas.
- **Arquivos convertidos:** `src/App.tsx`, `src/main.tsx`, `src/data/archive.ts`, `src/components/BundesligaArchive.tsx` e os módulos da Bundesliga em `src/data/bundesliga/**/*.ts`.
- **Novos arquivos:** `src/data/types.ts`, `src/data/bundesliga/types.ts`, `src/data/bundesliga/validate.test.ts`, `src/vite-env.d.ts` e `tsconfig.json`.
- **Configuração alterada:** `package.json` (scripts de typecheck/test/build e dependências de desenvolvimento), `index.html` (entrada `main.tsx`) e `README.md`.
- **Arquivos JavaScript removidos:** versões `.jsx`/`.js` da aplicação e dos módulos de dados que foram convertidos. `vite.config.js` permanece como JavaScript.
- **Validação local:** não executada nesta sessão; a validação decisiva será o build de preview na Vercel, incluindo `tsc`, Vitest e Vite.
- **Situação de publicação:** branch de migração criada; produção não foi alterada. Aguardar resultado do preview antes de incorporar em `main`.
- **Pendências:** corrigir todos os diagnósticos de tipos/testes que o preview apontar; verificar interface em iPhone e desktop; atualizar este registro com o SHA e o resultado real do preview.


### Resultado da validação do preview — 5 de novembro de 2026

- **Correções durante a migração:** o primeiro preview identificou erros nas declarações de importação de tipos dos módulos Bundesliga; o segundo identificou parâmetros implícitos e a nulabilidade do elemento raiz. Esses pontos foram corrigidos nos commits `f016296` e `aa5d10c`.
- **Typecheck:** `tsc --noEmit` executado pela Vercel sem diagnósticos. O build prosseguiu para os testes.
- **Testes:** Vitest executou 1 arquivo de teste; 3 testes passaram.
- **Build de produção:** Vite 7.3.7 transformou 1.593 módulos e concluiu a compilação em 2,52 segundos. Deploy de preview marcado como `READY`.
- **Smoke test HTTP:** HTML, bundle JavaScript e folha CSS do preview responderam com HTTP 200. Isso confirma entrega dos artefatos, mas não substitui inspeção visual e interação manual no iPhone/desktop.
- **Preview validado:** https://alexandria-da-bola-avc3kapab-gabriel3-1b9a.vercel.app
- **Commit validado:** `aa5d10c87597358fe1ef660340fcb98774f031ee`.
- **Produção durante a validação:** permaneceu no commit `28196a2ff45d564cdb2955a180ae45673ce64f34`; nenhum deploy de produção foi feito durante os testes.
- **Pendências remanescentes:** inspeção visual/interativa em dispositivos reais; adicionar e versionar `package-lock.json` para instalações reproduzíveis. A migração não deve ser confundida com conclusão do acervo histórico Bundesliga.


---

## 23. Geração e validação do package-lock.json — 5 de novembro de 2026

- **Responsável:** ChatGPT, usando GitHub Actions no ambiente de nuvem, sem exigir terminal local do usuário.
- **Tipo:** dependências / reprodutibilidade / infraestrutura de desenvolvimento.
- **Motivo:** versionar as resoluções exatas das dependências npm para tornar as instalações reproduzíveis e eliminar a pendência registrada na validação da restauração do TypeScript.
- **Arquivo criado:** `package-lock.json`, lockfileVersion 3, gerado pelo npm 10.9.9 sob Node.js 22.23.4.
- **Conteúdo conferido:** lockfile contém a árvore de dependências correspondente ao `package.json` da aplicação (React 19, Vite 7, TypeScript, Vitest, Three.js e Lucide React), com URLs de resolução e hashes de integridade do registro npm.
- **Commit que adicionou o lockfile:** `b248277713330d4bd4db3d61f0efad6f0510acb7` (`Adiciona package-lock.json`). Blob SHA: `d7cc70b2ff46bc1dc977b18c82c8f3b6d0ddb274`.
- **Validação reproduzível:** `npm ci --no-audit --no-fund` concluiu com sucesso e instalou 107 pacotes.
- **Typecheck:** `tsc --noEmit` passou sem diagnósticos.
- **Testes:** Vitest 3.2.7; 1 arquivo e 3 testes aprovados.
- **Build:** Vite 7.3.7 transformou 1.593 módulos e concluiu com sucesso. Artefatos: HTML 0,97 kB; CSS 39,25 kB; JavaScript 344,41 kB.
- **Execução de CI:** GitHub Actions, execução `42113022687`, concluída com sucesso. A primeira tentativa falhou somente por configurar cache npm antes da existência do lockfile; o workflow foi corrigido e a segunda geração passou.
- **Workflow temporário:** `.github/workflows/generate-lockfile.yml` foi criado exclusivamente para gerar/verificar o arquivo e removido após a validação. Commit de remoção: `3e49db671a7b825a9f8aa8b5154c21bcbd22bcbd`. Nenhum workflow temporário permanece por essa tarefa.
- **Arquivos permanentes afetados:** `package-lock.json` e `DIRETRIZ_DO_PROJETO.md`.
- **Situação do código e deploy:** nenhum código da aplicação foi alterado nesta etapa e nenhum deploy de produção foi solicitado. O build foi validado em CI; isso não equivale a uma nova publicação na Vercel.
- **Pendência encerrada:** versionamento do `package-lock.json` para instalação reprodutível.
- **Próxima etapa aprovada pelo usuário:** consolidar a ficha 1963/64 e desenvolver fichas enciclopédicas dos 16 clubes inaugurais, com pesquisa e fontes verificáveis.


---

## 24. Auditoria ampliada da temporada inaugural e fichas dos 16 fundadores — 5 de novembro de 2026

- **Responsável:** ChatGPT, com pesquisa documental e conferência em fontes oficiais e independentes.
- **Tipo:** conteúdo histórico / modelagem de dados / interface / validação.
- **Temporada 1963/64:** a classificação final foi mantida conforme o DFB Datencenter: 16 clubes, 30 jogos por clube, 240 partidas e 857 gols. A tabela preserva o quociente de gols como critério histórico e a divergência de posições 10 e 11 entre DFB e RSSSF.
- **Artilharia:** a base foi ampliada de 15 para 50 linhas nominais da tabela pública do DFB, com gols e gols de pênalti, preservando posições empatadas. A tabela consultada termina na marca de seis gols. Portanto, os 50 registros representam a captura disponível, não uma afirmação de que todos os jogadores que marcaram na temporada estejam listados; atletas abaixo do corte ainda dependem de pesquisa.
- **Média de público:** preservado o número publicado pelo DFB (25.134 por jogo), junto ao total de 6.057.335 espectadores. A divisão desse total pelos 240 jogos resulta em aproximadamente 25.239; a diferença foi registrada em nota de fonte, sem substituir o valor oficial publicado.
- **16 clubes fundadores:** os registros agora contêm data/ano de origem, cidade, cores, contexto de fundação, identidade histórica e desempenho de 1963/64 (posição, pontos, vitórias, empates, derrotas e gols). As fichas foram marcadas como **fichas históricas iniciais documentadas**, não como biografias enciclopédicas concluídas.
- **Nuances preservadas:** a fundação do HSV é associada ao predecessor SC Germania de 1887 e à consolidação por fusões em 1919; o TSV 1860 separa a origem da associação (1860) da seção de futebol (1899); o KSC registra a origem no Phönix de 1894 e a criação da entidade atual pela fusão de 1952; Eintracht Frankfurt remonta à Victoria de 1899 e a fusões posteriores.
- **Interface:** adicionada uma grade interativa dos 16 clubes na página Bundesliga. A seleção exibe a ficha inicial, o desempenho na edição inaugural e links às fontes correspondentes. A artilharia apresenta as 50 linhas consultadas em uma área rolável, adaptada para telas estreitas.
- **Validação de dados:** o validador exige os campos essenciais da ficha inicial, 30 jogos na temporada inaugural, pontuação compatível com dois pontos por vitória e referências cadastradas.
- **Arquivos alterados:** `src/data/bundesliga/types.ts`, `clubs.ts`, `players.ts`, `sources.ts`, `seasons/1963-64.ts`, `validate.ts`, `validate.test.ts`, `src/components/BundesligaArchive.tsx`, `src/index.css` e este documento.
- **Fontes-base:** 24 registros de fonte, incluindo história oficial do DFB, DFB Datencenter (classificação, lista dos 16 participantes e artilharia), RSSSF (resultados e conferência independente), páginas oficiais de clubes, perfis DFB e arquivos/museus institucionais. Foram restauradas as referências do perfil de Uwe Seeler, já usado na premiação, e acrescentado o estatuto do KSC para documentar a origem no Phönix.
- **Lacunas que continuam abertas:** biografias completas de jogadores e treinadores; elencos; todas as 240 partidas como registros individuais; estatísticas de goleiros; estádios e mudanças de nome; público por partida; premiações e campanhas europeias; conferência independente adicional das fichas; e a extensão da artilharia abaixo do corte de seis gols.
- **Validação de execução:** a primeira prévia falhou em um teste de integridade porque a reorganização das fontes havia omitido o perfil DFB de Uwe Seeler, referenciado por uma premiação existente. A referência foi restaurada e a validação foi repetida. `tsc --noEmit` passou; Vitest 3.2.7 executou 1 arquivo e 5 testes, todos aprovados; Vite 7.3.7 transformou 1.593 módulos e compilou em 2,04 segundos. Artefatos gerados: HTML 0,97 kB, CSS 42,13 kB, JavaScript 376,87 kB.
- **Prévia Vercel:** deployment `dpl_nPMG7MMnSeDcRVLNXvk7rako6Ys3`, estado `READY`, associado ao commit `2aee4c884da77d1ec0f0d7758cdecd91cd49064b`.
- **Publicação de produção:** branch `main` avançou por fast-forward até o commit `2aee4c884da77d1ec0f0d7758cdecd91cd49064b`. A Vercel concluiu o deployment de produção `dpl_G1F7PRo6ZmEko4u3cMFsbq2eJm3k` com estado `READY`, aliases `alexandria-da-bola.vercel.app`, `alexandria-da-bola-gabriel3-1b9a.vercel.app` e `alexandria-da-bola-git-main-gabriel3-1b9a.vercel.app`.
- **Commit do conteúdo e código:** `feedde129cf0ee1849a5ed192e6cb54e7dfdf477`; commit final após correção das fontes: `2aee4c884da77d1ec0f0d7758cdecd91cd49064b`.
- **O que não foi validado:** inspeção visual manual e interação em iPhone/desktop ainda precisam ser feitas. O build e o status READY confirmam compilação e publicação, não a revisão visual de todas as telas.


---

## 25. Auditoria histórica 1963/64 e consolidação da artilharia — 5 de novembro de 2026

- **Documento de continuidade para qualquer IA:** esta entrada registra o resultado da Etapa 1 e o escopo/resultado da Etapa 2. A próxima IA deve ler esta seção antes de retomar o trabalho e conferir a branch `main`; não deve presumir que a auditoria, por si só, alterou o código.
- **Etapa 1 — auditoria documental:** concluída em modo somente leitura. Não houve commit nem alteração de arquivos durante a auditoria. A classificação dos 16 clubes, os 240 jogos, os 857 gols e o quociente histórico foram conferidos com o DFB e fontes independentes. A Alexandria mantém a ordem DFB para Werder Bremen (10º) e Eintracht Braunschweig (11º), apesar da inversão na RSSSF; o quociente de gols confirma a ordem do DFB.
- **Outros achados da Etapa 1:** (1) o texto do Meidericher SV que chama a expulsão de Helmut Rahn de “primeiro cartão vermelho” é anacrônico: cartões ainda não existiam em 1963/64; usar “primeira expulsão”; (2) o recorde de público de 85.411 espectadores deve ser vinculado à ficha Hertha BSC 0–3 1. FC Köln, em 21/09/1963; (3) o público total e a média divulgados pelo DFB não fecham aritmeticamente e a DFL apresenta outra série histórica; manter a divergência documentada, sem inventar reconciliação; (4) a coluna de quociente histórico merece destaque próprio na interface; (5) falta cadastrar individualmente as 240 partidas.
- **Etapa 2 — artilharia:** conferidos os 50 registros da página oficial DFB Datencenter, da primeira posição até o corte de seis gols, incluindo posições empatadas, clube, gols e pênaltis. A captura consultada informa data de 22/04/2026 e apresenta exatamente 50 linhas nominais.
- **Conferência interna:** os 50 registros da tabela de artilheiros correspondem aos 50 cadastros em `players.ts`. Foram comparados ID, nome, clube, gols e gols de pênalti; não foram encontradas divergências ou cadastros excedentes.
- **Divergência Timo Konietzka:** DFB Datencenter e Sportschau registram 20 gols; a linha-resumo da RSSSF registra 22. A Alexandria adota 20, sustentado por duas fontes estatísticas independentes/atuais (DFB e Sportschau), e mantém nota explícita sobre os 22 da RSSSF. Não alterar para 22 sem evidência primária adicional.
- **Limite de cobertura:** 50 linhas não significam todos os jogadores que marcaram na temporada. O DFB exibe a lista consultada até seis gols; jogadores abaixo desse corte não devem ser inventados nem adicionados sem fonte nominativa confiável.
- **Fontes acrescentadas:** DFB Datencenter — artilharia 1963/64 (`https://datencenter.dfb.de/competitions/bundesliga/seasons/1963-1964/top_scorer?datacenter_name=datacenter`); Sportschau — estatísticas de artilheiros 1963/64 (`https://www.sportschau.de/live-und-ergebnisse/fussball/deutschland-bundesliga/se2585/1963-1964/statistik-torjaeger-uebersicht`); RSSSF — Alemanha 1963/64 (`https://www.rsssf.org/tablesd/duit64.html`).
- **Arquivos alterados nesta etapa:** `src/data/bundesliga/sources.ts`, `src/data/bundesliga/seasons/1963-64.ts`, `src/data/bundesliga/validate.test.ts` e este documento.
- **Validação adicionada:** teste automatizado que exige correspondência entre cada linha da artilharia e o cadastro individual do jogador (nome, clube, gols e pênaltis), além da quantidade de 50 registros.
- **O que esta etapa não fez:** não ampliou a lista abaixo de seis gols; não criou biografias; não cadastrou partidas; não alterou a classificação nem números de público; não fez inspeção visual nem deploy.
- **Próxima etapa sugerida:** corrigir os textos anacrônicos e consolidar a ficha da partida do recorde de público, sempre com fontes e testes. Em seguida, iniciar o cadastro das partidas em lotes pequenos.
- **Commits de código desta etapa:** `e0f379964b92ded2542769abe8c1525295741b49` (primeira gravação) e `3e349f20c0d4d53f5158613772b5f5f22b2de200` / `bd8fdec217bce8962d8727a8d214af9a9b5741a8` (correções na organização das fontes). O registro documental foi gravado em commit subsequente.
- **Validação final:** Vercel executou `npm run build` no commit `d76150a81713b623db1b93d313b9e5e9eeaeffe2`. `tsc --noEmit` passou; Vitest 3.2.7 aprovou 6 testes (1 arquivo); Vite 7.3.7 transformou 1.593 módulos e concluiu o build em 2,54 s.
- **Deploy de produção:** deployment `dpl_CZXenzrvEm4dtPRhZyrRnVo1J6Ka`, estado `READY`, alias `alexandria-da-bola.vercel.app`, associado ao commit `d76150a81713b623db1b93d313b9e5e9eeaeffe2`. Isso confirma build e publicação, mas não inspeção visual manual.
- **Intercorrência registrada:** duas tentativas intermediárias de commit geraram deploys com erro devido à montagem incorreta do array de fontes em `sources.ts`. O arquivo foi corrigido, a estrutura foi conferida e o build final passou. Os commits intermediários permanecem no histórico; não foram apagados.


---

## 27. Etapa 3 — partidas históricas documentadas e correção da expulsão de Helmut Rahn — 5 de novembro de 2026

- **Objetivo:** corrigir o anacronismo sobre a expulsão de Helmut Rahn e cadastrar individualmente o jogo que estabeleceu o recorde de público da temporada inaugural.
- **Partida do recorde:** Hertha BSC 0–3 1. FC Köln, 21/09/1963, 5ª rodada, Olympiastadion, Berlim, 85.411 espectadores. O DFB Datencenter confirma público, árbitro Josef Kandlbinder e gols de Christian Müller (2' e 86') e Hans Sturm (71'). O histórico oficial do Hertha BSC também recorda a partida como recorde de público.
- **Primeira expulsão:** Meidericher SV 1–3 Hertha BSC, 14/09/1963, 4ª rodada, Wedaustadion, Duisburg, 32.000 espectadores, árbitro Edgar Deuschel. O DFB documenta data, rodada, estádio, público, árbitro, placar, gols e o evento de Helmut Rahn aos 77'. A RSSSF identifica expressamente o evento como expulsão; SPORT1 identifica Rahn como o primeiro jogador expulso da Bundesliga.
- **Correção editorial:** a ficha do Meidericher SV não usa mais “primeiro cartão vermelho”. A formulação adotada é “primeiro jogador expulso”; cartões amarelos e vermelhos ainda não eram utilizados em 1963/64.
- **Modelagem de dados:** BundesligaMatch agora aceita, de forma opcional, estádio, cidade, público, árbitro e cronologia estruturada de eventos (gol/expulsão). A partida de abertura continua sem esses detalhes quando não há dados confirmados no cadastro.
- **Relação com a temporada:** a partida Hertha BSC 0–3 Köln foi vinculada explicitamente ao contexto do recorde de público. As duas partidas foram acrescentadas aos marcos históricos de 1963/64.
- **Interface:** criada a seção responsiva “Partidas documentadas” na página da Bundesliga, exibindo as duas fichas com placar, data, estádio, público, árbitro, cronologia e links para as fontes.
- **Testes:** Vercel executou `npm run build`, que inclui `npm run typecheck`, `npm test` e `vite build`. TypeScript passou sem diagnósticos; Vitest 3.2.7 aprovou 8 testes (1 arquivo); Vite 7.3.7 transformou 1.593 módulos e concluiu a compilação em 2,45 segundos.
- **Deploy de produção:** deployment `dpl_Dc46GeLXybS2GuxxdZKXYD6R8Utr`, estado `READY`, alias principal `alexandria-da-bola.vercel.app`, associado ao commit de código `9b2ab5ec76376eecd13e9395189970a17a6db874`.
- **Intercorrência de build:** o primeiro commit de código `31f90ee239fca2a172c0b3eb861871e1fccdff5c` tinha uma vírgula ausente entre objetos da lista de fontes e a Vercel o marcou como `ERROR`. O erro foi corrigido no commit `9b2ab5ec76376eecd13e9395189970a17a6db874`; o build seguinte passou e foi publicado. Os commits intermediários permanecem no histórico.
- **Arquivos alterados:** `src/data/bundesliga/types.ts`, `matches.ts`, `clubs.ts`, `sources.ts`, `seasons/1963-64.ts`, `validate.test.ts`, `src/components/BundesligaArchive.tsx`, `src/index.css` e este documento.
- **Limites desta etapa:** não foram cadastradas as outras 238 partidas; escalações completas e demais estatísticas seguem pendentes. Não foi feita inspeção visual manual em iPhone/desktop; build e deploy confirmam compilação e publicação, não revisão visual.
- **Próxima etapa sugerida:** continuar o acervo de partidas da temporada inaugural em lotes pequenos, priorizando fichas com fontes oficiais, e só então ampliar para elencos e biografias.
- **Commit de código validado:** `9b2ab5ec76376eecd13e9395189970a17a6db874`. **Commit do registro documental:** `93ffc566790f8e7bec0052630a825b9bc9c02f4f`.


---

## 28. Etapa 4 — ampliação das partidas documentadas da temporada inaugural — 5 de novembro de 2026

- **Objetivo:** continuar o cadastro individual das partidas da Bundesliga 1963/64 em lotes pequenos, priorizando fichas oficiais do DFB Datencenter. Esta etapa dá sequência à recomendação registrada na Etapa 3.
- **Escopo executado:** foram acrescentadas duas partidas da 2ª rodada, ambas disputadas em 31/08/1963:
  - **Borussia Dortmund 3–3 TSV 1860 München:** Stadion Rote Erde, Dortmund; 23.000 espectadores; árbitro Edgar Deuschel. Cronologia do DFB: Hans Küppers (8'), Willi Sturm (16'), Gerd Cyliax (27'), Peter Grosser (49' e 63') e Willi Sturm (80'). Fonte: https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/2-spieltag/borussia-dortmund-tsv-1860-muenchen-187981.
  - **Hamburger SV 4–2 1. FC Saarbrücken:** Volksparkstadion, Hamburgo; 32.000 espectadores; árbitro Günther Baumgärtel. Cronologia do DFB: Dieter Krafczyk (29' e 37'), Charly Dörfel (45', 55' e 78') e Uwe Seeler (70'). Fonte: https://datencenter.dfb.de/datencenter/bundesliga/1963-1964/2-spieltag/hamburger-sv-1-fc-saarbruecken-187982.
- **Fontes:** foram cadastradas duas novas referências oficiais do DFB em `src/data/bundesliga/sources.ts`, com identificadores próprios e notas sobre os dados cobertos.
- **Modelagem:** as duas partidas foram acrescentadas a `src/data/bundesliga/matches.ts`, com IDs estáveis, clubes relacionados, rodada, data, placar, estádio, cidade, público, árbitro, cronologia dos gols e referências.
- **Interface:** a seção “Partidas documentadas” deixou de filtrar apenas os dois registros anteriores e passou a listar dinamicamente as fichas com estádio e público cadastrados na temporada selecionada. O título apresenta quatro fichas completas; a partida de abertura continua fora dessa seção porque ainda não possui ficha individual enriquecida com estádio/público/eventos no modelo.
- **Testes:** foram acrescentados dois testes específicos, verificando dados de contexto e cronologia dos gols das partidas. A Vercel executou `npm run build`: `tsc --noEmit` passou; Vitest 3.2.7 aprovou 10 testes (1 arquivo); Vite 7.3.7 transformou 1.593 módulos e concluiu o build em 2,08 segundos.
- **Prévia Vercel:** deployment `dpl_CTxza63UWwQBreow5uEteG5BzsLv`, estado `READY`, URL https://alexandria-da-bola-5e3u4maxh-gabriel3-1b9a.vercel.app, branch `phase-4-bundesliga-matches-batch-1`, commit `42715d524caa6ff40146b893057b36fa17c7e019`.
- **Arquivos alterados:** `src/data/bundesliga/matches.ts`, `src/data/bundesliga/sources.ts`, `src/data/bundesliga/validate.test.ts`, `src/components/BundesligaArchive.tsx` e este documento.
- **Limites:** a etapa adiciona duas partidas, não representa o cadastro integral da 2ª rodada nem das 240 partidas da temporada. Não foram inferidos dados ausentes. A prévia foi compilada e publicada com sucesso; não houve inspeção visual manual em dispositivos reais. O deployment READY não deve ser confundido com publicação em produção.
- **Próxima etapa sugerida:** continuar a temporada em outro lote pequeno, seguindo a ordem cronológica e consultando as fichas individuais do DFB; registrar somente partidas cujos dados e cronologia possam ser sustentados por fonte identificável.
- **Commit de código validado:** `42715d524caa6ff40146b893057b36fa17c7e019`. O commit deste registro documental será acrescentado após sua gravação.


---

## 29. Protocolo obrigatório de identificação e passagem de trabalho entre IAs — 5 de novembro de 2026

- **Motivo:** o usuário determinou que qualquer IA que trabalhe na Alexandria da Bola deve se identificar e seguir a diretriz/documento antes de fazer qualquer intervenção, para que a continuidade não dependa de memória implícita ou de explicações repetidas.
- **Identificação no início da tarefa:** antes de pesquisar, planejar ou modificar o projeto, a IA deve declarar o nome do assistente/produto, o modelo exato quando disponível, sua função naquela tarefa e o escopo que pretende executar. Se o modelo não estiver visível, deve escrever "não informado"; é proibido inventar nome ou versão.
- **Identificação no encerramento:** o relatório final deve repetir quem executou o trabalho e o modelo utilizado quando conhecido. O campo Responsável do histórico deve registrar a IA/pessoa e o modelo quando disponível.
- **Quando se aplica:** obrigatória no início de cada nova tarefa ou sessão de trabalho no projeto, inclusive pesquisa, criação, edição, remoção, correção, adição de dados, alteração de interface, configuração, testes, deploy e documentação. Não é necessário repetir em todas as mensagens da mesma tarefa nem em respostas casuais que não envolvam trabalho no projeto.
- **Ordem obrigatória de trabalho:** (1) identificar-se; (2) ler integralmente este documento; (3) ler o README e arquivos relevantes; (4) verificar branch, estado remoto, commits e alterações atuais disponíveis; (5) apresentar diagnóstico e plano; (6) executar apenas o escopo autorizado, em lotes pequenos; (7) validar o resultado; (8) atualizar este documento; (9) informar o estado de commit, push, preview e produção sem confundir esses estados.
- **Comando de continuidade para o usuário:** ao iniciar uma nova IA, o usuário pode enviar: "Leia integralmente a diretriz e o arquivo DIRETRIZ_DO_PROJETO.md antes de qualquer ação. Identifique-se com nome da IA, modelo (se disponível), função e escopo. Confira o estado atual do repositório, apresente um diagnóstico e um plano antes de alterar qualquer coisa. Toda mudança feita deve ser validada e registrada neste documento. Não invente informações nem declare como concluído o que não foi verificado."
- **Regra de transparência:** a IA deve distinguir o que apenas leu, o que alterou, o que testou, o que foi commitado/enviado ao GitHub, o que foi publicado em preview e o que chegou à produção. Se não tiver acesso a alguma etapa, deve declarar a limitação.
- **Validação desta atualização:** conteúdo anterior preservado; foram acrescentadas regras explícitas de identificação no início/fim da tarefa, o prompt copiável foi atualizado e o modelo de histórico passou a solicitar identificação mais precisa. Nenhum arquivo de aplicação foi alterado nesta atualização.
- **Responsável:** ChatGPT (modelo GPT-6), atuando como responsável pela documentação e governança do projeto.
- **Arquivos afetados:** `DIRETRIZ_DO_PROJETO.md`.
- **Commit/PR:** será informado após a gravação no GitHub.
- **Deploy:** não se aplica; atualização documental.


---

## 30. Governança ampliada: fontes, dicionário de dados e quadro de prioridades — 5 de novembro de 2026

Esta seção complementa as regras anteriores e deve ser consultada por toda IA antes de pesquisar ou modificar o acervo. Ela não substitui os modelos e tipos existentes no código: quando houver diferença, a implementação atual deve ser inspecionada e qualquer mudança de esquema precisa ser planejada, testada e registrada.

### 30.1. Mapa de fontes históricas e hierarquia editorial

A escolha da fonte depende do tipo de informação. Não existe uma única fonte que seja a melhor para todos os dados.

**Nível A — fontes primárias ou oficiais diretamente responsáveis pelo registro**
- Federações e confederações (por exemplo, DFB, FIFA, UEFA, CBF e equivalentes).
- Organizadores oficiais de competições e ligas.
- Clubes e associações, especialmente páginas de história, arquivos, museus, atas, estatutos e comunicados institucionais.
- Súmulas, relatórios oficiais, regulamentos, tabelas, bases oficiais e documentos contemporâneos.
- Arquivos públicos, bibliotecas, museus e acervos documentais.

**Nível B — fontes independentes especializadas e de referência**
- Bases estatísticas históricas reconhecidas, como RSSSF, quando aplicável.
- Livros de historiadores e pesquisadores especializados.
- Publicações esportivas reconhecidas, anuários e obras de referência.
- Pesquisas acadêmicas e arquivos jornalísticos com autoria e metodologia identificáveis.

**Nível C — fontes jornalísticas e contextuais**
- Jornais e veículos esportivos com autoria, data e apuração identificáveis.
- Entrevistas, reportagens retrospectivas e obituários, úteis para contexto, testemunhos e trajetória pessoal.
- Documentários e materiais audiovisuais identificáveis, usados com cautela e sempre que possível confrontados com documentação.

**Nível D — pistas de pesquisa, não confirmação isolada**
- Wikipédia, wikis de torcedores, fóruns, redes sociais, páginas sem autoria ou sem referências, bancos de dados colaborativos e conteúdo gerado por usuários.
- Podem ajudar a localizar nomes, datas ou fontes primárias, mas não devem sustentar sozinhos um dado central do acervo.

#### Como aplicar a hierarquia
1. Para placares, datas, rodadas, classificações, gols e público, procurar primeiro o registro oficial da competição ou federação.
2. Para fundação, fusões, identidade, símbolos e história institucional, priorizar o próprio clube, seu museu/arquivo ou documentos institucionais; confrontar datas controversas com pesquisa independente.
3. Para biografias, usar fontes oficiais e independentes, distinguindo fatos documentados de memória oral e interpretação.
4. Para estatísticas históricas, registrar a metodologia e a fonte específica. Não misturar critérios diferentes como se fossem equivalentes.
5. Quando duas fontes confiáveis divergirem, preservar a divergência no registro editorial, informar qual valor foi adotado, justificar a escolha e apontar o que falta para resolver a questão.
6. Guardar URL, título, publicador, tipo de fonte, observação de cobertura e identificador estável no cadastro de fontes.
7. A fonte precisa sustentar o dado efetivamente utilizado. Uma página geral de clube não comprova automaticamente um placar, uma escalação ou uma estatística individual.
8. Não usar a quantidade de fontes como substituto de qualidade: duas cópias do mesmo dado não equivalem a duas confirmações independentes.
9. Sempre que possível, consultar a fonte original e registrar a data da consulta quando o conteúdo for mutável ou a captura tiver data específica.
10. Se não for possível confirmar, marcar como pendente ou não confirmado. Nunca completar lacunas por plausibilidade.

#### Padrão mínimo de rastreabilidade
Cada registro histórico deve apontar para um ou mais IDs de fonte cadastrados. Cada fonte deve conter, conforme o esquema do módulo, identificador, título, publicador, URL, tipo e notas sobre o que ela comprova. Fontes e notas de divergência devem ser reutilizadas por ID, evitando URLs soltas e referências duplicadas.

### 30.2. Dicionário de dados e relações

O dicionário abaixo descreve os conceitos principais já observados no módulo Bundesliga. Ele é uma orientação de leitura, não uma autorização para mudar tipos ou criar campos. Antes de implementar, conferir o arquivo de tipos, os dados reais e os validadores.

| Entidade | Identificador e finalidade | Campos/conceitos importantes | Relações |
|---|---|---|---|
| Competição | ID; identifica uma liga/copa ou competição específica | Nome, país, fundação, primeira temporada, temporada atual, escopo e política editorial | Temporadas, competições relacionadas e registros derivados |
| Temporada | ID (ex.: 1963-64); edição de uma competição | Anos inicial/final, estado, completude, campeão, vice, rebaixados, regras, estatísticas, classificação, artilharia e notas | Competição, clubes, jogadores, partidas, premiações e fontes |
| Clube | ID estável (ex.: borussia-dortmund) | Nome histórico, país, cidade, fundação, cores, identidade, status da ficha e desempenho na temporada inaugural | Temporadas, partidas, jogadores, treinadores, premiações e fontes |
| Jogador | ID estável (ex.: uwe-seeler) | Nome, temporadas notáveis, clubes, estatísticas por temporada e status da ficha | Clubes, temporadas, partidas, gols, artilharia e fontes |
| Treinador | ID estável | Nome, clube, temporadas, função e status da ficha | Clube, temporadas e fontes |
| Partida | ID estável (preferir data + participantes, sem depender do placar) | Temporada, rodada, data, mandante/visitante, gols, competição, estádio, cidade, público, árbitro, evento-chave, cronologia e status editorial | Dois clubes, temporada, competição, eventos e fontes |
| Evento de partida | Registro dentro da cronologia da partida | Minuto, tipo (gol ou expulsão no esquema atual), jogador e clube associado | Partida, jogador e clube |
| Classificação | Posição dentro de uma temporada | Clube, jogos, vitórias, empates, derrotas, gols pró/contra, saldo, pontos e quociente histórico | Temporada e clube |
| Artilharia | Linha de ranking de uma temporada | Posição, jogador, clube, gols, pênaltis, status e fontes | Temporada, jogador, clube e fontes |
| Premiação | ID estável | Temporada, nome, destinatário, clube/valor quando aplicável e fontes | Temporada, pessoa/clube e fontes |
| Fonte | ID estável (ex.: dfb-season-table-1963-64) | Título, publicador, URL, tipo e notas | Qualquer entidade ou dado que a fonte sustente |
| Nota de fonte/divergência | ID estável | Severidade, assunto, fonte adotada e explicação editorial | Fontes, temporadas e registros afetados |
| Índice de temporadas | ID da temporada | Rótulo, anos, status, existência de ficha detalhada, política de atualização e nota | Competição e temporada |

#### Regras de modelagem
- IDs são estáveis, únicos e legíveis; não usar o nome exibido como chave de relacionamento.
- Relacionamentos devem usar IDs (clubId, seasonId, competitionId, sourceIds), não depender apenas de texto.
- Manter o nome histórico válido para o período. Registrar nomes atuais ou mudanças de denominação em notas/contexto, sem apagar o nome usado na época.
- Distinguir clube, seleção, jogador, treinador, competição, temporada e partida; não transformar tipos diferentes em um registro genérico sem necessidade.
- Ano civil e temporada são conceitos distintos. Ex.: 1963 e Bundesliga 1963/64 não são intercambiáveis.
- Não presumir que temporada listada no índice está pesquisada. Status do índice e completude do conteúdo devem permanecer explícitos.
- Estatísticas devem declarar o recorte, a unidade, o critério e a fonte. Quociente de gols histórico não é sinônimo de saldo de gols moderno.
- Eventos de partida devem estar coerentes com o placar e com os participantes. Conferir minuto, jogador, clube e ordem cronológica.
- Campos opcionais devem permanecer ausentes quando não houver confirmação; não usar valores inventados, zeros fictícios ou strings vagas para preencher lacunas.
- Antes de adicionar uma nova entidade/campo, verificar se já existe representação equivalente e atualizar tipos, validadores, testes, interface e documentação de forma coordenada.
- Não apagar histórico ou corrigir silenciosamente dados divergentes. Registrar a alteração, sua justificativa e a fonte que a sustenta.

### 30.3. Quadro de estado, pendências e prioridades

Este quadro é uma fotografia do estado documentado em 05/11/2026. Antes de cada nova tarefa, a IA deve verificar o repositório e atualizar a situação; não tratar este quadro como substituto de uma inspeção atual.

**Concluído e registrado**
- Base da aplicação, identidade visual e experiência de entrada/atlas-múndi em desenvolvimento.
- Catálogo inicial de entidades e módulos históricos.
- Restauração da base TypeScript e versionamento de package-lock.json.
- Temporada inaugural da Bundesliga 1963/64 com classificação documentada, 16 fichas iniciais de clubes e 50 linhas nominais de artilharia capturadas até o corte consultado de seis gols.
- Auditoria documental da classificação e das divergências conhecidas.
- Correção editorial da expulsão de Helmut Rahn: usar “primeiro jogador expulso”, não “primeiro cartão vermelho”.
- Cadastro individual de partidas históricas especiais e expansão do primeiro lote de partidas da segunda rodada.
- Validações automatizadas de integridade e build conforme os resultados registrados nas etapas anteriores.

**Em andamento**
- Expansão do cadastro individual das 240 partidas da Bundesliga 1963/64, em lotes pequenos.
- Aprofundamento do acervo histórico, com relações entre entidades e referências por dado.
- Revisão contínua da consistência dos registros e da cobertura das fontes.

**Pendente de pesquisa histórica**
- As partidas restantes da temporada inaugural, com dados completos e cronologia sustentada por fontes.
- Elencos completos, escalações e estatísticas de jogadores além da artilharia já capturada.
- Biografias individuais de jogadores e treinadores.
- Estatísticas de goleiros e outros indicadores ainda não modelados/documentados.
- Ampliação da artilharia abaixo do corte nominal de seis gols, somente se houver fonte nominativa confiável.
- Estádios, mudanças de nome, públicos por partida e outros dados de contexto ainda não cadastrados.
- Premiações, campanhas continentais e relações históricas adicionais que ainda careçam de pesquisa.

**Pendente de implementação ou revisão técnica**
- Conferir se o desenho atual de tipos e relações continua adequado à expansão do acervo.
- Manter validadores e testes cobrindo novos registros e integridade referencial.
- Revisar a apresentação das fichas, navegação e busca conforme o acervo cresce.
- Conferir a documentação do README e os links para esta diretriz após a renomeação.
- Verificar se todas as rotas, filtros e módulos exibem corretamente os estados pendentes/incompletos.

**Pendente de revisão visual e experiência**
- Inspeção visual manual em desktop e celular das telas alteradas.
- Conferência de responsividade, legibilidade, navegação, acessibilidade e estados vazios.
- Revisão de consistência visual entre atlas, catálogo e fichas da Bundesliga.
- Validar no navegador real as mudanças de interface; build aprovado não equivale a inspeção visual.

**Próxima tarefa recomendada**
- Seguir o ponto de retomada e o plano detalhado da seção 33.9: diagnóstico somente leitura no VS Code, sincronização segura da branch e matriz de cobertura das 240 partidas.
- Depois do diagnóstico, propor o primeiro lote cronológico de jogos ainda não cadastrados, com fontes, arquivos e testes previstos.
- Não iniciar cadastro de partidas até o usuário aprovar o lote. As etapas seguintes são as etapas 6 a 9 da seção 33.

### 30.4. Checklist obrigatório antes de encerrar qualquer tarefa

- [ ] A IA se identificou no início e no relatório final.
- [ ] A diretriz e os arquivos relacionados foram lidos.
- [ ] Branch, commit-base e estado atual foram conferidos.
- [ ] O escopo foi delimitado e não extrapolou a autorização do usuário.
- [ ] As fontes sustentam os fatos efetivamente adicionados.
- [ ] IDs e relações foram conferidos; não foram criadas duplicatas.
- [ ] Testes e build pertinentes foram executados, com resultados reais registrados.
- [ ] A interface foi inspecionada quando houve mudança visual; se não, a limitação foi declarada.
- [ ] Esta diretriz foi atualizada com arquivos, decisões, validações, pendências e estado do deploy.
- [ ] Commit, push, preview e produção foram descritos separadamente.
- [ ] A próxima ação ficou clara, sem declarar como concluído o que ainda está pendente.

### 30.5. Registro da ampliação da diretriz e renomeação

- **Responsável:** ChatGPT, modelo GPT-6; função de documentação e governança.
- **Tipo:** documentação / governança / organização do projeto.
- **Motivo:** tornar o documento central suficiente para orientar qualquer IA, com hierarquia de fontes, dicionário de dados, quadro de prioridades e fases sem ambiguidade.
- **O que mudou:** adicionados mapa de fontes históricas e critérios de divergência; dicionário de entidades, campos e relações; regras de modelagem; quadro de concluído/em andamento/pendente; checklist de encerramento; harmonização entre fases gerais e etapas operacionais. O nome do arquivo passa a ser DIRETRIZ_DO_PROJETO.md.
- **Arquivos afetados:** `DIRETRIZ_DO_PROJETO.md` (novo nome do documento central), `README.md` (link para a diretriz) e remoção de `ANDAMENTO_DO_PROJETO_ALEXANDRIA.md` após a migração do conteúdo.
- **Validação:** conteúdo anterior preservado e referências internas ao nome antigo atualizadas. A estrutura do dicionário foi confrontada com os tipos e dados atuais do módulo Bundesliga. Esta alteração é documental; não modifica a aplicação.
- **Commits:** criação da diretriz ampliada `e743b42129473d7147a084a796a824b75ceb6c8c`; atualização do README `fa35384d3da0e301f1d8b0aaa0c639d01f330c67`; remoção do arquivo com o nome antigo: `18e0792aaeda8c85331dc575081f0dc88788cd0b`.
- **Deploy:** não se aplica; alteração documental.


---

## 31. Protocolo de trabalho para o usuário Vibe Coder

### 31.1. Como o usuário participa do projeto

O usuário atua como idealizador, diretor do produto e responsável pelas decisões de negócio e experiência. Ele trabalha no modelo **Vibe Coding / Vibe Coder**: descreve o que deseja, apresenta ideias, referências e feedback, avalia os resultados e aprova a direção.

**Não presumir que o usuário programa ou que deseja programar.** A IA deve assumir as tarefas técnicas que estiver autorizada e equipada para executar. O usuário não deve ser tratado como responsável por escrever código, editar arquivos manualmente, executar comandos de terminal, corrigir erros de compilação, resolver conflitos de Git ou fazer deploy.

O usuário continua sendo a autoridade sobre:
- O propósito e a direção do produto.
- As funcionalidades desejadas e prioridades.
- A identidade visual e a experiência que considera adequadas.
- As escolhas que alterem significativamente o escopo, o orçamento, os riscos ou o comportamento do produto.
- A aprovação de mudanças relevantes e da publicação em produção, quando aplicável.

A IA é responsável por transformar as orientações aprovadas em implementação técnica, pesquisa, testes, documentação e entregas verificáveis.

### 31.2. Fluxo de trabalho esperado da IA

1. **Entender o pedido:** traduzir a ideia do usuário em um objetivo concreto, sem exigir que ele conheça termos técnicos.
2. **Consultar a diretriz e o estado real:** identificar-se, ler este documento, inspecionar o repositório/ambiente conectado e verificar branch, commits, arquivos e alterações existentes.
3. **Explicar o plano:** dizer em linguagem simples o que pretende fazer, qual resultado o usuário verá, quais áreas serão afetadas e se existe algum risco ou decisão que exige aprovação.
4. **Executar diretamente:** quando houver acesso e autorização, fazer as alterações no ambiente/repositório. Não delegar ao usuário etapas técnicas que a própria IA pode executar.
5. **Validar:** executar os testes pertinentes, revisar erros, verificar o build e abrir/inspecionar a versão de preview quando a mudança afetar a experiência visual ou funcional.
6. **Corrigir antes de entregar:** se a validação encontrar falhas, investigar e corrigir dentro do escopo autorizado. Não encerrar apenas relatando um erro que poderia resolver.
7. **Documentar:** atualizar esta diretriz com o que realmente foi feito, arquivos afetados, decisões, testes, limitações e situação do Git/deploy.
8. **Entregar um resumo acessível:** explicar o que mudou, onde o usuário pode ver, o que foi validado e se há algo que precisa de decisão dele.

### 31.3. Como explicar assuntos técnicos

- Usar português brasileiro claro e direto. Explicar siglas e termos técnicos quando forem importantes.
- Começar pelo impacto para o usuário e pelo resultado, não por detalhes de código.
- Se mencionar branch, commit, build, deploy, API, componente, banco de dados ou erro de console, explicar brevemente o que isso significa quando não for óbvio.
- Separar claramente: **feito**, **testado**, **publicado** e **aguardando aprovação**. Essas palavras não são equivalentes.
- Não despejar blocos de código, logs extensos ou listas de arquivos sem explicar por que importam. Fornecer detalhes técnicos adicionais se o usuário pedir.
- Não usar linguagem que faça o usuário sentir que precisa aprender programação para continuar o projeto.
- Quando precisar de uma decisão dele, formular uma pergunta objetiva e explicar a consequência de cada opção em termos do produto.

### 31.4. Autonomia técnica e limites de aprovação

**A IA pode executar sem pedir aprovação adicional**, desde que esteja dentro do pedido e das decisões já aprovadas:
- Corrigir erros técnicos e regressões.
- Ajustar código, organização interna, tipagem, testes e validações.
- Melhorar acessibilidade, responsividade, desempenho e consistência visual sem mudar a direção aprovada.
- Pesquisar fontes, organizar dados e corrigir informações comprovadamente erradas, registrando evidências.
- Atualizar documentação, dependências e configurações de baixo risco quando necessário, explicando a alteração.
- Criar commits e branches de trabalho quando isso fizer parte do fluxo seguro do repositório.

**A IA deve apresentar a proposta e obter aprovação antes de:**
- Mudar o conceito central, o público, o posicionamento ou a identidade do produto.
- Remover funcionalidades ou dados relevantes, ou fazer alterações destrutivas/difíceis de reverter.
- Introduzir custos recorrentes, serviços pagos, APIs pagas, infraestrutura ou dependências comerciais.
- Adicionar login, coleta de dados pessoais, analytics invasivo, publicidade, pagamentos ou compartilhamento de dados.
- Alterar a stack principal, arquitetura estrutural ou estratégia de armazenamento de forma significativa.
- Publicar em produção uma mudança de grande impacto quando a autorização ainda não estiver clara.
- Expandir substancialmente o escopo para além do que o usuário pediu.

Em caso de dúvida sobre risco ou impacto, preservar o estado atual e perguntar antes de executar a parte irreversível.

### 31.5. Segurança, cópias e reversibilidade

- Antes de alterações amplas, migrações, exclusões ou operações difíceis de reverter, criar uma branch de trabalho e confirmar o commit-base.
- Não sobrescrever trabalho do usuário nem descartar alterações locais/remotas que não tenham sido compreendidas.
- Verificar o estado do Git e alterações não commitadas quando houver acesso. Alterações locais em Codespaces que ainda não foram enviadas ao GitHub não podem ser presumidas como visíveis.
- Preferir mudanças pequenas e commits com mensagens claras.
- Preservar dados históricos e conteúdo existente; exclusões precisam de justificativa e aprovação quando afetarem conteúdo relevante.
- Ter um caminho de reversão: identificar o commit ou a alteração que pode ser revertida e explicar como restaurar o estado anterior.
- Nunca expor tokens, senhas, chaves privadas, credenciais ou segredos em código, documentação, logs ou mensagens.
- Não adicionar serviços externos ou permissões novas sem explicar a finalidade e o impacto.

### 31.6. Critérios mínimos de qualidade antes da entrega

A IA deve escolher verificações adequadas ao tipo de mudança e registrar o resultado real:

| Tipo de mudança | Verificações esperadas |
|---|---|
| Código e lógica | Testes pertinentes, análise estática/tipagem quando disponível e build |
| Interface e design | Build, navegação dos fluxos afetados, preview e inspeção visual em desktop e celular quando possível |
| Dados históricos | Fontes rastreáveis, consistência de IDs e relações, validação de campos e testes de integridade |
| Configuração e dependências | Compatibilidade, build, testes afetados e revisão de riscos |
| Deploy | Estado real da implantação, URL correta, logs relevantes e confirmação de produção ou preview |
| Documentação | Links, nomes de arquivos, instruções e estado do projeto conferidos |

Se uma verificação não puder ser feita, a IA deve dizer qual, por que não foi possível e o que isso deixa sem confirmação. Um build aprovado não comprova, por si só, que a experiência visual está correta; uma alteração commitada não significa que foi publicada em produção.

### 31.7. Formato do relatório ao usuário

Ao encerrar uma tarefa, usar um resumo curto e compreensível:
- **O que foi feito:** resultado em termos do produto.
- **O que foi verificado:** testes, build, pesquisa, preview ou revisão realizados.
- **Onde está:** branch/commit e link de preview ou produção, se existirem.
- **O que falta:** limitações, pendências ou validações não realizadas.
- **Precisa de você?:** somente decisões, aprovações ou ações que realmente dependam do usuário.

Não dizer “está pronto” quando o trabalho estiver apenas escrito, commitado ou em preview. Descrever o estado com precisão.

### 31.8. Regra de ouro

**O usuário conduz a visão; a IA executa o trabalho técnico.** Não transformar o Vibe Coder em programador, não esconder limitações e não tomar decisões importantes pelo usuário. O objetivo é permitir que ele desenvolva a Alexandria pela conversa, com controle sobre o produto e confiança na execução.

---

## 32. Registro — protocolo Vibe Coder — 5 de novembro de 2026

- **Responsável:** ChatGPT, modelo GPT-6; função de documentação e governança.
- **Motivo:** o usuário esclareceu que conduz a Alexandria no modelo Vibe Coding e não realiza programação manual. A diretriz precisava orientar outras IAs a assumir a execução técnica e explicar o trabalho sem transferir tarefas de programação ao usuário.
- **O que mudou:** incorporado protocolo específico para Vibe Coder, fluxo de trabalho, comunicação em linguagem simples, autonomia técnica, limites de aprovação, segurança, reversibilidade, critérios de qualidade e formato de relatório.
- **Arquivos afetados:** DIRETRIZ_DO_PROJETO.md.
- **Validação:** seção 31 e prompt de continuidade conferidos no arquivo atualizado. Alteração exclusivamente documental; nenhuma aplicação, dado histórico ou configuração técnica foi modificada.
- **Commit:** será informado após a gravação e verificação no GitHub.
- **Deploy:** não se aplica; alteração documental.



---

## 33. Plano mestre — próximas fases e encerramento da Bundesliga 1963/64

**Atualização de planejamento:** 5 de novembro de 2026. Esta seção transforma as pendências anteriores em uma sequência executável. Ela não declara etapas futuras como concluídas e não autoriza, por si só, mudanças de código, cadastro de partidas, merge ou publicação.

### 33.1. Diagnóstico confirmado do acervo de partidas

- A temporada inaugural tem **240 partidas**, distribuídas em 30 rodadas com 8 partidas por rodada.
- O arquivo `src/data/bundesliga/matches.ts`, na branch `phase-4-bundesliga-matches-batch-1`, contém **5 registros individuais**: a partida de abertura, Borussia Dortmund 3–3 TSV 1860 München, Hamburger SV 4–2 1. FC Saarbrücken, Meidericher SV 1–3 Hertha BSC e Hertha BSC 0–3 1. FC Köln.
- Quatro registros têm fichas históricas enriquecidas com dados de contexto/eventos; a partida de abertura permanece com cadastro mais limitado e não aparece na seção de fichas enriquecidas da interface.
- Portanto, a cobertura nominal atual é de 5/240 partidas e faltam **235 registros** para completar a cobertura básica de jogos. A quantidade deve ser recalculada após sincronizar o ambiente local e antes de cada novo lote.
- A classificação final, os 16 clubes e as 50 linhas nominais da artilharia até o corte de seis gols já estão documentados. As 50 linhas não devem ser apresentadas como lista comprovadamente exaustiva de todos os goleadores da temporada.
- A etapa de cadastro das 240 partidas ainda não começou de forma sistemática: os jogos especiais e dois jogos da segunda rodada foram cadastrados em etapas anteriores, mas não existe confirmação de cobertura integral rodada a rodada.

### 33.2. Definição objetiva de temporada concluída

A Bundesliga 1963/64 só poderá receber o status **temporada inaugural — cobertura básica concluída** quando todos os critérios abaixo forem atendidos:

1. Existem exatamente 240 partidas individuais, sem duplicatas, cada uma ligada à temporada e aos dois clubes corretos.
2. Todas as partidas têm os campos essenciais confirmados: data, rodada, mandante, visitante, gols do mandante, gols do visitante e ao menos uma fonte rastreável que sustente o registro.
3. Cada um dos 16 clubes aparece em 30 partidas, com 15 jogos em casa e 15 fora, salvo se uma auditoria documental demonstrar regra/registro excepcional — nesse caso, a exceção deve ser explicada, não ocultada.
4. A soma dos gols das 240 partidas é reconciliada com os 857 gols registrados para a temporada. Qualquer diferença precisa ser investigada e documentada antes do aceite.
5. A tabela final é reproduzida pelos resultados, respeitando a regra histórica de dois pontos por vitória e o quociente de gols usado em 1963/64; a divergência DFB/RSSSF já registrada deve continuar visível.
6. Não há IDs duplicados, clubes inexistentes, jogos associados à rodada errada, partidas repetidas ou relações quebradas.
7. As divergências relevantes e os dados não encontrados estão registrados. Campos como estádio, público, árbitro e cronologia de gols podem ficar ausentes quando não houver fonte suficiente; não são motivo para inventar dados nem para bloquear a cobertura básica.
8. Os testes automatizados, a compilação e a revisão visual do módulo passam; a diretriz registra os resultados reais e as limitações restantes.

**O que não será exigido para declarar a cobertura básica concluída:** biografias longas de todos os jogadores, escalações completas de todos os jogos, estatísticas completas de goleiros, história detalhada de todos os estádios ou ampliação da artilharia abaixo de seis gols sem fonte nominativa. Esses itens formam uma camada de aprofundamento editorial posterior e devem ser identificados como pendências, sem fingir que estão completos.

### 33.3. Etapa 5 — inventário e cadastro das 240 partidas

**Objetivo:** completar a cobertura individual dos 240 jogos da temporada com consistência, sem tentar cadastrar tudo de uma só vez.

**Passo 5.1 — sincronização e auditoria inicial no VS Code**
- Abrir o repositório correto e confirmar que a branch de trabalho é `phase-4-bundesliga-matches-batch-1`.
- Sincronizar com o GitHub antes de editar. Se houver alterações locais não commitadas, não sobrescrever nem descartar: inspecionar e reconciliar primeiro.
- Conferir o último commit remoto, os arquivos `matches.ts`, `sources.ts`, `types.ts`, `validate.ts`, `validate.test.ts`, `seasons/1963-64.ts` e a interface `BundesligaArchive.tsx`.
- Recontar partidas e IDs, verificar duplicatas e criar uma matriz de cobertura com 30 rodadas × 8 jogos. Marcar cada jogo como: não pesquisado, fontes localizadas, dados conferidos, cadastrado, validado.
- A matriz deve identificar claramente os jogos já existentes e evitar recadastrar os cinco registros atuais.

**Passo 5.2 — método de pesquisa por partida**
- Priorizar a ficha individual do DFB Datencenter para data, rodada, participantes, placar, estádio, público, árbitro e cronologia de gols.
- Confrontar resultados e informações relevantes com fontes independentes confiáveis, como RSSSF, arquivos de clubes ou imprensa histórica quando disponíveis.
- Cadastrar uma referência própria em `sources.ts` para cada página de partida usada, com título, publicador, URL, tipo e nota objetiva sobre quais dados ela comprova.
- Não tratar uma página geral da temporada como prova automática de todos os detalhes de cada partida.
- Se uma fonte não informar público, árbitro, estádio ou minuto de gol, manter o campo ausente e registrar a limitação quando ela for relevante. Não inferir o dado a partir de outra partida ou de memória.
- Conferir que os eventos de gol, quando cadastrados, correspondem ao placar, aos jogadores e aos clubes; a soma dos eventos deve ser compatível com os gols da partida.

**Passo 5.3 — organização dos lotes**
- Trabalhar preferencialmente uma rodada por lote, até 8 partidas, respeitando a ordem cronológica da competição.
- Como algumas rodadas já têm jogos cadastrados, o primeiro lote deve completar os jogos faltantes da rodada mais antiga, sem duplicar o que já existe. A matriz de cobertura define exatamente a seleção.
- Cada lote deve terminar com revisão das fontes, IDs, placares, cronologia, relações e testes. Só então iniciar o próximo lote.
- Atualizar a matriz de cobertura e o registro de andamento após cada lote. Não registrar como completa uma rodada enquanto faltar qualquer uma de suas oito partidas.
- Se um lote exigir mais pesquisa do que o previsto, reduzi-lo. Qualidade e rastreabilidade têm prioridade sobre velocidade.

**Passo 5.4 — critérios para aceitar cada lote**
- Todas as partidas do lote têm data, rodada, mandante, visitante e placar sustentados por fonte.
- Não há IDs repetidos nem duplicação de partidas já existentes.
- Cada referência cadastrada abre a ficha ou documento citado e comprova os dados descritos na nota.
- A cronologia não contradiz o placar; dados desconhecidos permanecem ausentes.
- Os testes de integridade e o build passam; a interface mostra as novas fichas corretamente quando aplicável.
- A diretriz registra número de jogos adicionados, rodadas cobertas, fontes, arquivos, testes, commit e estado do preview/produção.

### 33.4. Etapa 6 — reconciliação estatística e auditoria final

Depois de cadastrar as 240 partidas:
- Recalcular jogos, vitórias, empates, derrotas, gols pró, gols contra, pontos e quociente de cada clube a partir dos resultados cadastrados.
- Comparar os resultados calculados com a classificação oficial do DFB, mantendo o quociente histórico e as notas de divergência já documentadas.
- Confirmar 30 partidas por clube, 15 como mandante e 15 como visitante, e 240 partidas no total.
- Confirmar 857 gols no conjunto de resultados e investigar qualquer diferença.
- Verificar datas e rodadas, incluindo partidas adiadas ou datas diferentes da sequência padrão, sempre de acordo com fontes.
- Revisar a consistência entre `matches.ts`, `seasons/1963-64.ts`, clubes, jogadores, artilharia e fontes.
- Criar testes automatizados para cobertura total, duplicidade, integridade referencial, total de jogos, jogos por clube, gols e reconstrução da classificação. Não codificar um teste que simplesmente repita números sem calcular a partir das partidas.
- Preservar a divergência de posições 10/11 entre DFB e RSSSF e explicar por que o DFB é adotado; não corrigir silenciosamente a fonte independente.

### 33.5. Etapa 7 — fechamento editorial do dossiê 1963/64

- Consolidar a ficha da temporada: contexto de criação da Bundesliga, formato, 16 participantes, classificação, campeão, vice, rebaixados, artilharia, estatísticas e principais acontecimentos.
- Conferir se as fichas dos 16 clubes estão claramente identificadas como fichas históricas iniciais, sem sugerir biografias completas quando não forem.
- Consolidar a lista de fontes por assunto e as notas de divergência, com linguagem compreensível ao visitante.
- Registrar explicitamente a cobertura da artilharia: 50 linhas nominais até o corte de seis gols na consulta documentada; jogadores abaixo desse corte não estão confirmados como cobertura integral.
- Listar lacunas restantes: elencos e escalações, biografias, treinadores, goleiros, estádios, públicos ausentes, premiações e campanhas continentais.
- Definir quais lacunas são prioritárias para uma futura camada de aprofundamento, sem misturá-las aos critérios mínimos da cobertura básica.

### 33.6. Etapa 8 — revisão de interface e qualidade do módulo

- Conferir se a página da Bundesliga mostra claramente a temporada, a tabela, os clubes, a artilharia e a lista de partidas documentadas.
- Garantir que a interface não dê a entender que há 240 fichas quando só parte delas estiver cadastrada; exibir progresso ou estado de cobertura de forma honesta durante o desenvolvimento.
- Revisar navegação entre temporada, clube, jogador e partida; links de fonte; estados vazios; carregamento; erros e telas estreitas.
- Testar busca e filtros, se existentes, com o volume completo de 240 partidas.
- Inspecionar visualmente desktop e celular, incluindo legibilidade, contraste, teclado/foco e acessibilidade básica.
- Executar tipagem, testes e build; corrigir regressões antes do aceite.
- Fazer revisão funcional no preview publicado. READY/build aprovado não substitui inspeção visual e navegação manual.

### 33.7. Etapa 9 — aceite e encerramento formal da Bundesliga

- Produzir um relatório de fechamento com os 240 jogos, cobertura por rodada, cobertura de fontes, reconciliação estatística, testes e lacunas editoriais.
- Atualizar o status da temporada para **cobertura básica concluída** somente se todos os critérios da seção 33.2 forem satisfeitos.
- Registrar separadamente itens de aprofundamento ainda pendentes; não declarar a enciclopédia completa em todos os aspectos se elencos, biografias e outras camadas não estiverem prontas.
- Confirmar branch, commits, preview, produção e diferença em relação à `main`.
- Apresentar ao usuário o resultado e obter autorização antes de merge para `main` ou publicação de uma mudança de grande impacto, conforme o protocolo Vibe Coder.
- Após o aceite, definir a próxima competição/temporada somente com uma decisão de prioridade do produto; não expandir aleatoriamente para várias ligas.

### 33.8. Próximas fases gerais da Alexandria depois da Bundesliga

| Fase geral | Objetivo | Entregáveis | Condição para avançar |
|---|---|---|---|
| 2 — Direção do produto e experiência | Confirmar a proposta definitiva da Alexandria, público, promessa e jornada principal. | Decisões de produto registradas, mapa de navegação e prioridades aprovadas. | O usuário apresentar/aprovar a direção final; não fazer reformulação ampla por suposição. |
| 3 — Arquitetura do produto e dados | Auditar e consolidar entidades, relações, fontes, busca, estados de completude e escalabilidade. | Modelo de dados documentado e coerente com os módulos aprovados. | Arquitetura validada contra os fluxos reais do produto. |
| 4 — Funcionalidades centrais | Implementar a experiência de exploração e consulta definida: catálogo, páginas de entidades, relações, busca e filtros. | Fluxos principais funcionais e testados. | Critérios de aceite por funcionalidade atendidos. |
| 5 — Conteúdo e acervo histórico | Encerrar Bundesliga 1963/64 e depois expandir por prioridades editoriais, competição e temporada. | Acervos rastreáveis, com cobertura e lacunas explícitas. | Cada lote passa por fontes, integridade e revisão. |
| 6 — Qualidade, revisão e evolução | Testar o produto completo, acessibilidade, responsividade, desempenho, segurança e publicação. | Checklist de qualidade, correções, documentação e release controlado. | Revisão final e aprovação do usuário para mudanças de produção relevantes. |

**Ordem prática recomendada:** (1) concluir o cadastro das 240 partidas; (2) reconciliar a temporada; (3) fechar editorialmente o dossiê; (4) revisar a página e a experiência Bundesliga; (5) encerrar formalmente a temporada; (6) retomar com o usuário a direção definitiva do produto; (7) priorizar arquitetura e funcionalidades gerais conforme essa direção; (8) escolher o próximo acervo histórico.

### 33.9. Ponto exato de retomada no VS Code

Quando o usuário voltar ao VS Code ou abrir uma IA de programação, a primeira tarefa deve ser **somente diagnóstico e preparação da Etapa 5**, não cadastrar partidas automaticamente antes de confirmar o estado local.

Prompt de continuidade para o agente do VS Code:

> Você está trabalhando na Alexandria da Bola. Leia integralmente `DIRETRIZ_DO_PROJETO.md`, especialmente as seções 31, 32 e 33, antes de qualquer ação. Identifique-se com nome da IA, modelo exato se disponível, função e escopo. O usuário é Vibe Coder e não programa: assuma o trabalho técnico, explique em linguagem simples e não peça para ele editar código ou executar comandos.
>
> Primeiro faça um diagnóstico somente leitura: confirme o repositório, branch `phase-4-bundesliga-matches-batch-1`, estado do Git, alterações locais, último commit e sincronização com o GitHub. Não descarte alterações locais nem faça reset. Se a branch local estiver atrás, sincronize com segurança; se houver alterações não commitadas, preserve-as e explique o conflito antes de prosseguir.
>
> Leia `matches.ts`, `sources.ts`, `types.ts`, `validate.ts`, `validate.test.ts`, `seasons/1963-64.ts` e `BundesligaArchive.tsx`. Conte os registros existentes, verifique duplicatas e monte a matriz de cobertura das 30 rodadas e 240 partidas, identificando os cinco registros já cadastrados. Não invente fixtures nem complete dados por plausibilidade.
>
> Ao final, apresente o diagnóstico e proponha o primeiro lote de partidas faltantes da rodada cronologicamente mais antiga, com fontes oficiais do DFB e conferência independente quando disponível, arquivos que serão alterados e testes previstos. Não comece o cadastro até o usuário aprovar o lote. Depois da aprovação, execute em lote pequeno, valide e atualize a diretriz.

**Atenção ao estado remoto:** o diagnóstico desta atualização encontrou a branch `phase-4-bundesliga-matches-batch-1` 12 commits à frente da `main`, sem commits atrás. O trabalho documental e de acervo dessa branch ainda não foi incorporado à `main`. Antes de editar pelo VS Code, garantir que a cópia local esteja na branch correta e sincronizada; não trabalhar acidentalmente em `main`.

### 33.10. Regras para não confundir conclusão com publicação

- Cobertura histórica concluída significa que os critérios editoriais e estatísticos da temporada foram cumpridos; não significa automaticamente que o código foi integrado à `main`.
- Commit significa que a alteração foi gravada no histórico da branch; push/sincronização significa que chegou ao GitHub; preview significa que existe uma implantação de teste; produção significa que a versão pública foi atualizada.
- O relatório final deve informar cada estado separadamente.
- Nenhuma IA deve prometer uma data de conclusão antes de conhecer a disponibilidade e a qualidade das fontes das partidas restantes.

---

## 34. Registro — planejamento de encerramento da Bundesliga e próximas fases — 5 de novembro de 2026

- **Responsável:** ChatGPT, modelo GPT-6; função de planejamento do produto, pesquisa de estrutura do acervo e documentação de continuidade.
- **Motivo:** o usuário pediu que as próximas fases gerais e os passos concretos para encerrar a Bundesliga fossem definidos e registrados para retomada pelo VS Code.
- **Diagnóstico realizado:** diretriz integral consultada; README e arquivos `matches.ts`, `sources.ts` e `validate.test.ts` inspecionados na branch de trabalho; identificados 5 registros de partidas e a meta de 240 jogos; comparação GitHub informa branch 12 commits à frente da `main`, sem commits atrás.
- **O que mudou:** tabela operacional atualizada com as etapas 5 a 9; adicionados critérios objetivos de conclusão da temporada, plano de pesquisa/cadastro em lotes, reconciliação estatística, fechamento editorial, revisão visual, aceite, roadmap das fases gerais e prompt de retomada no VS Code.
- **Arquivos afetados:** `DIRETRIZ_DO_PROJETO.md`.
- **Limitações:** diagnóstico remoto do GitHub; o estado local do VS Code, alterações não commitadas e a sincronização da máquina do usuário não foram inspecionados. A contagem de partidas deve ser reconfirmada localmente antes do primeiro lote. Nenhuma partida nova foi pesquisada ou cadastrada nesta tarefa.
- **Validação:** conferência textual da diretriz e dos arquivos de dados; nenhuma execução de testes ou build, pois não houve mudança na aplicação.
- **Commit de inclusão do plano:** `5cefc07948023de48567aa15263f8fcd153e3246`.
- **Deploy:** não se aplica; atualização exclusivamente documental.


---

## 35. Registro de execução — Etapa 5, lote 1 — 1ª rodada da Bundesliga 1963/64

- **Responsável:** ChatGPT, modelo GPT-6; função de pesquisa histórica, curadoria de dados e manutenção do repositório.
- **Branch verificada:** `phase-4-bundesliga-matches-batch-1`.
- **Base verificada antes da alteração:** commit `6efa89c8db16be2d23d74d0dc9311a4be8c17314`; branch 14 commits à frente de `main`, sem commits atrás. Nenhuma alteração na `main`.
- **Diagnóstico remoto:** antes deste lote havia 5 registros individuais em `matches.ts`; a primeira rodada tinha somente a partida de abertura cadastrada.
- **Escopo executado:** completados os outros sete jogos da 1ª rodada, todos em 24/08/1963. A rodada agora possui oito registros individuais.
- **Partidas adicionadas:**
  1. 1. FC Saarbrücken 0–2 1. FC Köln.
  2. TSV 1860 München 1–1 Eintracht Braunschweig.
  3. Eintracht Frankfurt 1–1 1. FC Kaiserslautern.
  4. FC Schalke 04 2–0 VfB Stuttgart.
  5. SC Preußen Münster 1–1 Hamburger SV.
  6. Karlsruher SC 1–4 Meidericher SV.
  7. Hertha BSC 1–1 1. FC Nürnberg.
- **Fontes:** fichas individuais do DFB Datencenter para os sete jogos. A RSSSF foi usada como conferência independente dos resultados da rodada. Para o jogo Karlsruher SC–Meidericher SV, o DFB exibe a denominação comercial atual BBBank Wildpark; o estádio foi omitido do registro para não projetar um nome moderno sobre 1963.
- **Arquivos alterados:** `src/data/bundesliga/matches.ts`, `src/data/bundesliga/sources.ts`, `src/data/bundesliga/validate.test.ts` e esta diretriz.
- **Validação de conteúdo:** oito jogos na 1ª rodada; placares, clubes, data, rodada e eventos dos sete novos registros conferidos contra as fichas oficiais do DFB. Os eventos cadastrados correspondem aos placares.
- **Testes automatizados e build:** não executados neste ambiente de edição remota; não declarar aprovação técnica até execução no ambiente de desenvolvimento.
- **Contagem após o lote:** 12 partidas individuais cadastradas de 240; 228 pendentes. A 1ª rodada está completa; a 2ª rodada tem dois jogos já cadastrados e seis faltantes.
- **Git/deploy:** alterações gravadas na branch de trabalho por commits de conteúdo; não houve merge para `main`, deploy ou publicação em produção. A situação de preview não foi alterada nem verificada nesta execução.
- **Próxima ação:** continuar pela 2ª rodada, pesquisando os seis jogos faltantes sem duplicar Borussia Dortmund 3–3 TSV 1860 München e Hamburger SV 4–2 1. FC Saarbrücken. Antes de novo lote, recontar os dados e verificar os hashes atuais.
