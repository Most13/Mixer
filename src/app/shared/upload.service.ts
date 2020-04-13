import { Injectable } from '@angular/core';
import * as jsmediatags from 'node_modules/jsmediatags'
import { BehaviorSubject, Subject, Observable, combineLatest, zip } from 'rxjs';

import { map, combineAll } from 'rxjs/operators';


export interface trackMetaData {
    title: string;
    artist: string;
    album: string;
    year: number;
    albumNumber: number;
    picture: string;
    additionalData?: Array<object>;
}

export interface trackDataString {
    dataString: string;
}

export interface Track extends trackMetaData, trackDataString {}

@Injectable({providedIn: 'root'})

export class UploadService {

    public trackMetaDataSubject    = new Subject<trackMetaData>();
    public trackMetaDataSubject$   = this.trackMetaDataSubject.asObservable();

    public trackBlobDataSubject    = new Subject<trackDataString>();
    public trackBlobDataSubject$   = this.trackBlobDataSubject.asObservable();

    public combined$: Observable<object>;

    public tracks: Track[] = [];


    constructor() {
        // this.combined$ = combineLatest(this.trackMetaDataSubject$, this.trackBlobDataSubject$);

        zip(this.trackMetaDataSubject$, this.trackBlobDataSubject$)
        .subscribe(arr => {
            const trackMetaData: trackMetaData = arr[0];
            const trackBlobData: trackDataString = arr[1];
            const res:Track = {
                            ...trackMetaData,
                            ...trackBlobData
                        };

                if(this.tracks.indexOf(res) === -1) {
                    this.tracks.push(res);
                    console.log(this.tracks);
                }
           })
        
        // this.combined$.pipe(
        //     map(arr => {
        //         const trackMetaData: trackMetaData = arr[0];
        //         const trackBlobData: trackDataString = arr[1];

        //         const res : Track = {
        //             ...trackMetaData,
        //             ...trackBlobData
        //         };

        //         if(this.tracks.indexOf(res) === -1) {
        //             this.tracks.push(res);
        //             console.log(this.tracks);
        //         }
        //         return res;
        //     })
        // ).subscribe();
    }

    getTrackGeneralInfo(fileData) {
        jsmediatags.read(fileData, {
            onSuccess: (tag:any) =>  {
                console.log(tag)
                const t: trackMetaData = {
                    title:  tag.tags.title,
                    artist: tag.tags.artist,
                    album: tag.tags.album,
                    year: +tag.tags.year,
                    albumNumber: +tag.tags.track,
                    picture: tag.tags.picture || ''
                };
                this.trackMetaDataSubject.next(t);
            },
            onError: (error) =>  {
                this.trackMetaDataSubject.error(error);
                console.log(error);
            }
        });
    };


    getFileDataString(fileData){
        let reader = new FileReader();
        reader.onload = (e) => {
            const trackDataString: trackDataString = {
                dataString: e.target.result as string
            }
            this.trackBlobDataSubject.next(trackDataString);
        };
        reader.readAsDataURL(fileData);
    };

    onFileLoad(file){
        let fileData:any = file.files[0];
        this.getTrackGeneralInfo(fileData);
        this.getFileDataString(fileData);
    };
    
}