# Generated by Django 3.0.2 on 2020-03-05 06:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('supermercado', '0018_producto_on_off'),
    ]

    operations = [
        migrations.AddField(
            model_name='detailscarrito',
            name='on_off',
            field=models.BooleanField(default=True, help_text='Inglese el estado del carrito', verbose_name='Carrito Activo:'),
        ),
        migrations.AddField(
            model_name='inventario',
            name='on_off',
            field=models.BooleanField(default=True, help_text='Inglese el estado del inventario', verbose_name='Inventario Activo:'),
        ),
    ]
