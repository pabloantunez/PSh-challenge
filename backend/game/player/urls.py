from django.urls import path
from .views import (
    PlayerListAPIView,
    CreatePlayersAPIView
)

urlpatterns = [
    path('players/create/', CreatePlayersAPIView.as_view(), name='create-players'),
    path('players/', PlayerListAPIView.as_view(), name='list-players')
    
]