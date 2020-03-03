import React from 'react';
import { List, Avatar, Icon } from 'antd';
import { Card } from 'antd'


const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Precio = (props) => {
    return(
    <List
        itemLayout="vertical"
        size="large"
        pagination={{
        onChange: page => {
            console.log(page);
        },
        pageSize: 50,
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
                        height={100}
                        width={120}
                        alt="logo"
                        src={item.id_producto.imagen}
                    />  
                </Card>
            }
        >

        <Card>
          <List.Item.Meta
            avatar={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRydyBOZNtVRw3lTqkEN0l5brbTBqB5lL3LNgdK1v7PQkXi6y9z" />}
            title={<a href={`/precio/${item.id}`}>ID Precio: ({item.id})</a>}
            /> 
            <h4>Producto: "{item.id_producto.nombre}" ID:({item.id_producto.id})</h4>
            <h4>Fecha: {item.fecha_hora}</h4>
            <h4>Precio: {item.precio} $</h4>
            
        </Card>
        </List.Item>
        )}
    />
    )
}

export default Precio; 