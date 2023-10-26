import { useState } from 'react';
import Die from './Die';
import { nanoid } from 'nanoid';

function App() {

  const [dice, setDice] = useState(allNewDice())
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      const randomDie = Math.ceil((Math.random() * 6))
      newDice.push({ id: nanoid(), value: randomDie, isHeld: false });
    }
    return newDice;
  }

  function handleRoll() {
    setDice(prevDice => prevDice.map(die => {
      return die.isHeld ?
        die :
        {
          id: nanoid(),
          value: Math.ceil((Math.random() * 6)),
          isHeld: false
        }
    })
    )
  }

  function holdDice(id) {
    setDice(prevDice => {
      return prevDice.map(die => (die.id === id ? { ...die, isHeld: !die.isHeld } : die))
    })
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      die={die}
      holdDice={() => holdDice(die.id)}
    />
  ))


  return (
    <main className="main">
      <div className="main-container">
        <div id="dieContainer" className="grid grid-cols-5 gap-4">
          {diceElements}
        </div>
        <button className="button" onClick={handleRoll}>Roll</button>
      </div>
    </main>
  )
}

export default App
