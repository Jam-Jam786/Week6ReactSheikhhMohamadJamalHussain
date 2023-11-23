import { useState } from 'react'
import './Calculator.css'


 export default function Calculator()
{

const [Numbers, setNumbers] = useState(["9", "8", "7", "6", "5", "4", "3", "2", "1", "0" ])

// create a use state for the operators, just like you did with the numbers
// use a map function to render the operator buttons in the operator div
const [Operators, setOperators] = useState ([ "%","*","-","+" ])
const [Output, setOutput] = useState("")



    return(
        < div className='calculatar-container'>

            <div className="calculator-top">
                 <div className='calculator-display'>
                    {Output}
                 </div>
            </div>

            <div className='calculator-operators'>  {Operators.map((Operator) => {
                return(
                        <div className='operator-btn' style = {{width:"25%" , height:"100%", backgroundColor: "orange"}} onClick={() => {setOutput(Output + Operator)}}>
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
                    // add an onclick parameter that will add the buttons number to the end of the output
                        <div className='calc-btn' style={{width: "31%", height: "23%", backgroundColor: "red"}} onClick={() => {setOutput(Output + number)}}>
                            {number}
                        </div>
                );
                })}
            <div className='calc-btn' style={{width: "31%", height: "23%"}} onClick={() => setOutput("")}>
                        clear
            </div>
            
            {/* evaulated this string as a function and it is not recommended to use this in professional settings */}
            <div className='calc-btn' style={{width: "31%", height: "23%"}} onClick={() => {setOutput(Function("return " + Output))}}>
                        =
            </div> 

            </div>




        </div>
     )   
}