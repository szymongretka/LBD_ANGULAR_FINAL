import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactTrackingModule } from './contact-tracking/contact-tracking.module';
import { ExpenseTrackingModule } from './expense-tracking/expense-tracking.module';
import { RouterModule } from '@angular/router';
import { ExpenseComponent } from './expense-tracking/expense/expense.component';
import { ContactComponent } from './contact-tracking/contact/contact.component';
import { ExpenseDetailComponent } from './expense-tracking/expense-detail/expense-detail.component';
import { ServicesModule } from './services/services.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateExpenseComponent } from './expense-tracking/create-expense/create-expense.component';
import { EditExpenseComponent } from './expense-tracking/edit-expense/edit-expense.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ContactTrackingModule,
    ExpenseTrackingModule,
    AppRoutingModule,
    ServicesModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'expenses', component: ExpenseComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'expenses/:id', component: ExpenseDetailComponent},
      {path: 'create-expense', component: CreateExpenseComponent},
      {path: 'edit-expense', component: EditExpenseComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
