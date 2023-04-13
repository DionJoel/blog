import { Component, OnInit,Input  } from '@angular/core';

import { BlogEntry } from '../models/blog-entry';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.css']
})
export class BlogEntryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() entry?: BlogEntry;

}
