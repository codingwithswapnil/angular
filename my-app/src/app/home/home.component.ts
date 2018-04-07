import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { PostsService } from '../posts.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  posts: any[];
  service_posts: any[];
  todos: any[];
  users: any[];
  comments: any[];

  constructor (public http: Http, public postsService: PostsService, public loginService: LoginService, public router: Router){

    if(!loginService.loginStatusByService)
      router.navigateByUrl('/login');
    else
    {
      this.service_posts = this.postsService.getServicePosts();
  
      this.postsService.getPosts()
      .subscribe( res => {
        this.posts = res;
      });
  
      this.postsService.getTodos()
      .subscribe( res => {
        this.todos = res;
      });
  
      this.postsService.getUsers()
      .subscribe( res => {
        this.users = res;
      }); 
    }
  } 

  renderCommentsByPost(postID){

    this.postsService.getComment(postID)
    .subscribe( res => {
      this.comments = res;
    });
  }

  ngOnInit() {
  }
}
