import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import Android from './Android';
import Ios from './Ios'
import H5 from './H5'
import 'antd/lib/menu/style/css'
import 'antd/lib/layout/style/css'
import '../css/pc.css'

const {Header, Content, Footer} = Layout;

class Home extends Component {

    constructor() {
        super();
        this.state = {
            currentKey: '1',
            View: Android
        }
    }

    state = {
        current: 'mail',
    }

    _click(event) {
        this.props.history.push('/list/')
    }

    _menuClick(item) {
        switch (item.key) {
            case '1':
                this.setState(
                    {
                        View: Android
                    }
                )
                break
            case '2':
                this.setState(
                    {
                        View: Ios
                    }
                )
                break
            case '3':
                this.setState(
                    {
                        View: H5
                    }
                )
                break
            default:
                console.log('no case')
        }
    }

    render() {
        return (

            <Layout>
                <Header className="header">
                    <div className="logo">小刘哥</div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{lineHeight: '64px'}}
                        onSelect={this._menuClick.bind(this)}>

                        <Menu.Item key="1">android</Menu.Item>
                        <Menu.Item key="2">ios</Menu.Item>
                        <Menu.Item key="3">前端</Menu.Item>

                    </Menu>
                </Header>

                <Content style={{padding: '0 50px', marginTop: 64}}>

                    <div style={{background: '#fff', padding: 24, minHeight: 580}}>

                        {
                            <this.state.View></this.state.View>
                        }

                    </div>

                </Content>

                <Footer style={{textAlign: 'center'}}>

                </Footer>

            </Layout>

        )
    }
}

export default Home;