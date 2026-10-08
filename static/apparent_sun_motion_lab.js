(function () {
  "use strict";


  let mission1Complete = false;
  let mission2Complete = false;
  let mission3Complete = false;


  function updateMaster() {

    document.getElementById(
      "smMission1Status"
    ).textContent =
      mission1Complete
        ? "✅"
        : "⬜";


    document.getElementById(
      "smMission2Status"
    ).textContent =
      mission2Complete
        ? "✅"
        : "⬜";


    document.getElementById(
      "smMission3Status"
    ).textContent =
      mission3Complete
        ? "✅"
        : "⬜";


    const message =
      document.getElementById(
        "smMasterMessage"
      );


    if (
      mission1Complete &&
      mission2Complete &&
      mission3Complete
    ) {

      message.innerHTML = `

        🏆
        <strong>
          SUN TRACKER MISSION COMPLETE!
        </strong>

        <br><br>

        You tracked apparent Sun motion,
        investigated changing shadows,
        and connected the pattern
        to Earth's rotation.

        <br><br>

        <strong>
          Sun Tracker Specialist status earned.
        </strong>

      `;

    } else {

      message.textContent =
        "Complete all three missions to become a Sun Tracker Specialist.";
    }
  }


  /* ========================================================
     MISSION 1
     ======================================================== */


  let selectedDirection = null;


  const directionButtons =
    Array.from(
      document.querySelectorAll(
        ".sm-direction-choices button"
      )
    );


  directionButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          directionButtons.forEach(
            function (item) {

              item.classList.remove(
                "selected"
              );
            }
          );


          button.classList.add(
            "selected"
          );


          selectedDirection =
            button.dataset.direction;
        };
    }
  );


  document.getElementById(
    "smCheckDirection"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "smDirectionFeedback"
        );


      if (!selectedDirection) {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Choose a direction first.";

        return;
      }


      if (
        selectedDirection ===
        "east-west"
      ) {

        mission1Complete = true;

        feedback.style.color =
          "#087a35";

        feedback.innerHTML = `

          ✅
          <strong>
            Correct!
          </strong>

          From an observer's point of view,
          the Sun generally appears
          to move from east to west.

          <br><br>

          Earth is actually rotating
          west to east.

        `;

      } else {

        mission1Complete = false;

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Try again. Think: sunrise in the east and sunset in the west.";
      }


      updateMaster();
    };


  /* ========================================================
     MISSION 2
     ======================================================== */


  const sun =
    document.getElementById(
      "smSun"
    );


  const shadow =
    document.getElementById(
      "smShadow"
    );


  const status =
    document.getElementById(
      "smSkyStatus"
    );


  const sunPositionText =
    document.getElementById(
      "smSunPosition"
    );


  const shadowStatusText =
    document.getElementById(
      "smShadowStatus"
    );


  const trackerFeedback =
    document.getElementById(
      "smTrackerFeedback"
    );


  const positionButtons =
    Array.from(
      document.querySelectorAll(
        ".sm-position-buttons button[data-position]"
      )
    );


  const positions = {

    sunrise: {
      x: 120,
      y: 415,
      shadowX: 820,
      label:
        "SUNRISE — low Sun, long shadow",
      sunText:
        "Low in the East",
      shadowText:
        "Long — extends West",
      explanation:
        "At sunrise, the Sun appears low in the east. The shadow is long and extends generally away from the Sun."
    },

    morning: {
      x: 315,
      y: 225,
      shadowX: 665,
      label:
        "MORNING — Sun higher, shadow shorter",
      sunText:
        "Rising higher",
      shadowText:
        "Medium — extends West",
      explanation:
        "During the morning, the Sun appears higher and the shadow becomes shorter."
    },

    noon: {
      x: 500,
      y: 95,
      shadowX: 530,
      label:
        "SOLAR NOON — highest Sun, shortest shadow",
      sunText:
        "Highest for the day",
      shadowText:
        "Shortest",
      explanation:
        "Around solar noon, the Sun reaches its highest apparent position for the day. The shadow is shortest in this model."
    },

    afternoon: {
      x: 685,
      y: 225,
      shadowX: 335,
      label:
        "AFTERNOON — Sun lower, shadow lengthens",
      sunText:
        "Moving lower",
      shadowText:
        "Medium — extends East",
      explanation:
        "During the afternoon, the Sun appears lower in the western sky and the shadow lengthens in the opposite direction."
    },

    sunset: {
      x: 880,
      y: 415,
      shadowX: 180,
      label:
        "SUNSET — low Sun, long shadow",
      sunText:
        "Low in the West",
      shadowText:
        "Long — extends East",
      explanation:
        "At sunset, the Sun appears low in the west. The shadow is long and extends generally away from the Sun."
    }

  };


  const sequence =
    [
      "sunrise",
      "morning",
      "noon",
      "afternoon",
      "sunset"
    ];


  let visited =
    new Set();


  let playTimer = null;


  function setPosition(name) {

    const info =
      positions[name];


    sun.setAttribute(
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


    shadow.setAttribute(
      "x2",
      info.shadowX
    );


    status.textContent =
      info.label;


    sunPositionText.textContent =
      info.sunText;


    shadowStatusText.textContent =
      info.shadowText;


    trackerFeedback.innerHTML = `

      <strong>
        ${info.label}
      </strong>

      <br><br>

      ${info.explanation}

    `;


    positionButtons.forEach(
      function (button) {

        button.classList.toggle(
          "selected",
          button.dataset.position ===
          name
        );
      }
    );


    visited.add(
      name
    );


    if (
      sequence.every(
        function (item) {

          return visited.has(item);
        }
      )
    ) {

      mission2Complete = true;


      trackerFeedback.innerHTML += `

        <br><br>

        ✅
        <strong>
          Full sky pattern observed!
        </strong>

        <br><br>

        Low Sun → longer shadow

        <br>

        Higher Sun → shorter shadow

        <br>

        Lower Sun → longer shadow

      `;
    }


    updateMaster();
  }


  function stopPlayback() {

    if (playTimer) {

      clearInterval(
        playTimer
      );

      playTimer = null;


      document.getElementById(
        "smPlaySky"
      ).textContent =
        "▶ PLAY APPARENT SUN PATH";
    }
  }


  positionButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          stopPlayback();

          setPosition(
            button.dataset.position
          );
        };
    }
  );


  document.getElementById(
    "smPlaySky"
  ).onclick =
    function () {

      if (playTimer) {

        stopPlayback();

        return;
      }


      visited =
        new Set();


      let i = 0;


      document.getElementById(
        "smPlaySky"
      ).textContent =
        "⏸ PAUSE SUN PATH";


      setPosition(
        sequence[i]
      );


      playTimer =
        setInterval(
          function () {

            i += 1;


            if (
              i >=
              sequence.length
            ) {

              stopPlayback();

              return;
            }


            setPosition(
              sequence[i]
            );

          },
          1500
        );
    };


  document.getElementById(
    "smResetSky"
  ).onclick =
    function () {

      stopPlayback();

      visited =
        new Set();

      mission2Complete =
        false;

      setPosition(
        "sunrise"
      );
    };


  /* ========================================================
     MISSION 3
     ======================================================== */


  const questions = [

    {
      question:
        "The Sun appears to rise in the east and set in the west. What actually causes this daily apparent motion?",

      choices: [
        "The Sun revolves around Earth once every day.",
        "Earth rotates on its axis.",
        "The Moon pushes sunlight across Earth.",
        "Earth stops rotating at night."
      ],

      answer: 1,

      explanation:
        "Earth's rotation causes the Sun's apparent daily movement."
    },

    {
      question:
        "A shadow is much shorter near solar noon than early in the morning. What evidence best explains the change?",

      choices: [
        "The object became shorter.",
        "The Sun appeared higher in the sky.",
        "The Sun stopped producing light.",
        "Earth moved closer to the Sun during lunch."
      ],

      answer: 1,

      explanation:
        "When the Sun appears higher in the sky, shadows are generally shorter."
    },

    {
      question:
        "In the afternoon, the Sun appears in the western sky. Which direction should a shadow extend generally?",

      choices: [
        "Toward the Sun",
        "Away from the Sun",
        "Straight upward",
        "The shadow cannot form"
      ],

      answer: 1,

      explanation:
        "A shadow extends generally away from the light source."
    },

    {
      question:
        "Which statement correctly compares what we observe with what is actually happening?",

      choices: [
        "We see Earth stop while the Sun circles us.",
        "We see the Sun appear to move while Earth is actually rotating.",
        "We see the Moon rotate Earth.",
        "We see shadows create sunlight."
      ],

      answer: 1,

      explanation:
        "The Sun's motion across our daily sky is apparent motion caused by Earth's rotation."
    }

  ];


  let questionIndex = 0;
  let score = 0;
  let selectedChoice = null;
  let answered = false;


  const questionBox =
    document.getElementById(
      "smExplainQuestion"
    );


  const choiceBox =
    document.getElementById(
      "smExplainChoices"
    );


  const explainFeedback =
    document.getElementById(
      "smExplainFeedback"
    );


  const nextButton =
    document.getElementById(
      "smNextExplain"
    );


  function drawQuestion() {

    selectedChoice = null;
    answered = false;


    const item =
      questions[
        questionIndex
      ];


    questionBox.innerHTML = `

      <strong>
        Evidence Challenge
        ${questionIndex + 1}
        of
        ${questions.length}
      </strong>

      <br><br>

      ${item.question}

    `;


    choiceBox.innerHTML =
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
          "sm-explain-choice";

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

            if (answered) {
              return;
            }


            choiceBox
              .querySelectorAll(
                ".sm-explain-choice"
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


            selectedChoice =
              index;
          };


        choiceBox.appendChild(
          button
        );
      }
    );


    explainFeedback.textContent =
      "Choose the best explanation.";


    nextButton.disabled =
      true;


    nextButton.textContent =
      questionIndex ===
      questions.length - 1
        ?
        "FINISH MISSION →"
        :
        "NEXT CHALLENGE →";
  }


  document.getElementById(
    "smCheckExplain"
  ).onclick =
    function () {

      if (
        selectedChoice === null
      ) {

        explainFeedback.style.color =
          "#b00020";

        explainFeedback.textContent =
          "Choose an answer before checking.";

        return;
      }


      if (answered) {
        return;
      }


      answered =
        true;


      const item =
        questions[
          questionIndex
        ];


      if (
        selectedChoice ===
        item.answer
      ) {

        score += 1;

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
        "smExplainScore"
      ).textContent =
        score
        +
        " / "
        +
        questions.length;


      nextButton.disabled =
        false;
    };


  nextButton.onclick =
    function () {

      if (!answered) {
        return;
      }


      if (
        questionIndex <
        questions.length - 1
      ) {

        questionIndex += 1;

        drawQuestion();

        return;
      }


      mission3Complete =
        score >= 3;


      if (
        mission3Complete
      ) {

        explainFeedback.style.color =
          "#087a35";

        explainFeedback.innerHTML = `

          🏆
          <strong>
            Evidence Mission Complete!
          </strong>

          <br><br>

          You correctly answered
          ${score} of 4 challenges.

          <br><br>

          Earth's rotation explains
          the Sun's apparent daily motion.

        `;

      } else {

        explainFeedback.style.color =
          "#b00020";

        explainFeedback.innerHTML = `

          You correctly answered
          ${score} of 4.

          <br><br>

          Review the key idea:

          <strong>
            Earth rotates while the Sun appears to move.
          </strong>

        `;
      }


      nextButton.disabled =
        true;


      updateMaster();
    };


  setPosition(
    "sunrise"
  );

  drawQuestion();

  updateMaster();

})();
