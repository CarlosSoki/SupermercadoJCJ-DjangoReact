from rest_framework import serializers
from supermercado.models import Sucursales
from supermercado.models import Categoria
from supermercado.models import Producto
from supermercado.models import Precio
from supermercado.models import Inventario
from supermercado.models import UserDetails
from supermercado.models import DetailsCarrito
from supermercado.models import Pedido
from django.contrib.auth.models import User 

#####################################################################################
class SucursalesSerializer(serializers.ModelSerializer): #Serializer de sucursales
    class Meta: 
        model = Sucursales
        fields = ['id','url', 'sucursal', 'direccion', 'mapa', 'telefono', 'on_off']
#####################################################################################
class CategoriaSerializer(serializers.ModelSerializer):  #serializer de categorias para productos
    class Meta: 
        model = Categoria
        fields = ['id','url', 'nombre_categoria']
#####################################################################################
class PrecioAuxSerializer(serializers.ModelSerializer):  #serializer para productos
    class Meta: 
        model = Precio
        fields = ['precio', 'fecha_hora']

class ProductoSerializer(serializers.ModelSerializer): 
    precio_producto = serializers.SerializerMethodField()
    class Meta: 
        model = Producto
        fields = ['id','url', 'nombre', 'descripcion', 'imagen', 'on_off' ,'id_categoria','precio_producto']
        #depth = 1
    def get_precio_producto(self, producto): 
        precio = Precio.objects.filter(id_producto=producto).last()
        serializer = PrecioAuxSerializer(instance=precio)
        return serializer.data 
#####################################################################################
class PrecioSerializer(serializers.ModelSerializer): #serializer para precios de productos
    class Meta: 
        model = Precio
        fields = ['id','url', 'id_producto', 'fecha_hora', 'precio']
#####################################################################################
class InventarioSerializer(serializers.ModelSerializer):  #serializer para inventarios
    class Meta: 
        model = Inventario
        fields = ['id','url', 'unidades_ex', 'id_sucursal', 'id_producto', 'on_off']
#####################################################################################
class UsersSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User
        fields = ['id','url', 'password','is_superuser', 'username', 'first_name', 'last_name','email', 'date_joined', 'last_login']
#####################################################################################
class UserDetailsSerializer(serializers.ModelSerializer): #serializer para detalles de usuario
    class Meta: 
        model = UserDetails
        fields = ['id','url', 'id_usuario', 'fecha_nacimiento', 'sexo', 'cedula', 'telefono']
#####################################################################################
class DetailsCarritoSerializer(serializers.ModelSerializer): #serializer para detalles carrito
    class Meta: 
        model = DetailsCarrito
        fields = ['id','url', 'id_usuario', 'id_inventario', 'cantidad', 'status', 'id_pedido']
#####################################################################################
class PedidoSerializer(serializers.ModelSerializer):  #serializer para pedidos
    class Meta: 
        model = Pedido
        fields = ['id','url', 'precio_venta', 'fecha_venta']
#####################################################################################
#####################################################################################
class PrecioAux2Serializer(serializers.ModelSerializer): #Para Precio View
    class Meta: 
        model = Precio
        fields = ['id','url','fecha_hora', 'precio','id_producto']
        depth = 1
#####################################################################################
class ProductoAuxSerializer(serializers.ModelSerializer):  #Para Producto View
    precio_producto = serializers.SerializerMethodField()
    id_categoria = CategoriaSerializer()
    class Meta: 
        model = Producto
        fields = ['id','url', 'nombre', 'descripcion', 'imagen', 'on_off', 'id_categoria','precio_producto']
        #depth = 1
    def get_precio_producto(self, producto): 
        precio = Precio.objects.filter(id_producto=producto).last()
        serializer = PrecioAuxSerializer(instance=precio)
        return serializer.data 
#####################################################################################
class InventarioAuxSerializer(serializers.ModelSerializer):  #serializer inventarios View
    id_producto = ProductoAuxSerializer()
    class Meta:
        model = Inventario
        fields = ['id','url', 'unidades_ex', 'id_sucursal', 'id_producto', 'on_off']
        depth = 2
#####################################################################################
class UserDetailsAuxSerializer(serializers.ModelSerializer): #serializer para detalles de usuario View
    id_usuario = UsersSerializer()
    class Meta: 
        model = UserDetails
        fields = ['id','url', 'id_usuario', 'fecha_nacimiento', 'sexo', 'cedula', 'telefono']
#####################################################################################
class DetailsCarritoAuxSerializer(serializers.ModelSerializer): #serializer para detalles carrito
    id_inventario = InventarioAuxSerializer()
    id_usuario = UsersSerializer()
    id_pedido = PedidoSerializer()
    class Meta: 
        model = DetailsCarrito
        fields = ['id','url', 'id_usuario', 'id_inventario', 'cantidad', 'status', 'id_pedido']
#####################################################################################
class PedidoAuxSerializer(serializers.ModelSerializer):  #serializer para pedidos
    detailscarrito_pedido = DetailsCarritoAuxSerializer(many=True)
    class Meta: 
        model = Pedido
        fields = ['id','url', 'precio_venta', 'fecha_venta', 'detailscarrito_pedido']
#####################################################################################
