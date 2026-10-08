(function () {
  "use strict";


  const slides = [

    {
      icon: "☀️",
      title: "The Moon Reflects Sunlight",
      main:
        "The Moon does not make its own visible light. The Moon appears bright because it reflects sunlight.",
      caption:
        "Half of the Moon is illuminated by the Sun."
    },

    {
      icon: "🌑",
      title: "Start at New Moon",
      main:
        "At New Moon, the illuminated half is mostly facing away from Earth.",
      caption:
        "The Moon appears dark from Earth."
    },

    {
      icon: "📈",
      title: "Waxing Means Growing",
      main:
        "After New Moon, the illuminated portion we see grows through Waxing Crescent, First Quarter, and Waxing Gibbous.",
      caption:
        "Waxing: New Moon toward Full Moon."
    },

    {
      icon: "🌕",
      title: "About Half a Cycle Later",
      main:
        "About 14 to 15 days after New Moon, the Moon is near Full Moon.",
      caption:
        "This is approximately half of the 29.5-day cycle."
    },

    {
      icon: "📉",
      title: "Waning Means Shrinking",
      main:
        "After Full Moon, the illuminated portion we see shrinks through Waning Gibbous, Third Quarter, and Waning Crescent.",
      caption:
        "Waning: Full Moon toward New Moon."
    },

    {
      icon: "🔄",
      title: "The Pattern Repeats",
      main:
        "After about 29.5 days, the Moon returns to approximately the same phase.",
      caption:
        "A repeating pattern allows scientists to make predictions."
    },

    {
      icon: "🚫",
      title: "Not Earth's Shadow",
      main:
        "Normal Moon phases are not caused by Earth's shadow. Earth's shadow is involved during a lunar eclipse.",
      caption:
        "Phases come from viewing different portions of the Moon's sunlit half."
    },

    {
      icon: "🔮",
      title: "Prediction Mission",
      main:
        "If tonight is New Moon, about 7 days later is First Quarter, about 15 days later is Full Moon, and about 22 days later is Third Quarter.",
      caption:
        "Use the repeating pattern to predict."
    }

  ];


  let index = 0;
  let timer = null;


  const icon =
    document.getElementById("d75SlideIcon");

  const title =
    document.getElementById("d75SlideTitle");

  const main =
    document.getElementById("d75SlideMain");

  const caption =
    document.getElementById("d75SlideCaption");

  const number =
    document.getElementById("d75SlideNumber");

  const play =
    document.getElementById("d75Play");


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
    .getElementById("d75Back")
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
    .getElementById("d75Next")
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
    .getElementById("d75Restart")
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
        ".d75-steve-answer"
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
    .getElementById("d75SteveCheck")
    .onclick =
    function () {

      const feedback =
        document.getElementById(
          "d75SteveFeedback"
        );


      if (!steveAnswer) {

        feedback.textContent =
          "Choose an answer first.";

        return;
      }


      if (
        steveAnswer === "C"
      ) {

        feedback.style.color =
          "#087a35";

        feedback.textContent =
          "Correct! About 15 days is approximately half of the 29.5-day lunar cycle, so New Moon is near Full Moon.";

      } else {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Try again. About 15 days is approximately half of the Moon's phase cycle.";
      }
    };


  document
    .getElementById("d75SteveReset")
    .onclick =
    function () {

      steveAnswer = null;

      document
        .getElementById(
          "d75SteveFeedback"
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


  /* QUESTIONS */

  document
    .querySelectorAll(
      ".d75-question"
    )
    .forEach(
      function (question) {

        const correct =
          question.dataset.answer;

        const feedback =
          question.querySelector(
            ".d75-question-feedback"
          );


        question
          .querySelectorAll(
            "button[data-choice]"
          )
          .forEach(
            function (button) {

              button.onclick =
                function () {

                  question
                    .querySelectorAll(
                      "button[data-choice]"
                    )
                    .forEach(
                      function (item) {

                        item.classList.remove(
                          "selected"
                        );
                      }
                    );


                  button.classList.add(
                    "selected"
                  );


                  if (
                    button.dataset.choice ===
                    correct
                  ) {

                    feedback.style.color =
                      "#087a35";

                    feedback.textContent =
                      "Correct! You used the repeating Moon phase pattern.";

                  } else {

                    feedback.style.color =
                      "#b00020";

                    feedback.textContent =
                      "Try again. Follow the phases forward through the repeating cycle.";
                  }
                };
            }
          );
      }
    );


  /* VOCAB */

  const modal =
    document.getElementById(
      "d75VocabModal"
    );

  const modalIcon =
    document.getElementById(
      "d75ModalIcon"
    );

  const modalTerm =
    document.getElementById(
      "d75ModalTerm"
    );

  const modalDefinition =
    document.getElementById(
      "d75ModalDefinition"
    );


  document
    .querySelectorAll(
      ".d75-vocab"
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
    .getElementById("d75VocabClose")
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
