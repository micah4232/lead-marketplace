# Generated by Django 4.2.4 on 2023-08-11 09:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_remove_companyzipmodel_company_radiuszipcode_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='company',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.maincategory'),
        ),
        migrations.AddField(
            model_name='radiuszipcode',
            name='zip_codes',
            field=models.ManyToManyField(through='accounts.CompanyZipModel', to='accounts.zipcode'),
        ),
    ]