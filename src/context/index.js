import { useContext, createContext, useState, useEffect } from "react";
import { getPokemon, getPokemons } from "../services";
import axios from "axios";

const CharContext = createContext();
export const CharConsumer = () => useContext(CharContext);

const CharProvider = ({ children }) => {
  const [poke, setPoke] = useState([]);
  const [limit, setLimit] = useState(20);
  const [spinner, setSpinner] = useState(true);

  const [speciesPoke, setSpeciesPoke] = useState("");
  const [pokeDescription, setPokeDescritpion] = useState("");
  const [chainEvolution, setChainEvolution] = useState("");

  // bring data
  useEffect(() => {
    const getCharacters = async () => {
      try {
        const res = await getPokemons(
          `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`
        );
        //  console.log(res);
        let resultado = await getPokemon(res);
        setPoke(resultado);
        setSpinner(false);
      } catch (error) {
        console.log(error);
      }
    };
    getCharacters();
  }, [limit]);

  //  activates load more option
  const LoadMore = () => {
    setSpinner(true);
    setLimit(limit + 20);
  };
  //////// get species
  const getSpecies = async (url) => {
    try {
      const res = await axios.get(url);
      setSpeciesPoke(res.data.habitat.name);
      console.log(res.data);
      // evolution set
      const evolution = res.data.evolution_chain.url;
      const response = await axios.get(evolution);
      setChainEvolution(response.data.chain.species.name);

      setPokeDescritpion(res.data.flavor_text_entries[0].flavor_text);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CharContext.Provider
      value={{
        poke,
        spinner,
        speciesPoke,
        pokeDescription,
        chainEvolution,
        LoadMore,
        getSpecies,
      }}
    >
      {children}
    </CharContext.Provider>
  );
};

export default CharProvider;
