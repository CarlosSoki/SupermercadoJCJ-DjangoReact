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
                <Card title={this.state.productos.nombre}>
                    <p>{this.state.productos.descripcion}</p>
                </Card>
                <CustomForm 
                    requestType = "put"
                    productosID= {this.props.match.params.productosID} 
                    btnText="Update"/>  
            </div>
            
        )
    }
}

export default ProductosDetail;