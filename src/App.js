
import { Route, Router, Switch } from 'react-router';
import './App.css';
import { HomePage } from './containers/HomePage';
import { Participation } from './containers/participation';
import { RappellLogin } from './containers/participation/rappellLogin';
import { RappellCih } from './containers/rappelCiH';
import { Rappellsignup } from './containers/rappellsignup';



function App() {
  return (
    <div className="App">
       <Router>
        <Switch >
          <Route path="/" components={HomePage} />
          <Route path="/Particep" exact component={Participation} />
          
          <Route path="/Login"  exact component={RappellLogin} />
          <Route path="/Singup" exact component={Rappellsignup} /> 

          <Route path ="/Cih" exact component={RappellCih} />
        
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
