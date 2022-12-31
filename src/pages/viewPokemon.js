import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Loader } from '../componentes/loader'
import { AppContext } from '../context/dataProvider'
import {Card, ProgressBar, Tabs } from 'react-bootstrap'
import { ChangeTabs } from '../componentes/changeTabs'


export const ViewPokemon = () => {
    
    const value = useContext(AppContext)

    const pokemons = value.pokemon
    const getPokemonById = value.getPokemonById
    const active = value.active
    const  setActive = value.setActive
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const [toggleState, setToggleState] = useState(1)
    const params = useParams()
    const id = params.id


    const fetchPokemon = async(id) => {
        const data = await getPokemonById(id)
        setItem(data)
        setLoading(false)
    }

    useEffect(() => {
        setActive(false)
        fetchPokemon(id)
    }, params, pokemons);

    console.log(item)




  return (
    
   <main className='container-pokemon'>
    {
        loading ? (
            <Loader/>
        ): 
        <>
         
        <div>
        <div className='card-pokemon'>
            <div className='card-image'>
            <h1 id='id-title'>{item.id > 10 && item.id < 100 ? "#0" + item.id : item.id < 10 ? "#00" + item.id : "#" + item.id }</h1>
            <img src={item.sprites.other["official-artwork"].front_default} alt={item.name} id="card-pokemon-img"></img>
            </div>

            
            <div className='card-pokemon-info'>

            <div className='card-information'>
          <span><strong>Height:</strong> <p>{item.height}cm</p></span>
          <span><strong>Weight:</strong> <p>{item.weight}kg</p></span>
          <span><strong>Abilities:</strong>
               <div id='abilities-center'>
                {
                    item.abilities.map((ability) => (
                        <span key={ability.ability.name}>
                          <p>
                           {ability.ability.name[0].toUpperCase() + ability.ability.name.substring(1)}
                           </p>
                        </span>
                    ))

                }
                </div>
               </span>
               </div>

            <h3 id='id-name'>{item.name[0].toUpperCase() + item.name.substring(1)}</h3>
            <div className='card-pokemon-types'>
                {
                    item.types.map((type) => (
                        <span key={type.type.name} className={type.type.name}>
                         {type.type.name.toUpperCase()}
                        </span>
                    ))
                }
            </div>
      </div>


        </div>
        </div>

        <div className='panel-items-active'>
      <div className='card-pokemon-stats'>
        
       { item.stats.map((stat, key) => (

           <div className='card-stats' key={key}>
               <span>{stat.stat.name[0].toUpperCase() + stat.stat.name.substring(1)}</span>
               <p>{stat.base_stat}</p>
               <div>
               <ProgressBar className='progress-bar' style={{height: "15px"}} now={stat.base_stat} max={260}/>
               </div>
               
           </div>
        ))    
       }
      </div>
      </div>

       {/* Navegacion tabs */}

       {/* <ChangeTabs item={item}/> */}

       </>
}
   </main>
  )
}
