(function () {
  "use strict";


  /* STEVE */

  let steve = null;


  const steveButtons =
    Array.from(
      document.querySelectorAll(
        ".d91-steve-answer"
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
    "d91SteveCheck"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "d91SteveFeedback"
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
          "Correct! In our simple undisturbed model, the bottom layer was deposited first and later deposits accumulated above it.";

      } else {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Try again. Think about which layer had to be present before another layer could be deposited on top.";
      }
    };


  document.getElementById(
    "d91SteveReset"
  ).onclick =
    function () {

      steve = null;


      document.getElementById(
        "d91SteveFeedback"
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
    ".d91-question"
  ).forEach(
    function (question) {

      const correct =
        question.dataset.answer;


      const feedback =
        question.querySelector(
          ".d91-feedback"
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
                  "Correct! The rock-layer evidence supports this answer.";

              } else {

                feedback.style.color =
                  "#b00020";


                feedback.textContent =
                  "Try again. Follow the deposition sequence and connect it to W.E.D.C.C.";
              }
            };
        }
      );
    }
  );


  /* VOCAB */

  const modal =
    document.getElementById(
      "d91VocabModal"
    );


  document.querySelectorAll(
    ".d91-vocab"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.getElementById(
            "d91ModalIcon"
          ).textContent =
            button.dataset.icon;


          document.getElementById(
            "d91ModalTerm"
          ).textContent =
            button.dataset.term;


          document.getElementById(
            "d91ModalDefinition"
          ).textContent =
            button.dataset.definition;


          modal.classList.add(
            "show"
          );
        };
    }
  );


  document.getElementById(
    "d91VocabClose"
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
