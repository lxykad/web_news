import React, { Component } from 'react';
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