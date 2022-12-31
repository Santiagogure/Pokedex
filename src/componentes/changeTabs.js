import React, { useContext, useEffect, useState } from 'react'
import {Card, ProgressBar, Tabs } from 'react-bootstrap'


export const ChangeTabs = ({item}) => {
    
    const [toggleState, setToggleState] = useState(1)
 

  return (
    <div className='navegation-container'>

    <div class="tab-container">
     <ul class="tabs" id="tabs"> 
       <li onClick={() =>  setToggleState(1)} class={toggleState === 1 ? "tabs_item active" : 'tabs_item'}>Stats</li>
       <li onClick={() =>  setToggleState(2)} class={toggleState === 2 ? "tabs_item active" : 'tabs_item'}>Information</li>
       <li onClick={() =>  setToggleState(3)} class={toggleState === 3 ? "tabs_item active" : 'tabs_item'}>Evolutions</li>
     </ul>
    </div>



    <div className='panels'>

      <div className={toggleState === 1 ? 'panel-items-active' : 'panel-items'}>
      <h2 className='card-stats-title'>Base Stats</h2>
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

      <div id='information-panel' className={toggleState === 2 ? 'panel-items-active' : 'panel-items'}>
        <h2>Pokemon's Data</h2>
        <div className='card-information'>
          <span><strong>Name:</strong> <p id='name-center'>{item.name[0].toUpperCase() + item.name.substring(1)}</p></span>
          <span><strong>Pokedex:</strong><p>Number {item.id}#</p></span>
          <span><strong>Height:</strong> <p>{item.height}cm</p></span>
          <span><strong>Weight:</strong> <p>{item.weight}kg</p></span>
          <span><strong>Type:</strong>
          <div id='types-center'>
          {
                   item.types.map((type) => (
                        <span key={type.type.name}>
                          <p>
                       {type.type.name[0].toUpperCase() + type.type.name.substring(1)}
                       </p>
                       </span>
                   ))
               }
               </div>
               </span>
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
      </div>

      <div id='evolution-panel' className={toggleState === 3 ? 'panel-items-active' : 'panel-items'}>
       <p>In progress...</p>
      </div>

      </div>

      </div>

  )
}
