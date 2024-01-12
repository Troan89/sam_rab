import React from "react";

const initialState = {
    maxValue: 0,
    minValue: 0
}

export const counterMenuReducer = (state: initialStateCounter_T = initialState, action: ActionCounterMenu_T): initialStateCounter_T => {
    switch (action.type) {
        case "CHANGE-MAX": {
            return {...state, ...action.value}
        }
        default:
            return state
    }
}

//type
type ActionCounterMenu_T =
    | ReturnType<typeof updateValueAC>
type UpdateValue_T = {
    maxValue?: number,
    minValue?: number
}
export type initialStateCounter_T = typeof initialState

//action
export const updateValueAC = (value: UpdateValue_T) => ({type: 'CHANGE-MAX', value} as const)
