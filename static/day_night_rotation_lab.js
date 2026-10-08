(function () {
  "use strict";


  let mission1Complete = false;
  let mission2Complete = false;
  let mission3Complete = false;


  function updateMaster() {

    document.getElementById(
      "dnMission1Status"
    ).textContent =
      mission1Complete
        ? "✅"
        : "⬜";


    document.getElementById(
      "dnMission2Status"
    ).textContent =
      mission2Complete
        ? "✅"
        : "⬜";


    document.getElementById(
      "dnMission3Status"
    ).textContent =
      mission3Complete
        ? "✅"
        : "⬜";


    const message =
      document.getElementById(
        "dnMasterMessage"
      );


    if (
      mission1Complete &&
      mission2Complete &&
      mission3Complete
    ) {

      message.innerHTML = `

        🏆
        <strong>
          DAY & NIGHT MISSION COMPLETE!
        </strong>

        <br><br>

        You used Earth's rotation
        to explain the repeating pattern
        of day and night.

        <br><br>

        <strong>
          Day & Night Specialist status earned.
        </strong>

      `;

    } else {

      message.textContent =
        "Complete all three missions to become a Day & Night Specialist.";
    }
  }


  /* ========================================================
     MISSION 1
     ======================================================== */

  let selectedSide = null;

  const left =
    document.getElementById(
      "dnLeftSide"
    );

  const right =
    document.getElementById(
      "dnRightSide"
    );


  function selectSide(button) {

    left.classList.remove(
      "selected"
    );

    right.classList.remove(
      "selected"
    );

    button.classList.add(
      "selected"
    );

    selectedSide =
      button.dataset.side;
  }


  left.onclick =
    function () {

      selectSide(left);
    };


  right.onclick =
    function () {

      selectSide(right);
    };


  document.getElementById(
    "dnCheckSide"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "dnSideFeedback"
        );


      if (!selectedSide) {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Choose Side A or Side B first.";

        return;
      }


      if (
        selectedSide === "left"
      ) {

        mission1Complete = true;

        feedback.style.color =
          "#087a35";

        feedback.innerHTML = `

          ✅
          <strong>
            Correct!
          </strong>

          Side A faces the Sun
          and receives direct sunlight.

          That side experiences
          <strong>
            DAYTIME.
          </strong>

        `;

      } else {

        mission1Complete = false;

        feedback.style.color =
          "#b00020";

        feedback.innerHTML = `

          🔍
          Try again.

          Follow the yellow light rays
          from the Sun.

        `;
      }


      updateMaster();
    };


  /* ========================================================
     MISSION 2
     ======================================================== */


  const marker =
    document.getElementById(
      "dnLocationMarker"
    );


  const hoursText =
    document.getElementById(
      "dnHours"
    );


  const stateText =
    document.getElementById(
      "dnState"
    );


  const feedback =
    document.getElementById(
      "dnCycleFeedback"
    );


  const timeButtons =
    Array.from(
      document.querySelectorAll(
        ".dn-time-controls button[data-hour]"
      )
    );


  let currentHour = 0;
  let playTimer = null;
  let visited = new Set([0]);


  const positions = {

    0: {
      x: 510,
      y: 285,
      state: "DAY — Noon",
      message:
        "Mission Control faces the Sun and receives direct sunlight."
    },

    6: {
      x: 650,
      y: 350,
      state: "SUNSET",
      message:
        "Mission Control is rotating out of the illuminated half and into darkness."
    },

    12: {
      x: 790,
      y: 285,
      state: "NIGHT — Midnight",
      message:
        "Mission Control faces away from the Sun and is on the dark half of Earth."
    },

    18: {
      x: 650,
      y: 220,
      state: "SUNRISE",
      message:
        "Mission Control is rotating out of darkness and back into sunlight."
    },

    24: {
      x: 510,
      y: 285,
      state: "DAY — Noon Again",
      message:
        "Earth completed one full rotation. Mission Control is back on the illuminated side."
    }

  };


  function setHour(hour) {

    currentHour = hour;

    const info =
      positions[hour];


    marker.setAttribute(
      "transform",
      "translate("
      +
      info.x
      +
      " "
      +
      info.y
      +
      ")"
    );


    hoursText.textContent =
      hour +
      (
        hour === 1
          ? " hour"
          : " hours"
      );


    stateText.textContent =
      info.state;


    feedback.innerHTML = `

      <strong>
        ${info.state}
      </strong>

      <br><br>

      ${info.message}

    `;


    timeButtons.forEach(
      function (button) {

        button.classList.toggle(
          "selected",
          Number(
            button.dataset.hour
          ) === hour
        );
      }
    );


    visited.add(hour);


    if (
      visited.has(0) &&
      visited.has(6) &&
      visited.has(12) &&
      visited.has(18) &&
      visited.has(24)
    ) {

      mission2Complete = true;

      feedback.innerHTML += `

        <br><br>

        ✅
        <strong>
          Full 24-hour pattern observed:
        </strong>

        Day → Sunset → Night → Sunrise → Day

      `;
    }


    updateMaster();
  }


  timeButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          stopPlayback();

          setHour(
            Number(
              button.dataset.hour
            )
          );
        };
    }
  );


  function stopPlayback() {

    if (playTimer) {

      clearInterval(
        playTimer
      );

      playTimer = null;


      document.getElementById(
        "dnPlayDay"
      ).textContent =
        "▶ PLAY FULL 24-HOUR ROTATION";
    }
  }


  document.getElementById(
    "dnPlayDay"
  ).onclick =
    function () {

      if (playTimer) {

        stopPlayback();

        return;
      }


      const sequence =
        [0, 6, 12, 18, 24];


      let sequenceIndex = 0;


      visited =
        new Set();


      document.getElementById(
        "dnPlayDay"
      ).textContent =
        "⏸ PAUSE ROTATION";


      setHour(
        sequence[
          sequenceIndex
        ]
      );


      playTimer =
        setInterval(
          function () {

            sequenceIndex += 1;


            if (
              sequenceIndex >=
              sequence.length
            ) {

              stopPlayback();

              return;
            }


            setHour(
              sequence[
                sequenceIndex
              ]
            );

          },
          1500
        );
    };


  document.getElementById(
    "dnResetDay"
  ).onclick =
    function () {

      stopPlayback();

      visited =
        new Set([0]);

      mission2Complete =
        false;

      setHour(0);
    };


  /* ========================================================
     MISSION 3
     ======================================================== */


  const explainQuestions = [

    {
      question:
        "One side of Earth is illuminated while the opposite side is dark. What causes a location to move from one side to the other?",

      choices: [
        "The Sun circles Earth every 24 hours.",
        "Earth rotates on its axis.",
        "Earth stops moving at night.",
        "The Moon blocks sunlight every night."
      ],

      answer: 1,

      explanation:
        "Earth's rotation moves locations into and out of sunlight."
    },

    {
      question:
        "Mission Control is on the side of Earth facing away from the Sun. What will Mission Control experience?",

      choices: [
        "Daytime",
        "A lunar eclipse",
        "Nighttime",
        "A full Moon"
      ],

      answer: 2,

      explanation:
        "The side facing away from the Sun experiences nighttime."
    },

    {
      question:
        "Mission Control is rotating from darkness into the illuminated half of Earth. What transition is occurring?",

      choices: [
        "Sunrise",
        "Sunset",
        "Midnight",
        "Revolution"
      ],

      answer: 0,

      explanation:
        "Moving from darkness into sunlight is sunrise."
    },

    {
      question:
        "Which observation best supports the idea that Earth's rotation causes the repeating day/night cycle?",

      choices: [
        "The Sun disappeared from the model.",
        "The Moon moved in front of Earth.",
        "The flashlight moved around the globe.",
        "The Sun stayed fixed while the location repeatedly moved through light and darkness."
      ],

      answer: 3,

      explanation:
        "The Sun stayed fixed while Earth's rotation repeatedly moved the location through light and darkness."
    }

  ];


  let explainIndex = 0;
  let explainScore = 0;
  let explainChoice = null;
  let explainAnswered = false;


  const explainQuestion =
    document.getElementById(
      "dnExplainQuestion"
    );


  const explainChoices =
    document.getElementById(
      "dnExplainChoices"
    );


  const explainFeedback =
    document.getElementById(
      "dnExplainFeedback"
    );


  const nextExplain =
    document.getElementById(
      "dnNextExplain"
    );


  function drawExplain() {

    explainChoice = null;
    explainAnswered = false;

    const item =
      explainQuestions[
        explainIndex
      ];


    explainQuestion.innerHTML = `

      <strong>
        Evidence Challenge
        ${explainIndex + 1}
        of
        ${explainQuestions.length}
      </strong>

      <br><br>

      ${item.question}

    `;


    explainChoices.innerHTML =
      "";


    item.choices.forEach(
      function (choice, index) {

        const button =
          document.createElement(
            "button"
          );


        button.type =
          "button";


        button.className =
          "dn-explain-choice";


        button.textContent =
          String.fromCharCode(
            65 + index
          )
          +
          ". "
          +
          choice;


        button.onclick =
          function () {

            if (
              explainAnswered
            ) {
              return;
            }


            explainChoices
              .querySelectorAll(
                ".dn-explain-choice"
              )
              .forEach(
                function (other) {

                  other.classList.remove(
                    "selected"
                  );
                }
              );


            button.classList.add(
              "selected"
            );


            explainChoice =
              index;
          };


        explainChoices.appendChild(
          button
        );
      }
    );


    explainFeedback.textContent =
      "Choose the best explanation.";


    nextExplain.disabled =
      true;


    nextExplain.textContent =
      explainIndex ===
      explainQuestions.length - 1
        ?
        "FINISH MISSION →"
        :
        "NEXT CHALLENGE →";
  }


  document.getElementById(
    "dnCheckExplain"
  ).onclick =
    function () {

      if (
        explainChoice === null
      ) {

        explainFeedback.style.color =
          "#b00020";


        explainFeedback.textContent =
          "Choose an answer before checking.";

        return;
      }


      if (
        explainAnswered
      ) {
        return;
      }


      explainAnswered =
        true;


      const item =
        explainQuestions[
          explainIndex
        ];


      if (
        explainChoice ===
        item.answer
      ) {

        explainScore += 1;


        explainFeedback.style.color =
          "#087a35";


        explainFeedback.innerHTML = `

          ✅
          <strong>
            Correct!
          </strong>

          ${item.explanation}

        `;

      } else {

        explainFeedback.style.color =
          "#b00020";


        explainFeedback.innerHTML = `

          🔍
          <strong>
            Review the evidence.
          </strong>

          ${item.explanation}

        `;
      }


      document.getElementById(
        "dnExplainScore"
      ).textContent =
        explainScore
        +
        " / "
        +
        explainQuestions.length;


      nextExplain.disabled =
        false;
    };


  nextExplain.onclick =
    function () {

      if (
        !explainAnswered
      ) {
        return;
      }


      if (
        explainIndex <
        explainQuestions.length - 1
      ) {

        explainIndex += 1;

        drawExplain();

        return;
      }


      mission3Complete =
        explainScore >= 3;


      if (
        mission3Complete
      ) {

        explainFeedback.style.color =
          "#087a35";


        explainFeedback.innerHTML = `

          🏆
          <strong>
            Explanation Mission Complete!
          </strong>

          <br><br>

          You correctly explained
          ${explainScore} of 4
          day/night evidence challenges.

        `;

      } else {

        explainFeedback.style.color =
          "#b00020";


        explainFeedback.innerHTML = `

          You correctly answered
          ${explainScore} of 4.

          <br><br>

          Review the model:

          <strong>
            the Sun stayed fixed
            while Earth rotated.
          </strong>

        `;
      }


      nextExplain.disabled =
        true;


      updateMaster();
    };


  setHour(0);

  drawExplain();

  updateMaster();

})();
