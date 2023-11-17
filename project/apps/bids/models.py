from django.db import models
from apps.accounts.models import Company, RadiusZipCode, ServiceCategories
from djstripe.models import Price
# Create your models here.

class Bid (models.Model):
    price = models.DecimalField(max_digits=6, decimal_places=2, default=0)
    company = models.ForeignKey(Company, on_delete=models.SET_NULL, null=True)
    zip_group = models.ForeignKey(RadiusZipCode, on_delete=models.SET_NULL, null=True)
    service = models.ForeignKey(ServiceCategories, on_delete=models.SET_NULL, null=True)

    def __str__(self) -> str:
        return f'{self.company.name} | {self.service.name}'