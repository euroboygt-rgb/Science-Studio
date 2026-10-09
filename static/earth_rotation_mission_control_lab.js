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
      ["one", "mcStatus1"],
      ["two", "mcStatus2"],
      ["three", "mcStatus3"],
      ["four", "mcStatus4"]
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


    const final =
      document.getElementById(
        "mcFinalMessage"
      );


    const count =
      Object.values(
        complete
      ).filter(Boolean).length;


    if (count === 4) {

      final.innerHTML = `

        🏆
        <strong>
          ALL SYSTEMS ONLINE!
        </strong>

        <br><br>

        Earth Rotation Mission Control
        has been fully restored.

        <br><br>

        <strong>
          EARTH ROTATION MISSION COMMANDER
          STATUS EARNED.
        </strong>

      `;

    } else {

      final.textContent =
        count
        +
        " of 4 systems restored.";
    }
  }


  /* ========================================================
     SYSTEM 1
     ======================================================== */


  let choice1 = null;


  const system1Buttons =
    Array.from(
      document.querySelectorAll(
        "[data-system1]"
      )
    );


  system1Buttons.forEach(
    function (button) {

      button.onclick =
        function () {

          system1Buttons.forEach(
            function (item) {

              item.classList.remove(
                "selected"
              );
            }
          );

          button.classList.add(
            "selected"
          );

          choice1 =
            button.dataset.system1;
        };
    }
  );


  document.getElementById(
    "mcCheck1"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "mcFeedback1"
        );


      if (!choice1) {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Select an Earth-motion program.";

        return;
      }


      if (choice1 === "A") {

        complete.one = true;

        feedback.style.color =
          "#087a35";

        feedback.innerHTML = `

          ✅
          <strong>
            ROTATION CORE ONLINE.
          </strong>

          <br><br>

          Earth rotates around its axis
          approximately once every 24 hours.

        `;

      } else {

        complete.one = false;

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "System error. Rotation is not the same as one yearly revolution.";
      }


      updateMission();
    };


  /* ========================================================
     SYSTEM 2
     ======================================================== */


  const dayNight = {

    day: {
      x: 525,
      y: 250,
      label:
        "DAY — Mission Base faces the Sun."
    },

    sunset: {
      x: 675,
      y: 375,
      label:
        "SUNSET — Mission Base is rotating into darkness."
    },

    night: {
      x: 825,
      y: 250,
      label:
        "NIGHT — Mission Base faces away from the Sun."
    },

    sunrise: {
      x: 675,
      y: 125,
      label:
        "SUNRISE — Mission Base is rotating back into sunlight."
    },

    day2: {
      x: 525,
      y: 250,
      label:
        "DAY AGAIN — one full cycle is complete."
    }

  };


  const location =
    document.getElementById(
      "mcLocation"
    );


  const dayLabel =
    document.getElementById(
      "mcDayNightLabel"
    );


  const dayButtons =
    Array.from(
      document.querySelectorAll(
        ".mc-time-buttons button"
      )
    );


  const visited =
    new Set();


  function setDayStage(stage) {

    const info =
      dayNight[stage];


    location.setAttribute(
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


    dayLabel.textContent =
      info.label;


    dayButtons.forEach(
      function (button) {

        button.classList.toggle(
          "selected",
          button.dataset.stage === stage
        );
      }
    );


    visited.add(
      stage
    );


    if (
      [
        "day",
        "sunset",
        "night",
        "sunrise",
        "day2"
      ].every(
        function (item) {

          return visited.has(item);
        }
      )
    ) {

      complete.two = true;

      document.getElementById(
        "mcFeedback2"
      ).innerHTML = `

        ✅
        <strong>
          DAY / NIGHT ARRAY ONLINE.
        </strong>

        <br><br>

        Earth rotation moves locations
        through:

        Day → Sunset → Night → Sunrise → Day.

      `;

      document.getElementById(
        "mcFeedback2"
      ).style.color =
        "#087a35";


      updateMission();
    }
  }


  dayButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          setDayStage(
            button.dataset.stage
          );
        };
    }
  );


  setDayStage(
    "day"
  );


  /* ========================================================
     SYSTEM 3
     ======================================================== */


  let earthDirection = null;
  let sunDirection = null;


  const earthDirectionButtons =
    Array.from(
      document.querySelectorAll(
        "[data-earth-direction]"
      )
    );


  const sunDirectionButtons =
    Array.from(
      document.querySelectorAll(
        "[data-sun-direction]"
      )
    );


  earthDirectionButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          earthDirectionButtons.forEach(
            function (item) {

              item.classList.remove(
                "selected"
              );
            }
          );

          button.classList.add(
            "selected"
          );

          earthDirection =
            button.dataset.earthDirection;
        };
    }
  );


  sunDirectionButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          sunDirectionButtons.forEach(
            function (item) {

              item.classList.remove(
                "selected"
              );
            }
          );

          button.classList.add(
            "selected"
          );

          sunDirection =
            button.dataset.sunDirection;
        };
    }
  );


  document.getElementById(
    "mcCheck3"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "mcFeedback3"
        );


      if (
        !earthDirection ||
        !sunDirection
      ) {

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Set both directions first.";

        return;
      }


      if (
        earthDirection ===
        "west-east"
        &&
        sunDirection ===
        "east-west"
      ) {

        complete.three = true;

        feedback.style.color =
          "#087a35";

        feedback.innerHTML = `

          ✅
          <strong>
            NAVIGATION ONLINE.
          </strong>

          <br><br>

          Earth rotates west → east.

          <br>

          The Sun appears to move
          east → west.

        `;

      } else {

        complete.three = false;

        feedback.style.color =
          "#b00020";

        feedback.textContent =
          "Navigation error. Earth's actual rotation and the Sun's apparent motion are opposite directions.";
      }


      updateMission();
    };


  /* ========================================================
     SYSTEM 4
     ======================================================== */


  const shadowCases = [

    {
      title:
        "CASE 1 — Long shadow extends WEST.",

      width:
        260,

      transform:
        "translateX(-260px)",

      choices: [
        "Sun low in EAST",
        "Sun high overhead",
        "Sun low in WEST"
      ],

      answer:
        0,

      explanation:
        "A westward shadow points away from a Sun toward the east. Its long length suggests a lower Sun."
    },

    {
      title:
        "CASE 2 — Shadow is very SHORT.",

      width:
        65,

      transform:
        "translateX(0)",

      choices: [
        "Sun low in EAST",
        "Sun higher in the sky",
        "No Sun is present"
      ],

      answer:
        1,

      explanation:
        "A shorter shadow generally indicates the Sun appears higher in the sky."
    },

    {
      title:
        "CASE 3 — Long shadow extends EAST.",

      width:
        260,

      transform:
        "translateX(0)",

      choices: [
        "Sun low in EAST",
        "Sun high overhead",
        "Sun low in WEST"
      ],

      answer:
        2,

      explanation:
        "An eastward shadow points away from a Sun toward the west. Its long length suggests a lower Sun."
    }

  ];


  let shadowIndex = 0;
  let shadowScore = 0;
  let shadowChoice = null;
  let shadowAnswered = false;


  const shadowCase =
    document.getElementById(
      "mcShadowCase"
    );

  const shadowLine =
    document.getElementById(
      "mcShadowLine"
    );

  const shadowChoices =
    document.getElementById(
      "mcShadowChoices"
    );

  const shadowFeedback =
    document.getElementById(
      "mcFeedback4"
    );

  const shadowNext =
    document.getElementById(
      "mcNextShadow"
    );


  function drawShadow() {

    shadowChoice = null;
    shadowAnswered = false;


    const item =
      shadowCases[
        shadowIndex
      ];


    shadowCase.innerHTML = `

      <strong>
        ${item.title}
      </strong>

      <br><br>

      Use direction and length
      to infer the Sun's apparent position.

    `;


    shadowLine.style.width =
      item.width
      +
      "px";


    shadowLine.style.transform =
      item.transform;


    shadowChoices.innerHTML =
      "";


    item.choices.forEach(
      function (choice, index) {

        const button =
          document.createElement(
            "button"
          );


        button.type =
          "button";


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

            if (shadowAnswered) {
              return;
            }


            shadowChoices
              .querySelectorAll(
                "button"
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


            shadowChoice =
              index;
          };


        shadowChoices.appendChild(
          button
        );
      }
    );


    shadowFeedback.style.color =
      "#111";


    shadowFeedback.textContent =
      "Select the best Sun position.";


    shadowNext.disabled =
      true;


    shadowNext.textContent =
      shadowIndex ===
      shadowCases.length - 1
        ?
        "RESTORE SHADOW SYSTEM →"
        :
        "NEXT SHADOW CASE →";
  }


  document.getElementById(
    "mcCheck4"
  ).onclick =
    function () {

      if (
        shadowChoice === null
      ) {

        shadowFeedback.style.color =
          "#b00020";

        shadowFeedback.textContent =
          "Select a Sun position first.";

        return;
      }


      if (shadowAnswered) {
        return;
      }


      shadowAnswered =
        true;


      const item =
        shadowCases[
          shadowIndex
        ];


      if (
        shadowChoice ===
        item.answer
      ) {

        shadowScore += 1;

        shadowFeedback.style.color =
          "#087a35";

        shadowFeedback.innerHTML = `

          ✅
          <strong>
            Correct.
          </strong>

          ${item.explanation}

        `;

      } else {

        shadowFeedback.style.color =
          "#b00020";

        shadowFeedback.innerHTML = `

          🔍
          <strong>
            Evidence review:
          </strong>

          ${item.explanation}

        `;
      }


      document.getElementById(
        "mcShadowScore"
      ).textContent =
        shadowScore
        +
        " / "
        +
        shadowCases.length;


      shadowNext.disabled =
        false;
    };


  shadowNext.onclick =
    function () {

      if (!shadowAnswered) {
        return;
      }


      if (
        shadowIndex <
        shadowCases.length - 1
      ) {

        shadowIndex += 1;

        drawShadow();

        return;
      }


      complete.four =
        shadowScore >= 2;


      if (complete.four) {

        shadowFeedback.style.color =
          "#087a35";

        shadowFeedback.innerHTML = `

          ✅
          <strong>
            SHADOW TRACKER ONLINE.
          </strong>

          <br><br>

          ${shadowScore} of 3
          evidence cases solved.

        `;

      } else {

        shadowFeedback.style.color =
          "#b00020";

        shadowFeedback.innerHTML = `

          Shadow Tracker still requires calibration.

          <br><br>

          Remember:

          shadows extend generally
          away from the Sun.

        `;
      }


      shadowNext.disabled =
        true;


      updateMission();
    };


  drawShadow();

  updateMission();

})();
