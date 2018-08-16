document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  // Check if there are any navbar burgers

  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

$(document).ready(function () {
  $('.changewords').changeWords({
    time: 3000,
    animate: 'fadeInUp',
    selector: 'span',
    repeat: true
  });

  $('.changewords').removeClass('hide');

  $('.open-beta-modal').on('click', function (event) {
    event.preventDefault();
    $('.beta-modal').addClass('is-active');
  });

  $('.modal-card-head .delete').on('click', function(){
    $('.beta-modal').removeClass('is-active');
  });
});

(function ($) {
  $.fn.changeWords = function (options) {
    var settings = $.extend({
      time: 1500,
      animate: 'zoomIn',
      selector: 'span',
      repeat: true
    }, options);
    var wordCount = $(settings.selector, this).length;
    var words = $(settings.selector, this);
    words.filter(function () {
      return $(this).attr('data-id') != '1'
    }).css('display', 'none');
    var count = 1;
    var changeThisWord = setInterval(function () {
      ++count;
      var wordOrder = count;
      words.filter(function () {
        return $(this).attr('data-id') == wordOrder
      }).addClass('animated ' + settings.animate).css('display', 'inline-block');
      words.filter(function () {
        return $(this).attr('data-id') != wordOrder
      }).css('display', 'none').removeClass();
      if (count == wordCount) {
        count = 0;
      }
      if (count == 0 && settings.repeat != true) {
        clearInterval(changeThisWord);
      }
    }, settings.time);
  }
}(jQuery));
