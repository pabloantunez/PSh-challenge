from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework import status
from .repositories import PlayerStatRepository
from .serializers import PlayerSerializer


class PlayerStatListAPIView(APIView):

    def __init__(self, player_stat_repository=None):
        self.player_stat_repository = player_stat_repository or PlayerStatRepository()
        
    def get(self, request):
        try:
            players_with_stats = self.player_stat_repository.get_all_players_with_stats()
            print('Estos son los jugadores: ', players_with_stats)
            serializer = PlayerSerializer(players_with_stats, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({'error': 'Something happened when listing the stats {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


