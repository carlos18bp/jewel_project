import json

def products_serializer(products):
    """
    Product serializer.
    """
    products_serialized = []

    for product in products:
        product_data = {
            'id': product.id,
            'title': product.title,
            'description': product.description,
            'price': product.price,
            'images': _get_images(product.images.all()),
        }
        products_serialized.append(product_data)

    return json.dumps(products_serialized)

def _get_images(images):
    images_serialized = []

    for image in images:
        resource_data = {
            'image_url': image.image.url,
            'image_path': image.image.path
        }
        images_serialized.append(resource_data)
    
    return images_serialized