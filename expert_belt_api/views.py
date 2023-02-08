from rest_framework import viewsets
from django.contrib.auth.models import User, Group
from expert_belt_api import models
from expert_belt_api import serializers
from django.shortcuts import get_object_or_404

# @api_view(['GET'])
# def users_list(request):
#     if request.method == 'GET':
#         students = User.objects.all()
#         user_serializer = serializers.UserSerializer(students, many=True)
#         return Response(user_serializer.data)


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    filterset_fields = ("id", "username")
    lookup_field = "username"
    # lookup_fields = ['username', 'id']
    # permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """

    queryset = Group.objects.all()
    serializer_class = serializers.GroupSerializer
    filterset_fields = "__all__"
    # permission_classes = [permissions.IsAuthenticated]


class TournamentViewSet(viewsets.ModelViewSet):
    # permission_classes = [IsAuthenticated]
    queryset = models.Tournament.objects.all()
    serializer_class = serializers.TournamentSerializer
    filterset_fields = "__all__"
    # permission_classes


class TournamentIDPlayersViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.UserSerializer

    def get_queryset(self):
        tour_id = self.kwargs["tour_id"]
        tournament = get_object_or_404(models.Tournament, pk=tour_id)
        # models.Tournament.objects.get(tournament_id=tour_id))
        return tournament.players.all()


class TournamentPlayerViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.UserSerializer

    def get_queryset(self):
        tour_id = self.kwargs["tour_id"]
        username = self.kwargs["username"]
        tournament = get_object_or_404(models.Tournament, pk=tour_id)
        return tournament.players.filter(username=username)


class OrganizerViewSet(viewsets.ModelViewSet):
    queryset = models.Organizer.objects.all()
    serializer_class = serializers.OrganizerSerializer
    filterset_fields = "__all__"


class PhaseViewSet(viewsets.ModelViewSet):
    queryset = models.Phase.objects.all()
    serializer_class = serializers.PhaseSerializer
    filterset_fields = "__all__"


class FormatViewSet(viewsets.ModelViewSet):
    queryset = models.Format.objects.all()
    serializer_class = serializers.FormatSerializer
    filterset_fields = "__all__"


class RecordViewSet(viewsets.ModelViewSet):
    queryset = models.Record.objects.all()
    serializer_class = serializers.RecordSerializer
    filterset_fields = "__all__"


class MatchViewSet(viewsets.ModelViewSet):
    queryset = models.Match.objects.all()
    serializer_class = serializers.MatchSerializer
    filterset_fields = "__all__"
