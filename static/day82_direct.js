(function () {
  "use strict";


  const slides = [

    {
      icon: "🌊",
      title: "Start in the Ocean",
      main:
        "Our water molecule begins as liquid water near the surface of the ocean.",
      caption:
        "The ocean is a major source of water for the atmosphere."
    },

    {
      icon: "☀️",
      title: "Sun Energy Arrives",
      main:
        "Energy from the Sun warms surface water.",
      caption:
        "This energy helps liquid water evaporate."
    },

    {
      icon: "⬆️",
      title: "Evaporation",
      main:
        "Some liquid water changes into water vapor and enters the atmosphere.",
      caption:
        "The water did not disappear. It changed state."
    },

    {
      icon: "☁️",
      title: "Condensation",
      main:
        "When water vapor cools, it can change into tiny liquid droplets.",
      caption:
        "Large groups of droplets can form clouds."
    },

    {
      icon: "🌧️",
      title: "Precipitation",
      main:
        "When water in clouds becomes heavy enough, precipitation can fall to Earth's surface.",
      caption:
        "Rain is one form of precipitation."
    },

    {
      icon: "🌊",
      title: "Collection",
      main:
        "Water gathers again in oceans, lakes, rivers, soil, and other locations.",
      caption:
        "The cycle can continue."
    },

    {
      icon: "🌦️",
      title: "Weather Connection",
      main:
        "Ocean evaporation adds water vapor to the atmosphere that can contribute to clouds and precipitation.",
      caption:
        "The Sun and ocean interact with the atmosphere."
    }

  ];


  let index = 0;
  let timer = null;


  const icon =
    document.getElementById("d82SlideIcon");

  const title =
    document.getElementById("d82SlideTitle");

  const main =
    document.getElementById("d82SlideMain");

  const caption =
    document.getElementById("d82SlideCaption");

  const number =
    document.getElementById("d82SlideNumber");

  const play =
    document.getElementById("d82Play");


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
      "▶ Play Water Mission";
  }


  document.getElementById("d82Back").onclick =
    function () {

      stop();

      index =
        Math.max(
          0,
          index - 1
        );

      draw();
    };


  document.getElementById("d82Next").onclick =
    function () {

      stop();

      index =
        Math.min(
          slides.length - 1,
          index + 1
        );

      draw();
    };


  document.getElementById("d82Restart").onclick =
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
        "⏸ Pause Water Mission";

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
        ".d82-steve-answer"
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
    "d82SteveCheck"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "d82SteveFeedback"
        );


      if (!steve) {

        feedback.textContent =
          "Choose an answer first.";

        return;
      }


      if (steve === "A") {

        feedback.style.color =
          "#087a35";

        feedback.textContent =
          "Correct! Sun energy can cause liquid water to evaporate into water vapor.";

      } else {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Try again. Matter does not simply disappear. Think about a change of state.";
      }
    };


  document.getElementById(
    "d82SteveReset"
  ).onclick =
    function () {

      steve = null;

      document.getElementById(
        "d82SteveFeedback"
      ).textContent = "";

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
    ".d82-question"
  ).forEach(
    function (question) {

      const correct =
        question.dataset.answer;

      const feedback =
        question.querySelector(
          ".d82-feedback"
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
                  "Correct! Your answer matches the water-cycle evidence.";

              } else {

                feedback.style.color =
                  "#b00020";

                feedback.textContent =
                  "Try again. Trace the water and identify the process occurring.";
              }
            };
        }
      );
    }
  );


  /* VOCAB */

  const modal =
    document.getElementById(
      "d82VocabModal"
    );


  document.querySelectorAll(
    ".d82-vocab"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.getElementById(
            "d82ModalIcon"
          ).textContent =
            button.dataset.icon;

          document.getElementById(
            "d82ModalTerm"
          ).textContent =
            button.dataset.term;

          document.getElementById(
            "d82ModalDefinition"
          ).textContent =
            button.dataset.definition;

          modal.classList.add(
            "show"
          );
        };
    }
  );


  document.getElementById(
    "d82VocabClose"
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
