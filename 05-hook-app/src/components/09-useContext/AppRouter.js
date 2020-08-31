import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Navbar } from './Navbar';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route exact path='/about' component={AboutScreen} />
            <Route exact path='/login' component={LoginScreen} />

            {/* REDIRECCIONADO A RUTAS NO ESTABLICIDAS */}
            {/* 1.FORMA Actua como el default del switch si no se encuentra la ruta, tipo redicrecto como angular */}
            {/* <Route component={HomeScreen} /> */}

            {/* 2.FORMA Se usa el componente Redirec de la libreria */}
            <Redirect to='/' />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
