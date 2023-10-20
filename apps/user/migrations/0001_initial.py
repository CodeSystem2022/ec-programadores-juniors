# Generated by Django 3.2.16 on 2023-09-29 14:53

from django.db import migrations, models
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserAccount',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False, unique=True)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('username', models.CharField(max_length=100, unique=True)),
                ('mercado_pago_id', models.CharField(blank=True, max_length=100, null=True)),
                ('mercado_pago_user_id', models.CharField(blank=True, max_length=100, null=True)),
                ('mercado_pago_merchant_id', models.CharField(blank=True, max_length=100, null=True)),
                ('mercado_pago_client_id', models.CharField(blank=True, max_length=100, null=True)),
                ('picture', models.ImageField(blank=True, default='media/users/user_default_profile.png', null=True, upload_to='media/users/pictures/', verbose_name='Picture')),
                ('banner', models.ImageField(blank=True, default='media/users/user_default_bg.png', null=True, upload_to='media/users/pictures/', verbose_name='Banner')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('is_online', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('role', models.CharField(choices=[('customer', 'Customer'), ('admin', 'Admin'), ('moderator', 'Moderator'), ('helper', 'Helper'), ('editor', 'Editor'), ('owner', 'Owner')], default='customer', max_length=20)),
                ('verified', models.BooleanField(default=False)),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
