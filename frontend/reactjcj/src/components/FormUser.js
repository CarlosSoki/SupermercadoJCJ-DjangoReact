import React from 'react';
import { Form, Input, Button } from 'antd';

import axios from 'axios'

const FormItem = Form.Item; 

class CustomForm extends React.Component{

  handleFormSubmit = (event, requestType, userID) => {
    const username = event.target.elements.username.value;
    const first_name = event.target.elements.first_name.value;
    const last_name = event.target.elements.last_name.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const is_superuser = event.target.elements.is_superuser.value;

    console.log(username, first_name, last_name, email, password, is_superuser)
     
    switch ( requestType ){ 
      case 'post':  //agregarlo a la lista
          return axios.post('http://localhost:8000/supermercado/user/',{
              username: username,
              first_name: first_name,
              last_name: last_name,
              email: email,
              password: password,
              is_superuser: is_superuser
          })
          .then(res => console.log(res))
          .catch(error => console.err(error));
         
      case 'put':  //editarlo
          return axios.put(`http://localhost:8000/supermercado/user/${userID}/`,{
            username: username,
              first_name: first_name,
              last_name: last_name,
              email: email,
              password: password,
              is_superuser: is_superuser
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
              this.props.userID )}>
            <FormItem label="User Name">
              <Input name = "username" placeholder="Ingrese algun user name ..." />
            </FormItem>

            <FormItem label="Contraseña">
              <Input name = "password" placeholder="Ingrese algun contraseña ..." />
            </FormItem>

            <FormItem label="Nombre">
              <Input name = "first_name" placeholder="Ingrese algun primer nombre ..." />
            </FormItem>

            <FormItem label="Apellido">
              <Input name = "last_name" placeholder="Ingrese alguna apellido ..." />
            </FormItem>

            <FormItem label="Email">
              <Input name = "email" placeholder="Ingrese algun email ..." />
            </FormItem>

            <FormItem label="SuperUsuario (1 o true)   Normal (0 o false)">
                <Input name = "is_superuser" placeholder="Ingrese el estado ..." />
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