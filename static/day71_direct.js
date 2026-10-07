(function () {
  "use strict";


  /* Mission Brief */

  const slides = [

    {
      icon: "✨",
      title: "Start With White Light",
      main:
        "White light contains the visible-spectrum colors traveling together.",
      caption:
        "ROYGBIV reaches the object."
    },

    {
      icon: "👕",
      title: "White Light Hits the Shirt",
      main:
        "The visible colors interact with the material in the orange shirt.",
      caption:
        "The colors do not all behave the same way."
    },

    {
      icon: "🟧",
      title: "Orange Light Reflects",
      main:
        "Orange light is reflected from the shirt toward the observer.",
      caption:
        "Reflected light can enter the observer's eyes."
    },

    {
      icon: "⬇️",
      title: "Other Colors Are Mostly Absorbed",
      main:
        "Much of the remaining visible light is taken in by the shirt.",
      caption:
        "Taking in light is called absorption."
    },

    {
      icon: "👁️",
      title: "Your Eye Receives Orange Light",
      main:
        "Because orange light reaches your eye, your brain identifies the shirt as orange.",
      caption:
        "The color we see comes from reflected light."
    },

    {
      icon: "⬜",
      title: "What About White?",
      main:
        "A white object reflects much of the visible light that strikes it.",
      caption:
        "Many visible colors are reflected."
    },

    {
      icon: "⬛",
      title: "What About Black?",
      main:
        "A black object absorbs most visible light and reflects very little.",
      caption:
        "Very little visible light returns to the observer."
    },

    {
      icon: "⭐",
      title: "Science Rule",
      main:
        "The color we see depends on which visible light is reflected from an object toward our eyes.",
      caption:
        "Other visible light may be absorbed."
    }

  ];


  let slideIndex = 0;
  let slideTimer = null;


  const icon =
    document.getElementById("d71SlideIcon");

  const title =
    document.getElementById("d71SlideTitle");

  const main =
    document.getElementById("d71SlideMain");

  const caption =
    document.getElementById("d71SlideCaption");

  const number =
    document.getElementById("d71SlideNumber");

  const play =
    document.getElementById("d71Play");


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

      clearInterval(slideTimer);

      slideTimer = null;
    }

    play.textContent =
      "▶ Play Mission Brief";
  }


  document
    .getElementById("d71Back")
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
    .getElementById("d71Next")
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
    .getElementById("d71Restart")
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


  /* Steve */

  let steveAnswer = null;


  const steveButtons =
    Array.from(
      document.querySelectorAll(
        ".d71-steve-answer"
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
    .getElementById("d71SteveCheck")
    .onclick =
    function () {

      const feedback =
        document.getElementById(
          "d71SteveFeedback"
        );


      if (!steveAnswer) {

        feedback.textContent =
          "Choose an answer first.";

        return;
      }


      if (
        steveAnswer === "A"
      ) {

        feedback.style.color =
          "#087a35";

        feedback.textContent =
          "Correct! Orange light reflects toward the observer while much of the other visible light is absorbed.";

      } else {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Try again. Think about which light must actually reach Steve's observer.";
      }
    };


  document
    .getElementById("d71SteveReset")
    .onclick =
    function () {

      steveAnswer = null;

      document
        .getElementById(
          "d71SteveFeedback"
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


  /* STAAR */

  document
    .querySelectorAll(
      ".d71-question"
    )
    .forEach(
      function (question) {

        const correct =
          question.dataset.answer;

        const feedback =
          question.querySelector(
            ".d71-question-feedback"
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
                      "Correct! Follow the reflected light to the observer.";

                  } else {

                    feedback.style.color =
                      "#b00020";

                    feedback.textContent =
                      "Try again. Ask which visible light reaches the observer's eye.";
                  }
                };
            }
          );
      }
    );


  /* Vocabulary */

  const modal =
    document.getElementById(
      "d71VocabModal"
    );

  const modalIcon =
    document.getElementById(
      "d71ModalIcon"
    );

  const modalTerm =
    document.getElementById(
      "d71ModalTerm"
    );

  const modalDefinition =
    document.getElementById(
      "d71ModalDefinition"
    );


  document
    .querySelectorAll(
      ".d71-vocab"
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
    .getElementById("d71VocabClose")
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
