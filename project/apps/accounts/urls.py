from django.urls import path, include
from .views import ListCreateMainCategoryAPIView, ListCreateSubCategoryAPIView, GetZipCodeAPIView

urlpatterns = [
    path('main-category', ListCreateMainCategoryAPIView.as_view(), name="list-create-main-category"),
    path('sub-category/<int:id>/',ListCreateSubCategoryAPIView.as_view(), name="sub-categories-by-main-id" ),
    path('get-zipcode/<int:code>/<int:distance>/', GetZipCodeAPIView.as_view(), name='get-zip-code')
]
