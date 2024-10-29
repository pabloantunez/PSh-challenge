from .models import Player
from .interfaces import IPlayerRepository

class PlayerRepository(IPlayerRepository):

    def create_player(self, nickname, profile_image):
        player = Player(nickname=nickname, profile_image=profile_image)
        player.save()
        return player
    
    def get_all_players(self):
        return Player.objects.all()