from rest_framework import serializers
from .models import Bid
from apps.accounts.models import Company

class BidSerializers (serializers.ModelSerializer):
    class Meta:
        model = Bid
        fields = '__all__'


class ListBidSerializers (serializers.ModelSerializer):
    class Meta:
        model = Bid
        fields = '__all__'