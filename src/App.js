import React from "react";
import "./App.css";
import ButtonsAndScore from "./Components/ButtonsAndScore";



//The App Component is where all other Components must be rendered. Any components called here - become child components of the App component, can be passed props from the App component (above the return statement) to child components (listed below the return statement as line 10.)  If I were to add props to the ButtonsAndScore component, it would be similar to adding a class or id to an HTML element - within the opening tag. e.g.:
//  < ButtonsAndScore propName = {propValue"} />   If the prop value is part of array of objects than dot notation will be needed. e.g  name = {donation.name}




function App () {
    
  return (
      <main>
        < ButtonsAndScore  /> 
      </main>
   
)}

export default App;
