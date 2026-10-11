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
      ["one","dbStatus1"],
      ["two","dbStatus2"],
      ["three","dbStatus3"],
      ["four","dbStatus4"]
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
        "dbFinalMessage"
      );


    if (
      count === 4
    ) {

      final.innerHTML = `

        🏆
        <strong>
          DELTA BUILDER COMPLETE!
        </strong>

        <br><br>

        You modeled:

        <br><br>

        💧 Water
        → ➡️ Sediment Transport
        → 🐢 Slower Flow
        → ⬇️ Deposition
        → 🏞️ Delta

        <br><br>

        <strong>
          DELTA FORMATION ENGINEER
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
            "db-choice";


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
                  ".db-choice"
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
            "<br><br>Review the delta evidence and try again after refreshing.";
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
      "dbEvidence1",

    questionId:
      "dbQuestion1",

    choicesId:
      "dbChoices1",

    checkId:
      "dbCheck1",

    feedbackId:
      "dbFeedback1",

    nextId:
      "dbNext1",

    scoreId:
      "dbScore1",

    passScore:
      4,

    startText:
      "Follow the sediment.",

    items: [

      {
        evidence:
          "💧 A river carries sand and silt downstream.",

        question:
          "What is happening to the sediment?",

        choices: [
          "It is being transported.",
          "It is being cemented.",
          "It is becoming magnetic.",
          "It is forming a fossil."
        ],

        answer:
          0,

        explanation:
          "Moving water is transporting the sediment."
      },

      {
        evidence:
          "📍 A river enters a large lake.",

        question:
          "What is this location called?",

        choices: [
          "River mouth",
          "Mountain peak",
          "Canyon wall",
          "Glacier"
        ],

        answer:
          0,

        explanation:
          "A river mouth is where a river enters another body of water."
      },

      {
        evidence:
          "🐢 River water slows and grains begin settling.",

        question:
          "Which process is beginning?",

        choices: [
          "Weathering",
          "Cementation",
          "Deposition",
          "Magnetism"
        ],

        answer:
          2,

        explanation:
          "Settling sediment is deposition."
      },

      {
        evidence:
          "⬇️ Layer after layer of sediment accumulates near a river mouth.",

        question:
          "Which landform can this build?",

        choices: [
          "Delta",
          "Canyon",
          "Volcano",
          "Mountain"
        ],

        answer:
          0,

        explanation:
          "Repeated deposition can build a delta."
      },

      {
        evidence:
          "🏞️ A landform grows outward from deposited river sediment.",

        question:
          "Which agent delivered the sediment?",

        choices: [
          "Water",
          "Magnetism",
          "Light",
          "Electricity"
        ],

        answer:
          0,

        explanation:
          "River water transported the sediment."
      }

    ]

  });


  /* ========================================================
     MISSION 2 - INTERACTIVE DELTA BUILDER
     ======================================================== */


  let load =
    null;


  let speed =
    null;


  let transported =
    false;


  let cycles =
    0;


  document.querySelectorAll(
    ".db-load"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.querySelectorAll(
            ".db-load"
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


          load =
            button.dataset.load;


          document.getElementById(
            "dbRiverParticles"
          ).textContent =
            load === "high"
              ?
              "• • • • •"
              :
              "•";
        };
    }
  );


  document.querySelectorAll(
    ".db-speed"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.querySelectorAll(
            ".db-speed"
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


          speed =
            button.dataset.speed;
        };
    }
  );


  document.getElementById(
    "dbTransport"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "dbFeedback2"
        );


      if (!complete.one) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Complete Mission 1 first.";

        return;
      }


      if (!load) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Choose a sediment load first.";

        return;
      }


      if (
        load !== "high"
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Your river can transport this small load, but the engineering mission needs a larger sediment supply to build the target delta efficiently.";

        return;
      }


      if (
        speed !== "fast"
        &&
        speed !== "medium"
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "The water is too slow for the transport step. Increase the flow before moving the sediment downstream.";

        return;
      }


      transported =
        true;


      const particles =
        document.getElementById(
          "dbRiverParticles"
        );


      particles.classList.add(
        "moving"
      );


      window.setTimeout(
        function () {

          particles.classList.remove(
            "moving"
          );
        },
        650
      );


      feedback.style.color =
        "#087a35";


      feedback.innerHTML = `

        ➡️
        <strong>
          SEDIMENT TRANSPORTED!
        </strong>

        <br><br>

        The river moved
        the sediment downstream.

        <br><br>

        Now the river is approaching
        the larger body of water.

        <strong>
          What should happen to the flow
          before deposition?
        </strong>

      `;
    };


  document.getElementById(
    "dbDeposit"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "dbFeedback2"
        );


      if (!transported) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Transport sediment downstream before trying to deposit it.";

        return;
      }


      if (
        speed !== "slow"
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "The river is still moving too quickly in our model. Change the flow to SLOW so the sediment can settle.";

        return;
      }


      cycles += 1;


      transported =
        false;


      document.getElementById(
        "dbCycle"
        +
        cycles
      ).classList.add(
        "done"
      );


      const fan =
        document.getElementById(
          "dbDeltaFan"
        );


      fan.className =
        "db-delta-fan stage"
        +
        cycles;


      fan.innerHTML =
        cycles < 3
          ?
          "⬇️ DEPOSIT "
          +
          cycles
          :
          "🏞️ DELTA BUILT";


      feedback.style.color =
        "#087a35";


      feedback.innerHTML =
        "⬇️ <strong>DEPOSITION CYCLE "
        +
        cycles
        +
        " COMPLETE!</strong><br><br>"
        +
        "Sediment settled and the delta grew.";


      if (
        cycles >= 3
      ) {

        complete.two =
          true;


        feedback.innerHTML += `

          <br><br>

          🏆
          <strong>
            DELTA CONSTRUCTION COMPLETE!
          </strong>

          <br><br>

          Three rounds of
          transport followed by deposition
          built the landform.

        `;


        updateStatus();

        return;
      }


      speed =
        null;


      document.querySelectorAll(
        ".db-speed"
      ).forEach(
        function (button) {

          button.classList.remove(
            "selected"
          );
        }
      );


      feedback.innerHTML += `

        <br><br>

        Begin another cycle:

        <strong>
          speed up → transport → slow down → deposit.
        </strong>

      `;
    };


  /* ========================================================
     MISSION 3
     ======================================================== */


  makeQuiz({

    level:
      "three",

    evidenceId:
      "dbEvidence3",

    questionId:
      "dbQuestion3",

    choicesId:
      "dbChoices3",

    checkId:
      "dbCheck3",

    feedbackId:
      "dbFeedback3",

    nextId:
      "dbNext3",

    scoreId:
      "dbScore3",

    passScore:
      4,

    startText:
      "Think about transport and deposition.",

    items: [

      {
        evidence:
          "⚡ Water is moving quickly and carrying many sediment grains.",

        question:
          "Which process is most obvious?",

        choices: [
          "Transport / erosion",
          "Deposition",
          "Cementation",
          "Compaction"
        ],

        answer:
          0,

        explanation:
          "The moving water is transporting sediment."
      },

      {
        evidence:
          "🐢 Water slows and grains begin settling to the bottom.",

        question:
          "What increases in this model?",

        choices: [
          "Deposition",
          "Transport speed",
          "Magnetism",
          "Reflection"
        ],

        answer:
          0,

        explanation:
          "Slower flow allows more transported sediment to settle in our model."
      },

      {
        evidence:
          "💧 A river reaches its mouth with almost no sediment.",

        question:
          "What is missing for strong delta building?",

        choices: [
          "Sediment supply",
          "A prism",
          "A magnet",
          "A circuit"
        ],

        answer:
          0,

        explanation:
          "A delta needs sediment available for deposition."
      },

      {
        evidence:
          "••••• A river delivers a large amount of sediment and some of it settles.",

        question:
          "What does the settling sediment add to?",

        choices: [
          "Delta growth",
          "Canyon erosion only",
          "Magnetic force",
          "Light reflection"
        ],

        answer:
          0,

        explanation:
          "Deposited sediment can add material to a delta."
      },

      {
        evidence:
          "➡️ Sediment moves first. ⬇️ Later, it settles.",

        question:
          "Which sequence is correct?",

        choices: [
          "Transport then deposition",
          "Deposition then transport",
          "Cementation then erosion",
          "Compaction then weathering"
        ],

        answer:
          0,

        explanation:
          "The sediment must be transported to the location before it can be deposited there."
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
      "dbEvidence4",

    questionId:
      "dbQuestion4",

    choicesId:
      "dbChoices4",

    checkId:
      "dbCheck4",

    feedbackId:
      "dbFeedback4",

    nextId:
      "dbNext4",

    scoreId:
      "dbScore4",

    passScore:
      5,

    startText:
      "Follow the sediment evidence.",

    items: [

      {
        evidence:
          `
          <strong>CASE 1</strong><br><br>
          A river carries sediment
          toward the ocean.
          `,

        question:
          "What process is occurring while the sediment is moving?",

        choices: [
          "Erosion / transport",
          "Deposition",
          "Cementation",
          "Compaction"
        ],

        answer:
          0,

        explanation:
          "Moving sediment is erosion and transport."
      },

      {
        evidence:
          `
          <strong>CASE 2</strong><br><br>
          At the river mouth,
          water slows and sediment settles.
          `,

        question:
          "Which process is occurring?",

        choices: [
          "Weathering",
          "Deposition",
          "Compaction",
          "Cementation"
        ],

        answer:
          1,

        explanation:
          "Settling sediment is deposition."
      },

      {
        evidence:
          `
          <strong>CASE 3</strong><br><br>
          Deposition happens repeatedly
          at the same river mouth.
          `,

        question:
          "Which landform can grow?",

        choices: [
          "Delta",
          "Canyon",
          "Volcano",
          "Glacier"
        ],

        answer:
          0,

        explanation:
          "Repeated river deposition can build a delta."
      },

      {
        evidence:
          `
          <strong>CASE 4</strong><br><br>
          Student claim:
          "A delta forms because the river
          erodes a deep hole."
          `,

        question:
          "Which response is best?",

        choices: [
          "Correct; a delta is mainly erosional.",
          "Incorrect; a delta is mainly built from deposited river sediment.",
          "Correct; deposition removes sediment.",
          "Incorrect because wind is the only delta-forming agent."
        ],

        answer:
          1,

        explanation:
          "A delta is a depositional landform."
      },

      {
        evidence:
          `
          <strong>CASE 5</strong><br><br>
          Two rivers enter similar lakes.
          River A carries much more sediment
          than River B.
          `,

        question:
          "Which river has more material available for deposition?",

        choices: [
          "River A",
          "River B",
          "Neither river",
          "Sediment supply does not matter"
        ],

        answer:
          0,

        explanation:
          "River A delivers more sediment that could potentially be deposited."
      },

      {
        evidence:
          `
          <strong>CASE 6</strong><br><br>
          💧 → ➡️ → 🐢 → ⬇️ → ?
          `,

        question:
          "Which landform best completes the model?",

        choices: [
          "Delta",
          "Canyon",
          "Sand dune",
          "Mountain"
        ],

        answer:
          0,

        explanation:
          "Water transports sediment, flow slows, deposition occurs, and a delta can build."
      }

    ]

  });


  updateStatus();

})();
