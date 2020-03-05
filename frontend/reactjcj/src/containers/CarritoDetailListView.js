import React from 'react';
import axios from 'axios';

import CarritoDetail from '../components/CarritoDetail';
import CustomForm from '../components/FormCarritoDetail';

class CarritoDetailList extends React.Component {

    state = {
        carritodetail: []
    }

    componentDidMount(){
        axios.get("http://localhost:8000/supermercado/detailscarritoaux/")
            .then(res => {
                this.setState({
                    carritodetail: res.data
                });
                console.log(res.data);
            })
    }

    render(){
        return(
            <div>
                <CarritoDetail data={this.state.carritodetail} />
                <br/>
                <h2>Agregar al "Carrito"</h2>
                <CustomForm 
                    requestType="post"
                    carritodetailID={null}
                    btnText="Crear"/>
            </div>
        )
    }
}

export default CarritoDetailList;