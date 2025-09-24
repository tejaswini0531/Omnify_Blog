from django.urls import path
from .views import BlogListCreateView, BlogDetailView, RegisterUserView

urlpatterns = [
    path('register/', RegisterUserView.as_view(), name='register'),
    path('blogs/', BlogListCreateView.as_view(), name='blog-list'),
    path('blogs/<int:pk>/', BlogDetailView.as_view(), name='blog-detail'),
]
