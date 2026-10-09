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
      ["one","wfStatus1"],
      ["two","wfStatus2"],
      ["three","wfStatus3"],
      ["four","wfStatus4"]
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
        "wfFinalMessage"
      );


    if (
      count === 4
    ) {

      final.innerHTML = `

        🏆
        <strong>
          ALL WEATHER CASE FILES SOLVED!
        </strong>

        <br><br>

        You identified processes,
        selected supporting evidence,
        analyzed weather data,
        and rebuilt the complete
        Sun-ocean-atmosphere system.

        <br><br>

        <strong>
          WEATHER SYSTEMS INVESTIGATOR
          STATUS EARNED.
        </strong>

      `;

    } else {

      final.textContent =
        count
        +
        " of 4 classified cases solved.";
    }
  }


  /* ========================================================
     HELPER
     ======================================================== */


  function singleChoice(
    selector,
    callback
  ) {

    const buttons =
      Array.from(
        document.querySelectorAll(
          selector
        )
      );


    buttons.forEach(
      function (button) {

        button.onclick =
          function () {

            buttons.forEach(
              function (other) {

                other.classList.remove(
                  "selected"
                );
              }
            );


            button.classList.add(
              "selected"
            );


            callback(
              button
            );
          };
      }
    );
  }


  /* ========================================================
     CASE 1
     ======================================================== */


  let case1Process =
    null;


  const case1Evidence =
    new Set();


  singleChoice(
    "[data-case1]",
    function (button) {

      case1Process =
        button.dataset.case1;
    }
  );


  document.querySelectorAll(
    "[data-evidence1]"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          const key =
            button.dataset.evidence1;


          if (
            case1Evidence.has(
              key
            )
          ) {

            case1Evidence.delete(
              key
            );


            button.classList.remove(
              "selected"
            );

          } else {

            if (
              case1Evidence.size >= 2
            ) {
              return;
            }


            case1Evidence.add(
              key
            );


            button.classList.add(
              "selected"
            );
          }
        };
    }
  );


  document.getElementById(
    "wfCheck1"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "wfFeedback1"
        );


      if (
        !case1Process ||
        case1Evidence.size !== 2
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Choose one process and exactly TWO pieces of evidence.";

        return;
      }


      const hasWater =
        case1Evidence.has(
          "water"
        );


      const hasVapor =
        case1Evidence.has(
          "vapor"
        );


      const hasSun =
        case1Evidence.has(
          "sun"
        );


      const strongEvidence =
        (
          hasWater &&
          hasVapor
        )
        ||
        (
          hasSun &&
          hasVapor
        );


      if (
        case1Process ===
        "evaporation"
        &&
        strongEvidence
      ) {

        complete.one =
          true;


        feedback.style.color =
          "#087a35";


        feedback.innerHTML = `

          ✅
          <strong>
            CASE FILE 1 SOLVED:
            EVAPORATION
          </strong>

          <br><br>

          Water decreased
          at the ocean surface
          while atmospheric water vapor increased.

          <br><br>

          High solar energy
          also supports increased
          evaporation potential.

        `;

      } else {

        complete.one =
          false;


        feedback.style.color =
          "#b00020";


        feedback.innerHTML = `

          🔍 Case remains open.

          <br><br>

          Track where the water moved:
          surface water decreased
          while atmospheric water vapor increased.

        `;
      }


      updateMission();
    };


  /* ========================================================
     CASE 2
     ======================================================== */


  let case2Process =
    null;


  let pair2 =
    null;


  singleChoice(
    "[data-case2]",
    function (button) {

      case2Process =
        button.dataset.case2;
    }
  );


  singleChoice(
    "[data-pair2]",
    function (button) {

      pair2 =
        button.dataset.pair2;
    }
  );


  document.getElementById(
    "wfCheck2"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "wfFeedback2"
        );


      if (
        !case2Process ||
        !pair2
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Choose the process and the strongest evidence pair.";

        return;
      }


      if (
        case2Process ===
        "condensation"
        &&
        pair2 ===
        "A"
      ) {

        complete.two =
          true;


        document.getElementById(
          "wfCase2Cloud"
        ).style.transform =
          "scale(1.15)";


        feedback.style.color =
          "#087a35";


        feedback.innerHTML = `

          ✅
          <strong>
            CASE FILE 2 SOLVED:
            CONDENSATION
          </strong>

          <br><br>

          Moisture was already present.

          As the air cooled,
          cloud cover increased.

          Those observations support
          water vapor condensing
          into cloud droplets.

        `;

      } else {

        complete.two =
          false;


        feedback.style.color =
          "#b00020";


        feedback.innerHTML = `

          🔍 Case remains open.

          <br><br>

          Look for the evidence pair:

          <strong>
            moisture + cooling
          </strong>

          and ask what process
          can produce cloud droplets.

        `;
      }


      updateMission();
    };


  /* ========================================================
     CASE 3
     ======================================================== */


  let case3 =
    null;


  let forecast3 =
    null;


  singleChoice(
    "[data-case3]",
    function (button) {

      case3 =
        button.dataset.case3;
    }
  );


  singleChoice(
    "[data-forecast3]",
    function (button) {

      forecast3 =
        button.dataset.forecast3;
    }
  );


  document.getElementById(
    "wfCheck3"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "wfFeedback3"
        );


      if (
        !case3 ||
        !forecast3
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Choose both the pattern and the forecast.";

        return;
      }


      if (
        case3 === "A"
        &&
        forecast3 === "B"
      ) {

        complete.three =
          true;


        feedback.style.color =
          "#087a35";


        feedback.innerHTML = `

          ✅
          <strong>
            CASE FILE 3 SOLVED!
          </strong>

          <br><br>

          Temperature decreased
          while cloud cover
          and precipitation increased.

          <br><br>

          The evidence supports
          cooler,
          cloudy conditions
          with precipitation still possible.

          It does not guarantee
          exactly what will happen next.

        `;

      } else {

        complete.three =
          false;


        feedback.style.color =
          "#b00020";


        feedback.innerHTML = `

          🔍 Case remains open.

          <br><br>

          Compare Day 1
          with Day 4.

          What happened to temperature,
          clouds,
          and precipitation?

        `;
      }


      updateMission();
    };


  /* ========================================================
     CASE 4
     ======================================================== */


  const correctSystem =
    [
      "sun",
      "ocean",
      "evaporation",
      "vapor",
      "condensation",
      "precipitation"
    ];


  const labels = {

    sun:
      "☀️ Sun Energy",

    ocean:
      "🌊 Ocean Water",

    evaporation:
      "⬆️ Evaporation",

    vapor:
      "💨 Water Vapor",

    condensation:
      "💧 Condensation / ☁️ Clouds",

    precipitation:
      "🌧️ Possible Precipitation"

  };


  let systemChoices =
    [];


  let finalAnswer =
    null;


  const systemButtons =
    Array.from(
      document.querySelectorAll(
        "[data-system]"
      )
    );


  function drawSystem() {

    for (
      let i = 0;
      i < 6;
      i += 1
    ) {

      const slot =
        document.getElementById(
          "wfSystemSlot"
          +
          (i + 1)
        );


      slot.textContent =
        systemChoices[i]
          ?
          labels[
            systemChoices[i]
          ]
          :
          "?";
    }


    systemButtons.forEach(
      function (button) {

        const used =
          systemChoices.includes(
            button.dataset.system
          );


        button.disabled =
          used;


        button.classList.toggle(
          "selected",
          used
        );
      }
    );
  }


  systemButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          if (
            systemChoices.length >= 6
          ) {
            return;
          }


          systemChoices.push(
            button.dataset.system
          );


          drawSystem();
        };
    }
  );


  document.getElementById(
    "wfResetSystem"
  ).onclick =
    function () {

      systemChoices =
        [];


      complete.four =
        false;


      document.getElementById(
        "wfFeedback4"
      ).style.color =
        "#111";


      document.getElementById(
        "wfFeedback4"
      ).textContent =
        "Rebuild the system and select the correct systems statement.";


      drawSystem();

      updateMission();
    };


  singleChoice(
    "[data-final]",
    function (button) {

      finalAnswer =
        button.dataset.final;
    }
  );


  document.getElementById(
    "wfCheck4"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "wfFeedback4"
        );


      if (
        systemChoices.length !== 6
        ||
        !finalAnswer
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Complete all six system slots and choose the final systems statement.";

        return;
      }


      const chainCorrect =
        correctSystem.every(
          function (
            item,
            index
          ) {

            return (
              systemChoices[index]
              ===
              item
            );
          }
        );


      if (
        chainCorrect
        &&
        finalAnswer === "B"
      ) {

        complete.four =
          true;


        feedback.style.color =
          "#087a35";


        feedback.innerHTML = `

          🚨✅
          <strong>
            MISSION CONTROL RESTORED!
          </strong>

          <br><br>

          Sun Energy
          →
          Ocean Water
          →
          Evaporation
          →
          Water Vapor
          →
          Condensation / Clouds
          →
          Possible Precipitation

          <br><br>

          More evaporation
          can add more atmospheric moisture,
          but additional conditions
          are needed for clouds
          and precipitation.

        `;

      } else {

        complete.four =
          false;


        feedback.style.color =
          "#b00020";


        feedback.innerHTML = `

          ⚠️ SYSTEM ERROR.

          <br><br>

          Rebuild the cause-and-effect chain
          from energy source
          to possible precipitation.

        `;
      }


      updateMission();
    };


  drawSystem();

  updateMission();

})();
