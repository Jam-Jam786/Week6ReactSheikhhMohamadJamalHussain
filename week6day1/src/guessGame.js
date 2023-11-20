import './guessGame.css';
import { useState } from 'react';

function RandomNumberGame()
{

    const [guess, setGuess] = useState("")
    const [answer, setAnswer] = useState("5")
    const [message, setMessage] = useState ("Guess a number between 1 and 5")

// Create a useState called answer, set it to 5
// Create a useState called message. This will sit above the input to display a message to the user 
// Create a function called makeGuess, update the message to reflect whether the guess was too high, too low or correct. Invoke it when the button is clicked.

    function MakeGuess(){
        if (guess < 5){
            setMessage("guess was too low")
        } else if (guess > 5){
            setMessage("guess was too high")
        }else{
            setMessage("guess correct!!!")
        }
    }


    return(
        <div className='guess-container'>
            <h1 className='question'>Guess a number!</h1>
            {/* {typeof guess} */}
            <h2 className='message' >{message}</h2>
            <input placeholder='Place your guess here...' type="number" className='guess-input' onChange={(event) => {setGuess(parseInt(event.target.value))}}/>
            <h1><button className='guess-button' onClick={MakeGuess} >GUESS</button></h1>
        </div>        
    )
}

export default RandomNumberGame;