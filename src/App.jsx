import {useState, useEffect} from "react";
import Card from "./components/card";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [selected, setSelected] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [score, setScore] = useState(0);


  useEffect(()=> {fetchData()}, []);

  async function fetchData () {
    const data = await fetch("https://rickandmortyapi.com/api/character");
    const json =  await data.json();
    console.log(json.results);
    setCharacters(json.results.slice(0, 12));
  }

  function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  function handleSelect (id) {
    if (selected.includes(id)){
      setScore(0);
      setSelected([]);
    }
    else {
      const newScore = score+1;
      setScore(newScore);
      if (newScore > bestScore) {
        setBestScore(newScore);
      }
      setSelected([...selected, id]);
    }
    setCharacters(shuffle(characters));
  }

  return (
    <div>
      <h1>Memory Card Shuffle</h1>
      <div className="scoreboard">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
      <div className="container">
        {characters.map((char) => {
          return <Card key={char.id} charData = {char} onClick={()=> handleSelect(char.id)}/>
        })}
      </div>
    </div>
    
  )
};

export default App;