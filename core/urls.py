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
    path('admin/', admin.site.urls),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# Front
urlpatterns += [re_path(r'^.*',
                        TemplateView.as_view(template_name='index.html'))]



if settings.DEBUG:
    schema_view = get_schema_view(
    openapi.Info(
        title="Snippets API",
        default_version='v1',
        description="Test description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@snippets.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
    )

if settings.DEBUG:
    api_patterns = [
        #path('admin/', admin.site.urls),

    path('swagger<format>/', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

            path('auth/', include('djoser.urls')),
            path('auth/', include('djoser.urls')),
            path('auth/', include('djoser.urls.jwt')),
            path('auth/', include('djoser.social.urls')),
    ]


    urlpatterns += api_patterns