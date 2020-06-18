import React, { useState, useEffect } from 'react';
import fire from '../../config/Fire';



function Home(props) {

const logout = () => {
    fire.auth().signOut();
}

  return(
    <div className="container py-5">
        <div className="row justify-content-center">
            <div className="col-md-10">
               <h1 className="text-center">Welcome to home</h1>
               <div className="text-center py-5">
               <button className="btn btn-primary" onClick={logout}>LogOut</button>
               </div>
            </div>
        </div>

    </div>
  );

}

export default Home;
