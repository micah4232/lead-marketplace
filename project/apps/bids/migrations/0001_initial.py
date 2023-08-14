# Generated by Django 4.2.4 on 2023-08-12 12:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('accounts', '0007_alter_zipcode_code'),
    ]

    operations = [
        migrations.CreateModel(
            name='Bid',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.DecimalField(decimal_places=2, default=0, max_digits=6)),
                ('company', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.company')),
                ('service', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.servicecategories')),
                ('zip_group', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.radiuszipcode')),
            ],
        ),
    ]