# Cornellius UI

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li>
    <a href="#contributing">Contributing</a>
    <ul>
        <li><a href="#branch-naming-convention">Branch naming convention</a></li>
        <li><a href="#local-testing">Local Testing</a></li>
      </ul>
      </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>




<!-- ABOUT THE PROJECT -->
## About The Project

[![mym][mym-logo]](https://mym.fans)

JSX in Vue, is something innovative, since the framework took its first steps, Vue does not stop impressing us with its improvements. For Vue2 using JSX was a big step, it helped with the commission of two worlds and created the gap for possible improvements. In Vue 3 it was decided to use JSX to decrease the complexity of the logic in some components, so that the use is not necessary extra configurations or third party libraries, everything is ready to use. 

The only problem with this is that there are not so many libraries that are adapted to the use of jsx in components that are responsive or mobile first. What a headache, we can use jsx but not quite complete in a project.

For those coming from react et who want to get into Vue 3 without losing their way of writing, JSX is great but it is limited only to the logic, if you want to build your components then you must create them from scratch.

This library is dedicated to the good implementation of components created for mobile-first (responsive) ready to use, easy to edit or customize, and in JSX.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

For this library, we have given ourselves the task of creating it with the help of the following tools


* [Vue 3](https://vuejs.org/)
* [Vite](https://vitejs.dev/)
* [Vitest](https://vitest.dev/)
* [Storybook](https://storybook.js.org/)
* [Sass](https://sass-lang.com/)
* [Typescript](https://www.typescriptlang.org/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started


### Installation

To install this library

* npm
  ```sh
  npm install cornellius@latest 
  ```
* yarn
  ```sh
  yarn add cornellius@latest 
  ```


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage


In a project with vue 3 and jsx, in the return of your function where you put the html.

   ```jsx
   import CorInput from 'cornellius'
   const componentX = ()=> {
       return (
           <>
           <CorInput
                placeholder={'Aa'}
                onSubmit={()=>{'do something'}}
                value={0}
           />
           </>
       )
   }
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add initial config
- [ ] Wave 1 first components
    - [ ] Basics Inputs
    - [ ] Layout systems
    - [ ] Basics Cards
- [ ] Wave of components 2 
    - [ ] Complex Inputs
    - [ ] Lazy load
    - [ ] Infinite Scroll
- [ ] Wave of components 3
    - [ ] Modals, popups & dialogs
    - [ ] Toaster & banner
- [ ] Wave of components 4
    - [ ] Navigation, Menu & tab-bar
    - [ ] Collapse
 - [ ] Wave of components 5
    - [ ] Empty states handlers

See the [open issues](https://github.com/MYM-Tech/frontend-library/issues/) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

### Branch naming convention

You branch should have a name that reflects it's purpose.

It should always start by the type of work you'll do (`feat`, `chore`, `build`, `fix`, `docs`, `refacto`), followed by a slash (`/`) and a very quick summary of the subject in [kebab case][1].

Example: `feat/add-user-company`.

<p align="right">(<a href="#top">back to top</a>)</p>


### Local Testing

For teste the component you need install [verdaccio](https://verdaccio.org/fr-fr/). Then lance Verdaccio in one terminal for local test. Then in the project you should use 

```sh
npm publish --registry http://localhost:4873  
```

create a file .npmrc with

```sh
registry=http://localhost:4873
```

then in your terminal use:

```sh
npm set registry http://localhost:4873
```

and in the project with vue 3 where you want use, use the follow command to install:

```sh
npm i cornellius@0.0.1 --registry http://localhost:4873 

```

***remember: to rollback your registry of npm and continue to install others packages you need re-set the normal reggisty with:***

```sh
npm set registry https://registry.npmjs.org/
```
and delete the ***.npmrc*** file or commented it

then use the component that you want tested. and enjoy it.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Render Functions & JSX](https://vuejs.org/guide/extras/render-function.html)
* [Vite JSX](https://vitejs.dev/guide/features.html#jsx)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[mym-logo]: public/mym.svg