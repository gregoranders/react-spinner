# @gregoranders/react-spinner

[<img src="./typescript.svg" />][typescript-url] [<img src="./react.svg" />][react-url]

## [React][react-url] [Spinner](./docs/index.md) intended to be used with [`Suspense`][suspense-url]

[![License][license-image]][license-url]
[![Issues][issues-image]][issues-url]
[![Code maintainability][code-maintainability-image]][code-maintainability-url]
[![Code issues][code-issues-image]][code-issues-url] [![Code Technical Debt][code-tech-debt-image]][code-tech-debt-url]

[![Codacy Badge][codacy-quality-image]][codacy-url]
[![Codacy Badge][codacy-coverage-image]][codacy-url]

[![Main Language][language-image]][code-metric-url] [![Languages][languages-image]][code-metric-url]
[![Code Size][code-size-image]][code-metric-url] [![Repo-Size][repo-size-image]][code-metric-url]

### Features

- [TypeScript][typescript-url]
- [Jest][jest-url] Unit Tests with Code Coverage
- GitHub CI Integration (feature, development, master, release)
- Code Quality via [Code Climate](./docs/codeclimate.md) and [Codacy](./docs/codacy.md)

| GitHub                                                           | Coveralls                                                                  |                                                                              |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [![ReleaseMaster Build][release-build-image]][release-url]       |                                                                            | [![Release][release-image]][release-url]                                     |
| [![Master Build][master-build-image]][master-url]                | [![Master Coverage][master-coveralls-image]][master-coveralls-url]         | [![Master Version][master-version-image]][master-version-url]                |
| [![Development Build][development-build-image]][development-url] | [![Test Coverage][development-coveralls-image]][development-coveralls-url] | [![Development Version][development-version-image]][development-version-url] |

#### Example

```tsx
import React, { Suspense } from 'react';
import Spinner from '@gregoranders/react-spinner';

export const App = () => {
  return <Suspense fallback={<Spinner />}>...</Suspense>;
};
```

#### Clone repository

```sh
git clone https://github.com/gregoranders/react-spinner
```

#### Install dependencies

```sh
npm install
```

#### Build

```sh
npm run build
```

#### Test using [Jest][jest-url]

```sh
npm test
```

#### Code Climate Checks [docker required](docs/index.md)

```sh
npm run codeclimate
```

#### Clear

```sh
npm run clear
```

[release-url]: https://github.com/gregoranders/react-spinner/releases
[master-url]: https://github.com/gregoranders/react-spinner/tree/master
[development-url]: https://github.com/gregoranders/react-spinner/tree/development
[code-metric-url]: https://github.com/gregoranders/react-spinner/search?l=TypeScript
[license-url]: https://github.com/gregoranders/react-spinner/blob/master/LICENSE
[license-image]: https://img.shields.io/github/license/gregoranders/react-spinner.svg
[master-version-url]: https://github.com/gregoranders/react-spinner/blob/master/package.json
[master-version-image]: https://img.shields.io/github/package-json/v/gregoranders/react-spinner/master
[development-version-url]: https://github.com/gregoranders/react-spinner/blob/development/package.json
[development-version-image]: https://img.shields.io/github/package-json/v/gregoranders/react-spinner/development
[issues-url]: https://github.com/gregoranders/react-spinner/issues
[issues-image]: https://img.shields.io/github/issues-raw/gregoranders/react-spinner.svg
[release-image]: https://img.shields.io/github/release/gregoranders/react-spinner
[release-build-image]: https://github.com/gregoranders/react-spinner/workflows/Release%20CI/badge.svg
[master-build-image]: https://github.com/gregoranders/react-spinner/workflows/Master%20CI/badge.svg
[development-build-image]: https://github.com/gregoranders/react-spinner/workflows/Development%20CI/badge.svg
[master-coveralls-url]: https://coveralls.io/github/gregoranders/react-spinner?branch=master
[master-coveralls-image]: https://img.shields.io/coveralls/github/gregoranders/react-spinner/master
[development-coveralls-image]: https://img.shields.io/coveralls/github/gregoranders/react-spinner/development
[development-coveralls-url]: https://coveralls.io/github/gregoranders/react-spinner?branch=development
[code-maintainability-url]: https://codeclimate.com/github/gregoranders/react-spinner/maintainability
[code-maintainability-image]: https://img.shields.io/codeclimate/maintainability/gregoranders/react-spinner
[code-issues-url]: https://codeclimate.com/github/gregoranders/react-spinner/maintainability
[code-issues-image]: https://img.shields.io/codeclimate/issues/gregoranders/react-spinner
[code-tech-debt-url]: https://codeclimate.com/github/gregoranders/react-spinner/maintainability
[code-tech-debt-image]: https://img.shields.io/codeclimate/tech-debt/gregoranders/react-spinner
[codacy-quality-image]: https://app.codacy.com/project/badge/Grade/94ba1b3b86ba4b0187f5c2ffe9085f31
[codacy-coverage-image]: https://app.codacy.com/project/badge/Coverage/94ba1b3b86ba4b0187f5c2ffe9085f31
[codacy-url]: https://www.codacy.com/manual/gregoranders/react-spinner
[language-image]: https://img.shields.io/github/languages/top/gregoranders/react-spinner
[languages-image]: https://img.shields.io/github/languages/count/gregoranders/react-spinner
[code-size-image]: https://img.shields.io/github/languages/code-size/gregoranders/react-spinner
[repo-size-image]: https://img.shields.io/github/repo-size/gregoranders/react-spinner
[typescript-url]: http://www.typescriptlang.org/
[jest-url]: https://jestjs.io/
[react-url]: https://reactjs.org/
[suspense-url]: https://reactjs.org/docs/concurrent-mode-suspense.html
