import './guessGame.css';
import { useState } from 'react';



// important function (props)
function RandomNumberGame(props)
{

    const [guess, setGuess] = useState("")
    const [answer, setAnswer] = useState(props.numberAnswer)
    const [message, setMessage] = useState ("Guess a number between 1 and 5")
    const [attempts, setattempts] = useState (props.trys)
    const [gameOver, setGameOver] = useState(false)
    const [endmessage, setEndmessage] = useState("")


// Create a useState called answer, set it to 5
// Create a useState called message. This will sit above the input to display a message to the user 
// Create a function called makeGuess, update the message to reflect whether the guess was too high, too low or correct. Invoke it when the button is clicked.

    function MakeGuess(props){
        if(attempts > 1){
            if (guess < answer) {
                setMessage("guess was too low")
                setattempts(attempts - 1)
            } 
            else if (guess > answer) {
                setMessage("guess was too high")
                setattempts(attempts - 1)
            }
            else {
                setMessage("guess correct!!!")
                setattempts(attempts == 1)
            }
        }else{
            setGameOver(true)
            setMessage("game over")
            setEndmessage("the correct answer was")


        }
        }

    function Reset(){
        setattempts(props.trys)
        setGameOver(false)
        setMessage("Guess a number between 1 and 5")
    }


    return(
        <div style={{backgroundColor : props.colour}} className='guess-container'>

            <h1 className='question'>Guess a number!</h1>
            
            {/* {typeof guess} */}

            <h2 className='message' >{message}</h2>
            
            <h1>number of attempts {attempts}</h1>
            {gameOver == false&&
            <>
{/*important function*/}
                <input className='guess-input' placeholder='Place your guess here...' type="number" onChange={(event) => {setGuess(parseInt(event.target.value))}}/>
                <button className='guess-button' onClick={MakeGuess}>GUESS</button>
            </>
            }
{/* Import function  */}
            {gameOver == true&&
                <h4>{endmessage} {answer}</h4>
            }

            <button className='reset-button' onClick={Reset} >RESET</button>

        </div>        
    )
}

export default RandomNumberGame;