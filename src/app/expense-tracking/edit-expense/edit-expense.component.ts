import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseService } from 'src/app/services/expense-service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent implements OnInit {

  expense: Expense;
  editForm: FormGroup;
  expenseService: ExpenseService;

  constructor(private formBuilder: FormBuilder, private router: Router, expenseService: ExpenseService) {
    this.expenseService = expenseService;
   }

  ngOnInit() {
    let expenseId = window.localStorage.getItem("editExpenseId");

    if(!expenseId) {
      alert("Invalid action.")
      this.router.navigate(['expenses']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      description: ['', Validators.required],
      amountSpent: ['', Validators.required],
      category: ['', Validators.required]
    });

    this.expenseService.getExpenseById(+expenseId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.expenseService.updateExpense(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['expenses']);
        },
        error => {
          alert(error);
        });
  }

}
