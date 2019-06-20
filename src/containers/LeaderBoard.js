import React, { useEffect, useState } from 'react';
import api from '../config/index'
import axios from 'axios';
import '../App.css'
import { Link } from 'react-router-dom';
import rank1 from '../rank1.png';

const LeaderBoard = () => {

    const [playerData, setPlayerData] = useState([]);

    useEffect(() => {
        axios.get(`${api.mongodbURI}/api/players`).then(res => {
            setPlayerData(res.data)
        })
    }, [])

    const playerScores = playerData.map((player, index) => {
        const difficulty = player.level === 1 ? 'Novice Ninja' : player.level === 2 ? 'Pro Ninja' : 'BossNinja';
        const ranking = index === 0? (<img src={rank1}  width="50px" />) : index+1;
        if (index <= 5) {
            return (
                <tr key={index}>
                    <td>{ranking}</td>
                    <td>{player.name}</td>
                    <td>{difficulty}</td>
                    <td>{player.score}</td>
                </tr>
            )
        }

        else {
            return null;
        }

    })

    const playerScoresRow = playerData.length > 0 ? playerScores : <tr><td colSpan="4">Loading players data... Please Wait...</td></tr>;

    return (
        <div className="canvas" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <div style={{ flex: '1', width: '80%', marginTop: '30px' }}>
                <table className="table" style={{ backgroundColor: '#c19a6b', color: '#4f3d21', fontSize: '20px' }}>
                    <thead>
                        <tr>
                            <th scope="col">Ranking</th>
                            <th scope="col">Player Name</th>
                            <th scope="col">Game Difficulty</th>
                            <th scope="col">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {playerScoresRow}
                    </tbody>
                </table>
            </div>
            <button><Link to="/">Try Again</Link></button>
        </div>

    )
}

export default LeaderBoard;