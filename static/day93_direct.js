(function () {
  "use strict";


  let steve = null;


  const steveButtons =
    Array.from(
      document.querySelectorAll(
        ".d93-steve-answer"
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
    "d93SteveCheck"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "d93SteveFeedback"
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
          "Correct! A fossil is evidence of past life. Fossil fuels form from ancient organic material under suitable conditions over very long periods of time.";

      } else {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Try again. A fossil and a fossil fuel are related to ancient life, but they are not the same thing.";
      }
    };


  document.getElementById(
    "d93SteveReset"
  ).onclick =
    function () {

      steve = null;


      document.getElementById(
        "d93SteveFeedback"
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
    ".d93-question"
  ).forEach(
    function (question) {

      const correct =
        question.dataset.answer;


      const feedback =
        question.querySelector(
          ".d93-feedback"
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
                  "Correct! You followed the fossil-fuel formation evidence.";

              } else {

                feedback.style.color =
                  "#b00020";


                feedback.textContent =
                  "Try again. Trace ancient organic material → burial → heat + pressure → very long time.";
              }
            };
        }
      );
    }
  );


  /* VOCAB */

  const modal =
    document.getElementById(
      "d93VocabModal"
    );


  document.querySelectorAll(
    ".d93-vocab"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.getElementById(
            "d93ModalIcon"
          ).textContent =
            button.dataset.icon;


          document.getElementById(
            "d93ModalTerm"
          ).textContent =
            button.dataset.term;


          document.getElementById(
            "d93ModalDefinition"
          ).textContent =
            button.dataset.definition;


          modal.classList.add(
            "show"
          );
        };
    }
  );


  document.getElementById(
    "d93VocabClose"
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
