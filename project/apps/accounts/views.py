from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.views import APIView
from django.http import JsonResponse
from django.conf import settings
import requests as req
from .models import MainCategory, SubCategory, ServiceCategories
from .serializers import MainCategorySerializers, SubCategorySerializers, ServiceCategorySerializers

# Create your views here.
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
