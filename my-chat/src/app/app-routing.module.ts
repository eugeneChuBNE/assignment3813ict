import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { GroupComponent } from './group/group.component';
import { ChannelComponent } from './channel/channel.component';


const routes: Routes = [
  //{ path: 'group', component: GroupComponent },
  { path: 'channel', component: ChannelComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
