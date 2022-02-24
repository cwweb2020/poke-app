import axios from "axios";

export const getPokemons = async (path) => {
  try {
    const res = await axios.get(path);
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getPokemon = async (arr) => {
  let pokemons = [];
  for (let i = 0; i < arr.length; i++) {
    let results = await axios.get(arr[i].url);
    pokemons.push(results.data);
  }
  return pokemons;
};

export const getSinglePokemon = async (id) => {
    try {
        const res = await axios.get(
          // `https://pokeapi.co/api/v2/ability/${id}/`
          `https://pokeapi.co/api/v2/pokemon/${id}/`
        );
        return res.data;
       
    } catch (error) {
        console.log(error);
    }
}
