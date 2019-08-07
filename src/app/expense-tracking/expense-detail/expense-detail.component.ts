import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.css']
})
export class ExpenseDetailComponent implements OnInit {

  retrievedId: number;

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe();
  }

  ngOnInit() {
    //this.retrievedId = +this.route.snapshot.paramMap.get('id');
  }

}
