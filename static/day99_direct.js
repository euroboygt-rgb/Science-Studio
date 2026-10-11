(function () {
  "use strict";


  let steve = null;


  const steveButtons =
    Array.from(
      document.querySelectorAll(
        ".d99-steve-answer"
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
    "d99SteveCheck"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "d99SteveFeedback"
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
          "Correct! Moving water transports sediment. When flow slows, more sediment can settle and be deposited.";

      } else {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Try again. Remember: erosion/transport = MOVE and deposition = DROP.";
      }
    };


  document.getElementById(
    "d99SteveReset"
  ).onclick =
    function () {

      steve = null;


      document.getElementById(
        "d99SteveFeedback"
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
    ".d99-question"
  ).forEach(
    function (question) {

      const correct =
        question.dataset.answer;


      const feedback =
        question.querySelector(
          ".d99-feedback"
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
                  "Correct! You followed the sediment evidence.";

              } else {

                feedback.style.color =
                  "#b00020";


                feedback.textContent =
                  "Try again. Trace the sediment from transport to deposition.";
              }
            };
        }
      );
    }
  );


  const modal =
    document.getElementById(
      "d99VocabModal"
    );


  document.querySelectorAll(
    ".d99-vocab"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.getElementById(
            "d99ModalIcon"
          ).textContent =
            button.dataset.icon;


          document.getElementById(
            "d99ModalTerm"
          ).textContent =
            button.dataset.term;


          document.getElementById(
            "d99ModalDefinition"
          ).textContent =
            button.dataset.definition;


          modal.classList.add(
            "show"
          );
        };
    }
  );


  document.getElementById(
    "d99VocabClose"
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
