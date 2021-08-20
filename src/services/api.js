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

  async getGameDetailsByName(name){
    return await this.api.get(`/v2/generation/${name}`);
  }
}

export default new PokeApi();