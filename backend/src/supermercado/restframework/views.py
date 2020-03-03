from django.shortcuts import render
from rest_framework import viewsets
from supermercado.models import Sucursales
from supermercado.models import Categoria
from supermercado.models import Producto
from supermercado.models import Precio
from supermercado.models import Inventario
from supermercado.models import UserDetails
from supermercado.models import DetailsCarrito
from supermercado.models import Pedido

from .serializers import SucursalesSerializer
from .serializers import CategoriaSerializer
from .serializers import InventarioSerializer
from .serializers import PrecioSerializer
from .serializers import ProductoSerializer
from .serializers import UserDetailsSerializer
from .serializers import DetailsCarritoSerializer
from .serializers import PedidoSerializer

from .serializers import PrecioAux2Serializer
from .serializers import ProductoAuxSerializer

class SucursalesView(viewsets.ModelViewSet):
    queryset = Sucursales.objects.all()
    serializer_class = SucursalesSerializer    

class SucursalesView(viewsets.ModelViewSet):
    queryset = Sucursales.objects.filter(on_off = True) 
    serializer_class = SucursalesSerializer  

class CategoriaView(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer    

class InventarioView(viewsets.ModelViewSet):
    queryset = Inventario.objects.all()
    serializer_class = InventarioSerializer

class PrecioView(viewsets.ModelViewSet):
    queryset = Precio.objects.order_by('id_producto', '-fecha_hora')
    serializer_class = PrecioSerializer

class ProductoView(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class UserDetailsView(viewsets.ModelViewSet):
    queryset = UserDetails.objects.all()
    serializer_class = UserDetailsSerializer

class DetailsCarritoView(viewsets.ModelViewSet):
    queryset = DetailsCarrito.objects.all()
    serializer_class = DetailsCarritoSerializer

class PedidoView(viewsets.ModelViewSet):
    queryset = Pedido.objects.all()
    serializer_class = PedidoSerializer



class PrecioAux2View(viewsets.ModelViewSet):
    queryset = Precio.objects.order_by('id_producto', '-fecha_hora')
    serializer_class = PrecioAux2Serializer

class ProductoAuxView(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoAuxSerializer