from .models import PlayerStat
from .interfaces import IPlayerStatRepository
from .serializers import PlayerStatSerializerRepository
from rest_framework.exceptions import ValidationError

class PlayerStatRepository(IPlayerStatRepository):

    def get_all_players_with_stats(self):
        return PlayerStat.objects.all()
    
    def create_player_stat(self, player_stats):
        stats_to_create = []
        for stat in player_stats:
            serializer = PlayerStatSerializerRepository(data=stat)
            if serializer.is_valid():
                stats_to_create.append(serializer.validated_data)
            else:
                raise ValidationError(serializer.errors)
            
        
        PlayerStat.objects.bulk_create([
            PlayerStat(**data) for data in stats_to_create
        ])
        
    def get_player_stat_by_id(self, id):
        return PlayerStat.objects.filter(player_id=id).first()
        
    def update_players_stats(self, stats_to_update):
        for stat in stats_to_update:
            player_stat = PlayerStat.objects.get(id=stat['id'])
            player_stat.score = stat['score']
            player_stat.creation_date = stat['creation_date']
            player_stat.save()