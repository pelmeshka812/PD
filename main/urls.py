from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

from main import views
from main.views import CreateParty, CreateProduct, create_party

from main.views import HomeView

urlpatterns = [
    path('party/', CreateParty.as_view(), name='party'),
    path('product/', CreateProduct.as_view(), name='product'),
    path('home/', HomeView.as_view(), name="home"),
    path('create-party/', CreateParty.as_view(), name='party'),
    path('home/about/', TemplateView.as_view(template_name='about.html'), name='about'),
]
