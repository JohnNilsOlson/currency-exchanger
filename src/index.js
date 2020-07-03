import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

import { Exchange } from './../src/exchange';
// import { getRates } from './../src/exchange-service'; 

function getElements(response) {
  if (response) {
    console.log(response);
  } else {
    $('#error').text('There was an error handling your request');
  }
}

$(document).ready(function() {

  let exchange;

  $('#exchange-amount').submit(function(event) {
    event.preventDefault();

    const from = $('#currency-type-from').val();
    const to = $('#currency-type-to').val();
    const value = $('#amount').val();

    exchange = new Exchange(from, to, value);
    console.log(exchange);

    fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      })
      .then(function(jsonifiedResponse) {
        getElements(jsonifiedResponse);
      });
  });
});