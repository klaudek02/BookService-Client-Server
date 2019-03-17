import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BookService} from '../../../shared/book.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css']
})
export class CreatebookComponent implements OnInit {
  createForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,
              private bookService: BookService) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      _id: [],
      bookName: ['', Validators.required],
      genre: ['', Validators.required],
      premiereDate: ['', Validators.required]
    });
  }
  onSubmit() {
    this.bookService.createBook(this.createForm.value)
      .pipe(first())
      .subscribe();
    this.router.navigate(['books']);
  }

}
