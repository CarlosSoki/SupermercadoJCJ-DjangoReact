import React from 'react';
import axios from 'axios';

import { Button, Card } from 'antd'

import CustomForm from '../components/FormPrecio';



class PrecioDetail extends React.Component {

    state = {
        precio: {}
    }

    componentDidMount(){
        const precioID = this.props.match.params.precioID;
        axios.get(`http://localhost:8000/supermercado/precio/${precioID}`)
            .then(res => {
                this.setState({
                    precio: res.data
                });
               console.log(res.data);
            })
    }

    handleDelete = (event) => {
        const precioID = this.props.match.params.precioID;
        axios.delete(`http://localhost:8000/supermercado/precio/${precioID}`);
        this.props.history.push('/');
        this.forceUpdate();
    }

    render(){
        return(
            <div> 
                <h3>*Precio*</h3>
                <Card title={this.state.precio.id}>
                    <h4>ID Producto: ({this.state.precio.id_producto})</h4>
                    <h4>Fecha Fijada: {this.state.precio.fecha_hora}</h4>
                    <h4>Precio Fijado: {this.state.precio.precio} $</h4>
                </Card>
                
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType= "hide">Eliminar</Button>
                </form>
            </div>
            
        )
    }
}

export default PrecioDetail;