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
      $('#error').text('There was an error handling your request');
    } else {
      let rateArray = Object.entries(apiResponse.conversion_rates);
      rateArray.forEach((i) => {
        if (i.includes(this.to) === true) {
          this.code = i[0];
          this.conversionRate = i[1];
          this.convertedValue = (this.value * this.conversionRate);
        }
      });    
    }
  }
}