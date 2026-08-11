
document.addEventListener("DOMContentLoaded", function () {



    const spiderTrack =
        document.getElementById("spiderTrack");


    const spiderNext =
        document.getElementById("spiderNext");


    const spiderPrevious =
        document.getElementById("spiderPrevious");


    const spiderSlides =
        document.querySelectorAll(
            ".spider-man-slide"
        );


    if (
        !spiderTrack ||
        !spiderNext ||
        !spiderPrevious ||
        spiderSlides.length === 0
    ) {

        return;

    }


  
    let spiderCurrentSlide = 0;

    const spiderTotalSlides =
        spiderSlides.length;



    function spiderShowSlide(index) {



        if (index >= spiderTotalSlides) {

            spiderCurrentSlide = 0;

        }




        else if (index < 0) {

            spiderCurrentSlide =
                spiderTotalSlides - 1;

        }




        else {

            spiderCurrentSlide = index;

        }



        spiderTrack.style.transform =
            "translateX(-" +
            (spiderCurrentSlide * 100) +
            "%)";

    }




    spiderNext.addEventListener(
        "click",
        function () {

            spiderShowSlide(
                spiderCurrentSlide + 1
            );

        }
    );




    spiderPrevious.addEventListener(
        "click",
        function () {

            spiderShowSlide(
                spiderCurrentSlide - 1
            );

        }
    );




    let spiderAutoPlay =
        setInterval(
            function () {

                spiderShowSlide(
                    spiderCurrentSlide + 1
                );

            },
            6000
        );




    const spiderSlider =
        document.querySelector(
            ".spider-web-slider"
        );



    spiderSlider.addEventListener(
        "mouseenter",
        function () {

            clearInterval(
                spiderAutoPlay
            );

        }
    );




    spiderSlider.addEventListener(
        "mouseleave",
        function () {

            spiderAutoPlay =
                setInterval(
                    function () {

                        spiderShowSlide(
                            spiderCurrentSlide + 1
                        );

                    },
                    6000
                );

        }
    );




    spiderShowSlide(0);

})

