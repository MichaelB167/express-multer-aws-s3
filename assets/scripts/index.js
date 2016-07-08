'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

$(() => {
  $('#application-x-www-form-urlencoded').on('submit', function(e) {
    let formData = new FormData(this);
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/uploads',
      processData: false,
      data: formData,
    }).done((data) => console.log(data))
    .fail((error) => console.error(error));
  });
});
