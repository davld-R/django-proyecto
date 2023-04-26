"""proyecto5 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.contrib.auth.views import LoginView, LogoutView
from azul import views
# from . import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', LoginView.as_view(template_name='azul/login.html'), name='login'),
    path('feed/', views.feed, name='feed'),
    path('feed/method/', views.method, name='method'),
    path('feed/train/', views.train, name='train'),
    path('feed/step1/', views.step1, name='step1'),
    path('feed/encryption8/', views.encryption8, name='encryption8'),
    path('logout/', LogoutView.as_view(template_name='azul/logout.html'), name='logout'),

    # path('', include('azul.urls')),
] 
