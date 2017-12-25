import React, {Component} from 'react';

class Android extends Component {
    render() {
        return (

            <div>
                android
            </div>
        )
    }

    componentWillUnmount() {
        console.log('component will unmount android')
    }


}

export default Android;