import React, {Component} from 'react';


class NewsList extends Component {

    constructor() {
        super();
        this.state = {
            name: 'default',
            url: 'http://gank.io/api/data/Android/10/1',
            content: []
        }

    }

    /*
    * 一些启动动作 像网络请求等，放着这个生命周期里操作
    * */
    componentWillMount() {
        fetch(this.state.url)
            .then(response => response.json())
            .then(data=>{
                console.log(data)
            })
            .catch(e => console.log("error"))
    }

    render() {
        return (
            <div>
                {}
            </div>
        )
    }

    componentDidMount() {

    }
}

export default NewsList;