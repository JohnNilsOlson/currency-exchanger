import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

import { Exchange } from './../src/exchange'; 

$(document).ready(function() {
  $('#exchange').submit(function(event) {
    event.preventDefault();

    const to = $('#currency-type-to').val();
    const value = parseInt($('#amount').val());

    let newExchange = new Exchange(to, value);

    $.when(newExchange.convert()).done(function() {
      $('#output').text(newExchange.output);
    });
  });
});