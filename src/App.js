import './App.css';
import img from './Component/images/logo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Order from './Component/Order/Order';
import Admin from './Component/Admin/Admin';
import Addproduct from './Component/Addproduct/Addproduct';
import Single from './Component/Single/Single';
import Login from './Component/Login/Login';
import { createContext, useState } from 'react';
import Item from './Component/Item/Item';
import Privetroute from './Component/Privetroute/Privetroute';
import Showorder from './Component/Showorder/Showorder';
import Deletecompo from './Component/Deletecompo/Deletecompo';

export const userContext=createContext()

function App() {
  const [loogeduser,setLoogeduser]=useState({})
  return (
    <userContext.Provider value={[loogeduser,setLoogeduser]}>
      <Router>
        <div>
          {/* <h1>Name: {loogeduser.name }</h1> */}
          <div className="hidden">
            <div className="lefSite">
              <img src={img} alt=""/>
            </div>
            <div className="rightSite">
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/order">Order</Link>
                </li>
                {/* <li>
                  <Link to="/admin">Admin</Link>
                </li> */}
                <li>
                  <Link to="/addProduct">Admin</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                
              </ul>
            </div>
          </div>

          <hr />
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
             <Route exact path="/">
              <Home></Home>
            </Route>
            <Privetroute path="/order/:id">
              <Order></Order>
            </Privetroute>
            <Privetroute path="/order">
              <Order></Order>
            </Privetroute>
            

            <Route path="/admin">
              <Admin></Admin>
            </Route>

            <Privetroute path="/addProduct">
              <Addproduct></Addproduct>
            </Privetroute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/delete">
              <Deletecompo></Deletecompo>
            </Route>
            
            <Privetroute path="/single/:id">
              <Single></Single>
            </Privetroute>
           
          </Switch>
        </div>
      </Router>
    </userContext.Provider>
  );
}

export default App;
