from .models import Player
from .interfaces import IPlayerRepository
from .serializers import PlayerSerializerRepository
from rest_framework.exceptions import ValidationError

class PlayerRepository(IPlayerRepository):
    
    def create_players(self, players_data):
        players_to_create = []
        for player_data in players_data:
            serializer = PlayerSerializerRepository(data=player_data)
            if serializer.is_valid():
                players_to_create.append(serializer.validated_data)
            else:
                raise ValidationError(serializer.errors)
        
        Player.objects.bulk_create([Player(**data) for data in players_to_create])
    
    def get_all_players(self):
        return Player.objects.all()