from django.contrib import admin
from apps.accounts.models import Company, MainCategory, SubCategory, ServiceCategories, ZipCode, CompanyZipModel,Profile, RadiusZipCode

# Register your models here.

admin.site.register(Company)
admin.site.register(MainCategory)
admin.site.register(SubCategory)
admin.site.register(ServiceCategories)
admin.site.register(ZipCode)
admin.site.register(CompanyZipModel)
admin.site.register(Profile)
admin.site.register(RadiusZipCode)