import requests
from .repositories import PlayerRepository

def generate_random_player():
    try:
        response = requests.get("https://randomuser.me/api/")
        data = response.json()
        nickname = data['results'][0]['login']['username']
        profile_image = data['results'][0]['picture']['thumbnail']

        player_repository = PlayerRepository()
        player = player_repository.create_player(nickname, profile_image)
        return player
    
    except requests.exceptions.RequestException as e:
        print(f'Something happened when doing the request: {e}')
    except Exception as e:
        print(f'Something happened when saving the player: {e}')


def generate_multiples_players(players_amount=10):
    for _ in range(players_amount):
        generate_random_player()

if __name__ == "__main__":
    generate_multiples_players()