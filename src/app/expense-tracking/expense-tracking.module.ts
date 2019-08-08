import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseTrackingRoutingModule } from './expense-tracking-routing.module';
import { ExpenseComponent } from './expense/expense.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';
import { ExpenseService } from '../services/expense-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateExpenseComponent } from './create-expense/create-expense.component';
import { DeleteExpenseComponent } from './delete-expense/delete-expense.component';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';
import { SortPipe } from '../pipes/SortPipe';


@NgModule({
  declarations: [ExpenseComponent, ExpenseDetailComponent, CreateExpenseComponent, 
    DeleteExpenseComponent, EditExpenseComponent, SortPipe],
  imports: [
    CommonModule,
    ExpenseTrackingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ExpenseComponent, ExpenseDetailComponent, CreateExpenseComponent, 
    EditExpenseComponent, DeleteExpenseComponent],
  providers: [ExpenseService]
})
export class ExpenseTrackingModule { }
