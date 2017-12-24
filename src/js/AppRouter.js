import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'


import Home from './Home'
import NewsList from './NewsList'

/*
* 程序入口页
* */
class AppRouter extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route path="/" exact component = {Home}/>
                    <Route path="/list/" exact component = {NewsList}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default AppRouter;