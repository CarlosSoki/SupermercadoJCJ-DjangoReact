import React from 'react';
import axios from 'axios';

import { Button, Card } from 'antd'

import CustomForm from '../components/FormCarritoDetail';

class CarritoDetailDetail extends React.Component {

    state = {
        carritodetail: {}
    }

    componentDidMount(){
        const carritodetailID = this.props.match.params.carritodetailID;
        axios.get(`http://localhost:8000/supermercado/detailscarrito/${carritodetailID}`)
            .then(res => {
                this.setState({
                    carritodetail: res.data
                });
               console.log(res.data);
            })
    }

    handleDelete = (event) => {
        const carritodetailID = this.props.match.params.carritodetailID;
        axios.delete(`http://localhost:8000/supermercado/detailscarrito/${carritodetailID}`);
        this.props.history.push('/');
        this.forceUpdate();
    }

    render(){
        return(
            <div> 
                <h3>*Carrito Detalles*</h3>
                <Card title={this.state.carritodetail.id}>
                    <h4>Usuario ID: ({this.state.carritodetail.id_usuario})</h4>
                    <h4>Inventario ID: ({this.state.carritodetail.id_inventario})</h4>
                    <h4>Cantidad: {this.state.carritodetail.cantidad}</h4>
                    <h4>Status: "{this.state.carritodetail.status} Pedido[P] Carrito[C]</h4>
                    <h4>Pedido ID: ({this.state.carritodetail.id_pedido})</h4>
                </Card>
                <CustomForm 
                    requestType = "put"
                    carritodetailID= {this.props.match.params.carritodetailID} 
                    btnText="Actualizar"/>  
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType= "submit">Eliminar</Button>
                </form>
            </div>
            
        )
    }
}

export default CarritoDetailDetail;