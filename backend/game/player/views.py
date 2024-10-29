from rest_framework.views import APIView 
from rest_framework.response import Response
from .repositories import PlayerRepository
from .serializers import PlayerSerializer
from rest_framework import status
from .utils import generate_multiples_players

class PlayerListAPIView(APIView):

    def __init__(self, player_repository=None):
        self.player_repository = player_repository or PlayerRepository()

    def get(self, request):
        players = self.player_repository.get_all_players()
        print('Estos son los jugadores: ', players)
        serializer = PlayerSerializer(players, many=True)
        return Response(serializer.data)
    
class CreatePlayersAPIView(APIView):

    def post(self, request):
        print('Entré en el views')
        try:
            generate_multiples_players(10)
            return Response({'message':'Players created successfully'}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': f'Something happened when creating players {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)