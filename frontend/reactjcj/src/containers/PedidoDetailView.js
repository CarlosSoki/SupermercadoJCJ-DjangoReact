import React from 'react';
import axios from 'axios';

import { Button, Card } from 'antd'

import CustomForm from '../components/FormPedido';



class PedidoDetail extends React.Component {

    state = {
        pedido: {}
    }

    componentDidMount(){
        const pedidoID = this.props.match.params.pedidoID;
        axios.get(`http://localhost:8000/supermercado/pedido/${pedidoID}`)
            .then(res => {
                this.setState({
                    pedido: res.data
                });
               console.log(res.data);
            })
    }

    handleDelete = (event) => {
        const pedidoID = this.props.match.params.pedidoID;
        axios.delete(`http://localhost:8000/supermercado/pedido/${pedidoID}`);
        this.props.history.push('/');
        this.forceUpdate();
    }

    render(){
        return(
            <div> 
                <h3>*Pedido*</h3>
                <Card title={this.state.pedido.id}>
                    <h4>Precio Venta: {this.state.pedido.precio_venta} $</h4>
                    <h4>Fecha Venta: {this.state.pedido.fecha_venta}</h4>
                </Card>
                <CustomForm 
                    requestType = "put"
                    pedidoID= {this.props.match.params.pedidoID} 
                    btnText="Actualizar"/>  
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType= "submit">Eliminar</Button>
                </form>
            </div>
            
        )
    }
}

export default PedidoDetail;