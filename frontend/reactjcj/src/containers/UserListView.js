import React from 'react';
import axios from 'axios';

import User from '../components/User';
import CustomForm from '../components/FormUser';

class UserList extends React.Component {

    state = {
        user: []
    }

    componentDidMount(){
        axios.get("http://localhost:8000/supermercado/user/")
            .then(res => {
                this.setState({
                    user: res.data
                });
                console.log(res.data);
            })
    }

    render(){
        return(
            <div>
                <User data={this.state.user} />
                <br/>
                <h2>Crear un "Usuario"</h2>
                <CustomForm 
                    requestType="post"
                    userID={null}
                    btnText="Create"/>
            </div>
        )
    }
}

export default UserList;