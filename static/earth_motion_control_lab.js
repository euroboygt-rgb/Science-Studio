(function () {
  "use strict";


  let axisComplete = false;
  let rotationComplete = false;
  let compareComplete = false;


  function updateMaster() {

    document
      .getElementById(
        "emAxisStatus"
      )
      .textContent =
      axisComplete
        ? "✅"
        : "⬜";


    document
      .getElementById(
        "emRotationStatus"
      )
      .textContent =
      rotationComplete
        ? "✅"
        : "⬜";


    document
      .getElementById(
        "emCompareStatus"
      )
      .textContent =
      compareComplete
        ? "✅"
        : "⬜";


    const message =
      document.getElementById(
        "emMasterMessage"
      );


    if (
      axisComplete
      &&
      rotationComplete
      &&
      compareComplete
    ) {

      message.innerHTML = `

        🏆
        <strong>
          EARTH MOTION MISSION COMPLETE!
        </strong>

        <br><br>

        You identified Earth's axis,
        completed one full rotation,
        and correctly distinguished
        rotation from revolution.

        <br><br>

        <strong>
          Earth Motion Specialist status earned.
        </strong>

      `;

    } else {

      message.textContent =
        "Complete all three missions to become an Earth Motion Specialist.";
    }
  }


  /* ========================================================
     MISSION 1 — AXIS
     ======================================================== */


  let selectedAxis = null;


  const axisChoices =
    Array.from(
      document.querySelectorAll(
        ".em-axis-choice"
      )
    );


  axisChoices.forEach(
    function (button) {

      button.onclick =
        function () {

          axisChoices.forEach(
            function (item) {

              item.classList.remove(
                "selected"
              );
            }
          );


          button.classList.add(
            "selected"
          );


          selectedAxis =
            button.dataset.axis;
        };
    }
  );


  document
    .getElementById(
      "emCheckAxis"
    )
    .onclick =
    function () {

      const feedback =
        document.getElementById(
          "emAxisFeedback"
        );


      if (!selectedAxis) {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Select one of the three possible axis lines first.";

        return;
      }


      if (
        selectedAxis ===
        "tilted"
      ) {

        axisComplete = true;


        document
          .getElementById(
            "emAxisCorrect"
          )
          .setAttribute(
            "opacity",
            "1"
          );


        document
          .getElementById(
            "emAxisWrongHorizontal"
          )
          .setAttribute(
            "opacity",
            ".08"
          );


        document
          .getElementById(
            "emAxisWrongVertical"
          )
          .setAttribute(
            "opacity",
            ".08"
          );


        feedback.style.color =
          "#087a35";


        feedback.innerHTML = `

          ✅
          <strong>
            Correct!
          </strong>

          Earth's axis is an imaginary,
          tilted line passing through Earth
          from the North Pole
          to the South Pole.

        `;

      } else {

        axisComplete = false;


        feedback.style.color =
          "#b00020";


        feedback.innerHTML = `

          🔍
          <strong>
            Try again.
          </strong>

          Earth's axis passes through
          the North Pole and South Pole
          and is tilted.

        `;
      }


      updateMaster();
    };


  /* ========================================================
     MISSION 2 — ROTATION
     ======================================================== */


  let degrees = 0;


  const earth =
    document.getElementById(
      "emEarthSpin"
    );


  function updateRotation() {

    const displayDegrees =
      degrees % 360;


    const shownDegrees =
      (
        degrees > 0
        &&
        displayDegrees === 0
      )
        ? 360
        : displayDegrees;


    const hours =
      Math.round(
        shownDegrees / 15
      );


    earth.style.transform =
      "rotate("
      +
      degrees
      +
      "deg)";


    document
      .getElementById(
        "emDegrees"
      )
      .textContent =
      shownDegrees
      +
      "°";


    document
      .getElementById(
        "emHours"
      )
      .textContent =
      hours
      +
      (
        hours === 1
          ? " hour"
          : " hours"
      );


    const feedback =
      document.getElementById(
        "emRotationFeedback"
      );


    if (
      shownDegrees === 360
    ) {

      rotationComplete = true;


      feedback.style.color =
        "#087a35";


      feedback.innerHTML = `

        ✅
        <strong>
          One Full Rotation Complete!
        </strong>

        <br><br>

        360° = approximately 24 hours.

        <br><br>

        Earth has returned
        to approximately the same orientation
        after one complete rotation.

      `;

    } else {

      feedback.style.color =
        "#111";


      feedback.innerHTML = `

        Earth has rotated

        <strong>
          ${shownDegrees}°
        </strong>

        which represents approximately

        <strong>
          ${hours} hours.
        </strong>

        <br><br>

        Keep rotating until Earth reaches 360°.

      `;
    }


    updateMaster();
  }


  document
    .querySelectorAll(
      ".em-rotation-buttons button[data-turn]"
    )
    .forEach(
      function (button) {

        button.onclick =
          function () {

            if (
              rotationComplete
            ) {
              return;
            }


            degrees +=
              Number(
                button.dataset.turn
              );


            if (
              degrees > 360
            ) {

              degrees = 360;
            }


            updateRotation();
          };
      }
    );


  document
    .getElementById(
      "emFullRotation"
    )
    .onclick =
    function () {

      degrees = 360;

      updateRotation();
    };


  document
    .getElementById(
      "emResetRotation"
    )
    .onclick =
    function () {

      degrees = 0;
      rotationComplete = false;


      earth.style.transition =
        "none";


      earth.style.transform =
        "rotate(0deg)";


      void earth.offsetWidth;


      earth.style.transition =
        "transform .55s ease";


      document
        .getElementById(
          "emDegrees"
        )
        .textContent =
        "0°";


      document
        .getElementById(
          "emHours"
        )
        .textContent =
        "0 hours";


      document
        .getElementById(
          "emRotationFeedback"
        )
        .textContent =
        "Rotate Earth until you complete one full 360° rotation.";


      updateMaster();
    };


  /* ========================================================
     MISSION 3 — COMPARE
     ======================================================== */


  const compareQuestions = [

    {
      text:
        "Earth spins around its imaginary axis.",
      answer:
        "rotation",
      explanation:
        "Spinning around an axis is rotation."
    },

    {
      text:
        "Earth travels around the Sun.",
      answer:
        "revolution",
      explanation:
        "Traveling around the Sun is revolution."
    },

    {
      text:
        "A globe remains in one place while a student turns it one complete time.",
      answer:
        "rotation",
      explanation:
        "The globe is spinning in place around its axis."
    },

    {
      text:
        "A model Earth moves along an orbital path around a model Sun.",
      answer:
        "revolution",
      explanation:
        "The model is traveling around another object."
    }

  ];


  let compareIndex = 0;
  let compareScore = 0;
  let compareChoice = null;
  let compareAnswered = false;


  const question =
    document.getElementById(
      "emCompareQuestion"
    );


  const rotationButton =
    document.getElementById(
      "emChooseRotation"
    );


  const revolutionButton =
    document.getElementById(
      "emChooseRevolution"
    );


  const nextButton =
    document.getElementById(
      "emNextCompare"
    );


  function drawCompareQuestion() {

    compareChoice = null;
    compareAnswered = false;


    rotationButton
      .classList.remove(
        "selected"
      );


    revolutionButton
      .classList.remove(
        "selected"
      );


    question.innerHTML = `

      <strong>
        Motion ${compareIndex + 1} of ${compareQuestions.length}
      </strong>

      <br><br>

      ${compareQuestions[compareIndex].text}

    `;


    document
      .getElementById(
        "emCompareFeedback"
      )
      .textContent =
      "Choose Rotation or Revolution.";


    nextButton.disabled =
      true;


    nextButton.textContent =
      compareIndex ===
      compareQuestions.length - 1
        ?
        "FINISH MOTION MISSION →"
        :
        "NEXT MOTION →";
  }


  rotationButton.onclick =
    function () {

      if (
        compareAnswered
      ) {
        return;
      }


      compareChoice =
        "rotation";


      rotationButton
        .classList.add(
          "selected"
        );


      revolutionButton
        .classList.remove(
          "selected"
        );
    };


  revolutionButton.onclick =
    function () {

      if (
        compareAnswered
      ) {
        return;
      }


      compareChoice =
        "revolution";


      revolutionButton
        .classList.add(
          "selected"
        );


      rotationButton
        .classList.remove(
          "selected"
        );
    };


  document
    .getElementById(
      "emCheckCompare"
    )
    .onclick =
    function () {

      const feedback =
        document.getElementById(
          "emCompareFeedback"
        );


      if (
        !compareChoice
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Choose Rotation or Revolution first.";

        return;
      }


      if (
        compareAnswered
      ) {
        return;
      }


      compareAnswered = true;


      const current =
        compareQuestions[
          compareIndex
        ];


      if (
        compareChoice ===
        current.answer
      ) {

        compareScore += 1;


        feedback.style.color =
          "#087a35";


        feedback.innerHTML = `

          ✅
          <strong>
            Correct!
          </strong>

          ${current.explanation}

        `;

      } else {

        feedback.style.color =
          "#b00020";


        feedback.innerHTML = `

          🔍
          <strong>
            Review the motion.
          </strong>

          ${current.explanation}

        `;
      }


      document
        .getElementById(
          "emCompareScore"
        )
        .textContent =
        compareScore
        +
        " / "
        +
        compareQuestions.length;


      nextButton.disabled =
        false;
    };


  nextButton.onclick =
    function () {

      if (
        !compareAnswered
      ) {
        return;
      }


      if (
        compareIndex <
        compareQuestions.length - 1
      ) {

        compareIndex += 1;

        drawCompareQuestion();

        return;
      }


      compareComplete =
        compareScore >= 3;


      if (
        compareComplete
      ) {

        document
          .getElementById(
            "emCompareFeedback"
          )
          .innerHTML = `

            🏆
            <strong>
              Motion Mission Complete!
            </strong>

            <br><br>

            You correctly identified
            ${compareScore} of 4 motions.

            <br><br>

            Rotation = spin around an axis.

            <br>

            Revolution = travel around another object.

          `;

      } else {

        document
          .getElementById(
            "emCompareFeedback"
          )
          .innerHTML = `

            You correctly identified
            ${compareScore} of 4 motions.

            <br><br>

            Review:

            <strong>
              Rotation = spin.
            </strong>

            <br>

            <strong>
              Revolution = travel around.
            </strong>

          `;
      }


      nextButton.disabled =
        true;


      updateMaster();
    };


  drawCompareQuestion();

  updateRotation();

  updateMaster();

})();
