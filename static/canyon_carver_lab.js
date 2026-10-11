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
      ["one","ccStatus1"],
      ["two","ccStatus2"],
      ["three","ccStatus3"],
      ["four","ccStatus4"]
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
        "ccFinalMessage"
      );


    if (
      count === 4
    ) {

      final.innerHTML = `

        🏆
        <strong>
          CANYON CARVER COMPLETE!
        </strong>

        <br><br>

        You modeled:

        <br><br>

        💧 Running Water
        → ➡️ Erosion
        → 🚚 Sediment Transport
        → 🕰️ Repeated Change
        → 🏜️ Canyon

        <br><br>

        <strong>
          CANYON FORMATION GEOLOGIST
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
            "cc-choice";


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
                  ".cc-choice"
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
            "<br><br>Review the canyon evidence and try again after refreshing.";
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
      "ccEvidence1",

    questionId:
      "ccQuestion1",

    choicesId:
      "ccChoices1",

    checkId:
      "ccCheck1",

    feedbackId:
      "ccFeedback1",

    nextId:
      "ccNext1",

    scoreId:
      "ccScore1",

    passScore:
      4,

    startText:
      "Follow the removed material.",

    items: [

      {
        evidence:
          "💧 A river carries loosened rock particles downstream.",

        question:
          "Which process is occurring?",

        choices: [
          "Deposition",
          "Erosion and transport",
          "Cementation",
          "Compaction"
        ],

        answer:
          1,

        explanation:
          "The Earth material is being removed and moved."
      },

      {
        evidence:
          "💥 Water and other processes weaken and break rock.",

        question:
          "Which process is represented?",

        choices: [
          "Weathering",
          "Deposition",
          "Cementation",
          "Compaction"
        ],

        answer:
          0,

        explanation:
          "Weathering breaks or weakens rock."
      },

      {
        evidence:
          "🏜️ A deep river channel develops after repeated removal of material.",

        question:
          "Which landform is represented?",

        choices: [
          "Delta",
          "Sand dune",
          "Canyon",
          "Glacier"
        ],

        answer:
          2,

        explanation:
          "Repeated erosion can contribute to canyon formation."
      },

      {
        evidence:
          "🕰️ The river continues changing the surface for a very long time.",

        question:
          "Why is this important?",

        choices: [
          "Slow surface changes can accumulate over time.",
          "A canyon must form instantly.",
          "Time stops erosion.",
          "Time creates cementation only."
        ],

        answer:
          0,

        explanation:
          "Repeated small changes can produce large landforms over long periods."
      },

      {
        evidence:
          "➡️ Sediment is leaving the canyon area in flowing water.",

        question:
          "Is material mainly being added or removed?",

        choices: [
          "Added",
          "Removed",
          "Neither",
          "Cemented"
        ],

        answer:
          1,

        explanation:
          "Erosion removes and transports material."
      }

    ]

  });


  /* ========================================================
     MISSION 2 - CANYON CARVER SIMULATOR
     ======================================================== */


  let flow =
    null;


  let time =
    null;


  let erosion =
    0;


  let sedimentMoved =
    0;


  document.querySelectorAll(
    ".cc-flow"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.querySelectorAll(
            ".cc-flow"
          ).forEach(
            function (item) {

              item.classList.remove(
                "selected"
              );
            }
          );


          button.classList.add(
            "selected"
          );


          flow =
            Number(
              button.dataset.flow
            );
        };
    }
  );


  document.querySelectorAll(
    ".cc-time"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.querySelectorAll(
            ".cc-time"
          ).forEach(
            function (item) {

              item.classList.remove(
                "selected"
              );
            }
          );


          button.classList.add(
            "selected"
          );


          time =
            Number(
              button.dataset.time
            );
        };
    }
  );


  function updateCanyonVisual() {

    const progress =
      Math.min(
        erosion / 8,
        1
      );


    const depth =
      70
      +
      progress * 265;


    const gap =
      80
      +
      progress * 265;


    const scene =
      document.getElementById(
        "ccCanyonScene"
      );


    scene.style.setProperty(
      "--depth",
      depth + "px"
    );


    scene.style.setProperty(
      "--gap",
      gap + "px"
    );


    document.getElementById(
      "ccDepthMeter"
    ).style.width =
      Math.max(
        5,
        progress * 100
      )
      +
      "%";


    document.getElementById(
      "ccWidthMeter"
    ).style.width =
      Math.max(
        5,
        progress * 100
      )
      +
      "%";


    document.getElementById(
      "ccProgressMeter"
    ).style.width =
      Math.max(
        5,
        progress * 100
      )
      +
      "%";


    document.getElementById(
      "ccProgressText"
    ).textContent =
      Math.min(
        erosion,
        8
      )
      +
      " / 8";


    if (
      progress < .35
    ) {

      document.getElementById(
        "ccDepthText"
      ).textContent =
        "SHALLOW";


      document.getElementById(
        "ccWidthText"
      ).textContent =
        "NARROW";

    } else if (
      progress < .75
    ) {

      document.getElementById(
        "ccDepthText"
      ).textContent =
        "DEEPER";


      document.getElementById(
        "ccWidthText"
      ).textContent =
        "WIDER";

    } else {

      document.getElementById(
        "ccDepthText"
      ).textContent =
        "DEEP";


      document.getElementById(
        "ccWidthText"
      ).textContent =
        "WIDE";
    }


    document.getElementById(
      "ccSedimentMoved"
    ).textContent =
      "🪨 "
      +
      sedimentMoved
      +
      " sediment units moved";
  }


  document.getElementById(
    "ccRunErosion"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "ccFeedback2"
        );


      if (!complete.one) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Complete Mission 1 first.";

        return;
      }


      if (
        !flow
        ||
        !time
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Select both water flow and time.";

        return;
      }


      const change =
        Math.max(
          1,
          Math.round(
            (
              flow + time
            )
            / 2
          )
        );


      erosion +=
        change;


      sedimentMoved +=
        change;


      updateCanyonVisual();


      feedback.style.color =
        "#087a35";


      feedback.innerHTML = `

        💧➡️
        <strong>
          EROSION CYCLE COMPLETE.
        </strong>

        <br><br>

        Flowing water removed
        and transported
        ${change} sediment unit${change === 1 ? "" : "s"}.

        <br><br>

        In this model,
        stronger flow
        and longer time
        produce greater visible change.

      `;


      if (
        erosion >= 8
      ) {

        complete.two =
          true;


        feedback.innerHTML += `

          <br><br>

          🏆
          <strong>
            CANYON CARVED!
          </strong>

          <br><br>

          Repeated erosion
          removed enough material
          for the model canyon
          to become deeper and wider.

        `;


        updateStatus();
      }
    };


  /* ========================================================
     MISSION 3
     ======================================================== */


  makeQuiz({

    level:
      "three",

    evidenceId:
      "ccEvidence3",

    questionId:
      "ccQuestion3",

    choicesId:
      "ccChoices3",

    checkId:
      "ccCheck3",

    feedbackId:
      "ccFeedback3",

    nextId:
      "ccNext3",

    scoreId:
      "ccScore3",

    passScore:
      4,

    startText:
      "Weathering = BREAK. Erosion = MOVE.",

    items: [

      {
        evidence:
          "💥 Rock cracks into smaller pieces.",

        question:
          "Weathering or erosion?",

        choices: [
          "Weathering",
          "Erosion"
        ],

        answer:
          0,

        explanation:
          "The rock is breaking, so this is weathering."
      },

      {
        evidence:
          "➡️ River water carries broken rock downstream.",

        question:
          "Weathering or erosion?",

        choices: [
          "Weathering",
          "Erosion"
        ],

        answer:
          1,

        explanation:
          "The material is moving, so this is erosion."
      },

      {
        evidence:
          "💥 Ice forms in a rock crack and helps widen it.",

        question:
          "Which process is most directly represented?",

        choices: [
          "Weathering",
          "Erosion"
        ],

        answer:
          0,

        explanation:
          "The rock is being broken or weakened."
      },

      {
        evidence:
          "💧 Sand and gravel are carried away by a stream.",

        question:
          "Which process is most directly represented?",

        choices: [
          "Weathering",
          "Erosion"
        ],

        answer:
          1,

        explanation:
          "The sediment is being transported."
      },

      {
        evidence:
          "💥 Rock loosens. ➡️ Water then carries it away.",

        question:
          "Which sequence is correct?",

        choices: [
          "Weathering then erosion",
          "Erosion then weathering"
        ],

        answer:
          0,

        explanation:
          "The model shows breaking first and transport second."
      }

    ]

  });


  /* ========================================================
     MISSION 4
     ======================================================== */


  makeQuiz({

    level:
      "four",

    evidenceId:
      "ccEvidence4",

    questionId:
      "ccQuestion4",

    choicesId:
      "ccChoices4",

    checkId:
      "ccCheck4",

    feedbackId:
      "ccFeedback4",

    nextId:
      "ccNext4",

    scoreId:
      "ccScore4",

    passScore:
      5,

    startText:
      "Follow the erosion evidence.",

    items: [

      {
        evidence:
          `
          <strong>CASE 1</strong><br><br>
          Flowing water removes
          loose material from a river channel.
          `,

        question:
          "Which process is occurring?",

        choices: [
          "Erosion",
          "Deposition",
          "Compaction",
          "Cementation"
        ],

        answer:
          0,

        explanation:
          "Material is being removed and transported."
      },

      {
        evidence:
          `
          <strong>CASE 2</strong><br><br>
          A river channel becomes
          deeper after repeated erosion.
          `,

        question:
          "Which landform could eventually develop?",

        choices: [
          "Delta",
          "Canyon",
          "Sand dune",
          "Glacier"
        ],

        answer:
          1,

        explanation:
          "Repeated running-water erosion can contribute to canyon formation."
      },

      {
        evidence:
          `
          <strong>CASE 3</strong><br><br>
          Sediment settles
          and builds new land
          at a river mouth.
          `,

        question:
          "Is this canyon formation?",

        choices: [
          "Yes, because sediment is being removed.",
          "No, this describes deposition and delta formation.",
          "Yes, because every river forms a canyon.",
          "No, this describes cementation."
        ],

        answer:
          1,

        explanation:
          "Settling sediment at a river mouth describes delta deposition."
      },

      {
        evidence:
          `
          <strong>CASE 4</strong><br><br>
          A river continues carrying
          rock and sediment downstream
          year after year.
          `,

        question:
          "Why does repeated time matter?",

        choices: [
          "Small changes can accumulate into larger surface changes.",
          "Time prevents erosion.",
          "A canyon forms in one second.",
          "Time turns water into rock."
        ],

        answer:
          0,

        explanation:
          "Repeated erosion over long periods can create major surface changes."
      },

      {
        evidence:
          `
          <strong>CASE 5</strong><br><br>
          Steve says:
          "A canyon is formed by piling up sediment."
          `,

        question:
          "Which correction is best?",

        choices: [
          "Correct; a canyon is depositional.",
          "Incorrect; our canyon model depends mainly on erosion removing material.",
          "Correct; erosion means piling up sediment.",
          "Incorrect because only wind forms canyons."
        ],

        answer:
          1,

        explanation:
          "Canyon formation in our model is primarily erosional."
      },

      {
        evidence:
          `
          <strong>CASE 6</strong><br><br>
          💧 → ➡️ → 🚚🪨 → 🕰️ → ?
          `,

        question:
          "Which landform completes the model?",

        choices: [
          "Delta",
          "Sand dune",
          "Canyon",
          "Volcano"
        ],

        answer:
          2,

        explanation:
          "Running water, erosion, transport, and time match the canyon model."
      }

    ]

  });


  updateCanyonVisual();

  updateStatus();

})();
