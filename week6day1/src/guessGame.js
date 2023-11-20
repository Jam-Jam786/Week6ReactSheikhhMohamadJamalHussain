import './guessGame.css';

function RandomNumberGame()
{
    return(
        <div className='guess-container'>
            <h1 className='question'>
            Guess a number!
            </h1>

            <p><input placeholder='place your guess here' type="text" className='guess-input'/></p>
           
            
            <h1><button className='guess-button'>GUESS</button></h1>
            
        </div>        
    )
}

export default RandomNumberGame;

