(function () {
  "use strict";


  const passed = {
    one: false,
    two: false,
    three: false,
    four: false
  };


  function updateStatus() {

    [
      ["one","wcStatus1"],
      ["two","wcStatus2"],
      ["three","wcStatus3"],
      ["four","wcStatus4"]
    ].forEach(
      function (item) {

        const box =
          document.getElementById(
            item[1]
          );


        const done =
          passed[item[0]];


        box.querySelector(
          "span"
        ).textContent =
          done
            ? "🟢"
            : "🔴";


        box.classList.toggle(
          "online",
          done
        );
      }
    );


    const allPassed =
      Object.values(
        passed
      ).every(Boolean);


    document.getElementById(
      "wcLocked"
    ).style.display =
      allPassed
        ? "none"
        : "block";


    document.getElementById(
      "wcCertificate"
    ).classList.toggle(
      "show",
      allPassed
    );
  }


  function makeQuiz(config) {

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


      if (
        config.beforeDraw
      ) {

        config.beforeDraw(
          item,
          index
        );
      }


      question.innerHTML = `

        <strong>
          Question
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
        function (
          choice,
          choiceIndex
        ) {

          const button =
            document.createElement(
              "button"
            );


          button.type =
            "button";


          button.className =
            "wc-choice";


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
                ".wc-choice"
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
          "COMPLETE LEVEL →"
          :
          "NEXT →";
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

            🔍
            <strong>
              Review:
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


        passed[
          config.level
        ] =
          score >=
          config.passScore;


        if (
          passed[
            config.level
          ]
        ) {

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

            Passing score:
            ${config.passScore}
            /
            ${config.items.length}

            <br><br>

            Review this level
            and reload the page
            when you are ready
            to try again.

          `;
        }


        next.disabled =
          true;


        updateStatus();
      };


    draw();
  }


  /* ========================================================
     LEVEL 1
     ======================================================== */


  makeQuiz({

    level:
      "one",

    questionId:
      "wcQuestion1",

    choicesId:
      "wcChoices1",

    checkId:
      "wcCheck1",

    feedbackId:
      "wcFeedback1",

    nextId:
      "wcNext1",

    scoreId:
      "wcScore1",

    passScore:
      3,

    startText:
      "Identify the water-cycle process.",

    items: [

      {
        question:
          "Liquid ocean water changes into water vapor and enters the atmosphere. Which process occurred?",

        choices: [
          "Evaporation",
          "Condensation",
          "Precipitation",
          "Collection"
        ],

        answer:
          0,

        explanation:
          "Evaporation changes liquid water into water vapor."
      },

      {
        question:
          "Moist air cools and tiny liquid droplets form. Which process occurred?",

        choices: [
          "Evaporation",
          "Condensation",
          "Collection",
          "Melting"
        ],

        answer:
          1,

        explanation:
          "Condensation changes water vapor into liquid droplets."
      },

      {
        question:
          "Which statement about water vapor is correct?",

        choices: [
          "Water vapor is normally invisible.",
          "Water vapor is the white part of every cloud.",
          "Water vapor is solid ice.",
          "Water vapor is precipitation."
        ],

        answer:
          0,

        explanation:
          "Water vapor is water in the gas state and is normally invisible."
      },

      {
        question:
          "Which statement about clouds and precipitation is most accurate?",

        choices: [
          "Every cloud immediately produces precipitation.",
          "Cloud particles must grow enough before precipitation can fall.",
          "Clouds contain no water.",
          "Precipitation happens before clouds form."
        ],

        answer:
          1,

        explanation:
          "Cloud droplets or ice crystals must grow enough before they can fall as precipitation."
      }

    ]

  });


  /* ========================================================
     LEVEL 2
     ======================================================== */


  makeQuiz({

    level:
      "two",

    questionId:
      "wcQuestion2",

    choicesId:
      "wcChoices2",

    checkId:
      "wcCheck2",

    feedbackId:
      "wcFeedback2",

    nextId:
      "wcNext2",

    scoreId:
      "wcScore2",

    passScore:
      3,

    startText:
      "Trace energy and water through the system.",

    items: [

      {
        question:
          "What is the main role of the Sun in this water-cycle system?",

        choices: [
          "It supplies energy that can contribute to evaporation.",
          "It supplies ocean water.",
          "It creates rocks in clouds.",
          "It stops all condensation."
        ],

        answer:
          0,

        explanation:
          "Solar energy can warm Earth's surface and contribute to evaporation."
      },

      {
        question:
          "What is one important role of the ocean in the water cycle?",

        choices: [
          "It is a major reservoir of surface water available for evaporation.",
          "It prevents water from entering the atmosphere.",
          "It creates sunlight.",
          "It stops weather."
        ],

        answer:
          0,

        explanation:
          "The ocean stores enormous amounts of water that can enter the atmosphere through evaporation."
      },

      {
        question:
          "High solar energy increases evaporation in a model. What is the most direct expected change?",

        choices: [
          "More water vapor may enter the atmosphere.",
          "Heavy rain must immediately occur.",
          "All clouds disappear.",
          "The ocean becomes solid rock."
        ],

        answer:
          0,

        explanation:
          "Greater evaporation can add more atmospheric water vapor, but rain is not guaranteed."
      },

      {
        question:
          "Which sequence best shows how the Sun and ocean can affect weather?",

        choices: [
          "Sun energy → ocean water → evaporation → atmospheric moisture → condensation/clouds → possible precipitation",
          "Ocean → rock → Moon → rain",
          "Cloud → Sun → soil → evaporation",
          "Wind → magnetism → ocean → light"
        ],

        answer:
          0,

        explanation:
          "This sequence connects solar energy, ocean water, atmospheric moisture, clouds, and possible precipitation."
      }

    ]

  });


  /* ========================================================
     LEVEL 3
     ======================================================== */


  const dataDisplay =
    document.getElementById(
      "wcDataDisplay"
    );


  makeQuiz({

    level:
      "three",

    questionId:
      "wcQuestion3",

    choicesId:
      "wcChoices3",

    checkId:
      "wcCheck3",

    feedbackId:
      "wcFeedback3",

    nextId:
      "wcNext3",

    scoreId:
      "wcScore3",

    passScore:
      3,

    startText:
      "Use the weather data before answering.",

    beforeDraw:
      function (item) {

        dataDisplay.innerHTML =
          item.data;
      },

    items: [

      {
        data:
          "<strong>Day 1:</strong> 28°C, 10% clouds, 0 mm precipitation<br><strong>Day 5:</strong> 17°C, 90% clouds, 9 mm precipitation",

        question:
          "Which pattern is best supported?",

        choices: [
          "Temperature decreased while cloud cover and precipitation increased.",
          "Temperature increased and clouds disappeared.",
          "Nothing changed.",
          "Precipitation decreased from 9 mm to 0 mm."
        ],

        answer:
          0,

        explanation:
          "Comparing Day 1 with Day 5 shows lower temperature, greater cloud cover, and greater precipitation."
      },

      {
        data:
          "<strong>Station A:</strong> 30°C, 10% clouds, 0 mm<br><strong>Station B:</strong> 20°C, 85% clouds, 11 mm",

        question:
          "Which station is experiencing wetter, cloudier weather?",

        choices: [
          "Station A",
          "Station B",
          "Both are identical",
          "There is not enough data to compare"
        ],

        answer:
          1,

        explanation:
          "Station B has much greater cloud cover and measurable precipitation."
      },

      {
        data:
          "<strong>Days 1–4:</strong> Temperature decreases each day while cloud cover steadily increases.",

        question:
          "Which forecast uses the evidence most appropriately?",

        choices: [
          "Cloudy, cooler conditions may continue.",
          "Heavy rain is guaranteed.",
          "Weather can never change.",
          "Tomorrow must be hotter and clear."
        ],

        answer:
          0,

        explanation:
          "A forecast should follow the observed pattern but should not claim certainty."
      },

      {
        data:
          "<strong>Wind:</strong> NE<br><strong>Cloud cover:</strong> 75%<br><strong>Precipitation:</strong> 4 mm",

        question:
          "What does NE wind mean?",

        choices: [
          "Wind is coming FROM the northeast.",
          "Wind is moving only at night.",
          "Wind is a form of precipitation.",
          "Wind has no direction."
        ],

        answer:
          0,

        explanation:
          "Wind direction is named for the direction FROM which the wind is coming."
      }

    ]

  });


  /* ========================================================
     LEVEL 4
     ======================================================== */


  const stimulus =
    document.getElementById(
      "wcStimulus4"
    );


  makeQuiz({

    level:
      "four",

    questionId:
      "wcQuestion4",

    choicesId:
      "wcChoices4",

    checkId:
      "wcCheck4",

    feedbackId:
      "wcFeedback4",

    nextId:
      "wcNext4",

    scoreId:
      "wcScore4",

    passScore:
      4,

    startText:
      "Use all available evidence before answering.",

    beforeDraw:
      function (item) {

        stimulus.innerHTML =
          item.stimulus;
      },

    items: [

      {
        stimulus:
          "<strong>Evidence:</strong> Solar energy is high. Ocean surface water decreases. Atmospheric water vapor increases.",

        question:
          "Which process is best supported by the evidence?",

        choices: [
          "Evaporation",
          "Condensation",
          "Precipitation",
          "Freezing"
        ],

        answer:
          0,

        explanation:
          "The movement from liquid surface water to atmospheric water vapor supports evaporation."
      },

      {
        stimulus:
          "<strong>Evidence:</strong> Atmospheric moisture is high. Air cools from 24°C to 14°C. Cloud cover increases from 20% to 85%.",

        question:
          "Which process best explains the cloud increase?",

        choices: [
          "Condensation",
          "Evaporation only",
          "Collection",
          "Melting"
        ],

        answer:
          0,

        explanation:
          "Cooling moist air can support condensation and cloud formation."
      },

      {
        stimulus:
          "<strong>Evidence:</strong> A cloud is present, but the droplets remain very small.",

        question:
          "Which conclusion is best supported?",

        choices: [
          "Heavy rain must begin immediately.",
          "A cloud can exist without immediate precipitation.",
          "The cloud contains no water.",
          "Evaporation has stopped everywhere."
        ],

        answer:
          1,

        explanation:
          "Cloud formation does not guarantee precipitation. Particles must grow enough to fall."
      },

      {
        stimulus:
          "<strong>Data:</strong> Temperature: 27°C → 23°C → 19°C. Cloud cover: 25% → 55% → 85%. Precipitation: 0 → 1 → 7 mm.",

        question:
          "Which prediction is strongest?",

        choices: [
          "Cooler, cloudier conditions with precipitation still possible.",
          "Hot, clear weather is guaranteed.",
          "There is no pattern.",
          "Weather cannot change again."
        ],

        answer:
          0,

        explanation:
          "The data show decreasing temperature and increasing cloud cover and precipitation."
      },

      {
        stimulus:
          "<strong>Complete System:</strong> Sun energy reaches ocean water. Evaporation increases. Moist air later cools. Clouds form. Cloud particles grow.",

        question:
          "Which statement best explains the system?",

        choices: [
          "The Sun and ocean interact in the water cycle and can affect weather.",
          "Only clouds affect weather.",
          "The ocean and Sun are unrelated.",
          "Evaporation guarantees rain every time."
        ],

        answer:
          0,

        explanation:
          "The evidence connects solar energy, ocean water, atmospheric moisture, cloud formation, and possible precipitation."
      }

    ]

  });


  updateStatus();

})();
