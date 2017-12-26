import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'


import Home from './Home'
import NewsList from './NewsList'
import Android from './Android'
import Ios from './Ios'
import H5 from './H5'
import MeiZi from './MeiZi'

/*
* 程序入口页
* */
class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={Home}/>
                    <Route path="/list/" exact component={NewsList}/>
                    <Route path="/android/" exact component={Android}/>
                    <Route path="/ios/" exact component={Ios}/>
                    <Route path="/h5/" exact component={H5}/>
                    <Route path="/meizi/" exact component={MeiZi}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default AppRouter;