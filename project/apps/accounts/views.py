from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
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

