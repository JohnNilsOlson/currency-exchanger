import { getRates } from './../src/exchange-service';

export class Exchange {
  constructor(to, value) {
    this.to = to;
    this.value = value;
    this.code;
    this.conversionRate;
    this.convertedValue;
    this.output;
  }

  async convert() {
    let apiResponse = await getRates();
    if (!apiResponse) {
      this.output = 'Sorry, there was an error handling your request.';
    } else if (apiResponse.result === "error") {
      this.output = Object.values(apiResponse);
    } else {
      let rateArray = Object.entries(apiResponse.conversion_rates);
      for (let i of rateArray) {
        if (i.includes(this.to) === true) {
          this.code = i[0];
          this.conversionRate = i[1];
          this.convertedValue = (this.value * this.conversionRate).toFixed(2);
          this.output = 'At the current rate of ' + this.conversionRate + ', ' + this.value + ' USD' + ' is equal to ' + this.convertedValue + ' ' + this.to;
          break;
        } else {
          this.output = 'Sorry, this currency is not supported.';
        }
      }    
    }
  }
}