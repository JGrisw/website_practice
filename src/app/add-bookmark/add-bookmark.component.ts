import { BookmarkService } from './../shared/bookmark.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Bookmark } from '../shared/bookmark.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {

  showValidationErrors: boolean;

  constructor(private bookmarkService: BookmarkService, private router: Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm){
    const{ name, url } = form.value;
    const bookmark = new Bookmark(name, url);
    this.bookmarkService.addBookmark(bookmark);
    this.router.navigateByUrl('bookmarks');

  }

}