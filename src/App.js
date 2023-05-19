import './App.css';
import { albums } from './data';
import { Header } from "./components/header.js"
import React, { useState, useEffect } from 'react';

function App() {

  const [score, setScore] = useState(0)
  const [topscore, setTopScore] = useState(0)
  const [clicked, setClicked] = useState([])
  const randomCards = albums;

  function shuffle() {
    for (let i = randomCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomCards[i], randomCards[j]] = [randomCards[j], randomCards[i]];
    }
  }
 
  shuffle()

  function updateArray(id){        
    if (clicked.includes(id)){
      setClicked([]);
      if (score > topscore){
        setTopScore(score)
      }
      setScore(0)      
      return;
    }
    const temp = [id];
    setClicked(clicked.concat(temp))
    setScore(score+1)
    
  }

  return (
    <div className="App">
      <Header score={score} topscore={topscore}/>
      <div className='gamediv'>
      {
        albums.map((item) => {
        return (<div className='carddiv' key={item.id} onClick={()=> {
          updateArray(item.id);
        }
        }>          
            <img alt='' src={process.env.PUBLIC_URL + item.img} ></img>
            <p className='text'>{process.env.PUBLIC_URL + item.text}</p>

            </div>  
        )})
      } 
      </div>   
      <footer>luiseseberre2023</footer>   
    </div>
  );
}

export default App;
