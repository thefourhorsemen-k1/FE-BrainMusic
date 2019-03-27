import {Injectable} from '@angular/core';
import {Music} from '../model/music.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  formData: Music;
  public list: Music[];
  private API_URL = 'https://brainmusic-be.herokuapp.com/';

  constructor(private http: HttpClient) {
  }

  postSong(formData: Music) {
    return this.http.post(this.API_URL + 'admin/songs/', formData);
  }

  refreshList() {
    this.http.get(this.API_URL + 'user/songs').toPromise().then(res => this.list = res as Music[]);
    console.log('get');
  }


  putSong(formData: Music) {
    return this.http.put(this.API_URL + 'admin/songs/' + formData.id, formData);
  }


  getCateSong(category: string) {
    return this.http.get(this.API_URL + 'category/' + category);
  }


  deleteSong(id: number) {
    return this.http.delete(this.API_URL + 'admin/songs/' + id);
  }
}
