# api

### Classes roadmap

#### API

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


<!-- links -->
[typeorm]: https://typeorm.io