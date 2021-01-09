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

        if(this.state.operator === 'plus'){
            x = (this.state.numberOne + this.state.numberTwo)
        }
        else if(this.state.operator === 'minus'){
            x = (this.state.numberOne - this.state.numberTwo)
        }
        else if(this.state.operator === 'multiplied by'){
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
                    <button onClick={() => this.setNumber(1)}> 1 </button>
                    <button onClick={() => this.setNumber(2)}> 2 </button>
                    <button onClick={() => this.setNumber(3)}> 3 </button>
                    <button onClick={() => this.setNumber(4)}> 4 </button>
                    <button onClick={() => this.setNumber(5)}> 5 </button>
                    <button onClick={() => this.setNumber(6)}> 6 </button>
                    <button onClick={() => this.setNumber(7)}> 7 </button>
                    <button onClick={() => this.setNumber(8)}> 8 </button>
                    <button onClick={() => this.setNumber(9)}> 9 </button>
                    <button onClick={() => this.setNumber(0)}> 0 </button>
                </div>

                <div className='operators'>
                <button onClick={() => this.setOperator('plus')}> + </button>
                <button onClick={() => this.setOperator('minus')}> - </button>
                <button onClick={() => this.setOperator('multiplied by')}> / </button>
                <button onClick={() => this.setOperator('divided by')}> * </button>
                <button onClick={() => this.getResult}> = </button>
                </div>
            </div>
        )
    }
}

export default Calculator;