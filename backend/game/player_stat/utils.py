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
        raise NoPlayersException('No players in the database')
    
    player_stats = []
    stats_to_update = []
    
    for player in players:
        new_score = random.randint(1, 100)
        random_days = random.randint(0, 30)  
        new_creation_date = datetime.now() - timedelta(days=random_days)

        existing_stat = player_stat_repository.get_player_stat_by_id(player.id)

        if existing_stat:
            stats_to_update.append(
                {
                    'id':existing_stat.id,
                    'score':new_score,
                    'creation_date':new_creation_date
                }
            )
        else:
            player_stats.append({
                'player': player.id,
                'score': new_score,
                'creation_date': new_creation_date
            })
    if stats_to_update:
        player_stat_repository.update_players_stats(stats_to_update)
    
    if player_stats:
        player_stat_repository.create_player_stat(player_stats)
