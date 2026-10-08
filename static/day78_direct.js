(function () {
  "use strict";


  const slides = [

    {
      icon: "👀",
      title: "Become the Observer",
      main:
        "Today we observe the sky from Earth's surface instead of looking at Earth from space.",
      caption:
        "Changing your point of view changes what the motion looks like."
    },

    {
      icon: "🌅",
      title: "Sunrise",
      main:
        "The Sun generally appears low near the eastern horizon at sunrise.",
      caption:
        "The Sun appears to begin its daily path in the east."
    },

    {
      icon: "☀️",
      title: "Morning",
      main:
        "During the morning, the Sun appears to climb higher across the sky.",
      caption:
        "Shadows generally become shorter as the Sun appears higher."
    },

    {
      icon: "🔆",
      title: "Solar Noon",
      main:
        "Around solar noon, the Sun reaches its highest apparent position in the sky for that day.",
      caption:
        "Shadows are generally shorter than when the Sun is low."
    },

    {
      icon: "🌇",
      title: "Afternoon and Sunset",
      main:
        "The Sun appears to move lower toward the western horizon and eventually sets.",
      caption:
        "Shadows lengthen again as the Sun appears lower."
    },

    {
      icon: "🌎",
      title: "But What Is Really Moving?",
      main:
        "Earth is rotating west to east.",
      caption:
        "That rotation makes the Sun appear to move east to west."
    },

    {
      icon: "⬛",
      title: "Shadows Are Evidence",
      main:
        "A shadow changes direction and length as the apparent position of the Sun changes.",
      caption:
        "Low Sun = longer shadow. Higher Sun = shorter shadow."
    },

    {
      icon: "🧠",
      title: "Apparent Motion",
      main:
        "Apparent motion describes motion as it looks from an observer's point of view.",
      caption:
        "The Sun appears to move, while Earth's rotation causes the daily pattern."
    }

  ];


  let index = 0;
  let timer = null;


  const icon =
    document.getElementById(
      "d78SlideIcon"
    );

  const title =
    document.getElementById(
      "d78SlideTitle"
    );

  const main =
    document.getElementById(
      "d78SlideMain"
    );

  const caption =
    document.getElementById(
      "d78SlideCaption"
    );

  const number =
    document.getElementById(
      "d78SlideNumber"
    );

  const play =
    document.getElementById(
      "d78Play"
    );


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
    .getElementById(
      "d78Back"
    )
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
    .getElementById(
      "d78Next"
    )
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
    .getElementById(
      "d78Restart"
    )
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
        ".d78-steve-answer"
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
      "d78SteveCheck"
    )
    .onclick =
    function () {

      const feedback =
        document.getElementById(
          "d78SteveFeedback"
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
          "Correct! Earth's rotation causes the Sun's apparent daily movement across the sky.";

      } else {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Try again. Remember yesterday's model: the Sun stayed fixed while Earth rotated.";
      }
    };


  document
    .getElementById(
      "d78SteveReset"
    )
    .onclick =
    function () {

      steveAnswer = null;


      document
        .getElementById(
          "d78SteveFeedback"
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
      ".d78-question"
    )
    .forEach(
      function (question) {

        const correct =
          question.dataset.answer;

        const feedback =
          question.querySelector(
            ".d78-question-feedback"
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
                      "Correct! Your answer matches the Sun and shadow evidence.";

                  } else {

                    feedback.style.color =
                      "#b00020";

                    feedback.textContent =
                      "Try again. Think about Earth's rotation, apparent Sun position, and shadow evidence.";
                  }
                };
            }
          );
      }
    );


  /* VOCAB */

  const modal =
    document.getElementById(
      "d78VocabModal"
    );

  const modalIcon =
    document.getElementById(
      "d78ModalIcon"
    );

  const modalTerm =
    document.getElementById(
      "d78ModalTerm"
    );

  const modalDefinition =
    document.getElementById(
      "d78ModalDefinition"
    );


  document
    .querySelectorAll(
      ".d78-vocab"
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
      "d78VocabClose"
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
