import React, {Component} from 'react';
import TimeUtil from '../utils/TimeUtil'
import List from 'antd/lib/list';
import 'antd/lib/list/style/css'
import 'antd/lib/avatar/style/css'

class MeiZi extends Component{

    constructor() {
        super();
        this.state = {
            name: 'default',
            url: 'http://gank.io/api/data/福利/20/1',
            list: []
        }

    }

    componentWillMount() {
        // loadData
        this.loadData()
    }

    render(){
        return(
            <div>mei</div>
        )
    }

    loadData() {

        fetch(this.state.url)
            .then(response => response.json())
            .then(data => {

                if (!data.error) {
                    this.setState({
                        list: data.results

                    })
                }
                console.log(data.results)
            })
            .catch(e => console.log("error"))
    }

}

export default MeiZi;