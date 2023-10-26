
const Die = ({ die, holdDice }) => {
  let dieFace = []; 
  

  for(let i = 0; i < die.value; i++) {
    dieFace.push(<p key={Date.now() + i} className='dot'></p>)
  }


  return (
    <div className={`die ${die.isHeld ? 'bg-lightgreen' : ''}`}
      onClick={holdDice}>
      {dieFace}
    </div>
  )
}

export default Die