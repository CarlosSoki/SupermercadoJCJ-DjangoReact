import React from 'react';
import { Form, Input, Button } from 'antd';

import axios from 'axios'

const FormItem = Form.Item; 

class CustomForm extends React.Component{

  handleFormSubmit = (event, requestType, inventarioID) => {
    const id_sucursal = event.target.elements.id_sucursal.value;
    const id_producto = event.target.elements.id_producto.value;
    const unidades_ex = event.target.elements.unidades_ex.value;
    const on_off = event.target.elements.on_off.value;

    console.log(unidades_ex, id_sucursal, id_producto, on_off)
    
    switch ( requestType ){ 
      case 'post':  //agregarlo a la lista
          return axios.post('http://localhost:8000/supermercado/inventario/',{
            unidades_ex: unidades_ex,
            id_sucursal: id_sucursal,
            id_producto: id_producto,
            on_off: on_off,
          })
          .then(res => console.log(res))
          .catch(error => console.err(error));
         
      case 'put':  //editarlo
          return axios.put(`http://localhost:8000/supermercado/inventario/${inventarioID}/`,{
            unidades_ex: unidades_ex,
            id_sucursal: id_sucursal,
            id_producto: id_producto,
            on_off: on_off,
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
              this.props.inventarioID )}>
            <FormItem label="Sucural">
              <Input name = "id_sucursal" placeholder="Ingrese alguna sucursal ..." />
            </FormItem>

            <FormItem label="Producto">
              <Input name = "id_producto" placeholder="Ingrese algun producto ..." />
            </FormItem>

            <FormItem label="Unidades Existentes">
              <Input name = "unidades_ex" placeholder="Ingrese alguna Categoria ..." />
            </FormItem>

            <FormItem label="Activa (1 o True)   Inactiva (0 o false)">
              <Input name = "on_off" placeholder="Ingrese el estado ..." />
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
  
