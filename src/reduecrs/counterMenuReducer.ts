import React from "react";

const initialState = {
    max: 0,
    start: 0
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
type ActionCounterMenu_T = changeMax_T
type UpdateValue_T = {
    max?: number,
    start?: number
}
export type initialStateCounter_T = typeof initialState
type  changeMax_T = ReturnType<typeof updateValueAC>

//action
export const updateValueAC = (value:UpdateValue_T) => ({type: 'CHANGE-MAX', value} as const)
