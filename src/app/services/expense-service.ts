import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Expense, ExpenseAttrs } from '../models/expense';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient) { }
  baseUrl: string = '/api/expenses/';

  getExpenses(): Observable<Expense[]> {
    return this.http.get<ExpenseAttrs[]>('/api/expenses').pipe(
      map((data) => data.map((expenseAttrs) => new Expense(expenseAttrs)))
    );
  }

  getExpenseById(id: number): Observable<Expense> {
    return this.http.get<ExpenseAttrs>(this.baseUrl + id);
  }

  createExpense(expense: Expense): Observable<Expense> {
    return this.http.post<ExpenseAttrs>(this.baseUrl, expense);
  }

  updateExpense(expense: Expense): Observable<Expense> {
    return this.http.put<ExpenseAttrs>(this.baseUrl + expense.id, expense);
  }

  deleteExpense(id: number): Observable<Expense> {
    return this.http.delete<Expense>(this.baseUrl + id);
  }

  saveList(expenses: Expense[]) {
    const replacer = (key, value) => value === null ? '' : value;
    const header = Object.keys(expenses[0]);
    let csv = expenses.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
    let csvArray = csv.join('\r\n');

    var blob = new Blob([csvArray], {type: 'text/csv' })
    saveAs(blob, "expenses.csv");
  }


}