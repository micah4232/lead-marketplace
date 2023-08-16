from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class ZipCode(models.Model):
    code = models.CharField(max_length=6)
    state = models.CharField(max_length=255, null=True, blank=True)
    city = models.CharField(max_length=255, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)

    def __str__(self) -> str:
        return self.code

class MainCategory(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)

    def __str__(self) -> str:
        return self.name
    

class SubCategory(models.Model):
    name = models.CharField(max_length=255)
    main_category = models.ForeignKey(MainCategory, on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)

    def __str__(self) -> str:
        return self.name

class ServiceCategories(models.Model):
    name = models.CharField(max_length=255)
    sub_category = models.ForeignKey(SubCategory, on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)

    def __str__(self) -> str:
        return self.name

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=255)
    website = models.URLField()
    phone_number_for_lead = models.CharField(max_length=16, null=True, blank=True)
    services = models.ManyToManyField(ServiceCategories, through='CompanyServices')
    enable_calls_to_number = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=False, auto_now=True)

    def __str__(self) -> str:
        return self.name

class CompanyServices(models.Model):
    service = models.ForeignKey(ServiceCategories, on_delete=models.SET_NULL, null=True)
    company = models.ForeignKey(Company, on_delete=models.SET_NULL, null=True)


class Profile(models.Model):
    company = models.OneToOneField(Company, on_delete=models.SET_NULL, null=True)
    user = models.OneToOneField(User, on_delete=models.SET_NULL, null=True)

class RadiusZipCode(models.Model):
    name = models.CharField(max_length=255)
    main_zip = models.IntegerField(null=True, blank=True)
    radius_miles = models.IntegerField(null=True, blank=True)
    company = models.ForeignKey(Company, on_delete=models.SET_NULL, null=True)
    zip_codes = models.ManyToManyField(ZipCode, through='CompanyZipModel')

    def __str__(self) -> str:
        return self.name

class CompanyZipModel(models.Model):
    radius_zip_code = models.ForeignKey(RadiusZipCode, on_delete=models.SET_NULL, null=True)
    zip_code = models.ForeignKey(ZipCode, on_delete=models.SET_NULL, null=True)
    