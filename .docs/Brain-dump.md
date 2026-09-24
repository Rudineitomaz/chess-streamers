Brain-dump: Chess Streamers
Ideia principal
Criar uma aplicação web para listar streamers de xadrez encontrados na API pública do Chess.com. A aplicação permitirá visualizar informações básicas dos streamers e identificar rapidamente quem está transmitindo ao vivo.
Fonte dos dados
A aplicação utilizará a API:

https://api.chess.com/pub/streamers
Informações dos streamers
Cada streamer será apresentado em um card contendo:

Nome de usuário.
Foto ou avatar.
Link para o canal da Twitch.
Status da transmissão.
Indicador visual do status:
Bolinha verde: ao vivo.
Bolinha vermelha: offline.
Tecnologias
React.
Vite.
JavaScript ou TypeScript.
useState para controlar os dados da aplicação.
useEffect para realizar a consulta à API.
CSS responsivo.
fetch para buscar os dados.
Componentes planejados
Cabeçalho da aplicação.
Lista de streamers.
Card individual do streamer.
Indicador de status.
Mensagem de carregamento.
Mensagem de erro.
Mensagem para lista vazia.
Campo de pesquisa.
Filtro por status.
Estados da aplicação
A interface deverá considerar os seguintes estados:

Carregando os dados.
Dados carregados com sucesso.
Erro na consulta da API.
Nenhum streamer encontrado.
Imagem do streamer indisponível.
Link da Twitch indisponível.
Ideias adicionais
Filtro para exibir apenas streamers ao vivo.
Ordenação com streamers ao vivo primeiro.
Busca por nome de usuário.
Botão para atualizar a lista manualmente.
Atualização automática dos dados.
Contador de streamers encontrados.
Layout responsivo para celular e computador.
Modo escuro.
Imagem padrão quando o avatar não estiver disponível.
Exibição da data da última atualização.