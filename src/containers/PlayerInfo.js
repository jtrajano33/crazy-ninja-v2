import React from 'react';
import { Link } from 'react-router-dom';

const PlayerInfo = props => {

    const { name, setName } = props;

    const handleChange = event => {
        event.preventDefault()
        setName(event.target.value)
    }

    return (
        <div className="canvas">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <div style={{ flex: '1', marginTop: '100px' }}>
                    <h1 style={{ marginBottom: '40px' }}>Enter your name</h1>
                    <input 
                        placeholder="Ninja name..." 
                        name="name" className="form-control" 
                        style={{ marginBottom: '50px', height: '60px' }}
                        value={name}
                        onChange={handleChange}
                    />
                    <button><Link to="/level">Submit</Link></button>
                </div>
            </div>
        </div>
    )
}

export default PlayerInfo;