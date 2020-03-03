import React from 'react';
import { Form, Input, Button } from 'antd';

import axios from 'axios'

const FormItem = Form.Item; 

class CustomForm extends React.Component{

  handleFormSubmit = (event, requestType, sucursalesID) => {
    const sucursal = event.target.elements.sucursal.value;
    const direccion = event.target.elements.direccion.value;
    const mapa = event.target.elements.mapa.value;
    const telefono = event.target.elements.telefono.value;
    const on_off = event.target.elements.on_off.value;

    console.log(sucursal, direccion, mapa, telefono)

    switch ( requestType ){ 
        case 'post':  //agregarlo a la lista
            return axios.post('http://localhost:8000/supermercado/sucursales/',{
                sucursal: sucursal,
                direccion: direccion,
                mapa: mapa,
                telefono: telefono,
                on_off: on_off,
            })
            .then(res => console.log(res))
            .catch(error => console.err(error));
           

        case 'put':  //editarlo
            return axios.put(`http://localhost:8000/supermercado/sucursales/${sucursalesID}/`,{
                sucursal: sucursal,
                direccion: direccion,
                mapa: mapa,
                telefono: telefono,
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
            this.props.sucursalesID )}>
          <FormItem label="Sucursal">
            <Input name = "sucursal" placeholder="Ingrese la sucursal ..." />
          </FormItem>

          <FormItem label="Dirección">
            <Input name = "direccion" placeholder="Ingrese la dirección ..." />
          </FormItem>

          <FormItem label="Mapa">
            <Input name = "mapa" placeholder="Ingrese el Google map ..." />
          </FormItem>

          <FormItem label="Telefono">
            <Input name = "telefono" placeholder="Ingrese el telefono ..." />
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
