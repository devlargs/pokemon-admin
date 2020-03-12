import Pokedex from "pokedex-promise-v2";

const P = new Pokedex();

const getPokemonsList = async (limit, offset) => {
  const interval = {
    limit,
    offset
  };
  try {
    const data = await P.getPokemonsList(interval);
    return {
      status: true,
      data
    };
  } catch (ex) {
    return {
      status: false,
      error: ex,
      data: []
    };
  }
};

export default {
  getPokemonsList
};
