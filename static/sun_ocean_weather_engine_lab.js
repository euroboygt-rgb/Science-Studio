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
      ["one","weStatus1"],
      ["two","weStatus2"],
      ["three","weStatus3"],
      ["four","weStatus4"]
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
          done ? "🟢" : "🔴";

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
        "weFinalMessage"
      );


    if (count === 4) {

      final.innerHTML = `

        🏆
        <strong>
          WEATHER ENGINE FULLY ONLINE!
        </strong>

        <br><br>

        You connected solar energy,
        ocean water,
        evaporation,
        atmospheric moisture,
        condensation,
        clouds,
        and precipitation.

        <br><br>

        <strong>
          SUN + OCEAN WEATHER SYSTEMS SPECIALIST
          STATUS EARNED.
        </strong>

      `;

    } else {

      final.textContent =
        count
        +
        " of 4 Earth systems restored.";
    }
  }


  /* ========================================================
     MISSION 1
     ======================================================== */

  let sun = null;
  let ocean = null;


  const sunButtons =
    Array.from(
      document.querySelectorAll(
        "[data-sun]"
      )
    );


  const oceanButtons =
    Array.from(
      document.querySelectorAll(
        "[data-ocean]"
      )
    );


  const evapFill =
    document.getElementById(
      "weEvapFill"
    );


  const evapText =
    document.getElementById(
      "weEvapText"
    );


  const vapor =
    document.getElementById(
      "weVapor"
    );


  function calculateEvaporation() {

    if (!sun || !ocean) {
      return;
    }


    const sunScore = {
      low: 1,
      medium: 2,
      high: 3
    }[sun];


    const oceanScore =
      ocean === "warm"
        ? 1
        : 0;


    const score =
      sunScore + oceanScore;


    const values = {
      1: ["20%","LOW"],
      2: ["40%","LOW-MODERATE"],
      3: ["65%","MODERATE-HIGH"],
      4: ["100%","HIGHEST IN THIS MODEL"]
    };


    const value =
      values[score];


    evapFill.style.width =
      value[0];


    evapText.textContent =
      value[1];


    vapor.style.opacity =
      String(
        Math.min(
          1,
          .15 + score * .2
        )
      );


    vapor.style.bottom =
      (
        55 + score * 38
      )
      +
      "px";
  }


  sunButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          sunButtons.forEach(
            function (item) {
              item.classList.remove("selected");
            }
          );

          button.classList.add("selected");

          sun =
            button.dataset.sun;

          calculateEvaporation();
        };
    }
  );


  oceanButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          oceanButtons.forEach(
            function (item) {
              item.classList.remove("selected");
            }
          );

          button.classList.add("selected");

          ocean =
            button.dataset.ocean;

          calculateEvaporation();
        };
    }
  );


  document.getElementById(
    "weCheck1"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "weFeedback1"
        );


      if (!sun || !ocean) {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Set both solar energy and ocean surface condition.";

        return;
      }


      if (
        sun === "high"
        &&
        ocean === "warm"
      ) {

        complete.one = true;

        feedback.style.color =
          "#087a35";

        feedback.innerHTML = `

          ✅
          <strong>
            ENERGY + OCEAN SYSTEM ONLINE.
          </strong>

          <br><br>

          In this simplified model,
          high solar energy
          interacting with a warmer ocean surface
          produces the greatest evaporation potential.

          <br><br>

          Other settings can still produce evaporation.

        `;

      } else {

        complete.one = false;

        feedback.style.color =
          "#b00020";

        feedback.innerHTML = `

          Evaporation is occurring,
          but this is not the highest-potential
          condition in our model.

          <br><br>

          Try increasing the energy
          available at the ocean surface.

        `;
      }


      updateMission();
    };


  /* ========================================================
     MISSION 2
     ======================================================== */

  let moistureAnswer = null;


  const moistureButtons =
    Array.from(
      document.querySelectorAll(
        "[data-moisture-answer]"
      )
    );


  moistureButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          moistureButtons.forEach(
            function (item) {
              item.classList.remove("selected");
            }
          );

          button.classList.add("selected");

          moistureAnswer =
            button.dataset.moistureAnswer;
        };
    }
  );


  document.getElementById(
    "weCheck2"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "weFeedback2"
        );


      if (!moistureAnswer) {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Choose a relationship first.";

        return;
      }


      if (
        moistureAnswer === "A"
      ) {

        complete.two = true;

        document.getElementById(
          "weMoistureLevel"
        ).textContent =
          "HIGH";


        const cloud =
          document.getElementById(
            "weMoistureCloud"
          );


        cloud.style.opacity =
          "1";


        cloud.style.transform =
          "scale(1.25)";


        feedback.style.color =
          "#087a35";


        feedback.innerHTML = `

          ✅
          <strong>
            ATMOSPHERIC MOISTURE SYSTEM ONLINE.
          </strong>

          <br><br>

          Evaporation transfers water
          from the ocean
          into the atmosphere
          as water vapor.

        `;

      } else {

        complete.two = false;

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Try again. Evaporation moves liquid water into the atmosphere as water vapor.";
      }


      updateMission();
    };


  /* ========================================================
     MISSION 3
     ======================================================== */

  let cooling = null;
  let growth = null;


  const coolingButtons =
    Array.from(
      document.querySelectorAll(
        "[data-cooling]"
      )
    );


  const growthButtons =
    Array.from(
      document.querySelectorAll(
        "[data-growth]"
      )
    );


  coolingButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          coolingButtons.forEach(
            function (item) {
              item.classList.remove("selected");
            }
          );

          button.classList.add("selected");

          cooling =
            button.dataset.cooling;


          document.getElementById(
            "weReadCooling"
          ).textContent =
            cooling === "cool"
              ? "COOLING"
              : "WARM";
        };
    }
  );


  growthButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          growthButtons.forEach(
            function (item) {
              item.classList.remove("selected");
            }
          );

          button.classList.add("selected");

          growth =
            button.dataset.growth;


          document.getElementById(
            "weReadGrowth"
          ).textContent =
            growth === "large"
              ? "GROWING"
              : "SMALL";
        };
    }
  );


  document.getElementById(
    "weRunWeather"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "weFeedback3"
        );


      const cloud =
        document.getElementById(
          "weCloud"
        );


      const rain =
        document.getElementById(
          "weRain"
        );


      if (!cooling || !growth) {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Set both air condition and cloud-particle growth.";

        return;
      }


      if (
        cooling === "cool"
      ) {

        cloud.style.opacity =
          "1";

        cloud.style.transform =
          "scale(1)";

      } else {

        cloud.style.opacity =
          ".08";

        cloud.style.transform =
          "scale(.7)";
      }


      if (
        cooling === "cool"
        &&
        growth === "large"
      ) {

        complete.three = true;

        rain.style.opacity =
          "1";


        feedback.style.color =
          "#087a35";


        feedback.innerHTML = `

          ✅
          <strong>
            CLOUD / WEATHER SYSTEM ONLINE.
          </strong>

          <br><br>

          Moist air cooled,
          allowing condensation.

          <br><br>

          Cloud particles then grew
          enough for precipitation
          to become possible in this model.

        `;

      } else if (
        cooling === "cool"
        &&
        growth === "small"
      ) {

        complete.three = false;

        rain.style.opacity =
          ".05";


        feedback.style.color =
          "#b00020";


        feedback.innerHTML = `

          ☁️ A cloud can form,
          but precipitation
          is not guaranteed.

          <br><br>

          The particles in this model
          remain too small
          to fall as precipitation.

        `;

      } else {

        complete.three = false;

        rain.style.opacity =
          ".05";


        feedback.style.color =
          "#b00020";


        feedback.innerHTML = `

          Moisture is present,
          but suitable condensation conditions
          are missing in this simplified model.

          <br><br>

          Try cooling the moist air.

        `;
      }


      updateMission();
    };


  /* ========================================================
     MISSION 4
     ======================================================== */

  const cases = [

    {
      scenario:
        "Solar energy increases at the ocean surface. Evaporation also increases.",

      question:
        "Which change is most directly expected next?",

      choices: [
        "More water vapor may enter the atmosphere.",
        "Rain must immediately fall.",
        "The ocean disappears.",
        "Clouds stop forming forever."
      ],

      answer: 0,

      explanation:
        "Greater evaporation can transfer more ocean water into the atmosphere as water vapor."
    },

    {
      scenario:
        "Atmospheric moisture is high, but the moist air remains warm and does not cool enough for strong condensation.",

      question:
        "Which conclusion is best supported?",

      choices: [
        "Heavy rain is guaranteed.",
        "Moisture is present, but cloud formation still depends on suitable conditions.",
        "There is no water vapor.",
        "Evaporation never occurred."
      ],

      answer: 1,

      explanation:
        "Atmospheric moisture alone does not guarantee condensation, clouds, or precipitation."
    },

    {
      scenario:
        "Moist air cools. Tiny droplets form and create a visible cloud, but the droplets remain very small.",

      question:
        "What should the model predict?",

      choices: [
        "A cloud can exist without immediate precipitation.",
        "All clouds must produce heavy rain.",
        "The droplets become rocks.",
        "The ocean has stopped evaporating."
      ],

      answer: 0,

      explanation:
        "Cloud formation and precipitation are connected but are not the same process."
    },

    {
      scenario:
        "Sun energy warms ocean water → evaporation increases → moist air later cools → condensation forms clouds → cloud particles grow.",

      question:
        "Which statement best describes the entire system?",

      choices: [
        "The Sun and ocean interact in the water cycle and can affect weather.",
        "Only the ocean affects weather.",
        "Only the Sun affects weather.",
        "The processes are unrelated."
      ],

      answer: 0,

      explanation:
        "This sequence directly connects solar energy, ocean water, atmospheric moisture, clouds, and weather."
    }

  ];


  let caseIndex = 0;
  let caseScore = 0;
  let caseChoice = null;
  let caseAnswered = false;


  const caseBox =
    document.getElementById(
      "weCase"
    );


  const questionBox =
    document.getElementById(
      "weQuestion4"
    );


  const choicesBox =
    document.getElementById(
      "weChoices4"
    );


  const feedbackBox =
    document.getElementById(
      "weFeedback4"
    );


  const nextButton =
    document.getElementById(
      "weNext4"
    );


  function drawCase() {

    caseChoice = null;
    caseAnswered = false;


    const item =
      cases[caseIndex];


    caseBox.innerHTML = `

      <strong>
        SYSTEM CASE
        ${caseIndex + 1}
      </strong>

      <br><br>

      ${item.scenario}

    `;


    questionBox.textContent =
      item.question;


    choicesBox.innerHTML =
      "";


    item.choices.forEach(
      function (choice,index) {

        const button =
          document.createElement(
            "button"
          );


        button.type =
          "button";


        button.className =
          "we-choice";


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


            choicesBox
              .querySelectorAll(
                ".we-choice"
              )
              .forEach(
                function (other) {
                  other.classList.remove("selected");
                }
              );


            button.classList.add("selected");

            caseChoice = index;
          };


        choicesBox.appendChild(
          button
        );
      }
    );


    feedbackBox.style.color =
      "#111";


    feedbackBox.textContent =
      "Select the explanation supported by all evidence.";


    nextButton.disabled =
      true;


    nextButton.textContent =
      caseIndex === cases.length - 1
        ? "COMPLETE WEATHER ENGINE →"
        : "NEXT SYSTEM CASE →";
  }


  document.getElementById(
    "weCheck4"
  ).onclick =
    function () {

      if (caseChoice === null) {

        feedbackBox.style.color =
          "#b00020";

        feedbackBox.textContent =
          "Choose an answer before checking.";

        return;
      }


      if (caseAnswered) {
        return;
      }


      caseAnswered = true;


      const item =
        cases[caseIndex];


      if (
        caseChoice === item.answer
      ) {

        caseScore += 1;

        feedbackBox.style.color =
          "#087a35";

        feedbackBox.innerHTML = `

          ✅
          <strong>
            Correct diagnosis!
          </strong>

          ${item.explanation}

        `;

      } else {

        feedbackBox.style.color =
          "#b00020";

        feedbackBox.innerHTML = `

          🔍
          <strong>
            System review:
          </strong>

          ${item.explanation}

        `;
      }


      document.getElementById(
        "weScore4"
      ).textContent =
        caseScore
        +
        " / "
        +
        cases.length;


      nextButton.disabled =
        false;
    };


  nextButton.onclick =
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


      complete.four =
        caseScore >= 3;


      if (complete.four) {

        feedbackBox.style.color =
          "#087a35";

        feedbackBox.innerHTML = `

          🏆
          <strong>
            FULL SYSTEM DIAGNOSIS COMPLETE!
          </strong>

          <br><br>

          ${caseScore} of 4
          Earth-system cases solved.

        `;

      } else {

        feedbackBox.style.color =
          "#b00020";

        feedbackBox.innerHTML = `

          Score:
          ${caseScore} / 4

          <br><br>

          Review the chain:

          Sun → Ocean → Evaporation →
          Moisture → Condensation →
          Clouds → Possible Precipitation

        `;
      }


      nextButton.disabled =
        true;


      updateMission();
    };


  drawCase();

  updateMission();

})();
