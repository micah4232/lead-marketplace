from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers
from django.db import IntegrityError, transaction
from djoser.conf import settings
from rest_framework.settings import api_settings
from django.contrib.auth.password_validation import validate_password
from django.core import exceptions as django_exceptions

from .models import (
    Company, 
    Profile, 
    MainCategory, 
    SubCategory, 
    ServiceCategories, 
    ZipCode,
    RadiusZipCode,
    CompanyZipModel
)

User = get_user_model()

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile

class RegistrationSerializer(UserCreateSerializer):
    password = serializers.CharField(style={"input_type": "password"}, write_only=True)
    confirm = serializers.CharField(write_only=True)
    first_name = serializers.CharField(write_only=True)
    last_name = serializers.CharField(write_only=True)
    company = CompanySerializer(write_only=True)

    default_error_messages = {
        "cannot_create_user": settings.CONSTANTS.messages.CANNOT_CREATE_USER_ERROR
    }

    class Meta:
        model = User
        fields = tuple(User.REQUIRED_FIELDS) + (
            settings.LOGIN_FIELD,
            settings.USER_ID_FIELD,
            "password",
            "first_name",
            "last_name",
            "confirm",
            "company"
        )

    def validate(self, attrs):
        company = attrs.pop('company')
        confirm = attrs.pop('confirm')
        user = User(**attrs)
        password = attrs.get("password")
        attrs['company'] = company

        if confirm != password:
            raise serializers.ValidationError(
                {"confirm": 'Password and Confirm Password did not Match.'}
            )
        else:
            try:
                validate_password(password, user)
            except django_exceptions.ValidationError as e:
                serializer_error = serializers.as_serializer_error(e)
                raise serializers.ValidationError(
                    {"password": serializer_error[api_settings.NON_FIELD_ERRORS_KEY]}
                )

        return attrs
    
    def create(self, validated_data):
        company_validated = validated_data.pop('company')
        try:
            user = self.perform_create(validated_data)
            # create company here
            company = Company.objects.create(**company_validated)
            # create profile
            Profile.objects.create(company=company, user=user)
        except IntegrityError:
            self.fail("cannot_create_user")

        return user

    def perform_create(self, validated_data):
        print(validated_data)
        with transaction.atomic():
            user = User.objects.create_user(**validated_data)
            if settings.SEND_ACTIVATION_EMAIL:
                user.is_active = False
                user.save(update_fields=["is_active"])
        return user

class MainCategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = MainCategory
        fields = '__all__'


class SubCategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = '__all__'

class ServiceCategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = ServiceCategories
        fields = '__all__'

class ZipCodeSerializers(serializers.ModelSerializer):
    class Meta:
        model = ZipCode
        fields = '__all__'


class CompanyZipSerializer(serializers.ModelSerializer):
    zip_codes = ZipCodeSerializers(many=True)

    class Meta:
        models = RadiusZipCode
        fields = '__all__'

    def create(self, validated_data):
        zipcodes = validated_data.pop('zip_codes')
        obj = RadiusZipCode.objects.create(**validated_data)
        for zipcode in zipcodes:
            zipp = ZipCode.objects.get_or_create(**zipcode)
            CompanyZipModel.objects.create(zip_code=zipp, radius_zip_code=obj)
        
        return obj
