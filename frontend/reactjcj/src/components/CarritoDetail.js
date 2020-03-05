import React from 'react';
import { List, Avatar, Icon } from 'antd';
import { Card } from 'antd'


const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const CarritoDetail = (props) => {
    return(
    <List
        itemLayout="vertical"
        size="large"
        pagination={{
        onChange: page => {
            console.log(page);
        },
        pageSize: 5,
        }}
        dataSource={props.data}
        renderItem={item => (
        <List.Item
            key={item.title}
            actions={[
            ]}
            extra={
                <Card>
                    <img
                        height={140}
                        width={150}
                        alt="logo"
                        src="https://png.pngtree.com/png-vector/20190329/ourlarge/pngtree-vector-shopping-cart-icon-png-image_889349.jpg"
                    />  
                </Card>
            }
        >

        <Card>
          <List.Item.Meta
            avatar={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0mfcSWtdhiVyXGfsUgSYDKOyq7mlely3DfpVqjMzHmgq9m4Fd" />}
            title={<a href={`/carritodetail/${item.id}`}>({item.id}) {item.id_usuario.username}</a>}
            description={item.descripcion}
            />  
            <h4>Usuario: ({item.id_usuario.username})"{item.id_usuario.username}" ID:({item.id_usuario.id}) Email: {item.id_usuario.email} </h4>
            <h4>Inventario: ({item.id_inventario.id}) Sucursal: "{item.id_inventario.id_sucursal.sucursal}" Producto: "{item.id_inventario.id_producto.nombre}"</h4>
            <h4>Precio: "{item.id_inventario.id_producto.nombre}" Cuesta  {item.id_inventario.id_producto.precio_producto.precio}$</h4>
            <h4>Cantiad: {item.cantidad} UNID</h4>
            <h4>Status: "{item.status}" (Pedido[P] Carrito[C])</h4>
            <div>
                <h4>ID Predido <b>{item.id_pedido ? (item.id_pedido.id) : '(X)'}</b></h4>
            </div> 
            
        </Card>
        </List.Item>
        
        )}
    />
    )
}

export default CarritoDetail; 