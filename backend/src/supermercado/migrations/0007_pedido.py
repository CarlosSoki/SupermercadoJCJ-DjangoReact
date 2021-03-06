# Generated by Django 3.0.2 on 2020-02-29 17:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('supermercado', '0006_auto_20200229_1255'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pedido',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('precio_venta', models.PositiveIntegerField(help_text='Inglese el precio total', verbose_name='Precio total:')),
                ('fecha_venta', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
