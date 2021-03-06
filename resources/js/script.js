$(document).ready(function () {
  // STICK NAVEGATION
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("stick-in");
        $("nav").removeClass("stick-out");
      } else {
        $("nav").addClass("stick-out");
        $("nav").removeClass("stick-in");
        setTimeout(() => {
          $("nav").removeClass("stick-out");
        }, 350);
      }
    },
    {
      offset: "80px",
    }
  );

  // SCROLL ON BUTTONS
  $(".js--scroll-to-plan").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      800
    );
  });
  $(".js--scroll-to-start").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      200
    );
  });

  // NAVIGATION SCROLL
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  // Animation on scroll
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animated zoomInLeft");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animated fadeIn");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-4 .plan-box")
    .mouseenter(function () {
      if (!$(this).hasClass("animated pulse")) {
        var that = this;
        $(this).addClass("animated pulse working");
        setTimeout(function () {
          $(that).removeClass("working");
        }, 600);
      }
    })
    .mouseleave(function () {
      var that = this;
      if (!$(this).hasClass("working")) {
        $(that).removeClass("animated pulse");
      } else {
        setTimeout(function () {
          $(that).removeClass("animated pulse");
        }, 600);
      }
    });

  //MOBILE NAVEGATION
  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");
    nav.slideToggle(200);
    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.addClass("ion-navicon-round");
      icon.removeClass("ion-close-round");
    }
  });
});

function initMap() {
  var options = {
    center: { lat: 38.73, lng: -9.045 },
    zoom: 12,
  };
  var markerPosition = { lat: 38.7219415, lng: -9.1389476 };

  var map = new google.maps.Map(document.getElementById("map"), options);
  var marker = new google.maps.Marker({
    position: markerPosition,
    map,
    title: "Lisbon",
  });
  var infoWindow = new google.maps.InfoWindow({
    content: "<p>Our Lisbon HQ</p>",
  });
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}
