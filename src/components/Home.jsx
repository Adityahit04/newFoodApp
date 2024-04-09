import React, { useState } from 'react'
import './Home.css'
import  {Header}  from './Header'
import Menu from './Menu'
import FoodDisplay from './FoodDisplay'

function Home() {

  const [category,setCategory]=useState('All')
  
  return (
    <>
    <div>
        <Header/>
        <Menu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        
    </div>
    </>
  )
}

export default Home