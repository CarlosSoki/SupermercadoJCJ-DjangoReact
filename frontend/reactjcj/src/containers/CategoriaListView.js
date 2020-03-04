import React from 'react';
import axios from 'axios';

import Categoria from '../components/Categoria';
import CustomForm from '../components/FormCategoria';

class CategoriaList extends React.Component {

    state = {
        categoria: []
    }

    componentDidMount(){
        axios.get("http://localhost:8000/supermercado/categoria/")
            .then(res => {
                this.setState({
                    categoria: res.data
                });
                console.log(res.data);
            })
    }

    render(){
        return(
            <div>
                <Categoria data={this.state.categoria} />
                <br/>
                <h2>Crear una "Categoria"</h2>
                <CustomForm 
                    requestType="post"
                    categoriaID={null}
                    btnText="Crear"/>
            </div>
        )
    }
}

export default CategoriaList;