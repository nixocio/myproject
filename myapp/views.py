from django.shortcuts import render


def index(request):
    api_base_path = "/api/galaxy/"

    context = {"API_BASE_PATH": api_base_path}

    return render(request, "myapp/index.html", context)
