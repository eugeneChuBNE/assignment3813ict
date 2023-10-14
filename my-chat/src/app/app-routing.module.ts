import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { GroupComponent } from './group/group.component';
import { ChannelComponent } from './channel/channel.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  //{ path: 'group', component: GroupComponent },
  { path: 'channel', component: ChannelComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
