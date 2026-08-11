/* =========================================================
   MOBILE NAVIGATION + DROPDOWN
========================================================= */

$(document).ready(function () {

    $(".menu-toggle").click(function (e) {

        e.stopPropagation();

        $(".main_nav").toggleClass("active");

    });


    $(document).click(function () {

        $(".main_nav").removeClass("active");

    });


    $(".main_nav").click(function (e) {

        e.stopPropagation();

    });


    $(".dropdown-btn").click(function (e) {

        e.preventDefault();

        $(this)
            .parent(".dropdown")
            .toggleClass("active");

    });

});



/* =========================================================
   RECTANGULAR ROW ANIMATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const rows = document.querySelectorAll(".rectc1-row");

    if (rows.length) {

        const rowObserver = new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                    } else {

                        entry.target.classList.remove("visible");

                    }

                });

            },
            {
                threshold: 0.2
            }
        );


        rows.forEach(row => {

            rowObserver.observe(row);

        });

    }

});



/* =========================================================
   CARD1 SCROLL ANIMATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".card1");

    if (cards.length) {

        const cardObserver = new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("in-view");

                    } else {

                        entry.target.classList.remove("in-view");

                    }

                });

            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.15
            }
        );


        cards.forEach(card => {

            cardObserver.observe(card);

        });

    }

});



/* =========================================================
   APPLICATION FORM
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("appForm");
    const statusNote = document.getElementById("statusNote");


    if (form && statusNote) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            let valid = true;


            form.querySelectorAll("[required]").forEach(function (field) {

                if (!field.value.trim()) {

                    valid = false;

                    field.style.borderColor = "var(--red)";

                } else {

                    field.style.borderColor = "var(--grey-line)";

                }

            });


            if (!valid) {

                statusNote.textContent =
                    "Please fill in all required fields.";

                statusNote.classList.remove("ok");

                statusNote.style.color = "var(--red)";

                return;

            }


            statusNote.textContent =
                "Application received — we'll be in touch shortly.";

            statusNote.classList.add("ok");

            statusNote.style.color = "";

            form.reset();

        });


        form.querySelectorAll("input, textarea, select")
            .forEach(function (el) {

                el.addEventListener("input", function () {

                    el.style.borderColor = "var(--grey-line)";

                });

            });

    }

});



/* =========================================================
   FOOTER YEAR
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const yearEl = document.getElementById("footer-year");

    if (yearEl) {

        yearEl.textContent = new Date().getFullYear();

    }

});



/* =========================================================
   VM CARD ANIMATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const animatedElements =
        document.querySelectorAll(".vm-card-frame, .vm-item");


    if (!animatedElements.length) {
        return;
    }


    animatedElements.forEach(function (el) {

        el.style.opacity = "0";

        el.style.transform = "translateY(24px)";

        el.style.transition =
            "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), " +
            "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)";

    });


    const vmObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach(function (entry, index) {

                if (entry.isIntersecting) {

                    setTimeout(function () {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }, index * 120);


                    vmObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    animatedElements.forEach(function (el) {

        vmObserver.observe(el);

    });

});



/* =========================================================
   NAV ITEM ACTIVE ANIMATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const navItems =
        document.querySelectorAll(".nav-container .nav-item");


    navItems.forEach(function (item) {

        item.addEventListener("click", function (e) {

            e.preventDefault();


            navItems.forEach(function (el) {

                el.classList.remove("active");

            });


            item.classList.add("active");

        });

    });

});



/* =========================================================
   INDUSTRY 4.0 SLIDER
========================================================= */
document.addEventListener("DOMContentLoaded", function () {

    const slidesContainer = document.querySelector(".slides");
    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    if (!slidesContainer || slides.length === 0) {
        return;
    }

    let currentSlide = 0;

    function showSlide(index) {

        if (index >= slides.length) {
            currentSlide = 0;
        } 
        else if (index < 0) {
            currentSlide = slides.length - 1;
        } 
        else {
            currentSlide = index;
        }

        slidesContainer.style.transform =
            "translateX(-" + (currentSlide * 100) + "%)";
    }


    /* NEXT BUTTON */

    if (nextBtn) {
        nextBtn.addEventListener("click", function () {
            showSlide(currentSlide + 1);
        });
    }


    /* PREVIOUS BUTTON */

    if (prevBtn) {
        prevBtn.addEventListener("click", function () {
            showSlide(currentSlide - 1);
        });
    }


    /* AUTOMATIC SLIDE */

    setInterval(function () {
        showSlide(currentSlide + 1);
    }, 4000);

});












