from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings

# Template and Static files URLs
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

# API List URLs
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


urlpatterns = [
    path("admin/", admin.site.urls),
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.jwt")),
    path("auth/", include("djoser.social.urls")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
