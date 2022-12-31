import React, { useContext } from 'react'
import { useLocation } from 'react-router'
import { CardPokemon } from '../componentes/cardPokemon'
import { AppContext } from '../context/dataProvider'

export const SearchPokemon = () => {
  const location = useLocation()
  console.log(location) 
  /*El location nos va a devolver el estado de la ruta, es decir. Si buscamos un "pi"
   el estado de la ruta sera pi
  */
  

  const value = useContext(AppContext)
  const allPokemons = value.allPokemons 

  /*De tal forma que podemos filtrar todos los pokemon existentes y dejar los que coincidan con el estado, que es
     lo que ponemos en el input
    */                

  
    
  const filterPokemon = allPokemons.filter(pokemon => pokemon.name.toLowerCase().includes(location.state.toLowerCase()))
  console.log(filterPokemon)

  return (
    <>
 <p className='p-search'>
				Se encontraron <span><strong>{filterPokemon.length}</strong></span>{' '}
				resultados:
			</p>
    <div className='pokemon-info'>
      {filterPokemon.map(data => (
        <CardPokemon data={data} key={data.name}></CardPokemon>
      ))}
    </div>
    </>
  )
}
