(function () {
  "use strict";


  const slides = [

    {
      icon: "👀",
      title: "Read Every Observation",
      main:
        "Do not decide what happened until you have examined all available evidence.",
      caption:
        "Measurements are clues."
    },

    {
      icon: "⬆️",
      title: "Look for Movement of Water",
      main:
        "If surface water decreases while atmospheric water vapor increases, evaporation may explain the change.",
      caption:
        "Track where the water moved."
    },

    {
      icon: "💧",
      title: "Look for State Changes",
      main:
        "If moist air cools and cloud droplets form, condensation is supported.",
      caption:
        "Gas → liquid"
    },

    {
      icon: "📊",
      title: "Use Weather Data",
      main:
        "Temperature, cloud cover, wind, and precipitation can reveal how atmospheric conditions changed.",
      caption:
        "One process may affect several measurements."
    },

    {
      icon: "🔎",
      title: "Prove the Explanation",
      main:
        "Name the process and cite at least two observations supporting your claim.",
      caption:
        "Process + evidence"
    },

    {
      icon: "🔗",
      title: "Connect the System",
      main:
        "Explain how the process affects another part of the Sun-ocean-atmosphere system.",
      caption:
        "Science is about relationships."
    }

  ];


  let index = 0;
  let timer = null;


  const icon =
    document.getElementById("d87SlideIcon");

  const title =
    document.getElementById("d87SlideTitle");

  const main =
    document.getElementById("d87SlideMain");

  const caption =
    document.getElementById("d87SlideCaption");

  const number =
    document.getElementById("d87SlideNumber");

  const play =
    document.getElementById("d87Play");


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
      "Evidence Step "
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
      "▶ Play Case Brief";
  }


  document.getElementById("d87Back").onclick =
    function () {

      stop();

      index =
        Math.max(
          0,
          index - 1
        );

      draw();
    };


  document.getElementById("d87Next").onclick =
    function () {

      stop();

      index =
        Math.min(
          slides.length - 1,
          index + 1
        );

      draw();
    };


  document.getElementById("d87Restart").onclick =
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
        "⏸ Pause Case Brief";


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

  let steve = null;


  const steveButtons =
    Array.from(
      document.querySelectorAll(
        ".d87-steve-answer"
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


          steve =
            button.dataset.answer;
        };
    }
  );


  document.getElementById(
    "d87SteveCheck"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "d87SteveFeedback"
        );


      if (!steve) {

        feedback.textContent =
          "Choose an investigation step first.";

        return;
      }


      if (
        steve === "A"
      ) {

        feedback.style.color =
          "#087a35";


        feedback.textContent =
          "Correct! One clue is not enough to prove the whole process. Steve needs additional system evidence.";

      } else {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Try again. A strong conclusion should be supported by several related observations.";
      }
    };


  document.getElementById(
    "d87SteveReset"
  ).onclick =
    function () {

      steve = null;


      document.getElementById(
        "d87SteveFeedback"
      ).textContent =
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

  document.querySelectorAll(
    ".d87-question"
  ).forEach(
    function (question) {

      const correct =
        question.dataset.answer;


      const feedback =
        question.querySelector(
          ".d87-feedback"
        );


      question.querySelectorAll(
        "button[data-choice]"
      ).forEach(
        function (button) {

          button.onclick =
            function () {

              question.querySelectorAll(
                "button[data-choice]"
              ).forEach(
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
                  "Correct! The explanation matches the system evidence.";

              } else {

                feedback.style.color =
                  "#b00020";


                feedback.textContent =
                  "Try again. Connect the observations to the process they support.";
              }
            };
        }
      );
    }
  );


  /* VOCAB */

  const modal =
    document.getElementById(
      "d87VocabModal"
    );


  document.querySelectorAll(
    ".d87-vocab"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.getElementById(
            "d87ModalIcon"
          ).textContent =
            button.dataset.icon;


          document.getElementById(
            "d87ModalTerm"
          ).textContent =
            button.dataset.term;


          document.getElementById(
            "d87ModalDefinition"
          ).textContent =
            button.dataset.definition;


          modal.classList.add(
            "show"
          );
        };
    }
  );


  document.getElementById(
    "d87VocabClose"
  ).onclick =
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
