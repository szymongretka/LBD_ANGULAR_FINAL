export interface ExpenseAttrs {

    id: number;
    amountSpent: number; 
    description: string;
    category: string;
    details: string; 

}

export class Expense {

    id: number;
    amountSpent: number; 
    description: string;
    category: string;
    details: string;  

	/*constructor($id: number, $name: string, $amount: number) {
		this.amount = $amount;
        this.name = $name;
        this.id = $id;
    }*/
    
    constructor(attrs: Partial<ExpenseAttrs> = {}) {
		this.amountSpent = attrs.amountSpent;
        this.description = attrs.description;
        this.id = attrs.id;
        this.category = attrs.category;
        this.details = attrs.details;
    }

}