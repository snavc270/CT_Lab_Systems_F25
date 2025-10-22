import { useState } from 'react'

import './App.css'
import Welcome from './Components/Welcome/Welcome.jsx'
import ProfileCard from './Components/ProfileCard/ProfileCard.jsx'

function App() {
  const name = "Courtney"; 
  const fact = "Ice cream is my favorite food"; 

  return (
    <>
      <Welcome name="Courtney" /> 
      <h2> Hello, {name} </h2>  
      <p> {fact} </p> 

      <div class="profile-container">
        <ProfileCard name="Courtney" hobby="She likes watching bad reality tv shows" emoji="👽"/> 
        <ProfileCard name="Ash" hobby="She likes drinking from the toilet" emoji="😻"/> 
        <ProfileCard name="Teddy" hobby="He likes leaving cracked eggs in the carton" emoji="🥴"/>
      </div>

    </>
  )
}

export default App
