import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ConfettiExplosion from 'react-confetti-explosion';

import Die from './Die';


function App() {

  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  console.log(tenzies)
  useEffect(() => {
    const isAllHeld = dice.every(die => die.isHeld);
    const isAllSameValue = dice.every(die => die.value === dice[0].value)
    if (isAllHeld && isAllSameValue) {
      setTenzies(true)
    }
  }, [dice])

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      const randomDie = Math.ceil((Math.random() * 6))

      newDice.push({ id: nanoid(), value: randomDie, isHeld: false });
    }
    return newDice;
  }

  function handleRoll() {
    // For new game;
    if (tenzies) {
      setDice(allNewDice());
      setTenzies(false)
      return;
    }

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
        <div>
          <h1 className="title">Tenzies</h1>
          <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rols.</p>
        </div>
        <div id="dieContainer" className="grid grid-cols-5 gap-4">
          {diceElements}
        </div>
        <button className="button" onClick={handleRoll}>{tenzies ? 'New Game' : 'Roll'}</button>
      </div>
      {tenzies && <ConfettiExplosion particleCount={300} height={'250vh'} />}
    </main>
  )
}

export default App
