from django.db import models


# Create your models here.
class Organizer(models.Model):
    id = models.IntegerField(primary_key=True, default=0)
    name = models.CharField(max_length=100)
