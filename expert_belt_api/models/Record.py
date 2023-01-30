from django.db import models
from django.contrib.auth.models import User

from . import Tournament, UserProfile

# Create your models here.


class Record(models.Model):
    player = models.ForeignKey(User, on_delete=models.RESTRICT, default=None)
    tournament = models.ForeignKey(
        Tournament, on_delete=models.RESTRICT, default=None)

    wins = models.IntegerField(default=None, null=True)
    losses = models.IntegerField(default=None, null=True)
    ties = models.IntegerField(default=None, null=True)
    drop = models.IntegerField(default=None, null=True)
    placing = models.IntegerField(default=None, null=True)
