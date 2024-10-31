from celery import shared_task
from .utils import generate_random_stats_for_players


@shared_task
def generate_player_stats_task():
    generate_random_stats_for_players()
