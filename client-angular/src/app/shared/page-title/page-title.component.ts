import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {
  
  @Input() totalItems = 0;
  @Input() title = '';

  constructor() { }

  ngOnInit(): void {
  }

}
