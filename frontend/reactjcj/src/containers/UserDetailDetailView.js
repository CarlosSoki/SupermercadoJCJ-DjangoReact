import React from 'react';
import axios from 'axios';

import { Button, Card } from 'antd'

import CustomForm from '../components/FormUserDetail';



class UserDetailDetail extends React.Component {

    state = {
        userdetail: {}
    }

    componentDidMount(){
        const userdetailID = this.props.match.params.userdetailID;
        axios.get(`http://localhost:8000/supermercado/userdetails/${userdetailID}`)
            .then(res => {
                this.setState({
                    userdetail: res.data
                });
               console.log(res.data);
            })
    }

    handleDelete = (event) => {
        const userdetailID = this.props.match.params.userdetailID;
        axios.delete(`http://localhost:8000/supermercado/userdetails/${userdetailID}`);
        this.props.history.push('/');
        this.forceUpdate();
    }

    render(){
        return(
            <div> 
                <h3>*Detalles Usuario*</h3>
                <Card title={this.state.userdetail.id}>
                    <h4>Usuario: {this.state.userdetail.id_usuario}</h4>
                    <h4>Fecha Nacimiento: {this.state.userdetail.fecha_nacimiento}</h4>
                    <h4>Sexo: {this.state.userdetail.sexo}</h4>
                    <h4>Cedula: {this.state.userdetail.cedula}</h4>
                    <h4>Telefono: {this.state.userdetail.telefono}</h4>
                </Card>
                <CustomForm 
                    requestType = "put"
                    userdetailID= {this.props.match.params.userdetailID} 
                    btnText="Actualizar"/>  
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType= "submit">Eliminar</Button>
                </form>
            </div>
            
        )
    }
}

export default UserDetailDetail;