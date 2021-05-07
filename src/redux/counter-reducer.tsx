
export type CounterType = number
export type CounterAT = IncreaseAT | ResetAT
export type IncreaseAT = {
    type: 'INCREASE-NUMBER';
};
export type ResetAT = {
    type: 'RESET-NUMBER';

}
const initialState:CounterType = 0
let counter = 0
export const counterReducer = (state:CounterType = initialState, action:CounterAT) =>{
    switch (action.type){
        case "INCREASE-NUMBER":
            if(state < 5){
               counter = state + 1
            }
            return counter
        case "RESET-NUMBER":
            return 0
        default:
            return state
    }
}
export const increaseAC = ():IncreaseAT => {
    return { type:"INCREASE-NUMBER" }
}
export const resetAC = ():ResetAT =>{
    return { type:"RESET-NUMBER" }
}