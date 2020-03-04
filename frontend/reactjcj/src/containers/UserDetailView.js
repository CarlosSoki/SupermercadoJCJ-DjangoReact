import React from 'react';
import axios from 'axios';

import { Button, Card } from 'antd'

import CustomForm from '../components/FormUser';



class UserDetail extends React.Component {

    state = {
        user: {}
    }

    componentDidMount(){
        const userID = this.props.match.params.userID;
        axios.get(`http://localhost:8000/supermercado/user/${userID}`)
            .then(res => {
                this.setState({
                    user: res.data
                });
               console.log(res.data);
            })
    }

    handleDelete = (event) => {
        const userID = this.props.match.params.userID;
        axios.delete(`http://localhost:8000/supermercado/user/${userID}`);
        this.props.history.push('/');
        this.forceUpdate();
    }

    render(){
        return(
            <div> 
                <h3>*Usuario*</h3>
                <Card title={this.state.user.username}>
                    <h4>User Name: ID:({this.state.user.id}) "{this.state.user.username}" </h4>
                    <h4>Nombre: "{this.state.user.first_name}"</h4>
                    <h4>Apellido: "{this.state.user.last_name}"</h4>
                    <h4>Email: "{this.state.user.email}"</h4>
                </Card>
                <CustomForm 
                    requestType = "put"
                    userID= {this.props.match.params.userID} 
                    btnText="Actualizar"/>  
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType= "submit">Eliminar</Button>
                </form>
            </div>
            
        )
    }
}

export default UserDetail;