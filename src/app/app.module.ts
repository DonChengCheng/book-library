import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import { AppComponent } from './app.component';
import { MyMaterialModule } from '../material-module';
import { AddBookComponent } from './add-book/add-book.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AddUserComponent } from './add-user/add-user.component';
import { BorrowBookComponent } from './borrow-book/borrow-book.component'
@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    BooksComponent,
    AddUserComponent,
    BorrowBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MyMaterialModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
