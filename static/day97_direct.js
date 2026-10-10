(function () {
  "use strict";


  let steve = null;


  const buttons =
    Array.from(
      document.querySelectorAll(
        ".d97-steve-answer"
      )
    );


  buttons.forEach(
    function (button) {

      button.onclick =
        function () {

          buttons.forEach(
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
    "d97SteveCheck"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "d97SteveFeedback"
        );


      if (!steve) {

        feedback.textContent =
          "Choose an answer first.";

        return;
      }


      if (
        steve === "A"
      ) {

        feedback.style.color =
          "#087a35";


        feedback.textContent =
          "Correct! Fossils are evidence of past life, while fossil fuels are energy resources formed from ancient organic material under suitable geologic conditions.";

      } else {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Try again. Fossil and fossil fuel are related words, but they describe different things.";
      }
    };


  document.getElementById(
    "d97SteveReset"
  ).onclick =
    function () {

      steve = null;


      document.getElementById(
        "d97SteveFeedback"
      ).textContent =
        "";


      buttons.forEach(
        function (button) {

          button.classList.remove(
            "selected"
          );
        }
      );
    };


  const modal =
    document.getElementById(
      "d97VocabModal"
    );


  document.querySelectorAll(
    ".d97-vocab"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.getElementById(
            "d97ModalIcon"
          ).textContent =
            button.dataset.icon;


          document.getElementById(
            "d97ModalTerm"
          ).textContent =
            button.dataset.term;


          document.getElementById(
            "d97ModalDefinition"
          ).textContent =
            button.dataset.definition;


          modal.classList.add(
            "show"
          );
        };
    }
  );


  document.getElementById(
    "d97VocabClose"
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
