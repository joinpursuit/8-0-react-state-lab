import React from "react";
import "./App.css";
import { useState } from 'react'

const INITIAL_SCORE = 0
const INITIAL_FACTOR = 1

// alert('mensaje') ==> muestra una alerta nativa del navegador
function App () {
  // Un estado se compone ==> valor actual, la funcion para manejar el cambio del valor

  const [score, setScore] = useState(INITIAL_SCORE) // Manejar el score
  const [factor, setFactor] = useState(INITIAL_FACTOR) // Manejar el incremental
  
  const increment = () => setScore(score + factor)

  const incrementFactor = () => {
    if (score >= 10) {
      setFactor(factor + 1)
      setScore(score - 10)
    }
    else {
      alert("You can't afford that!")
    }
  }

  const restartGame = () => {
    setScore(INITIAL_SCORE)
    setFactor(INITIAL_FACTOR)
  }

  // Reset function in victory's screen
  // 1-. Crear un boton dentro de la seccion de victoria (V)
  // 2-. Darle un evento onClick al boton (V)
  // 3-. Crear una funcion restartGame para setear los estados a su valor inicial (score=>0, factor=>1)
  // 4-. Llamar a la funcion en el evento de onClick (V)

  return (
    <main className="container">
      {
        score >= 100 ? 
          (
            <section>
              <h2>You Win!</h2>
              <button onClick={() => restartGame()}>Play again?</button>
              
            </section>
          )
          :
          (
            <section className="playing">
              <h2>Current Score: {score}</h2>
              
              <button onClick={() => increment()}>+{factor}</button>
              
              <button onClick={() => incrementFactor()}>Pay 10 points to change from +{factor} to +{factor+1}</button>
            </section>
          )
        }
    </main>
  );
}

export default App;
