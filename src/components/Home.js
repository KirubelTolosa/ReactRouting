import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Home(){
    return(        
        <div className="Home">
            <Link to="/Shop">
                <h1>Home sweet home :)</h1>
            </Link>
            
        </div>
    );
};
export default Home;