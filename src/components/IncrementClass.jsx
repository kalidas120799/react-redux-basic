import React, { Component } from 'react'
import { connect } from "react-redux"
import { incrementNo,decrementNo } from "../redux/increments/incrementActions"
 class IncrementClass extends Component {
    decrement=()=>{
        const {decrementNo}=this.props
        decrementNo(5)
    }
    render() {
        const {incrementno,incrementNo}=this.props        
        return (
            <div>
                <h4>Increment class Component</h4>
                <h1>the value is-{incrementno}</h1>
                <button onClick={incrementNo} >+(Increment)</button>
                <button onClick={this.decrement} >-(decrement)</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        incrementno: state.incrementno  //incrementno reducer initial state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        incrementNo: () => dispatch(incrementNo()),  //incrementNo() action
        decrementNo: (d) => dispatch(decrementNo(d))  //incrementNo() action
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IncrementClass)
