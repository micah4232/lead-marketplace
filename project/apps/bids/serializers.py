from rest_framework import serializers
from .models import Bid
from apps.accounts.models import Company

class BidSerializers(serializers.ModelSerializer):
    class Meta:
        model = Bid
        fields = '__all__'


class BulkSavingSerializers(serializers.Serializer):
    bids = BidSerializers(many=True)

    def create(self, validated_data):
        bulk_to_create = []
        for bid_obj in validated_data['bids']:
            bulk_to_create.append(Bid(**bid_obj))
            # pricing here
            
        # to create here
        bid_obj = Bid.objects.bulk_create(bulk_to_create)

        return_obj = Bid.objects.filter(company=validated_data['bids'][0]['company'].id)

        return {'bids' : return_obj}


class ListBidSerializers(serializers.ModelSerializer):
    class Meta:
        model = Bid
        fields = '__all__'