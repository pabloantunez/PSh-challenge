from django.urls import path
from .views import (
    PlayerStatListAPIView,
)

urlpatterns = [
    path('players-stats/', PlayerStatListAPIView.as_view(), name='list-players-stats')
]