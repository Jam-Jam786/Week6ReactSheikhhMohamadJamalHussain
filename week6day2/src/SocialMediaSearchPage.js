import { isDisabled } from '@testing-library/user-event/dist/utils';
import './SocialMediaSearchPage.css';
import { useState } from 'react';


function UsersData(props){

const [UserName, setUserName] = useState(props.name)
const [UserAge, setUserAge] = useState(props.age)
const [Userprofession, setUserProfession] = useState(props.prof)
const [UserPhoto, setUserPhoto] = useState(props.url)
const [FriendButton, setFriendButton] = useState("Friend Request")
const [ButtoonClick, setButtonDisabled] = useState (false)




function ButtonMessageSent(){
    setFriendButton ("Request sent")
    setButtonDisabled(!ButtoonClick)
}

    return(

        <div className='searchPage-container' >

            <div className='profilePic'>
                <img width={"50vw"} height={"100vh"} src={UserPhoto} alt="cannot load"/>
                <button className = 'friendButton' onClick={(event) => (ButtonMessageSent())} style = {{backgroundColor : ButtoonClick ? "darkgrey" : "white"}}> {FriendButton} </button>


            </div>

            <div className='information'>
                <h1 className='name' >{UserName}</h1>
                <h1 className='age'>{UserAge}</h1>
                <h1 className='proffesion'>{Userprofession}</h1>
            </div>
        </div>

    )
    
}





export default UsersData;