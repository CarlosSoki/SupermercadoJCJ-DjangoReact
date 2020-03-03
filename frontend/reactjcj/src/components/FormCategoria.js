import React from 'react';
import { Form, Input, Button } from 'antd';

import axios from 'axios'

const FormItem = Form.Item; 

class CustomForm extends React.Component{

  handleFormSubmit = (event, requestType, categoriaID) => {
    const nombre_categoria = event.target.elements.nombre_categoria.value;

    console.log(nombre_categoria)
    
    switch ( requestType ){ 
      case 'post':  //agregarlo a la lista
          return axios.post('http://localhost:8000/supermercado/categoria/',{
            nombre_categoria: nombre_categoria,
          })
          .then(res => console.log(res))
          .catch(error => console.err(error));
         
      case 'put':  //editarlo
          return axios.put(`http://localhost:8000/supermercado/categoria/${categoriaID}/`,{
            nombre_categoria: nombre_categoria,
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
              this.props.categoriaID )}>
            <FormItem label="Nombre Categoria">
              <Input name = "nombre_categoria" placeholder="Ingrese el Nombre Categoria ..." />
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
  
