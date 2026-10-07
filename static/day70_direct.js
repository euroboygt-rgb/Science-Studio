(function () {
  "use strict";


  const slides = [

    {
      icon: "✨",
      title: "White Light",
      main:
        "White light contains many visible colors traveling together.",
      caption:
        "The colors are present even when we cannot see them separately."
    },

    {
      icon: "🔺",
      title: "Send It Through a Prism",
      main:
        "A prism can separate white light into visible colors.",
      caption:
        "The colors bend by slightly different amounts."
    },

    {
      icon: "🌈",
      title: "The Visible Spectrum",
      main:
        "The separated band of visible colors is called the visible spectrum.",
      caption:
        "We can remember the order with ROYGBIV."
    },

    {
      icon: "🔴",
      title: "R O Y",
      main:
        "R = Red, O = Orange, Y = Yellow.",
      caption:
        "These are the first three colors in ROYGBIV."
    },

    {
      icon: "🟢",
      title: "G B",
      main:
        "G = Green and B = Blue.",
      caption:
        "These are the middle colors."
    },

    {
      icon: "🟣",
      title: "I V",
      main:
        "I = Indigo and V = Violet.",
      caption:
        "These complete ROYGBIV."
    },

    {
      icon: "💧",
      title: "Remember Yesterday's Raindrop",
      main:
        "A raindrop can also separate white sunlight into visible colors.",
      caption:
        "The raindrop did not create the colors."
    },

    {
      icon: "⭐",
      title: "Science Rule",
      main:
        "White light already contains the colors of the visible spectrum.",
      caption:
        "ROYGBIV = Red, Orange, Yellow, Green, Blue, Indigo, Violet."
    }

  ];


  let index = 0;
  let timer = null;


  const icon =
    document.getElementById("d70SlideIcon");

  const title =
    document.getElementById("d70SlideTitle");

  const main =
    document.getElementById("d70SlideMain");

  const caption =
    document.getElementById("d70SlideCaption");

  const number =
    document.getElementById("d70SlideNumber");

  const play =
    document.getElementById("d70Play");


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
    .getElementById("d70Back")
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
    .getElementById("d70Next")
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
    .getElementById("d70Restart")
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


  /* Steve */

  let steveAnswer = null;


  const steveButtons =
    Array.from(
      document.querySelectorAll(
        ".d70-steve-answer"
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
    .getElementById("d70SteveCheck")
    .onclick =
    function () {

      const feedback =
        document.getElementById(
          "d70SteveFeedback"
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
          "Correct! The I in ROYGBIV stands for Indigo.";

      } else {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Try again. Say ROYGBIV slowly and identify the I.";
      }
    };


  document
    .getElementById("d70SteveReset")
    .onclick =
    function () {

      steveAnswer = null;

      document
        .getElementById(
          "d70SteveFeedback"
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


  /* STAAR questions */

  document
    .querySelectorAll(
      ".d70-question"
    )
    .forEach(
      function (question) {

        const correct =
          question.dataset.answer;

        const feedback =
          question.querySelector(
            ".d70-question-feedback"
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
                      "Correct! Use ROYGBIV and today's spectrum model as evidence.";

                  } else {

                    feedback.style.color =
                      "#b00020";

                    feedback.textContent =
                      "Try again. Think about the ROYGBIV order and what white light contains.";
                  }
                };
            }
          );
      }
    );


  /* Vocabulary */

  const modal =
    document.getElementById(
      "d70VocabModal"
    );

  const modalIcon =
    document.getElementById(
      "d70ModalIcon"
    );

  const modalTerm =
    document.getElementById(
      "d70ModalTerm"
    );

  const modalDefinition =
    document.getElementById(
      "d70ModalDefinition"
    );


  document
    .querySelectorAll(
      ".d70-vocab"
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
    .getElementById("d70VocabClose")
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
