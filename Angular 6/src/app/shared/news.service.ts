import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {News} from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  createNews(news: News) {
    return this.http.post(environment.newsBaseUrl, news);
  }
  getNews() {
    return this.http.get(environment.newsBaseUrl);
  }
  editNews(news: News) {
    return this.http.put(environment.newsBaseUrl + '/' + news._id, news);
  }
  deleteNews(id: string) {
    return this.http.delete<News>(environment.newsBaseUrl + '/' + id);
  }
  getNewsById(news: News) {
    return this.http.get<News>(environment.newsBaseUrl + '/' + news._id);
  }
}
