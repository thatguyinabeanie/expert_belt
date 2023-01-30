from django.db import models


class Format(models.Model):
    name = models.CharField(max_length=100, default=None, primary_key=True)
    label = models.CharField(max_length=100, null=True, blank=True)
