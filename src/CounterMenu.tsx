import s from "./Counter.module.css";
import React, {ChangeEvent, useEffect, useState} from "react";
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {AppState_T} from "./store/store";
import {updateValueAC} from "./reduecrs/counterMenuReducer";
import {counter_T, counterStartAC, onSetAC, setErrorAC} from "./reduecrs/counterReducer";

type CounterType = {}

export const CounterMenu = (props: CounterType) => {
    const max = useSelector<AppState_T, number>(state => state.counterMenu.maxValue)
    const start = useSelector<AppState_T, number>(state => state.counterMenu.minValue)
    const counter = useSelector<AppState_T, counter_T>(state => state.counter)

    const dispatch = useDispatch()

    const callBackLocalStorage = () => {
        dispatch(counterStartAC(start))
        dispatch(onSetAC(true))
    }
    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        Number(e.currentTarget.value) <= start
            ? dispatch(setErrorAC(true))
            : dispatch(setErrorAC(false))
        dispatch(updateValueAC({maxValue: Number(e.currentTarget.value)}))
        dispatch(onSetAC(false))
    }
    const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
        Number(e.currentTarget.value) < 0 || Number(e.currentTarget.value) >= max
            ? dispatch(setErrorAC(true))
            : dispatch(setErrorAC(false))
        dispatch(updateValueAC({minValue: Number(e.currentTarget.value)}))
        dispatch(onSetAC(false))
    }

    useEffect(() => {
        let counterMax = localStorage.getItem("maxValue")
        if (counterMax) {
            let maxValue = JSON.parse(counterMax)
            dispatch(updateValueAC({maxValue}))
        }
        let counterStart = localStorage.getItem("minValue")
        if (counterStart) {
            let minValue = JSON.parse(counterStart)
            dispatch(updateValueAC({minValue}))
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
                            onSet={counter.onSet}
                    >Set </Button>
                </div>
            </div>
        </div>
    )
}