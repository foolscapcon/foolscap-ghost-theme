/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();

        function casperFullImg() {
            $("img").each( function() {
                var contentWidth = $(".post-content").outerWidth(); // Width of the content
                var imageWidth = $(this)[0].naturalWidth; // Original image resolution

                if (imageWidth >= contentWidth) {
                    $(this).addClass('full-img');
                } else {
                    $(this).removeClass('full-img');
                }
            });
        };

        casperFullImg();
        $(window).smartresize(casperFullImg);

        // This function will be executed when the user scrolls the page.
        $(window).scroll(function(e) {
          // Get the position of the location where the topnav starts.
          var topnav_anchor = $('.topnav_anchor').offset().top;
          var topnav_height = $('.topnav').height();
     
          // Check if the user has scrolled and the current position is after the topnav start location and if its not already fixed at the top
          if ($(this).scrollTop() >= topnav_anchor && $('.topnav').css('position') != 'fixed'){    
            // Change the CSS of the topnav to fix it at the top of the screen.
            $('.topnav').css({
              'position': 'fixed',
              'top': '0px'
            });
            // Changing the height of the topnav anchor to that of topnav so that there is no change in the overall height of the page.
            $('.topnav_anchor').css('height', topnav_height);
            // Show the minilogo
            $('.minilogo').fadeIn('fast');
          }
          else if ($(this).scrollTop() < topnav_anchor && $('.topnav').css('position') != 'relative') {
            // If the user has scrolled back to the location above the topnav anchor place it back into the content.
        
            // Change the height of the topnav anchor to 0 and now we will be adding the topnav back to the content.
            $('.topnav_anchor').css('height', '0');
         
            // Change the CSS and put it back to its original position.
            $('.topnav').css({
              'position': 'relative'
            });
            // Hide the minilogo
            $('.minilogo').fadeOut('fast');
          }
        });
        
        // Set all the contentDivs for the ethos tabber to the same height and hide all but one.
        var contentDivs = $('#ethos .hovercontent>div');
        var height = 0;
        contentDivs.each(function() {height = Math.max(height, $(this).height());});
        contentDivs.height(height);
        contentDivs.filter(':visible').filter(':not(#belonging)').hide();
        $('#ethos a[href^=#]').click(function(e) {
          $('#ethos .hovericons img').removeClass('activehover');
          $('#ethos .hovercontent>div').filter(':visible').hide();
          $(this).find('img').addClass('activehover');
          var target = $(this).attr('href');
          $(target).show();
          return false;
        });

    });

}(jQuery));

(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

(function($) {
    // Scroll-past behavior
    $(document).on('click', '[data-role=scroll-to]', function() {
        var targetSelector = $(this).attr('data-target'),
            targetElem = targetSelector ? $(targetSelector) : null;
        if (targetElem) {
            $('html,body').animate({ scrollTop: targetElem.offset().top });
        }
    });
})(jQuery);
