from .models import PlayerStat
from .interfaces import IPlayerStatRepository

class PlayerStatRepository(IPlayerStatRepository):

    def get_all_players_with_stats(self):
        return PlayerStat.objects.all()
