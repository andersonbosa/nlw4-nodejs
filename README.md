# NLW4 Nodejs

[![](https://img.shields.io/badge/license%20by-Copyleft-inactive)](https://www.gnu.org/licenses/copyleft.en.html) 
[![](https://img.shields.io/badge/course%20offered%20by-RocketSeat-purple)][rocketseat]
[![](https://img.shields.io/badge/npm%20client-YARN-blue)](https://yarnpkg.com/)
[![](https://img.shields.io/badge/contributions-WELCOME-brightgreen.svg?style=flat)](https://github.com/andersonbosa/nlw4-nodejs/issues)

### Objective

> A project create during the [Next Level Week 4][nlw4].
> The project witch send emails to users and calculate the [NPS](https://www.hotjar.com/net-promoter-score/)

### Main Dependencies

- Node.js >=14.x
- Typescript
- Typeorm
### Getting Start

```bash
# install deps.
yarn

# start the server🚀
yarn dev
```


### Diagrams/Helper

- file:/[Drawio](./database.drawio)
- file:/[Insomnia](./api.insomnia.json)

<!------------------------------------------------------

<details>
  <summary><strong> Classes roadmap </strong></summary>

- [x] **class 1: init project**
  - [x] `yarn init`
  - [x] `yarn add express`
  - [x] `yarn add -D typescript @types/express`
    - [x] `yarn tsc --init`
      - [x] tsconfig `strict` => false
  - [x] `yarn add -D ts-node-dev`
  - [x] create first routes

- [x] **class 2: setup database**
    - [x] `yarn add typeorm reflect-metadata sqlite3`
    - [x] setup TypeORM
    - [x] create User Migration
      - `yarn typeorm:cli migration:create -n CreateUsers`
    - [X] create User Controller
    - [x] create User Model 
      - [x] `yarn add uuid && yarn add -D @types/uuid`
      - [x] update `ormconfig.json` with **models**
    - [x] allow JSON in the API
    - [x] create User Route
    - [x] create Inmsonia environment & collection
    - [x] update `tsconfig.json` with **decorators**
    - [x] update `ormconfig.json` with **Entities**
    - [x] create drawio 

- [x] **class 3: init tests**
  - [x] refactor
  - [x] update `tsconfig.json` to `"strictPropertyInitialization": false` 
  - [x] create Survey
    - [x] migration
    - [x] controller
    - [x] model
    - [x] repository
  - [x] start automated tests
    - types of test
      - unitary tests (common in TDD)
      - integration tests (routes -> controller -> repository <> repository <- controller <- response)
      - E2E, end2end tests
    - [x] setuping our tests
      - `yarn add -D jest @types/jest`
        - `yarn --init`
        - `yarn add -D ts-jest`
        - `yarn add -D supertest @types/supertest`
        - create database to Tests
      - [x] create User tests
        - fix jest problem to import modules: `preset: "ts-jest"` in `jest.config.ts`
      - [x] create Survey tests

- [x] **class 4: send emails**
  - [x] create SurveysUsers **migration**, it's **repository**, **controller** and **model**
    - migration -> model -> repository -> controller
  - [x] create email service
    - ethereal
    - [x] `yarn add nodemailer; yarn add -D @types/nodemailer` 
    - [x] send email
    - `yarn add handlebars` to send templates
  - [x] create test

- [x] **class 5: finishing**
  - [x] validations
    - [x] `yarn add yup`
  - [x] create utils
    - [x] custom error
    - [x] setup errors on express middleware: `yarn add express-async-errors`

</details>
------------------------------------------------------>



<!-- links -->
[typeorm]: https://typeorm.io
[rocketseat]: https://rocketseat.com.br/
[nlw4]: https://www.youtube.com/results?search_query=NLW4
