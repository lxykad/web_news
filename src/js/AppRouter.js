import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'


import Home from './Home'
import NewsList from './NewsList'
import Android from './Android'
import Ios from './Ios'

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
                    <Route path="/android/" exact component = {NewsList}/>
                    <Route path="/ios/" exact component = {NewsList}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default AppRouter;