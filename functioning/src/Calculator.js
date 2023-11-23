import './Calculator.css'


 export default function Calculator()
{
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

            <div className='calculator-numbers'>

            </div>

        </div>
     )   
}