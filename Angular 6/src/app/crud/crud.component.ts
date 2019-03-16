import { Component, OnInit } from '@angular/core';
import {Book} from '../shared/book.model';
import {BookService} from '../shared/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe((data: Book[]) => {
        this.books = data;
      });
  }

  deleteBook(book: Book) {
    this.bookService.deleteBook(book.id)
      .subscribe(data => {
        this.books = this.books.filter(u => u !== book);
      });
  }
}
