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
      ["one","wdStatus1"],
      ["two","wdStatus2"],
      ["three","wdStatus3"],
      ["four","wdStatus4"]
    ].forEach(
      function (item) {

        const box =
          document.getElementById(
            item[1]
          );


        const done =
          complete[item[0]];


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
        "wdFinalMessage"
      );


    if (
      count === 4
    ) {

      final.innerHTML = `

        🏆
        <strong>
          WEATHER DATA INVESTIGATION COMPLETE!
        </strong>

        <br><br>

        You read weather measurements,
        identified a multi-day pattern,
        created an evidence-based forecast,
        and compared weather stations.

        <br><br>

        <strong>
          WEATHER DATA SPECIALIST
          STATUS EARNED.
        </strong>

      `;

    } else {

      final.textContent =
        count
        +
        " of 4 investigations complete.";
    }
  }


  /* ========================================================
     GENERIC QUIZ
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
            "wd-choice";


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
                ".wd-choice"
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
              INVESTIGATION COMPLETE!
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
      "wdQuestion1",

    choicesId:
      "wdChoices1",

    checkId:
      "wdCheck1",

    feedbackId:
      "wdFeedback1",

    nextId:
      "wdNext1",

    scoreId:
      "wdScore1",

    passScore:
      3,

    startText:
      "Choose the measurement that matches the evidence.",

    finishText:
      "COMPLETE INSTRUMENT CHECK →",

    items: [

      {
        question:
          "Which measurement tells how warm or cool the air is?",

        choices: [
          "Air temperature",
          "Wind direction",
          "Cloud cover",
          "Precipitation"
        ],

        answer:
          0,

        explanation:
          "Air temperature describes how warm or cool the air is."
      },

      {
        question:
          "A station reports wind from the northeast. Which measurement is being described?",

        choices: [
          "Temperature",
          "Wind direction",
          "Cloud cover",
          "Precipitation"
        ],

        answer:
          1,

        explanation:
          "Wind direction identifies the direction FROM which the wind is coming."
      },

      {
        question:
          "A station reports 8 mm of rain. Which type of weather data is this?",

        choices: [
          "Air temperature",
          "Wind direction",
          "Precipitation",
          "Cloud cover"
        ],

        answer:
          2,

        explanation:
          "Millimeters can be used to describe measured precipitation."
      },

      {
        question:
          "A scientist records that 80% of the sky is covered. Which observation is this?",

        choices: [
          "Cloud cover",
          "Temperature",
          "Wind direction",
          "Precipitation depth"
        ],

        answer:
          0,

        explanation:
          "Cloud cover describes how much of the sky is covered by clouds."
      }

    ]

  });


  /* ========================================================
     MISSION 2
     ======================================================== */


  const days = [

    {
      temp: 28,
      wind: "S",
      angle: 180,
      cloud: 10,
      rain: 0,
      icon: "☀️",
      summary:
        "DAY 1: Warm, mostly clear, and dry."
    },

    {
      temp: 27,
      wind: "S",
      angle: 180,
      cloud: 20,
      rain: 0,
      icon: "🌤️",
      summary:
        "DAY 2: Still warm and dry, with slightly more cloud cover."
    },

    {
      temp: 24,
      wind: "SE",
      angle: 135,
      cloud: 45,
      rain: 0,
      icon: "⛅",
      summary:
        "DAY 3: Cooler conditions and increasing cloud cover."
    },

    {
      temp: 20,
      wind: "E",
      angle: 90,
      cloud: 70,
      rain: 2,
      icon: "☁️",
      summary:
        "DAY 4: Cooler, mostly cloudy, with measurable precipitation beginning."
    },

    {
      temp: 17,
      wind: "NE",
      angle: 45,
      cloud: 90,
      rain: 9,
      icon: "🌧️",
      summary:
        "DAY 5: Cool, very cloudy, and wetter."
    }

  ];


  const viewed =
    new Set();


  let patternAnswer =
    null;


  const dayButtons =
    Array.from(
      document.querySelectorAll(
        "[data-day]"
      )
    );


  function showDay(
    index
  ) {

    const item =
      days[index];


    viewed.add(
      index
    );


    document.getElementById(
      "wdDaysViewed"
    ).textContent =
      viewed.size
      +
      " / 5";


    document.getElementById(
      "wdTemp"
    ).textContent =
      item.temp
      +
      "°C";


    document.getElementById(
      "wdWind"
    ).textContent =
      item.wind;


    document.getElementById(
      "wdCloud"
    ).textContent =
      item.cloud
      +
      "%";


    document.getElementById(
      "wdRain"
    ).textContent =
      item.rain
      +
      " mm";


    document.getElementById(
      "wdTempBar"
    ).style.width =
      (
        item.temp / 30 * 100
      )
      +
      "%";


    document.getElementById(
      "wdCloudBar"
    ).style.width =
      item.cloud
      +
      "%";


    document.getElementById(
      "wdRainBar"
    ).style.width =
      (
        item.rain / 10 * 100
      )
      +
      "%";


    document.getElementById(
      "wdCompassArrow"
    ).style.transform =
      "rotate("
      +
      item.angle
      +
      "deg)";


    document.getElementById(
      "wdDaySummary"
    ).innerHTML =
      "<strong>"
      +
      item.icon
      +
      " "
      +
      item.summary
      +
      "</strong>";


    dayButtons.forEach(
      function (button) {

        button.classList.toggle(
          "selected",
          Number(
            button.dataset.day
          )
          ===
          index
        );
      }
    );
  }


  dayButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          showDay(
            Number(
              button.dataset.day
            )
          );
        };
    }
  );


  document.querySelectorAll(
    "[data-pattern]"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.querySelectorAll(
            "[data-pattern]"
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


          patternAnswer =
            button.dataset.pattern;
        };
    }
  );


  document.getElementById(
    "wdCheck2"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "wdFeedback2"
        );


      if (
        viewed.size < 5
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Investigate all five days before submitting your pattern.";

        return;
      }


      if (!patternAnswer) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Choose the pattern best supported by the five-day dataset.";

        return;
      }


      if (
        patternAnswer === "A"
      ) {

        complete.two =
          true;


        feedback.style.color =
          "#087a35";


        feedback.innerHTML = `

          ✅
          <strong>
            PATTERN DETECTED!
          </strong>

          <br><br>

          Across the five days,
          temperature decreased
          while cloud cover
          and precipitation increased.

        `;

      } else {

        complete.two =
          false;


        feedback.style.color =
          "#b00020";


        feedback.innerHTML = `

          🔍 Recheck Days 1 and 5.

          <br><br>

          Compare temperature,
          cloud cover,
          and precipitation.

        `;
      }


      updateMission();
    };


  showDay(0);


  /* ========================================================
     MISSION 3
     ======================================================== */


  let forecast =
    null;


  let reason =
    null;


  document.querySelectorAll(
    "[data-forecast]"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.querySelectorAll(
            "[data-forecast]"
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


          forecast =
            button.dataset.forecast;
        };
    }
  );


  document.querySelectorAll(
    "[data-reason]"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.querySelectorAll(
            "[data-reason]"
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


          reason =
            button.dataset.reason;
        };
    }
  );


  document.getElementById(
    "wdCheck3"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "wdFeedback3"
        );


      if (
        !forecast ||
        !reason
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Choose BOTH a forecast and the evidence supporting it.";

        return;
      }


      if (
        forecast === "B"
        &&
        reason === "B"
      ) {

        complete.three =
          true;


        feedback.style.color =
          "#087a35";


        feedback.innerHTML = `

          ✅
          <strong>
            FORECAST ACCEPTED!
          </strong>

          <br><br>

          The evidence supports
          cooler,
          mostly cloudy conditions
          with precipitation still possible.

          <br><br>

          This is a prediction,
          not a guarantee.

        `;

      } else {

        complete.three =
          false;


        feedback.style.color =
          "#b00020";


        feedback.innerHTML = `

          🔍 Forecast rejected.

          <br><br>

          A strong forecast
          must match the pattern
          AND use multiple pieces
          of evidence.

        `;
      }


      updateMission();
    };


  /* ========================================================
     MISSION 4
     ======================================================== */


  const stationBox =
    document.getElementById(
      "wdStationCards"
    );


  createQuiz({

    level:
      "four",

    questionId:
      "wdQuestion4",

    choicesId:
      "wdChoices4",

    checkId:
      "wdCheck4",

    feedbackId:
      "wdFeedback4",

    nextId:
      "wdNext4",

    scoreId:
      "wdScore4",

    passScore:
      3,

    startText:
      "Use both station records before answering.",

    finishText:
      "COMPLETE STATION COMPARISON →",

    beforeDraw:
      function (item) {

        stationBox.innerHTML = `

          <article class="wd-station-card">

            <h3>
              📍 STATION A
            </h3>

            <div class="wd-station-grid">

              <div>
                🌡️
                ${item.a.temp}
              </div>

              <div>
                🧭
                ${item.a.wind}
              </div>

              <div>
                ☁️
                ${item.a.cloud}
              </div>

              <div>
                🌧️
                ${item.a.rain}
              </div>

            </div>

          </article>


          <article class="wd-station-card">

            <h3>
              📍 STATION B
            </h3>

            <div class="wd-station-grid">

              <div>
                🌡️
                ${item.b.temp}
              </div>

              <div>
                🧭
                ${item.b.wind}
              </div>

              <div>
                ☁️
                ${item.b.cloud}
              </div>

              <div>
                🌧️
                ${item.b.rain}
              </div>

            </div>

          </article>

        `;
      },

    items: [

      {
        a: {
          temp: "31°C",
          wind: "W",
          cloud: "10%",
          rain: "0 mm"
        },

        b: {
          temp: "22°C",
          wind: "SE",
          cloud: "85%",
          rain: "12 mm"
        },

        question:
          "Which station is experiencing wetter, cloudier weather?",

        choices: [
          "Station A",
          "Station B",
          "Both are identical",
          "The data cannot be compared"
        ],

        answer:
          1,

        explanation:
          "Station B has much greater cloud cover and measurable precipitation."
      },

      {
        a: {
          temp: "14°C",
          wind: "N",
          cloud: "70%",
          rain: "5 mm"
        },

        b: {
          temp: "27°C",
          wind: "S",
          cloud: "15%",
          rain: "0 mm"
        },

        question:
          "Which station has the warmer air temperature?",

        choices: [
          "Station A",
          "Station B",
          "Both are 27°C",
          "Cloud cover determines temperature"
        ],

        answer:
          1,

        explanation:
          "Station B reports 27°C compared with Station A's 14°C."
      },

      {
        a: {
          temp: "20°C",
          wind: "NE",
          cloud: "90%",
          rain: "8 mm"
        },

        b: {
          temp: "20°C",
          wind: "SW",
          cloud: "30%",
          rain: "0 mm"
        },

        question:
          "Which statement correctly compares the stations?",

        choices: [
          "Their temperatures are the same, but their wind, cloud, and precipitation conditions differ.",
          "Every measurement is identical.",
          "Station A is 20°C warmer.",
          "Station B has more precipitation."
        ],

        answer:
          0,

        explanation:
          "Both stations report 20°C, but the other weather measurements are different."
      },

      {
        a: {
          temp: "25°C",
          wind: "E",
          cloud: "55%",
          rain: "1 mm"
        },

        b: {
          temp: "18°C",
          wind: "NW",
          cloud: "95%",
          rain: "11 mm"
        },

        question:
          "Which evidence pair most strongly shows that Station B is experiencing different weather from Station A?",

        choices: [
          "The station letters are different.",
          "Station B is cooler and has much greater precipitation.",
          "Both stations use degrees Celsius.",
          "Both stations measured wind."
        ],

        answer:
          1,

        explanation:
          "The temperature and precipitation measurements provide direct evidence of different weather conditions."
      }

    ]

  });


  updateMission();

})();
