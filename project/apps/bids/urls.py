from django.urls import path

from .views import CreateBidAPIView, ListBidByCompanyIdAPIVIew, RetrieveUpdateDestroyAPIView

urlpatterns = [
    path('create', CreateBidAPIView.as_view(), name='create-bid'),
    path('list/<int:id>/', ListBidByCompanyIdAPIVIew.as_view(), name='get-bid-by-company-id'),
    path('/<int:id>', RetrieveUpdateDestroyAPIView.as_view(), name='get-update-delete-bid')
]
