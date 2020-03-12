import Pokedex from "pokedex-promise-v2";

const P = new Pokedex();

const getPokemonsList = async () => {
  var interval = {
    limit: 10,
    offset: 0
  };
  const data = await P.getPokemonsList(interval);
  console.log(data);
};

export default {
  getPokemonsList
};
