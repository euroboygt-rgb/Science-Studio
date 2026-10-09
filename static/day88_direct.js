(function () {
  "use strict";


  let steve = null;


  const steveButtons =
    Array.from(
      document.querySelectorAll(
        ".d88-steve-answer"
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
    "d88SteveCheck"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "d88SteveFeedback"
        );


      if (!steve) {

        feedback.textContent =
          "Choose a response first.";

        return;
      }


      if (
        steve === "B"
      ) {

        feedback.style.color =
          "#087a35";


        feedback.textContent =
          "Correct! Increased evaporation can add atmospheric moisture, but cloud formation and precipitation require additional conditions.";

      } else {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Try again. Trace the entire system instead of assuming evaporation automatically causes rain.";
      }
    };


  document.getElementById(
    "d88SteveReset"
  ).onclick =
    function () {

      steve = null;


      document.getElementById(
        "d88SteveFeedback"
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


  /* VOCAB */

  const modal =
    document.getElementById(
      "d88VocabModal"
    );


  document.querySelectorAll(
    ".d88-vocab"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.getElementById(
            "d88ModalIcon"
          ).textContent =
            button.dataset.icon;


          document.getElementById(
            "d88ModalTerm"
          ).textContent =
            button.dataset.term;


          document.getElementById(
            "d88ModalDefinition"
          ).textContent =
            button.dataset.definition;


          modal.classList.add(
            "show"
          );
        };
    }
  );


  document.getElementById(
    "d88VocabClose"
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
