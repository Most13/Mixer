import { Component, OnInit, Directive} from '@angular/core';
import { UploadService } from '../shared/upload.service';
import { AudioService } from '../shared/audio.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  providers: [AudioService]
})



export class AppUploadComponent implements OnInit {

  public Tracks:Array<object>;

  constructor(private uploadService: UploadService, public audioService: AudioService) {
    this.Tracks = uploadService.tracks
  }

  ngOnInit(): void {}
  

  onUpload(file){
    this.uploadService.onFileLoad(file);
  }

}