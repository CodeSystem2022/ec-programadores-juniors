from django.urls import URLResolver, URLPattern
from django.urls.exceptions import Resolver404
from django.utils.module_loading import import_string

def list_urls(urlpatterns, prefix=""):
    for urlpattern in urlpatterns:
        if isinstance(urlpattern, URLResolver):
            list_urls(urlpattern.url_patterns, prefix + urlpattern.pattern.regex.pattern)
        elif isinstance(urlpattern, URLPattern):
            print(f"Endpoint: {prefix + urlpattern.pattern.regex.pattern}")

def get_urlpatterns():
    # Importa el módulo raíz de tu proyecto para acceder a las URL registradas
    root_urlconf = import_string("sport-blend.urls")
    return root_urlconf.urlpatterns

if __name__ == "__main__":
    urlpatterns = get_urlpatterns()
    print("Listado de Endpoints:")
    list_urls(urlpatterns)
