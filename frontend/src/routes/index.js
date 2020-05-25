import React from 'react';
import {BrowserRouter, Switch, Route}from 'react-router-dom';

import Home from '../views/Home';
import User from '../views/User';
import Imovel from '../views/Imovel';
import Planta from '../views/Planta';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/user" exact component={User}/>
                <Route path="/imovel" exact component={Imovel}/>
                <Route path="/imovel/:id" exact component={Imovel}/>
                <Route path="/planta" exact component={Planta}/>
                <Route path="/*" exact component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}