from django.urls import path, include
from .views import ListCreateMainCategoryAPIView, ListCreateSubCategoryAPIView

urlpatterns = [
    path('main-category', ListCreateMainCategoryAPIView.as_view(), name="list-create-main-category"),
    path('sub-category/<int:id>/',ListCreateSubCategoryAPIView.as_view(), name="sub-categories-by-main-id" ),
]
