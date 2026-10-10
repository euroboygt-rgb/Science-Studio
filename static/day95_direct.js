(function () {
  "use strict";


  let steve = null;


  const steveButtons =
    Array.from(
      document.querySelectorAll(
        ".d95-steve-answer"
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
    "d95SteveCheck"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "d95SteveFeedback"
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
          "Correct! Petroleum forms from ancient organic material under suitable geologic conditions. A preserved fish fossil does not simply melt into oil.";

      } else {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Try again. Separate a fossil from the ancient organic material and geologic processes involved in fossil-fuel formation.";
      }
    };


  document.getElementById(
    "d95SteveReset"
  ).onclick =
    function () {

      steve = null;


      document.getElementById(
        "d95SteveFeedback"
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
    ".d95-question"
  ).forEach(
    function (question) {

      const correct =
        question.dataset.answer;


      const feedback =
        question.querySelector(
          ".d95-feedback"
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
                  "Try again. Trace the ancient organic material through burial, heat, pressure, and geologic time.";
              }
            };
        }
      );
    }
  );


  const modal =
    document.getElementById(
      "d95VocabModal"
    );


  document.querySelectorAll(
    ".d95-vocab"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.getElementById(
            "d95ModalIcon"
          ).textContent =
            button.dataset.icon;


          document.getElementById(
            "d95ModalTerm"
          ).textContent =
            button.dataset.term;


          document.getElementById(
            "d95ModalDefinition"
          ).textContent =
            button.dataset.definition;


          modal.classList.add(
            "show"
          );
        };
    }
  );


  document.getElementById(
    "d95VocabClose"
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
