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

const getPokemonDetail = id => {
  return new Promise(resolve => {
    P.getPokemonByName(id, function(result, error) {
      if (!error) {
        resolve({
          result,
          status: true
        });
      } else {
        resolve({
          error,
          status: false
        });
      }
    });
  });
};

export default {
  getPokemonDetail,
  getPokemonsList
};
