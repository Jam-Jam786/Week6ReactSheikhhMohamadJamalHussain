import { useState } from 'react'
import './Calculator.css'


 export default function Calculator()
{

const [Numbers, setNumbers] = useState(["9", "8", "7", "6", "5", "4", "3", "2", "1", "0" ])
const [Operators, setOperators] = useState ([ "%","X","-","+" ])

// create a use state for the operators, just like you did with the numbers
// use a map function to render the operator buttons in the operator div

    return(
        < div className='calculatar-container'>

            <div className="calculator-top">
                 <div className='calculator-display'></div>
            </div>

            <div className='calculator-operators'>  {Operators.map((Operator) => {
                return(
                        <div className='operator-btn' style = {{width:"25%" , height:"100%", backgroundColor: "orange"}}>
                            {Operator}
                        </div>
                );
                })}
            </div>   
                
                
                {/* <div className = 'division-button' style={{width:"25%" , height:"100%"}}>%</div>
                <div className = 'times-button' style={{width:"25%" , height:"100%"}}>X</div>
                <div className = 'minus-button' style={{width:"25%" , height:"100%"}}>-</div>
                <div className='addition-button' style={{width:"25%" , height:"100%"}}>+</div> */}
            

            <div className='calculator-numbers'>  {Numbers.map((number) => {
                return(
                    <div className='calc-btn' style={{width: "31%", height: "23%", backgroundColor: "red"}} >
                        {number}
                    </div>
                );
                })}
            <div className='calc-btn' style={{width: "31%", height: "23%"}} >
                        clear
            </div>
            <div className='calc-btn' style={{width: "31%", height: "23%"}} >
                        =
            </div> 

            </div>




        </div>
     )   
}