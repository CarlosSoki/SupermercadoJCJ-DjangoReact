import React from 'react';
import axios from 'axios';

import { Button, Card } from 'antd'

import CustomForm from '../components/FormInventario';



class InventarioDetail extends React.Component {

    state = {
        inventario: {}
    }

    componentDidMount(){
        const inventarioID = this.props.match.params.inventarioID;
        axios.get(`http://localhost:8000/supermercado/inventario/${inventarioID}`)
            .then(res => {
                this.setState({
                    inventario: res.data
                });
               console.log(res.data);
            })
    }

    handleDelete = (event) => {
        const inventarioID = this.props.match.params.inventarioID;
        axios.delete(`http://localhost:8000/supermercado/inventario/${inventarioID}`);
        this.props.history.push('/');
        this.forceUpdate();
    }

    render(){
        return(
            <div> 
                <h3>*Inventario*</h3>
                <Card title={this.state.inventario.id}>
                    <h4>Sucursal ID: {this.state.inventario.id_sucursal}</h4>
                    <h4>Producto ID: ({this.state.inventario.id_producto})</h4>
                    <h4>Unidades Existentes: ({this.state.inventario.unidades_ex})</h4>
                </Card>
                <CustomForm 
                    requestType = "put"
                    inventarioID= {this.props.match.params.inventarioID} 
                    btnText="Actualizar"/>  
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType= "submit">Eliminar</Button>
                </form>
            </div>
            
        )
    }
}

export default InventarioDetail;