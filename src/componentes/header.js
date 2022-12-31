import React, { useContext } from 'react'
import pokedex from '../images/pokedex.png'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/dataProvider'
import { NotFound } from './notFound'




export const Header = () => {

    const navigate = useNavigate()
    const value = useContext(AppContext)

    const onInputChange = value.onInputChange
    const valueSearch = value.valueSearch
    const onResetForm = value.onResetForm
    const active = value.active
    const  setActive = value.setActive


    const onSearchSubmit = (e) => {
        if(!valueSearch) {
            return (
             navigate('*')
            )
        }
           e.preventDefault()
           console.log(valueSearch)  
           navigate('/search', {
            state: valueSearch
            }) 
         onResetForm()
         
    }

    const handleActive = () => {
        setActive(!active)
    }

  return (
    
    <div className='header-container'>
        
        <header class="container">
            <div className='header-filter'>
        <Link to="/" className='logo-img'>
            <img className={active ? 'logo-active' : 'logo' } src={pokedex} alt="Logo Pokedex" />
            </Link>
            
            <box-icon onClick={() => handleActive()} id="filter-low-res" name='filter'></box-icon>
            </div>
        <form onSubmit={onSearchSubmit}>
            <div className='inp-btn'>
            <div class="form-group">
               
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="icon-search"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
 
                <input className='input-search'
                    type="search"
                    name="valueSearch" /// ???
                    placeholder="Search..."
                    id=''
                    value={valueSearch}
                    onChange={onInputChange}
                />

            </div>
            <button class="btn-search">Search</button> 
            </div>
        </form>
    </header>
        </div>
  )
}
