import { INCREMENT_NO,DECREMENT_NO } from "./incrementTypes"
const initialState = {
    incrementno: 1
}

const incrementReducer = (state = initialState, action) => {

    switch (action.type) {
        case INCREMENT_NO: return {
            ...state,
            incrementno: state.incrementno + 1
        }
        case DECREMENT_NO: return {
            ...state,
            incrementno: state.incrementno - action.payload
        }
        default: return state
    }

}
export default incrementReducer