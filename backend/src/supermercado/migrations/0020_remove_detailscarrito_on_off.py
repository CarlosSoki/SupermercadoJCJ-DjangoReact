# Generated by Django 3.0.2 on 2020-03-05 06:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('supermercado', '0019_auto_20200305_0221'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='detailscarrito',
            name='on_off',
        ),
    ]
