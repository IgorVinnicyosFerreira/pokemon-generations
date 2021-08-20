<template>
  <v-container>
    <v-row v-if="!error">
      <v-col
        v-for="(game, index) in listGames"
        :key="index"
        xl="3"
        lg="4"
        sm="6"
        cols="12"
        class="px-md-4"
      >
        <GameCard
          :name="game.name"
          @click="
            $router.push({ name: 'game-details', params: { name: game.name } })
          "
        />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <v-alert text prominent type="error" icon="mdi-cloud-alert">
          Ops, ocorreu um erro ao carregar os jogos, recarregue a página e tente
          novamente.
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./script.js"></script>
