import React, {Component} from 'react';
import List from 'antd/lib/list';
import 'antd/lib/list/style/css'

class NewsList extends Component {

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

    /*
    * <List>
                {
                    this.state.list
                        .map((item, i) =>
                            <div key={i}>{item.desc}</div>
                        )
                }
            </List>
    *
    * */


    render() {
        return (

            <List
                header={<div>header</div>}
                footer={<div>footer</div>}
                bordered
                dataSource={this.state.list}
                renderItem={item=>(<List.Item>{item._id}</List.Item>)}
            />
        )
    }

    componentDidMount() {

    }
}

export default NewsList;