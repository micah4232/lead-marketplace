from django.shortcuts import render
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated

from .models import Bid
from .serializers import BidSerializers, BulkSavingSerializers, ListBidSerializers
from apps.accounts.models import Company

# Create your views here.
class CreateBidAPIView(CreateAPIView):
    permission_classes = [IsAuthenticated]

    queryset = Bid.objects.all()
    serializer_class = BidSerializers

class BulkCreateBidAPIView(CreateAPIView):
    serializer_class = BulkSavingSerializers

class ListBidByCompanyIdAPIVIew(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ListBidSerializers
    queryset = Bid.objects.all()

    def filter_queryset(self, queryset):
        return queryset.filter(company__id=self.kwargs.get('id', ''))


class RetrieveUpdateDestroyBidAPIView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Bid.objects.all()
    serializer_class = BidSerializers
