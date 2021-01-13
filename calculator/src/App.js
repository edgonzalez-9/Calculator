import './App.css';
import React from 'react'
import Calculator from './Components/Calculator';
import Hooks from './Components/Hooks'
import Timer from './Components/Timer'


class App extends React.Component{

  render(){
    return(
      <div>
        <Calculator/>
        <Hooks/>
        <Timer/>
      </div>
    )
  }
}

export default App;
