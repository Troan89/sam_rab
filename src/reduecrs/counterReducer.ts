const initialState = {
    counter: 0,
    onSet: true,
    error: false
}

export const counterReducer = (state: initialStateApp_T = initialState, action: ActionApp_T): initialStateApp_T => {
    switch (action.type) {
        case "COUNTER-START": {
            return {...state, counter: action.value}
        }
        case "ON-SET": {
            return {...state, onSet: action.value}
        }
        case "SET-ERROR": {
            return {...state, error: action.value}
        }
        default:
            return state
    }
}

//type
type ActionApp_T =
    | ReturnType<typeof counterStartAC>
    | ReturnType<typeof onSetAC>
    | ReturnType<typeof setErrorAC>
export type initialStateApp_T = typeof initialState
export type counter_T = {
    counter: number,
    onSet: boolean,
    error: boolean
}

//action
export const counterStartAC = (value: number) => ({type: 'COUNTER-START', value} as const)
export const onSetAC = (value: boolean) => ({type: 'ON-SET', value} as const)
export const setErrorAC = (value: boolean) => ({type: 'SET-ERROR', value} as const)