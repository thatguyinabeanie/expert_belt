from expert_belt_api import views
from django.urls import path, include
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r"users", views.UserViewSet)
router.register(r"groups", views.GroupViewSet)
router.register(r"tournaments", views.TournamentViewSet)
router.register(r"organizers", views.OrganizerViewSet)
router.register(r"formats", views.FormatViewSet)
router.register(r"records", views.RecordViewSet)
router.register(r"phases", views.PhaseViewSet)
router.register(r"matches", views.MatchViewSet)

urlpatterns = [
    path("", include(router.urls)),
    # path(
    #     "tournaments/<slug:tour_id>/players/",
    #     views.TournamentIDPlayersViewSet.as_view({"get": "list"}),
    #     name="tournament-players",
    # ),
    # path(
    #     "tournaments/<slug:tour_id>/players/<slug:username>/",
    #     views.TournamentIDPlayersViewSet.as_view({"get": "list"}),
    #     name="tournament-players-slug",
    # )
    # path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
]
