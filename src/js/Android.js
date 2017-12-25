import React, {Component} from 'react';
import List from 'antd/lib/list';
import 'antd/lib/list/style/css'

class Android extends Component {

    constructor() {
        super();
        this.state = {
            name: 'default',
            url: 'http://gank.io/api/data/Android/20/1',
            list: []
        }

    }

    /*
    * 一些启动动作 像网络请求等，放着这个生命周期里操作
    * */
    componentWillMount() {
        this.loadData()
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

export default Android;