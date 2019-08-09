import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import { Subscription } from 'rxjs';
import { ExpenseService } from 'src/app/services/expense-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  expenses: Expense[];
  subscribedExpenses: Subscription;

  selectedExpense: Expense;
  expenseService: ExpenseService;
  onSelectedExpense(expense: Expense): void {
    this.selectedExpense = expense;
  }

  clicked: boolean = false;
  isClicked(expense: Expense): boolean {
    this.clicked = !this.clicked;
    if(this.clicked){
      return true;
    } else {
      return false;
    }
  }

  constructor(private router: Router, expenseService: ExpenseService) { 
    this.expenseService = expenseService;
  }

  ngOnInit() {
    this.getExpenses();
  }
   

  ngOnDestroy(){
    if(this.subscribedExpenses !== null){
      this.subscribedExpenses.unsubscribe();
    }
  }

  getExpenses(){
    this.subscribedExpenses = this.expenseService.getExpenses().subscribe({
      next: (expenses) => this.expenses = expenses,
      error: () => alert('Could not get any expenses')
    });
  }

  addExpense(): void {
    this.router.navigate(['create-expense']);
  };

  deleteExpense(expense: Expense): void {
    this.expenseService.deleteExpense(expense.id)
      .subscribe( data => {
        this.expenses = this.expenses.filter(u => u !== expense);
      })
  };

  editExpense(expense: Expense): void {
    window.localStorage.removeItem("editExpenseId");
    window.localStorage.setItem("editExpenseId", expense.id.toString());
    this.router.navigate(['/edit-expense/']);
  };

  saveDetails(expense: Expense): void{
    this.expenseService.updateExpense(expense).subscribe();
  }

  downloadList(): void{
    this.expenseService.saveList(this.expenses);
  }

}
