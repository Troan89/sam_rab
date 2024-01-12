import React, {useEffect, useState} from 'react';
import { CounterMenu } from './CounterMenu';
import {Counter} from "./Сounter";
import s from './App.module.css'

function App() {

  return (
    <div className={s.App}>
      <CounterMenu/>
      <Counter />
    </div>
  );
}

export default App;
