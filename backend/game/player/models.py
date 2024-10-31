from django.db import models

class Player(models.Model):
    nickname = models.CharField(max_length=50, unique=True)
    profile_image = models.URLField(max_length=200)

    def __str__(self):
        return self.nickname
