import React, {Component} from 'react';
import {Layout, Menu, Pagination} from 'antd';
import Android from './Android';
import Ios from './Ios'
import 'antd/lib/menu/style/css'
import 'antd/lib/layout/style/css'
import '../css/pc.css'

const {Header, Content, Footer} = Layout;

class Home extends Component {

    constructor() {
        super();
        this.state = {
            currentKey: '1'
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
                        currentKey: '1'
                    }
                )
                break
            case '2':
                this.setState(
                    {
                        currentKey: '2'
                    }
                )
                break
            case '3':
                this.setState(
                    {
                        currentKey: '3'
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
                    <div className="logo">干货集中营</div>
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


                        }


                    </div>

                </Content>

                <Footer style={{textAlign: 'center'}}>
                    footer
                </Footer>

            </Layout>

        )
    }
}

export default Home;