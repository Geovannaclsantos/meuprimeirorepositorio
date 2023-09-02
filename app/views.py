from django.shortcuts import render


# Crie suas views aqui.
def index(request):
    return render (request, 'index.html')

#No Power Shell
# python .\manage.py migrate
# python .\manage.py runserver