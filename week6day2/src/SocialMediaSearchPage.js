import './SocialMediaSearchPage.css';
import { useState } from 'react';

function UsersData(){

const [UserName, setUserName] = useState("jamal")
const [UserAge, setUserAge] = useState("27")
const [Userprofession, setUserProfession] = useState("profession")



    return(

        <div className='searchPage-container'>

            <div className='profilePic'>
                <img width={"50vw"} height={"100vh"} src="https://i.dailymail.co.uk/i/pix/2011/10/21/article-2052035-0E767BDF00000578-546_233x423.jpg" alt="cannot load"/>
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