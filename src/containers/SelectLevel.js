import React from 'react'
import { Link } from 'react-router-dom'

const SelectLevel = props => {

    const { setselectedLevel } = props

    return (
        <div className="canvas2">

            <div className="container" id="selectDifficulty">
                <div className="row">
                    <p id="selectTitle" className="col-12 col-md-12 col-lg-12">Select Ninja Level</p>
                    <div id="easy" className="col-12 col-md-12 col-lg-12"><Link to="/game"><button onClick={() => setselectedLevel(1)} className="levels">Novice Ninja</button></Link></div>
                    <div id="normal" className="col-12 col-md-12 col-lg-12"><Link to="/game"><button onClick={() => setselectedLevel(2)} className="levels">Pro Ninja</button></Link></div>
                    <div id="hard" className="col-12 col-md-12 col-lg-12"><Link to="/game"><button onClick={() => setselectedLevel(3)} className="levels">Boss Ninja</button></Link></div>
                </div>

            </div>

        </div>
    )
}

export default SelectLevel;