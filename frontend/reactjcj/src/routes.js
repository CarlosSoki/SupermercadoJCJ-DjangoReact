import React from 'react';
import { Route } from 'react-router-dom';

import SucursalesList from './containers/SucursalesListView';
import SucursalesDetail from './containers/SucursalesDetailView';

import ProductosList from './containers/ProductosListView';
import ProductosDetail from './containers/ProductosDetailView';

const BaseRouter = () => (
    <div> 
        <Route exact path = '/sucursales' component={SucursalesList}/>
        <Route exact path = '/sucursales/:sucursalesID' component={SucursalesDetail}/>

        <Route exact path = '/productos' component={ProductosList}/>
        <Route exact path = '/productos/:productosID' component={ProductosDetail}/>
    </div>

);

export default BaseRouter;