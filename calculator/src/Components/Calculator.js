import React from 'react'


class Calculator extends React.Component {

    state = {
        numberOne: 0,
        numberTwo: 0,
        operator: null,
        result: 0
    }

    setNumber = (x) => {
        if(this.state.operator === null){
            this.setState({
                numberOne: x
            })
        }
        else{
            this.setState({
                numberTwo: x
            })
        }
    }

    setOperator = (x) => {
        this.setState({
            operator: x 
        })
    }

    getResult = () => {
        
        let x = 0

        if(this.state.operator === '+'){
            x = parseInt(this.state.numberOne) + parseInt(this.state.numberTwo)
        }
        else if(this.state.operator === '-'){
            x = (this.state.numberOne - this.state.numberTwo)
        }
        else if(this.state.operator === '*'){
            x = (this.state.numberOne * this.state.numberTwo)
        } else{
            x = (this.state.numberOne / this.state.numberTwo)
        }

        this.setState({
            result: x 
        })

    }

    render(){
        return(
            <div>
                <div>
                    {this.state.numberOne} {this.state.operator} {this.state.numberTwo} equals {this.state.result}
                </div>
                
                <div className='numberpad'>
                    <button name="1" onClick={e => this.setNumber(e.target.name)}> 1 </button>
                    <button name="2" onClick={e => this.setNumber(e.target.name)}> 2 </button>
                    <button name="3" onClick={e => this.setNumber(e.target.name)}> 3 </button>
                    <button name="4" onClick={e => this.setNumber(e.target.name)}> 4 </button>
                    <button name="5" onClick={e => this.setNumber(e.target.name)}> 5 </button>
                    <button name="6" onClick={e => this.setNumber(e.target.name)}> 6 </button>
                    <button name="7" onClick={e => this.setNumber(e.target.name)}> 7 </button>
                    <button name="8" onClick={e => this.setNumber(e.target.name)}> 8 </button>
                    <button name="9" onClick={e => this.setNumber(e.target.name)}> 9 </button>
                    <button name="0" onClick={e => this.setNumber(e.target.name)}> 0 </button>
                </div>

                <div className='operators'>
                <button name="+" onClick={e => this.setOperator(e.target.name)}> + </button>
                <button name="-" onClick={e => this.setOperator(e.target.name)}> - </button>
                <button name="/" onClick={e => this.setOperator(e.target.name)}> / </button>
                <button name="*" onClick={e => this.setOperator(e.target.name)}> * </button>
                <button name="=" onClick={e => this.getResult(e.target.name)}> = </button>
                </div>
            </div>
        )
    }
}

export default Calculator;