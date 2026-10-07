(function () {
  "use strict";


  let whiteVisible = false;
  let spectrumVisible = false;
  let labelsVisible = false;

  const incoming =
    document.getElementById(
      "vsIncoming"
    );

  const spectrum =
    document.getElementById(
      "vsSpectrum"
    );

  const labels =
    document.getElementById(
      "vsColorLabels"
    );

  const result =
    document.getElementById(
      "vsResult"
    );


  function update() {

    incoming.setAttribute(
      "opacity",
      whiteVisible ? "1" : "0"
    );

    spectrum.setAttribute(
      "opacity",
      spectrumVisible ? "1" : "0"
    );

    labels.setAttribute(
      "opacity",
      labelsVisible ? "1" : "0"
    );
  }


  document
    .getElementById(
      "vsWhite"
    )
    .onclick =
    function () {

      whiteVisible = true;

      result.innerHTML = `

        ✨
        <strong>
          White light is traveling toward the prism.
        </strong>

        It may look white,
        but it contains many visible colors.

      `;

      update();
    };


  document
    .getElementById(
      "vsSplit"
    )
    .onclick =
    function () {

      whiteVisible = true;
      spectrumVisible = true;

      result.innerHTML = `

        🌈
        <strong>
          Spectrum revealed!
        </strong>

        The prism separated the white light
        into visible colors.

        The prism did not create the colors.

      `;

      update();
    };


  document
    .getElementById(
      "vsLabels"
    )
    .onclick =
    function () {

      whiteVisible = true;
      spectrumVisible = true;

      labelsVisible =
        !labelsVisible;

      this.textContent =
        labelsVisible
          ? "🏷 Hide Color Labels"
          : "🏷 Show Color Labels";

      update();
    };


  document
    .getElementById(
      "vsReset"
    )
    .onclick =
    function () {

      whiteVisible = false;
      spectrumVisible = false;
      labelsVisible = false;

      document
        .getElementById(
          "vsLabels"
        )
        .textContent =
        "🏷 Show Color Labels";

      result.textContent =
        "Begin by showing the white light.";

      update();
    };


  /* ROYGBIV challenge */

  const correct = [
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Indigo",
    "Violet"
  ];


  let chosen = [];


  const slots =
    Array.from(
      document.querySelectorAll(
        "#vsSequence div"
      )
    );


  const colorButtons =
    Array.from(
      document.querySelectorAll(
        ".vs-color-buttons button"
      )
    );


  function drawSequence() {

    slots.forEach(
      function (slot, index) {

        slot.textContent =
          chosen[index]
          ||
          String(index + 1);
      }
    );
  }


  colorButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          if (
            chosen.length >= 7
          ) {
            return;
          }


          const color =
            button.dataset.color;


          if (
            chosen.includes(
              color
            )
          ) {
            return;
          }


          chosen.push(
            color
          );


          button.disabled =
            true;


          drawSequence();
        };
    }
  );


  document
    .getElementById(
      "vsClear"
    )
    .onclick =
    function () {

      chosen = [];


      colorButtons.forEach(
        function (button) {

          button.disabled =
            false;
        }
      );


      document
        .getElementById(
          "vsChallengeFeedback"
        )
        .textContent =
        "";


      drawSequence();
    };


  document
    .getElementById(
      "vsCheck"
    )
    .onclick =
    function () {

      const feedback =
        document.getElementById(
          "vsChallengeFeedback"
        );


      if (
        chosen.length !== 7
      ) {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Place all seven colors first.";

        return;
      }


      const correctOrder =
        correct.every(
          function (color, index) {

            return (
              chosen[index] ===
              color
            );
          }
        );


      if (correctOrder) {

        feedback.style.color =
          "#087a35";

        feedback.textContent =
          "🌈 Mission accomplished! Red → Orange → Yellow → Green → Blue → Indigo → Violet.";

      } else {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Not yet. Remember the code: ROYGBIV. Clear the sequence and try again.";
      }
    };


  update();
  drawSequence();

})();
