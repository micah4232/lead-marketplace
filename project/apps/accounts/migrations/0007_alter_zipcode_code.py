# Generated by Django 4.2.4 on 2023-08-11 11:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_remove_company_category_zipcode_city_zipcode_state_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='zipcode',
            name='code',
            field=models.CharField(max_length=6),
        ),
    ]