import { Component, OnInit } from '@angular/core';
import { UploadService } from '../shared/upload.service';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-track-equalizer',
  templateUrl: './track-equalizer.component.html',
  styleUrls: ['./track-equalizer.component.scss']
})


export class AppTrackControllerComponent implements OnInit {

  public tracks:Array<any>;
  constructor(uploadService:UploadService) {
    this.tracks = uploadService.tracks;
  }

  ngOnInit(): void {
  
  }
}
