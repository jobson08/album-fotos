import React from 'react';
import { Switch , Route } from "react-router-dom";

import Buttons from './components/componentsUtil/Buttons'
import Imputs from './components/componentsUtil/Imputs'
import CheckRadio from './components/componentsUtil/CheckRadio'
import Tabs from './components/componentsUtil/Tabs'
import Modals from './components/componentsUtil/Modals'

import Home from './pages/Home';
import NewFoto from './pages/NewFoto';
import Fide from './pages/Fide';

function Routes () {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/newFoto" component={NewFoto} />
            <Route path="/Fide" component={Fide} />
            <Route path="/Buttons" component={Buttons} />
            <Route path="/Imputs" component={Imputs} />
            <Route path="/CheckRadio" component={CheckRadio} />
            <Route path="/Tabs" component={Tabs} />
            <Route path="/Modals" component={Modals} />
        </Switch>
    );
}

export default Routes