import React from 'react';
import axios from 'axios';

import { Button, Card } from 'antd'

import CustomForm from '../components/FormCategoria';



class CategoriaDetail extends React.Component {

    state = {
        categoria: {}
    }

    componentDidMount(){
        const categoriaID = this.props.match.params.categoriaID;
        axios.get(`http://localhost:8000/supermercado/categoria/${categoriaID}`)
            .then(res => {
                this.setState({
                    categoria: res.data
                });
               console.log(res.data);
            })
    }

    handleDelete = (event) => {
        const categoriaID = this.props.match.params.categoriaID;
        axios.delete(`http://localhost:8000/supermercado/categoria/${categoriaID}`);
        this.props.history.push('/');
        this.forceUpdate();
    }

    render(){
        return(
            <div> 
                <h3>*Categoria*</h3>
                <Card title={this.state.categoria.nombre_categoria}>
                    <h4>Nombre Categoria: {this.state.categoria.nombre_categoria}</h4>
                </Card>
                <CustomForm 
                    requestType = "put"
                    categoriaID= {this.props.match.params.categoriaID} 
                    btnText="Actualizar"/>  
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType= "submit">Eliminar</Button>
                </form>
            </div>
            
        )
    }
}

export default CategoriaDetail;