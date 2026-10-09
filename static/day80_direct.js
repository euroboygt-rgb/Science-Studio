(function () {
  "use strict";


  const slides = [

    {
      icon: "🚨",
      title: "Mission Control Emergency",
      main:
        "Four Earth systems have gone offline.",
      caption:
        "Your crew must restore them using science evidence."
    },

    {
      icon: "📍",
      title: "System 1: Axis & Rotation",
      main:
        "Earth rotates around its tilted axis approximately once every 24 hours.",
      caption:
        "This is the motion behind today's mission."
    },

    {
      icon: "☀️🌙",
      title: "System 2: Day & Night",
      main:
        "Rotation carries locations into and out of sunlight.",
      caption:
        "Facing the Sun = day. Facing away = night."
    },

    {
      icon: "🌅🌇",
      title: "System 3: Apparent Sun Motion",
      main:
        "Earth rotates west to east, making the Sun appear to move east to west.",
      caption:
        "What we see is apparent motion."
    },

    {
      icon: "⬛",
      title: "System 4: Shadow Tracker",
      main:
        "Changing apparent Sun position changes shadow direction and length.",
      caption:
        "Shadows are evidence."
    },

    {
      icon: "🌎",
      title: "One Cause",
      main:
        "Earth's rotation connects all four systems.",
      caption:
        "Different observations can have the same underlying cause."
    },

    {
      icon: "🚀",
      title: "Begin System Recovery",
      main:
        "Use models, predictions, and evidence to restore Mission Control.",
      caption:
        "Science crew: report to the lab."
    }

  ];


  let index = 0;
  let timer = null;


  const icon =
    document.getElementById("d80SlideIcon");

  const title =
    document.getElementById("d80SlideTitle");

  const main =
    document.getElementById("d80SlideMain");

  const caption =
    document.getElementById("d80SlideCaption");

  const number =
    document.getElementById("d80SlideNumber");

  const play =
    document.getElementById("d80Play");


  function draw() {

    const slide = slides[index];

    icon.textContent = slide.icon;
    title.textContent = slide.title;
    main.textContent = slide.main;
    caption.textContent = slide.caption;

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
      "▶ Play Emergency Brief";
  }


  document.getElementById("d80Back").onclick =
    function () {

      stop();

      index =
        Math.max(
          0,
          index - 1
        );

      draw();
    };


  document.getElementById("d80Next").onclick =
    function () {

      stop();

      index =
        Math.min(
          slides.length - 1,
          index + 1
        );

      draw();
    };


  document.getElementById("d80Restart").onclick =
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
        "⏸ Pause Emergency Brief";

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
        ".d80-steve-answer"
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
    "d80SteveCheck"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "d80SteveFeedback"
        );


      if (!steve) {

        feedback.textContent =
          "Choose a system cause first.";

        return;
      }


      if (steve === "A") {

        feedback.style.color =
          "#087a35";

        feedback.textContent =
          "Correct! Earth's rotation connects all four daily patterns.";

      } else {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Try again. Think about the motion that repeats approximately every 24 hours.";
      }
    };


  document.getElementById(
    "d80SteveReset"
  ).onclick =
    function () {

      steve = null;

      document.getElementById(
        "d80SteveFeedback"
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
    ".d80-question"
  ).forEach(
    function (question) {

      const correct =
        question.dataset.answer;

      const feedback =
        question.querySelector(
          ".d80-feedback"
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
                  "SYSTEM VERIFIED — correct.";

              } else {

                feedback.style.color =
                  "#b00020";

                feedback.textContent =
                  "SYSTEM ERROR — use Earth's rotation and the evidence to try again.";
              }
            };
        }
      );
    }
  );


  /* VOCAB */

  const modal =
    document.getElementById(
      "d80VocabModal"
    );


  document.querySelectorAll(
    ".d80-vocab"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.getElementById(
            "d80ModalIcon"
          ).textContent =
            button.dataset.icon;

          document.getElementById(
            "d80ModalTerm"
          ).textContent =
            button.dataset.term;

          document.getElementById(
            "d80ModalDefinition"
          ).textContent =
            button.dataset.definition;

          modal.classList.add(
            "show"
          );
        };
    }
  );


  document.getElementById(
    "d80VocabClose"
  ).onclick =
    function () {

      modal.classList.remove(
        "show"
      );
    };


  modal.onclick =
    function (event) {

      if (event.target === modal) {

        modal.classList.remove(
          "show"
        );
      }
    };

})();
