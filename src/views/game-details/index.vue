<template>
  <v-container fluid class="pa-0">
    <v-row v-if="!error" class="pa-a ma-0">
      <v-col cols="12" class="pa-0">
        <v-card
          color="primary"
          class="tab-container justfy-center"
          elevation="0"
        >
          <div
            class="
              d-flex
              flex-column flex-md-row
              justfy-center
              align-center
              pa-10
            "
          >
            <div class="pokemon-logo-container">
              <img src="@/assets/img/pokemon.png" width="230px" />
            </div>
            <div class="info-container pt-6 pt-md-0">
              <h1>{{ name }}</h1>
              <div class="sub-info">{{ totalPokemons }} Pokémons</div>
              <div class="sub-info">
                {{
                  game ? `${game.main_region.name} é a região principal` : ""
                }}
              </div>
            </div>
          </div>

          <v-tabs
            v-model="activeTab"
            background-color="transparent"
            color="accent"
            grow
          >
            <v-tab v-for="(tab, index) in tabItems" :key="index">
              {{ tab }}
            </v-tab>
          </v-tabs>

          <v-tabs-items
            v-model="activeTab"
            class="tab-content-container pt-5 pb-10"
          >
            <!-- TAB POKEMONS -->
            <v-tab-item class="px-5 px-md-10">
              <ListItem
                v-for="(pokemon, index) in pokemonsList"
                :key="index"
                :title="pokemon.name"
                class="my-2"
              />
            </v-tab-item>
            <!-- TAB TYPES -->
            <v-tab-item class="px-5 px-md-10">
              <ListItem
                v-for="(type, index) in pokemonTypes"
                :key="index"
                :title="type.name"
                class="my-2"
              />
            </v-tab-item>
            <!-- TAB MOVES -->
            <v-tab-item class="px-5 px-md-10">
              <ListItem
                v-for="(move, index) in moves"
                :key="index"
                :title="move.name"
                class="my-2"
              />
            </v-tab-item>
            <!-- TAB LANGUAGES -->
            <v-tab-item class="px-5 px-md-10">
              <ListItem
                v-for="(language, index) in languages"
                :key="index"
                :title="language.language.name"
                :subtitle="language.name"
                class="my-2"
              />
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12" class="px-16">
        <v-alert
          v-if="error.response.status === 404"
          text
          prominent
          type="error"
          icon="mdi-alert"
        >
          Não foi possível encontrar esse jogo.
        </v-alert>
        <v-alert v-else text prominent type="error" icon="mdi-cloud-alert">
          Ops, ocorreu um erro ao carregar esse jogo, recarregue a página e
          tente novamente.
        </v-alert>
      </v-col>
    </v-row>
    <v-fab-transition>
      <v-btn
        v-if="showButtonScrollToTop"
        fab
        fixed
        dark
        large
        color="primary"
        bottom
        right
        @click="scrollToTop"
      >
        <v-icon dark> mdi-chevron-up </v-icon>
      </v-btn>
    </v-fab-transition>
  </v-container>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss" scoped></style>
