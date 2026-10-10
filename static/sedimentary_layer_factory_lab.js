(function () {
  "use strict";


  const complete = {
    one: false,
    two: false,
    three: false,
    four: false
  };


  const core =
    document.getElementById(
      "slCore"
    );


  const empty =
    document.getElementById(
      "slEmpty"
    );


  const layers =
    [];


  let overburden = 0;
  let compacted = false;
  let mineralCement = false;
  let plainWater = false;


  const materialNames = {
    sand: "SAND",
    silt: "SILT",
    clay: "CLAY",
    pebble: "SMALL PEBBLES"
  };


  function updateStatus() {

    [
      ["one","slStatus1"],
      ["two","slStatus2"],
      ["three","slStatus3"],
      ["four","slStatus4"]
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
        "slFinalMessage"
      );


    if (
      count === 4
    ) {

      final.innerHTML = `

        🏆
        <strong>
          SEDIMENTARY LAYER FACTORY COMPLETE!
        </strong>

        <br><br>

        You modeled:

        <br>

        <strong>
          Deposition → Compaction → Cementation
        </strong>

        <br><br>

        You also proved that:

        <br>

        <strong>
          Compaction SQUEEZES.
          Cementation BINDS.
        </strong>

        <br><br>

        <strong>
          SEDIMENTARY LAYER ENGINEER
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


  function feedback(
    id,
    success,
    message
  ) {

    const box =
      document.getElementById(id);


    box.style.color =
      success
        ? "#087a35"
        : "#b00020";


    box.innerHTML =
      message;
  }


  function addLayer(
    material
  ) {

    if (
      compacted ||
      mineralCement
    ) {
      return;
    }


    if (
      layers.length >= 6
    ) {
      return;
    }


    if (empty) {

      empty.style.display =
        "none";
    }


    layers.push(
      material
    );


    const layer =
      document.createElement(
        "div"
      );


    layer.className =
      "sl-layer "
      +
      material;


    layer.textContent =
      materialNames[
        material
      ];


    core.appendChild(
      layer
    );


    document.getElementById(
      "slLayerCount"
    ).textContent =
      String(
        layers.length
      );


    document.getElementById(
      "slFactoryMessage"
    ).textContent =
      "Deposition added a "
      +
      materialNames[
        material
      ].toLowerCase()
      +
      " layer.";
  }


  document.querySelectorAll(
    "[data-material]"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          addLayer(
            button.dataset.material
          );
        };
    }
  );


  /* MISSION 1 */


  document.getElementById(
    "slCheck1"
  ).onclick =
    function () {

      if (
        layers.length < 4
      ) {

        feedback(
          "slFeedback1",
          false,
          "Build at least four sediment layers before checking deposition."
        );

        return;
      }


      complete.one =
        true;


      feedback(
        "slFeedback1",
        true,
        "✅ <strong>DEPOSITION COMPLETE!</strong><br><br>Repeated deposition created multiple sediment layers."
      );


      updateStatus();
    };


  /* MISSION 2 */


  document.getElementById(
    "slAddOverburden"
  ).onclick =
    function () {

      if (!complete.one) {

        feedback(
          "slFeedback2",
          false,
          "Complete Mission 1 first. Sediment layers must be deposited before we add overburden."
        );

        return;
      }


      if (
        overburden >= 3
      ) {
        return;
      }


      overburden += 1;


      document.getElementById(
        "slOverburden"
      ).textContent =
        overburden
        +
        " / 3";


      const pressureLabels = [
        "LOW",
        "MODERATE",
        "HIGH"
      ];


      document.getElementById(
        "slPressureReadout"
      ).textContent =
        pressureLabels[
          overburden - 1
        ];


      document.getElementById(
        "slFactoryMessage"
      ).textContent =
        "More material accumulated above the lower sediment layers.";
    };


  document.getElementById(
    "slCheck2"
  ).onclick =
    function () {

      if (
        overburden < 3
      ) {

        feedback(
          "slFeedback2",
          false,
          "Add all three overburden levels to create high pressure."
        );

        return;
      }


      complete.two =
        true;


      document.getElementById(
        "slPressure"
      ).style.display =
        "block";


      feedback(
        "slFeedback2",
        true,
        "✅ <strong>OVERBURDEN COMPLETE!</strong><br><br>Additional material above creates greater pressure on lower sediment layers."
      );


      updateStatus();
    };


  /* MISSION 3 */


  document.getElementById(
    "slCompact"
  ).onclick =
    function () {

      if (!complete.two) {

        feedback(
          "slFeedback3",
          false,
          "Build enough overburden before applying compaction."
        );

        return;
      }


      compacted =
        true;


      core.style.transform =
        "scaleY(.72)";


      document.querySelectorAll(
        ".sl-layer"
      ).forEach(
        function (layer) {

          layer.style.height =
            "46px";
        }
      );


      document.getElementById(
        "slSpacingReadout"
      ).textContent =
        "REDUCED";


      document.getElementById(
        "slFactoryMessage"
      ).textContent =
        "Compaction squeezed sediment grains closer together.";


      feedback(
        "slFeedback3",
        true,
        "🗜️ Compaction complete. Grain spacing decreased, but the model is not cemented yet."
      );
    };


  document.getElementById(
    "slPlainWater"
  ).onclick =
    function () {

      if (!compacted) {

        feedback(
          "slFeedback3",
          false,
          "Compact the sediment before testing cementation."
        );

        return;
      }


      plainWater =
        true;


      mineralCement =
        false;


      document.getElementById(
        "slMineralWater"
      ).style.display =
        "block";


      document.getElementById(
        "slMineralWater"
      ).textContent =
        "💧 💧 💧";


      document.getElementById(
        "slCementReadout"
      ).textContent =
        "NOT MODELED";


      feedback(
        "slFeedback3",
        false,
        "💧 Water alone in this model does not represent mineral cementation. Choose mineral-rich water."
      );
    };


  document.getElementById(
    "slMineralButton"
  ).onclick =
    function () {

      if (!compacted) {

        feedback(
          "slFeedback3",
          false,
          "Compact the sediment before modeling cementation."
        );

        return;
      }


      mineralCement =
        true;


      plainWater =
        false;


      document.getElementById(
        "slMineralWater"
      ).style.display =
        "block";


      document.getElementById(
        "slMineralWater"
      ).textContent =
        "💧✨💧✨💧";


      document.getElementById(
        "slCementReadout"
      ).textContent =
        "PRESENT";


      document.getElementById(
        "slMaterialReadout"
      ).textContent =
        "SOLID ROCK MODEL";


      document.getElementById(
        "slRockLabel"
      ).style.display =
        "block";


      document.getElementById(
        "slFactoryMessage"
      ).textContent =
        "Minerals formed between grains and modeled cementation.";


      feedback(
        "slFeedback3",
        true,
        "🧱 Mineral cement is now binding the compacted sediment grains."
      );
    };


  document.getElementById(
    "slCheck3"
  ).onclick =
    function () {

      if (
        !compacted
      ) {

        feedback(
          "slFeedback3",
          false,
          "Compaction has not been completed."
        );

        return;
      }


      if (
        !mineralCement
      ) {

        feedback(
          "slFeedback3",
          false,
          "The sediment is compacted, but cementation has not been modeled yet."
        );

        return;
      }


      complete.three =
        true;


      feedback(
        "slFeedback3",
        true,
        "✅ <strong>ROCK FORMATION MODEL COMPLETE!</strong><br><br>Compaction squeezed the grains closer. Cementation modeled minerals binding the grains together."
      );


      updateStatus();
    };


  /* MISSION 4 */


  const cases = [

    {
      evidence:
        "A river slows as it enters a lake. Sand settles to the bottom and begins forming a layer.",

      question:
        "Which W.E.D.C.C. process is best supported?",

      choices: [
        "Weathering",
        "Erosion",
        "Deposition",
        "Cementation"
      ],

      answer:
        2,

      explanation:
        "Sediment settling or being dropped is deposition."
    },

    {
      evidence:
        "Many layers accumulate. The weight above pushes grains in the lower layers closer together.",

      question:
        "Which process is occurring?",

      choices: [
        "Compaction",
        "Erosion",
        "Weathering",
        "Deposition"
      ],

      answer:
        0,

      explanation:
        "Pressure pushing sediment grains closer together is compaction."
    },

    {
      evidence:
        "Mineral material forms in spaces between sediment grains and helps hold the grains together.",

      question:
        "Which process is occurring?",

      choices: [
        "Erosion",
        "Compaction",
        "Cementation",
        "Weathering"
      ],

      answer:
        2,

      explanation:
        "Minerals binding sediment grains together describes cementation."
    },

    {
      evidence:
        "A student says: 'Compaction and cementation are the same because both help make sedimentary rock.'",

      question:
        "Which response best corrects the student?",

      choices: [
        "Compaction moves sediment, while cementation drops it.",
        "Compaction squeezes grains closer, while cementation binds grains with minerals.",
        "Compaction breaks rock, while cementation erodes it.",
        "The student is correct; they are identical processes."
      ],

      answer:
        1,

      explanation:
        "Compaction is squeezing by pressure; cementation is mineral binding."
    }

  ];


  let caseIndex = 0;
  let caseScore = 0;
  let caseChoice = null;
  let caseAnswered = false;


  const evidenceBox =
    document.getElementById(
      "slEvidence4"
    );


  const questionBox =
    document.getElementById(
      "slQuestion4"
    );


  const choicesBox =
    document.getElementById(
      "slChoices4"
    );


  const feedbackBox =
    document.getElementById(
      "slFeedback4"
    );


  const nextButton =
    document.getElementById(
      "slNext4"
    );


  function drawCase() {

    caseChoice =
      null;


    caseAnswered =
      false;


    const item =
      cases[
        caseIndex
      ];


    evidenceBox.innerHTML = `

      <strong>
        EVIDENCE CASE
        ${caseIndex + 1}
      </strong>

      <br><br>

      ${item.evidence}

    `;


    questionBox.textContent =
      item.question;


    choicesBox.innerHTML =
      "";


    item.choices.forEach(
      function (
        choice,
        index
      ) {

        const button =
          document.createElement(
            "button"
          );


        button.type =
          "button";


        button.className =
          "sl-choice";


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
                ".sl-choice"
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


            caseChoice =
              index;
          };


        choicesBox.appendChild(
          button
        );
      }
    );


    feedbackBox.style.color =
      "#111";


    feedbackBox.textContent =
      "Use the evidence.";


    nextButton.disabled =
      true;


    nextButton.textContent =
      caseIndex ===
      cases.length - 1
        ?
        "COMPLETE EVIDENCE MISSION →"
        :
        "NEXT EVIDENCE →";
  }


  document.getElementById(
    "slCheck4"
  ).onclick =
    function () {

      if (
        caseChoice === null
      ) {

        feedbackBox.style.color =
          "#b00020";


        feedbackBox.textContent =
          "Choose an answer before checking.";

        return;
      }


      if (caseAnswered) {
        return;
      }


      caseAnswered =
        true;


      const item =
        cases[
          caseIndex
        ];


      if (
        caseChoice ===
        item.answer
      ) {

        caseScore += 1;


        feedbackBox.style.color =
          "#087a35";


        feedbackBox.innerHTML = `

          ✅
          <strong>
            Correct!
          </strong>

          ${item.explanation}

        `;

      } else {

        feedbackBox.style.color =
          "#b00020";


        feedbackBox.innerHTML = `

          🔍
          <strong>
            Evidence review:
          </strong>

          ${item.explanation}

        `;
      }


      document.getElementById(
        "slScore4"
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


      if (
        complete.four
      ) {

        feedbackBox.style.color =
          "#087a35";


        feedbackBox.innerHTML = `

          🏆
          <strong>
            ROCK EVIDENCE DETECTIVE COMPLETE!
          </strong>

          <br><br>

          Score:
          ${caseScore} / 4

        `;

      } else {

        feedbackBox.style.color =
          "#b00020";


        feedbackBox.innerHTML = `

          Score:
          ${caseScore} / 4

          <br><br>

          Review:

          <strong>
            Deposition = DROP,
            Compaction = SQUEEZE,
            Cementation = BIND.
          </strong>

        `;
      }


      nextButton.disabled =
        true;


      updateStatus();
    };


  drawCase();

  updateStatus();

})();
