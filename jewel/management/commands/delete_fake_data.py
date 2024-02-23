from django.core.management.base import BaseCommand
from jewel.models import Product

class Command(BaseCommand):
    help = 'Create rake records in the database'

    """
    To delete fake data via console, run:
    python3 manage.py delete_fake_data
    """
    def handle(self, *args, **options):
        Product.objects.all().delete()