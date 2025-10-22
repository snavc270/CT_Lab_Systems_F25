import { useState } from 'react'
import './App.css'
// importing the Welcome component from our Welcome file
import Welcome from './Welcome/Welcome.jsx'
import ProfileCard from './ProfileCard/ProfileCard.jsx'

function App() {
  const fact = "Ice cream is my favorite food"; 

  return (
    <div>
      <div><Welcome name="Courtney"/></div>
      <p>This is my first component.</p>
      <p>{fact}</p> 

      <ProfileCard name="Ash" hobby="Drinking from toilet" emoji="😻" />
    </div>
  ); 
}

export default App;

