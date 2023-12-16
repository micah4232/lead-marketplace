from django.urls import path
from .views import SavingCardPaymentIntent


urlpatterns = [
    path('save-card/<int:pk>/', SavingCardPaymentIntent.as_view(), name='saving-card-to-customer'),
]
