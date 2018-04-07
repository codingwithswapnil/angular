import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(public http: Http) { }

  getServicePosts(){
    return ['This is first post', 'This is second post'];
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .map(res => res.json());
  }

  getTodos(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
    .map(res => res.json());
  }
  
  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
    .map(res => res.json());
  }

  getComment(postID){
    return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=' + postID)
      .map(res => res.json());
    }
  }
