<h1 align="center">Catálogo de Personagens do Rick and Morty ✅</h1>

<p align="left">Este projeto foi desenvolvido em JavaScript, utilizando a biblioteca React e integrando com a API do Rick and Morty (https://rickandmortyapi.com/documentation/).

<br />

A aplicação consiste em uma tela de listagem de personagens com busca e uma tela de detalhes que exibe informações detalhadas sobre o personagem, além de permitir que o usuário adicione o personagem aos seus favoritos.

</p>

<br />

## 💻 Version 2.1

<br />

<div id="layout" align="center">
  <p align="stretch">
    <img align="center" height="200" alt="NextLevelWeek" title="#NextLevelWeek" src="./public/assets/Web_Img_T1.png">
  </p>
</div>

<br />

<div id="layout" align="center">
  <p align="stretch">
    <img align="center" height="200" alt="NextLevelWeek" title="#NextLevelWeek" src="./public/assets/Web_Img_T2.png">
  </p>
</div>

<br />

<div id="layout" align="center">
  <p align="stretch">
    <img align="center" height="200" alt="NextLevelWeek" title="#NextLevelWeek" src="./public/assets/Web_Img_T3.png">
  </p>
</div>

<br />

Teste você mesmo!!🔎 https://rick-and-morty-api-xi-ten.vercel.app/

<br />

## 🎡 Funcionalidades

- Listagem de personagens, com busca por nome.

- Detalhes do personagem, incluindo imagem, nome, espécie, gênero, status e localização atual.

- Opção para adicionar o personagem aos favoritos.

- Paginação da listagem de personagens.

- Layout responsivo, que se adapta a diferentes tamanhos de tela e a dispositivo móvel. 

<br />

## 🔧 Recursos utilizados

Esse projeto foi desenvolvido com as seguintes recursos e tecnologias:

- [Next 13](https://nextjs.org/)
- [React](https://react.dev/)
- [React Router](https://reactrouter.com/en/main)
- [React Dom](https://legacy.reactjs.org/docs/react-dom.html)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [JSON](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/JSON)
- [Node e NPM](https://nodejs.org/)
- [eslint](https://eslint.org/)
- [styled-components](https://styled-components.com/)

<br />

## 🚀 Como executar o projeto

<br />

1. Clone o repositório para sua máquina local.

```bash
$ git clone https://github.com/maarcusvinicius/RickAndMorty-API.git
```

2. Navegue para o diretório do projeto e instale as dependências.

```bash
$ cd RickAndMorty-API
$ npm install
```

3. Inicie o servidor de desenvolvimento.

```bash
$ npm start
```

4. Abra o navegador e acesse http://localhost:3000 para visualizar a aplicação.

<br />


## 💻 Estrutura do projeto

```bash
RickAndMorty-API/
  .next/
  node_modules/
  public/
    assets/
    icons/
  src/
    components/
      Buttons/
        DefaultButton.js
        FavoriteButton.js
        PrimaryButton.js
        RemoveFavoriteButton.js
      Cards/
        Card.js
        CardDetails.js
        CardList.js
      Loaders/
        CardLoader.js
      Container.js
      Input.js
      Navbar.js
      SearchField.js
    contexts/
      DataContext.js
      ModalContext.js
    pages/
      _app.js
      _document.js
      favorites.js
      index.js
      search.js
    styles/
      themes/
        dark.js
        index.js
      global.js
  .eslintrc.json
  README.md
  jsconfig.json
  next.config.js
  package-lock.json
  package.json
```

<br />

## 🏍️ Componentes

<br />

<h3>Buttons</h3>

- `DefaultButton`: Este componente renderiza um botão padrão com um estilo básico.

- `FavoriteButton`: Este componente renderiza um botão que adiciona um personagem da lista de favoritos. Ele utiliza o contexto de favoritos para gerenciar a lista.

- `PrimaryButton`: Este componente renderiza um botão com um estilo primário.

- `RemoveFavoriteButton`: Este componente renderiza um botão que remove um personagem da lista de favoritos. Ele utiliza o contexto de favoritos para gerenciar a lista.

<h3>Cards</h3>

- `Card`: Este componente renderiza um card com informações básicas de um personagem.

- `CardDetails`: Este componente renderiza os detalhes de um personagem em um modal.

<h3>Loaders</h3>

- `CardLoader.js`: Este componente exibe um loader circular enquanto os dados do personagem estão sendo carregados. Ele é utilizado na página de detalhes do personagem.

<h3>Outros</h3>

- `Container.js`: Este componente é responsável por centralizar e definir as margens do conteúdo do aplicativo. É utilizado em todas as páginas.

- `Input.js`: Este componente é responsável por renderizar um campo de entrada de texto com um ícone de busca. É utilizado na página de busca.

- `Navbar.js`: Este componente é responsável por renderizar a barra de navegação do aplicativo. Ela contém os links para as páginas de busca e favoritos.

- `SearchField.js`: Este componente é responsável por renderizar um campo de pesquisa que é utilizado na página de busca.

<h3>Contextos</h3>

- `DataContext.js`: Este contexto é responsável por gerenciar o estado global dos personagens que são exibidos no aplicativo. Ele armazena os dados dos personagens, as categoriza as funções para buscar personagens e adicionar/remover favoritos.

- `ModalContext.js`: Este contexto é responsável por gerenciar o estado global do modal que é exibido ao selecionar um personagem.

<h3>Páginas</h3>

- `_app.js:` Este arquivo é responsável por definir a estrutura básica do aplicativo. Ele inclui o Provider do contexto.

- `_document.js:` Este arquivo é responsável por definir a estrutura básica do documento HTML. Ele inclui as tags HTML, HEAD e BODY, bem como a tag root do React.

- `favorites.js`: Esta página exibe a lista de personagens favoritos que foram adicionados pelo usuário. Ela utiliza o componente CardList para renderizar os cards dos personagens favoritos.

- `index.js`: Esta página index redireciona para a rota da aplicação.

- `search.js`: Esta página exibe uma lista de personagens filtrados por pesquisa pelo nome. É possível navegar entre as páginas e adicionar ou remover personagens favoritos.


<br />
<br />
<h4 align="center"> 
	🚧  RickAndMorty-API ✅ FINALIZADO  🚧
</h4>
<br />
<br />
<br />
<br />

## Sobre a Green Acesso

<p>
A Green Acesso é uma empresa especializada em soluções de controle de acesso para condomínios. Seus produtos incluem o aparelho biométrico sem contato MorphoWave Compact, biometrias como IDFlex da ControlID e software financeiro e contábil para organização de boletos e almoxarifado. A empresa busca constantemente inovar e oferecer tecnologias de ponta para seus clientes.</p>

## Agradecimentos

<p>
Gostaria de agradecer à equipe da Green Acesso pela oportunidade de participar do processo seletivo e apresentar minhas habilidades em desenvolvimento de projetos em Javascript com React. Espero que este projeto demonstre meu comprometimento e capacidade de trabalhar em equipe, e que possa contribuir para o crescimento da empresa.</p>




<br />
<br />
<br />

Feito com ❤️ por Marcus Vinicius 👋🏽 Entre em contato!
















//feito readme marcus


### Olá, sou Marcus <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="30" >

Sou Desenvolvedor Web, um programador procurando fazer a diferença no mundo digital. [**Profile Github**](https://github.com/maarcusvinicius). 🚀

#### Minhas ferramentas atuais
📲 Front-end Mobile com React Native  
🌎 Front-end Web com Reactjs  
📡 Back-end com Nodejs  
🛠️ Typescript  
🧰 And more...  


#### 💬 Encontre-me em outro lugar

[![Linkedin Badge](https://img.shields.io/badge/-Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/marcus-vinicius-507718228/)](https://www.linkedin.com/in/marcus-vinicius-507718228/)
[![Gmail Badge](https://img.shields.io/badge/-marcus.editor77@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:marcus.editor77@gmail.com)](marcus.editor77@gmail.com)
