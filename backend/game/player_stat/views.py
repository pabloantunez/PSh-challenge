from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework import status, serializers
from .repositories import PlayerStatRepository
from .serializers import PlayerStatSerializer
from .utils import (
    generate_random_stats_for_players
)
from .exceptions import NoPlayersException

class PlayerStatListAPIView(APIView):

    def __init__(self, player_stat_repository=None):
        self.player_stat_repository = player_stat_repository or PlayerStatRepository()
        
    def get(self, request):
        try:
            players_with_stats = self.player_stat_repository.get_all_players_with_stats()
            serializer = PlayerStatSerializer(players_with_stats, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({'error': 'Something happened while listing the stats {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CreatePlayerStatAPIView(APIView):

    def __init__(self, player_stat_repository=None):
        self.player_stat_repository = player_stat_repository or PlayerStatRepository()

    def post(self, request):
        try:
            generate_random_stats_for_players()
            return Response({'message':'Player stats generated successfully'}, status=status.HTTP_201_CREATED)
        
        except serializers.ValidationError as e:
            return Response({"errors": e.detail}, status=status.HTTP_400_BAD_REQUEST)
        
        except NoPlayersException as e:
            return Response({"errors": str(e)}, status=status.HTTP_404_NOT_FOUND)
        
        except Exception as e:
            return Response({'errors': f'Something happened while generating player stats {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
