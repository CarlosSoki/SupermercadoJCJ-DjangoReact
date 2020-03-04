import React from 'react';
import { List, Avatar, Icon } from 'antd';
import { Card } from 'antd'


const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const UserDetail = (props) => {
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
            ]}
            extra={
                <Card>
                    <img
                        height={130}
                        width={100}
                        alt="logo"
                        src="https://es.seaicons.com/wp-content/uploads/2015/11/Users-Edit-User-icon.png"
                    />  
                </Card>
            }
        >

        <Card>
          <List.Item.Meta
            avatar={<Avatar src="https://iconsplace.com/wp-content/uploads/_icons/40e0d0/256/png/new-icon-17-256.png" />}
            title={<a href={`/userdetail/${item.id}`}>({item.id}) Usuario: "{item.id_usuario.username}" ID:({item.id_usuario.id}) </a>}
            
            />  
            <h4>Fecha Nacimiento: {item.fecha_nacimiento}</h4>
            <h4>Sexo: {item.sexo} </h4>
            <h4>Cedula: {item.cedula} </h4>
            <h4>Telefono: {item.cedula}</h4>
        </Card>
        </List.Item>
        
        )}
    />
    )
}

export default UserDetail; 