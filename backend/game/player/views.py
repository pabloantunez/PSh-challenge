from rest_framework.views import APIView 
from rest_framework.response import Response
from .repositories import PlayerRepository
from .serializers import PlayerSerializer
from rest_framework import status, serializers
from .utils import generate_multiples_players
import random

class PlayerListAPIView(APIView):

    def __init__(self, player_repository=None):
        self.player_repository = player_repository or PlayerRepository()

    def get(self, request):
        players = self.player_repository.get_all_players()
        serializer = PlayerSerializer(players, many=True)
        return Response(serializer.data)
    
class CreatePlayersAPIView(APIView):

    def post(self, request):
        try:
            generate_multiples_players()
            return Response({'message':'Players created successfully'}, status=status.HTTP_201_CREATED)
        
        except serializers.ValidationError as e:
            return Response({"errors": e.detail}, status=status.HTTP_400_BAD_REQUEST)
        
        except Exception as e:
            return Response({'error': f'Something happened when creating players {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)