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
      ["one","ogStatus1"],
      ["two","ogStatus2"],
      ["three","ogStatus3"],
      ["four","ogStatus4"]
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
        "ogFinalMessage"
      );


    if (
      count === 4
    ) {

      final.innerHTML = `

        🏆
        <strong>
          PETROLEUM MISSION COMPLETE!
        </strong>

        <br><br>

        You modeled:

        <br><br>

        🌊🦠 Ancient Aquatic Organic Material
        → ⬇️ Burial
        → ♨️ Heat
        + 🗜️ Pressure
        + 🕰️ Millions of Years
        → 🛢️ Petroleum
        + 🔥 Natural Gas

        <br><br>

        <strong>
          PETROLEUM SYSTEMS SPECIALIST
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
            "og-choice";


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
                  ".og-choice"
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
            "<br><br>Review the petroleum evidence before trying again.";
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
      "ogEvidence1",

    questionId:
      "ogQuestion1",

    choicesId:
      "ogChoices1",

    checkId:
      "ogCheck1",

    feedbackId:
      "ogFeedback1",

    nextId:
      "ogNext1",

    scoreId:
      "ogScore1",

    passScore:
      3,

    startText:
      "Follow the ancient aquatic evidence.",

    items: [

      {
        evidence:
          "🌊🦠 Tiny organisms live in an ancient aquatic environment.",

        question:
          "Which material can contribute to the petroleum pathway after the organisms die?",

        choices: [
          "Ancient organic material",
          "Plastic",
          "Glass",
          "Sunlight alone"
        ],

        answer:
          0,

        explanation:
          "Ancient organic material from organisms can become part of an organic-rich sediment."
      },

      {
        evidence:
          "⬇️ Organic material becomes covered by sand, silt, and mud.",

        question:
          "Which process is occurring?",

        choices: [
          "Burial by sediment",
          "Reflection",
          "Magnetism",
          "Evaporation only"
        ],

        answer:
          0,

        explanation:
          "Additional sediment can bury the organic-rich material."
      },

      {
        evidence:
          "♨️🗜️🕰️ Deep burial continues for millions of years.",

        question:
          "Which conditions are represented?",

        choices: [
          "Heat, pressure, and geologic time",
          "One day of weather",
          "Only sunlight",
          "A circuit"
        ],

        answer:
          0,

        explanation:
          "Heat, pressure, and very long geologic time are central conditions in the model."
      },

      {
        evidence:
          "🛢️🔥 A liquid fossil fuel and gaseous fossil fuel are produced.",

        question:
          "Which pair is described?",

        choices: [
          "Coal and peat",
          "Petroleum and natural gas",
          "Water and oxygen",
          "Sand and clay"
        ],

        answer:
          1,

        explanation:
          "Petroleum is liquid and natural gas is gaseous."
      }

    ]

  });


  /* ========================================================
     MISSION 2
     ======================================================== */


  let organicCount =
    0;


  let layerCount =
    0;


  document.getElementById(
    "ogAddOrganisms"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "ogFeedback2"
        );


      if (!complete.one) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Complete Mission 1 first.";

        return;
      }


      if (
        organicCount >= 4
      ) {
        return;
      }


      organicCount += 1;


      document.getElementById(
        "ogOrganicCount"
      ).textContent =
        organicCount
        +
        " / 4";


      const displays = [
        "🦠",
        "🦠 🦠",
        "🦠 🦠 🦠",
        "🦠 🦠 🦠 🦠 ORGANIC-RICH MATERIAL"
      ];


      document.getElementById(
        "ogOrganicLayer"
      ).textContent =
        displays[
          organicCount - 1
        ];


      feedback.style.color =
        "#111";


      feedback.textContent =
        "Organic material is accumulating on the ancient sea floor.";
    };


  document.getElementById(
    "ogAddSediment"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "ogFeedback2"
        );


      if (!complete.one) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Complete Mission 1 first.";

        return;
      }


      if (
        organicCount < 4
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Build the organic-rich layer before adding burial sediments.";

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
        "og-sediment-layer "
        +
        (
          layerCount % 2 === 0
            ?
            "layer-b"
            :
            "layer-a"
        );


      layer.textContent =
        "SEDIMENT LAYER "
        +
        layerCount;


      const stack =
        document.getElementById(
          "ogBasinStack"
        );


      stack.insertBefore(
        layer,
        stack.firstElementChild
      );


      document.getElementById(
        "ogLayerCount"
      ).textContent =
        layerCount
        +
        " / 4";


      feedback.style.color =
        "#111";


      feedback.textContent =
        "Sediment Layer "
        +
        layerCount
        +
        " was deposited above the organic-rich layer.";
    };


  document.getElementById(
    "ogCheck2"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "ogFeedback2"
        );


      if (!complete.one) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Complete Mission 1 first.";

        return;
      }


      if (
        organicCount < 4
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Not enough organic material has accumulated.";

        return;
      }


      if (
        layerCount < 4
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Add all four sediment layers to model deep burial.";

        return;
      }


      complete.two =
        true;


      feedback.style.color =
        "#087a35";


      feedback.innerHTML = `

        ✅
        <strong>
          ANCIENT SEDIMENT BASIN COMPLETE!
        </strong>

        <br><br>

        Organic-rich material
        is buried beneath
        four later sediment layers.

      `;


      document.getElementById(
        "ogMachineMessage"
      ).textContent =
        "Deep burial complete. Petroleum controls online.";


      updateStatus();
    };


  /* ========================================================
     MISSION 3
     ======================================================== */


  let heat =
    0;


  let pressure =
    0;


  let time =
    0;


  let generated =
    false;


  function updateGauges() {

    const conditionNames = [
      "LOW",
      "MEDIUM",
      "HIGH"
    ];


    const timeNames = [
      "SHORT",
      "LONG",
      "VERY LONG",
      "MILLIONS OF YEARS"
    ];


    document.getElementById(
      "ogHeatReadout"
    ).textContent =
      conditionNames[
        heat
      ];


    document.getElementById(
      "ogPressureReadout"
    ).textContent =
      conditionNames[
        pressure
      ];


    document.getElementById(
      "ogTimeReadout"
    ).textContent =
      timeNames[
        time
      ];


    document.getElementById(
      "ogHeatMeter"
    ).style.width =
      (
        5
        +
        heat * 47
      )
      +
      "%";


    document.getElementById(
      "ogPressureMeter"
    ).style.width =
      (
        5
        +
        pressure * 47
      )
      +
      "%";


    document.getElementById(
      "ogTimeMeter"
    ).style.width =
      (
        5
        +
        time * 31
      )
      +
      "%";
  }


  document.getElementById(
    "ogHeat"
  ).onclick =
    function () {

      if (
        complete.two
        &&
        heat < 2
      ) {

        heat += 1;

        updateGauges();
      }
    };


  document.getElementById(
    "ogPressure"
  ).onclick =
    function () {

      if (
        complete.two
        &&
        pressure < 2
      ) {

        pressure += 1;

        updateGauges();
      }
    };


  document.getElementById(
    "ogTime"
  ).onclick =
    function () {

      if (
        complete.two
        &&
        time < 3
      ) {

        time += 1;

        updateGauges();
      }
    };


  document.getElementById(
    "ogGenerate"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "ogFeedback3"
        );


      if (!complete.two) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Complete the Ancient Sediment Basin first.";

        return;
      }


      if (
        heat < 2
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Increase heat in the geologic model.";

        return;
      }


      if (
        pressure < 2
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Increase pressure in the geologic model.";

        return;
      }


      if (
        time < 3
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Not enough time. Petroleum formation requires extremely long geologic time.";

        return;
      }


      generated =
        true;


      document.getElementById(
        "ogAfter"
      ).innerHTML =
        "🛢️🔥<br><strong>OIL + NATURAL GAS</strong>";


      document.getElementById(
        "ogSourceResult"
      ).textContent =
        "🛢️ + 🔥 GENERATED";


      document.getElementById(
        "ogMigrate"
      ).disabled =
        false;


      document.getElementById(
        "ogMachineMessage"
      ).textContent =
        "Formation conditions modeled. Reservoir extension available.";


      feedback.style.color =
        "#087a35";


      feedback.innerHTML = `

        ✅
        <strong>
          FORMATION CONDITIONS MET!
        </strong>

        <br><br>

        Your model includes
        buried ancient organic material,
        heat,
        pressure,
        and millions of years.

        <br><br>

        Now model what can happen
        in a conventional petroleum system.

      `;
    };


  document.getElementById(
    "ogMigrate"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "ogFeedback3"
        );


      if (!generated) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Generate petroleum and natural gas before modeling migration.";

        return;
      }


      document.getElementById(
        "ogGasPocket"
      ).textContent =
        "🔥 NATURAL GAS";


      document.getElementById(
        "ogGasPocket"
      ).classList.add(
        "filled"
      );


      document.getElementById(
        "ogOilPocket"
      ).textContent =
        "🛢️ PETROLEUM";


      document.getElementById(
        "ogOilPocket"
      ).classList.add(
        "filled"
      );


      complete.three =
        true;


      feedback.style.color =
        "#087a35";


      feedback.innerHTML = `

        🛢️🔥
        <strong>
          PETROLEUM SYSTEM MODELED!
        </strong>

        <br><br>

        The core formation pathway
        is complete.

        <br><br>

        Extension:
        The model also shows
        oil and gas collecting
        in porous reservoir rock
        beneath sealing rock.

      `;


      updateStatus();
    };


  /* ========================================================
     MISSION 4
     ======================================================== */


  makeQuiz({

    level:
      "four",

    evidenceId:
      "ogEvidence4",

    questionId:
      "ogQuestion4",

    choicesId:
      "ogChoices4",

    checkId:
      "ogCheck4",

    feedbackId:
      "ogFeedback4",

    nextId:
      "ogNext4",

    scoreId:
      "ogScore4",

    passScore:
      3,

    startText:
      "Compare the source and formation evidence.",

    items: [

      {
        evidence:
          `
          <strong>CASE A</strong><br><br>
          Ancient plant material accumulates
          in a swamp and forms peat.
          `,

        question:
          "Which fossil-fuel pathway is most closely represented?",

        choices: [
          "Coal",
          "Petroleum only",
          "Natural gas only",
          "Solar energy"
        ],

        answer:
          0,

        explanation:
          "Ancient swamp plant material and peat are key clues for the coal pathway."
      },

      {
        evidence:
          `
          <strong>CASE B</strong><br><br>
          Ancient microscopic aquatic organisms
          become buried beneath marine sediments.
          `,

        question:
          "Which pathway is most closely represented?",

        choices: [
          "Coal only",
          "Petroleum and natural gas",
          "Wind energy",
          "Magnetism"
        ],

        answer:
          1,

        explanation:
          "Ancient aquatic organic material is commonly associated with petroleum and natural-gas formation."
      },

      {
        evidence:
          `
          <strong>CASE C</strong><br><br>
          Two formation models both include
          deep burial,
          heat,
          pressure,
          and millions of years.
          `,

        question:
          "Which statement is best supported?",

        choices: [
          "These conditions can be important in more than one fossil-fuel pathway.",
          "Only coal requires geologic time.",
          "Fossil fuels form instantly.",
          "Only petroleum involves burial."
        ],

        answer:
          0,

        explanation:
          "Coal, petroleum, and natural-gas formation all involve long geologic processes under suitable conditions."
      },

      {
        evidence:
          `
          <strong>CASE D</strong><br><br>
          Sample X is a solid fossil fuel.
          Sample Y is a liquid fossil fuel.
          Sample Z is a gaseous fossil fuel.
          `,

        question:
          "Which identification is correct?",

        choices: [
          "X = petroleum, Y = coal, Z = peat",
          "X = coal, Y = petroleum, Z = natural gas",
          "X = natural gas, Y = coal, Z = petroleum",
          "X = peat, Y = water, Z = coal"
        ],

        answer:
          1,

        explanation:
          "Coal is solid, petroleum is liquid, and natural gas is gaseous."
      }

    ]

  });


  updateGauges();

  updateStatus();

})();
