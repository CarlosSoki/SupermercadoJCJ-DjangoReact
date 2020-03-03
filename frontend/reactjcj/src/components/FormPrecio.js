import React from 'react';
import { Form, Input, Button } from 'antd';

import axios from 'axios'

const FormItem = Form.Item; 

class CustomForm extends React.Component{

  handleFormSubmit = (event, requestType, precioID) => {
    const id_producto = event.target.elements.id_producto.value;
    const precio = event.target.elements.precio.value;

    console.log(id_producto, precio)
    
    switch ( requestType ){ 
      case 'post':  //agregarlo a la lista
          return axios.post('http://localhost:8000/supermercado/precio/',{
                id_producto: id_producto,
                precio: precio,
          })
          .then(res => console.log(res))
          .catch(error => console.err(error));
         
      case 'put':  //editarlo
          return axios.put(`http://localhost:8000/supermercado/precio/${precioID}/`,{
                id_producto: id_producto,
                precio: precio,
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
              this.props.precioID )}>
            <FormItem label="ID Producto">
              <Input name = "id_producto" placeholder="Ingrese algun id producto ..." />
            </FormItem>

            <FormItem label="Precio">
              <Input name = "precio" placeholder="Ingrese algun precio ..." />
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