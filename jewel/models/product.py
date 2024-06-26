from django.db import models
from jewel.models import ProductResource

class Product(models.Model):
    """
    Product model.

    :ivar title: title product.
    :vartype title: str
    :ivar description: description product.
    :vartype description: str
    :ivar price: price invoice.
    :vartype price: int
    :ivar image: image by product.
    :vartype image: Image
    """

    CATEGORY_CHOICES = [
        ('1', 'Bracelets'),
        ('2', 'Necklaces'),
        ('3', 'Earrings'),
    ]

    title = models.CharField(max_length=40)
    description = models.TextField()
    price = models.IntegerField()
    category = models.CharField(max_length=1, choices=CATEGORY_CHOICES)

    images = models.ManyToManyField(ProductResource)

    def __str__(self):
        return self.title