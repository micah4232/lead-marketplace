from django.urls import path, include

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
    path('company/', include('apps.accounts.urls')),
    path('bid/', include('apps.bids.urls')),
    path('payment/', include('apps.payments.urls'))
]
