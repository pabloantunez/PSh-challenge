import requests

def generate_random_player():
    response = requests.get("https://randomuser.me/api/")
    response.raise_for_status()
    data = response.json()
    nickname = data['results'][0]['login']['username']
    profile_image = data['results'][0]['picture']['thumbnail']
    return nickname, profile_image

if __name__ == "__main__":
    generate_random_player()