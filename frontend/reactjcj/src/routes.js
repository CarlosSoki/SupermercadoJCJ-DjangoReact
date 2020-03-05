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

import UserDetailList from './containers/UserDetailListView';
import UserDetailDetail from './containers/UserDetailDetailView';

import CarritoDetailList from './containers/CarritoDetailListView';
import CarritoDetailsDetail from './containers/CarritoDetailsDetailView';

import PedidoDetailList from './containers/PedidoListView';
import PedidoDetailDetail from './containers/PedidoDetailView';

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

        <Route exact path = '/userdetail' component={UserDetailList}/>
        <Route exact path = '/userdetail/:userdetailID' component={UserDetailDetail}/>

        <Route exact path = '/carritodetail' component={CarritoDetailList}/>
        <Route exact path = '/carritodetail/:carritodetailID' component={CarritoDetailsDetail}/>

        <Route exact path = '/pedido' component={PedidoDetailList}/>
        <Route exact path = '/pedido/:pedidoID' component={PedidoDetailDetail}/>
    </div>

);

export default BaseRouter;