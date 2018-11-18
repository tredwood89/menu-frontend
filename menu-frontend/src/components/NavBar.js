import React from 'react';
import { Header } from "semantic-ui-react";
import { NavLink } from 'react-router-dom'


const NavBar = () => {


  return(
    <div>
      <div>
        <NavLink activeStyle={{color:"red"}} to="/">| Home </NavLink>
        <NavLink activeStyle={{color:"red"}}to="/recommendations">| RecomendationStation |</NavLink>
        <NavLink activeStyle={{color:"red"}} to="/menu"> Full Menu |</NavLink>
        <NavLink activeStyle={{color:"red"}} to="/flashcards"> Flash Cards |</NavLink>
      </div>



  </div>
  )
}

export default NavBar
