# Generated by Django 5.1.2 on 2024-10-29 22:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('player_stat', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='playerstat',
            name='creation_date',
            field=models.DateTimeField(),
        ),
    ]