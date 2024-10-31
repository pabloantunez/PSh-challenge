from django.urls import path
from .views import (
    PlayerStatListAPIView,
    CreatePlayerStatAPIView
)

urlpatterns = [
    path('players-stats/', PlayerStatListAPIView.as_view(), name='list-players-stats'),
    path('players-stats/create/', CreatePlayerStatAPIView.as_view(), name='create-players-stats')
]