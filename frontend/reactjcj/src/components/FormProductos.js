import React from 'react';
import { Form, Input, Button } from 'antd';

import axios from 'axios'

const FormItem = Form.Item; 

class CustomForm extends React.Component{

  handleFormSubmit = (event, requestType, productosID) => {
    const nombre = event.target.elements.nombre.value;
    const descripcion = event.target.elements.descripcion.value;
    const id_categoria = event.target.elements.id_categoria.value;

    console.log(nombre, descripcion, id_categoria)
    
    switch ( requestType ){ 
      case 'post':  //agregarlo a la lista
          return axios.post('http://localhost:8000/supermercado/producto/',{
              nombre: nombre,
              descripcion: descripcion,
              id_categoria: id_categoria,
          })
          .then(res => console.log(res))
          .catch(error => console.err(error));
         
      case 'put':  //editarlo
          return axios.put(`http://localhost:8000/supermercado/producto/${productosID}/`,{
              nombre: nombre,
              descripcion: descripcion,
              id_categoria: id_categoria,
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
              this.props.productosID )}>
            <FormItem label="Nombre">
              <Input name = "nombre" placeholder="Ingrese algun producto ..." />
            </FormItem>

            <FormItem label="Descripcion">
              <Input name = "descripcion" placeholder="Ingrese alguna descripcion ..." />
            </FormItem>

            <FormItem label="id_categoria">
              <Input name = "id_categoria" placeholder="Ingrese alguna Categoria ..." />
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
  
