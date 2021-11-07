# Node.JS API CRUD

Primeiro projeto que realizei utilizando Node.js e Express, onde foi desenvolvida uma API de CRUD (Create, Read, Update e Delete).

Foram criadas rotas e middlewares que irão ler e realizar alterações utilizando o módulo fs, tendo como base um arquivo JSON (`talker.json`) que simula um cadastro de palestrantes.

### Lista de Requisitos

## 1 - Crie o endpoint GET `/talker`

- O endpoint deve retornar um array com todas as pessoas palestrantes cadastradas.
- Caso não exista nenhuma pessoa palestrante cadastrada o endpoint deve retornar um array vazio e o `status 200`.

## 2 - Crie o endpoint GET `/talker/:id`

- O endpoint deve retornar uma pessoa palestrante com base no id da rota. Devendo retornar o `status 200` ao fazer uma requisição `/talker/1`.
- Caso não seja encontrada uma pessoa palestrante com base no id da rota, o endpoint deve retornar o `status 404`.

## 3 - Crie o endpoint POST `/login`

- O endpoint deve ser capaz de retornar um token aleatório de 16 caracteres que deverá ser utilizado nas demais requisições.
- O endpoint deverá retornar um código de `status 200` com o token gerado.
- 
- O campo `email` deverá ser um email válido. Ele é obrigatório.
- Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`.
- Caso o email passado não seja um email válido retorne um código de `status 400`.

- O campo `password` deverá ter pelo menos 6 caracteres.
- Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`.
- Caso a senha não tenha pelo menos 6 caracteres retorne um código de `status 400`.

## 4 - Crie o endpoint POST `/talker`
- O endpoint deve ser capaz de adicionar uma nova pessoa palestrante ao seu arquivo;
- - A requisição deve ter o token de autenticação nos headers, no campo `authorization`.
- Caso o token não seja encontrado retorne um código de `status 401`.
- O campo `name` deverá ter no mínimo 3 caracteres. Ele é obrigatório.
- O campo `age` deverá ser um inteiro e apenas pessoas maiores de idade (pelo menos `18 anos`) podem ser cadastrados. Ele é obrigatório.
- O campo `talk` deverá ser um objeto com as seguintes chaves:
  - A chave `watchedAt` deve ser uma data no formato `dd/mm/aaaa`.
  - A chave `rate` deve ser um inteiro de 1 à 5.
- O campo `talk` é obrigatório e nenhuma das chaves citadas anteriormente podem ser vazias.
- Caso esteja tudo certo, retorne o `status 201`  e a pessoa cadastrada.

## 5 - Crie o endpoint PUT `/talker/:id`
- O endpoint deve ser capaz de editar uma pessoa palestrante com base no id da rota, sem alterar o id registrado.
- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.
- O campo `name` deverá ter no mínimo 3 caracteres. Ele é obrigatório.
- O campo `age` deverá ser um inteiro e apenas pessoas maiores de idade (pelo menos `18 anos`) podem ser cadastrados. Ele é obrigatório.
- O campo `talk` deverá ser um objeto com as mesmas chaves e restrições do requisito 4.
- Caso esteja tudo certo, retorne o `status 200` e a pessoa editada.

## 6 - Crie o endpoint DELETE `/talker/:id`
- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.
- Caso o token não seja encontrado ou seja inválido, retorne um código de `status 401`.
O endpoint deve deletar uma pessoa palestrante com base no id da rota. Devendo retornar o `status 200`.

## 7 - Crie o endpoint GET `/talker/search?q=searchTerm`
- O endpoint deve retornar um array de palestrantes que contenham em seu nome o termo pesquisado no queryParam da URL. Devendo retornar o `status 200`.
- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.
- Caso `searchTerm` não seja informado ou esteja vazio, o endpoint deverá retornar um array com todos as pessoas palestrantes cadastradas, assim como no endpoint GET `/talker`, com um `status 200`.
- Caso nenhuma pessoa palestrante satisfaça a busca, o endpoint deve retornar o `status 200` e um array vazio.
