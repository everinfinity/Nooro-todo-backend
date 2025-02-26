# TODO LIST TAKE HOME TASK REST API

## Getting started

### 1. install dependencies & create database

Install `yarn` dependencies:

```
yarn install
```

create `MySQL` via Docker:

```
docker-compose up -d

mysql://username:password@host:port will be refered in Prisma connection config.
```

### 2. Connect the database

Run the following command to connect your MySQL database. This also creates the `Task` tables that are defined in [`prisma/schema.prisma`](./prisma/schema.prisma):

```
npx prisma migrate dev --name init
```

### 3. Start the REST API server

```
yarn dev
```
