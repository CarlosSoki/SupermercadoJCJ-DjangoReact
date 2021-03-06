# Generated by Django 3.0.2 on 2020-03-01 01:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('supermercado', '0010_auto_20200229_1340'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='id_categoria',
            field=models.ForeignKey(help_text='Ingrese la categoria del producto', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='producto_categoria', to='supermercado.Categoria', verbose_name='Categoria Producto:'),
        ),
        migrations.AlterField(
            model_name='producto',
            name='imagen',
            field=models.FileField(blank=True, help_text='Ingrese la imagen del prodcuto', upload_to='image_produc', verbose_name='Imagen Producto:'),
        ),
    ]
