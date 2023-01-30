from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

from . import Tournament


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.RESTRICT)
    bio = models.TextField(max_length=10000, blank=True)
    country = models.CharField(max_length=10, default=None, null=True)
    birth_date = models.DateField(null=True, blank=True)
    # tournaments = models.ManyToManyField('Tournament', through='Record')
    pronouns = models.CharField(max_length=255, default=None, null=True)


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.userprofile.save()
