import React from 'react';
import { List, Avatar, Icon } from 'antd';
import { Card } from 'antd'


const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const User = (props) => {
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
                        src=""
                    />  
                </Card>
            }
        >

        <Card>
          <List.Item.Meta
            avatar={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrSn7V_n8HA7nqbOWEgGeud3nLIChHVUQX85aMDN1Ewxjzxm9V" />}
            title={<a href={`/user/${item.id}`}>({item.id}) {item.username}</a>}
            description={item.email}
            />  
            <h4>Usuario: "{item.username}" : ({item.id}) </h4>
            <h4>First Name: "{item.first_name}" Last Name: "{item   .last_name}"</h4>
            <h4>Dia Union: {item.date_joined} </h4>
            <h4>Ultima Coneccion: {item.last_login} </h4>
        </Card>
        </List.Item>
        
        )}
    />
    )
}

export default User; 