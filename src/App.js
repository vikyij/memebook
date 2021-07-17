import './App.css';
import Home from './pages/home/index'
import Signup from './pages/signup/index'
import Login from './pages/login/index'
import ForgotPassword from './pages/forgotPassword/index'
import Upload from './pages/upload/index'

import { Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div style={{backgroundColor: '#141518'}}>  
    <Switch>
      <Route exact path="/home"><Home /></Route>
       <Route exact path="/signup"><Signup /> </Route>        
       <Route exact path="/login"><Login /></Route>
       <Route exact path="/forgotpassword"><ForgotPassword /></Route>
       <Route exact path='/upload'><Upload /></Route>
       <Route path="*"><Signup/></Route>
    </Switch>
    </div>
  );
}

export default App;
