(function () {
  "use strict";


  const complete = {
    one: false,
    two: false,
    three: false,
    four: false
  };


  function updateStatus() {

    [
      ["one","ffStatus1"],
      ["two","ffStatus2"],
      ["three","ffStatus3"],
      ["four","ffStatus4"]
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
        "ffFinalMessage"
      );


    if (
      count === 4
    ) {

      final.innerHTML = `

        🏆
        <strong>
          FOSSIL FUEL TIME MACHINE COMPLETE!
        </strong>

        <br><br>

        You modeled ancient organic material,
        burial,
        deep layers,
        heat,
        pressure,
        and very long geologic time.

        <br><br>

        You also proved:

        <strong>
          FOSSIL ≠ FOSSIL FUEL
        </strong>

        <br><br>

        <strong>
          FOSSIL FUEL TIME TRAVELER
          STATUS EARNED.
        </strong>

      `;

    } else {

      final.textContent =
        count
        +
        " of 4 missions complete.";
    }
  }


  /* ========================================================
     GENERIC QUIZ
     ======================================================== */


  function makeQuiz(config) {

    let index = 0;
    let score = 0;
    let selected = null;
    let answered = false;


    const evidence =
      document.getElementById(
        config.evidenceId
      );


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


    function draw() {

      const item =
        config.items[index];


      selected = null;
      answered = false;


      evidence.innerHTML =
        item.evidence;


      question.innerHTML =
        "<strong>"
        +
        item.question
        +
        "</strong>";


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
            "ff-choice";


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


              choices
                .querySelectorAll(
                  ".ff-choice"
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
          "COMPLETE MISSION →"
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
            "Choose an answer first.";

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


          feedback.innerHTML =
            "✅ <strong>Correct!</strong> "
            +
            item.explanation;

        } else {

          feedback.style.color =
            "#b00020";


          feedback.innerHTML =
            "🔍 <strong>Review:</strong> "
            +
            item.explanation;
        }


        document.getElementById(
          config.scoreId
        ).textContent =
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


          feedback.innerHTML =
            "🏆 <strong>MISSION COMPLETE!</strong><br><br>Score: "
            +
            score
            +
            " / "
            +
            config.items.length;

        } else {

          feedback.style.color =
            "#b00020";


          feedback.innerHTML =
            "Score: "
            +
            score
            +
            " / "
            +
            config.items.length
            +
            "<br><br>Review the evidence before trying again.";
        }


        next.disabled =
          true;


        updateStatus();
      };


    draw();
  }


  /* ========================================================
     MISSION 1
     ======================================================== */


  makeQuiz({

    level:
      "one",

    evidenceId:
      "ffEvidence1",

    questionId:
      "ffQuestion1",

    choicesId:
      "ffChoices1",

    checkId:
      "ffCheck1",

    feedbackId:
      "ffFeedback1",

    nextId:
      "ffNext1",

    scoreId:
      "ffScore1",

    passScore:
      3,

    startText:
      "Fossil ≠ Fossil Fuel",

    items: [

      {
        evidence:
          "🦴 Preserved evidence of an organism that lived long ago.",

        question:
          "What is being described?",

        choices: [
          "Fossil",
          "Fossil fuel",
          "Renewable fuel",
          "Weather"
        ],

        answer:
          0,

        explanation:
          "A fossil is preserved evidence of past life."
      },

      {
        evidence:
          "⚫🛢️🔥 Coal, petroleum, and natural gas.",

        question:
          "What are these examples of?",

        choices: [
          "Fossils only",
          "Fossil fuels",
          "Minerals",
          "Weathering"
        ],

        answer:
          1,

        explanation:
          "Coal, petroleum, and natural gas are fossil fuels."
      },

      {
        evidence:
          "🐟 A preserved fish body shape is discovered in sedimentary rock.",

        question:
          "Which statement is best?",

        choices: [
          "It is fossil evidence.",
          "It is automatically gasoline.",
          "It must be coal.",
          "It is renewable energy."
        ],

        answer:
          0,

        explanation:
          "The preserved evidence is a fossil; it is not automatically fossil fuel."
      },

      {
        evidence:
          "🌿⬇️♨️🗜️🕰️ Ancient organic material is buried and changed over extremely long periods under suitable conditions.",

        question:
          "Which product can this describe?",

        choices: [
          "A fossil fuel",
          "A rainbow",
          "A magnet",
          "A cloud"
        ],

        answer:
          0,

        explanation:
          "This evidence describes the general fossil-fuel formation pathway."
      }

    ]

  });


  /* ========================================================
     MISSION 2
     ======================================================== */


  let source =
    null;


  let layerCount =
    0;


  const sourceButtons =
    Array.from(
      document.querySelectorAll(
        "[data-source]"
      )
    );


  sourceButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          if (complete.two) {
            return;
          }


          sourceButtons.forEach(
            function (other) {

              other.classList.remove(
                "selected"
              );
            }
          );


          button.classList.add(
            "selected"
          );


          source =
            button.dataset.source;


          document.getElementById(
            "ffSourceMaterial"
          ).innerHTML =
            source === "plants"
              ?
              "🌿 ANCIENT PLANT MATERIAL"
              :
              "🦠 TINY ANCIENT ORGANISMS";
        };
    }
  );


  document.getElementById(
    "ffAddSediment"
  ).onclick =
    function () {

      if (!complete.one) {

        document.getElementById(
          "ffFeedback2"
        ).style.color =
          "#b00020";


        document.getElementById(
          "ffFeedback2"
        ).textContent =
          "Complete Mission 1 before entering the burial chamber.";

        return;
      }


      if (!source) {

        document.getElementById(
          "ffFeedback2"
        ).style.color =
          "#b00020";


        document.getElementById(
          "ffFeedback2"
        ).textContent =
          "Select ancient organic material first.";

        return;
      }


      if (
        layerCount >= 4
      ) {
        return;
      }


      layerCount += 1;


      const layer =
        document.createElement(
          "div"
        );


      layer.className =
        "ff-sediment-layer";


      layer.textContent =
        "SEDIMENT LAYER "
        +
        layerCount;


      const sedimentStack =
        document.getElementById(
          "ffSedimentStack"
        );


      sedimentStack.insertBefore(
        layer,
        sedimentStack.firstElementChild
      );


      document.getElementById(
        "ffLayerCount"
      ).textContent =
        layerCount
        +
        " / 4";


      document.getElementById(
        "ffFeedback2"
      ).style.color =
        "#111";


      document.getElementById(
        "ffFeedback2"
      ).textContent =
        "Deposition added another layer above the ancient organic material.";
    };


  document.getElementById(
    "ffCheck2"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "ffFeedback2"
        );


      if (!complete.one) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Complete Mission 1 first.";

        return;
      }


      if (!source) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Select ancient organic material.";

        return;
      }


      if (
        layerCount < 4
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Add all four sediment layers to model deeper burial.";

        return;
      }


      complete.two =
        true;


      feedback.style.color =
        "#087a35";


      feedback.innerHTML = `

        ✅
        <strong>
          BURIAL CHAMBER SEALED!
        </strong>

        <br><br>

        Ancient organic material
        is now buried beneath
        multiple sediment layers.

      `;


      document.getElementById(
        "ffMachineMessage"
      ).textContent =
        "Burial complete. Time Machine controls online.";


      document.getElementById(
        "ffTransformMaterial"
      ).textContent =
        source === "plants"
          ?
          "🌿"
          :
          "🦠";


      updateStatus();
    };


  /* ========================================================
     MISSION 3
     ======================================================== */


  let timeLevel = 0;
  let heatLevel = 0;
  let pressureLevel = 0;


  function updateMachine() {

    const timeNames = [
      "SHORT",
      "LONG",
      "VERY LONG",
      "MILLIONS OF YEARS"
    ];


    const conditionNames = [
      "LOW",
      "MEDIUM",
      "HIGH"
    ];


    document.getElementById(
      "ffTimeReadout"
    ).textContent =
      timeNames[
        timeLevel
      ];


    document.getElementById(
      "ffHeatReadout"
    ).textContent =
      conditionNames[
        heatLevel
      ];


    document.getElementById(
      "ffPressureReadout"
    ).textContent =
      conditionNames[
        pressureLevel
      ];


    document.getElementById(
      "ffTimeMeter"
    ).style.width =
      (
        5
        +
        timeLevel * 31
      )
      +
      "%";


    document.getElementById(
      "ffHeatMeter"
    ).style.width =
      (
        5
        +
        heatLevel * 47
      )
      +
      "%";


    document.getElementById(
      "ffPressureMeter"
    ).style.width =
      (
        5
        +
        pressureLevel * 47
      )
      +
      "%";


    if (
      timeLevel === 3
      &&
      heatLevel === 2
      &&
      pressureLevel === 2
    ) {

      document.getElementById(
        "ffTransformResult"
      ).innerHTML =
        "⛽<br><small>FORMATION CONDITIONS MET</small>";

    } else {

      document.getElementById(
        "ffTransformResult"
      ).textContent =
        "?";
    }
  }


  document.getElementById(
    "ffAdvanceTime"
  ).onclick =
    function () {

      if (!complete.two) {

        document.getElementById(
          "ffFeedback3"
        ).style.color =
          "#b00020";


        document.getElementById(
          "ffFeedback3"
        ).textContent =
          "Complete the Burial Chamber first.";

        return;
      }


      if (
        timeLevel < 3
      ) {

        timeLevel += 1;
      }


      updateMachine();
    };


  document.getElementById(
    "ffIncreaseHeat"
  ).onclick =
    function () {

      if (!complete.two) {

        document.getElementById(
          "ffFeedback3"
        ).style.color =
          "#b00020";


        document.getElementById(
          "ffFeedback3"
        ).textContent =
          "Complete the Burial Chamber first.";

        return;
      }


      if (
        heatLevel < 2
      ) {

        heatLevel += 1;
      }


      updateMachine();
    };


  document.getElementById(
    "ffIncreasePressure"
  ).onclick =
    function () {

      if (!complete.two) {

        document.getElementById(
          "ffFeedback3"
        ).style.color =
          "#b00020";


        document.getElementById(
          "ffFeedback3"
        ).textContent =
          "Complete the Burial Chamber first.";

        return;
      }


      if (
        pressureLevel < 2
      ) {

        pressureLevel += 1;
      }


      updateMachine();
    };


  document.getElementById(
    "ffCheck3"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "ffFeedback3"
        );


      if (!complete.two) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Complete Mission 2 first.";

        return;
      }


      if (
        timeLevel < 3
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Not enough time. Fossil fuels require extremely long periods of geologic time.";

        return;
      }


      if (
        heatLevel < 2
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "The model does not yet include enough heat for our formation simulation.";

        return;
      }


      if (
        pressureLevel < 2
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "The model does not yet include enough pressure for our formation simulation.";

        return;
      }


      complete.three =
        true;


      feedback.style.color =
        "#087a35";


      feedback.innerHTML = `

        🕰️⛽
        <strong>
          TIME MACHINE SUCCESS!
        </strong>

        <br><br>

        Your model included
        ancient organic material,
        deep burial,
        very long geologic time,
        heat,
        and pressure.

        <br><br>

        These represent
        important conditions
        involved in fossil-fuel formation.

      `;


      document.getElementById(
        "ffMachineMessage"
      ).textContent =
        "Formation conditions successfully modeled.";


      updateStatus();
    };


  /* ========================================================
     MISSION 4
     ======================================================== */


  makeQuiz({

    level:
      "four",

    evidenceId:
      "ffEvidence4",

    questionId:
      "ffQuestion4",

    choicesId:
      "ffChoices4",

    checkId:
      "ffCheck4",

    feedbackId:
      "ffFeedback4",

    nextId:
      "ffNext4",

    scoreId:
      "ffScore4",

    passScore:
      3,

    startText:
      "Follow the formation evidence.",

    items: [

      {
        evidence:
          `
          <strong>CASE A</strong><br><br>
          Ancient organic material is buried beneath many sediment layers,
          but only a few years have passed.
          `,

        question:
          "What important factor is missing?",

        choices: [
          "Extremely long geologic time",
          "A rainbow",
          "Magnetism",
          "Moon phases"
        ],

        answer:
          0,

        explanation:
          "Fossil-fuel formation requires extremely long periods of time."
      },

      {
        evidence:
          `
          <strong>CASE B</strong><br><br>
          Ancient organic material becomes deeply buried.
          Heat and pressure increase over very long periods.
          `,

        question:
          "Which process is this evidence most closely connected to?",

        choices: [
          "Fossil-fuel formation",
          "Cloud formation",
          "Reflection of light",
          "Magnetism"
        ],

        answer:
          0,

        explanation:
          "Burial, heat, pressure, and long time are key parts of fossil-fuel formation."
      },

      {
        evidence:
          `
          <strong>CASE C</strong><br><br>
          A student says:
          "Cementation is what turns every fossil into fossil fuel."
          `,

        question:
          "Which response is best?",

        choices: [
          "Correct; cementation creates every fossil fuel.",
          "Incorrect; cementation helps form sedimentary rock, while fossil-fuel formation involves ancient organic material under other conditions.",
          "Correct; every fossil becomes gasoline.",
          "Incorrect because fossil fuels form overnight."
        ],

        answer:
          1,

        explanation:
          "Cementation is part of sedimentary-rock formation; it is not the process that directly creates fossil fuel."
      },

      {
        evidence:
          `
          <strong>CASE D</strong><br><br>
          Coal, petroleum, and natural gas take extremely long periods
          to form naturally.
          `,

        question:
          "Why are they classified as nonrenewable?",

        choices: [
          "They are replaced instantly.",
          "They form much more slowly than people use them.",
          "They contain no energy.",
          "They are forms of sunlight."
        ],

        answer:
          1,

        explanation:
          "Their natural formation is extremely slow compared with the rate at which people use them."
      }

    ]

  });


  updateMachine();

  updateStatus();

})();
