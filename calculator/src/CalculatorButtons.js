import'./Calculator.css'
import { useState } from 'react';

export const CalculatorButtons({value, onclick}) => {
    return(
        <div>
            <button onclick={() =>onclick(value)}>{value}</button>
        </div>
    )

}


export default CalculatorButtons;