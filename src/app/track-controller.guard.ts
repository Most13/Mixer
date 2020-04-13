import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UploadService } from './shared/upload.service';

@Injectable({
  providedIn: 'root'
})

export class TrackControllerGuard implements CanActivate {
  public TrackCount:number;

  constructor (uploadService: UploadService){
    this.TrackCount = uploadService.tracks.length;
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.TrackCount > 0){
      return true;
    }
    else{
      return false;
    }
  }
  
}
