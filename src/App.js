import React, { useState, useEffect} from 'react';
import fire from './config/Fire';
import LoginRegister from './components/LoginRegister/LoginRegister';
import Home from './components/Home/Home';
import './App.css';
import Spinner from './assets/loader.gif';


function App() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authListener();
    setTimeout(function() {
      setLoading(false);
    }.bind(this), 1000)
  }, []);



   const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        setUser({user});
      }else{
        setUser(null);
      }
    });
  }

  if(loading){
    return(
      <div className="text-center spinner">
        <img src={Spinner} alt="loading"/>
      </div>
    );
  }
  return(
    <div>
      {user ? (<Home/>) : (<LoginRegister/>)}
    </div>
  );

}

export default App;
