## Pre-requisites

* Have`npm` installed on your machine
* `npm` version must be > 5.2

## Get started

Grab your favourite terminal and run the following commands :

```js
npm install
npm start
```

A new tab should be open in your browser. `localhost:3000` is alive ! Have fun.

## How to what



### Develop
* `npm start` : start the project in *development* mode, launch `npm run dev`
* `npm run dev` : equivalent to `npm run dev:build && npm run dev:wds`
* `npx hygen component new --name <YourComponentName>` will generate a new component in `src/app/views/components/<YourComponentName>/index.js`



### Build
* `npm run dev:build` : build code, *development* mode
* `npm run prod:build` : build code, *production* mode : optimized, minified, inlined and gzipped

### Devserver
* `npm run dev:wds` : start devserver on port 3000, *development* mode
* `npm run prod:wds` : start devserver on port 3004, *production* mode

### Deploy
* `npm run deploy`: build prod + deploy to your surge domain name
* `npm run prod:deploy` : deploy to your surge domain name

### Test
* `npm run prod`: build prod + start devserver on port 3004

### Format code


## Under the hood
- Hyperapp ecosystem: hyperapp, router and transitions
- Style: CSS-in-JS powered by CXS, PostCSS
- Animations: AnimeJS
- Offline glory: Webpack
- Online glory: Surge
