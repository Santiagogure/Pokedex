import React, { useContext, useState } from 'react'
import 'boxicons';
import { AppContext } from '../context/dataProvider';

export const FilterBar = () => {

    const value = useContext(AppContext)
    const active = value.active
    const  setActive = value.setActive
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
       setLoading(false)
    }, 1500);

    const handleActive = () => {
        setActive(!active)
    }

  return (
     loading ? '' :
    <div  className='filter-items'>
        <button id="filter-icon" onClick={() => handleActive()}>
        <box-icon  name='filter'></box-icon>
        </button>
        <h4 onClick={() => handleActive()}>Filter</h4>
    </div>
    
  )
}
