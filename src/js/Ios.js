import React, {Component} from 'react';
import List from 'antd/lib/list';
import 'antd/lib/list/style/css'

class Ios extends Component {

    constructor() {
        super();
        this.state = {
            name: 'default',
            url: 'http://gank.io/api/data/iOS/20/1',
            list: []
        }

    }

    handItemClick(item) {
        window.open(item.url)
    }

    componentWillMount() {
        this.loadData()
        console.log('load ios data')
    }

    render() {
        return (

            <List
                dataSource={this.state.list}
                renderItem={item => (<List.Item onClick={this.handItemClick.bind(this, item)}>{item.desc}</List.Item>)}
            />
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
            })
            .catch(e => console.log("error"))
    }

    componentWillUnmount() {
        console.log('component will unmount ios')
    }
}

export default Ios;