import React from 'react';
import { List, Avatar, Icon } from 'antd';
import { Card } from 'antd'


const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Inventario = (props) => {
    return(
    <List
        itemLayout="vertical"
        size="large"
        pagination={{
        onChange: page => {
            console.log(page);
        },
        pageSize: 10,
        }}
        dataSource={props.data}
        renderItem={item => (
        <List.Item
            key={item.title}
            actions={[
            <IconText type="star-o" text="156" key="list-vertical-star-o" />,
            <IconText type="like-o" text="156" key="list-vertical-like-o" />,
            <IconText type="message" text="2" key="list-vertical-message" />,
            ]}
            extra={
                <Card>
                    <img
                        height={120}
                        width={100}
                        alt="logo"
                        src="https://previews.123rf.com/images/businessvector/businessvector1510/businessvector151000040/45788399-icono-de-inventario-env%C3%ADo.jpg"
                    />  
                </Card>
            }
        >

        <Card>
          <List.Item.Meta
            avatar={<Avatar src="https://image.shutterstock.com/image-vector/new-icon-flat-design-260nw-242585101.jpg" />}
            title={<a href={`/inventario/${item.id}`}>ID({item.id}) {item.id_sucursal.sucursal} /Tiene/ {item.id_producto.nombre}</a>}
            
            />  
            <h3>Unidades Existentes: {item.unidades_ex} </h3>
            <h4>Sucursal: ({item.id_sucursal.id}) "{item.id_sucursal.sucursal}" </h4>
            <h4>Producto: ({item.id_producto.id}) "{item.id_producto.nombre}" [{item.id_producto.id_categoria.nombre_categoria} ({item.id_producto.id_categoria.id})]</h4>
        </Card>
        </List.Item>
        
        )}
    />
    )
}

export default Inventario; 