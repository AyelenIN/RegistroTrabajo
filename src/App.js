import React from 'react';

 import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Register from '../src/pages/register';


function App(){

const Routing = () =>{
  return (

    <Switch>
      <Route exact path="/register" component={Register}/>
    </Switch>

    
  // <BrowserRouter>
  
  // <Route path = "/register" component={Register}/>
  // </BrowserRouter>

  );
};

return(
  <Router>
    <Routing/>
  </Router>


)
};

export default App;