import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'


const LoadingScreen = () => {

    useEffect(() => {
        handleProgress();
        return () => {
            window.location.reload();
        }
    }, [])


    const handleProgress = () => {
        const frame = () => {
            if (progress === 500 && counter === 100) {
                clearInterval(id);
                document.getElementById('nextPage').style.display = "block";
            }

            else {
                progress += 5;
                counter += 1;
                prg.style.width = progress + 'px';
                percent.innerHTML = "Loading: " + counter + '%';
                document.getElementById('nextPage').style.display = "none";
            }
        }

        let prg = document.getElementById('progress');
        let percent = document.getElementById('percentCount');
        let counter = 5;
        let progress = 25;
        let id = setInterval(frame, 50);

    }

    return (
        <div className="canvas3">

            <div id="percentCount" className="percent-count" />
            <div className="progress-bar">
                <div className="progress" id="progress" />
            </div>
            <p id="instruction">INSTRUCTION: Catch as many ninja as you can before the timer runs out<br />COMING SOON: Crazy Ninja on Mobile!</p>
            <div id="nextPage"><Link to="/level">Click here to continue >></Link></div>

        </div>
    )
}

export default LoadingScreen;
