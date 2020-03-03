import React from 'react';
import { Route } from 'react-router-dom';

import SucursalesList from './containers/SucursalesListView';
import SucursalesDetail from './containers/SucursalesDetailView';

import ProductosList from './containers/ProductosListView';
import ProductosDetail from './containers/ProductosDetailView';

import CategoriaList from './containers/CategoriaListView'
import CategoriaDetail from './containers/CategoriaDetailView';

const BaseRouter = () => (
    <div> 
        <Route exact path = '/sucursales' component={SucursalesList}/>
        <Route exact path = '/sucursales/:sucursalesID' component={SucursalesDetail}/>

        <Route exact path = '/productos' component={ProductosList}/>
        <Route exact path = '/productos/:productosID' component={ProductosDetail}/>

        <Route exact path = '/categoria' component={CategoriaList}/>
        <Route exact path = '/categoria/:categoriaID' component={CategoriaDetail}/>
    </div>

);

export default BaseRouter;