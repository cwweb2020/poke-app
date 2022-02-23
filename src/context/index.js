import { useContext, createContext, useState, useEffect } from "react";
import { getPokemon, getPokemons } from "../services";


const CharContext = createContext();
export const CharConsumer = () => useContext(CharContext);

const CharProvider = ({ children }) => {
  const [poke, setPoke] = useState([]);
  const [limit, setLimit] = useState(20);
  const [spinner, setSpinner] = useState(true);

  // bring data
  useEffect(() => {
    const getCharacters = async () => {
      try {
        const res = await getPokemons(
          `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`
        );
        console.log(res);
        let resultado = await getPokemon(res);
        setPoke(resultado);
        setSpinner(false);
      } catch (error) {
        console.log(error);
      }
    };
    getCharacters();
  }, [limit]);

  console.log(poke);

  //  activates load more option
  const LoadMore = () => {
    setSpinner(true);
    setLimit(limit + 20);
  };
  ////////

  return (
    <CharContext.Provider value={{ poke, spinner, LoadMore }}>
      {children}
    </CharContext.Provider>
  );
};

export default CharProvider;
