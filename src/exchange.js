import $ from "jquery";

import { getRates } from './../src/exchange-service';

export class Exchange {
  constructor(from, to, value) {
    this.from = from;
    this.to = to;
    this.value = value;
    this.code;
    this.conversionRate;
    this.convertedValue;
  }

  async convert() {
    let apiResponse = await getRates();
    if (!apiResponse) {
      $('#output').text('Sorry, there was an error handling your request.');
    } else {
      let rateArray = Object.entries(apiResponse.conversion_rates);
      rateArray.forEach((i) => {
        if (i.includes(this.to) === true) {
          this.code = i[0];
          this.conversionRate = i[1];
          this.convertedValue = (this.value * this.conversionRate);
          $('#output').text(this.value + ' ' + this.from + ' is equal to ' + this.convertedValue + ' ' + this.to);
        }
      });    
    }
  }
}