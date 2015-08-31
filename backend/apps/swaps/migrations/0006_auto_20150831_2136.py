# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('swaps', '0005_auto_20150309_1751'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item',
            name='user',
        ),
        migrations.RemoveField(
            model_name='swap',
            name='initiator',
        ),
        migrations.RemoveField(
            model_name='swap',
            name='other_party',
        ),
    ]
