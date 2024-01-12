import React, {useEffect} from "react";
import s from './Counter.module.css'
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {AppState_T} from "./store/store";
import {counter_T, counterStartAC, initialStateApp_T} from "./reduecrs/counterReducer";

type CounterType = {
    // counter: number
    // setCounter: (value: number) => void
    // onSet:boolean
    // error:boolean
}

export const Counter = (props: CounterType) => {
    let minCounter = Number(localStorage.getItem("minValue"))
    let maxCounter = Number(localStorage.getItem("maxValue"))

    const counter = useSelector<AppState_T, counter_T>(state => state.counter)

    const dispatch = useDispatch()

    const callBackInt = () => {
        if (counter.counter < maxCounter) dispatch(counterStartAC(counter.counter + 1))
    }
    const callBackReset = () => dispatch(counterStartAC(minCounter))

    const counterMax = `${s.counterInt} ${counter.counter >= Number(maxCounter) ? s.textRed : ''}`

    return (
        <div className={s.counter}>
                <div className={`${counterMax} ${counter.onSet? '' : s.counterTextSet } ${counter.error && s.counterErrorSetValue}`}>
                    {counter.error
                        ? "Incorrect value!"
                        : counter.onSet ? counter.counter : "enter values and press 'set'"}
                </div>
                <div className={s.counterButton}>
                    <div>
                        <Button callBack={callBackInt}
                                onSet={!counter.onSet || counter.counter === maxCounter}
                        >Int </Button>
                    </div>
                    <div>
                        <Button callBack={callBackReset}
                                onSet={!counter.onSet || counter.counter === minCounter}
                        >Reset </Button>
                    </div>
                </div>
        </div>
    )
}