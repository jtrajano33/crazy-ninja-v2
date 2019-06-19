import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import LoadingScreen from './containers/LoadingScreen';
import SelectLevel from './containers/SelectLevel';
import Game from './containers/Game';
import LeaderBoard from './containers/LeaderBoard';
import PlayerInfo from './containers/PlayerInfo';

function App() {
  const [level, setselectedLevel] = useState(1);
  const [name, setName] = useState(`player-${Math.round(Math.random()*1000)}`);

  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/loading' component={LoadingScreen} />
        <Route
          path='/level'
          render={(routeProps) => (
            <SelectLevel {...routeProps} setselectedLevel={setselectedLevel} />
          )}
        />
        <Route
          path='/game'
          render={(routeProps) => (
            <Game {...routeProps} level={level} name={name} />
          )}
        />
      </div>
      <Route
        path='/player'
        render={(routeProps) => (
          <PlayerInfo {...routeProps} setName={setName} name={name} />
        )}
      />
      <Route exact path='/leaderboard' component={LeaderBoard} />
    </BrowserRouter>
  );
}

export default App;
