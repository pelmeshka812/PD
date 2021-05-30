from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

from main import views
from main.views import CreateParty

urlpatterns = [
    path('party/', CreateParty.as_view(), ),
    path('product/', views.product_new),
    path('home/', TemplateView.as_view(template_name="home.html"))
]