document.addEventListener("DOMContentLoaded", function () {
    
    // Header & Navigation Elements
    const primaryHeader = document.getElementById("topHeader");
    const menuTrigger = document.getElementById("mobileMenuTrigger");
    const navigationBar = document.getElementById("navigationBar");
    const submenuItems = document.querySelectorAll(".has-submenu");

    // 1. Sticky Navigation Scroll Handler
    window.addEventListener("scroll", function () {
        if (window.scrollY > 30) {
            primaryHeader.classList.add("is-scrolled");
        } else {
            primaryHeader.classList.remove("is-scrolled");
        }
    });

    // 2. Mobile Nav Toggle
    if (menuTrigger && navigationBar) {
        menuTrigger.addEventListener("click", function () {
            navigationBar.classList.toggle("menu-open");
            menuTrigger.classList.toggle("is-active");
            
            // Lock body scroll when mobile menu opens
            if (navigationBar.classList.contains("menu-open")) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }
        });
    }

    // 3. Submenu Toggle for Mobile Screen Sizes
    submenuItems.forEach((item) => {
        const trigger = item.querySelector(".submenu-trigger");

        if (trigger) {
            trigger.addEventListener("click", function (e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    item.classList.toggle("submenu-active");
                }
            });
        }
    });

    // 4. Close Mobile Drawer on Link Click
    const navLinks = document.querySelectorAll(".menu-link:not(.submenu-trigger), .submenu-item");
    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            if (navigationBar.classList.contains("menu-open")) {
                navigationBar.classList.remove("menu-open");
                document.body.style.overflow = "auto";
            }
        });
    });
});



   

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {

    mainNav.classList.toggle("active");

});




const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {

    const spidermanSlider = document.querySelector(".spiderman-slider");

    if (!spidermanSlider) return;


    const spidermanSlides = spidermanSlider.querySelector(".spiderman-slides");

    const spideyItems = spidermanSlider.querySelectorAll(".spidey-slide");

    const spideyPrev = document.getElementById("spideyPrev");

    const spideyNext = document.getElementById("spideyNext");


    if (!spidermanSlides || spideyItems.length === 0) {
        return;
    }


    let spideyCurrent = 0;

    const spideyTotal = spideyItems.length;


    /* Move to slide */

    function spideyGoTo(index) {

        spideyCurrent =
            (index + spideyTotal) % spideyTotal;

        spidermanSlides.style.transform =
            `translateX(-${spideyCurrent * 100}%)`;
    }


    /* Next slide */

    function spideyNextSlide() {

        spideyGoTo(spideyCurrent + 1);
    }


    /* Previous slide */

    function spideyPreviousSlide() {

        spideyGoTo(spideyCurrent - 1);
    }


    /* Button clicks */

    if (spideyNext) {
        spideyNext.addEventListener(
            "click",
            spideyNextSlide
        );
    }


    if (spideyPrev) {
        spideyPrev.addEventListener(
            "click",
            spideyPreviousSlide
        );
    }


    /* Automatic slider */

    let spideyAutoplay = setInterval(
        spideyNextSlide,
        6000
    );


    /* Pause when mouse enters */

    spidermanSlider.addEventListener(
        "mouseenter",
        function () {

            clearInterval(spideyAutoplay);

        }
    );


    /* Resume when mouse leaves */

    spidermanSlider.addEventListener(
        "mouseleave",
        function () {

            spideyAutoplay = setInterval(
                spideyNextSlide,
                6000
            );

        }
    );


    /* Start from first slide */

    spideyGoTo(0);

});