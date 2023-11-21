import React, {useEffect} from "react";
import s from './Counter.module.css'
import {Button} from "./Button";

type CounterType = {
    counter: number
    setCounter: (value: number) => void
    onSet:boolean
    error:boolean
}

export const Counter = (props: CounterType) => {
    let minCounter = Number(localStorage.getItem("counterStart"))
    let maxCounter = Number(localStorage.getItem("counterMax"))

    const callBackInt = () => {
        if (props.counter < maxCounter) {
            props.setCounter(props.counter + 1)
        }
    }
    const callBackReset = () => {
        props.setCounter(minCounter)
    }
    const counterMax = `${s.counterInt} ${props.counter >= Number(maxCounter) ? s.textRed : ''}`

    return (
        <div className={s.counter}>
                <div className={`${counterMax} ${props.onSet? '' : s.counterTextSet } ${props.error && s.counterErrorSetValue}`}>
                    {props.error
                        ? "Incorrect value!"
                        : props.onSet ? props.counter : "enter values and press 'set'"}
                </div>
                <div className={s.counterButton}>
                    <div>
                        <Button callBack={callBackInt}
                                onSet={!props.onSet || props.counter === maxCounter}
                        >Int </Button>
                    </div>
                    <div>
                        <Button callBack={callBackReset}
                                onSet={!props.onSet || props.counter === minCounter}
                        >Reset </Button>
                    </div>
                </div>
        </div>
    )
}