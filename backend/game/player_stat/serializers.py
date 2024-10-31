from rest_framework import serializers
from player.serializers import PlayerSerializer
from .models import PlayerStat

class PlayerStatSerializer(serializers.ModelSerializer):
    player = PlayerSerializer()

    class Meta:
        model = PlayerStat
        fields = [
            'id',
            'player',
            'score',
            'creation_date'
        ]

class PlayerStatSerializerRepository(serializers.ModelSerializer):
    class Meta:
        model = PlayerStat
        fields = [
            'player',
            'score',
            'creation_date'
        ]
        