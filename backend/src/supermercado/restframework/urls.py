from django.urls import path, include
from .import views
from rest_framework import routers

router = routers.DefaultRouter()


router.register('supermercado/sucursales', views.SucursalesView)#
router.register('supermercado/productoaux', views.ProductoAuxView) 
router.register('supermercado/categoria', views.CategoriaView)#
router.register('supermercado/precioaux', views.PrecioAux2View)
router.register('supermercado/inventarioaux', views.InventarioAuxView) 
router.register('supermercado/user', views.UserView)#
router.register('supermercado/userdetailsaux', views.UserDetailsAuxView) 
router.register('supermercado/detailscarrito', views.DetailsCarritoView)#
router.register('supermercado/pedido', views.PedidoView)#

router.register('supermercado/producto', views.ProductoView)#
router.register('supermercado/precio', views.PrecioView)#
router.register('supermercado/inventario', views.InventarioView)#
router.register('supermercado/userdetails', views.UserDetailsView)#



urlpatterns = [
    path('', include(router.urls))
]