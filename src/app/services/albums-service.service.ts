import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserObject } from '../interface/user';
import { ActivityObject } from '../models/activities';
import { AlbumObject } from '../models/album';
import { PhotoObject } from '../models/photos';

let apiUrl ='https://jsonplaceholder.typicode.com/';

@Injectable({
  providedIn: 'root'
})
export class AlbumsServiceService {

  constructor(private http:HttpClient) { }

  private ejecutarQuery<T>(query:string){
    query = apiUrl+query;
    return this.http.get<T>(query);
  }

  getUsers(){
    return this.ejecutarQuery<UserObject[]>(`users/`);
 }

 getAlbums(id:string){
   return this.ejecutarQuery<AlbumObject[]>(`users/${id}/albums`);
 }

 getPhotos(id:string){
  return this.ejecutarQuery<PhotoObject[]>(`albums/${id}/photos`);
}
  getTodos(id:string){
    return this.ejecutarQuery<ActivityObject[]>(`users/${id}/todos`);
  }


}
