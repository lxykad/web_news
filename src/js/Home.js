import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb,Icon} from 'antd';
import 'antd/lib/menu/style/css'
import 'antd/lib/layout/style/css'

const {Header, Content, Footer} = Layout;

class Home extends Component {

    state = {
        current: 'mail',
    }

    _click(event) {
        this.props.history.push('/list/')
    }


    render() {
        return (

            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }} >

                        <Menu.Item key="1">android</Menu.Item>
                        <Menu.Item key="2">ios</Menu.Item>
                        <Menu.Item key="3">前端</Menu.Item>
                    </Menu>
                </Header>

                <Content style={{ padding: '0 50px' }}>

                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>

                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
                </Content>

                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>

            </Layout>

        )
    }
}

export default Home;