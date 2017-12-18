import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import NewsList from './NewsList'

class Home extends Component{


    _click(event){
        this.props.history.push('/list/')
    }


    render(){
        return(
            <div>
                <input type='button' value='按钮' onClick={this._click.bind(this)}/>
            </div>
        )
    }
}

export default Home;