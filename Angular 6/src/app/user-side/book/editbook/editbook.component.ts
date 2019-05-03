import { Component, OnInit } from '@angular/core';
import {Book} from '../../../shared/model/book.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../../shared/book.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  book: Book;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router,
              private bookService: BookService) { }

  ngOnInit() {
    const bookId = localStorage.getItem('editBookId');
    if (!bookId) {
      alert('Invalid action');
      this.router.navigate(['']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      bookName: ['', Validators.required],
      genre: ['', Validators.required],
      premiereDate: ['', Validators.required]
    });
    this.bookService.getBookById(bookId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }
  onSubmit() {
    this.bookService.editBook(this.editForm.value)
      .pipe(first())
      .subscribe();
        this.router.navigate(['books']);


  }

}
