import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import api from '../config/index'

const Game = props => {

    const { level, name } = props

    let interval = level === 1? 1600 : level === 2? 1100 : 850;

    useEffect(() => {
        setInterval(handleGame,interval);
        handleTime();
        return ()=> {
            window.location.reload();
        }
    }, [])

    let ctr = 1;

    const myScore1 = () => {
        document.getElementById("addScore1").innerHTML = "Score: " + ctr;
        ctr++;
    }

    const handleGame = () => {

        const Prep = () => {
            let Canvas_Element = document.getElementById("canvasSize");

            if(Canvas_Element){
                let window_Height = Canvas_Element.clientHeight;
                let window_Width = Canvas_Element.clientWidth;
        
                let image_Element = document.getElementById("image");
                let image_Height = image_Element.clientHeight;
                let image_Width = image_Element.clientWidth;
        
                let availSpace_V = window_Height - image_Height;
                let availSpace_H = window_Width - image_Width;
    
                moveImage(availSpace_H, availSpace_V,image_Element);
            }
        }
    
        const moveImage = (availSpace_H, availSpace_V, image_Element) => {
            let randNum_V = Math.round(Math.random() * availSpace_V);
            let randNum_H = Math.round(Math.random() * availSpace_H);
            image_Element.style.top = randNum_V + "px";
            image_Element.style.left = randNum_H + "px";
        }
        
        window.onload = Prep();

    }

    const handleTime = () => {
        let timeleft = 60;
        let downloadTimer = setInterval(() => {
            timeleft--;
            let timeDisplay = document.getElementById("countdowntimer");
            if(timeDisplay){
                timeDisplay.textContent = "Time left: " + timeleft;
            }
            if (timeleft <= 10) {
                document.getElementById("countdowntimer").style.backgroundColor = "red";
            }
    
            if (timeleft <= 0) {
                clearInterval(downloadTimer);
    
                if (timeleft === 0) {
                    ctr--
                    document.getElementById('hidegame').style.display = "block";
                    document.getElementById('finalScore').innerHTML = ctr;
                    // ctr = 0;
                    timeleft = 60;
                }
            }
        }, 1000); 
    }


    const addScoreToLeaderBoard = () => {
        const data = {
            name,
            level,
            score: ctr
        }

        axios.post(`${api.mongodbURI}/api/players`, data).then(res => {
            props.history.push('/leaderboard')
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return (
        <div>
            <div className=" container canvas" id="canvasSize">

                <div>
                    <img onClick={myScore1} alt="ninja" src="images/ninja.png" id="image" className="animated fadeOut infinite" style={{position: 'fixed', height: '100px', width: '100px', zIndex: '93'}} />
                </div>

                <span id="addScore1">Score: 0</span>
                <span id="countdowntimer">Time left: 60</span>

                <div className="row">
                    <div className="col-md-12">
                        <img className="img-fluid hiding4" alt="ninja" src="images/tree.png" />
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid hiding2" alt="ninja" src="images/rock.png" />
                    </div>

                    <div className="col-md-6">
                        <img className="img-fluid hiding3" alt="ninja" src="images/rock.png" />
                    </div>

                </div>


                <div className="row">
                    <div className="col-md-4">
                        <img className="img-fluid hiding" alt="ninja" src="images/grass.png" />
                    </div>

                    <div className="col-md-4">
                        <img className="img-fluid hiding" alt="ninja" src="images/grass.png" />
                    </div>

                    <div className="col-md-4">
                        <img className="img-fluid hiding" alt="ninja" src="images/grass.png" />
                    </div>
                </div>

            </div>

            <div className="canvas4" id="hidegame">
                <div className="gameover">
                    <h1>Game Over!</h1>
                    <p className="scoreFont">Your Score: <span id="finalScore"></span></p>
                </div>
                <div><Link to="/level"><button>Restart Game</button></Link></div>
                <div><button onClick={addScoreToLeaderBoard}>Leaderboard</button></div>
            </div>
        </div>
    )
}

export default Game;