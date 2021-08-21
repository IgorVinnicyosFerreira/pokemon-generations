<template>
  <div class="container">
    <img src="@/assets/img/pokebola.png" :alt="title" width="50px" />

    <div class="title-container">
      <p>{{ title }}</p>
      <p v-show="subtitle">{{ subtitle }}</p>
    </div>
  </div>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss" scoped></style>