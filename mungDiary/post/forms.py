from django import forms
from .models import Post, Comment

class PostModelForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['photo', 'body']


class CommentForm(forms.ModelForm):
    class Meta: 
        model = Comment 
        fields = ['photo', 'comment']