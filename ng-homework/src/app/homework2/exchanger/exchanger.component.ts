import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IExchangeRateResponse } from '../IExchangeRateResponse/exhange-rate.interface';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'exchanger',
  templateUrl: './exchanger.component.html',
  styleUrls: ['./exchanger.component.scss']
})

export class ExchangerComponent implements OnDestroy {
  currencies = [
    { code: 'EUR', name: 'Euro' },
    { code: 'USD', name: 'United States Dollar' },
    { code: 'GEL', name: 'Georgian Lari' },
    { code: 'INR', name: 'Indian Rupee' },
    { code: 'JPY', name: 'Japanese Yen' },
  ];

  exchangeRate: number = 0;

  private subscription: any;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder) {
  }

  public form = this.fb.group({
    left: this.fb.group({
      currency1: [''],
      value1: [1]
    }),
    right: this.fb.group({
      currency2: [''],
      value2: [1]
    })
  });
  get currency1(): string {
    return this.form.get('left.currency1')?.value || '';
  }
  get currency2(): string {
    return this.form.get('right.currency2')?.value || '';
  }
  get value1(): number {
    return this.form.get('left.value1')?.value || 0;
  }
  get value2(): number {
    return this.form.get('right.value2')?.value || 0;
  }

  set currency1(value: string) {
    this.form.get('left.currency1')!.setValue(value);
  }
  set currency2(value: string) {
    this.form.get('right.currency2')!.setValue(value);
  }
  set value1(value: number) {
    this.form.get('left.value1')!.setValue(value);
  }
  set value2(value: number) {
    this.form.get('right.value2')!.setValue(value);
  }

  updateValues(): void {
    this.value2 = this.value1 * this.exchangeRate;
  }
  getExchangeRate(): void {
    if (this.currency1.length > 0 && this.currency2.length > 0) {
      let url: string = `https://v6.exchangerate-api.com/v6/29d3ed871c8593eff72710e3/pair/${this.currency1}/${this.currency2}`;
      this.subscription = this.http.get<IExchangeRateResponse>(url).subscribe({
        next: (response) => {
          console.log(response);
          this.exchangeRate = response['conversion_rate'];
          this.updateValues();
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }
  switchCurrencies(): void {
    let temp: string = this.currency1;
    this.currency1 = this.currency2;
    this.currency2 = temp;
    this.getExchangeRate();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
