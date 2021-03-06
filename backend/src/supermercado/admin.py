from django.contrib import admin
from .models import Sucursales, Categoria, Producto, Inventario, Precio, UserDetails, DetailsCarrito, Pedido
#########################################################################
class SucursalesAdmin(admin.ModelAdmin):

    list_display = ('id','sucursal', 'direccion','telefono', 'mapa', 'on_off')
    list_filter = ('on_off',)
    search_fields = ('sucursal',)
    ordering = ('id',)

admin.site.register(Sucursales, SucursalesAdmin)
#########################################################################
class CategoriaAdmin(admin.ModelAdmin):

    list_display = ('nombre_categoria','id',)
    #list_filter = ()
    search_fields = ('nombre_categoria',)
    ordering = ('nombre_categoria',)

admin.site.register(Categoria, CategoriaAdmin)
#########################################################################
class ProductoAdmin(admin.ModelAdmin):

    list_display = ('id','nombre','descripcion', 'imagen', 'id_categoria_id','id_categoria','on_off')
    list_filter = ('id_categoria','on_off')
    search_fields = ('nombre',)
    ordering = ('id',)

admin.site.register(Producto, ProductoAdmin)
#########################################################################
class InventarioAdmin(admin.ModelAdmin):

    list_display = ('id','id_sucursal_id','id_sucursal','id_producto_id','id_producto','unidades_ex', 'on_off')
    list_filter = ('id_sucursal','id_producto', 'on_off')
    #search_fields = ('id_sucursal',)
    ordering = ('id_sucursal_id','id_producto_id')

admin.site.register(Inventario, InventarioAdmin)
#########################################################################
class PrecioAdmin(admin.ModelAdmin):

    list_display = ('id','id_producto','id_producto_id', 'fecha_hora', 'precio')
    list_filter = ('id_producto_id',)
    #search_fields = ('id_producto',)
    ordering = ('id_producto','-fecha_hora',)

admin.site.register(Precio, PrecioAdmin)
#########################################################################
class UserDetailsAdmin(admin.ModelAdmin):

    list_display = ('id','id_usuario_id','id_usuario','fecha_nacimiento','sexo','cedula','telefono')
    list_filter = ('sexo',)
    #search_fields = ('id_usuario',)
    ordering = ('id',)

admin.site.register(UserDetails, UserDetailsAdmin)
#########################################################################
class PedidoAdmin(admin.ModelAdmin):

    list_display = ('id', 'precio_venta', 'fecha_venta')
    #list_filter = ('id_usuario','id_inventario', 'status')
    #search_fields = ('id_sucursal',)
    ordering = ('id',)

admin.site.register(Pedido, PedidoAdmin)
#########################################################################
class DetailsCarritoAdmin(admin.ModelAdmin):

    list_display = ('id','id_usuario_id','id_usuario','id_inventario','id_inventario_id','cantidad','status', 'id_pedido')
    list_filter = ('id_usuario','id_inventario', 'status')
    #search_fields = ('id_sucursal',)
    ordering = ('id',)

admin.site.register(DetailsCarrito, DetailsCarritoAdmin)
#########################################################################