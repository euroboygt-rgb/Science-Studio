(function () {
  "use strict";


  let steve = null;


  const steveButtons =
    Array.from(
      document.querySelectorAll(
        ".d100-steve-answer"
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
    "d100SteveCheck"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "d100SteveFeedback"
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
          "Correct! Deposition adds material. Canyon formation in our model depends mainly on erosion removing and transporting material.";

      } else {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Try again. Ask whether the landform is being built by deposited material or carved by material being removed.";
      }
    };


  document.getElementById(
    "d100SteveReset"
  ).onclick =
    function () {

      steve = null;


      document.getElementById(
        "d100SteveFeedback"
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
    ".d100-question"
  ).forEach(
    function (question) {

      const correct =
        question.dataset.answer;


      const feedback =
        question.querySelector(
          ".d100-feedback"
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
                  "Correct! You followed the erosion evidence.";

              } else {

                feedback.style.color =
                  "#b00020";


                feedback.textContent =
                  "Try again. Decide whether Earth material is being removed, transported, or deposited.";
              }
            };
        }
      );
    }
  );


  const modal =
    document.getElementById(
      "d100VocabModal"
    );


  document.querySelectorAll(
    ".d100-vocab"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.getElementById(
            "d100ModalIcon"
          ).textContent =
            button.dataset.icon;


          document.getElementById(
            "d100ModalTerm"
          ).textContent =
            button.dataset.term;


          document.getElementById(
            "d100ModalDefinition"
          ).textContent =
            button.dataset.definition;


          modal.classList.add(
            "show"
          );
        };
    }
  );


  document.getElementById(
    "d100VocabClose"
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
