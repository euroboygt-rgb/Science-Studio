(function () {
  "use strict";

  const slides = [

    {
      icon: "☀️",
      title: "Energy Enters the System",
      main:
        "The Sun supplies energy that warms Earth's surface, including ocean water.",
      caption:
        "Energy begins the evaporation connection."
    },

    {
      icon: "🌊",
      title: "The Ocean Supplies Water",
      main:
        "The ocean is a major reservoir of surface water available for evaporation.",
      caption:
        "Sun energy + ocean water interact."
    },

    {
      icon: "⬆️",
      title: "Evaporation Adds Moisture",
      main:
        "Liquid water changes into water vapor and enters the atmosphere.",
      caption:
        "Water moves from surface to atmosphere."
    },

    {
      icon: "☁️",
      title: "Cooling Can Build Clouds",
      main:
        "When moist air cools enough, water vapor can condense into droplets or ice crystals.",
      caption:
        "Atmospheric conditions matter."
    },

    {
      icon: "🌧️",
      title: "Precipitation May Develop",
      main:
        "Cloud particles must grow large enough before precipitation can fall.",
      caption:
        "Cloud does not automatically mean rain."
    },

    {
      icon: "🌦️",
      title: "Weather Is the System Result",
      main:
        "Sun energy, ocean water, atmospheric moisture, temperature, clouds, and precipitation interact.",
      caption:
        "Weather is produced by connected processes."
    }

  ];


  let index = 0;
  let timer = null;

  const icon = document.getElementById("d85SlideIcon");
  const title = document.getElementById("d85SlideTitle");
  const main = document.getElementById("d85SlideMain");
  const caption = document.getElementById("d85SlideCaption");
  const number = document.getElementById("d85SlideNumber");
  const play = document.getElementById("d85Play");


  function draw() {

    const slide = slides[index];

    icon.textContent = slide.icon;
    title.textContent = slide.title;
    main.textContent = slide.main;
    caption.textContent = slide.caption;

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
      "▶ Play Weather Engine Brief";
  }


  document.getElementById("d85Back").onclick =
    function () {

      stop();

      index = Math.max(0,index - 1);

      draw();
    };


  document.getElementById("d85Next").onclick =
    function () {

      stop();

      index = Math.min(
        slides.length - 1,
        index + 1
      );

      draw();
    };


  document.getElementById("d85Restart").onclick =
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
        "⏸ Pause Weather Engine Brief";

      timer =
        setInterval(
          function () {

            if (index < slides.length - 1) {
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
        ".d85-steve-answer"
      )
    );


  steveButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          steveButtons.forEach(
            function (item) {
              item.classList.remove("selected");
            }
          );

          button.classList.add("selected");

          steve = button.dataset.answer;
        };
    }
  );


  document.getElementById("d85SteveCheck").onclick =
    function () {

      const feedback =
        document.getElementById(
          "d85SteveFeedback"
        );

      if (!steve) {
        feedback.textContent =
          "Choose an explanation first.";
        return;
      }

      if (steve === "A") {

        feedback.style.color = "#087a35";

        feedback.textContent =
          "Correct! More evaporation adds atmospheric moisture, but clouds and precipitation require additional conditions.";

      } else {

        feedback.style.color = "#b00020";

        feedback.textContent =
          "Try again. More moisture can affect weather potential, but it does not guarantee immediate rain.";
      }
    };


  document.getElementById("d85SteveReset").onclick =
    function () {

      steve = null;

      document.getElementById(
        "d85SteveFeedback"
      ).textContent = "";

      steveButtons.forEach(
        function (button) {
          button.classList.remove("selected");
        }
      );
    };


  /* STAAR */

  document.querySelectorAll(
    ".d85-question"
  ).forEach(
    function (question) {

      const correct =
        question.dataset.answer;

      const feedback =
        question.querySelector(
          ".d85-feedback"
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
                  item.classList.remove("selected");
                }
              );

              button.classList.add("selected");

              if (
                button.dataset.choice === correct
              ) {

                feedback.style.color =
                  "#087a35";

                feedback.textContent =
                  "Correct! Your answer follows the Sun-ocean-water-weather system.";

              } else {

                feedback.style.color =
                  "#b00020";

                feedback.textContent =
                  "Try again. Trace both energy and water through the system.";
              }
            };
        }
      );
    }
  );


  /* VOCAB */

  const modal =
    document.getElementById(
      "d85VocabModal"
    );


  document.querySelectorAll(
    ".d85-vocab"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.getElementById(
            "d85ModalIcon"
          ).textContent =
            button.dataset.icon;

          document.getElementById(
            "d85ModalTerm"
          ).textContent =
            button.dataset.term;

          document.getElementById(
            "d85ModalDefinition"
          ).textContent =
            button.dataset.definition;

          modal.classList.add("show");
        };
    }
  );


  document.getElementById("d85VocabClose").onclick =
    function () {
      modal.classList.remove("show");
    };


  modal.onclick =
    function (event) {

      if (event.target === modal) {
        modal.classList.remove("show");
      }
    };

})();
