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
      ["one", "pcStatus1"],
      ["two", "pcStatus2"],
      ["three", "pcStatus3"],
      ["four", "pcStatus4"]
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
        "pcFinalMessage"
      );


    if (count === 4) {

      final.innerHTML = `

        🏆
        <strong>
          PRECIPITATION COMMAND COMPLETE!
        </strong>

        <br><br>

        You used temperature profiles,
        phase changes,
        thunderstorm evidence,
        and updraft strength
        to explain precipitation.

        <br><br>

        <strong>
          PRECIPITATION SYSTEMS SPECIALIST
          STATUS EARNED.
        </strong>

      `;

    } else {

      final.textContent =
        count
        +
        " of 4 precipitation systems complete.";
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
            "pc-choice";


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
                ".pc-choice"
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


        complete[
          config.level
        ] =
          score >=
          config.passScore;


        if (
          complete[
            config.level
          ]
        ) {

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

            Review the evidence
            and precipitation processes.

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
      "pcQuestion1",

    choicesId:
      "pcChoices1",

    checkId:
      "pcCheck1",

    feedbackId:
      "pcFeedback1",

    nextId:
      "pcNext1",

    scoreId:
      "pcScore1",

    passScore:
      3,

    startText:
      "Match the evidence to the precipitation type.",

    finishText:
      "COMPLETE MISSION 1 →",

    items: [

      {
        question:
          "Liquid water drops fall from a cloud and reach the ground without freezing.",

        choices: [
          "Rain",
          "Snow",
          "Sleet",
          "Hail"
        ],

        answer:
          0,

        explanation:
          "Liquid drops reaching the surface are rain."
      },

      {
        question:
          "Ice crystals remain frozen as they fall through cold air to the surface.",

        choices: [
          "Rain",
          "Snow",
          "Sleet",
          "Fog"
        ],

        answer:
          1,

        explanation:
          "Frozen crystals that remain frozen can reach the ground as snow."
      },

      {
        question:
          "Frozen precipitation melts, then refreezes before reaching the ground.",

        choices: [
          "Rain",
          "Snow",
          "Sleet / ice pellets",
          "Water vapor"
        ],

        answer:
          2,

        explanation:
          "Melting followed by refreezing before reaching the ground can form sleet or ice pellets."
      },

      {
        question:
          "Ice repeatedly moves upward inside a powerful thunderstorm and grows in layers.",

        choices: [
          "Rain",
          "Snow",
          "Sleet",
          "Hail"
        ],

        answer:
          3,

        explanation:
          "Powerful thunderstorm updrafts allow hailstones to grow before falling."
      }

    ]

  });


  /* ========================================================
     MISSION 2 - ATMOSPHERE SCANNER
     ======================================================== */


  const profiles = [

    {
      name:
        "PROFILE A",

      top:
        -5,

      middle:
        6,

      surface:
        9,

      answer:
        "rain",

      resultIcon:
        "🌧️",

      stages: [
        {
          top: 205,
          icon: "❄️"
        },
        {
          top: 330,
          icon: "💧"
        },
        {
          top: 455,
          icon: "💧"
        },
        {
          top: 565,
          icon: "🌧️"
        }
      ],

      evidence:
        "Frozen precipitation begins in the cloud, then falls through warmer air above freezing and melts. The lower air remains warm.",

      explanation:
        "The frozen particle melts in the warm layer and remains liquid to the ground, so rain reaches the surface."
    },

    {
      name:
        "PROFILE B",

      top:
        -7,

      middle:
        -5,

      surface:
        -3,

      answer:
        "snow",

      resultIcon:
        "❄️",

      stages: [
        {
          top: 205,
          icon: "❄️"
        },
        {
          top: 330,
          icon: "❄️"
        },
        {
          top: 455,
          icon: "❄️"
        },
        {
          top: 565,
          icon: "❄️"
        }
      ],

      evidence:
        "The particle falls through cold air that remains below freezing from the cloud toward the ground.",

      explanation:
        "The frozen particle remains frozen through the entire simplified profile, so snow reaches the ground."
    },

    {
      name:
        "PROFILE C",

      top:
        -6,

      middle:
        5,

      surface:
        -6,

      answer:
        "sleet",

      resultIcon:
        "🧊",

      stages: [
        {
          top: 205,
          icon: "❄️"
        },
        {
          top: 330,
          icon: "💧"
        },
        {
          top: 455,
          icon: "🧊"
        },
        {
          top: 565,
          icon: "🧊"
        }
      ],

      evidence:
        "Frozen precipitation enters a warm layer and melts, then falls through a deep cold layer near the surface.",

      explanation:
        "The particle melts in warm air and then refreezes before reaching the ground, producing sleet or ice pellets."
    }

  ];


  let profileIndex = 0;
  let scannerScore = 0;
  let prediction = null;
  let scannerAnswered = false;


  const topLayer =
    document.getElementById(
      "pcLayerTop"
    );


  const middleLayer =
    document.getElementById(
      "pcLayerMiddle"
    );


  const surfaceLayer =
    document.getElementById(
      "pcLayerSurface"
    );


  const particle =
    document.getElementById(
      "pcParticle"
    );


  const scannerFeedback =
    document.getElementById(
      "pcFeedback2"
    );


  const scannerNext =
    document.getElementById(
      "pcNextProfile"
    );


  const scannerChoices =
    Array.from(
      document.querySelectorAll(
        "#pcScannerChoices button"
      )
    );


  function layerClass(
    element,
    temp
  ) {

    element.classList.remove(
      "cold",
      "warm"
    );


    element.classList.add(
      temp <= 0
        ?
        "cold"
        :
        "warm"
    );
  }


  function drawProfile() {

    prediction = null;
    scannerAnswered = false;


    const item =
      profiles[
        profileIndex
      ];


    document.getElementById(
      "pcProfileName"
    ).textContent =
      item.name;


    document.getElementById(
      "pcTopTemp"
    ).textContent =
      (
        item.top > 0
          ?
          "+"
          :
          ""
      )
      +
      item.top
      +
      "°C";


    document.getElementById(
      "pcMiddleTemp"
    ).textContent =
      (
        item.middle > 0
          ?
          "+"
          :
          ""
      )
      +
      item.middle
      +
      "°C";


    document.getElementById(
      "pcSurfaceTemp"
    ).textContent =
      (
        item.surface > 0
          ?
          "+"
          :
          ""
      )
      +
      item.surface
      +
      "°C";


    layerClass(
      topLayer,
      item.top
    );


    layerClass(
      middleLayer,
      item.middle
    );


    layerClass(
      surfaceLayer,
      item.surface
    );


    document.getElementById(
      "pcScannerEvidence"
    ).textContent =
      item.evidence;


    particle.style.top =
      "120px";


    particle.textContent =
      "❄️";


    particle.style.transform =
      "translateX(-50%) scale(1)";


    scannerChoices.forEach(
      function (button) {

        button.classList.remove(
          "selected"
        );
      }
    );


    scannerFeedback.style.color =
      "#111";


    scannerFeedback.textContent =
      "Make a prediction, then run the scan.";


    scannerNext.disabled =
      true;


    scannerNext.textContent =
      profileIndex ===
      profiles.length - 1
        ?
        "COMPLETE ATMOSPHERE SCANNER →"
        :
        "NEXT PROFILE →";
  }


  scannerChoices.forEach(
    function (button) {

      button.onclick =
        function () {

          if (scannerAnswered) {
            return;
          }


          scannerChoices.forEach(
            function (item) {

              item.classList.remove(
                "selected"
              );
            }
          );


          button.classList.add(
            "selected"
          );


          prediction =
            button.dataset.predict;
        };
    }
  );


  function animateProfile(
    stages,
    done
  ) {

    let stageIndex = 0;


    function move() {

      const stage =
        stages[
          stageIndex
        ];


      particle.style.top =
        stage.top
        +
        "px";


      particle.textContent =
        stage.icon;


      particle.style.transform =
        "translateX(-50%) scale(1.15)";


      stageIndex += 1;


      if (
        stageIndex <
        stages.length
      ) {

        setTimeout(
          move,
          700
        );

      } else {

        setTimeout(
          done,
          650
        );
      }
    }


    move();
  }


  document.getElementById(
    "pcRunScanner"
  ).onclick =
    function () {

      if (!prediction) {

        scannerFeedback.style.color =
          "#b00020";


        scannerFeedback.textContent =
          "Make a precipitation prediction before running the scanner.";

        return;
      }


      if (scannerAnswered) {
        return;
      }


      scannerAnswered =
        true;


      const item =
        profiles[
          profileIndex
        ];


      scannerFeedback.style.color =
        "#111";


      scannerFeedback.textContent =
        "Scanning atmosphere... follow the particle through each layer.";


      animateProfile(
        item.stages,
        function () {

          if (
            prediction ===
            item.answer
          ) {

            scannerScore += 1;


            scannerFeedback.style.color =
              "#087a35";


            scannerFeedback.innerHTML = `

              ✅
              <strong>
                CORRECT PREDICTION!
              </strong>

              <br><br>

              ${item.explanation}

            `;

          } else {

            scannerFeedback.style.color =
              "#b00020";


            scannerFeedback.innerHTML = `

              🔍
              <strong>
                Scan review:
              </strong>

              <br><br>

              ${item.explanation}

            `;
          }


          document.getElementById(
            "pcScannerScore"
          ).textContent =
            scannerScore
            +
            " / "
            +
            profiles.length;


          scannerNext.disabled =
            false;
        }
      );
    };


  scannerNext.onclick =
    function () {

      if (!scannerAnswered) {
        return;
      }


      if (
        profileIndex <
        profiles.length - 1
      ) {

        profileIndex += 1;

        drawProfile();

        return;
      }


      complete.two =
        scannerScore >= 2;


      if (
        complete.two
      ) {

        scannerFeedback.style.color =
          "#087a35";


        scannerFeedback.innerHTML = `

          🏆
          <strong>
            ATMOSPHERE SCANNER ONLINE!
          </strong>

          <br><br>

          You correctly predicted
          ${scannerScore} of 3 profiles.

        `;

      } else {

        scannerFeedback.style.color =
          "#b00020";


        scannerFeedback.innerHTML = `

          Score:
          ${scannerScore} / 3

          <br><br>

          Review each layer
          from cloud to ground.

        `;
      }


      scannerNext.disabled =
        true;


      updateMission();
    };


  /* ========================================================
     MISSION 3 - HAIL BUILDER
     ======================================================== */


  let updraft = null;


  const hailButtons =
    Array.from(
      document.querySelectorAll(
        "[data-updraft]"
      )
    );


  hailButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          hailButtons.forEach(
            function (item) {

              item.classList.remove(
                "selected"
              );
            }
          );


          button.classList.add(
            "selected"
          );


          updraft =
            button.dataset.updraft;
        };
    }
  );


  document.getElementById(
    "pcBuildHail"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "pcFeedback3"
        );


      const hail =
        document.getElementById(
          "pcHailstone"
        );


      const arrow =
        document.getElementById(
          "pcUpdraftArrow"
        );


      if (!updraft) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Select an updraft strength first.";

        return;
      }


      if (
        updraft === "strong"
      ) {

        complete.three =
          true;


        arrow.style.fontSize =
          "11rem";


        arrow.style.transform =
          "translateX(-50%) scaleY(1.25)";


        hail.style.top =
          "175px";


        hail.style.transform =
          "translateX(-50%) scale(1.9)";


        feedback.style.color =
          "#087a35";


        feedback.innerHTML = `

          ✅
          <strong>
            HAIL BUILDER ONLINE!
          </strong>

          <br><br>

          The strong thunderstorm updraft
          can repeatedly lift ice
          through the storm.

          <br><br>

          The hailstone can collect
          supercooled water
          and grow in layers
          until it becomes too heavy
          for the updraft to support.

        `;

      } else {

        complete.three =
          false;


        arrow.style.fontSize =
          "5rem";


        arrow.style.transform =
          "translateX(-50%) scaleY(.7)";


        hail.style.top =
          "310px";


        hail.style.transform =
          "translateX(-50%) scale(.7)";


        feedback.style.color =
          "#b00020";


        feedback.innerHTML = `

          The updraft is too weak
          for our hail-building model.

          <br><br>

          Hail requires
          strong thunderstorm updrafts
          capable of lifting ice repeatedly.

        `;
      }


      updateMission();
    };


  /* ========================================================
     MISSION 4 - WEATHER DETECTIVE
     ======================================================== */


  const weatherCase =
    document.getElementById(
      "pcWeatherCase"
    );


  createQuiz({

    level:
      "four",

    questionId:
      "pcQuestion4",

    choicesId:
      "pcChoices4",

    checkId:
      "pcCheck4",

    feedbackId:
      "pcFeedback4",

    nextId:
      "pcNext4",

    scoreId:
      "pcScore4",

    passScore:
      3,

    startText:
      "Select the answer supported by the atmospheric evidence.",

    finishText:
      "COMPLETE WEATHER DETECTIVE →",

    beforeDraw:
      function (item, index) {

        weatherCase.innerHTML = `

          <strong>
            WEATHER CASE
            ${index + 1}
          </strong>

          <br><br>

          ${item.case}

        `;
      },

    items: [

      {
        case:
          "Cloud layer: -7°C. Middle layer: -5°C. Surface layer: -2°C.",

        question:
          "Which precipitation is most likely to remain frozen throughout this simplified profile?",

        choices: [
          "Rain",
          "Snow",
          "Liquid water vapor",
          "Fog"
        ],

        answer:
          1,

        explanation:
          "All three layers remain below freezing, so frozen precipitation can remain snow."
      },

      {
        case:
          "Frozen precipitation leaves a cloud, enters +7°C air and melts. Near the ground it enters a deep -6°C layer.",

        question:
          "What is most likely to reach the ground?",

        choices: [
          "Rain",
          "Snow that never melted",
          "Sleet / ice pellets",
          "Water vapor"
        ],

        answer:
          2,

        explanation:
          "The particle melts in warm air and then refreezes in the cold layer before reaching the ground."
      },

      {
        case:
          "A powerful thunderstorm contains very strong upward-moving air. Large balls of ice are observed falling from the storm.",

        question:
          "Which storm process best explains the observation?",

        choices: [
          "Strong updrafts helped hailstones grow.",
          "The ground froze every raindrop.",
          "Snow melted into hail.",
          "The Sun stopped heating Earth."
        ],

        answer:
          0,

        explanation:
          "Strong thunderstorm updrafts can repeatedly lift hailstones and allow them to grow."
      },

      {
        case:
          "Frozen precipitation melts completely in a warm layer. The air remains above freezing all the way to the surface.",

        question:
          "Which form is most likely to reach the ground?",

        choices: [
          "Rain",
          "Snow",
          "Sleet",
          "Hail because the surface is warm"
        ],

        answer:
          0,

        explanation:
          "After melting, the water remains liquid in above-freezing air and reaches the ground as rain."
      }

    ]

  });


  drawProfile();

  updateMission();

})();
