import React, {Component} from 'react';

class H5 extends Component {
    render() {
        return (

            <div>
                h5
            </div>
        )
    }

    componentWillUnmount() {
        console.log('component will unmount h5')
    }


}

export default H5;