# Generated by Django 3.0.2 on 2020-03-01 19:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('supermercado', '0012_auto_20200229_2316'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='imagen',
            field=models.ImageField(blank=True, default='image_produc/default.jpg', help_text='Ingrese la imagen del prodcuto', upload_to='image_produc', verbose_name='Imagen Producto:'),
        ),
    ]
