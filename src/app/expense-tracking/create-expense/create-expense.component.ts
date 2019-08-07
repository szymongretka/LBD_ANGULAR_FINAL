import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseService } from 'src/app/services/expense-service';
import { ExpenseAttrs, Expense } from 'src/app/models/expense';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.css']
})
export class CreateExpenseComponent implements OnInit {

  addForm: FormGroup;
  expenseService: ExpenseService;

  constructor(private formBuilder: FormBuilder, private router: Router, expenseService: ExpenseService) {
    this.expenseService = expenseService;
   }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      description: ['', Validators.required],
      amountSpent: ['', Validators.required],
      category: ['', Validators.required]
    });

  }

  onSubmit() {
    const result: Expense = Object.assign({}, this.addForm.value);

    this.expenseService.createExpense(result).subscribe( data => {
        this.router.navigate(['/expenses']);
      });
  }

}
