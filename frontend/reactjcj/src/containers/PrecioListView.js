import React from 'react';
import axios from 'axios';

import Precio from '../components/Precio';
import CustomForm from '../components/FormPrecio';

class PrecioList extends React.Component {

    state = {
        precio: []
    }

    componentDidMount(){
        axios.get("http://localhost:8000/supermercado/precioaux/")
            .then(res => {
                this.setState({
                    precio: res.data
                });
                console.log(res.data);
            })
    }

    render(){
        return(
            <div>
                <Precio data={this.state.precio} />
                <br/>
                <h2>Crear un "Precio"</h2>
                <CustomForm 
                    requestType="post"
                    precioID={null}
                    btnText="Crear"/>
            </div>
        )
    }
}

export default PrecioList;