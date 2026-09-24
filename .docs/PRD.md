1. Visão geral
O Chess Streamers será uma aplicação web que reúne streamers de xadrez em uma única página, utilizando dados fornecidos pela API pública do Chess.com.

A aplicação terá foco em simplicidade, visualização rápida e acesso direto aos canais da Twitch.

2. Objetivo do produto
Permitir que usuários:

Encontrem streamers de xadrez.
Visualizem seus nomes e fotos.
Identifiquem quem está ao vivo.
Acessem os canais da Twitch rapidamente.

3. Público-alvo
Jogadores de xadrez.
Fãs de transmissões ao vivo.
Pessoas interessadas em acompanhar partidas de xadrez.
Usuários que procuram criadores de conteúdo de xadrez.

4. Problema
Atualmente, o usuário precisa procurar individualmente por canais de xadrez para descobrir quais streamers estão transmitindo.

A aplicação resolverá esse problema reunindo os streamers em uma lista única, com indicação visual do status de cada canal.

5. Solução proposta
Criar uma página responsiva que consulte a API do Chess.com e exiba os streamers em cards separados.

Cada card mostrará as informações principais do streamer e terá um link para acessar seu canal na Twitch.

6. Requisitos funcionais
RF01: Buscar streamers
Ao carregar a aplicação, o sistema deverá consultar a API do Chess.com.

RF02: Listar streamers
Os streamers retornados pela API deverão ser apresentados em cards individuais.

RF03: Exibir o nome
Cada card deverá exibir o nome de usuário do streamer.

RF04: Exibir a foto
Cada card deverá exibir o avatar ou a foto do streamer, quando essa informação estiver disponível.

RF05: Exibir o status
O sistema deverá indicar se o streamer está ao vivo ou offline
RF06: Diferenciar os status por cores
Verde para streamers ao vivo.
Vermelho para streamers offline.
A cor deverá ser acompanhada por um texto para garantir melhor acessibilidade.

RF07: Exibir o link da Twitch
Cada streamer deverá possuir um link para o respectivo canal da Twitch, quando disponível.

RF08: Abrir o canal em nova aba
O link da Twitch deverá abrir o canal em uma nova aba do navegador.
RF09: Exibir carregamento
Enquanto a aplicação estiver buscando os dados, deverá exibir uma mensagem ou indicador de carregamento.

RF10: Tratar erros
Caso a API não esteja disponível, o sistema deverá exibir uma mensagem informando que não foi possível carregar os streamers.

RF11: Tratar lista vazia
Caso nenhum streamer seja retornado, a aplicação deverá informar que não foram encontrados streamers.

7. Requisitos técnicos
Utilizar React.
Criar o projeto com Vite.
Utilizar useState.
Utilizar useEffect.
Consumir a API com requisições HTTP.
Criar componentes reutilizáveis.
Utilizar CSS responsivo.
Separar visualmente os cards.
Garantir textos alternativos nas imagens.
Manter os links externos seguros.

8. Esboço da interface
┌─────────────────────────────────────────────────────┐
│                 CHESS STREAMERS                     │
│        Streamers de xadrez em destaque              │
├─────────────────────────────────────────────────────┤
│  [ Buscar streamer... ]  [ Todos | Ao vivo | Offline ]│
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌─────────────────┐  ┌─────────────────┐           │
│  │                 │  │                 │           │
│  │      FOTO       │  │      FOTO       │           │
│  │                 │  │                 │           │
│  │  nome_streamer   │  │  outro_streamer │           │
│  │  ● Ao vivo       │  │  ● Offline      │           │
│  │                 │  │                 │           │
│  │  Ver na Twitch  │  │  Ver na Twitch  │           │
│  └─────────────────┘  └─────────────────┘           │
│                                                     │
└─────────────────────────────────────────────────────┘

9. Esboço individual do card
┌────────────────────────────┐
│                            │
│           FOTO             │
│        DO STREAMER         │
│                            │
│       nome_usuario         │
│                            │
│       ● Ao vivo            │
│                            │
│    Acessar canal Twitch    │
│                            │
└────────────────────────────┘

10. Regras visuais do card
Os cards devem possuir espaçamento entre si.
Cada card deve ter uma área própria e bem delimitada.
A foto deve aparecer na parte superior.
O nome deve ter destaque.
O status deve aparecer próximo ao nome.
A bolinha verde representa “Ao vivo”.
A bolinha vermelha representa “Offline”.
O status também deverá apresentar texto.
O link da Twitch deve ficar em uma posição fácil de localizar.
O layout deve se adaptar a diferentes tamanhos de tela.

11. Fluxo principal do usuário
O usuário acessa a aplicação.
A aplicação inicia a consulta à API.
O sistema exibe o estado de carregamento.
Os streamers são apresentados em cards.
O usuário identifica os streamers ao vivo.
O usuário pode pesquisar ou filtrar a lista.
O usuário acessa o canal escolhido na Twitch.

12. Critérios de aceitação
A aplicação utiliza React e Vite.
A API do Chess.com é consultada ao carregar a página.
Os streamers aparecem em cards separados.
O nome do usuário é exibido.
A foto do streamer é exibida quando disponível.
O link da Twitch funciona quando disponível.
Streamers ao vivo possuem bolinha verde.
Streamers offline possuem bolinha vermelha.
O texto do status aparece junto à bolinha.
Existe uma mensagem de carregamento.
Existe uma mensagem de erro.
Existe uma mensagem para lista vazia.
O layout funciona em computadores e celulares.
Os cards são visualmente organizados e fáceis de comparar.