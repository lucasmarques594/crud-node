CRUD com Node, Express e Mongoose - Via POSTMAN

Este código é uma parte de um sistema web construído com o framework Express.js, que é usado para criar aplicativos web em Node.js. Ele lida com operações básicas de um CRUD (Create, Read, Update, Delete) para uma entidade de "pessoa" em um banco de dados.

Essas operações incluem:

Criação de Pessoa: Ao receber uma requisição POST para a rota '/', o código cria um novo registro de pessoa no banco de dados com as informações fornecidas, como nome, salário e status de aprovação.

Leitura de Pessoas: Quando alguém faz uma requisição GET para a rota '/', o código busca todas as pessoas no banco de dados e as retorna em formato JSON.

Leitura Individual de Pessoa: Se alguém solicita informações sobre uma pessoa específica, o código busca essa pessoa no banco de dados usando seu ID e a retorna, se encontrada.

Atualização de Pessoa: Se alguém quer atualizar as informações de uma pessoa, envia uma requisição PATCH para a rota '/:id', onde ":id" é o identificador único da pessoa. O código atualiza as informações da pessoa com os novos dados fornecidos.

Exclusão de Pessoa: Se alguém quer excluir uma pessoa, envia uma requisição DELETE para a rota '/:id'. O código exclui a pessoa com o ID fornecido do banco de dados.

Resumindo, esse código fornece uma API para manipular informações de pessoas em um sistema web, permitindo criar, ler, atualizar e excluir registros de pessoas no banco de dados.
