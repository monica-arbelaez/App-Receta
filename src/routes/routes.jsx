import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { InicioApp } from '../components/inicio/InicioApp'


export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component = { InicioApp } />
            </Switch>
        </BrowserRouter>
    )
}
