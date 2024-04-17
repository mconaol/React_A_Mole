import React, { useState} from 'react'
import './App.css';
import MoleContainer from './moleContainer';


function App() {
  let [score, setScore] = useState(0)
  const[displayMole, setDisplayMole] = useState(false);

  const handleClick = () => {
    if(displayMole){
      setScore(score +1);
      setDisplayMole(false);
    }
  };

  return (
    <div className="App">
      <h1>React-a-Mole!</h1>
      <p>Score: {score}</p>
      <MoleContainer displayMole={displayMole} setDisplayMole={setDisplayMole} handleClick={handleClick}/>
      <MoleContainer displayMole={displayMole} setDisplayMole={setDisplayMole} handleClick={handleClick}/>
      <MoleContainer displayMole={displayMole} setDisplayMole={setDisplayMole} handleClick={handleClick}/>
      <MoleContainer displayMole={displayMole} setDisplayMole={setDisplayMole} handleClick={handleClick}/>
      <MoleContainer displayMole={displayMole} setDisplayMole={setDisplayMole} handleClick={handleClick}/>
      <MoleContainer displayMole={displayMole} setDisplayMole={setDisplayMole} handleClick={handleClick}/>
      <MoleContainer displayMole={displayMole} setDisplayMole={setDisplayMole} handleClick={handleClick}/>
      <MoleContainer displayMole={displayMole} setDisplayMole={setDisplayMole} handleClick={handleClick}/>
      <MoleContainer displayMole={displayMole} setDisplayMole={setDisplayMole} handleClick={handleClick}/>
    </div>
  );
}

export default App;
