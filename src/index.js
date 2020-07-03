import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

import { Exchange } from './../src/exchange'; 

$(document).ready(function() {

  let exchange;

  $('#exchange-amount').submit(function(event) {
    event.preventDefault();

    const from = $('#currency-type-from').val();
    const to = $('#currency-type-to').val();
    const value = parseInt($('#amount').val());

    exchange = new Exchange(from, to, value);

    exchange.convert();

  });
});