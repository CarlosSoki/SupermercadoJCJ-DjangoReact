import React from 'react';
import { Form, Input, Button } from 'antd';

import axios from 'axios'

const FormItem = Form.Item; 

class CustomForm extends React.Component{

  handleFormSubmit = (event, requestType, userdetailID) => {
    const id_usuario = event.target.elements.id_usuario.value;
    const fecha_nacimiento = event.target.elements.fecha_nacimiento.value;
    const sexo = event.target.elements.sexo.value;
    const cedula = event.target.elements.cedula.value;
    const telefono = event.target.elements.telefono.value;

    console.log(id_usuario, fecha_nacimiento, sexo, cedula, telefono)
    
    switch ( requestType ){ 
      case 'post':  //agregarlo a la lista
          return axios.post('http://localhost:8000/supermercado/userdetails/',{
              id_usuario: id_usuario,
              fecha_nacimiento: fecha_nacimiento,
              sexo: sexo,
              cedula: cedula,
              telefono: telefono
          })
          .then(res => console.log(res))
          .catch(error => console.err(error));
         
      case 'put':  //editarlo
          return axios.put(`http://localhost:8000/supermercado/userdetails/${userdetailID}/`,{
            id_usuario: id_usuario,
            fecha_nacimiento: fecha_nacimiento,
            sexo: sexo,
            cedula: cedula,
            telefono: telefono
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
              this.props.userdetailID )}>
            <FormItem label="ID Usuario">
              <Input name = "id_usuario" placeholder="Ingrese algun usuario ..." />
            </FormItem>

            <FormItem label="Fecha Nacimiento">
              <Input name = "fecha_nacimiento" placeholder="Ingrese alguna fecha nacimiento ..." />
            </FormItem>

            <FormItem label="Sexo: Masculino[M] Femenino[F] Indefinido[I]">
              <Input name = "sexo" placeholder="Ingrese algun sexo ..." />
            </FormItem>

            <FormItem label="Cedula">
              <Input name = "cedula" placeholder="Ingrese alguna CI ..." />
            </FormItem>

            <FormItem label="Telefono">
              <Input name = "telefono" placeholder="Ingrese algun telefono ..." />
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
  