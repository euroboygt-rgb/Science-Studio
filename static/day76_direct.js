(function () {
  "use strict";


  const slides = [

    {
      icon: "🌎",
      title: "Earth Is Always Moving",
      main:
        "Earth is rotating while also revolving around the Sun.",
      caption:
        "These motions happen at the same time."
    },

    {
      icon: "📍",
      title: "Meet Earth's Axis",
      main:
        "Earth's axis is an imaginary line through Earth from the North Pole to the South Pole.",
      caption:
        "Earth rotates around this imaginary line."
    },

    {
      icon: "🔄",
      title: "Rotation",
      main:
        "Rotation means spinning around an axis.",
      caption:
        "Earth completes one rotation in approximately 24 hours."
    },

    {
      icon: "🕛",
      title: "One Complete Turn",
      main:
        "When Earth turns 360 degrees, it has completed one rotation.",
      caption:
        "One full rotation takes about one day."
    },

    {
      icon: "☀️",
      title: "Revolution",
      main:
        "Revolution means traveling around another object.",
      caption:
        "Earth revolves around the Sun."
    },

    {
      icon: "📅",
      title: "One Trip Around the Sun",
      main:
        "Earth completes one revolution around the Sun in about one year.",
      caption:
        "Revolution takes much longer than rotation."
    },

    {
      icon: "🚨",
      title: "Do Not Mix Them Up",
      main:
        "Rotation = spin. Revolution = travel around.",
      caption:
        "Use the motion itself as your evidence."
    },

    {
      icon: "🌅",
      title: "Next Mission",
      main:
        "Tomorrow we will use Earth's rotation to explain the repeating pattern of day and night.",
      caption:
        "First master the motion. Then explain its effect."
    }

  ];


  let index = 0;
  let timer = null;


  const icon =
    document.getElementById("d76SlideIcon");

  const title =
    document.getElementById("d76SlideTitle");

  const main =
    document.getElementById("d76SlideMain");

  const caption =
    document.getElementById("d76SlideCaption");

  const number =
    document.getElementById("d76SlideNumber");

  const play =
    document.getElementById("d76Play");


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
    .getElementById("d76Back")
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
    .getElementById("d76Next")
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
    .getElementById("d76Restart")
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
        ".d76-steve-answer"
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
    .getElementById("d76SteveCheck")
    .onclick =
    function () {

      const feedback =
        document.getElementById(
          "d76SteveFeedback"
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
          "Correct! Steve spun the globe around its axis. That models rotation.";

      } else {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Try again. Steve kept the globe in place and spun it around its axis.";
      }
    };


  document
    .getElementById("d76SteveReset")
    .onclick =
    function () {

      steveAnswer = null;


      document
        .getElementById(
          "d76SteveFeedback"
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
      ".d76-question"
    )
    .forEach(
      function (question) {

        const correct =
          question.dataset.answer;

        const feedback =
          question.querySelector(
            ".d76-question-feedback"
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
                      "Correct! Use Earth's motion as your evidence.";

                  } else {

                    feedback.style.color =
                      "#b00020";

                    feedback.textContent =
                      "Try again. Ask whether Earth is spinning on its axis or traveling around the Sun.";
                  }
                };
            }
          );
      }
    );


  /* VOCAB */

  const modal =
    document.getElementById(
      "d76VocabModal"
    );

  const modalIcon =
    document.getElementById(
      "d76ModalIcon"
    );

  const modalTerm =
    document.getElementById(
      "d76ModalTerm"
    );

  const modalDefinition =
    document.getElementById(
      "d76ModalDefinition"
    );


  document
    .querySelectorAll(
      ".d76-vocab"
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
    .getElementById("d76VocabClose")
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
