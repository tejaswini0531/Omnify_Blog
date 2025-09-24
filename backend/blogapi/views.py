import os
from django.http import HttpResponse
from django.conf import settings

def index(request):
    with open(os.path.join(settings.BASE_DIR, '..', 'frontend', 'build', 'index.html')) as f:
        return HttpResponse(f.read())
