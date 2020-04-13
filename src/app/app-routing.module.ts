import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppTrackControllerComponent } from './trackEqualizer/track-equalizer.component';
import { AppUploadComponent } from './upload/upload.component';
import { TrackControllerGuard } from './track-controller.guard';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'upload', 
    pathMatch: 'full' 
  },
  {
    path: 'track-controller',
    component: AppTrackControllerComponent,
     canActivate: [TrackControllerGuard]
  },
  { 
    path: 'upload', 
    component: AppUploadComponent 
  },
  { 
    path: '**', 
    redirectTo: '/upload'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
