import { Component, OnInit } from '@angular/core';
import { ApipostService } from '../services/apipost.service';

type Post = {
  id: number;
  title: string;
  body: string;
};

@Component({
  selector: 'app-apipage',
  imports: [],
  templateUrl: './apipage.component.html',
  styleUrl: './apipage.component.css',
})
export class ApipageComponent implements OnInit {
  posts: Post[] = [];

  constructor(private apipostService: ApipostService) {}

  ngOnInit(): void {
    this.apipostService.showPosts().subscribe((data) => {
      this.posts = data.slice(0, 10);
    });
  }
}
