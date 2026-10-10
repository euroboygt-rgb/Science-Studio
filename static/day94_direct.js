(function () {
  "use strict";


  let steve = null;


  const steveButtons =
    Array.from(
      document.querySelectorAll(
        ".d94-steve-answer"
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
    "d94SteveCheck"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "d94SteveFeedback"
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
          "Correct! Coal formation requires much more than burying leaves for a few days. It involves burial, heat, pressure, and extremely long geologic time.";

      } else {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Try again. Think about the coal-formation time scale and the conditions acting on buried plant material.";
      }
    };


  document.getElementById(
    "d94SteveReset"
  ).onclick =
    function () {

      steve = null;


      document.getElementById(
        "d94SteveFeedback"
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
    ".d94-question"
  ).forEach(
    function (question) {

      const correct =
        question.dataset.answer;


      const feedback =
        question.querySelector(
          ".d94-feedback"
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
                  "Correct! You followed the coal-formation evidence.";

              } else {

                feedback.style.color =
                  "#b00020";


                feedback.textContent =
                  "Try again. Trace ancient plants → peat → burial → heat and pressure → millions of years → coal.";
              }
            };
        }
      );
    }
  );


  const modal =
    document.getElementById(
      "d94VocabModal"
    );


  document.querySelectorAll(
    ".d94-vocab"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.getElementById(
            "d94ModalIcon"
          ).textContent =
            button.dataset.icon;


          document.getElementById(
            "d94ModalTerm"
          ).textContent =
            button.dataset.term;


          document.getElementById(
            "d94ModalDefinition"
          ).textContent =
            button.dataset.definition;


          modal.classList.add(
            "show"
          );
        };
    }
  );


  document.getElementById(
    "d94VocabClose"
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
