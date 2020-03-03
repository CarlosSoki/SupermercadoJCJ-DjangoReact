import React from 'react';
import { Route } from 'react-router-dom';

import SucursalesList from './containers/SucursalesListView';
import SucursalesDetail from './containers/SucursalesDetailView';

import ProductosList from './containers/ProductosListView';
import ProductosDetail from './containers/ProductosDetailView';

import CategoriaList from './containers/CategoriaListView';
import CategoriaDetail from './containers/CategoriaDetailView';

import PrecioListView from './containers/PrecioListView';
import PrecioDetailView from './containers/PrecioDetailView';

const BaseRouter = () => (
    <div> 
        <Route exact path = '/sucursales' component={SucursalesList}/>
        <Route exact path = '/sucursales/:sucursalesID' component={SucursalesDetail}/>

        <Route exact path = '/productos' component={ProductosList}/>
        <Route exact path = '/productos/:productosID' component={ProductosDetail}/>

        <Route exact path = '/categoria' component={CategoriaList}/>
        <Route exact path = '/categoria/:categoriaID' component={CategoriaDetail}/>

        <Route exact path = '/precio' component={PrecioListView}/>
        <Route exact path = '/precio/:precioID' component={PrecioDetailView}/>
    </div>

);

export default BaseRouter;