import React, { Component } from 'react'

// //incerement
import IncrementFun from './components/IncrementFun'
import HooksIncrementFun from './components/HooksIncrementFun'
import IncrementClass from './components/IncrementClass'

export default class App extends Component {
  render() {
    return (      
        <div>
          <IncrementFun />
          <HooksIncrementFun />
          <IncrementClass/>

        </div>      
    )
  }
}
