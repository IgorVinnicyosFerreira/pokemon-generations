import api from '@/services/api';
import ListItem from '@/components/list-item/index.vue';

export default {
  name: 'game-details',
  components: {
    ListItem
  },
  data(){
    return {
      game: null,
      error: null,
      activeTab: 0,
      tabItems: [
        'Pokémons' , 
        'Tipos de Pokémons' , 
        'Movimentos' , 
        'Linguagens' 
      ],
      showButtonScrollToTop: false
    }
  },
  async beforeRouteEnter (to, from, next) {
    let gameDetails = null;
    let error = null;

    try {
      const { data } =  await api.getGameDetailsByName(to.params.name);
      gameDetails = data;
    } catch (exception) {
      error = exception;
    } finally {
      next(vm => vm.setFetchData(gameDetails, error));
    }
  },
  mounted(){
    this.scrollToTop();
    document.title = this.$route.meta.title

    window.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy(){
    window.removeEventListener("scroll", this.scrollListener);
  },
  computed: {
    name(){
      return this.game ? this.game.name.replace('-', ' ') : '';
    },
    totalPokemons(){
      return this.game ? this.game.pokemon_species.length : 0;
    },
    pokemonsList(){
      return this.game? this.game.pokemon_species : [];
    },
    pokemonTypes(){
      return this.game? this.game.types : [];
    },
    moves(){
      return this.game? this.game.moves : [];
    },
    languages(){
      return this.game? this.game.names : [];
    }
  },
  methods: {
    setFetchData(game, error = null ){
      this.game = game;
      this.error = error;
    },
    scrollToTop(){
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    scrollListener(){
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  
      if (scrollTop > 100) {
       this.showButtonScrollToTop = true
      } else {
        this.showButtonScrollToTop = false;
      }
    }
  }
}