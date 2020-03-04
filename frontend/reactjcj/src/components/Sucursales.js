import React from 'react';
import { List, Avatar, Icon } from 'antd';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Sucursales = (props) => {
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
            extra={<img width={170} alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2lLBFA_At67T8hEGkZisloo-i_MHYkscdTY8yJOMhoaHNDP3k"/>}
        >

        <List.Item.Meta
            avatar={<Avatar src="https://previews.123rf.com/images/scotttalent/scotttalent1312/scotttalent131201103/24465260-new-sign.jpg" />}
            title={<a href={`/sucursales/${item.id}`}>{item.sucursal}</a>}
            description={item.direccion}
            />
            <h4>Telf: {item.telefono} </h4>
            <h4>Goolge Mapa: <a href={item.mapa}>{item.mapa}</a> </h4>
        </List.Item>
        )}
    />
    )
}

export default Sucursales; 