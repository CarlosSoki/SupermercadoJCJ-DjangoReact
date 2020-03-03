import React from 'react';
import { List, Avatar, Icon } from 'antd';
import { Card } from 'antd'


const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Categoria = (props) => {
    return(
    <List
        itemLayout="vertical"
        size="large"
        pagination={{
        onChange: page => {
            console.log(page);
        },
        pageSize: 4,
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
                        src={item.imagen}
                    />  
                </Card>
            }
        >

        <Card>
          <List.Item.Meta
            avatar={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrSn7V_n8HA7nqbOWEgGeud3nLIChHVUQX85aMDN1Ewxjzxm9V" />}
            title={<a href={`/categoria/${item.id}`}>{item.nombre_categoria}</a>}
            />  
            <h4>ID Categoria: ({item.id})</h4>
            
        </Card>
        </List.Item>
        )}
    />
    )
}

export default Categoria; 