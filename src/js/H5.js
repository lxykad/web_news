import React, {Component} from 'react';
import List from 'antd/lib/list';
import 'antd/lib/list/style/css'

class H5 extends Component {

    constructor() {
        super();
        this.state = {
            name: 'default',
            url: 'http://gank.io/api/data/前端/20/1',
            list: []
        }

    }

    componentWillMount() {
        this.loadData()
        console.log('load h5 data')
    }

    render() {
        return (

            <List
                dataSource={this.state.list}
                renderItem={item=>(<List.Item>{item.desc}</List.Item>)}
            />
        )
    }

    loadData(){

        fetch(this.state.url)
            .then(response => response.json())
            .then(data => {

                if (!data.error) {
                    this.setState({
                        list: data.results
                    })
                }
            })
            .catch(e => console.log("error"))
    }

}

export default H5;