# Generated by Django 3.0.2 on 2020-03-05 05:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('supermercado', '0017_auto_20200304_2157'),
    ]

    operations = [
        migrations.AddField(
            model_name='producto',
            name='on_off',
            field=models.BooleanField(default=True, help_text='Inglese el estado del producto', verbose_name='Producto Activo:'),
        ),
    ]