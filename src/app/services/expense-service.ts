import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Expense, ExpenseAttrs } from '../models/expense';

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


}