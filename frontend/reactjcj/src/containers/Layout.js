import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
    return (
        <Layout className="layout">
            <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">
                <Link to='/'>Posts</Link>
                </Menu.Item>
                <Menu.Item key="2">
                <Link to='/login'>Login</Link>
                </Menu.Item>
                
            </Menu>
            </Header>
            <Content style={{ padding: '0 50px', background: '#D0E0F7',}}>
            <Breadcrumb style={{ margin: '16px 0'}}>
                <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/sucursales">Sucursales</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/productos">Productos</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/categoria">Categorias</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/precio">Precios</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/inventario">Inventario</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/user">Usuarios</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to=""></Link></Breadcrumb.Item>
            </Breadcrumb>
                <div style={{ background: '#E7EFF9', padding: 30, minHeight: 280 }}>
                    {props.children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default CustomLayout; 

