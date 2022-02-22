import { useContext, createContext, useState, useEffect } from "react"
import axios from "axios"


const CharContext = createContext()
export const CharConsumer = () => useContext(CharContext)

const CharProvider = ({children}) => {
  const [characters, setCharacters] = useState([])




  useEffect(() => {
    const getCharacters = async () => {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        const allCharacters = res.data.results
        setCharacters(allCharacters !== undefined ? allCharacters : []);
      //  localStorage.setItem("characters", JSON.stringify(allCharacters));
    } catch (error) {
      console.log(error);
    }
  }
      getCharacters()
   
    }, []);
    
    console.log(characters);











  return (
    <CharContext.Provider value={{characters}}>
        {children}
    </CharContext.Provider>
  )
}

export default CharProvider