import './App.css';
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import { Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div>  
    <Switch>
       <Route exact path="/signup"><Signup /> </Route>        
       <Route exact path="/login"><Login /></Route>
       <Route path="*"><Signup/></Route>
    </Switch>
    </div>
  );
}

export default App;
