from time import timezone

from django.shortcuts import render, redirect
from django.views.generic import FormView

from main.forms import PartyForm, ProductForm
from main.models import Party


def party_new(request):
    if request.method == 'POST':
        form = PartyForm(request.POST)
        if form.is_valid():
            party = form.save(commit=False)
            party.creater = request.user
            #party.created_date = timezone.now()
            #party.participants.set(request.POST['participants'])
            party.save()
            #party.participants.add(request.POST)
            #party.save()
            return redirect('home', pk = party.pk)
    else:
        form = PartyForm()
    return render(request, 'index1.html', {'form': form})


def product_new(request):
    form = ProductForm()
    return render(request, 'product.html', {'form': form})


class CreateParty(FormView):
    form_class = PartyForm
    template_name = 'index.html'
    success_url = '/home/'

    """def form_valid(self, form):
        Party.objects.create(**form.cleaned_data)
        return redirect(self.get_success_url())"""
