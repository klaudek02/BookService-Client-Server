import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Book} from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  createBook(book: Book)
  {
    return this.http.post(environment.bookBaseUrl, book);
  }
  getBooks() {
    return this.http.get(environment.bookBaseUrl);
  }
  editBook(book: Book) {
    return this.http.put(environment.bookBaseUrl + '/' + book._id, book);
  }
  deleteBook(id: string) {
    return this.http.delete<Book>(environment.bookBaseUrl + '/' + id);
  }

  getBookById(id: string) {
    return this.http.get<Book>(environment.bookBaseUrl + '/' + id);
  }
}
