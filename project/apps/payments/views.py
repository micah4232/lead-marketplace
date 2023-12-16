from django.shortcuts import render
from django.conf import settings

from rest_framework.views import APIView
from djstripe.models import Customer
from rest_framework import authentication, permissions
from rest_framework.response import Response
from rest_framework import status

import stripe
# Create your views here.

stripe.api_key = settings.STRIPE_TEST_SECRET_KEY

class SavingCardPaymentIntent(APIView):

    def get(self, request, pk=None):
        # getting the customer id for the user
        cust = Customer.objects.get(subscriber=pk)
        payment_intent = stripe.SetupIntent.create(
            customer=cust.id,
            automatic_payment_methods={"enabled": True},
        )
        return Response(payment_intent.client_secret, status=status.HTTP_200_OK)
