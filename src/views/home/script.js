import api from '@/services/api';
import GameCard from '@/components/game-card/index.vue'

export default {
  name: "Home",
  components: {
    GameCard
  },
  data(){
    return {
      listGames: [],
      error: null
    }
  },
  async beforeRouteEnter (to, from, next) {
    let listGames = [];
    let error = null;

    try {
      const { data } =  await api.getGameGenerations();
      listGames = data.results;
    } catch (exception) {
      error = exception;
    } finally {
      next(vm => vm.setFetchData(listGames, error));
    }
  },
  mounted(){
    document.title = this.$route.meta.title;
  },
  methods: {
    setFetchData(listGames, error = null ){
      this.listGames = listGames;
      this.error = error;
    }
  }
};