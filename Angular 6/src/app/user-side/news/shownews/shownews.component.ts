import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BookService} from '../../../shared/book.service';
import {NewsService} from '../../../shared/news.service';
import {News} from '../../../shared/model/news.model';
import {UserService} from "../../../shared/user.service";

@Component({
  selector: 'app-shownews',
  templateUrl: './shownews.component.html',
  styleUrls: ['./shownews.component.css']
})
export class ShowNewsComponent implements OnInit {

  news;
  userName;
  constructor(private router: Router,
                private newsService: NewsService, private userService: UserService) { }

  ngOnInit() {
    console.log('asjdasd');
    const newsId = localStorage.getItem('getNewsId');
    console.log(newsId);
    if (!newsId) {
      alert('Invalid action');
      this.router.navigate(['']);
      return;
    }
    this.newsService.getNewsById(newsId).subscribe(
      res => {
        console.log(JSON.stringify(res));
        this.news = res[0];
        this.userService.getUsernameById(this.news.userId).subscribe(
          ree => {
            this.userName = ree;
          }
        );
      },
      err => {
        console.log(err);

      }
    );
  }

  addComment() {
    console.log(this.news.userId);
  }
}
