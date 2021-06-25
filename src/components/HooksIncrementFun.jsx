import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { incrementNo } from "../redux/increments/incrementActions"
function HooksIncrementFun(props) {
    const incrementno = useSelector(state => state.incrementno)  // like a mapStateToProps
    const dispatch = useDispatch()  // like a mapDispatchToProps    
    console.log(incrementno);
    return (
        <div>
            <h4>Increment fun Component with hook</h4>
            <p>The No IS-{incrementno}</p>
            <button onClick={() => dispatch(incrementNo())} >Increment</button>
        </div>
    )
}

export default HooksIncrementFun