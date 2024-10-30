import random
import requests
from .repositories import PlayerRepository

def generate_random_player_data():
    try:
        response = requests.get("https://randomuser.me/api/")
        data = response.json()
        nickname = data['results'][0]['login']['username']
        profile_image = data['results'][0]['picture']['thumbnail']

        return {
            'nickname': nickname,
            'profile_image':profile_image
        }
    
    except requests.exceptions.RequestException as e:
        print(f'Something happened when doing the request: {e}')
    except Exception as e:
        print(f'Something happened when fetching player data: {e}')


def generate_multiples_players(players_amount=None):
    players_amount = players_amount or random.randint(1, 10)
    player_repository = PlayerRepository()
    players_data = [generate_random_player_data() for _ in range(players_amount) if generate_random_player_data()]

    if players_data:
        player_repository.create_players(players_data)

if __name__ == "__main__":
    generate_multiples_players()