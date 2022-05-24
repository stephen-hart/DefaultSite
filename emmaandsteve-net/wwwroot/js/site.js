// JQUERY FOR SLIDING NAVIGATION
/*$(document).ready(function() {
//    $('a[href*=\\#]').each(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            && location.hostname == this.hostname
            && this.hash.replace(/#/, '')) {
            var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) + ']');
            var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
            if ($target) {
                var targetOffset = $target.offset().top - 80;

// JQUERY CLICK FUNCTION REMOVE AND ADD CLASS ACTIVE + SCROLL TO THE DIV
                $(this).click(function() {
                    $("#nav li a").removeClass("active");
                    $(this).addClass('active');
                    $('html, body').animate({ scrollTop: targetOffset }, 1000);
                    return false;
                });
        }
    }
    });

*/







    $(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".content", offset: 80});   

  // Add smooth scrolling on all links inside the navbar
  $("#nav a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuerys animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });

    function sendContact(e) {
        e.preventDefault();
        var token = $('input[name="__RequestVerificationToken"]').val();


        var myData = {};
        $.each($('#contactForm').serializeArray(), function(i, field) {
            myData[field.name] = field.value;
        });

        var dataWithAntiforgeryToken = $.extend(myData, { '__RequestVerificationToken': token });

        $("#contactError ul").empty();
        $("#contactForm").removeClass("success").removeClass("error").addClass("loading");

        $.ajax({
            url: "/Home/SendContact",
            type: "POST",
            data: dataWithAntiforgeryToken,
            success: function(data) {
                $("#contactForm").addClass("success");
            },
            error: function(data) {
                data.each(function(element) {
                    $("#contactError ul").append("<li>" + element.LocationName + "</li>");
                });

                $("#contactForm").addClass("error");
            },
            complete: function (data) {

                $("#contactForm").removeClass("loading");
            }
        });

    }


    $("#sendContactButton").on('click', sendContact);

});
