import axios from 'axios';

class PokeApi {
  
  constructor(){
    this.api = axios.create({
      baseURL: 'https://pokeapi.co/api'
    });
  }

  async getGameGenerations() {
    return await this.api.get('/v2/generation');
  }

}

export default new PokeApi();