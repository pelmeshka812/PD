from django.forms import ModelForm

from main.models import Party, Product


class PartyForm(ModelForm):
    class Meta:
        model = Party
        fields = ['name', 'text', 'creater', 'created_date', 'participants']


class ProductForm(ModelForm):
    class Meta:
        model = Product
        fields = ['name', 'user', 'price']
