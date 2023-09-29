from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager,
)
import uuid
from django.utils import timezone
#from djoser.signals import user_registered


class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("El usuaio ya tiene un email")

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password, **extra_fields):
        user = self.create_user(email, password, **extra_fields)
        user.is_superuser = True
        user.is_staff = True
        user.role = "Admin"
        user.verified = True
        user.save(using=self._db)

        return user
    

class UserAccount(AbstractBaseUser, PermissionsMixin):
    roles = (
        ("customer", "Customer"),
        ("admin", "Admin"),
        ("moderator", "Moderator"),
        ("helper", "Helper"),
        ("editor", "Editor"),
        ("owner", "Owner"),
    )

    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=100, unique=True)

    mercado_pago_id = models.CharField(max_length=100, blank=True, null=True)
    mercado_pago_user_id = models.CharField(max_length=100, blank=True, null=True)
    mercado_pago_merchant_id = models.CharField(max_length=100, blank=True, null=True)
    mercado_pago_client_id = models.CharField(max_length=100, blank=True, null=True)

    picture = models.ImageField(
        default="media/users/user_default_profile.png",
        upload_to="media/users/pictures/",
        blank=True,
        null=True,
        verbose_name="Picture",
    )
    banner = models.ImageField(
        default="media/users/user_default_bg.png",
        upload_to="media/users/pictures/",
        blank=True,
        null=True,
        verbose_name="Banner",
    )

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)

    is_online = models.BooleanField(default=False)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    role = models.CharField(max_length=20, choices=roles, default="customer")
    verified = models.BooleanField(default=False)

    date_joined = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserAccountManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def get_full_name(self):
        return self.first_name + ' ' + self.last_name

    def __str__(self):
        return self.email