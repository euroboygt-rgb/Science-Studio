(function () {
  "use strict";


  const slides = [

    {
      icon: "➡️",
      title: "Straight-Line Travel",
      main:
        "Light travels in a straight line until it interacts with matter.",
      caption:
        "Remember the aligned-opening investigation."
    },

    {
      icon: "🪞",
      title: "Reflection",
      main:
        "Light reflects when it bounces from a surface.",
      caption:
        "Mirrors and the Mirror Maze used reflection."
    },

    {
      icon: "💧",
      title: "Refraction",
      main:
        "Light refracts when it changes direction while crossing between media.",
      caption:
        "Prisms, pencils in water, and pools showed refraction."
    },

    {
      icon: "🌈",
      title: "Visible Spectrum",
      main:
        "White light contains Red, Orange, Yellow, Green, Blue, Indigo, and Violet.",
      caption:
        "Remember ROYGBIV."
    },

    {
      icon: "🌦️",
      title: "Rainbow",
      main:
        "A rainbow ray refracts into a raindrop, reflects inside, and refracts out.",
      caption:
        "The visible colors leave along different paths."
    },

    {
      icon: "👕",
      title: "Color and Absorption",
      main:
        "Objects reflect certain visible light toward our eyes and absorb much of the remaining light.",
      caption:
        "An orange shirt reflects orange light."
    },

    {
      icon: "🪟",
      title: "Materials",
      main:
        "Transparent passes clearly, translucent passes but scatters, and opaque does not transmit visible light.",
      caption:
        "Classify using evidence."
    },

    {
      icon: "🏆",
      title: "You Have the Toolkit",
      main:
        "Follow the light, identify the evidence, and explain what is happening.",
      caption:
        "Now complete the final Light Mission Control Challenge."
    }

  ];


  let index = 0;
  let timer = null;


  const icon =
    document.getElementById("d73SlideIcon");

  const title =
    document.getElementById("d73SlideTitle");

  const main =
    document.getElementById("d73SlideMain");

  const caption =
    document.getElementById("d73SlideCaption");

  const number =
    document.getElementById("d73SlideNumber");

  const play =
    document.getElementById("d73Play");


  function draw() {

    const slide =
      slides[index];

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
      (index + 1)
      +
      " of "
      +
      slides.length;
  }


  function stop() {

    if (timer) {

      clearInterval(timer);
      timer = null;
    }

    play.textContent =
      "▶ Play Mission Brief";
  }


  document
    .getElementById("d73Back")
    .onclick =
    function () {

      stop();

      index =
        Math.max(
          0,
          index - 1
        );

      draw();
    };


  document
    .getElementById("d73Next")
    .onclick =
    function () {

      stop();

      index =
        Math.min(
          slides.length - 1,
          index + 1
        );

      draw();
    };


  document
    .getElementById("d73Restart")
    .onclick =
    function () {

      stop();

      index = 0;

      draw();
    };


  play.onclick =
    function () {

      if (timer) {

        stop();
        return;
      }

      play.textContent =
        "⏸ Pause Mission Brief";


      timer =
        setInterval(
          function () {

            if (
              index <
              slides.length - 1
            ) {

              index += 1;
              draw();

            } else {

              stop();
            }

          },
          4200
        );
    };


  draw();


  /* STEVE */

  let steveAnswer = null;


  const steveButtons =
    Array.from(
      document.querySelectorAll(
        ".d73-steve-answer"
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
    .getElementById("d73SteveCheck")
    .onclick =
    function () {

      const feedback =
        document.getElementById(
          "d73SteveFeedback"
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
          "Correct! The light bounced from the mirror. That is reflection.";

      } else {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Try again. The light stayed in the same medium and bounced from a surface.";
      }
    };


  document
    .getElementById("d73SteveReset")
    .onclick =
    function () {

      steveAnswer = null;

      document
        .getElementById(
          "d73SteveFeedback"
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
      ".d73-question"
    )
    .forEach(
      function (question) {

        const correct =
          question.dataset.answer;

        const feedback =
          question.querySelector(
            ".d73-question-feedback"
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
                      "Correct! Your evidence matches the light behavior.";

                  } else {

                    feedback.style.color =
                      "#b00020";

                    feedback.textContent =
                      "Try again. Follow the light and use the evidence in the scenario.";
                  }
                };
            }
          );
      }
    );


  /* VOCAB */

  const modal =
    document.getElementById(
      "d73VocabModal"
    );

  const modalIcon =
    document.getElementById(
      "d73ModalIcon"
    );

  const modalTerm =
    document.getElementById(
      "d73ModalTerm"
    );

  const modalDefinition =
    document.getElementById(
      "d73ModalDefinition"
    );


  document
    .querySelectorAll(
      ".d73-vocab"
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
    .getElementById("d73VocabClose")
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
