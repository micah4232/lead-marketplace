from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=255)
    website = models.URLField()
    phone_number_for_lead = models.CharField(max_length=16, null=True, blank=True)
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=False, auto_now=True)

    def __str__(self) -> str:
        return super().name


class Profile(models.Model):
    company = models.OneToOneField(Company, on_delete=models.SET_NULL, null=True)
    user = models.OneToOneField(User, on_delete=models.SET_NULL, null=True)
    