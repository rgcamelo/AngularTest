import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsServiceService } from 'src/app/services/albums-service.service';
import { PhotoObject } from '../../models/photos';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  id:string;
  photos:PhotoObject[] = []

  constructor(private activeRoute: ActivatedRoute,
    private albumService: AlbumsServiceService) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.cargarPhotos();
  }

  cargarPhotos(){
    this.albumService.getPhotos(this.id).subscribe( res =>{
      this.photos = [...res];
    })
  }



}
