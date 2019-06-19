import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {

    return (
        <div className="canvas">
            <div className="ninja">
                <img className="animated fadeOut infinite" src="images/ninja2.png" alt="ninja" />
            </div>

            <div className="myintro">
                <h1>Crazy Ninja v2</h1>
                <button className="intro"><Link to="/loading">Press Start</Link></button>
            </div>
        </div>
    )
}

export default HomePage;