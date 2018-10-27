import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksComponent } from './books/books.component';
import { AddUserComponent } from './add-user/add-user.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'add-book', component: AddBookComponent },
  { path: 'books', component: BooksComponent },
  { path: 'add-user', component: AddUserComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
