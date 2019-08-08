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
  submitted = false;
  expenseService: ExpenseService;

  constructor(private formBuilder: FormBuilder, private router: Router, expenseService: ExpenseService) {
    this.expenseService = expenseService;
   }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      description: ['', Validators.required],
      amountSpent: ['', Validators.required],
      category: ['', Validators.required],
      details: ['']
    });

  }

  onSubmit() {
    this.submitted = true;
    const result: Expense = Object.assign({}, this.addForm.value);
    if (this.addForm.invalid) {
      return;
    }

    this.expenseService.createExpense(result).subscribe( data => {
        this.router.navigate(['/expenses']);
      });
  }

  get description() { return this.addForm.get('description'); }
  get amountSpent() { return this.addForm.get('amountSpent'); }
  get category() { return this.addForm.get('category'); }
  get details() { return this.addForm.get('details'); }

}
