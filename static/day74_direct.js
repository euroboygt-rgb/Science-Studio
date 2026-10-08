(function () {
  "use strict";


  const slides = [

    {
      icon: "☀️",
      title: "Start With the Sun",
      main:
        "The Sun is the star at the center of our solar system.",
      caption:
        "The planets orbit the Sun."
    },

    {
      icon: "🪨",
      title: "The Four Inner Planets",
      main:
        "Mercury, Venus, Earth, and Mars are the four planets closest to the Sun.",
      caption:
        "They are terrestrial planets with rocky, solid surfaces."
    },

    {
      icon: "☄️",
      title: "The Asteroid Belt",
      main:
        "The main asteroid belt is located between Mars and Jupiter.",
      caption:
        "This region contains many rocky objects."
    },

    {
      icon: "🟠",
      title: "The Gas Giants",
      main:
        "Jupiter and Saturn are the two gas giants.",
      caption:
        "They are enormous outer planets made mostly of gases."
    },

    {
      icon: "🔵",
      title: "The Ice Giants",
      main:
        "Uranus and Neptune are the two ice giants.",
      caption:
        "They are large, cold outer planets."
    },

    {
      icon: "🔤",
      title: "Remember the Order",
      main:
        "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.",
      caption:
        "My Very Educated Mother Just Served Us Noodles."
    },

    {
      icon: "⚠️",
      title: "Models Are Not Always to Scale",
      main:
        "Solar-system diagrams often change planet size and distance so everything can fit on the page.",
      caption:
        "Use the model for order and patterns, not exact distances."
    },

    {
      icon: "🚀",
      title: "Builder Mission Ready",
      main:
        "Place all eight planets and the asteroid belt, then classify each planet by type.",
      caption:
        "Your Solar System Builder mission is ready."
    }

  ];


  let index = 0;
  let timer = null;


  const icon =
    document.getElementById("d74SlideIcon");

  const title =
    document.getElementById("d74SlideTitle");

  const main =
    document.getElementById("d74SlideMain");

  const caption =
    document.getElementById("d74SlideCaption");

  const number =
    document.getElementById("d74SlideNumber");

  const play =
    document.getElementById("d74Play");


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
    .getElementById("d74Back")
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
    .getElementById("d74Next")
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
    .getElementById("d74Restart")
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
        ".d74-steve-answer"
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
    .getElementById("d74SteveCheck")
    .onclick =
    function () {

      const feedback =
        document.getElementById(
          "d74SteveFeedback"
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
          "Correct! The main asteroid belt is located between Mars and Jupiter.";

      } else {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Try again. Think about the region separating the terrestrial planets from Jupiter.";
      }
    };


  document
    .getElementById("d74SteveReset")
    .onclick =
    function () {

      steveAnswer = null;

      document
        .getElementById(
          "d74SteveFeedback"
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


  /* STAAR QUESTIONS */

  document
    .querySelectorAll(
      ".d74-question"
    )
    .forEach(
      function (question) {

        const correct =
          question.dataset.answer;

        const feedback =
          question.querySelector(
            ".d74-question-feedback"
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
                      "Correct! Your answer matches the solar-system pattern.";

                  } else {

                    feedback.style.color =
                      "#b00020";

                    feedback.textContent =
                      "Try again. Use planet order or planet type as your evidence.";
                  }
                };
            }
          );
      }
    );


  /* VOCABULARY */

  const modal =
    document.getElementById(
      "d74VocabModal"
    );

  const modalIcon =
    document.getElementById(
      "d74ModalIcon"
    );

  const modalTerm =
    document.getElementById(
      "d74ModalTerm"
    );

  const modalDefinition =
    document.getElementById(
      "d74ModalDefinition"
    );


  document
    .querySelectorAll(
      ".d74-vocab"
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
    .getElementById("d74VocabClose")
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
