import React, { Component } from 'react';

class Ios extends Component {
    render() {
        return (

            <div>
                ios
            </div>
        )
    }

    componentWillUnmount() {
        console.log('component will unmount ios')
    }
}

export default Ios;