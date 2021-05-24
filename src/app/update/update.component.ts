import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Posts } from '../posts.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  postsRef = new FormGroup({
  id:new FormControl(),
  title:new FormControl(),
  author: new FormControl(),
  desc: new FormControl()
});
resultMessage:string=""
posts?:Array<Posts>;

idVar:boolean = false;

buttonValue:string="Store Rec";

constructor(public pser:PostsService) { 
  console.log("constructor called..")
}

ngOnInit(): void {
  console.log("ngOnInit")
  this.pser.retreivePostsDetails().subscribe(result=>this.posts=result);
}

retreivePosts(){
  
} 

storePosts(){
  
  if(this.buttonValue=="Store Rec") {

  let posts = this.postsRef.value;
  this.pser.storePostsDetails(posts).subscribe(result=>{
      this.resultMessage="Posted successfully!"
      this.pser.retreivePostsDetails().subscribe(result=>this.posts=result);
  },error=>{
      this.resultMessage="Post unsuccessful, please check your form.";
  })

}else {
    
    let posts = this.postsRef.value;
    this.pser.updatePostsDetails(posts).subscribe(result=>{
        this.resultMessage="Post updated successfully"
        this.pser.retreivePostsDetails().subscribe(result=>this.posts=result);
        this.idVar=false;
        this.buttonValue="Store Rec";      
    })
}

this.postsRef.reset();
}

deleteRec(id:any){
  this.pser.deletePostsRecord(id).subscribe(result=>{
    this.pser.retreivePostsDetails().subscribe(result=>this.posts=result);
  })
}

updateRec(posts:any){
  this.postsRef.setValue(posts);
  this.idVar=true;
  this.buttonValue="Update Rec";
}


}
