import React from 'react';
import axios from 'axios';

import Inventario from '../components/Inventario';
import CustomForm from '../components/FormInventario';

class InventarioList extends React.Component {

    state = {
        inventario: []
    }

    componentDidMount(){
        axios.get("http://localhost:8000/supermercado/inventarioaux/")
            .then(res => {
                this.setState({
                    inventario: res.data
                });
                console.log(res.data);
            })
    }

    render(){
        return(
            <div>
                <Inventario data={this.state.inventario} />
                <br/>
                <h2>Crear un "Inventario"</h2>
                <CustomForm 
                    requestType="post"
                    inventarioID={null}
                    btnText="Create"/>
            </div>
        )
    }
}

export default InventarioList;