from django.urls import path, include
from .views import (
    ListCreateMainCategoryAPIView,
    ListCreateSubCategoryAPIView,
    GetZipCodeAPIView,
    ListServicesBySubCategoryAPIView
)

urlpatterns = [
    path('main-category', ListCreateMainCategoryAPIView.as_view(), name="list-create-main-category"),
    path('sub-category/<int:id>/',ListCreateSubCategoryAPIView.as_view(), name="sub-categories-by-main-id" ),
    path('services/<int:id>/', ListServicesBySubCategoryAPIView.as_view(), name="services-by-category"),
    path('get-zipcode/<int:code>/<int:distance>/', GetZipCodeAPIView.as_view(), name='get-zip-code')
]