import random
import requests
from celery import shared_task
from .repositories import PlayerStatRepository
from .models import PlayerStat

@shared_task
def update_player_scores():
    player_stat_repository = PlayerStatRepository()
    players = player_stat_repository.get_all_players_with_stats()

    for player_stat in players:
        new_score = random.randint(1, 100)
        player_stat_repository.update_players_score(player_stat.id, new_score)