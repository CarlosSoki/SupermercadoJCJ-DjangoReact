import React from 'react';
import axios from 'axios';

import { Button, Card } from 'antd'

import CustomForm from '../components/FormProductos';



class ProductosDetail extends React.Component {

    state = {
        productos: {}
    }

    componentDidMount(){
        const productosID = this.props.match.params.productosID;
        axios.get(`http://localhost:8000/supermercado/producto/${productosID}`)
            .then(res => {
                this.setState({
                    productos: res.data
                });
               console.log(res.data);
            })
    }

    handleDelete = (event) => {
        const productosID = this.props.match.params.productosID;
        axios.delete(`http://localhost:8000/supermercado/producto/${productosID}`);
        this.props.history.push('/');
        this.forceUpdate();
    }

    render(){
        return(
            <div> 
                <h3>*Producto*</h3>
                <Card title={this.state.productos.nombre}>
                    <h4>Descripcion: {this.state.productos.descripcion}</h4>
                    <h4>Categoria: ({this.state.productos.id_categoria})</h4>
                </Card>
                <CustomForm 
                    requestType = "put"
                    productosID= {this.props.match.params.productosID} 
                    btnText="Actualizar"/>  
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType= "submit">Eliminar</Button>
                </form>
            </div>
            
        )
    }
}

export default ProductosDetail;