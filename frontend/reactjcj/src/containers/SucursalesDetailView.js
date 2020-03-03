import React from 'react';
import axios from 'axios';

import { Button, Card } from 'antd'

import CustomForm from '../components/FormSucursales'


class SucursalesDetail extends React.Component {

    state = {
        sucursales: {}
    }

    componentDidMount(){
        const sucursalesID = this.props.match.params.sucursalesID;
        axios.get(`http://localhost:8000/supermercado/sucursales/${sucursalesID}`)
            .then(res => {
                this.setState({
                    sucursales: res.data
                });
               console.log(res.data);
            })
    }

    handleDelete = (event) => {
        const sucursalesID = this.props.match.params.sucursalesID;
        axios.delete(`http://localhost:8000/supermercado/sucursales/${sucursalesID}`);
        this.props.history.push('/');
        this.forceUpdate();
    }

    render(){
        return(
            <div>
                <h3>*Sucursal*</h3>
                <Card title={this.state.sucursales.sucursal}>
                    <p>Direccion: {this.state.sucursales.direccion}</p>
                    <p>Telef: {this.state.sucursales.telefono}</p>
                    <p>Google Map: {this.state.sucursales.mapa}</p>
                </Card>
                <CustomForm 
                    requestType = "put"
                    sucursalesID= {this.props.match.params.sucursalesID} 
                    btnText="Actualizar"/>
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType = "submit">Eliminar</Button>
                    {this.recargar}
                </form>
                
            </div>
        )
    }
}

export default SucursalesDetail;