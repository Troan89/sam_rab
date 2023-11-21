import s from "./Counter.module.css";
import React, {ChangeEvent, useEffect, useState} from "react";
import { Button } from "./Button";

type CounterType = {
    counter: number
    setCounter: (value: number) => void
    onSet: boolean
    setOnSet: (onSet: boolean) => void
    error: boolean
    setError: (error: boolean) => void
}

export const CounterMenu = (props: CounterType) => {
    const [max, setMax] = useState<number>(0)
    const [start, setStart] = useState<number>(0)

    const callBackLocalStorage = () => {
        localStorage.setItem("counterMax", JSON.stringify(max))
        localStorage.setItem("counterStart", JSON.stringify(start))
        props.setCounter(start)
        props.setOnSet(true)
    }
    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        Number(e.currentTarget.value) <= start
            ? props.setError(true)
            : props.setError(false)
        setMax(Number(e.currentTarget.value))
        props.setOnSet(false)
    }
    const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
        Number(e.currentTarget.value) < 0 || Number(e.currentTarget.value) >= max
            ? props.setError(true)
            : props.setError(false)
        setStart(Number(e.currentTarget.value))
        props.setOnSet(false)
    }
    useEffect(() => {
        let counterMax = localStorage.getItem("counterMax")
        if (counterMax) {
            let max = JSON.parse(counterMax)
            setMax(max)
        }
        let counterStart = localStorage.getItem("counterStart")
        if (counterStart) {
            let start = JSON.parse(counterStart)
            setStart(start)
        }
    }, [])

    return (
        <div className={s.counter}>
            <div className={s.menuCounter}>
                <div className={s.menuCounterSpan}>
                    <span>max value</span>
                    <input className={max <= start ? s.inputError : s.input} value={max} onChange={onChangeMax}
                           type="number"/>
                </div>
                <div className={s.menuCounterSpan}>
                    <span>start value</span>
                    <input className={start < 0 || max <= start ? s.inputError : s.input} value={start} onChange={onChangeStart}
                           type="number"/>
                </div>
            </div>
            <div className={s.counterButton}>
                <div>
                    <Button callBack={callBackLocalStorage}
                            onSet={props.onSet}
                    >Set </Button>
                </div>
            </div>
        </div>
    )
}