import'./Calculator.css'
import { useState } from 'react';

// CalculatorDisplay will be a component where we will display input from the user and the result.
// it takes two props: input and result

exp

export const CalculatorDisplay = ({input, result}) => {
    
    return(
        <div>
            <input className='display' type="text" value={input} readOnly/>
            <div>{result}</div>
        </div>
        
    );

}