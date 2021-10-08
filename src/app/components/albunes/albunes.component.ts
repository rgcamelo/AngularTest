import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsServiceService } from '../../services/albums-service.service';
import { AlbumObject } from '../../models/album';

@Component({
  selector: 'app-albunes',
  templateUrl: './albunes.component.html',
  styleUrls: ['./albunes.component.css']
})
export class AlbunesComponent implements OnInit {

  id:string = '';
  albums : AlbumObject[] = [];

  constructor(private activeRoute: ActivatedRoute,
    private albumService: AlbumsServiceService) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.cargarAlbums();
    console.log(this.id);
  }

  cargarAlbums(){
    this.albumService.getAlbums(this.id).subscribe( res => {
      this.albums = [...res];
    })
  }



}
