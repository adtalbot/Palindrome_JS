var palindrome = function(word) {
  var opposite = word.split('').reverse().join('');
  if (opposite !== word) {
    return 'is not a palindrome';
  } else {
    return 'is a palindrome';
  }
};

$(document).ready(function() {
  $('form#palindrome').submit(function(event) {
    var input = ($('input#input').val());
    var result = palindrome(input);


    $('.input').text(input);
    $('.result').text(result);

    $('#result').show();
    event.preventDefault();
  });
});
