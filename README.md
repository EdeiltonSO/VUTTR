# VUTTR: Very Useful Tools to Remember

VUTTR é uma aplicação para gerenciar uma lista de ferramentas digitais com seus respectivos nomes, links, descrições e tags. Foi desenvolvida com base no desafio proposto pela BossaBox para desenvolvedores front-end.

Pré-requisitos:

- Gerenciadores de pacotes Node.js ou Yarn instalados na máquina

## Executando o projeto

1.  Faça o clone/download do projeto;
2.  Abra a pasta com um editor (o [VS Code](<[https://code.visualstudio.com/](https://code.visualstudio.com/)>), por exemplo);
3.  Dependendo do gerenciador de pacotes instalado, execute:

    3.1. `yarn install` ou `npm install` e aguarde o fim da instalação;

    3.2. `yarn start` ou `npm start`;

Uma nova guia será aberta no navegador e a aplicação será exibida no endereço `http://localhost:4000`. Caso necessário, essa configuração pode ser alterada no arquivo `package.json`.

## Conhecendo as páginas e componentes

A documentação dos componentes e páginas foi feita com o [Storybook](<[https://storybook.js.org/](https://storybook.js.org/)>) e pode ser acessada por meio do comando `yarn storybook`. Uma nova guia será aberta no navegador com o endereço `http://localhost:9009`.

## Utilizando a aplicação

Esse projeto é a parte front-end da [VUTTR API](<[https://gitlab.com/bossabox/challenge-fake-api/tree/master](https://gitlab.com/bossabox/challenge-fake-api/tree/master)>). Assim, para que todos os recursos possam ser utilizados, é importante contar com o back-end também em execução.

O front-end está configurado para localizar a API na porta 3000. Caso necessário, isso pode ser alterado no arquivo `src/services/api.js`.
