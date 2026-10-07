(function () {
  "use strict";


  /* ========================================================
     MISSION BRIEF
     ======================================================== */

  const slides = [

    {
      icon: "☀️",
      title: "White Sunlight",
      main:
        "Sunlight may look white, but it contains the colors of visible light.",
      caption:
        "The colors begin the journey together."
    },

    {
      icon: "💧",
      title: "The Raindrop",
      main:
        "A raindrop is water surrounded by air.",
      caption:
        "The light crosses from one medium into another."
    },

    {
      icon: "↘️",
      title: "Step 1: Refraction In",
      main:
        "Sunlight changes direction when it moves from air into water.",
      caption:
        "Different colors begin bending by slightly different amounts."
    },

    {
      icon: "🪞",
      title: "Step 2: Internal Reflection",
      main:
        "The light reaches an inside surface of the droplet and reflects.",
      caption:
        "The ray remains inside the water."
    },

    {
      icon: "↗️",
      title: "Step 3: Refraction Out",
      main:
        "The light changes direction again when it leaves water and enters air.",
      caption:
        "Refraction occurs a second time."
    },

    {
      icon: "🌈",
      title: "Step 4: Spectrum",
      main:
        "The visible colors leave along slightly different paths.",
      caption:
        "This separation of colors is called dispersion."
    },

    {
      icon: "🌦️",
      title: "Many Raindrops",
      main:
        "Many droplets send separated colors toward an observer.",
      caption:
        "Together they create the rainbow seen in the sky."
    },

    {
      icon: "⭐",
      title: "Remember the Sequence",
      main:
        "REFRACT IN → REFLECT INSIDE → REFRACT OUT → SPECTRUM",
      caption:
        "Refraction happens twice."
    }

  ];


  let slideIndex = 0;
  let slideTimer = null;


  const icon =
    document.getElementById(
      "d69SlideIcon"
    );

  const title =
    document.getElementById(
      "d69SlideTitle"
    );

  const main =
    document.getElementById(
      "d69SlideMain"
    );

  const caption =
    document.getElementById(
      "d69SlideCaption"
    );

  const number =
    document.getElementById(
      "d69SlideNumber"
    );

  const play =
    document.getElementById(
      "d69Play"
    );


  function drawSlide() {

    const slide =
      slides[slideIndex];


    icon.textContent =
      slide.icon;

    title.textContent =
      slide.title;

    main.textContent =
      slide.main;

    caption.textContent =
      slide.caption;

    number.textContent =
      "Slide "
      +
      (slideIndex + 1)
      +
      " of "
      +
      slides.length;
  }


  function stopSlides() {

    if (slideTimer) {

      clearInterval(
        slideTimer
      );

      slideTimer = null;
    }


    play.textContent =
      "▶ Play Mission Brief";
  }


  document
    .getElementById(
      "d69Back"
    )
    .onclick =
    function () {

      stopSlides();

      slideIndex =
        Math.max(
          0,
          slideIndex - 1
        );

      drawSlide();
    };


  document
    .getElementById(
      "d69Next"
    )
    .onclick =
    function () {

      stopSlides();

      slideIndex =
        Math.min(
          slides.length - 1,
          slideIndex + 1
        );

      drawSlide();
    };


  document
    .getElementById(
      "d69Restart"
    )
    .onclick =
    function () {

      stopSlides();

      slideIndex = 0;

      drawSlide();
    };


  play.onclick =
    function () {

      if (slideTimer) {

        stopSlides();
        return;
      }


      play.textContent =
        "⏸ Pause Mission Brief";


      slideTimer =
        setInterval(
          function () {

            if (
              slideIndex <
              slides.length - 1
            ) {

              slideIndex += 1;

              drawSlide();

            } else {

              stopSlides();
            }

          },
          4200
        );
    };


  drawSlide();


  /* ========================================================
     STEVE
     ======================================================== */

  let steveAnswer = null;


  const steveButtons =
    Array.from(
      document.querySelectorAll(
        ".d69-steve-answer"
      )
    );


  steveButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          steveButtons.forEach(
            function (item) {

              item.classList.remove(
                "selected"
              );
            }
          );


          button.classList.add(
            "selected"
          );


          steveAnswer =
            button.dataset.answer;
        };
    }
  );


  document
    .getElementById(
      "d69SteveCheck"
    )
    .onclick =
    function () {

      const feedback =
        document.getElementById(
          "d69SteveFeedback"
        );


      if (!steveAnswer) {

        feedback.textContent =
          "Choose an answer first.";

        return;
      }


      if (
        steveAnswer ===
        "A"
      ) {

        feedback.style.color =
          "#087a35";

        feedback.textContent =
          "Correct! Refract in → reflect inside → refract out.";

      } else {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Try again. Remember: bend in, bounce inside, bend out.";
      }
    };


  document
    .getElementById(
      "d69SteveReset"
    )
    .onclick =
    function () {

      steveAnswer = null;


      document
        .getElementById(
          "d69SteveFeedback"
        )
        .textContent =
        "";


      steveButtons.forEach(
        function (button) {

          button.classList.remove(
            "selected"
          );
        }
      );
    };


  /* ========================================================
     STAAR QUESTIONS
     ======================================================== */

  document
    .querySelectorAll(
      ".d69-question"
    )
    .forEach(
      function (question) {

        const correct =
          question.dataset.answer;


        const feedback =
          question.querySelector(
            ".d69-question-feedback"
          );


        question
          .querySelectorAll(
            "button[data-choice]"
          )
          .forEach(
            function (button) {

              button.onclick =
                function () {

                  if (
                    button.dataset.choice ===
                    correct
                  ) {

                    feedback.style.color =
                      "#087a35";

                    feedback.textContent =
                      "Correct! Follow the light path shown in today's model.";

                  } else {

                    feedback.style.color =
                      "#b00020";

                    feedback.textContent =
                      "Try again. Trace the sunlight through the raindrop in order.";
                  }
                };
            }
          );
      }
    );


  /* ========================================================
     VOCABULARY MODAL
     ======================================================== */

  const modal =
    document.getElementById(
      "d69VocabModal"
    );


  const modalIcon =
    document.getElementById(
      "d69ModalIcon"
    );


  const modalTerm =
    document.getElementById(
      "d69ModalTerm"
    );


  const modalDefinition =
    document.getElementById(
      "d69ModalDefinition"
    );


  document
    .querySelectorAll(
      ".d69-vocab"
    )
    .forEach(
      function (button) {

        button.onclick =
          function () {

            modalIcon.textContent =
              button.dataset.icon;

            modalTerm.textContent =
              button.dataset.term;

            modalDefinition.textContent =
              button.dataset.definition;

            modal.classList.add(
              "show"
            );
          };
      }
    );


  document
    .getElementById(
      "d69VocabClose"
    )
    .onclick =
    function () {

      modal.classList.remove(
        "show"
      );
    };


  modal.onclick =
    function (event) {

      if (
        event.target === modal
      ) {

        modal.classList.remove(
          "show"
        );
      }
    };

})();
