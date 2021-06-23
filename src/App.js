import './App.css';
import Home from './pages/home/index'
import Signup from './pages/signup/index'
import Login from './pages/login/index'
import ForgotPassword from './pages/forgotPassword/index'

import { Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div>  
    <Switch>
      <Route exact path="/home"><Home /></Route>
       <Route exact path="/signup"><Signup /> </Route>        
       <Route exact path="/login"><Login /></Route>
       <Route exact path="/forgotpassword"><ForgotPassword /></Route>
       <Route path="*"><Signup/></Route>
    </Switch>
    </div>
  );
}

export default App;
