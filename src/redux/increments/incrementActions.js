import { DECREMENT_NO,INCREMENT_NO} from "./incrementTypes"

export const incrementNo = () => {
    return {
        type: INCREMENT_NO
    }
}

export const decrementNo = (data) => {
    return {
        type: DECREMENT_NO,
        payload:data
    }
}


