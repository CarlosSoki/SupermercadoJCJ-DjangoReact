import React from 'react';
import { List, Avatar, Icon } from 'antd';
import { Card } from 'antd'


const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Pedido = (props) => {
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
                        height={90}
                        width={100}
                        alt="logo"
                        src="https://c8.alamy.com/compes/t3xy6n/vector-icono-carrito-realizar-pedido-online-t3xy6n.jpg"
                    />  
                </Card>
            }
        >

        <Card>
            <div>
                {item.id_pedido != null ? (
                    <List.Item.Meta
                    avatar={<Avatar src="https://image.flaticon.com/icons/png/512/891/891448.png" />}
                    title={<a href={`/pedido/${item.id_pedido.id}`}>({item.id_pedido.id})   Usuario:"{item.id_usuario.username}" ID:({item.id_usuario.id})</a>}/>  
                ) : (
                    ''
                )}
            </div>

            <div>
                {item.id_pedido != null ? (
                    <h4>Precio: {item.id_inventario.id_producto.precio_producto.precio} $ / Cantidad: {item.cantidad} Unid</h4>       
                   ) : (
                    ''
                )}
            </div>
            <div>
                {item.id_pedido != null ? (
                    <div>
                        <h4>Precio Venta: <b>{item.id ? (item.id_inventario.id_producto.precio_producto.precio*item.cantidad)+' $' : '(X)'}</b></h4>
                 </div>                    
                 ) : (
                    ''
                )}
            </div>
            <div>
                {item.id_pedido != null ? (
                    <h4>Fecha Venta: {item.id_pedido.fecha_venta}"</h4>                  
                 ) : (
                    ''
                )}
            </div>
            
        </Card>
        </List.Item>
        
        )}
    />
    )
}

export default Pedido; 