from django.urls import path
from .views import SavingCardPaymentIntent


urlpatterns = [
    path('save-card/', SavingCardPaymentIntent.as_view(), name='saving-card-to-customer'),
]
