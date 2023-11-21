
import './SocialMediaSearchPage'
import './App.css';
import UsersData from './SocialMediaSearchPage'
import { useState } from 'react';


function App() {

  const [userDetails, setuserDetails] = useState([])

  
    return (
      <div className="App">
        <header className="App-header">

          {userDetails.map(() => {
            return(
              <div>
                
              </div>
            )


          })}
          
            return(
              <UsersData name = {"Mickey Mouse"} age = {"94"} prof = {"charactor"} url = {"https://c8.alamy.com/comp/CRWNYH/mickey-mouse-CRWNYH.jpg"} ></UsersData>
              <UsersData name = {"Donald Duck"} age = {"89"} prof = {"charactor"} url = {"https://qph.cf2.quoracdn.net/main-qimg-d883cfd4405aad021805789fab5c3694-pjlq"} ></UsersData>
              <UsersData name = {"Goofy"} age = {"91"} prof = {"charactor"} url = {"https://www.disneyclips.com/images/images/goofy28.png"} ></UsersData>

        </header>
      </div>
    );
}


export default App;
