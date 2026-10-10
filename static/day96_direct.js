(function () {
  "use strict";


  let steve = null;


  const steveButtons =
    Array.from(
      document.querySelectorAll(
        ".d96-steve-answer"
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
    "d96SteveCheck"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "d96SteveFeedback"
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
          "Correct! W.E.D.C.C. describes sedimentary-rock formation. Fossil fuels form from ancient organic material under other geologic conditions.";

      } else {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Try again. Ask whether the evidence describes sediment grains becoming rock or ancient organic material becoming fuel.";
      }
    };


  document.getElementById(
    "d96SteveReset"
  ).onclick =
    function () {

      steve = null;


      document.getElementById(
        "d96SteveFeedback"
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
    ".d96-question"
  ).forEach(
    function (question) {

      const correct =
        question.dataset.answer;


      const feedback =
        question.querySelector(
          ".d96-feedback"
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
                  "Correct! The evidence matches the system.";

              } else {

                feedback.style.color =
                  "#b00020";


                feedback.textContent =
                  "Try again. Identify the key evidence before choosing the process.";
              }
            };
        }
      );
    }
  );


  const modal =
    document.getElementById(
      "d96VocabModal"
    );


  document.querySelectorAll(
    ".d96-vocab"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.getElementById(
            "d96ModalIcon"
          ).textContent =
            button.dataset.icon;


          document.getElementById(
            "d96ModalTerm"
          ).textContent =
            button.dataset.term;


          document.getElementById(
            "d96ModalDefinition"
          ).textContent =
            button.dataset.definition;


          modal.classList.add(
            "show"
          );
        };
    }
  );


  document.getElementById(
    "d96VocabClose"
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
