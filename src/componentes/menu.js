import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/dataProvider';
import { CardPokemon } from './cardPokemon';
import { FilterBar } from './filterBar';
import { Loader } from './loader';

   

export const Menu = () => {

    const value = useContext(AppContext);
    const pokemons = value.pokemon  
    const allPokemons = value.allPokemons
    const [loading, setLoading] = useState(true)
    const filteredTypePokemon = value.filteredTypePokemon
    const loadMore = value.loadMore
    
    setTimeout(() => {
        setLoading(false)
    }, 1500);

    

 

  return (
    <>
    <FilterBar/>
    {
      loading ? <Loader/> : (
        <>
        <div className='pokemon-info'>

          {filteredTypePokemon.length ? (
            <>
            {filteredTypePokemon.map((pokemon) => (
              <CardPokemon key={pokemon.id} data={pokemon}></CardPokemon>
            ))}
            </>
          ) : (
            <>
           {pokemons.map((pokemon) => (
              <CardPokemon key={pokemon.id} data={pokemon}></CardPokemon>
            ))}
            </>
          )}
        </div>
        <div>
            {loading ? '' : 
             <div className='btn-more'>
             <button id='btn-more' onClick={loadMore}>Cargar Mas</button>
            </div>
            }
          </div>
        </>
      )
    }
    
        </>
  )
}
