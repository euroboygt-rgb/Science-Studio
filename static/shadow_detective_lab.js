(function () {
  "use strict";


  let mission1Complete = false;
  let mission2Complete = false;
  let mission3Complete = false;


  function updateMaster() {

    document.getElementById(
      "sdMission1Status"
    ).textContent =
      mission1Complete
        ? "✅"
        : "⬜";


    document.getElementById(
      "sdMission2Status"
    ).textContent =
      mission2Complete
        ? "✅"
        : "⬜";


    document.getElementById(
      "sdMission3Status"
    ).textContent =
      mission3Complete
        ? "✅"
        : "⬜";


    const message =
      document.getElementById(
        "sdMasterMessage"
      );


    if (
      mission1Complete &&
      mission2Complete &&
      mission3Complete
    ) {

      message.innerHTML = `

        🏆
        <strong>
          CASE CLOSED!
        </strong>

        <br><br>

        You used shadow direction,
        shadow length,
        and scientific reasoning
        to infer the Sun's apparent position.

        <br><br>

        <strong>
          MASTER SHADOW DETECTIVE STATUS EARNED.
        </strong>

      `;

    } else {

      message.textContent =
        "Complete all three missions to earn Master Shadow Detective status.";
    }
  }


  /* ========================================================
     MISSION 1
     ======================================================== */


  let ruleChoice = null;


  const ruleButtons =
    Array.from(
      document.querySelectorAll(
        ".sd-rule-choices button"
      )
    );


  ruleButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          ruleButtons.forEach(
            function (item) {

              item.classList.remove(
                "selected"
              );
            }
          );


          button.classList.add(
            "selected"
          );


          ruleChoice =
            button.dataset.rule;
        };
    }
  );


  document.getElementById(
    "sdCheckRule"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "sdRuleFeedback"
        );


      if (!ruleChoice) {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Make a prediction first.";

        return;
      }


      if (
        ruleChoice === "west"
      ) {

        mission1Complete = true;

        feedback.style.color =
          "#087a35";

        feedback.innerHTML = `

          ✅
          <strong>
            Rule decoded!
          </strong>

          <br><br>

          The Sun is low in the east,
          so the shadow extends generally
          in the opposite direction:
          toward the west.

        `;

      } else {

        mission1Complete = false;

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Try again. A shadow extends generally away from its light source.";
      }


      updateMaster();
    };


  /* ========================================================
     MISSION 2
     ======================================================== */


  const cases = [

    {
      number:
        "CASE FILE 1",

      title:
        "The Long West Shadow",

      clue:
        "LONG SHADOW TOWARD WEST",

      shadowX:
        180,

      shadowY:
        410,

      sun:
        "east",

      time:
        "morning",

      explanation:
        "The shadow extends west, so the Sun is likely toward the east. The long shadow suggests the Sun is relatively low, which matches morning."
    },

    {
      number:
        "CASE FILE 2",

      title:
        "The Tiny Shadow",

      clue:
        "VERY SHORT SHADOW",

      shadowX:
        540,

      shadowY:
        373,

      sun:
        "high",

      time:
        "noon",

      explanation:
        "The short shadow is evidence that the Sun appears relatively high in the sky. That best matches a time near solar noon."
    },

    {
      number:
        "CASE FILE 3",

      title:
        "The Long East Shadow",

      clue:
        "LONG SHADOW TOWARD EAST",

      shadowX:
        820,

      shadowY:
        410,

      sun:
        "west",

      time:
        "afternoon",

      explanation:
        "The shadow extends east, so the Sun is likely toward the west. The long shadow suggests a lower Sun, which matches late afternoon or evening."
    }

  ];


  let caseIndex = 0;
  let caseScore = 0;
  let selectedSun = null;
  let selectedTime = null;
  let caseAnswered = false;


  const caseNumber =
    document.getElementById(
      "sdCaseNumber"
    );

  const caseTitle =
    document.getElementById(
      "sdCaseTitle"
    );

  const sceneClue =
    document.getElementById(
      "sdSceneClue"
    );

  const mysteryShadow =
    document.getElementById(
      "sdMysteryShadow"
    );

  const caseFeedback =
    document.getElementById(
      "sdCaseFeedback"
    );

  const nextCase =
    document.getElementById(
      "sdNextCase"
    );


  const sunChoiceButtons =
    Array.from(
      document.querySelectorAll(
        "#sdSunChoices button"
      )
    );


  const timeChoiceButtons =
    Array.from(
      document.querySelectorAll(
        "#sdTimeChoices button"
      )
    );


  sunChoiceButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          if (caseAnswered) {
            return;
          }


          sunChoiceButtons.forEach(
            function (item) {

              item.classList.remove(
                "selected"
              );
            }
          );


          button.classList.add(
            "selected"
          );


          selectedSun =
            button.dataset.sun;
        };
    }
  );


  timeChoiceButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          if (caseAnswered) {
            return;
          }


          timeChoiceButtons.forEach(
            function (item) {

              item.classList.remove(
                "selected"
              );
            }
          );


          button.classList.add(
            "selected"
          );


          selectedTime =
            button.dataset.time;
        };
    }
  );


  function drawCase() {

    const item =
      cases[caseIndex];


    selectedSun = null;
    selectedTime = null;
    caseAnswered = false;


    caseNumber.textContent =
      item.number;

    caseTitle.textContent =
      item.title;

    sceneClue.textContent =
      item.clue;


    mysteryShadow.setAttribute(
      "x2",
      item.shadowX
    );

    mysteryShadow.setAttribute(
      "y2",
      item.shadowY
    );


    sunChoiceButtons.forEach(
      function (button) {

        button.classList.remove(
          "selected"
        );
      }
    );


    timeChoiceButtons.forEach(
      function (button) {

        button.classList.remove(
          "selected"
        );
      }
    );


    caseFeedback.style.color =
      "#111";

    caseFeedback.textContent =
      "Select both the hidden Sun position and likely part of the day.";


    nextCase.disabled =
      true;


    nextCase.textContent =
      caseIndex ===
      cases.length - 1
        ?
        "CLOSE CASE FILES →"
        :
        "NEXT CASE FILE →";
  }


  document.getElementById(
    "sdCheckCase"
  ).onclick =
    function () {

      if (
        !selectedSun ||
        !selectedTime
      ) {

        caseFeedback.style.color =
          "#b00020";

        caseFeedback.textContent =
          "Select BOTH the Sun position and the likely part of the day.";

        return;
      }


      if (caseAnswered) {
        return;
      }


      caseAnswered =
        true;


      const item =
        cases[caseIndex];


      const sunCorrect =
        selectedSun ===
        item.sun;


      const timeCorrect =
        selectedTime ===
        item.time;


      if (
        sunCorrect &&
        timeCorrect
      ) {

        caseScore += 1;

        caseFeedback.style.color =
          "#087a35";

        caseFeedback.innerHTML = `

          ✅
          <strong>
            CASE SOLVED!
          </strong>

          <br><br>

          ${item.explanation}

        `;

      } else {

        caseFeedback.style.color =
          "#b00020";

        caseFeedback.innerHTML = `

          🔍
          <strong>
            Evidence review:
          </strong>

          <br><br>

          ${item.explanation}

        `;
      }


      document.getElementById(
        "sdCaseScore"
      ).textContent =
        caseScore
        +
        " / "
        +
        cases.length;


      nextCase.disabled =
        false;
    };


  nextCase.onclick =
    function () {

      if (!caseAnswered) {
        return;
      }


      if (
        caseIndex <
        cases.length - 1
      ) {

        caseIndex += 1;

        drawCase();

        return;
      }


      mission2Complete =
        caseScore >= 2;


      if (
        mission2Complete
      ) {

        caseFeedback.style.color =
          "#087a35";

        caseFeedback.innerHTML = `

          🏆
          <strong>
            MYSTERY CASE FILES COMPLETE!
          </strong>

          <br><br>

          You solved
          ${caseScore} of 3 cases.

          <br><br>

          Direction + length
          gave you enough evidence
          to infer the hidden Sun.

        `;

      } else {

        caseFeedback.style.color =
          "#b00020";

        caseFeedback.innerHTML = `

          You solved
          ${caseScore} of 3 cases.

          <br><br>

          Review the two key clues:

          <strong>
            direction
          </strong>

          and

          <strong>
            length.
          </strong>

        `;
      }


      nextCase.disabled =
        true;


      updateMaster();
    };


  /* ========================================================
     MISSION 3
     ======================================================== */


  const evidenceQuestions = [

    {
      question:
        "A shadow points west. Which conclusion is best supported by the evidence?",

      choices: [
        "The Sun is likely toward the east.",
        "The Sun must be toward the west.",
        "Earth has stopped rotating.",
        "No light source is present."
      ],

      answer: 0,

      explanation:
        "A shadow extends generally away from its light source."
    },

    {
      question:
        "Two shadows are measured from the same object. One is very long and one is short. Which observation best explains the shorter shadow?",

      choices: [
        "The object shrank.",
        "The Sun appeared higher in the sky.",
        "Earth stopped rotating.",
        "The Sun produced less light."
      ],

      answer: 1,

      explanation:
        "A higher apparent Sun generally produces a shorter shadow."
    },

    {
      question:
        "Why do a morning shadow and an afternoon shadow often extend in different directions?",

      choices: [
        "The object turns itself around.",
        "The Sun's apparent position changes during the day.",
        "The Moon changes the shadow direction.",
        "Gravity pulls shadows in different directions."
      ],

      answer: 1,

      explanation:
        "Earth's rotation changes the Sun's apparent position, so the direction of the shadow changes."
    },

    {
      question:
        "Which evidence best connects changing shadows to Earth's rotation?",

      choices: [
        "Shadows stay exactly the same all day.",
        "The Sun disappears permanently at sunset.",
        "The apparent Sun position and shadows change in a repeating daily pattern.",
        "Every location on Earth has the same shadow at the same time."
      ],

      answer: 2,

      explanation:
        "The repeating daily pattern of apparent Sun position and shadows is consistent with Earth's rotation."
    }

  ];


  let evidenceIndex = 0;
  let evidenceScore = 0;
  let evidenceChoice = null;
  let evidenceAnswered = false;


  const evidenceQuestion =
    document.getElementById(
      "sdEvidenceQuestion"
    );

  const evidenceChoices =
    document.getElementById(
      "sdEvidenceChoices"
    );

  const evidenceFeedback =
    document.getElementById(
      "sdEvidenceFeedback"
    );

  const nextEvidence =
    document.getElementById(
      "sdNextEvidence"
    );


  function drawEvidence() {

    evidenceChoice = null;
    evidenceAnswered = false;


    const item =
      evidenceQuestions[
        evidenceIndex
      ];


    evidenceQuestion.innerHTML = `

      <strong>
        Evidence File
        ${evidenceIndex + 1}
        of
        ${evidenceQuestions.length}
      </strong>

      <br><br>

      ${item.question}

    `;


    evidenceChoices.innerHTML =
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
          "sd-evidence-choice";


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

            if (evidenceAnswered) {
              return;
            }


            evidenceChoices
              .querySelectorAll(
                ".sd-evidence-choice"
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


            evidenceChoice =
              index;
          };


        evidenceChoices.appendChild(
          button
        );
      }
    );


    evidenceFeedback.style.color =
      "#111";

    evidenceFeedback.textContent =
      "Select the best scientific conclusion.";


    nextEvidence.disabled =
      true;


    nextEvidence.textContent =
      evidenceIndex ===
      evidenceQuestions.length - 1
        ?
        "CLOSE FINAL CASE →"
        :
        "NEXT EVIDENCE FILE →";
  }


  document.getElementById(
    "sdCheckEvidence"
  ).onclick =
    function () {

      if (
        evidenceChoice === null
      ) {

        evidenceFeedback.style.color =
          "#b00020";

        evidenceFeedback.textContent =
          "Choose an answer before checking.";

        return;
      }


      if (evidenceAnswered) {
        return;
      }


      evidenceAnswered =
        true;


      const item =
        evidenceQuestions[
          evidenceIndex
        ];


      if (
        evidenceChoice ===
        item.answer
      ) {

        evidenceScore += 1;

        evidenceFeedback.style.color =
          "#087a35";

        evidenceFeedback.innerHTML = `

          ✅
          <strong>
            Correct!
          </strong>

          ${item.explanation}

        `;

      } else {

        evidenceFeedback.style.color =
          "#b00020";

        evidenceFeedback.innerHTML = `

          🔍
          <strong>
            Review the evidence.
          </strong>

          ${item.explanation}

        `;
      }


      document.getElementById(
        "sdEvidenceScore"
      ).textContent =
        evidenceScore
        +
        " / "
        +
        evidenceQuestions.length;


      nextEvidence.disabled =
        false;
    };


  nextEvidence.onclick =
    function () {

      if (!evidenceAnswered) {
        return;
      }


      if (
        evidenceIndex <
        evidenceQuestions.length - 1
      ) {

        evidenceIndex += 1;

        drawEvidence();

        return;
      }


      mission3Complete =
        evidenceScore >= 3;


      if (
        mission3Complete
      ) {

        evidenceFeedback.style.color =
          "#087a35";

        evidenceFeedback.innerHTML = `

          🏆
          <strong>
            FINAL EVIDENCE BOARD SOLVED!
          </strong>

          <br><br>

          You correctly solved
          ${evidenceScore} of 4 evidence files.

        `;

      } else {

        evidenceFeedback.style.color =
          "#b00020";

        evidenceFeedback.innerHTML = `

          You solved
          ${evidenceScore} of 4.

          <br><br>

          Review:

          shadow direction,
          shadow length,
          and Earth's rotation.

        `;
      }


      nextEvidence.disabled =
        true;


      updateMaster();
    };


  drawCase();

  drawEvidence();

  updateMaster();

})();
