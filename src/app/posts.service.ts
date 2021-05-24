import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from './posts.model';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(public http:HttpClient) { }

  storePostsDetails(posts:any):Observable<Posts>{

 return this.http.post<Posts>("http://localhost:3000/posts",posts);
  }


  retreivePostsDetails():Observable<Posts[]> {
   return this.http.get<Posts[]>("http://localhost:3000/posts") 
  }
  
  deletePostsRecord(id:any):Observable<Posts>{
  return this.http.delete<Posts>("http://localhost:3000/posts/"+id)
  }
  
  updatePostsDetails(posts:any):Observable<Posts>{
  return this.http.put<Posts>("http://localhost:3000/posts/"+posts.id,posts);
  }
  
}
