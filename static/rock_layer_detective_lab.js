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
      ["one","rlStatus1"],
      ["two","rlStatus2"],
      ["three","rlStatus3"],
      ["four","rlStatus4"]
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
        "rlFinalMessage"
      );


    if (
      count === 4
    ) {

      final.innerHTML = `

        🏆
        <strong>
          ALL ROCK LAYER CASES SOLVED!
        </strong>

        <br><br>

        You identified deposition order,
        rebuilt a sediment sequence,
        matched evidence to W.E.D.C.C.,
        and solved mystery rock cores.

        <br><br>

        <strong>
          ROCK LAYER INVESTIGATOR
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


  /* ========================================================
     MISSION 1
     ======================================================== */


  let selectedLayer =
    null;


  const layerButtons =
    Array.from(
      document.querySelectorAll(
        "[data-layer]"
      )
    );


  layerButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          layerButtons.forEach(
            function (item) {

              item.classList.remove(
                "selected"
              );
            }
          );


          button.classList.add(
            "selected"
          );


          selectedLayer =
            button.dataset.layer;
        };
    }
  );


  document.getElementById(
    "rlCheck1"
  ).onclick =
    function () {

      if (!selectedLayer) {

        feedback(
          "rlFeedback1",
          false,
          "Select a layer first."
        );

        return;
      }


      if (
        selectedLayer === "A"
      ) {

        complete.one =
          true;


        feedback(
          "rlFeedback1",
          true,
          "✅ <strong>CASE SOLVED!</strong><br><br>Layer A is at the bottom of this simple undisturbed model, so it was deposited before the layers above it."
        );

      } else {

        complete.one =
          false;


        feedback(
          "rlFeedback1",
          false,
          "🔍 Look again. Which layer had to be present before another layer could be deposited above it?"
        );
      }


      updateStatus();
    };


  /* ========================================================
     MISSION 2
     ======================================================== */


  const correctSequence =
    ["A","B","C","D","E"];


  let sequence =
    [];


  const sequenceButtons =
    Array.from(
      document.querySelectorAll(
        "[data-sequence]"
      )
    );


  function drawSequence() {

    for (
      let i = 0;
      i < 5;
      i += 1
    ) {

      const slot =
        document.getElementById(
          "rlSlot"
          +
          (i + 1)
        );


      slot.textContent =
        sequence[i]
          ?
          (
            (i + 1)
            +
            (i === 0 ? "st " :
             i === 1 ? "nd " :
             i === 2 ? "rd " : "th ")
            +
            "Layer "
            +
            sequence[i]
          )
          :
          (
            (i + 1)
            +
            (i === 0 ? "st ?" :
             i === 1 ? "nd ?" :
             i === 2 ? "rd ?" : "th ?")
          );
    }


    sequenceButtons.forEach(
      function (button) {

        const used =
          sequence.includes(
            button.dataset.sequence
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


  sequenceButtons.forEach(
    function (button) {

      button.onclick =
        function () {

          if (
            sequence.length >= 5
          ) {
            return;
          }


          sequence.push(
            button.dataset.sequence
          );


          drawSequence();
        };
    }
  );


  document.getElementById(
    "rlReset2"
  ).onclick =
    function () {

      sequence = [];

      complete.two =
        false;

      drawSequence();


      document.getElementById(
        "rlFeedback2"
      ).style.color =
        "#111";


      document.getElementById(
        "rlFeedback2"
      ).textContent =
        "Build the sequence from first to last.";


      updateStatus();
    };


  document.getElementById(
    "rlCheck2"
  ).onclick =
    function () {

      if (
        sequence.length !== 5
      ) {

        feedback(
          "rlFeedback2",
          false,
          "Fill all five sequence positions."
        );

        return;
      }


      const correct =
        correctSequence.every(
          function (item,index) {

            return (
              sequence[index]
              ===
              item
            );
          }
        );


      if (correct) {

        complete.two =
          true;


        feedback(
          "rlFeedback2",
          true,
          "✅ <strong>DEPOSITION SEQUENCE CORRECT!</strong><br><br>A → B → C → D → E"
        );

      } else {

        complete.two =
          false;


        feedback(
          "rlFeedback2",
          false,
          "🔍 Sequence incorrect. In the undisturbed core, work from the bottom upward."
        );
      }


      updateStatus();
    };


  drawSequence();


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


    const feedbackBox =
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
        function (choice,choiceIndex) {

          const button =
            document.createElement(
              "button"
            );


          button.type =
            "button";


          button.className =
            "rl-choice";


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
                  ".rl-choice"
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


      feedbackBox.style.color =
        "#111";


      feedbackBox.textContent =
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

          feedbackBox.style.color =
            "#b00020";


          feedbackBox.textContent =
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


          feedbackBox.style.color =
            "#087a35";


          feedbackBox.innerHTML =
            "✅ <strong>Correct!</strong> "
            +
            item.explanation;

        } else {

          feedbackBox.style.color =
            "#b00020";


          feedbackBox.innerHTML =
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

          feedbackBox.style.color =
            "#087a35";


          feedbackBox.innerHTML =
            "🏆 <strong>MISSION COMPLETE!</strong><br><br>Score: "
            +
            score
            +
            " / "
            +
            config.items.length;

        } else {

          feedbackBox.style.color =
            "#b00020";


          feedbackBox.innerHTML =
            "Score: "
            +
            score
            +
            " / "
            +
            config.items.length
            +
            "<br><br>Review the rock evidence before trying again.";
        }


        next.disabled =
          true;


        updateStatus();
      };


    draw();
  }


  /* ========================================================
     MISSION 3
     ======================================================== */


  makeQuiz({

    level:
      "three",

    evidenceId:
      "rlEvidence3",

    questionId:
      "rlQuestion3",

    choicesId:
      "rlChoices3",

    checkId:
      "rlCheck3",

    feedbackId:
      "rlFeedback3",

    nextId:
      "rlNext3",

    scoreId:
      "rlScore3",

    passScore:
      4,

    startText:
      "Follow W.E.D.C.C.",

    items: [

      {
        evidence:
          "💥 A large rock breaks into many smaller pieces.",

        question:
          "Which W.E.D.C.C. process is shown?",

        choices: [
          "Weathering",
          "Erosion",
          "Deposition",
          "Compaction"
        ],

        answer:
          0,

        explanation:
          "Weathering BREAKS rock."
      },

      {
        evidence:
          "🌊 A stream carries sediment downstream.",

        question:
          "Which process is shown?",

        choices: [
          "Deposition",
          "Cementation",
          "Erosion",
          "Compaction"
        ],

        answer:
          2,

        explanation:
          "Erosion MOVES sediment."
      },

      {
        evidence:
          "⬇️ Sediment settles and forms another horizontal layer.",

        question:
          "Which process is shown?",

        choices: [
          "Weathering",
          "Deposition",
          "Compaction",
          "Erosion"
        ],

        answer:
          1,

        explanation:
          "Deposition DROPS sediment and builds layers."
      },

      {
        evidence:
          "🗜️ Weight from material above pushes grains closer together.",

        question:
          "Which process is shown?",

        choices: [
          "Cementation",
          "Weathering",
          "Compaction",
          "Erosion"
        ],

        answer:
          2,

        explanation:
          "Compaction SQUEEZES sediment grains closer together."
      },

      {
        evidence:
          "✨ Minerals form between sediment grains and hold them together.",

        question:
          "Which process is shown?",

        choices: [
          "Cementation",
          "Deposition",
          "Weathering",
          "Erosion"
        ],

        answer:
          0,

        explanation:
          "Cementation BINDS sediment grains."
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
      "rlCoreCase",

    questionId:
      "rlQuestion4",

    choicesId:
      "rlChoices4",

    checkId:
      "rlCheck4",

    feedbackId:
      "rlFeedback4",

    nextId:
      "rlNext4",

    scoreId:
      "rlScore4",

    passScore:
      3,

    startText:
      "Use only the evidence shown.",

    items: [

      {
        evidence:
          `
          <div class="rl-case-core">
            <div style="background:#d9b16f">Layer D</div>
            <div style="background:#df9164">Layer C</div>
            <div style="background:#967964;color:white">Layer B</div>
            <div style="background:#c99c63">Layer A</div>
          </div>
          `,

        question:
          "Which layer was deposited first in this undisturbed model?",

        choices: [
          "Layer D",
          "Layer C",
          "Layer B",
          "Layer A"
        ],

        answer:
          3,

        explanation:
          "Layer A is at the bottom, so it was deposited before the layers above it."
      },

      {
        evidence:
          `
          <div class="rl-case-core">
            <div style="background:#d9b16f">Sand</div>
            <div style="background:#ae7654;color:white">Silt</div>
            <div style="background:#df9164">Clay</div>
          </div>
          `,

        question:
          "Which sediment was deposited most recently in this simple model?",

        choices: [
          "Sand",
          "Silt",
          "Clay",
          "All at exactly the same time"
        ],

        answer:
          0,

        explanation:
          "The sand layer is on top, so it was deposited after the lower layers."
      },

      {
        evidence:
          "A rock column contains six distinct horizontal sedimentary layers.",

        question:
          "Which process most directly explains the creation of the layers?",

        choices: [
          "Repeated deposition",
          "Only weathering",
          "Only cementation",
          "Evaporation"
        ],

        answer:
          0,

        explanation:
          "Repeated deposition can build layer upon layer of sediment."
      },

      {
        evidence:
          "Layers were deposited, then pressure pushed grains closer together and minerals later bound the grains.",

        question:
          "Which sequence best explains the final stages?",

        choices: [
          "Erosion → Weathering",
          "Deposition → Compaction → Cementation",
          "Cementation → Erosion → Weathering",
          "Weathering → Evaporation → Condensation"
        ],

        answer:
          1,

        explanation:
          "Deposition builds layers, compaction squeezes, and cementation binds."
      }

    ]

  });


  updateStatus();

})();
