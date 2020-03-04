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

import InventarioListView from './containers/InventarioListView';
import InventarioDetailView from './containers/InventarioDetailView';

import UserListView from './containers/UserListView';
import UserDetailView from './containers/UserDetailView';

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

        <Route exact path = '/inventario' component={InventarioListView}/>
        <Route exact path = '/inventario/:inventarioID' component={InventarioDetailView}/>

        <Route exact path = '/user' component={UserListView}/>
        <Route exact path = '/user/:userID' component={UserDetailView}/>
    </div>

);

export default BaseRouter;