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
      ["one", "wcStatus1"],
      ["two", "wcStatus2"],
      ["three", "wcStatus3"],
      ["four", "wcStatus4"]
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
        "wcFinalMessage"
      );


    if (count === 4) {

      final.innerHTML = `

        🏆
        <strong>
          WATER CYCLE SYSTEMS ONLINE!
        </strong>

        <br><br>

        You used Sun energy,
        ocean water,
        phase changes,
        and weather evidence
        to explain the water cycle.

        <br><br>

        <strong>
          WATER CYCLE SYSTEMS SPECIALIST
          STATUS EARNED.
        </strong>

      `;

    } else {

      final.textContent =
        count
        +
        " of 4 water systems complete.";
    }
  }


  /* ========================================================
     MISSION 1
     ======================================================== */


  let energy = null;


  const energyButtons =
    Array.from(
      document.querySelectorAll(
        ".wc-energy-buttons button"
      )
    );


  const meterFill =
    document.getElementById(
      "wcMeterFill"
    );


  const meterText =
    document.getElementById(
      "wcMeterText"
    );


  const vapor =
    document.getElementById(
      "wcVapor"
    );


  energyButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          energyButtons.forEach(
            function (item) {

              item.classList.remove(
                "selected"
              );
            }
          );


          button.classList.add(
            "selected"
          );


          energy =
            button.dataset.energy;


          const values = {

            low: {
              width: "25%",
              text: "Low evaporation",
              opacity: ".3",
              bottom: "100px"
            },

            medium: {
              width: "60%",
              text: "Moderate evaporation",
              opacity: ".65",
              bottom: "155px"
            },

            high: {
              width: "100%",
              text: "Highest evaporation in this model",
              opacity: "1",
              bottom: "220px"
            }

          };


          const value =
            values[energy];


          meterFill.style.width =
            value.width;


          meterText.textContent =
            value.text;


          vapor.style.opacity =
            value.opacity;


          vapor.style.bottom =
            value.bottom;
        };
    }
  );


  document.getElementById(
    "wcCheck1"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "wcFeedback1"
        );


      if (!energy) {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Choose an energy level first.";

        return;
      }


      if (energy === "high") {

        complete.one = true;

        feedback.style.color =
          "#087a35";

        feedback.innerHTML = `

          ✅
          <strong>
            SUN ENERGY SYSTEM ONLINE.
          </strong>

          <br><br>

          In this simplified model,
          greater incoming Sun energy
          produces greater evaporation
          from the ocean surface.

        `;

      } else {

        complete.one = false;

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Try again. Which condition provides the most energy for liquid water to evaporate in this model?";
      }


      updateMission();
    };


  /* ========================================================
     MISSION 2
     ======================================================== */


  const correctCycle =
    [
      "evaporation",
      "condensation",
      "precipitation",
      "collection"
    ];


  const icons = {

    evaporation:
      "⬆️ Evaporation",

    condensation:
      "☁️ Condensation",

    precipitation:
      "🌧️ Precipitation",

    collection:
      "🌊 Collection"

  };


  let cycleChoices = [];


  const processButtons =
    Array.from(
      document.querySelectorAll(
        ".wc-process-buttons button"
      )
    );


  function drawCycle() {

    for (
      let i = 0;
      i < 4;
      i += 1
    ) {

      const slot =
        document.getElementById(
          "wcSlot"
          +
          (i + 1)
        );


      slot.textContent =
        cycleChoices[i]
          ?
          icons[
            cycleChoices[i]
          ]
          :
          "?";
    }


    processButtons.forEach(
      function (button) {

        button.disabled =
          cycleChoices.includes(
            button.dataset.process
          );


        button.classList.toggle(
          "selected",
          cycleChoices.includes(
            button.dataset.process
          )
        );
      }
    );
  }


  processButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          if (
            cycleChoices.length >= 4
          ) {
            return;
          }


          cycleChoices.push(
            button.dataset.process
          );


          drawCycle();


          if (
            cycleChoices.length === 4
          ) {

            const correct =
              correctCycle.every(
                function (item, index) {

                  return (
                    cycleChoices[index]
                    ===
                    item
                  );
                }
              );


            const feedback =
              document.getElementById(
                "wcFeedback2"
              );


            if (correct) {

              complete.two = true;

              feedback.style.color =
                "#087a35";

              feedback.innerHTML = `

                ✅
                <strong>
                  WATER CYCLE PATH ONLINE.
                </strong>

                <br><br>

                Evaporation
                →
                Condensation
                →
                Precipitation
                →
                Collection

              `;

            } else {

              complete.two = false;

              feedback.style.color =
                "#b00020";

              feedback.innerHTML = `

                🔍
                Cycle error.

                <br><br>

                Start with liquid water
                leaving the ocean surface.

                Then ask what happens
                when water vapor cools.

              `;
            }


            updateMission();
          }
        };
    }
  );


  document.getElementById(
    "wcResetCycle"
  ).onclick =
    function () {

      cycleChoices =
        [];


      complete.two =
        false;


      document.getElementById(
        "wcFeedback2"
      ).style.color =
        "#111";


      document.getElementById(
        "wcFeedback2"
      ).textContent =
        "Start with water leaving the ocean surface.";


      drawCycle();

      updateMission();
    };


  drawCycle();


  /* ========================================================
     MISSION 3
     ======================================================== */


  let condition = null;


  const conditionButtons =
    Array.from(
      document.querySelectorAll(
        ".wc-condition-buttons button"
      )
    );


  conditionButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          conditionButtons.forEach(
            function (item) {

              item.classList.remove(
                "selected"
              );
            }
          );


          button.classList.add(
            "selected"
          );


          condition =
            button.dataset.condition;
        };
    }
  );


  document.getElementById(
    "wcCheck3"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "wcFeedback3"
        );


      const cloud =
        document.getElementById(
          "wcCloud"
        );


      const label =
        document.getElementById(
          "wcAirLabel"
        );


      if (!condition) {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Choose an air condition first.";

        return;
      }


      if (
        condition === "cooling"
      ) {

        complete.three = true;


        cloud.style.opacity =
          "1";


        cloud.style.transform =
          "translateX(-50%) scale(1)";


        label.textContent =
          "CONDENSATION";


        feedback.style.color =
          "#087a35";


        feedback.innerHTML = `

          ✅
          <strong>
            CLOUD FACTORY ONLINE.
          </strong>

          <br><br>

          As moist air cools,
          water vapor can condense
          into tiny liquid droplets.

          Many droplets together
          can form a cloud.

        `;

      } else {

        complete.three = false;


        cloud.style.opacity =
          ".1";


        cloud.style.transform =
          "translateX(-50%) scale(.65)";


        label.textContent =
          "WATER VAPOR";


        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Cloud formation requires condensation. What needs to happen to the moist air?";
      }


      updateMission();
    };


  /* ========================================================
     MISSION 4
     ======================================================== */


  const weatherItems = [

    {
      scenario:
        "Sunlight warms the surface of the ocean for several hours.",

      question:
        "Which change is most directly supported by the model?",

      choices: [
        "Some ocean water can evaporate into the atmosphere.",
        "All ocean water immediately becomes rain.",
        "The ocean turns into rock.",
        "Earth stops rotating."
      ],

      answer:
        0,

      explanation:
        "Sun energy can cause some surface water to evaporate into water vapor."
    },

    {
      scenario:
        "Moist air containing water vapor cools in the atmosphere.",

      question:
        "Which process can occur next?",

      choices: [
        "Condensation",
        "Erosion",
        "Revolution",
        "Magnetism"
      ],

      answer:
        0,

      explanation:
        "Cooling water vapor can condense into tiny liquid droplets that contribute to cloud formation."
    },

    {
      scenario:
        "A cloud contains many water droplets that continue combining and becoming larger.",

      question:
        "What may eventually occur?",

      choices: [
        "Precipitation",
        "The water disappears.",
        "Earth stops moving.",
        "The droplets become sunlight."
      ],

      answer:
        0,

      explanation:
        "When cloud droplets or ice particles become large enough, precipitation can fall."
    },

    {
      scenario:
        "Large amounts of ocean water evaporate and add water vapor to the atmosphere.",

      question:
        "How can this interaction affect weather?",

      choices: [
        "It can provide moisture that contributes to clouds and precipitation.",
        "It guarantees rain immediately.",
        "It removes all clouds from the atmosphere.",
        "It prevents water from returning to Earth."
      ],

      answer:
        0,

      explanation:
        "Ocean evaporation supplies atmospheric moisture that can contribute to cloud formation and precipitation."
    }

  ];


  let weatherIndex = 0;
  let weatherScore = 0;
  let weatherChoice = null;
  let weatherAnswered = false;


  const weatherScenario =
    document.getElementById(
      "wcWeatherScenario"
    );


  const weatherQuestion =
    document.getElementById(
      "wcWeatherQuestion"
    );


  const weatherChoices =
    document.getElementById(
      "wcWeatherChoices"
    );


  const weatherFeedback =
    document.getElementById(
      "wcFeedback4"
    );


  const weatherNext =
    document.getElementById(
      "wcNextWeather"
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
          "wc-weather-choice";


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


            weatherChoices
              .querySelectorAll(
                ".wc-weather-choice"
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
      "Select the explanation that matches the evidence.";


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
    "wcCheck4"
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
        "wcWeatherScore"
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
            WEATHER CONNECTION ONLINE.
          </strong>

          <br><br>

          You correctly solved
          ${weatherScore} of 4
          evidence files.

        `;

      } else {

        weatherFeedback.style.color =
          "#b00020";


        weatherFeedback.innerHTML = `

          Score:
          ${weatherScore} / 4

          <br><br>

          Review the chain:

          <strong>
            Sun → Ocean → Evaporation → Water Vapor → Clouds / Precipitation
          </strong>

        `;
      }


      weatherNext.disabled =
        true;


      updateMission();
    };


  drawWeather();

  updateMission();

})();
