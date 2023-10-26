
const Die = ({ die, holdDice}) => {
  return (
    <div className={`die ${die.isHeld ? 'bg-lightgreen' : ''}`}
      onClick={holdDice}>
      {die.value}
    </div>
  )
}

export default Die