import { Component, AfterViewInit } from '@angular/core';
import { UploadService } from '../shared/upload.service';
import { AudioService } from '../shared/audio.service';
import {faPlay, faPause} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  providers: [AudioService]
})

export class PlayerComponent implements AfterViewInit   {

  faPlay = faPlay;

  public tracks:Array<any>;
  constructor(uploadService:UploadService, public audioService:AudioService) {
    this.tracks = uploadService.tracks;
  }

  ngAfterViewInit(): void {
    console.log(this.tracks)
    this.audioService.attachListeners();
    this.audioService.setAudio(this.tracks[0].dataString);
  }
  
  ngOnInit(): void {}

  toggleAudio() {
    this.audioService.toggleAudio();
    this.faPlay = (this.audioService.audio.paused) ? faPlay : faPause;
  }
}
