import {Component, OnInit, ViewChild} from '@angular/core';
import {Book} from '../../shared/book.model';
import {BookService} from '../../shared/book.service';
import {Router} from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: MatTableDataSource<Book>;
  displayedColumns: string[] = ['bookName', 'genre', 'premiereDate'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe((data: Book[]) => {
        this.books = new MatTableDataSource<Book>(data);
        this.books.sort = this.sort;
        this.books.paginator = this.paginator;
      });
  }

  deleteBook(book: Book) {
    this.bookService.deleteBook(book._id)
      .subscribe(data => {
        this.books.data = this.books.data.filter(i => i !== book);
    });
    return this.router.navigate(['books']);
  }

  editBook(book: Book) {
    localStorage.removeItem('editBookId');
    localStorage.setItem('editBookId', book._id);
    return this.router.navigate(['editbook']);
  }

  createBook() {
    return this.router.navigate(['createbook']);
  }
}
