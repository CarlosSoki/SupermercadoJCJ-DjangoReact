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
        pageSize: 20,
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
                        width={100}
                        alt="logo"
                        src="https://lh3.googleusercontent.com/proxy/hmjtBamn_1TvwlrR4mrc4bQdnG5twcAD7JnBpQi0UPpLY5TblHrgQFtxC2-kbUZ5cHZbHp89eJMoyME80DZHKFPJBQ3h3R9VPrHc4PdaqXYnJP_qJKmnvSc_LNCgfOcWEJ8QO9LX9V0"
                    />  
                </Card>
            }
        >

        <Card>
          <List.Item.Meta
            avatar={<Avatar src="data:image/png;base64,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" />}
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