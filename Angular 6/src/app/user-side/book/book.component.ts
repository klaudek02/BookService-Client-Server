import { Component, OnInit } from '@angular/core';
import {Book} from '../../shared/book.model';
import {BookService} from '../../shared/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[];
  newRow: boolean;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe((data: Book[]) => {
        this.books = data;
      });
  }

  deleteBook(book: Book) {
    this.bookService.deleteBook(book._id)
      .subscribe(data => {
        this.books = this.books.filter(u => u !== book);
      });
    return this.router.navigate(['books']);
  }

  editBook(book: Book) {
    localStorage.removeItem('editBookId');
    localStorage.setItem('editBookId', book._id);
    return this.router.navigate(['editbook']);
  }

  addBook() {

  }
}
