import React, {useState} from 'react';
import { CounterMenu } from './CounterMenu';
import {Counter} from "./Сounter";
import s from './App.module.css'

function App() {
    let counterStart = Number(localStorage.getItem("counterStart"))

    const [counter, setCounter] = useState(counterStart)
    const [onSet, setOnSet] = useState(true)
    const [error,setError] = useState(false)


  return (
    <div className={s.App}>
      <CounterMenu
          onSet={onSet}
          setOnSet={setOnSet}
          counter={counter}
          setCounter={setCounter}
          error={error}
          setError={setError}
      />
      <Counter
          onSet={onSet}
          counter={counter}
          setCounter={setCounter}
          error={error}
      />
    </div>
  );
}

export default App;
