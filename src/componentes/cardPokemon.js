import React, { useState } from 'react'
import { Link } from 'react-router-dom'



export const CardPokemon = ({data}) => {
 

  const colors = ['fire', 'grass', 'electric', 'bug', 'poison', 'flying', 'normal', 'ground', 'rock', 
  'water','psychic', 'fighting', 'ghost', 'dragon', 'poison', 'fairy', 'rock']

 
	const pokeTypes = data.types.map(type => type.type.name); 
	const type = colors.find(type => pokeTypes.indexOf(type) === 0); 
  /* lo que hacemos es retornar la coincidencia de los valores que se encuentren en la posicion 0,
     de tal forma que solo tendremos un color para los pokemon de dobletipo*/


  return (
  
    <div className='card-container'>
     <div className='card-img'>
      <Link to={`dataPokemon/${data.id}`}>
     <img id='poke-img' src={data.sprites.other["official-artwork"].front_default} alt="Pokemon artwork"></img>
     </Link>
     </div>

     <div className='card-info'>
        <div className='card-info-1'>
           <span className='id'>No <strong> 
           {data.id < 10 ? data.id : data.id}
           </strong></span>
        
       
        {
          data.name.includes('-') ? 
          // <h3 id='card-name'>{data.name.replace(/-/gi,' ')+ data.name.substring(1)}</h3>
          <h3 id='card-name'>{data.name[0].toUpperCase() + data.name.substring(1).replace(/-/gi,' ')}</h3>
         : 
         <h3 id={'card-name'}>{data.name[0].toUpperCase() + data.name.substring(1)}</h3>
        }
   
     </div>

  
     <div className='card-btn-info'>
         {
           <Link to={`dataPokemon/${data.id}`}>
            <button id='btn-info' key={data} className={type}>Ver mas</button>
           </Link>
             
         }
                
     </div>
     </div>
     
    </div>
  )
}
