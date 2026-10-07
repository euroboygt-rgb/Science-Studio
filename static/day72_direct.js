(function () {
  "use strict";


  const slides = [

    {
      icon: "🔦",
      title: "Shine the Light",
      main:
        "A flashlight sends visible light toward a material.",
      caption:
        "What happens next depends on the material."
    },

    {
      icon: "🪟",
      title: "Transparent",
      main:
        "Most visible light passes through with little scattering.",
      caption:
        "You can usually see clearly through the material."
    },

    {
      icon: "🥤",
      title: "Transparent Examples",
      main:
        "Clear window glass, clean water, clear plastic, and clear acrylic can be transparent.",
      caption:
        "Most visible light is transmitted."
    },

    {
      icon: "🧻",
      title: "Translucent",
      main:
        "Some visible light passes through, but the light is scattered.",
      caption:
        "Objects behind the material appear blurry."
    },

    {
      icon: "🚿",
      title: "Translucent Examples",
      main:
        "Wax paper, frosted glass, tracing paper, and frosted plastic can be translucent.",
      caption:
        "Light passes through, but not clearly."
    },

    {
      icon: "📦",
      title: "Opaque",
      main:
        "Visible light is not transmitted through an opaque material.",
      caption:
        "The light may instead be reflected or absorbed."
    },

    {
      icon: "📕",
      title: "Opaque Examples",
      main:
        "Cardboard, books, wood, and aluminum foil are opaque.",
      caption:
        "You cannot see through them."
    },

    {
      icon: "⭐",
      title: "Remember the Rule",
      main:
        "Transparent = clear. Translucent = blurry. Opaque = blocked.",
      caption:
        "Now you're ready for the 12-item sorting mission."
    }

  ];


  let index = 0;
  let timer = null;


  const icon =
    document.getElementById("d72SlideIcon");

  const title =
    document.getElementById("d72SlideTitle");

  const main =
    document.getElementById("d72SlideMain");

  const caption =
    document.getElementById("d72SlideCaption");

  const number =
    document.getElementById("d72SlideNumber");

  const play =
    document.getElementById("d72Play");


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
    .getElementById("d72Back")
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
    .getElementById("d72Next")
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
    .getElementById("d72Restart")
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
        ".d72-steve-answer"
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
    .getElementById("d72SteveCheck")
    .onclick =
    function () {

      const feedback =
        document.getElementById(
          "d72SteveFeedback"
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
          "Correct! Wax paper is translucent because some light passes through but scatters.";

      } else {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Try again. Steve can see light through the material, but the image is blurry.";
      }
    };


  document
    .getElementById("d72SteveReset")
    .onclick =
    function () {

      steveAnswer = null;

      document
        .getElementById(
          "d72SteveFeedback"
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


  /* STAAR */

  document
    .querySelectorAll(
      ".d72-question"
    )
    .forEach(
      function (question) {

        const correct =
          question.dataset.answer;

        const feedback =
          question.querySelector(
            ".d72-question-feedback"
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
                      "Correct! Use how much light passes through as your evidence.";

                  } else {

                    feedback.style.color =
                      "#b00020";

                    feedback.textContent =
                      "Try again. Ask whether light passes clearly, scatters, or does not pass through.";
                  }
                };
            }
          );
      }
    );


  /* Vocabulary */

  const modal =
    document.getElementById(
      "d72VocabModal"
    );

  const modalIcon =
    document.getElementById(
      "d72ModalIcon"
    );

  const modalTerm =
    document.getElementById(
      "d72ModalTerm"
    );

  const modalDefinition =
    document.getElementById(
      "d72ModalDefinition"
    );


  document
    .querySelectorAll(
      ".d72-vocab"
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
    .getElementById("d72VocabClose")
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
