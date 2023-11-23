import { useState } from 'react'
import './Calculator.css'


 export default function Calculator()
{

const [Numbers, setNumbers] = useState(["9", "8", "7", "6", "5", "4", "3", "2", "1", "0" ])

    return(
        <div className='calculatar-container'>

            <div className="calculator-top">

                 <div className='calculator-display'>
                    
                 </div>

            </div>

            <div className='calculator-operators'>
            {/* division, times, minus and addition */}
                <div className = 'division-button' style={{width:"25%" , height:"100%"}}>%</div>
                <div className = 'times-button' style={{width:"25%" , height:"100%"}}>X</div>
                <div className = 'minus-button' style={{width:"25%" , height:"100%"}}>-</div>
                <div className='addition-button' style={{width:"25%" , height:"100%"}}>+</div>
            </div>

            <div className='calculator-numbers'>  {Numbers.map(a) => (
                return(
                    num
                )
            )}  </div>

        </div>
     )   
}