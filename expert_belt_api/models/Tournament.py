from django.db import models

# from expert_belt_api.models import Phase
from expert_belt_api.models import Organizer, UserProfile
from django.utils.translation import gettext_lazy as _

from django.contrib.auth.models import User


class Tournament(models.Model):
    class Game(models.TextChoices):
        VGC = "VGC", _("Video Game Championships")

    tournament_id = models.CharField(max_length=100, null=False, primary_key=True)
    name = models.CharField(max_length=100, default=None)
    game = models.CharField(max_length=100, choices=Game.choices, default=Game.VGC)
    player_count = models.IntegerField(default=0)
    format = models.CharField(max_length=100, default="")
    date = models.DateTimeField(default=None)

    organizer = models.ForeignKey(Organizer, on_delete=models.RESTRICT, default=None)

    players = models.ManyToManyField(User, through="Record")

    # phases = models.ManyToManyField('Phase')
