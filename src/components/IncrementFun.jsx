import React from 'react'
import { connect } from "react-redux"
import { incrementNo } from "../redux/increments/incrementActions"
function IncrementFun(props) {
    
    return (
        <div>
            <h4>Increment fun Component</h4>
            <p>The No IS-{props.incrementno}</p>
            <button onClick={props.incrementNo} >Increment</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        incrementno: state.incrementno  //incrementno reducer initial state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        incrementNo: () => dispatch(incrementNo())  //incrementFunNo() action
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IncrementFun)
