# React-TS-Styled Boilerplate

- This is a built using bootstrapped using CRA & Typescript.
- CSS-in-JS set up using Styled Components.
- Uses Yarn as the package manager.

## Getting Started

1. Clone the repository
2. Navigate to the folder and run the following

   ```shell
   yarn
   npx husky install
   ```

## Making new Commits

To make new commits, run the following

```shell
git add .
yarn cm
```

### Pre-commit Hook

- Lint-staged to format code using prettier (Check [.lintstagedrc](./.lintstagedrc))
- Commitizen for [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

### Folder Linting

- Folders Linting using [folderslint](https://github.com/denisraslov/folderslint).

Check [.folderslintrc](./.folderslintrc)

### ESLint Config

(Check [.eslintrc.json](/.eslintrc.json))

- ESLint (Recommended)
- React (Recommended)
- Typescript (Recommended)
- Import Plugin (Recommended)
- Import Plugin (Typescript)
- JSX A11y Plugin (Strict)
- React Hooks Plugin (Recommended)
- Prettier
- Styled Components
