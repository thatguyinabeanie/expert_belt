from django.db import models
from django.contrib.auth.models import User
from . import Tournament, Phase


class Match(models.Model):
    round = models.IntegerField(null=False)
    phase = models.ForeignKey(Phase, on_delete=models.RESTRICT)
    tournament = models.ForeignKey(Tournament, on_delete=models.RESTRICT)

    player1 = models.ForeignKey(
        User, on_delete=models.RESTRICT, null=False, related_name='player1')
    player2 = models.ForeignKey(
        User, on_delete=models.RESTRICT, null=True, related_name='player2')
    winner = models.ForeignKey(
        User, on_delete=models.RESTRICT, null=True, related_name='winner')
