import React from 'react';
import { Form, Input, Button } from 'antd';

import axios from 'axios'

const FormItem = Form.Item; 

class CustomForm extends React.Component{

  handleFormSubmit = (event, requestType, pedidoID) => {
    const precio_venta = event.target.elements.precio_venta.value;

    console.log(precio_venta)
    
    switch ( requestType ){ 
      case 'post':  //agregarlo a la lista
          return axios.post('http://localhost:8000/supermercado/pedido/',{
              precio_venta: precio_venta,
          })
          .then(res => console.log(res))
          .catch(error => console.err(error));
         
      case 'put':  //editarlo
          return axios.put(`http://localhost:8000/supermercado/pedido/${pedidoID}/`,{
            precio_venta: precio_venta,
          })
          .then(res => console.log(res))
          .catch(error => console.err(error));

      }
  }

    render(){
        return (
          <div>
          <Form onSubmit={(event) => this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.pedidoID )}>
            <FormItem label="Precio Venta">
              <Input name = "precio_venta" placeholder="Ingrese el precio venta ..." />
            </FormItem>

            <FormItem>
              <Button type="primary" htmlType="submit" >{this.props.btnText}</Button>
            </FormItem>

          </Form>
        </div>
        );
    }
}

export default CustomForm;