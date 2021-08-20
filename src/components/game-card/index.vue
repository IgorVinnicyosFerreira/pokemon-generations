<template>
  <v-card @click="onClick" class="card-game">
    <v-img src="@/assets/img/pokemon-yellow-bg.png" width="100%" />

    <v-card-title class="card-title py-8">
      <p>
        {{ getName }} <span>{{ getGeneration }}</span>
      </p>
    </v-card-title>
  </v-card>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss" scoped></style>