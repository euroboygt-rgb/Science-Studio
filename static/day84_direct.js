(function () {
  "use strict";


  const slides = [

    {
      icon: "☁️",
      title: "Start Inside the Cloud",
      main:
        "Cloud droplets and ice particles can combine and grow.",
      caption:
        "When particles become large enough, gravity can pull them downward."
    },

    {
      icon: "🌧️",
      title: "Rain",
      main:
        "Liquid water reaches the surface without freezing.",
      caption:
        "The particle arrives as a liquid."
    },

    {
      icon: "❄️",
      title: "Snow",
      main:
        "Frozen crystals can remain frozen as they fall through sufficiently cold air.",
      caption:
        "The particle arrives as a solid snowflake."
    },

    {
      icon: "🧊",
      title: "Sleet",
      main:
        "Frozen precipitation can melt in warmer air and then refreeze in cold air near the surface.",
      caption:
        "The particle reaches the ground as an ice pellet."
    },

    {
      icon: "🌡️",
      title: "Read Every Air Layer",
      main:
        "Temperature can change between the cloud and the ground.",
      caption:
        "Trace the particle from top to bottom before predicting."
    },

    {
      icon: "⛈️",
      title: "Hail Is Different",
      main:
        "Hail grows inside strong thunderstorms when powerful updrafts repeatedly carry ice upward.",
      caption:
        "Hail is not simply ordinary rain freezing near the ground."
    },

    {
      icon: "🕵️",
      title: "Use Evidence",
      main:
        "Temperature profiles and storm conditions help scientists predict precipitation type.",
      caption:
        "Atmosphere evidence → prediction"
    }

  ];


  let index = 0;
  let timer = null;


  const icon =
    document.getElementById("d84SlideIcon");

  const title =
    document.getElementById("d84SlideTitle");

  const main =
    document.getElementById("d84SlideMain");

  const caption =
    document.getElementById("d84SlideCaption");

  const number =
    document.getElementById("d84SlideNumber");

  const play =
    document.getElementById("d84Play");


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
      "▶ Play Precipitation Mission";
  }


  document.getElementById("d84Back").onclick =
    function () {

      stop();

      index =
        Math.max(
          0,
          index - 1
        );

      draw();
    };


  document.getElementById("d84Next").onclick =
    function () {

      stop();

      index =
        Math.min(
          slides.length - 1,
          index + 1
        );

      draw();
    };


  document.getElementById("d84Restart").onclick =
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
        "⏸ Pause Precipitation Mission";

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
        ".d84-steve-answer"
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
    "d84SteveCheck"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "d84SteveFeedback"
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
          "Correct! Hail grows inside strong thunderstorms with powerful updrafts that repeatedly lift ice.";

      } else {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Try again. Hail has a different formation process from ordinary rain, snow, or sleet.";
      }
    };


  document.getElementById(
    "d84SteveReset"
  ).onclick =
    function () {

      steve = null;

      document.getElementById(
        "d84SteveFeedback"
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
    ".d84-question"
  ).forEach(
    function (question) {

      const correct =
        question.dataset.answer;

      const feedback =
        question.querySelector(
          ".d84-feedback"
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
                  "Correct! The atmospheric evidence supports that answer.";

              } else {

                feedback.style.color =
                  "#b00020";

                feedback.textContent =
                  "Try again. Trace the particle through every layer or identify the storm process.";
              }
            };
        }
      );
    }
  );


  /* VOCAB */

  const modal =
    document.getElementById(
      "d84VocabModal"
    );


  document.querySelectorAll(
    ".d84-vocab"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.getElementById(
            "d84ModalIcon"
          ).textContent =
            button.dataset.icon;

          document.getElementById(
            "d84ModalTerm"
          ).textContent =
            button.dataset.term;

          document.getElementById(
            "d84ModalDefinition"
          ).textContent =
            button.dataset.definition;

          modal.classList.add(
            "show"
          );
        };
    }
  );


  document.getElementById(
    "d84VocabClose"
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
