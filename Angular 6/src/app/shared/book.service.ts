import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Book} from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks() {
    console.log(environment.apiBaseUrl+'/books');
    return this.http.get(environment.apiBaseUrl + '/books');
  }

  getBookById(bookName: string) {
    return this.http.get<Book[]>(environment.apiBaseUrl + '/books/' + bookName);
  }
  deleteBook(id: number) {
    return this.http.delete<Book>(environment.apiBaseUrl + /books/ + id);
  }

}
