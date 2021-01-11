import React, { useState } from 'react';

function Hooks(){
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [total, setTotal] = useState(number1 + number2)

    function addNumbers(){
        setTotal(number1 + number2)
    }

    function subtractNumbers(){
        setTotal(number1 - number2)
    }

    function multiplyNumbers(){
        setTotal(number1 * number2)
    }
    function divideNumbers(){
        setTotal(number1/number2)
    }

    return(
        <div>
            <div>
                <h1>Adding two numbers</h1>
                <div>
                    <input 
                    type="number"
                    value={number1}
                    onChange={e => setNumber1(+e.target.value)}
                    placeholder="0"
                    />
                    <input 
                    type="number"
                    value={number2}
                    onChange={e => setNumber2(+e.target.value)}
                    placeholder="0"
                    />
                </div>
                <button onClick={addNumbers}>Add Them!</button>
                <button onClick={subtractNumbers}>Subtract Them!</button>
                <button onClick={multiplyNumbers}>Multiply Them!</button>
                <button onClick={divideNumbers}>Divide Them!</button>
                <h2>{total}</h2>
            </div>
        </div>
    )

}

export default Hooks;