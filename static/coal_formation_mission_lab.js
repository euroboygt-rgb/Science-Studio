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
      ["one","cfStatus1"],
      ["two","cfStatus2"],
      ["three","cfStatus3"],
      ["four","cfStatus4"]
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


    if (
      count === 4
    ) {

      final.innerHTML = `

        🏆
        <strong>
          COAL FORMATION MISSION COMPLETE!
        </strong>

        <br><br>

        You modeled:

        <br><br>

        🌿 Ancient Plants
        → 🟫 Peat
        → ⬇️ Burial
        → ♨️ Heat
        + 🗜️ Pressure
        + 🕰️ Millions of Years
        → ⚫ Coal

        <br><br>

        <strong>
          COAL FORMATION SPECIALIST
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


              choices
                .querySelectorAll(
                  ".cf-choice"
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
            "<br><br>Review the coal evidence before trying again.";
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
      "cfEvidence1",

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
      3,

    startText:
      "Follow the plant evidence.",

    items: [

      {
        evidence:
          "🌿🌳 Thick ancient vegetation grows in a wet swampy environment.",

        question:
          "Which material is the main source for the coal pathway in this model?",

        choices: [
          "Ancient plant material",
          "Plastic",
          "Glass",
          "Sand alone"
        ],

        answer:
          0,

        explanation:
          "Coal forms mainly from ancient plant material."
      },

      {
        evidence:
          "🍂 Plant remains collect in a wet environment and do not completely break down.",

        question:
          "What early material can develop from the accumulated plant remains?",

        choices: [
          "Peat",
          "Gasoline",
          "Granite",
          "Glass"
        ],

        answer:
          0,

        explanation:
          "Accumulated partly decayed plant material can form peat."
      },

      {
        evidence:
          "🟫 A thick peat layer is present.",

        question:
          "Is the peat already coal?",

        choices: [
          "Yes, peat and coal are identical.",
          "No, more burial and geologic change are needed.",
          "Yes, if one day has passed.",
          "Yes, because cementation instantly makes coal."
        ],

        answer:
          1,

        explanation:
          "Peat is an early stage. Additional burial, changing conditions, and geologic time are needed."
      },

      {
        evidence:
          "⚫ Coal is found deep underground beneath layers of rock.",

        question:
          "Which statement best describes coal?",

        choices: [
          "A solid fossil fuel",
          "A renewable plant growing today",
          "A cloud",
          "A magnetic metal"
        ],

        answer:
          0,

        explanation:
          "Coal is a solid fossil fuel."
      }

    ]

  });


  /* ========================================================
     MISSION 2
     ======================================================== */


  let plantCount =
    0;


  document.getElementById(
    "cfAddPlants"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "cfFeedback2"
        );


      if (!complete.one) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Complete Mission 1 first.";

        return;
      }


      if (
        plantCount >= 4
      ) {
        return;
      }


      plantCount += 1;


      document.getElementById(
        "cfPlantCount"
      ).textContent =
        plantCount
        +
        " / 4";


      const peatBed =
        document.getElementById(
          "cfPeatBed"
        );


      const symbols =
        [
          "🍂",
          "🍂 🌿",
          "🍂 🌿 🍂",
          "🍂 🌿 🍂 🌿 🍂"
        ];


      peatBed.textContent =
        symbols[
          plantCount - 1
        ];


      feedback.style.color =
        "#111";


      feedback.textContent =
        "Plant material is accumulating on the wet swamp floor.";
    };


  document.getElementById(
    "cfFormPeat"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "cfFeedback2"
        );


      if (!complete.one) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Complete Mission 1 first.";

        return;
      }


      if (
        plantCount < 4
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Accumulate more plant material before checking for peat.";

        return;
      }


      complete.two =
        true;


      const peatBed =
        document.getElementById(
          "cfPeatBed"
        );


      peatBed.innerHTML =
        "🟫 <strong>PEAT FORMED</strong>";


      peatBed.style.background =
        "#7c6443";


      feedback.style.color =
        "#087a35";


      feedback.innerHTML = `

        ✅
        <strong>
          ANCIENT SWAMP COMPLETE!
        </strong>

        <br><br>

        Plant material accumulated
        in the wet environment
        and our model now represents
        a peat layer.

      `;


      updateStatus();
    };


  /* ========================================================
     MISSION 3
     ======================================================== */


  let layers =
    0;


  let heat =
    0;


  let pressure =
    0;


  let time =
    0;


  document.getElementById(
    "cfAddLayer"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "cfFeedback3"
        );


      if (!complete.two) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Build the ancient swamp and form peat first.";

        return;
      }


      if (
        layers >= 4
      ) {
        return;
      }


      layers += 1;


      const layer =
        document.createElement(
          "div"
        );


      layer.className =
        "cf-sediment-layer "
        +
        (
          layers % 2 === 0
            ?
            "layer-b"
            :
            "layer-a"
        );


      layer.textContent =
        "SEDIMENT / ROCK LAYER "
        +
        layers;


      const stack =
        document.getElementById(
          "cfSedimentStack"
        );


      stack.insertBefore(
        layer,
        stack.firstElementChild
      );


      document.getElementById(
        "cfLayerCount"
      ).textContent =
        layers
        +
        " / 4";


      feedback.style.color =
        "#111";


      feedback.textContent =
        "Another layer accumulated above the peat. Burial is increasing.";
    };


  function updateGauges() {

    const conditionNames =
      [
        "LOW",
        "MEDIUM",
        "HIGH"
      ];


    const timeNames =
      [
        "SHORT",
        "LONG",
        "VERY LONG",
        "MILLIONS OF YEARS"
      ];


    document.getElementById(
      "cfHeatReadout"
    ).textContent =
      conditionNames[heat];


    document.getElementById(
      "cfPressureReadout"
    ).textContent =
      conditionNames[pressure];


    document.getElementById(
      "cfTimeReadout"
    ).textContent =
      timeNames[time];


    document.getElementById(
      "cfHeatMeter"
    ).style.width =
      (
        5
        +
        heat * 47
      )
      +
      "%";


    document.getElementById(
      "cfPressureMeter"
    ).style.width =
      (
        5
        +
        pressure * 47
      )
      +
      "%";


    document.getElementById(
      "cfTimeMeter"
    ).style.width =
      (
        5
        +
        time * 31
      )
      +
      "%";


    if (
      layers === 4
      &&
      heat === 2
      &&
      pressure === 2
      &&
      time === 3
    ) {

      document.getElementById(
        "cfAfter"
      ).innerHTML =
        "⚫<br><strong>COAL</strong>";

    } else {

      document.getElementById(
        "cfAfter"
      ).textContent =
        "?";
    }
  }


  document.getElementById(
    "cfHeat"
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
    "cfPressure"
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
    "cfTime"
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
    "cfCheck3"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "cfFeedback3"
        );


      if (!complete.two) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Complete Mission 2 first.";

        return;
      }


      if (
        layers < 4
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Not enough burial. Add all four layers above the peat.";

        return;
      }


      if (
        heat < 2
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Increase the heat in the model.";

        return;
      }


      if (
        pressure < 2
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Increase the pressure in the model.";

        return;
      }


      if (
        time < 3
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Not enough time. Coal formation takes millions of years.";

        return;
      }


      complete.three =
        true;


      feedback.style.color =
        "#087a35";


      feedback.innerHTML = `

        ⚫
        <strong>
          COAL FORMATION CONDITIONS MET!
        </strong>

        <br><br>

        Your model included
        peat,
        deep burial,
        heat,
        pressure,
        and millions of years.

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
      "cfEvidence4",

    questionId:
      "cfQuestion4",

    choicesId:
      "cfChoices4",

    checkId:
      "cfCheck4",

    feedbackId:
      "cfFeedback4",

    nextId:
      "cfNext4",

    scoreId:
      "cfScore4",

    passScore:
      3,

    startText:
      "Follow the coal pathway.",

    items: [

      {
        evidence:
          `
          <strong>CASE A</strong><br><br>
          Ancient plant material accumulated
          in a swamp and formed a thick layer of peat.
          `,

        question:
          "What should happen next in a coal-formation model?",

        choices: [
          "The peat becomes buried beneath additional layers.",
          "The peat instantly becomes gasoline.",
          "The peat reflects light.",
          "The peat becomes a magnet."
        ],

        answer:
          0,

        explanation:
          "Burial beneath additional sediment and rock is part of the coal-formation pathway."
      },

      {
        evidence:
          `
          <strong>CASE B</strong><br><br>
          A peat layer has been buried deeply,
          but only ten years have passed.
          `,

        question:
          "Why is the model incomplete?",

        choices: [
          "Coal requires extremely long geologic time.",
          "Coal forms only in ten years.",
          "Coal requires a prism.",
          "Coal forms without burial."
        ],

        answer:
          0,

        explanation:
          "Coal takes millions of years to form naturally."
      },

      {
        evidence:
          `
          <strong>CASE C</strong><br><br>
          Student claim:
          "Cementation turns peat directly into coal."
          `,

        question:
          "Which response is most accurate?",

        choices: [
          "Correct; cementation is the only coal-forming process.",
          "Incorrect; coal formation involves buried plant material changing under heat, pressure, and geologic time.",
          "Correct; coal forms instantly.",
          "Incorrect because coal comes from plastic."
        ],

        answer:
          1,

        explanation:
          "Cementation helps form sedimentary rocks, but coal formation follows a different organic-material pathway."
      },

      {
        evidence:
          `
          <strong>CASE D</strong><br><br>
          Two samples are shown:
          Sample 1 = accumulated partly decayed plant material.
          Sample 2 = solid black fossil fuel.
          `,

        question:
          "Which identification is correct?",

        choices: [
          "Sample 1 is coal; Sample 2 is peat.",
          "Both samples are gasoline.",
          "Sample 1 is peat; Sample 2 is coal.",
          "Both samples are fossils."
        ],

        answer:
          2,

        explanation:
          "Peat is an early plant-rich material in the pathway; coal is the solid fossil fuel."
      }

    ]

  });


  updateGauges();

  updateStatus();

})();
