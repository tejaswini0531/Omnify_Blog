# blogs/serializers.py
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Blog

# User serializer for signup
class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user

# Blog serializer
class BlogSerializer(serializers.ModelSerializer):
    author_username = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Blog
        fields = ['id', 'title', 'content', 'created_at', 'author', 'author_username']
