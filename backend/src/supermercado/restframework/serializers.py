from rest_framework import serializers
from supermercado.models import Sucursales
from supermercado.models import Categoria
from supermercado.models import Producto
from supermercado.models import Precio
from supermercado.models import Inventario
from supermercado.models import UserDetails
from supermercado.models import DetailsCarrito
from supermercado.models import Pedido

#####################################################################################
class SucursalesSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Sucursales
        fields = ['id','url', 'sucursal', 'direccion', 'mapa', 'telefono', 'on_off']
#####################################################################################
class CategoriaSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Categoria
        fields = ['id','url', 'nombre_categoria']
#####################################################################################
class InventarioSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Inventario
        fields = ['id','url', 'id_sucursal', 'id_producto', 'unidades_ex']
        ##depth = 1
#####################################################################################
class PrecioSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Precio
        fields = ['id','url', 'id_producto', 'fecha_hora', 'precio']
#####################################################################################
class PrecioAuxSerializer(serializers.ModelSerializer): 

    class Meta: 
        model = Precio
        fields = ['fecha_hora', 'precio']

class ProductoSerializer(serializers.ModelSerializer): 
    #precio_producto = PrecioAuxSerializer(many=True)
    class Meta: 
        model = Producto
        fields = ['id','url', 'nombre', 'descripcion', 'imagen', 'id_categoria']
        #depth = 1
        
#####################################################################################
class UserDetailsSerializer(serializers.ModelSerializer):
    class Meta: 
        model = UserDetails
        fields = ['id','url', 'id_usuario', 'fecha_nacimiento', 'sexo', 'cedula', 'telefono']
#####################################################################################
class DetailsCarritoSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = DetailsCarrito
        fields = ['id','url', 'id_usuario', 'id_inventario', 'cantidad', 'status', 'id_pedido']
#####################################################################################
class PedidoSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Pedido
        fields = ['id','url', 'precio_venta', 'fecha_venta']
#####################################################################################