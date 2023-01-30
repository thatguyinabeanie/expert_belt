from django.contrib import admin
from expert_belt_api import models

# Register your models here.
admin.site.register(models.Organizer)
admin.site.register(models.Tournament)
admin.site.register(models.Format)
# admin.site.register(models.UserProfile)
admin.site.register(models.Record)
admin.site.register(models.Phase)
admin.site.register(models.Match)
