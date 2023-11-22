import './ColourButton.css'
import { useState } from 'react';




function ColourButton(props)
{




    return(
            <button className='colour-container' style={props.ColourList}>{props.color}</button>
    );
}

export default ColourButton;