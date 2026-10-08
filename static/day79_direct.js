(function () {
  "use strict";


  const slides = [

    {
      icon: "🕵️",
      title: "Welcome, Shadow Detective",
      main:
        "Today the Sun will sometimes be hidden. Your job is to use the shadow as evidence.",
      caption:
        "Scientists often infer things they cannot directly see."
    },

    {
      icon: "⬛",
      title: "Clue 1: Direction",
      main:
        "A shadow extends generally away from its light source.",
      caption:
        "Shadow west? Look for the Sun toward the east."
    },

    {
      icon: "📏",
      title: "Clue 2: Length",
      main:
        "A lower Sun generally produces a longer shadow.",
      caption:
        "Long shadows often provide evidence of a lower apparent Sun."
    },

    {
      icon: "🔆",
      title: "Clue 3: A Higher Sun",
      main:
        "When the Sun appears higher in the sky, a standing object's shadow generally becomes shorter.",
      caption:
        "The shortest daily shadow is often near solar noon."
    },

    {
      icon: "🌅",
      title: "Morning Evidence",
      main:
        "A low eastern Sun generally produces a longer shadow extending toward the west.",
      caption:
        "Use both direction and length."
    },

    {
      icon: "🌇",
      title: "Afternoon Evidence",
      main:
        "A low western Sun generally produces a longer shadow extending toward the east.",
      caption:
        "The direction reverses as the apparent Sun position changes."
    },

    {
      icon: "🌎",
      title: "The Cause",
      main:
        "Earth's rotation causes the Sun's apparent daily motion across our sky.",
      caption:
        "Changing apparent Sun position creates changing shadows."
    },

    {
      icon: "🔎",
      title: "Use Evidence, Not Guessing",
      main:
        "Observe direction. Observe length. Infer the most likely Sun position.",
      caption:
        "That is your Shadow Detective method."
    }

  ];


  let index = 0;
  let timer = null;


  const icon =
    document.getElementById("d79SlideIcon");

  const title =
    document.getElementById("d79SlideTitle");

  const main =
    document.getElementById("d79SlideMain");

  const caption =
    document.getElementById("d79SlideCaption");

  const number =
    document.getElementById("d79SlideNumber");

  const play =
    document.getElementById("d79Play");


  function draw() {

    const slide =
      slides[index];

    icon.textContent = slide.icon;
    title.textContent = slide.title;
    main.textContent = slide.main;
    caption.textContent = slide.caption;

    number.textContent =
      "Case Brief "
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
      "▶ Play Detective Briefing";
  }


  document.getElementById("d79Back").onclick =
    function () {

      stop();

      index =
        Math.max(
          0,
          index - 1
        );

      draw();
    };


  document.getElementById("d79Next").onclick =
    function () {

      stop();

      index =
        Math.min(
          slides.length - 1,
          index + 1
        );

      draw();
    };


  document.getElementById("d79Restart").onclick =
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
        "⏸ Pause Detective Briefing";

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
        ".d79-steve-answer"
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


  document.getElementById(
    "d79SteveCheck"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "d79SteveFeedback"
        );


      if (!steveAnswer) {

        feedback.textContent =
          "Select your evidence-based answer first.";

        return;
      }


      if (
        steveAnswer === "A"
      ) {

        feedback.style.color =
          "#087a35";

        feedback.textContent =
          "Case solved! A west-pointing shadow is evidence that the Sun is toward the east. Its long length also suggests a lower Sun.";

      } else {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Recheck the evidence. A shadow extends generally away from the light source.";
      }
    };


  document.getElementById(
    "d79SteveReset"
  ).onclick =
    function () {

      steveAnswer = null;

      document.getElementById(
        "d79SteveFeedback"
      ).textContent = "";

      steveButtons.forEach(
        function (button) {

          button.classList.remove(
            "selected"
          );
        }
      );
    };


  /* STAAR QUESTIONS */

  document.querySelectorAll(
    ".d79-question"
  ).forEach(
    function (question) {

      const correct =
        question.dataset.answer;

      const feedback =
        question.querySelector(
          ".d79-question-feedback"
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
                  "Correct! The shadow evidence supports that conclusion.";

              } else {

                feedback.style.color =
                  "#b00020";

                feedback.textContent =
                  "Try again. Use both the shadow's direction and its length as evidence.";
              }
            };
        }
      );
    }
  );


  /* VOCAB */

  const modal =
    document.getElementById(
      "d79VocabModal"
    );

  const modalIcon =
    document.getElementById(
      "d79ModalIcon"
    );

  const modalTerm =
    document.getElementById(
      "d79ModalTerm"
    );

  const modalDefinition =
    document.getElementById(
      "d79ModalDefinition"
    );


  document.querySelectorAll(
    ".d79-vocab"
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


  document.getElementById(
    "d79VocabClose"
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
