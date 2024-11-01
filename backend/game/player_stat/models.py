from django.db import models
from player.models import Player

class PlayerStat(models.Model):
    player = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='stats')
    score = models.IntegerField()
    creation_date = models.DateTimeField()

    class Meta:
        db_table ="player_stat_playerstat"

    def __str__(self):
        return f'{self.player.nickname} - Score: {self.score}'
