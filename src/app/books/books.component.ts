import { Component } from '@angular/core';


export interface PeriodicElement {
  author: string;
  bookName: number;
  bookCount: number;
  bookLeftCount: number;
  status: number;
  borrowPerson: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {bookName: 1, author: 'Hydrogen', bookCount: 1.0079, bookLeftCount: 12, status: 0, borrowPerson: 'dongchengcheng'},
  {bookName: 2, author: 'Helium', bookCount: 4.0026, bookLeftCount: 12, status: 0, borrowPerson: 'dongchengcheng'},
  {bookName: 3, author: 'Lithium', bookCount: 6.941, bookLeftCount: 12, status: 0, borrowPerson: 'dongchengcheng'},
  {bookName: 4, author: 'Beryllium', bookCount: 9.0122, bookLeftCount: 12, status: 0, borrowPerson: 'dongchengcheng'},
  {bookName: 5, author: 'Boron', bookCount: 10.811, bookLeftCount: 12, status: 0, borrowPerson: 'dongchengcheng'},
  {bookName: 6, author: 'Carbon', bookCount: 12.0107, bookLeftCount: 12, status: 0, borrowPerson: 'dongchengcheng'},
  {bookName: 7, author: 'Nitrogen', bookCount: 14.0067, bookLeftCount: 12, status: 0, borrowPerson: 'dongchengcheng'},
  {bookName: 8, author: 'Oxygen', bookCount: 15.9994, bookLeftCount: 12, status: 0, borrowPerson: 'dongchengcheng'},
  {bookName: 9, author: 'Fluorine', bookCount: 18.9984, bookLeftCount: 12, status: 0, borrowPerson: 'dongchengcheng'},
  {bookName: 10, author: 'Neon', bookCount: 20.1797, bookLeftCount: 12, status: 0, borrowPerson: 'dongchengcheng'},
];

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {
  displayedColumns: string[] = ['bookName', 'author', 'bookCount', 'bookLeftCount',
    'status', 'borrowPerson'];
  dataSource = ELEMENT_DATA;
}
