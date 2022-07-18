<template>
  <div class="ct ct--shown ct__content editor-js-save">saved!</div>
</template>

<style scoped>
.editor-js-save {
  animation-name: fade-out;
  animation-duration: 2s;
  animation-iteration-count: 1;
}

@keyframes fade-out {
  0%,
  75% {
    opacity: 80%;
  }
  100% {
    opacity: 0%;
  }
}
</style>
