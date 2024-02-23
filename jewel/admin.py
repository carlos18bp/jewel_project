from django.contrib import admin
from .models.product import Product
from .models.product_resource import ProductResource

admin.site.register(Product)
admin.site.register(ProductResource)
