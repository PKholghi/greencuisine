import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path:'', component:PostsComponent },
  { path:'api/create', component:CreateComponent },
  { path: 'api/update', component: UpdateComponent },
  { path: 'api/contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
