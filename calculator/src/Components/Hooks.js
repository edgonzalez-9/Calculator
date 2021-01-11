import React, { useState } from 'react';

function Hooks(){
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [total, setTotal] = useState(number1 + number2)

    return(
        <div>
            <div>
                <h1>Adding two numbers</h1>
                <div>
                    <input type="number" />
                </div>
            </div>
        </div>
    )

}

export default Hooks;