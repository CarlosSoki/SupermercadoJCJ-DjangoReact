# Generated by Django 3.0.2 on 2020-03-05 01:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('supermercado', '0016_auto_20200304_2043'),
    ]

    operations = [
        migrations.AlterField(
            model_name='detailscarrito',
            name='id_pedido',
            field=models.ForeignKey(blank=True, help_text='Ingrese el pedido', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='detailscarrito_pedido', to='supermercado.Pedido', unique=True, verbose_name='Pedido:'),
        ),
    ]
