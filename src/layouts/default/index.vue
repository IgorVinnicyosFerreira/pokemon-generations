<template>
  <v-app>
    <v-app-bar app height="80">
      <router-link :to="{ name: 'home' }">
        <img
          src="@/assets/img/pokebola.png"
          alt="pokebola"
          width="40"
          height="40"
          class="mr-md-4"
        />
      </router-link>
      <v-toolbar-title
        v-if="$vuetify.breakpoint.mdAndUp"
        class="application-title"
      >
        Pokémon Generations
      </v-toolbar-title>

      <div class="page-title">
        {{ $route.meta.title }}
      </div>
    </v-app-bar>

    <v-main class="main-container">
      <router-view class="pt-5 pt-md-7" />
    </v-main>
  </v-app>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss" scoped></style>