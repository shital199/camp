import { Component } from '@angular/core';
import { JsonDataService } from './json-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-json-server-demo';
  posts: any[] = [];
  constructor(private jsonDataService: JsonDataService) {}
  ngOnInit() {
    this.jsonDataService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
