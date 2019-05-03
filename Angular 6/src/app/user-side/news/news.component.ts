import {Component, OnInit, ViewChild} from '@angular/core';
import {News} from '../../shared/model/news.model';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Book} from '../../shared/model/book.model';
import {NewsService} from '../../shared/news.service';
import {BookService} from '../../shared/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: MatTableDataSource<News>;
  displayedColumns: string[] = ['topic', 'description', 'postedDate'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getNews()
      .subscribe((data: News[]) => {
        this.news = new MatTableDataSource<News>(data);
        this.news.sort = this.sort;
        this.news.paginator = this.paginator;
      });
  }
  deleteNews(news: News) {
    this.newsService.deleteNews(news._id)
      .subscribe(data => {
        this.news.data = this.news.data.filter(i => i !== news);
      });
    return this.router.navigate(['news']);
  }
  editNews(news: News) {
    localStorage.removeItem('editNewsId');
    localStorage.setItem('editNewsId', news._id);
    return this.router.navigate(['editnews']);
  }
  createNews() {
    return this.router.navigate(['createnews']);
  }
  getNews(news: News) {
    localStorage.removeItem('getNewsId');
    localStorage.setItem('getNewsId', news._id);
    console.log('asdasdas');
    return this.router.navigate(['getnews']);
  }

}
