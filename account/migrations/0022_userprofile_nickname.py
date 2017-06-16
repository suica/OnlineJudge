# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0021_auto_20160424_1243'),
    ]

    operations = [
        migrations.AddField(
            model_name = 'userprofile',
            name = 'nickname',
            field= models.CharField(max_length = 50, null=True, blank =True)
        ),
    ]
