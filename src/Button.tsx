import s from "./Counter.module.css";
import React, {ReactNode, useState} from "react";

type ButtonType = {
    children: ReactNode
    callBack: () => void
    onSet?: boolean
}

export const Button = (props: ButtonType) => {
    const {callBack, onSet, children} = props

    return (
        <button
            className={s.button}
            onClick={callBack}
            disabled={onSet}
        >{children}
        </button>
    )
}