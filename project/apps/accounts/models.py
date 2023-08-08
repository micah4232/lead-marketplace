from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class ZipCode(models.Model):
    code = models.BigIntegerField()
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
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=False, auto_now=True)

    def __str__(self) -> str:
        return self.name


class Profile(models.Model):
    company = models.OneToOneField(Company, on_delete=models.SET_NULL, null=True)
    user = models.OneToOneField(User, on_delete=models.SET_NULL, null=True)


class CompanyZipModel(models.Model):
    company = models.ForeignKey(Company, on_delete=models.SET_NULL, null=True)
    zip_code = models.ForeignKey(ZipCode, on_delete=models.SET_NULL, null=True)
    