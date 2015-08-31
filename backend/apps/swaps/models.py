from django.db import models
# from django.contrib.auth.models import User


class Item(models.Model):
    CONDITION_CHOICES = (
        ('Poor', 'Poor'),
        ('Fair', 'Fair'),
        ('Good', 'Good'),
        ('Excellent', 'Excellent'),
        ('Like New', 'Like New'),
        ('New', 'New')
    )

    name = models.CharField(max_length=50)
    picture = models.ImageField(upload_to='photos', blank=True, null=True)
    # user = models.ForeignKey(User)
    description = models.TextField(max_length=500)
    condition = models.CharField(max_length=15, choices=CONDITION_CHOICES)
    status = models.CharField(max_length=50)  # change to multi choice.

    def __str__(self):
        return self.name


class Swap(models.Model):
    STATUS_CHOICES = (
        ('AVAILABLE', 'Available'),
        ('CLOSED', 'Closed'),
        ('PENDING', 'Pending'),
    )

    status = models.CharField(max_length=15, choices=STATUS_CHOICES, default='AVAILABLE')
    # initiator = models.ForeignKey(User, related_name="initiator_swap")
    initiator_items = models.ManyToManyField(Item, related_name="initiator_items_swap")
    # other_party = models.ForeignKey(User, related_name="other_party_swap")
    other_party_items = models.ManyToManyField(Item, related_name="other_party_items_swap")

    def __str__(self):
        return self.status
