from django.conf import settings
from django.db import models
from django.utils import timezone


class Party(models.Model):
    creater = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='creater', on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    participants = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='participants', blank=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=200)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    price = models.IntegerField()
    # party = models.ForeignKey(Party, on_delete=models.CASCADE)


class Payroll(models.Model):
    party = models.ForeignKey(Party, on_delete=models.CASCADE)
    products = models.ManyToManyField(Product)


class List_user(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, default='')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, default='')
    party = models.ForeignKey(Party, on_delete=models.CASCADE)
