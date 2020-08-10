function main() {
$('#number-chooser').submit(function (e){
  e.preventDefault();
  let posInput = $('#number-choice').val();
  console.log(posInput);
  $('.js-results').empty();

  // -------- appending loop --------
  let results = [];
  for (let i=1 ; i <= posInput ; i++) {
    if (i % 3 === 0 && i % 5 === 0) { 
      //if div by 3 && 5 => fizz-buzz
      results.push(`<div class='fizz-buzz-item fizz-buzz'><span>Fizz-Buzz</span></div>`);
    }
    else if (i % 5 === 0){
      //if div by 5 => buzz
      results.push(`<div class='fizz-buzz-item buzz'><span>Buzz</span></div>`);
    }
    else if (i % 3 === 0){
      //if div by 3 => fizz
      results.push(`<div class='fizz-buzz-item fizz'><span>Fizz</span></div>`);
    }
    else {
      //else => display posInput
      results.push(`<div class='fizz-buzz-item'><span>${i}</span></div>`);
    }

  }
  $('.js-results').append(results);
})
}

main();