(function () {
  "use strict";


  const passed = {
    one: false,
    two: false,
    three: false,
    four: false
  };


  function updateCertification() {

    [
      ["one", "certBadge1"],
      ["two", "certBadge2"],
      ["three", "certBadge3"],
      ["four", "certBadge4"]
    ].forEach(
      function (item) {

        const badge =
          document.getElementById(
            item[1]
          );

        const earned =
          passed[
            item[0]
          ];


        badge.querySelector(
          "span"
        ).textContent =
          earned
            ? "✅"
            : "🔒";


        badge.classList.toggle(
          "earned",
          earned
        );
      }
    );


    const count =
      Object.values(
        passed
      ).filter(Boolean).length;


    const final =
      document.getElementById(
        "certFinalStatus"
      );


    const certificate =
      document.getElementById(
        "certCertificate"
      );


    if (count === 4) {

      final.innerHTML = `

        🏆
        <strong>
          CERTIFICATION COMPLETE!
        </strong>

        <br><br>

        All four Earth Rotation
        evidence levels have been passed.

        <br><br>

        <strong>
          EARTH ROTATION SCIENCE SPECIALIST
        </strong>

      `;


      certificate.classList.add(
        "show"
      );

    } else {

      final.textContent =
        count
        +
        " of 4 certification levels earned.";


      certificate.classList.remove(
        "show"
      );
    }
  }


  /* ========================================================
     GENERIC QUIZ ENGINE
     ======================================================== */


  function createQuiz(config) {

    let index = 0;
    let score = 0;
    let selected = null;
    let answered = false;


    const question =
      document.getElementById(
        config.questionId
      );

    const choices =
      document.getElementById(
        config.choicesId
      );

    const feedback =
      document.getElementById(
        config.feedbackId
      );

    const next =
      document.getElementById(
        config.nextId
      );

    const scoreDisplay =
      document.getElementById(
        config.scoreId
      );


    function draw() {

      selected = null;
      answered = false;


      const item =
        config.items[index];


      if (config.beforeDraw) {

        config.beforeDraw(
          item,
          index
        );
      }


      question.innerHTML = `

        <strong>
          Challenge
          ${index + 1}
          of
          ${config.items.length}
        </strong>

        <br><br>

        ${item.question}

      `;


      choices.innerHTML =
        "";


      item.choices.forEach(
        function (choice, choiceIndex) {

          const button =
            document.createElement(
              "button"
            );


          button.type =
            "button";


          button.className =
            "cert-choice";


          button.textContent =
            String.fromCharCode(
              65 + choiceIndex
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


              choices.querySelectorAll(
                ".cert-choice"
              ).forEach(
                function (other) {

                  other.classList.remove(
                    "selected"
                  );
                }
              );


              button.classList.add(
                "selected"
              );


              selected =
                choiceIndex;
            };


          choices.appendChild(
            button
          );
        }
      );


      feedback.style.color =
        "#111";


      feedback.textContent =
        config.startText;


      next.disabled =
        true;


      next.textContent =
        index ===
        config.items.length - 1
          ?
          config.finishText
          :
          "NEXT CHALLENGE →";
    }


    document.getElementById(
      config.checkId
    ).onclick =
      function () {

        if (
          selected === null
        ) {

          feedback.style.color =
            "#b00020";

          feedback.textContent =
            "Choose an answer before checking.";

          return;
        }


        if (answered) {
          return;
        }


        answered = true;


        const item =
          config.items[index];


        if (
          selected ===
          item.answer
        ) {

          score += 1;


          feedback.style.color =
            "#087a35";


          feedback.innerHTML = `

            ✅
            <strong>
              Correct!
            </strong>

            ${item.explanation}

          `;

        } else {

          feedback.style.color =
            "#b00020";


          feedback.innerHTML = `

            🔎
            <strong>
              Evidence review:
            </strong>

            ${item.explanation}

          `;
        }


        scoreDisplay.textContent =
          score
          +
          " / "
          +
          config.items.length;


        next.disabled =
          false;
      };


    next.onclick =
      function () {

        if (!answered) {
          return;
        }


        if (
          index <
          config.items.length - 1
        ) {

          index += 1;

          draw();

          return;
        }


        const pass =
          score >=
          config.passScore;


        passed[
          config.level
        ] =
          pass;


        if (pass) {

          feedback.style.color =
            "#087a35";


          feedback.innerHTML = `

            🏆
            <strong>
              LEVEL PASSED!
            </strong>

            <br><br>

            Score:
            ${score}
            /
            ${config.items.length}

            <br><br>

            Certification badge earned.

          `;

        } else {

          feedback.style.color =
            "#b00020";


          feedback.innerHTML = `

            Score:
            ${score}
            /
            ${config.items.length}

            <br><br>

            Review the evidence rules
            before your next attempt.

          `;
        }


        next.disabled =
          true;


        updateCertification();
      };


    draw();
  }


  /* ========================================================
     LEVEL 1
     ======================================================== */


  createQuiz({

    level:
      "one",

    questionId:
      "certQuestion1",

    choicesId:
      "certChoices1",

    checkId:
      "certCheck1",

    feedbackId:
      "certFeedback1",

    nextId:
      "certNext1",

    scoreId:
      "certScore1",

    passScore:
      2,

    startText:
      "Choose the explanation that matches Earth's actual motion.",

    finishText:
      "COMPLETE LEVEL 1 →",

    items: [

      {
        question:
          "Which statement correctly describes Earth's rotation?",

        choices: [
          "Earth spins around its axis.",
          "Earth travels around the Sun once every 24 hours.",
          "The Sun spins around Earth each day.",
          "Earth stops rotating during nighttime."
        ],

        answer: 0,

        explanation:
          "Rotation means Earth spinning around its axis."
      },

      {
        question:
          "Approximately how long does Earth take to complete one rotation?",

        choices: [
          "6 hours",
          "12 hours",
          "24 hours",
          "365 days"
        ],

        answer: 2,

        explanation:
          "One Earth rotation takes approximately 24 hours."
      },

      {
        question:
          "Which direction does Earth rotate?",

        choices: [
          "East to west",
          "West to east",
          "North to south",
          "Earth does not rotate"
        ],

        answer: 1,

        explanation:
          "Earth rotates west to east."
      }

    ]

  });


  /* ========================================================
     LEVEL 2
     ======================================================== */


  createQuiz({

    level:
      "two",

    questionId:
      "certQuestion2",

    choicesId:
      "certChoices2",

    checkId:
      "certCheck2",

    feedbackId:
      "certFeedback2",

    nextId:
      "certNext2",

    scoreId:
      "certScore2",

    passScore:
      2,

    startText:
      "Use the illuminated and dark halves as evidence.",

    finishText:
      "COMPLETE LEVEL 2 →",

    items: [

      {
        question:
          "Which labeled position is experiencing the strongest daytime condition in this simplified model?",

        choices: [
          "Position A",
          "Position B",
          "Position C",
          "Position D"
        ],

        answer: 0,

        explanation:
          "Position A is on the half facing the Sun and receiving direct sunlight."
      },

      {
        question:
          "Which position is on the side facing away from the Sun?",

        choices: [
          "Position A",
          "Position B",
          "Position C",
          "Position D"
        ],

        answer: 2,

        explanation:
          "Position C is on the dark side of Earth and is experiencing nighttime."
      },

      {
        question:
          "As Earth continues rotating west to east, why will a location eventually experience both day and night?",

        choices: [
          "The Sun turns on and off.",
          "The location rotates into and out of sunlight.",
          "The Moon blocks sunlight every night.",
          "Earth changes its distance from the Sun every few hours."
        ],

        answer: 1,

        explanation:
          "Earth's rotation carries locations through the illuminated and dark halves."
      }

    ]

  });


  /* ========================================================
     LEVEL 3
     ======================================================== */


  const evidenceCard =
    document.getElementById(
      "certEvidenceCard"
    );


  const shadow =
    document.getElementById(
      "certShadow"
    );


  const sunHint =
    document.getElementById(
      "certSunHint"
    );


  createQuiz({

    level:
      "three",

    questionId:
      "certQuestion3",

    choicesId:
      "certChoices3",

    checkId:
      "certCheck3",

    feedbackId:
      "certFeedback3",

    nextId:
      "certNext3",

    scoreId:
      "certScore3",

    passScore:
      2,

    startText:
      "Use both direction and length as evidence.",

    finishText:
      "COMPLETE LEVEL 3 →",

    beforeDraw:
      function (item) {

        evidenceCard.innerHTML =
          "<strong>EVIDENCE:</strong><br><br>"
          +
          item.evidence;


        shadow.style.width =
          item.shadowWidth
          +
          "px";


        shadow.style.transform =
          item.shadowTransform;


        sunHint.style.left =
          item.hintLeft;
      },

    items: [

      {
        evidence:
          "A long shadow extends toward the WEST.",

        shadowWidth:
          270,

        shadowTransform:
          "translateX(-270px)",

        hintLeft:
          "82%",

        question:
          "Where is the Sun most likely appearing?",

        choices: [
          "Low in the east",
          "High in the sky",
          "Low in the west",
          "No Sun is present"
        ],

        answer: 0,

        explanation:
          "A shadow extends generally away from the Sun. A long westward shadow indicates a relatively low Sun toward the east."
      },

      {
        evidence:
          "The same object now casts a very short shadow.",

        shadowWidth:
          60,

        shadowTransform:
          "translateX(0)",

        hintLeft:
          "50%",

        question:
          "Which observation best explains the shorter shadow?",

        choices: [
          "The object became shorter.",
          "The Sun appears higher in the sky.",
          "Earth stopped rotating.",
          "The Sun stopped producing light."
        ],

        answer: 1,

        explanation:
          "A higher apparent Sun generally produces a shorter shadow."
      },

      {
        evidence:
          "Later, a long shadow extends toward the EAST.",

        shadowWidth:
          270,

        shadowTransform:
          "translateX(0)",

        hintLeft:
          "18%",

        question:
          "Which Sun position best matches the evidence?",

        choices: [
          "Low in the east",
          "High in the sky",
          "Low in the west",
          "Directly below Earth"
        ],

        answer: 2,

        explanation:
          "A long eastward shadow points away from a relatively low Sun toward the west."
      }

    ]

  });


  /* ========================================================
     LEVEL 4
     ======================================================== */


  const finalScenario =
    document.getElementById(
      "certFinalScenario"
    );


  createQuiz({

    level:
      "four",

    questionId:
      "certQuestion4",

    choicesId:
      "certChoices4",

    checkId:
      "certCheck4",

    feedbackId:
      "certFeedback4",

    nextId:
      "certNext4",

    scoreId:
      "certScore4",

    passScore:
      3,

    startText:
      "Use every clue that matters.",

    finishText:
      "SUBMIT FINAL CERTIFICATION →",

    beforeDraw:
      function (item) {

        finalScenario.innerHTML = `

          <strong>
            FINAL MISSION SCENARIO
          </strong>

          <br><br>

          ${item.scenario}

        `;
      },

    items: [

      {
        scenario:
          "A student observes sunrise. Several hours later the Sun appears higher, and a pole's shadow is shorter.",

        question:
          "Which explanation best connects both observations?",

        choices: [
          "Earth's rotation changes the observer's position relative to sunlight.",
          "The pole becomes shorter during the day.",
          "The Sun revolves around Earth every few hours.",
          "The Moon changes the pole's shadow."
        ],

        answer: 0,

        explanation:
          "Earth's rotation explains both the changing apparent Sun position and the changing shadow."
      },

      {
        scenario:
          "A marked location on a globe begins in daylight, later reaches the dark side, and eventually returns to daylight.",

        question:
          "Which additional observation would best support the same explanation?",

        choices: [
          "Earth completes this cycle in about 24 hours.",
          "Earth completes one revolution each year.",
          "The Moon changes phases.",
          "Jupiter has many moons."
        ],

        answer: 0,

        explanation:
          "A repeating approximately 24-hour cycle strongly supports Earth's rotation as the cause."
      },

      {
        scenario:
          "An observer sees the Sun appear to travel east to west while measurements show Earth rotates west to east.",

        question:
          "What type of observation is the Sun's east-to-west movement?",

        choices: [
          "Earth's revolution",
          "Apparent motion",
          "Moon phase",
          "Solar eclipse"
        ],

        answer: 1,

        explanation:
          "The Sun's daily east-to-west movement is apparent motion caused by Earth's rotation."
      },

      {
        scenario:
          "Morning: long shadow west. Near solar noon: short shadow. Late afternoon: long shadow east.",

        question:
          "Which conclusion is best supported by all three observations?",

        choices: [
          "The object changes height three times each day.",
          "The Sun's apparent position changes during the day as Earth rotates.",
          "The Sun circles Earth once every day.",
          "Earth stops rotating near noon."
        ],

        answer: 1,

        explanation:
          "The changing direction and length of the shadow are consistent with the Sun's changing apparent position caused by Earth's rotation."
      }

    ]

  });


  updateCertification();

})();
