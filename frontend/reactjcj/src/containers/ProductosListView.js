import React from 'react';
import axios from 'axios';

import Productos from '../components/Productos';
import CustomForm from '../components/FormProductos';

class ProductosList extends React.Component {

    state = {
        productos: []
    }

    componentDidMount(){
        axios.get("http://localhost:8000/supermercado/productoaux/")
            .then(res => {
                this.setState({
                    productos: res.data
                });
                console.log(res.data);
            })
    }

    render(){
        return(
            <div>
                <Productos data={this.state.productos} />
                <br/>
                <h2>Crear un "Producto"</h2>
                <CustomForm 
                    requestType="post"
                    productoID={null}
                    btnText="Crear"/>
            </div>
        )
    }
}

export default ProductosList;