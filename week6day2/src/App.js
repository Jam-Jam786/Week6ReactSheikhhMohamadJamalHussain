
import './SocialMediaSearchPage'
import './App.css';
import UsersData from './SocialMediaSearchPage'
import { useState } from 'react';


function App() {

  const [userDetails, setuserDetails] = useState([
    {
      name : "Mickey Mouse",
      age : "94",
      prof : "charactor",
      url : "https://c8.alamy.com/comp/CRWNYH/mickey-mouse-CRWNYH.jpg"
    },
    {
      name : "Donald Duck",
      age : "89",
      prof : "charactor",
      url : "https://qph.cf2.quoracdn.net/main-qimg-d883cfd4405aad021805789fab5c3694-pjlq"
    },
    {
      name : "Goofy",
      age : "91",
      prof : "charactor",
      url : "https://www.disneyclips.com/images/images/goofy28.png"
    }

  ])

  
  
    return (
      <div className="App">
        <header className="App-header">

          {userDetails.map((dataBase) => {
            return(
              <div>
                <UsersData name = {dataBase.name} age = {dataBase.age} prof = {dataBase.prof} url = {dataBase.url}/>
                
              </div>
            )

          })}
          
            {/* return(
              <UsersData name = {"Mickey Mouse"} age = {"94"} prof = {"charactor"} url = {"https://c8.alamy.com/comp/CRWNYH/mickey-mouse-CRWNYH.jpg"} ></UsersData>
              <UsersData name = {"Donald Duck"} age = {"89"} prof = {"charactor"} url = {"https://qph.cf2.quoracdn.net/main-qimg-d883cfd4405aad021805789fab5c3694-pjlq"} ></UsersData>
              <UsersData name = {"Goofy"} age = {"91"} prof = {"charactor"} url = {"https://www.disneyclips.com/images/images/goofy28.png"} ></UsersData>
            ); */}
        </header>
      </div>
    )         
}


export default App;
