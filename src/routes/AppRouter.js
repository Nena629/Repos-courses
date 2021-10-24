import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import MovieDetailsPage from '../pages/MovieDetailsPage'

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
            <Switch>
                <Route 
                     exact //exactement / pour ne pas avoir homepage et moviedetails à la fois
                     path="/"
                     component= {HomePage}
               />
                <Route 
                    path="/Movie-details/all"
                    //FONCTION JSX
                   render={() => <h1> All Movies are here</h1>} />

                <Route 
                    path="/Movie-details/:id"
                    component={MovieDetailsPage} />
        
                <Route 
                     //PAGE ERREUR
                    path="**"
                    render={() => <h1> Page Not found 404</h1>} />

            </Switch>
              
            </BrowserRouter>
        </div>
    )
}

export default AppRouter
