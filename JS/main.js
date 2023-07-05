// Channels Auto Slider
var channels = '.channels_slider',
    channel = $(channels+' img').innerWidth();

function append_channel() {
  $(channels+' img').first().appendTo($(channels));
}

// function prepend_channel() {
//   $(channels+' img').last().prependTo($(channels));
// }

// Automatic sliding every 3 seconds
setInterval(function() {
  append_channel();
}, 2000);


// Cards Slider
var cards = '.sticky_slider',
    card = $(cards+' .card').innerWidth();

function append_card() {
  $(cards+' .card').first().appendTo($(cards));
}

function prepend_card() {
  $(cards+' .card').last().prependTo($(cards));
}

$('.prev_card').click(function() {
  prepend_card();
});

$('.next_card').click(function() {
  append_card();
});

// Automatic sliding every 6 seconds
setInterval(function() {
  append_card();
}, 6000);

// Slider For Movies
var slides = '.slider',
    slide = $(slides+' img').innerWidth();

function append() {
  $(slides+' img').first().appendTo($(slides));
}

function prepend() {
  $(slides+' img').last().prependTo($(slides));
}

$('.prev').click(function() {
  prepend();
});

$('.next').click(function() {
  append();
});

// Automatic sliding every 3 seconds
setInterval(function() {
  append();
}, 3000);



// Slider For Shows / Series
var shows = '.slider__shows',
    show = $(shows+' img').innerWidth();

function append__show() {
  $(shows+' img').first().appendTo($(shows));
}

function prepend__show() {
  $(shows+' img').last().prependTo($(shows));
}

$('.prev__serie').click(function() {
  prepend__show();
});

$('.next__serie').click(function() {
  append__show();
});

// Automatic sliding every 5 seconds
setInterval(function() {
  append__show();
}, 6000);


// make scrolling between section a little slow
// $(document).ready(function() {
//   // Smooth scroll behavior for ID links
//   $('a[href^="#"]').on('click', function(event) {
//     var target = $(this.getAttribute('href'));

//     if (target.length) {
//       event.preventDefault();
//       $('html, body').animate({
//         scrollTop: target.offset().top
//       }, 4000); // Adjust the duration as needed
//     }
//   });
// });


// $(document).ready(function() {
//   // Smooth scroll behavior for ID links
//   $('a[href^="#"]').on('click', function(event) {
//     var target = $(this.getAttribute('href'));

//     if (target.length) {
//       event.preventDefault();
//       var sectionTop = target.offset().top;
//       $('html, body').animate({
//         scrollTop: sectionTop
//       }, 0); // Adjust the duration as needed
//     }
//   });
// });


// FAQ Section | show & hide the answer
var faqItem = document.getElementsByClassName('faq_item');

for (var i = 0; i < faqItem.length; i++) {
  var question = faqItem[i].querySelector('.question');
  var answer = faqItem[i].querySelector('.answer_box');

  question.addEventListener('click', showAnswer);
}

function showAnswer() {
  var answer = this.nextElementSibling;
  for(var j = 0; j < faqItem.length; j++) {
    var answer_box = faqItem[j].querySelector('.answer_box');
    if (answer != answer_box)
      answer_box.style.display = 'none';
  }
  answer.style.display = (answer.style.display === 'none') ? 'block' : 'none';
}
