import React from 'react';
import { Form, Input, Button } from 'antd';

import axios from 'axios'

const FormItem = Form.Item; 

class CustomForm extends React.Component{

  handleFormSubmit = (event, requestType, carritodetailID) => {
    const id_usuario = event.target.elements.id_usuario.value;
    const id_inventario = event.target.elements.id_inventario.value;
    const cantidad = event.target.elements.cantidad.value;
    const status = event.target.elements.status.value;
    const id_pedido = event.target.elements.id_pedido.value;

    console.log(id_usuario, id_inventario, cantidad, status, id_pedido)
    
    switch ( requestType ){ 
      case 'post':  //agregarlo a la lista
          return axios.post('http://localhost:8000/supermercado/detailscarrito/',{
              id_usuario: id_usuario,
              id_inventario: id_inventario,
              cantidad: cantidad,
              status: status,
              id_pedido: id_pedido,
          })
          .then(res => console.log(res))
          .catch(error => console.err(error));
         
      case 'put':  //editarlo
          return axios.put(`http://localhost:8000/supermercado/detailscarrito/${carritodetailID}/`,{
            id_usuario: id_usuario,
            id_inventario: id_inventario,
            cantidad: cantidad,
            status: status,
            id_pedido: id_pedido,
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
              this.props.carritodetailID )}>
            <FormItem label="ID Usuario">
              <Input name = "id_usuario" placeholder="Ingrese algun usuario ..." />
            </FormItem>

            <FormItem label="ID Inventario">
              <Input name = "id_inventario" placeholder="Ingrese algun inventario ..." />
            </FormItem>

            <FormItem label="Cantidad">
              <Input name = "cantidad" placeholder="Ingrese alguna cantiad ..." />
            </FormItem>

            <FormItem label="Status Pedido[P] Carrito[C]">
              <Input name = "status" placeholder="Ingrese el estatus ..." />
            </FormItem>

            <FormItem label="ID Pedido">
              <Input name = "id_pedido" placeholder="Ingrese el ID del Pedido ..." />
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
  