import axios from 'axios';

class PokeApi {
  
  construct(){
    this.api = axios.create({
      baseURL: 'https://pokeapi.co/api'
    });
  }

  async getGameGenerationsByName(name) {
    return await this.axios.get(`/v2/generation/${name}`);
  }

}

export default new PokeApi();