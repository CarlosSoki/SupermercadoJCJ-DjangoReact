# Generated by Django 3.0.2 on 2020-02-29 17:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('supermercado', '0009_detailscarrito_userdetails'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='detailscarrito',
            options={'verbose_name': 'Detalle Carrito', 'verbose_name_plural': 'Detalles Carrito'},
        ),
        migrations.AlterModelOptions(
            name='pedido',
            options={'verbose_name': 'Pedido', 'verbose_name_plural': 'Pedidos'},
        ),
    ]
