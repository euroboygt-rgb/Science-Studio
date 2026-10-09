(function () {
  "use strict";


  const slides = [

    {
      icon: "🌡️",
      title: "Collect Measurements",
      main:
        "Weather scientists collect observations such as temperature, wind direction, cloud cover, and precipitation.",
      caption:
        "One observation gives information about one moment."
    },

    {
      icon: "📊",
      title: "Compare Several Days",
      main:
        "A sequence of measurements can reveal how conditions are changing.",
      caption:
        "Look across the dataset instead of reading only one number."
    },

    {
      icon: "🔁",
      title: "Find the Pattern",
      main:
        "Ask which variables increased, decreased, remained steady, or changed direction.",
      caption:
        "Patterns turn measurements into evidence."
    },

    {
      icon: "🔮",
      title: "Make a Forecast",
      main:
        "Use the observed pattern to make a reasonable prediction about what may happen next.",
      caption:
        "Forecasts should be based on evidence."
    },

    {
      icon: "🔎",
      title: "Defend With Evidence",
      main:
        "A strong forecast uses more than one measurement.",
      caption:
        "Prediction + evidence = stronger scientific reasoning."
    },

    {
      icon: "⚠️",
      title: "Prediction Is Not Certainty",
      main:
        "Weather systems can change, so a forecast is not a guarantee.",
      caption:
        "Say: The evidence suggests..."
    }

  ];


  let index = 0;
  let timer = null;


  const icon =
    document.getElementById("d86SlideIcon");

  const title =
    document.getElementById("d86SlideTitle");

  const main =
    document.getElementById("d86SlideMain");

  const caption =
    document.getElementById("d86SlideCaption");

  const number =
    document.getElementById("d86SlideNumber");

  const play =
    document.getElementById("d86Play");


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
      "Stage "
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
      "▶ Play Detective Brief";
  }


  document.getElementById("d86Back").onclick =
    function () {

      stop();

      index =
        Math.max(
          0,
          index - 1
        );

      draw();
    };


  document.getElementById("d86Next").onclick =
    function () {

      stop();

      index =
        Math.min(
          slides.length - 1,
          index + 1
        );

      draw();
    };


  document.getElementById("d86Restart").onclick =
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
        "⏸ Pause Detective Brief";


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
        ".d86-steve-answer"
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
    "d86SteveCheck"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "d86SteveFeedback"
        );


      if (!steve) {

        feedback.textContent =
          "Choose an explanation first.";

        return;
      }


      if (
        steve === "A"
      ) {

        feedback.style.color =
          "#087a35";


        feedback.textContent =
          "Correct! A strong forecast uses multiple weather measurements and patterns rather than one number.";

      } else {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Try again. Scientists compare several pieces of weather evidence before making a forecast.";
      }
    };


  document.getElementById(
    "d86SteveReset"
  ).onclick =
    function () {

      steve = null;


      document.getElementById(
        "d86SteveFeedback"
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
    ".d86-question"
  ).forEach(
    function (question) {

      const correct =
        question.dataset.answer;


      const feedback =
        question.querySelector(
          ".d86-feedback"
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
                  "Correct! The weather evidence supports this answer.";

              } else {

                feedback.style.color =
                  "#b00020";


                feedback.textContent =
                  "Try again. Compare the measurements and use the strongest evidence.";
              }
            };
        }
      );
    }
  );


  /* VOCAB */

  const modal =
    document.getElementById(
      "d86VocabModal"
    );


  document.querySelectorAll(
    ".d86-vocab"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.getElementById(
            "d86ModalIcon"
          ).textContent =
            button.dataset.icon;


          document.getElementById(
            "d86ModalTerm"
          ).textContent =
            button.dataset.term;


          document.getElementById(
            "d86ModalDefinition"
          ).textContent =
            button.dataset.definition;


          modal.classList.add(
            "show"
          );
        };
    }
  );


  document.getElementById(
    "d86VocabClose"
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
