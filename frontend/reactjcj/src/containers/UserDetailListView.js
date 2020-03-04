import React from 'react';
import axios from 'axios';

import UserDetail from '../components/UserDetail';
import CustomForm from '../components/FormUserDetail';

class UserDetailList extends React.Component {

    state = {
        userdetail: []
    }

    componentDidMount(){
        axios.get("http://localhost:8000/supermercado/userdetailsaux/")
            .then(res => {
                this.setState({
                    userdetail: res.data
                });
                console.log(res.data);
            })
    }

    render(){
        return(
            <div>
                <UserDetail data={this.state.userdetail} />
                <br/>
                <h2>Crear un "Detalles Usuario"</h2>
                <CustomForm 
                    requestType="post"
                    userdetailID={null}
                    btnText="Crear"/>
            </div>
        )
    }
}

export default UserDetailList;