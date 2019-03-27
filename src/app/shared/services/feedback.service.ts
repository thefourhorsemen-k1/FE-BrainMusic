import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Feedback} from '../model/feedback.model';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  formData: Feedback;
  list: Feedback[];
  private readonly API_URL_USER = 'https://brainmusic-be.herokuapp.com/feedback/';
  private readonly API_URL_ADMIN = 'https://brainmusic-be.herokuapp.com/admin/feedbacks/';

  constructor(private http: HttpClient) {
  }

  getList() {
    return this.http.get(this.API_URL_ADMIN).toPromise().then(res => this.list = res as Feedback[]);
  }

  deleteFeedback(id: number) {
    return this.http.delete(this.API_URL_ADMIN + id);
  }

  createFeedback(feedback: Partial<Feedback>): Observable<Feedback> {
    return this.http.post<Feedback>(this.API_URL_USER, feedback);
  }

}
