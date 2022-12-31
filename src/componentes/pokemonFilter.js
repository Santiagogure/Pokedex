import React, { useContext } from 'react'
import { AppContext } from '../context/dataProvider'
import { CardPokemon } from './cardPokemon'
import { Loader } from './loader'



export const FilteredPokemon = () => {

    const value = useContext(AppContext)
    const allPokemons = value.allPokemons
    const filteredTypePokemon = value.filteredTypePokemon
    const loading = value.loading

  return (
    <>
    {
      loading ? <Loader/> : (
        <div className='pokemon-info'>

          {filteredTypePokemon.length ? (
            <>
            {filteredTypePokemon.map((pokemon) => (
              <CardPokemon key={pokemon.id} data={pokemon}></CardPokemon>
            ))}
            </>
          ) : (
            <>
           {allPokemons.map((pokemon) => (
              <CardPokemon key={pokemon.id} data={pokemon}></CardPokemon>
            ))}
            </>
          )}
        </div>
      )
    }
    </>
  )
}
