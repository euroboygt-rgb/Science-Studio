(function () {
  "use strict";


  const slides = [

    {
      icon: "🏆",
      title: "Certification Day",
      main:
        "Today you prove that you can transfer your Earth-rotation knowledge to unfamiliar situations.",
      caption:
        "Knowing a fact is different from using evidence."
    },

    {
      icon: "1️⃣",
      title: "Read the Scenario",
      main:
        "Before looking for a familiar vocabulary word, understand what is actually happening.",
      caption:
        "What observation is being described?"
    },

    {
      icon: "🔎",
      title: "Find the Evidence",
      main:
        "Look for position, direction, time, light, darkness, or shadow information.",
      caption:
        "Evidence should guide the answer."
    },

    {
      icon: "🌎",
      title: "Ask What Earth Is Doing",
      main:
        "Earth rotates west to east around its axis approximately once every 24 hours.",
      caption:
        "Use the real motion to explain what an observer sees."
    },

    {
      icon: "👀",
      title: "Separate Actual and Apparent Motion",
      main:
        "Earth actually rotates west to east while the Sun appears to move east to west.",
      caption:
        "Do not reverse the two motions."
    },

    {
      icon: "❌",
      title: "Eliminate Distractors",
      main:
        "Remove choices about Moon phases, yearly revolution, or the Sun circling Earth daily when they do not match the evidence.",
      caption:
        "A science word can still be the wrong answer."
    },

    {
      icon: "🧠",
      title: "Prove Your Answer",
      main:
        "Your explanation should account for all evidence in the scenario.",
      caption:
        "Evidence → Reasoning → Answer"
    }

  ];


  let index = 0;
  let timer = null;


  const icon =
    document.getElementById("d81SlideIcon");

  const title =
    document.getElementById("d81SlideTitle");

  const main =
    document.getElementById("d81SlideMain");

  const caption =
    document.getElementById("d81SlideCaption");

  const number =
    document.getElementById("d81SlideNumber");

  const play =
    document.getElementById("d81Play");


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
      "Brief "
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
      "▶ Play Certification Brief";
  }


  document.getElementById("d81Back").onclick =
    function () {

      stop();

      index =
        Math.max(
          0,
          index - 1
        );

      draw();
    };


  document.getElementById("d81Next").onclick =
    function () {

      stop();

      index =
        Math.min(
          slides.length - 1,
          index + 1
        );

      draw();
    };


  document.getElementById("d81Restart").onclick =
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
        "⏸ Pause Certification Brief";

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
        ".d81-steve-answer"
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
    "d81SteveCheck"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "d81SteveFeedback"
        );


      if (!steveAnswer) {

        feedback.textContent =
          "Choose a strategy first.";

        return;
      }


      if (
        steveAnswer === "B"
      ) {

        feedback.style.color =
          "#087a35";

        feedback.textContent =
          "Correct! Steve should identify the evidence before deciding which science idea explains it.";

      } else {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Try again. Strong scientists begin with evidence, not answer-choice guessing.";
      }
    };


  document.getElementById(
    "d81SteveReset"
  ).onclick =
    function () {

      steveAnswer = null;

      document.getElementById(
        "d81SteveFeedback"
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
    ".d81-question"
  ).forEach(
    function (question) {

      const correct =
        question.dataset.answer;

      const feedback =
        question.querySelector(
          ".d81-feedback"
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
                  "Correct — the evidence supports this explanation.";

              } else {

                feedback.style.color =
                  "#b00020";

                feedback.textContent =
                  "Recheck the evidence. Which choice explains every observation in the scenario?";
              }
            };
        }
      );
    }
  );


  /* VOCAB */

  const modal =
    document.getElementById(
      "d81VocabModal"
    );


  document.querySelectorAll(
    ".d81-vocab"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.getElementById(
            "d81ModalIcon"
          ).textContent =
            button.dataset.icon;

          document.getElementById(
            "d81ModalTerm"
          ).textContent =
            button.dataset.term;

          document.getElementById(
            "d81ModalDefinition"
          ).textContent =
            button.dataset.definition;

          modal.classList.add(
            "show"
          );
        };
    }
  );


  document.getElementById(
    "d81VocabClose"
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
