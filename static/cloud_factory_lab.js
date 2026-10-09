(function () {
  "use strict";


  const complete = {
    one: false,
    two: false,
    three: false,
    four: false
  };


  function updateMission() {

    [
      ["one", "cfStatus1"],
      ["two", "cfStatus2"],
      ["three", "cfStatus3"],
      ["four", "cfStatus4"]
    ].forEach(
      function (item) {

        const box =
          document.getElementById(
            item[1]
          );


        const done =
          complete[
            item[0]
          ];


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


    const count =
      Object.values(
        complete
      ).filter(Boolean).length;


    const final =
      document.getElementById(
        "cfFinalMessage"
      );


    if (count === 4) {

      final.innerHTML = `

        🏆
        <strong>
          CLOUD FACTORY COMPLETE!
        </strong>

        <br><br>

        You distinguished water vapor
        from cloud droplets,
        created condensation,
        repaired failed cloud systems,
        and explained cloud-weather evidence.

        <br><br>

        <strong>
          CLOUD SYSTEMS SPECIALIST
          STATUS EARNED.
        </strong>

      `;

    } else {

      final.textContent =
        count
        +
        " of 4 cloud systems complete.";
    }
  }


  /* ========================================================
     GENERIC QUIZ HELPER
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
            "cf-choice";


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
                ".cf-choice"
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


        answered =
          true;


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


        const passed =
          score >=
          config.passScore;


        complete[
          config.level
        ] =
          passed;


        if (passed) {

          feedback.style.color =
            "#087a35";


          feedback.innerHTML = `

            🏆
            <strong>
              MISSION COMPLETE!
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

            Review the cloud evidence
            before trying again.

          `;
        }


        next.disabled =
          true;


        updateMission();
      };


    draw();
  }


  /* ========================================================
     MISSION 1
     ======================================================== */


  createQuiz({

    level:
      "one",

    questionId:
      "cfQuestion1",

    choicesId:
      "cfChoices1",

    checkId:
      "cfCheck1",

    feedbackId:
      "cfFeedback1",

    nextId:
      "cfNext1",

    scoreId:
      "cfScore1",

    passScore:
      2,

    startText:
      "Choose the statement that correctly identifies the state of water.",

    finishText:
      "COMPLETE MISSION 1 →",

    items: [

      {
        question:
          "Which form of water is normally invisible in Earth's atmosphere?",

        choices: [
          "Water vapor",
          "Cloud droplets",
          "Rain drops",
          "Snowflakes"
        ],

        answer:
          0,

        explanation:
          "Water vapor is water in the gas state and is normally invisible."
      },

      {
        question:
          "What makes the white part of a cloud visible?",

        choices: [
          "Invisible water vapor only",
          "Tiny liquid droplets and/or ice crystals",
          "Sunlight turning into water",
          "Air becoming solid"
        ],

        answer:
          1,

        explanation:
          "Clouds are visible because huge numbers of tiny droplets and/or ice crystals interact with light."
      },

      {
        question:
          "Which change occurs during condensation?",

        choices: [
          "Liquid → gas",
          "Gas → liquid",
          "Solid → gas only",
          "Liquid → rock"
        ],

        answer:
          1,

        explanation:
          "Condensation changes water from the gas state into liquid droplets."
      }

    ]

  });


  /* ========================================================
     MISSION 2
     ======================================================== */


  let moisture = null;
  let temperature = null;


  const moistureButtons =
    Array.from(
      document.querySelectorAll(
        "[data-moisture]"
      )
    );


  const temperatureButtons =
    Array.from(
      document.querySelectorAll(
        "[data-temp]"
      )
    );


  moistureButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          moistureButtons.forEach(
            function (item) {

              item.classList.remove(
                "selected"
              );
            }
          );


          button.classList.add(
            "selected"
          );


          moisture =
            button.dataset.moisture;


          document.getElementById(
            "cfMoistureReadout"
          ).textContent =
            moisture.toUpperCase();
        };
    }
  );


  temperatureButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          temperatureButtons.forEach(
            function (item) {

              item.classList.remove(
                "selected"
              );
            }
          );


          button.classList.add(
            "selected"
          );


          temperature =
            button.dataset.temp;


          document.getElementById(
            "cfTemperatureReadout"
          ).textContent =
            temperature === "cool"
              ?
              "COOLING"
              :
              "WARM";
        };
    }
  );


  document.getElementById(
    "cfRunFactory"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "cfFeedback2"
        );


      const cloud =
        document.getElementById(
          "cfCloud"
        );


      const droplets =
        document.getElementById(
          "cfDroplets"
        );


      const condensation =
        document.getElementById(
          "cfCondensationReadout"
        );


      if (
        !moisture ||
        !temperature
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Set BOTH moisture and air condition before running the factory.";

        return;
      }


      if (
        moisture === "high"
        &&
        temperature === "cool"
      ) {

        complete.two =
          true;


        cloud.style.opacity =
          "1";


        cloud.style.transform =
          "translateX(-50%) scale(1)";


        droplets.style.opacity =
          "1";


        condensation.textContent =
          "STRONG";


        feedback.style.color =
          "#087a35";


        feedback.innerHTML = `

          ✅
          <strong>
            CLOUD FACTORY ONLINE!
          </strong>

          <br><br>

          Moist air cooled enough
          for water vapor to condense
          into tiny liquid droplets.

          <br><br>

          Many droplets together
          create the visible cloud
          in this simplified model.

        `;

      } else if (
        moisture === "low"
        &&
        temperature === "cool"
      ) {

        complete.two =
          false;


        cloud.style.opacity =
          ".25";


        cloud.style.transform =
          "translateX(-50%) scale(.7)";


        droplets.style.opacity =
          ".25";


        condensation.textContent =
          "LIMITED";


        feedback.style.color =
          "#b00020";


        feedback.innerHTML = `

          Cooling helps,
          but this model contains
          only a small amount of moisture.

          <br><br>

          Try increasing atmospheric moisture.

        `;

      } else {

        complete.two =
          false;


        cloud.style.opacity =
          ".06";


        cloud.style.transform =
          "translateX(-50%) scale(.55)";


        droplets.style.opacity =
          ".05";


        condensation.textContent =
          "VERY LOW";


        feedback.style.color =
          "#b00020";


        feedback.innerHTML = `

          Moisture is present,
          but the air has not cooled enough
          in this simplified model.

          <br><br>

          Try cooling the moist air.

        `;
      }


      updateMission();
    };


  /* ========================================================
     MISSION 3
     ======================================================== */


  const troubleshootCases = [

    {
      title:
        "CASE 1 — HIGH moisture + WARM air. No visible cloud forms.",

      moisture:
        "HIGH",

      temp:
        "WARM",

      cloudOpacity:
        ".08",

      question:
        "What is the best adjustment?",

      choices: [
        "Cool the moist air",
        "Remove all moisture",
        "Add sunlight until water disappears",
        "Stop the water cycle"
      ],

      answer:
        0,

      explanation:
        "The air already contains abundant moisture. Cooling can allow more water vapor to condense."
    },

    {
      title:
        "CASE 2 — LOW moisture + COOL air. Only a tiny amount of condensation appears.",

      moisture:
        "LOW",

      temp:
        "COOL",

      cloudOpacity:
        ".25",

      question:
        "What is limiting cloud formation in this simplified model?",

      choices: [
        "Not enough atmospheric moisture",
        "Too much precipitation",
        "Earth's rotation",
        "The Moon"
      ],

      answer:
        0,

      explanation:
        "Cooling is present, but little water vapor is available to condense."
    },

    {
      title:
        "CASE 3 — HIGH moisture + COOLING. A visible cloud forms.",

      moisture:
        "HIGH",

      temp:
        "COOLING",

      cloudOpacity:
        "1",

      question:
        "Which process produced the visible droplets?",

      choices: [
        "Evaporation",
        "Condensation",
        "Collection",
        "Erosion"
      ],

      answer:
        1,

      explanation:
        "Cooling moist air allowed water vapor to condense into liquid droplets."
    }

  ];


  let caseIndex = 0;
  let caseScore = 0;
  let caseChoice = null;
  let caseAnswered = false;


  const caseCard =
    document.getElementById(
      "cfCaseCard"
    );


  const caseChoices =
    document.getElementById(
      "cfChoices3"
    );


  const caseFeedback =
    document.getElementById(
      "cfFeedback3"
    );


  const caseNext =
    document.getElementById(
      "cfNext3"
    );


  function drawCase() {

    caseChoice = null;
    caseAnswered = false;


    const item =
      troubleshootCases[
        caseIndex
      ];


    caseCard.innerHTML = `

      <strong>
        ${item.title}
      </strong>

      <br><br>

      ${item.question}

    `;


    document.getElementById(
      "cfCaseMoisture"
    ).innerHTML = `

      💦

      <strong>
        ${item.moisture} MOISTURE
      </strong>

    `;


    document.getElementById(
      "cfCaseTemp"
    ).innerHTML = `

      🌡️

      <strong>
        ${item.temp}
      </strong>

    `;


    document.getElementById(
      "cfCaseCloud"
    ).style.opacity =
      item.cloudOpacity;


    caseChoices.innerHTML =
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
          "cf-choice";


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

            if (caseAnswered) {
              return;
            }


            caseChoices.querySelectorAll(
              ".cf-choice"
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


            caseChoice =
              index;
          };


        caseChoices.appendChild(
          button
        );
      }
    );


    caseFeedback.style.color =
      "#111";


    caseFeedback.textContent =
      "Identify the best explanation.";


    caseNext.disabled =
      true;


    caseNext.textContent =
      caseIndex ===
      troubleshootCases.length - 1
        ?
        "COMPLETE TROUBLESHOOTING →"
        :
        "NEXT CASE →";
  }


  document.getElementById(
    "cfCheck3"
  ).onclick =
    function () {

      if (
        caseChoice === null
      ) {

        caseFeedback.style.color =
          "#b00020";


        caseFeedback.textContent =
          "Choose an explanation before checking.";

        return;
      }


      if (caseAnswered) {
        return;
      }


      caseAnswered =
        true;


      const item =
        troubleshootCases[
          caseIndex
        ];


      if (
        caseChoice ===
        item.answer
      ) {

        caseScore += 1;


        caseFeedback.style.color =
          "#087a35";


        caseFeedback.innerHTML = `

          ✅
          <strong>
            Correct diagnosis!
          </strong>

          ${item.explanation}

        `;

      } else {

        caseFeedback.style.color =
          "#b00020";


        caseFeedback.innerHTML = `

          🔍
          <strong>
            System review:
          </strong>

          ${item.explanation}

        `;
      }


      document.getElementById(
        "cfScore3"
      ).textContent =
        caseScore
        +
        " / "
        +
        troubleshootCases.length;


      caseNext.disabled =
        false;
    };


  caseNext.onclick =
    function () {

      if (!caseAnswered) {
        return;
      }


      if (
        caseIndex <
        troubleshootCases.length - 1
      ) {

        caseIndex += 1;

        drawCase();

        return;
      }


      complete.three =
        caseScore >= 2;


      if (
        complete.three
      ) {

        caseFeedback.style.color =
          "#087a35";


        caseFeedback.innerHTML = `

          🏆
          <strong>
            CLOUD TROUBLESHOOTING COMPLETE!
          </strong>

          <br><br>

          ${caseScore} of 3
          cloud systems correctly diagnosed.

        `;

      } else {

        caseFeedback.style.color =
          "#b00020";


        caseFeedback.innerHTML = `

          Score:
          ${caseScore} / 3

          <br><br>

          Review the roles
          of moisture,
          cooling,
          and condensation.

        `;
      }


      caseNext.disabled =
        true;


      updateMission();
    };


  /* ========================================================
     MISSION 4
     ======================================================== */


  const weatherItems = [

    {
      scenario:
        "Ocean evaporation adds water vapor to the atmosphere. Later, the moist air cools.",

      question:
        "Which change may occur next?",

      choices: [
        "Condensation can form tiny droplets.",
        "All water disappears.",
        "Earth stops rotating.",
        "The ocean turns into a cloud instantly."
      ],

      answer:
        0,

      explanation:
        "Cooling moist air can allow water vapor to condense into tiny liquid droplets."
    },

    {
      scenario:
        "A student can clearly see a white cloud in the sky.",

      question:
        "What is the student seeing?",

      choices: [
        "Only invisible water vapor",
        "Tiny droplets and/or ice crystals",
        "A solid block of water",
        "Sunlight with no water present"
      ],

      answer:
        1,

      explanation:
        "The visible cloud consists of tiny liquid droplets and/or ice crystals."
    },

    {
      scenario:
        "A cloud forms, but no rain falls from it.",

      question:
        "Which conclusion is best supported?",

      choices: [
        "Every cloud must immediately produce rain.",
        "Cloud formation can occur without immediate precipitation.",
        "The cloud contains no water.",
        "Condensation did not occur."
      ],

      answer:
        1,

      explanation:
        "Cloud formation does not guarantee immediate precipitation."
    },

    {
      scenario:
        "A weather model shows moist air cooling and many tiny droplets forming around particles in the atmosphere.",

      question:
        "Which process is being modeled?",

      choices: [
        "Condensation and cloud formation",
        "Earth's revolution",
        "Erosion",
        "Magnetism"
      ],

      answer:
        0,

      explanation:
        "The model shows water vapor condensing into droplets that contribute to cloud formation."
    }

  ];


  let weatherIndex = 0;
  let weatherScore = 0;
  let weatherChoice = null;
  let weatherAnswered = false;


  const weatherScenario =
    document.getElementById(
      "cfWeatherScenario"
    );


  const weatherQuestion =
    document.getElementById(
      "cfQuestion4"
    );


  const weatherChoices =
    document.getElementById(
      "cfChoices4"
    );


  const weatherFeedback =
    document.getElementById(
      "cfFeedback4"
    );


  const weatherNext =
    document.getElementById(
      "cfNext4"
    );


  function drawWeather() {

    weatherChoice = null;
    weatherAnswered = false;


    const item =
      weatherItems[
        weatherIndex
      ];


    weatherScenario.innerHTML = `

      <strong>
        WEATHER FILE
        ${weatherIndex + 1}
      </strong>

      <br><br>

      ${item.scenario}

    `;


    weatherQuestion.textContent =
      item.question;


    weatherChoices.innerHTML =
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
          "cf-choice";


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

            if (weatherAnswered) {
              return;
            }


            weatherChoices.querySelectorAll(
              ".cf-choice"
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


            weatherChoice =
              index;
          };


        weatherChoices.appendChild(
          button
        );
      }
    );


    weatherFeedback.style.color =
      "#111";


    weatherFeedback.textContent =
      "Select the explanation that matches all evidence.";


    weatherNext.disabled =
      true;


    weatherNext.textContent =
      weatherIndex ===
      weatherItems.length - 1
        ?
        "COMPLETE WEATHER MISSION →"
        :
        "NEXT WEATHER FILE →";
  }


  document.getElementById(
    "cfCheck4"
  ).onclick =
    function () {

      if (
        weatherChoice === null
      ) {

        weatherFeedback.style.color =
          "#b00020";


        weatherFeedback.textContent =
          "Choose an answer before checking.";

        return;
      }


      if (weatherAnswered) {
        return;
      }


      weatherAnswered =
        true;


      const item =
        weatherItems[
          weatherIndex
        ];


      if (
        weatherChoice ===
        item.answer
      ) {

        weatherScore += 1;


        weatherFeedback.style.color =
          "#087a35";


        weatherFeedback.innerHTML = `

          ✅
          <strong>
            Correct!
          </strong>

          ${item.explanation}

        `;

      } else {

        weatherFeedback.style.color =
          "#b00020";


        weatherFeedback.innerHTML = `

          🔍
          <strong>
            Evidence review:
          </strong>

          ${item.explanation}

        `;
      }


      document.getElementById(
        "cfScore4"
      ).textContent =
        weatherScore
        +
        " / "
        +
        weatherItems.length;


      weatherNext.disabled =
        false;
    };


  weatherNext.onclick =
    function () {

      if (!weatherAnswered) {
        return;
      }


      if (
        weatherIndex <
        weatherItems.length - 1
      ) {

        weatherIndex += 1;

        drawWeather();

        return;
      }


      complete.four =
        weatherScore >= 3;


      if (
        complete.four
      ) {

        weatherFeedback.style.color =
          "#087a35";


        weatherFeedback.innerHTML = `

          🏆
          <strong>
            WEATHER EVIDENCE COMPLETE!
          </strong>

          <br><br>

          ${weatherScore} of 4
          weather files solved.

        `;

      } else {

        weatherFeedback.style.color =
          "#b00020";


        weatherFeedback.innerHTML = `

          Score:
          ${weatherScore} / 4

          <br><br>

          Review:

          water vapor,
          cooling,
          condensation,
          and cloud droplets.

        `;
      }


      weatherNext.disabled =
        true;


      updateMission();
    };


  drawCase();

  drawWeather();

  updateMission();

})();
