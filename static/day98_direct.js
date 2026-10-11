(function () {
  "use strict";


  let steve = null;


  const steveButtons =
    Array.from(
      document.querySelectorAll(
        ".d98-steve-answer"
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
    "d98SteveCheck"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "d98SteveFeedback"
        );


      if (!steve) {

        feedback.textContent =
          "Choose an explanation first.";

        return;
      }


      if (
        steve === "B"
      ) {

        feedback.style.color =
          "#087a35";


        feedback.textContent =
          "Correct! Canyons are strongly connected to erosion. Deltas and sand dunes are strongly connected to deposition.";

      } else {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Try again. Ask whether sediment is being removed and moved or being dropped and accumulated.";
      }
    };


  document.getElementById(
    "d98SteveReset"
  ).onclick =
    function () {

      steve = null;


      document.getElementById(
        "d98SteveFeedback"
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


  document.querySelectorAll(
    ".d98-question"
  ).forEach(
    function (question) {

      const correct =
        question.dataset.answer;


      const feedback =
        question.querySelector(
          ".d98-feedback"
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
                  "Correct! You matched the agent, process, and surface change.";

              } else {

                feedback.style.color =
                  "#b00020";


                feedback.textContent =
                  "Try again. Decide whether Earth material is moving away or being deposited.";
              }
            };
        }
      );
    }
  );


  const modal =
    document.getElementById(
      "d98VocabModal"
    );


  document.querySelectorAll(
    ".d98-vocab"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.getElementById(
            "d98ModalIcon"
          ).textContent =
            button.dataset.icon;


          document.getElementById(
            "d98ModalTerm"
          ).textContent =
            button.dataset.term;


          document.getElementById(
            "d98ModalDefinition"
          ).textContent =
            button.dataset.definition;


          modal.classList.add(
            "show"
          );
        };
    }
  );


  document.getElementById(
    "d98VocabClose"
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
