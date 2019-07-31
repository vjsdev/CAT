import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cat-footer',
  templateUrl: './cat-footer.component.html',
  styleUrls: ['./cat-footer.component.css']
})
export class CatFooterComponent implements OnInit {
  test: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
