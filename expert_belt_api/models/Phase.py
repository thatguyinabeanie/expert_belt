from django.db import models
from django.utils.translation import gettext_lazy as _

from expert_belt_api.models import Tournament


class Mode(models.TextChoices):
    BEST_OF_1 = "BO1", _("Best of One")
    BEST_OF_2 = "BO3", _("Best of Three")
    BEST_OF_3 = "BO5", _("Best of Five")


class Phase(models.Model):
    phase_number = models.IntegerField(default=1)
    phase_type = models.CharField(max_length=100, default="SWISS")

    mode = models.CharField(max_length=3, choices=Mode.choices, default=Mode.BEST_OF_3)
    rounds = models.IntegerField(default=3)
    final = models.BooleanField(default=False)

    timer = models.BooleanField(default=None, null=True)
    round_time = models.IntegerField(default=None, null=True)
    auto_resolve = models.BooleanField(default=None, null=True)
    check_in = models.BooleanField(default=None, null=True)
    check_in_time = models.IntegerField(default=None, null=True)
    bracket = models.BooleanField(default=None, null=True)
    advancing_min = models.IntegerField(default=None, null=True)

    tournament = models.ForeignKey(Tournament, on_delete=models.CASCADE)
