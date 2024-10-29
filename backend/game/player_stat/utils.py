import random
from datetime import datetime, timedelta
from .repositories import PlayerStatRepository
from .exceptions import NoPlayersException
from player.repositories import PlayerRepository

def generate_random_stats_for_players():
    player_repository = PlayerRepository()
    player_stat_repository = PlayerStatRepository()  

    players = player_repository.get_all_players()
    
    if not players:
        raise NoPlayersException('No players on database')
    
    player_stats = []
    
    for player in players:
        
        score = random.randint(1, 100)
        random_days = random.randint(0, 30)  
        creation_date = datetime.now() - timedelta(days=random_days)

        player_stats.append({
            'player': player.id,
            'score': score,
            'creation_date': creation_date
        })
    player_stat_repository.create_player_stat(player_stats)
