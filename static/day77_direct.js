(function () {
  "use strict";

  const slides = [

    {
      icon: "☀️",
      title: "The Sun Lights Earth",
      main:
        "At any moment, sunlight illuminates approximately half of Earth.",
      caption:
        "The half facing the Sun experiences daytime."
    },

    {
      icon: "🌙",
      title: "The Other Half Is Dark",
      main:
        "The half facing away from the Sun is not receiving direct sunlight.",
      caption:
        "That half experiences nighttime."
    },

    {
      icon: "🔄",
      title: "Earth Rotates",
      main:
        "Earth rotates around its axis approximately once every 24 hours.",
      caption:
        "The Sun stays fixed in our model while Earth turns."
    },

    {
      icon: "🌇",
      title: "Day Becomes Night",
      main:
        "As a location rotates away from the illuminated half, it passes through sunset and enters night.",
      caption:
        "Sunset is a transition caused by Earth's rotation."
    },

    {
      icon: "🌅",
      title: "Night Becomes Day",
      main:
        "As Earth keeps rotating, that location eventually moves from darkness back into sunlight.",
      caption:
        "That transition is sunrise."
    },

    {
      icon: "🕛",
      title: "One Full Rotation",
      main:
        "After approximately 24 hours, Earth has completed one rotation.",
      caption:
        "The location returns to approximately the same position relative to the Sun."
    },

    {
      icon: "🔁",
      title: "The Pattern Repeats",
      main:
        "Day, sunset, night, sunrise, and day repeat because Earth keeps rotating.",
      caption:
        "Rotation creates a predictable daily pattern."
    },

    {
      icon: "🚫",
      title: "The Sun Is Not Circling Earth",
      main:
        "The Sun appears to move across our sky, but Earth's rotation creates that apparent daily motion.",
      caption:
        "Tomorrow we will investigate that apparent movement."
    }

  ];

  let index = 0;
  let timer = null;

  const icon = document.getElementById("d77SlideIcon");
  const title = document.getElementById("d77SlideTitle");
  const main = document.getElementById("d77SlideMain");
  const caption = document.getElementById("d77SlideCaption");
  const number = document.getElementById("d77SlideNumber");
  const play = document.getElementById("d77Play");

  function draw() {

    const slide = slides[index];

    icon.textContent = slide.icon;
    title.textContent = slide.title;
    main.textContent = slide.main;
    caption.textContent = slide.caption;

    number.textContent =
      "Slide " +
      (index + 1) +
      " of " +
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

  document.getElementById("d77Back").onclick =
    function () {

      stop();

      index =
        Math.max(
          0,
          index - 1
        );

      draw();
    };

  document.getElementById("d77Next").onclick =
    function () {

      stop();

      index =
        Math.min(
          slides.length - 1,
          index + 1
        );

      draw();
    };

  document.getElementById("d77Restart").onclick =
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
        ".d77-steve-answer"
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

  document.getElementById("d77SteveCheck").onclick =
    function () {

      const feedback =
        document.getElementById(
          "d77SteveFeedback"
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
          "Correct! Earth's rotation moves the location from the illuminated side into the dark side.";

      } else {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Try again. The flashlight stayed fixed. Think about what moved in Steve's model.";
      }
    };

  document.getElementById("d77SteveReset").onclick =
    function () {

      steveAnswer = null;

      document.getElementById(
        "d77SteveFeedback"
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
    ".d77-question"
  ).forEach(
    function (question) {

      const correct =
        question.dataset.answer;

      const feedback =
        question.querySelector(
          ".d77-question-feedback"
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
                  "Correct! Your answer matches the day/night model.";

              } else {

                feedback.style.color =
                  "#b00020";

                feedback.textContent =
                  "Try again. Use Earth's rotation and the direction of sunlight as evidence.";
              }
            };
        }
      );
    }
  );


  /* VOCAB */

  const modal =
    document.getElementById(
      "d77VocabModal"
    );

  const modalIcon =
    document.getElementById(
      "d77ModalIcon"
    );

  const modalTerm =
    document.getElementById(
      "d77ModalTerm"
    );

  const modalDefinition =
    document.getElementById(
      "d77ModalDefinition"
    );

  document.querySelectorAll(
    ".d77-vocab"
  ).forEach(
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

  document.getElementById("d77VocabClose").onclick =
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
