from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, RetrieveAPIView, CreateAPIView
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse
from django.conf import settings
import requests as req
from .models import MainCategory, SubCategory, ServiceCategories, Profile, Company, RadiusZipCode
from .serializers import (
    MainCategorySerializers, 
    SubCategorySerializers, 
    ServiceCategorySerializers,
    ProfileSerializer,
    CompanyZipSerializer,
    CompanySerializer,
    RadiusZipCodeSerializer
)

# Create your views here.
class CreateCompanyZipCodeAPIView(CreateAPIView):
    serializer_class = CompanyZipSerializer


class GetProfileAPIView(RetrieveAPIView):
    serializer_class = ProfileSerializer
    
    def get_object(self):
        user_id = self.kwargs.get('id', '')
        return Profile.objects.get(user__id=user_id)

class ListCreateMainCategoryAPIView(ListCreateAPIView):
    queryset = MainCategory.objects.all()
    serializer_class = MainCategorySerializers


class RetrieveUpdateDestroyMainCategoryAPIView(RetrieveUpdateDestroyAPIView):
    queryset = MainCategory.objects.all()
    serializer_class = MainCategorySerializers


class ListCreateSubCategoryAPIView(ListCreateAPIView):
    serializer_class = SubCategorySerializers

    def get_queryset(self):
        main_id = self.kwargs.get('id', '')
        return SubCategory.objects.filter(main_category__id=main_id)
    

class RetrieveUpdateDestroySubCategoryAPIView(RetrieveUpdateDestroyAPIView):
    queryset = SubCategory.objects.all()
    serializer_class = SubCategorySerializers


class ListCreateServiceCategoryAPIView(ListCreateAPIView):
    queryset = ServiceCategories.objects.all()
    serializer_class = ServiceCategorySerializers


class ListServicesBySubCategoryAPIView(ListAPIView):
    serializer_class = ServiceCategorySerializers

    def get_queryset(self):
        sub_id = self.kwargs.get('id', '')
        return ServiceCategories.objects.filter(sub_category__id=sub_id)

# getting zipcode here

class GetZipCodeAPIView(APIView):
    def get(requests, *args, **kwargs):
        code = kwargs.get('code', '')
        distance = kwargs.get('distance', '')
        zip_code_url = 'https://app.zipcodebase.com/api/v1/radius'
        api_token = getattr(settings, 'ZIP_CODE_API_KEY', None)
        if api_token == None:
            raise BaseException('ZIP_CODE_API_KEY not set')
        headers = {
            "apikey" : api_token
        }
        params = (
            ("code", code),
            ("radius",distance),
            ("country", "us"),
            ("unit", "miles")
        )
        get_zip = req.get(f'{zip_code_url}',headers=headers, params=params)
        
        return JsonResponse(get_zip.json())


class ListZipCodeGroupAPIView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = RadiusZipCodeSerializer
    queryset = RadiusZipCode.objects.all()


    def filter_queryset(self, queryset):
        return queryset.filter(company__id=self.kwargs.get('pk', ''))


class RetrieveUpdateDeleteCompanyAPIVIew(RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
