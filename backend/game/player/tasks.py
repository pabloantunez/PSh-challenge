import random
from celery import shared_task
from .utils import generate_multiples_players

@shared_task
def create_players_task():
    players_amount = random.randint(1, 10)
    generate_multiples_players(players_amount)