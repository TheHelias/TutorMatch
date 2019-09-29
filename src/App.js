import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/home';


function App() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Homepage}/>
        </Switch>
      </div>
    )
  return (
    <Switch>
    <App/>
  </Switch>
  );
}

export default App;
