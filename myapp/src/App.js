import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Dashboard from './dashboard';


function App() {
  
    var page =  <>  
                  <Route exact path="/" component={Dashboard}/>
                  <Route path="/dashboard" component={Dashboard}/>
                </>
       
    return(
    <HashRouter>
      {page}
   </HashRouter>
          );
}

export default App;
