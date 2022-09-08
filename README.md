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

For those coming from React wanting to get into Vue 3 without losing their way of writing, JSX is great but it is limited only to the logic, if you want to build your components then you must create them from scratch.

This library is dedicated to the good implementation of mobile-first (responsive), ready to use, and easy to edit/customize JSX components.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This library uses the following tools

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

* npm
  ```sh
  npm install @mym-tech/cornellius-ui@latest 
  ```
* yarn
  ```sh
  yarn add @mym-tech/cornellius-ui@latest 
  ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

In a project with Vue 3 and JSX, import components you use and use them in your component return.

   ```jsx
   import CorInput from '@mym-tech/cornellius-ui';

   const componentX = () => {
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
    - [x] Basics Inputs
    - [x] Layout systems
    - [x] Basics Cards
    - [x] Modals
- [ ] Wave 2 
    - [ ] Complex Inputs
    - [x] Lazy load
    - [ ] Infinite Scroll
- [ ] Wave 3
    - [ ] Popups & dialogs
    - [ ] Toaster & banner
- [ ] Wave 4
    - [ ] Navigation, Menu & tab-bar
    - [ ] Collapse
 - [ ] Wave 5
    - [ ] Empty states handlers

See [open issues](https://github.com/MYM-Tech/frontend-library/issues/) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

### Branch naming convention

You branch should have a name that reflects its purpose.

It should always start by the type of work you'll do (`feat`, `chore`, `build`, `fix`, `docs`, `refacto`), followed by a slash (`/`) and a very quick summary of the subject in [kebab case][1].

Example: `feat/add-user-company`.

<p align="right">(<a href="#top">back to top</a>)</p>

### Local Testing

To locally test this package, you can simply use `npm link`.

There is two ways of doing that:

```sh
cd cornellius-ui/
npm link
cd my-vue-project/
npm link @mym-tech/cornellius-ui
```

or you can simply do

```sh
cd my-vue-project/
npm link ../path/to/cornellius-ui
```

Now you can start using cornellius-ui in your local Vue 3 project
 and when you modify your local cornellius-ui repository and run the build
 command, it will automatically update in your local Vue project.

### Publish

To publish a new version in the npm registry, you will need to increment the
package version in the `package.json` file and run the npm publish command.

```sh
npm publish --registry https://registry.npmjs.org  
```

Now you should be able to install the new version in your Vue 3 project
 by using the following command:

```sh
npm i @mym-tech/cornellius-ui@latest

```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

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
