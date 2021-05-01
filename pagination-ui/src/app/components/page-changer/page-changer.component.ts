import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-page-changer',
  templateUrl: './page-changer.component.html',
  styleUrls: ['./page-changer.component.css']
})
export class PageChangerComponent implements OnInit {
  @Input() page: number;
  @Input() perPage: number;
  @Input() array_length: number;
  @Output() changePage = new EventEmitter<any>(true);
  pages: number[] = [];


  constructor() { }

  ngOnInit(): void {
    this.setPageNumber();
  }

  setPageNumber(): void {
    let numberPages = Math.ceil(this.array_length / this.perPage);
    for(let i = 1; i <= numberPages; i++){
      this.pages.push(i);
    }
  }

  setPage(number: number): void{
    this.page = number;
    console.log(this.page);
    this.changePage.emit(this.page);
  }


}
