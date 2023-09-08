# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

-   Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

```
hovedoppgaveReact
├─ .eslintrc.cjs
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ assets
│  │  ├─ pokeball2.svg
│  │  └─ react.svg
│  ├─ Components
│  │  ├─ Header
│  │  │  └─ Header.tsx
│  │  ├─ Main
│  │  │  ├─ Loading.tsx
│  │  │  ├─ Main.tsx
│  │  │  └─ Search.tsx
│  │  ├─ Pokedex
│  │  │  ├─ Pokedex.tsx
│  │  │  ├─ PokemonHeader.tsx
│  │  │  └─ Stats.tsx
│  │  └─ SearchResults
│  │     └─ SearchResults.ts
│  ├─ css
│  │  ├─ animations.css
│  │  ├─ index.css
│  │  ├─ layout.css
│  │  ├─ media-quries.css
│  │  ├─ navigation.css
│  │  ├─ typography.css
│  │  └─ variables.css
│  ├─ data
│  │  ├─ api.ts
│  │  └─ data.ts
│  ├─ index.css
│  ├─ main.tsx
│  ├─ navigation
│  │  └─ navigatePokemons.ts
│  ├─ Utils
│  │  ├─ animations.ts
│  │  ├─ HTMLElements.ts
│  │  ├─ searchUtil
│  │  └─ setup.ts
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```