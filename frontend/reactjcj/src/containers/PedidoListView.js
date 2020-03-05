import React from 'react';
import axios from 'axios';

import CustomForm from '../components/FormPedido';
import Pedido from '../components/Pedido';

class PedidoList extends React.Component {

    state = {
        pedido: []
    }

    componentDidMount(){
        axios.get("http://localhost:8000/supermercado/detailscarritoaux/")
            .then(res => {
                this.setState({
                    pedido: res.data
                });
                console.log(res.data);
            })
    }

    render(){
        return(
            <div>
                <Pedido data={this.state.pedido} />
                <br/>
                <h2>Crear un "Pedido"</h2>
                <CustomForm 
                    requestType="post"
                    pedidoID={null}
                    btnText="Crear"/>
            </div>
        )
    }
}

export default PedidoList;