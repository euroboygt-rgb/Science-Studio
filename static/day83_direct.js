(function () {
  "use strict";


  const slides = [

    {
      icon: "🌊",
      title: "Water Enters the Atmosphere",
      main:
        "Evaporation adds invisible water vapor to the air.",
      caption:
        "Water vapor is water in the gas state."
    },

    {
      icon: "💨",
      title: "Invisible Water Vapor",
      main:
        "Water vapor is normally invisible, even though water is present in the air.",
      caption:
        "Do not confuse water vapor with the white part of a cloud."
    },

    {
      icon: "❄️",
      title: "Moist Air Cools",
      main:
        "When moist air cools enough, some water vapor can begin to condense.",
      caption:
        "Cooling can create conditions for condensation."
    },

    {
      icon: "💧",
      title: "Condensation",
      main:
        "Water changes from gas into tiny liquid droplets.",
      caption:
        "Gas → liquid"
    },

    {
      icon: "☁️",
      title: "A Cloud Becomes Visible",
      main:
        "Huge numbers of tiny droplets and/or ice crystals together form a visible cloud.",
      caption:
        "The visible cloud is condensed water."
    },

    {
      icon: "•",
      title: "Tiny Particles Help",
      main:
        "Water can condense onto tiny particles such as dust or sea salt in the atmosphere.",
      caption:
        "These particles can act as condensation nuclei."
    },

    {
      icon: "🌦️",
      title: "Weather Connection",
      main:
        "Clouds are part of weather, but not every cloud produces precipitation.",
      caption:
        "Cloud formation and precipitation are related—but not identical."
    }

  ];


  let index = 0;
  let timer = null;


  const icon =
    document.getElementById("d83SlideIcon");

  const title =
    document.getElementById("d83SlideTitle");

  const main =
    document.getElementById("d83SlideMain");

  const caption =
    document.getElementById("d83SlideCaption");

  const number =
    document.getElementById("d83SlideNumber");

  const play =
    document.getElementById("d83Play");


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
      "▶ Play Cloud Mission";
  }


  document.getElementById("d83Back").onclick =
    function () {

      stop();

      index =
        Math.max(
          0,
          index - 1
        );

      draw();
    };


  document.getElementById("d83Next").onclick =
    function () {

      stop();

      index =
        Math.min(
          slides.length - 1,
          index + 1
        );

      draw();
    };


  document.getElementById("d83Restart").onclick =
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
        "⏸ Pause Cloud Mission";

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
        ".d83-steve-answer"
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
    "d83SteveCheck"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "d83SteveFeedback"
        );


      if (!steve) {

        feedback.textContent =
          "Choose an explanation first.";

        return;
      }


      if (steve === "A") {

        feedback.style.color =
          "#087a35";

        feedback.textContent =
          "Correct! Water vapor is normally invisible. Visible clouds contain tiny droplets and/or ice crystals.";

      } else {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Try again. Separate invisible water vapor from the condensed water we can see.";
      }
    };


  document.getElementById(
    "d83SteveReset"
  ).onclick =
    function () {

      steve = null;

      document.getElementById(
        "d83SteveFeedback"
      ).textContent = "";

      steveButtons.forEach(
        function (button) {

          button.classList.remove(
            "selected"
          );
        }
      );
    };


  /* QUESTIONS */

  document.querySelectorAll(
    ".d83-question"
  ).forEach(
    function (question) {

      const correct =
        question.dataset.answer;

      const feedback =
        question.querySelector(
          ".d83-feedback"
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
                  "Correct! Your answer matches the condensation evidence.";

              } else {

                feedback.style.color =
                  "#b00020";

                feedback.textContent =
                  "Try again. Think about state of matter, cooling, and condensation.";
              }
            };
        }
      );
    }
  );


  /* VOCAB */

  const modal =
    document.getElementById(
      "d83VocabModal"
    );


  document.querySelectorAll(
    ".d83-vocab"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.getElementById(
            "d83ModalIcon"
          ).textContent =
            button.dataset.icon;

          document.getElementById(
            "d83ModalTerm"
          ).textContent =
            button.dataset.term;

          document.getElementById(
            "d83ModalDefinition"
          ).textContent =
            button.dataset.definition;

          modal.classList.add(
            "show"
          );
        };
    }
  );


  document.getElementById(
    "d83VocabClose"
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
