/*-----------------------------------------------------------------
Theme Name: Buildra 
Author: codeurway
Author URI: https://themeforest.net/user/codeurway
Version: 1.0.0 
Description: Construction Html Template <

-------------------------------------------------------------------
JS TABLE OF CONTENTS
-------------------------------------------------------------------

01. Mobile Menu 
02. Sidebar Toggle
03. Jquery Header Search
04. Body Overlay
05. Sticky Header
06. Counterup 
07. Wow Animation
08. Set Background Image Color & Mask 
09. Faq section
10. Isotope
11. Global Slider
12. Back to top 
13. NiceSelect
14. Mouse Cursor  
15. Search Popup
16. accordion-items
17. Smooth Wrapper
18. Reveal Animation
19. MagnificPopup  view  
20. countdown
21. Quantity Plus Minus
22. Preloader
        
------------------------------------------------------------------*/

(function ($) {
  "use strict";

  $(document).ready(function () {
    /*-----------------------------------
    01. Mobile Menu  
    -----------------------------------*/
    $("#mobile-menu").meanmenu({
      meanMenuContainer: ".mobile-menu",
      meanScreenWidth: "1199",
      meanExpand: ['<i class="far fa-plus"></i>'],
    });

    /*-----------------------------------
    02. Sidebar Toggle  
    -----------------------------------*/
    $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
      $(".offcanvas__info").removeClass("info-open");
      $(".offcanvas__overlay").removeClass("overlay-open");
    });
    $(".sidebar__toggle").on("click", function () {
      $(".offcanvas__info").addClass("info-open");
      $(".offcanvas__overlay").addClass("overlay-open");
    });

    /*-----------------------------------
    03. Jquery Header Search
    -----------------------------------*/
    $(".search-btn").on("click", function (e) {
      e.preventDefault();
      $("body").css("overflow", "hidden");

      $(".search-form-wrapper").addClass("active");
    });
    $(".search-close").on("click", function (e) {
      e.preventDefault();
      $("body").css("overflow", "auto");
      $(".search-form-wrapper").removeClass("active");
    });

    window.onclick = function (e) {
      if (e.target.matches(".search-form-wrapper")) {
        $(".search-form-wrapper").removeClass("active");
      }
    };

    /*-----------------------------------
    04. Body Overlay 
    -----------------------------------*/
    $(".body-overlay").on("click", function () {
      $(".offcanvas__area").removeClass("offcanvas-opened");
      $(".df-search-area").removeClass("opened");
      $(".body-overlay").removeClass("opened");
    });

    /*-----------------------------------
      05. Sticky Header 
    -----------------------------------*/
    $(document).on("scroll", function () {
      if ($(this).scrollTop() > 250) {
        $("#header-sticky").addClass("sticky");
      } else {
        $("#header-sticky").removeClass("sticky");
      }
    });

    /*-----------------------------------
    06. Counterup 
    -----------------------------------*/
    $(".counters-item").counterUp({
      delay: 10,
      time: 1000,
    });

    /*-----------------------------------
    07. Wow Animation 
    -----------------------------------*/
    new WOW().init();

    /*-----------------------------------
    08. Set Background Image & Mask   
    -----------------------------------*/
    if ($("[data-bg-src]").length > 0) {
      $("[data-bg-src]").each(function () {
        var src = $(this).attr("data-bg-src");
        $(this).css("background-image", "url(" + src + ")");
        $(this).removeAttr("data-bg-src").addClass("background-image");
      });
    }

    /*-----------------------------------
    09. // faq section  
    -----------------------------------*/

    /*-----------------------------------
    10. // Isotope
    -----------------------------------*/
    var $grid = $(".project-active").isotope({
      itemSelector: ".project-item",
      percentPosition: true,
      masonry: {
        columnWidth: 2,
        stagger: 30,
        transitionDuration: "0.8s",
      },
    });
    $(".filter-buttons button").on("click", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });

      $(".filter-buttons button").removeClass("active");
      $(this).addClass("active");
    });

    /*-----------------------------------
    11.Slider
    -----------------------------------*/
    // Testimonial V3 slider
    if ($(".testimonials-active").length > 0) {
      const teamSlider = new Swiper(".testimonials-active", {
        spaceBetween: 30,
        speed: 1300,
        centeredSlides: true,
        loop: true,
        // autoplay: {
        //   delay: 2000,
        //   disableOnInteraction: false,
        // },
        navigation: {
          prevEl: ".slider-prev",
          nextEl: ".slider-next",
        },
        breakpoints: {
          1199: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    /*-----------------------------------
    12. Back to top    
    -----------------------------------*/
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 20) {
        $("#back-top").addClass("show");
      } else {
        $("#back-top").removeClass("show");
      }
    });

    $("#back-top").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });

    /*-----------------------------------
    13. NiceSelect     
    -----------------------------------*/
    if ($(".single-select").length > 0) {
      $(".single-select").niceSelect();
    }

    /*----------------------------------- 
    14. Mouse Cursor    
    -----------------------------------*/
    function mousecursor() {
      if ($("body").length > 0) {
        // Strict Equality Comparison applied
        const e = document.querySelector(".cursor-inner"),
          t = document.querySelector(".cursor-outer");
        let n,
          i = 0,
          o = false;

        window.addEventListener("mousemove", function (s) {
          if (!o) {
            t.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
          }
          e.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
          n = s.clientY;
          i = s.clientX;
        });

        $("body").on("mouseenter", "a, .cursor-pointer", function () {
          e.classList.add("cursor-hover");
          t.classList.add("cursor-hover");
        });

        $("body").on("mouseleave", "a, .cursor-pointer", function () {
          if (
            !$(this).is("a") ||
            $(this).closest(".cursor-pointer").length === 0
          ) {
            e.classList.remove("cursor-hover");
            t.classList.remove("cursor-hover");
          }
        });

        e.style.visibility = "visible";
        t.style.visibility = "visible";
      }
    }

    $(function () {
      mousecursor();
    });

    /*--------------------------------------------------
    15. Search Popup
    ---------------------------------------------------*/
    const $searchWrap = $(".search-wrap");
    const $navSearch = $(".nav-search");
    const $searchClose = $("#search-close");

    $(".search-trigger").on("click", function (e) {
      e.preventDefault();
      $searchWrap.animate({ opacity: "toggle" }, 500);
      $navSearch.add($searchClose).addClass("open");
    });

    $(".search-close").on("click", function (e) {
      e.preventDefault();
      $searchWrap.animate({ opacity: "toggle" }, 500);
      $navSearch.add($searchClose).removeClass("open");
    });

    function closeSearch() {
      $searchWrap.fadeOut(200);
      $navSearch.add($searchClose).removeClass("open");
    }

    $(document.body).on("click", function (e) {
      closeSearch();
    });

    $(".search-trigger, .main-search-input").on("click", function (e) {
      e.stopPropagation();
    });

    /*--------------------------------------------------
    16. accordion-items
     ---------------------------------------------------*/

    /*-----------------------------------
    17. Smooth Wrapper
    -----------------------------------*/
    if ($("#smooth-wrapper").length && $("#smooth-content").length) {
      gsap.registerPlugin(
        ScrollTrigger,
        ScrollSmoother,
        TweenMax,
        ScrollToPlugin,
      );

      gsap.config({
        nullTargetWarn: false,
      });

      const smoother = ScrollSmoother.create({
        smooth: 4,
        effects: true,
        smoothTouch: true,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });
    }

    /*-----------------------------------
    18. Reveal Animation
    -----------------------------------*/

    // Wow type gsap animation Start
    if ($(".dh_fade_anim").length > 0) {
      gsap.utils.toArray(".dh_fade_anim").forEach((item) => {
        let zf_fade_offset = item.getAttribute("data-fade-offset") || 40,
          zf_duration_value = item.getAttribute("data-duration") || 0.75,
          zf_fade_direction = item.getAttribute("data-fade-from") || "bottom",
          zf_onscroll_value = item.getAttribute("data-on-scroll") || 1,
          zf_delay_value = item.getAttribute("data-delay") || 0.15,
          zf_ease_value = item.getAttribute("data-ease") || "power2.out",
          zf_anim_setting = {
            opacity: 0,
            ease: zf_ease_value,
            duration: zf_duration_value,
            delay: zf_delay_value,
            x:
              zf_fade_direction == "left"
                ? -zf_fade_offset
                : zf_fade_direction == "right"
                  ? zf_fade_offset
                  : 0,
            y:
              zf_fade_direction == "top"
                ? -zf_fade_offset
                : zf_fade_direction == "bottom"
                  ? zf_fade_offset
                  : 0,
          };
        if (zf_onscroll_value == 1) {
          zf_anim_setting.scrollTrigger = {
            trigger: item,
            start: "top 85%",
          };
        }
        gsap.from(item, zf_anim_setting);
      });
    }

    /*-----------------------------------
    19. MagnificPopup  view    
    -----------------------------------*/
    $(".popup-video").magnificPopup({
      type: "iframe",
      removalDelay: 260,
      mainClass: "mfp-zoom-in",
    });

    $(".img-popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  });

  /*-----------------------------------
    22. Preloader   
  -----------------------------------*/

  function loader() {
    $(window).on("load", function () {
      // Animate loader off screen
      $(".preloader").addClass("loaded");
      $(".preloader").delay(600).fadeOut();
    });
  }

  loader();
})(jQuery);

// End jQuery
