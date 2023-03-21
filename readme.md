## Profil Software Recruitment Task - Frontend

Author: Bartłomiej Panfil

## Start app

1. Clone repository from master branch
2. Open terminal and type

```bash
  npm install
```

and then

```bash
   npm run start
```

## Used technology

- VanillaJS
- TypeScript
- localStorage
- SASS (scss)
- parcel

## App structure

I divided app on 3 classes - App, Block and Frame. App is main class where we can create new Block (this is instance for every first block with first question) and inside Block we can create sub-question with condition - and this is Frame class

-> App </br>
---> Block </br>
-----> Frame </br>
-----> Frame </br>
---> Block </br>
-----> Frame </br>
