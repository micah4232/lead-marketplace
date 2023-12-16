from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.
class UserPaymentIntent(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    paymentIntent = models.TextField()

    def __str__(self) -> str:
        return self.paymentIntent