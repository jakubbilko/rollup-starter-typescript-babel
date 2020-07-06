# rollup-starter-typescript-babel

This repository is a stater for a library bundled with [Rollup](https://github.com/rollup/rollup).

## Why?

I wanted a Rollup starter that includes Typescript with Babel + Jest for testing. Also included is ESLint and Prettier.

## Setup

```
git clone --depth 1 --single-branch https://github.com/jakubbilko/rollup-starter-typescript-babel.git your-directory-name
cd your-directory-name
yarn install
```

## Developing

Use `yarn dev` to recompile your sources on file change.

## Building

`yarn build` builds your library into CommonJS, ES module and UMD at once.

## Testing

Use `yarn test` to run your tests.