import { ACTIONS } from "./App"

export default function DigitButton({dispatch, digit}){
    return <input onClick={() => dispatch({type: ACTIONS.ADD_DAYS,payload: {digit}})}>{digit}</input>
}