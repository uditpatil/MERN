import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';

function App() {
  const [state, setState] = useState([]);

  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then((res)=>{
      console.log(res.data.results)
      setState(res.data.results)
    })
    .catch((error)=>{
      console.log(error)
    })
},[])
  return (
    <div className="App">
      {state.map((pokemon, index)=>(
        <div>
          <h1>
            <li key={index}>{pokemon.name}</li>
          </h1>
        </div>
        ))
      }   

    </div>
  );
}

export default App;
