from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Post(models.Model):
    photo = models.ImageField(verbose_name="이미지", blank=True, null=True, upload_to='photo')
    body = models.TextField(verbose_name="내용", default="")
    created_at = models.DateTimeField(verbose_name="작성일", auto_now_add=True)

    def __str__(self):
        return self.body
    

class Comment(models.Model):
    photo = models.ImageField(verbose_name="이미지", blank=True, null=True, upload_to='photo')
    comment = models.CharField(max_length=200)
    date = models.DateTimeField(auto_now_add=True)
    article = models.ForeignKey(Post, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.comment