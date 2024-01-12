import React, {useEffect} from "react";
import s from './Counter.module.css'
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {AppState_T} from "./store/store";
import {counterStartAC, initialStateApp_T} from "./reduecrs/appReducer";

type CounterType = {
    // counter: number
    // setCounter: (value: number) => void
    // onSet:boolean
    // error:boolean
}

export const Counter = (props: CounterType) => {
    let minCounter = Number(localStorage.getItem("counterStart"))
    let maxCounter = Number(localStorage.getItem("counterMax"))

    const app = useSelector<AppState_T, initialStateApp_T>(state => state.app)

    const dispatch = useDispatch()

    const callBackInt = () => {
        if (app.counter < maxCounter) dispatch(counterStartAC(app.counter + 1))
    }
    const callBackReset = () => dispatch(counterStartAC(minCounter))

    const counterMax = `${s.counterInt} ${app.counter >= Number(maxCounter) ? s.textRed : ''}`

    return (
        <div className={s.counter}>
                <div className={`${counterMax} ${app.onSet? '' : s.counterTextSet } ${app.error && s.counterErrorSetValue}`}>
                    {app.error
                        ? "Incorrect value!"
                        : app.onSet ? app.counter : "enter values and press 'set'"}
                </div>
                <div className={s.counterButton}>
                    <div>
                        <Button callBack={callBackInt}
                                onSet={!app.onSet || app.counter === maxCounter}
                        >Int </Button>
                    </div>
                    <div>
                        <Button callBack={callBackReset}
                                onSet={!app.onSet || app.counter === minCounter}
                        >Reset </Button>
                    </div>
                </div>
        </div>
    )
}