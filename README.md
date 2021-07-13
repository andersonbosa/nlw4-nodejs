# api

### Classes roadmap

#### API

- [x] class 1
  - [x] init project 
    - [x] `yarn init`
    - [x] `yarn add express`
    - [x] `yarn add -D typescript @types/express`
      - [x] `yarn tsc --init`
        - [x] tsconfig `strict` => false
    - [x] `yarn add -D ts-node-dev`
  - [x] create first routes

- [x] class 2
  - [x] setup dev. database
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


<!-- links -->
[typeorm]: https://typeorm.io