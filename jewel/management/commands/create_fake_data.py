from django.core.management import call_command
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = 'Create rake records in the database'

    def add_arguments(self, parser):
        parser.add_argument('number_of_records', type=int, nargs='?', default=10)

    """
    To generate fake data via console, run:
    python3 manage.py create_fake_data [numbers_of_records]
    """
    def handle(self, *args, **options):
        number_of_records = options['number_of_records']
        call_command('create_product_resource', number_of_product_resources=1)
        call_command('create_products', number_of_products=number_of_records)