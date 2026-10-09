(function () {
  "use strict";


  /* STEVE */

  let steve = null;


  const steveButtons =
    Array.from(
      document.querySelectorAll(
        ".d89-steve-answer"
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
    "d89SteveCheck"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "d89SteveFeedback"
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
          "Correct! Erosion MOVES sediment. Deposition DROPS or settles sediment.";

      } else {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Try again. Remember: erosion = MOVE and deposition = DROP.";
      }
    };


  document.getElementById(
    "d89SteveReset"
  ).onclick =
    function () {

      steve = null;


      document.getElementById(
        "d89SteveFeedback"
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
    ".d89-question"
  ).forEach(
    function (question) {

      const correct =
        question.dataset.answer;


      const feedback =
        question.querySelector(
          ".d89-feedback"
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
                  "Correct! You matched the evidence to the W.E.D.C.C. process.";

              } else {

                feedback.style.color =
                  "#b00020";


                feedback.textContent =
                  "Try again. Ask: Is the sediment breaking, moving, dropping, squeezing, or being bound?";
              }
            };
        }
      );
    }
  );


  /* VOCAB */

  const modal =
    document.getElementById(
      "d89VocabModal"
    );


  document.querySelectorAll(
    ".d89-vocab"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.getElementById(
            "d89ModalIcon"
          ).textContent =
            button.dataset.icon;


          document.getElementById(
            "d89ModalTerm"
          ).textContent =
            button.dataset.term;


          document.getElementById(
            "d89ModalDefinition"
          ).textContent =
            button.dataset.definition;


          modal.classList.add(
            "show"
          );
        };
    }
  );


  document.getElementById(
    "d89VocabClose"
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
