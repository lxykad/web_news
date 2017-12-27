import React, {Component} from 'react';
import TimeUtil from '../utils/TimeUtil'
import {List, Avatar, Button, Spin} from 'antd';
import 'antd/lib/list/style/css'
import 'antd/lib/avatar/style/css'

class Android extends Component {

    constructor() {
        super();
        this.state = {
            page: 1,
            name: 'default',
            url: 'http://gank.io/api/data/Android/20/',
            list: [],
            loading: true,
            loadingMore: false,
            showLoadingMore: true
        }
    }

    handItemClick(item) {
        window.open(item.url)
    }

    /*
    * 一些启动动作 像网络请求等，放着这个生命周期里操作
    * */
    componentWillMount() {
        this.loadData(1)
    }

    render() {
        const {loading, loadingMore, showLoadingMore, data} = this.state;
        const loadMore = showLoadingMore ? (
            <div style={{textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px'}}>
                {loadingMore && <Spin/>}
                {!loadingMore && <Button onClick={this.onLoadMore.bind(this)}>加载更多</Button>}
            </div>
        ) : null;

        return (

            <List
                dataSource={this.state.list}
                loadMore={loadMore}
                renderItem={item => (
                    <List.Item onClick={this.handItemClick.bind(this, item)}>

                        <List.Item.Meta
                            title={item.desc}
                            description={TimeUtil.formartTime(new Date(item.publishedAt), 'yyyy-MM-dd')}
                        />

                    </List.Item>)}
            />
        )
    }

    loadData(page) {

        var dataUrl = this.state.url + page

        fetch(dataUrl)
            .then(response => response.json())
            .then(data => {

                if (!data.error) {
                    this.setState({
                       list: this.state.list.concat(data.results)
                    })
                }
            })
            .catch(e => console.log("error"))
    }

    onLoadMore() {
        this.state.page++
        console.log(this.state.page)
        this.loadData(this.state.page)
    }

}

export default Android;