from django.shortcuts import render
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView

from .models import Bid
from .serializers import BidSerializers, BulkSavingSerializers
from apps.accounts.models import Company

# Create your views here.
class CreateBidAPIView(CreateAPIView):
    queryset = Bid.objects.all()
    serializer_class = BidSerializers

class BulkCreateBidAPIView(CreateAPIView):
    serializer_class = BulkSavingSerializers

class ListBidByCompanyIdAPIVIew(ListAPIView):
    serializer_class = BidSerializers

    def get_queryset(self):
        company_id = self.kwargs.get('id', '')
        return Company.objects.get(company__id=company_id)


class RetrieveUpdateDestroyBidAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Bid.objects.all()
    serializer_class = BidSerializers
