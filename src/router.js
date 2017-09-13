import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import UserShelf from './Components/UserShelf/UserShelf';
import Book from './Components/Book/Book';

export default (
    <Switch>
        <Route path='/' exact component={Landing}/>
        <Route path='/shelf' component={UserShelf}/>
        <Route path='/book/:id' component={Book}/>
    </Switch>
);