import { createContext, useEffect, useState } from "react";
import { useForm } from "../hooks/submitForm";


export const AppContext = createContext()

export default function DataProvider({ children }) {

    const [pokemon, setPokemon] = useState([])
    const [allPokemons, setAllPokemons] = useState([])
    const [offset, setOffset] = useState(0)

    //Recursos
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(false)

    const {valueSearch, onInputChange, onResetForm} = useForm({
       valueSearch: ''
    })

    /* 
    Creamos una funcion asincrona con un limite como parametro que nos hara un llamado a la API.
    Pero como para obtener los datos individuales de cada pokemon debemos acceder a una url que viene en la API
    lo que hacemos es un map (tambien asincrono) donde retornaremos eso
    */
    const getPokemon = async (limit = 51) => {

		const res = await fetch(
			`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
		);
		const data = await res.json();

		const promises = data.results.map(async pokemon => {
			const res = await fetch(pokemon.url);
			const data = await res.json();
			return data;
		});
		const results = await Promise.all(promises);

		setPokemon([...pokemon, ...results]);
		setLoading(false);
	};


    //Esta funcion es para el buscador, donde necesitaremos todos los Pokemons existentes
    const getAllPokemons = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
        const data = await res.json()
  
        const promises = data.results.map(async pokemon => {
          const res = await fetch(pokemon.url);
          const data = await res.json();
          return data;
        });
        const results = await Promise.all(promises);

        setAllPokemons([...results])
        setLoading(false)
      } 

      const getPokemonById = async id => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        return data
      } 


 
  
    //Cada que se recarge la pagina haremos el llamado

    useEffect(() => {
      getPokemon()
  }, [offset]);


    useEffect(() => {
      getAllPokemons()
    }, [])

 
    const loadMore = () => {
      setOffset(offset + 51)
    }


    // Filtrado por tipos

    const [selectedType, setSelectedType] = useState({
    grass: false,
		normal: false,
		fighting: false,
		flying: false,
		poison: false,
		ground: false,
		rock: false,
		bug: false,
		ghost: false,
		steel: false,
		fire: false,
		water: false,
		electric: false,
		psychic: false,
		ice: false,
		dragon: false,
		dark: false,
		fairy: false,
		unknow: false,
    })


   const [filteredTypePokemon, setFilteredTypePokemon] = useState([])

   const onHandleCheckType = e => {
       setSelectedType({ /*Como estamos trabajando con un objeto esto funciona asi */
        ...selectedType,
        [e.target.name]: e.target.checked //Checked devuelve true o false
   })

       if(e.target.checked) {
        const resultsFilter = allPokemons.filter((pokemon) => 
          pokemon.types.map(type => type.type.name).includes(e.target.name)
        )    
        setFilteredTypePokemon([...filteredTypePokemon, ...resultsFilter])
        console.log(resultsFilter)

       } else {
        const resultsFilter = filteredTypePokemon.filter((pokemon) => (
          !pokemon.types.map(type => type.type.name).includes(e.target.name)
        ))    
        setFilteredTypePokemon([...resultsFilter]) 
       }
   }

    const value = {
      pokemon,
      setPokemon,
      allPokemons,
      setAllPokemons,
      getPokemonById,
      getAllPokemons,
      active,
      setActive,
      valueSearch,
      onInputChange,
      onResetForm,
      loadMore,
      onHandleCheckType,
      filteredTypePokemon
    }

   

    return (
        <AppContext.Provider value={value}>
             {children}
        </AppContext.Provider>
    )
}