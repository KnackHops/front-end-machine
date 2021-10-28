import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default (
    <Switch>
        <Route path="/" />
        <Route path="/section">
            <Route path="/section/menu" />
            <Route path="/section/contact_us" />
            <Route />
        </Route>
    </Switch>
)