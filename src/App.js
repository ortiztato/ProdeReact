
import './App.css';


import Ligas from './pages/Ligas';
import Liga from './pages/Liga';
import Form from './pages/Form';
import Usuario from './pages/Usuario';
import Portada from './pages/Portada';


import React, { useContext, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';



function App() {




  return (
    <div>
      <Switch>
        <Route path='/portada' exact >
          <Portada />
        </Route>
        <Route path='/ligas' exact >
          <Ligas />
        </Route>
        <Route path='/form' exact>
          <Form />
        </Route>
        <Route path='/' exact>
          <Redirect to='/portada' />
        </Route>
        <Route path='/ligas/:liganame' exact>
          <Liga />
        </Route>
        <Route path='/ligas/:liganame/:usuario' exact>
          <Usuario />
        </Route>
      </Switch>
    </div>


  );
}

export default App;
