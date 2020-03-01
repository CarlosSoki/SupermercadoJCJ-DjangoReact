import React from 'react';
import axios from 'axios';

import Sucursales from '../components/Sucursales';
import CustomForm from '../components/FormSucursales';

class SucursalesList extends React.Component {

    state = {
        sucursales: []
    }

    componentDidMount(){
        axios.get('http://localhost:8000/supermercado/sucursales/')
            .then(res => {
                this.setState({
                    sucursales: res.data
                });
               console.log(res.data);
            })
    }

    render(){
        return(
            <div>
                <Sucursales data={this.state.sucursales} />
                <br/>
                <h2>Crear una "Sucursal"</h2>
                <CustomForm 
                    requestType="post"
                    sucursalesID={null}
                    btnText="Create"/>
            </div>
        )
    }
}

export default SucursalesList;