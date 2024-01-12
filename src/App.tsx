import React, {useEffect, useState} from 'react';
import { CounterMenu } from './CounterMenu';
import {Counter} from "./Сounter";
import s from './App.module.css'
import {useDispatch} from "react-redux";
import {counterStartAC} from "./reduecrs/appReducer";

function App() {
    const dispatch = useDispatch()

    let counterStart = Number(localStorage.getItem("counterStart"))

    useEffect(()=>{
        dispatch(counterStartAC(counterStart))
    }, [])

  return (
    <div className={s.App}>
      <CounterMenu/>
      <Counter />
    </div>
  );
}

export default App;
