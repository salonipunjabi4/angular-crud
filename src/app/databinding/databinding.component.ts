import { Component } from '@angular/core';
import { Customer } from '../model/Customer';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  x:number = 100;

  delete: boolean = false;
  test1: string = "Starting value from test";
  boundValue: number = 2000;

  customer:Customer = new Customer();
  customerObj: any = {
    code: 1001,
    name: 'King Kocher',
    amount: 12000
  }

  callMe(): void {
    alert("Method called");
  }
}
