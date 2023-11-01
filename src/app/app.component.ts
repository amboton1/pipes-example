import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  payment = {
    receiverName: '',
    paymentDate: '',
    amount: ''
  };

  onReceiverInputChange(event: any) {
    this.payment.receiverName = event.target.value;
  }

  onDateInputChange(event: any) {
    this.payment.paymentDate = event.target.value;
  }

  onAmountInputChange(event: any) {
    this.payment.amount = event.target.value;
  }
}
