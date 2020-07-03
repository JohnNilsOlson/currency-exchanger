import $ from "jquery";

import { getRates } from './../src/exchange-service';

export class Exchange {
  constructor(from, to, value) {
    this.from = from;
    this.to = to;
    this.value = value;
  }

  async findRate() {
    let apiResponse = await getRates();
    if (!apiResponse) {
      $('#error').text('There was an error handling your request');
    } else {
      console.log(apiResponse.conversion_rates);
    }
  }
}