# vue-tailwind-tnt-blog

## Introduzione

Questo progetto nasce con lo scopo di capire come utilizzare vue e in quale contesto.

Per velocizzare la parte di styling ho deciso di utilizzare tailwind css, un framework css con un approccio utility first, che ci da la possiblità di creare rapidamente progetti personalizzati grazie alle classi che ci mette a disposizione.


[Live demo](https://vue-tailwind-tnt-blog.vercel.app/)

# setup vue-tailwind 
Iniziare ad usare Tailwind con vue è davvero semplice, basta installare Tailwind via npm o yarn :

```sh
# Using npm
npm install tailwindcss

# Using Yarn
yarn add tailwindcss
```

Per la maggior parte dei progetti, vorrete aggiungere Tailwind come plugin PostCSS, questo significa aggiungere Tailwind come plugin nel file `postcss.config.js`, da creare se non è presente nella root


```js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
```


Successivamente dobbiamo creare un file css dove andremo ad iniettare le direttive `@tailwind` per gli stili di `base`, `componentes` , `utilities`,  In questo caso li abbiamo salvati in `src/assets/tailwind.css`:questo caso li abbiamo salvati in `src/assets/tailwind.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Ultimo step, importa il file CSS in fondo al componente  `App.vue`:

```html
<template>
  <!-- ... --->
</template>

<script>
  /* ... */
</script>

<style src="./assets/tailwind.css">
```

## Impostazione del progetto
```
npm install
```

### Compilazione con hot-reloads per lo sviluppo
```
npm run serve
```

### Compila e minifica per la produzione
```
npm run build
```

### Lint e fix dei file
```
npm run lint
```
