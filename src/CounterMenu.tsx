import s from "./Counter.module.css";
import React, {ChangeEvent, useEffect, useState} from "react";
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {AppState_T} from "./store/store";
import {updateValueAC} from "./reduecrs/counterMenuReducer";
import {counterStartAC, initialStateApp_T, onSetAC, setErrorAC} from "./reduecrs/appReducer";

type CounterType = {}

export const CounterMenu = (props: CounterType) => {
    const max = useSelector<AppState_T, number>(state => state.counterMenu.max)
    const start = useSelector<AppState_T, number>(state => state.counterMenu.start)
    const app = useSelector<AppState_T, initialStateApp_T>(state => state.app)

    const dispatch = useDispatch()

    const callBackLocalStorage = () => {
        localStorage.setItem("counterMax", JSON.stringify(max))
        localStorage.setItem("counterStart", JSON.stringify(start))
        // props.setCounter(start)
        dispatch(counterStartAC(start))
        // props.setOnSet(true)
        dispatch(onSetAC(true))
    }
    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        Number(e.currentTarget.value) <= start
            // ? props.setError(true)
            // : props.setError(false)
            ? dispatch(setErrorAC(true))
            : dispatch(setErrorAC(false))
        // setMax(Number(e.currentTarget.value))
        dispatch(updateValueAC({max: Number(e.currentTarget.value)}))
        // props.setOnSet(false)
        dispatch(onSetAC(false))
    }
    const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
        Number(e.currentTarget.value) < 0 || Number(e.currentTarget.value) >= max
            // ? props.setError(true)
            // : props.setError(false)
            ? dispatch(setErrorAC(true))
            : dispatch(setErrorAC(false))
        // setStart(Number(e.currentTarget.value))
        dispatch(updateValueAC({start: Number(e.currentTarget.value)}))
        // props.setOnSet(false)
        dispatch(onSetAC(false))
    }

    useEffect(() => {
        let counterMax = localStorage.getItem("counterMax")
        if (counterMax) {
            let max = JSON.parse(counterMax)
            dispatch(updateValueAC({max}))
        }
        let counterStart = localStorage.getItem("counterStart")
        if (counterStart) {
            let start = JSON.parse(counterStart)
            dispatch(updateValueAC({start}))
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
                    <input className={start < 0 || max <= start ? s.inputError : s.input} value={start}
                           onChange={onChangeStart}
                           type="number"/>
                </div>
            </div>
            <div className={s.counterButton}>
                <div>
                    <Button callBack={callBackLocalStorage}
                            onSet={app.onSet}
                    >Set </Button>
                </div>
            </div>
        </div>
    )
}