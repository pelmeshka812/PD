from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

from main import views
from main.views import CreateParty, CreateProduct

urlpatterns = [
    path('party/', CreateParty.as_view(), name='party'),
    path('product/', CreateProduct.as_view(), name='product'),
    path('home/', TemplateView.as_view(template_name="index.html"))
]
