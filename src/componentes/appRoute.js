import React from 'react'
import { Header } from './header'
import { Routes, Route } from 'react-router'
import { Menu } from './menu'
import { ViewPokemon } from '../pages/viewPokemon'
import { FilterBar } from './filterBar'
import { ContainerFilter } from './containerFilter'
import { SearchPokemon } from '../pages/searchPokemon'
import { NotFound } from './notFound'

export const AppRoute = () => {
  return (
    <div>
       
       <ContainerFilter/>
       <div className='mayor-container'>
        <Header/>
        <Routes>
          <Route path='' element={<Menu/>}></Route>
          <Route path='dataPokemon/:id' element={<ViewPokemon />}></Route>
          <Route path='search/dataPokemon/:id' element={<ViewPokemon />}></Route>
          <Route path='search' element={<SearchPokemon />}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
        </div>
    </div>
  )
}
