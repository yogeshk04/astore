import { Component, OnInit } from '@angular/core';

const ROW_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  cols = 3;
  rowHeight = ROW_HEIGHT[this.cols];
  category: string | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

  onClumnsCountChanges(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROW_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string): void{
    this.category = newCategory;
  }
}
