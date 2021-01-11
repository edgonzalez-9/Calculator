import './App.css';
import React from 'react'
import Calculator from './Components/Calculator';
import Hooks from './Components/Hooks'


class App extends React.Component{

  render(){
    return(
      <div>
        <Calculator/>
        <Hooks/>
      </div>
    )
  }
}

export default App;
