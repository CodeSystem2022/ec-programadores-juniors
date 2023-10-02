from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings

# Template and Static files URLs
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

# API List URLs


urlpatterns = [
    path("admin/", admin.site.urls),
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.jwt")),
    path("auth/", include("djoser.social.urls")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# Front
urlpatterns += [re_path(r'^.*',
                        TemplateView.as_view(template_name='index.html'))]


