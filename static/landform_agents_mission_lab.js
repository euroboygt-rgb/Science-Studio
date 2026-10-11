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
      ["one","laStatus1"],
      ["two","laStatus2"],
      ["three","laStatus3"],
      ["four","laStatus4"]
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
        "laFinalMessage"
      );


    if (
      count === 4
    ) {

      final.innerHTML = `

        🏆
        <strong>
          LANDFORM AGENTS MISSION COMPLETE!
        </strong>

        <br><br>

        You proved that you can use

        <strong>
          AGENT → PROCESS → LANDFORM
        </strong>

        to explain changes
        to Earth's surface.

        <br><br>

        <strong>
          EARTH'S SURFACE CHANGE SPECIALIST
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
            "la-choice";


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
                  ".la-choice"
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
            "<br><br>Review the evidence and try again after refreshing.";
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
      "laEvidence1",

    questionId:
      "laQuestion1",

    choicesId:
      "laChoices1",

    checkId:
      "laCheck1",

    feedbackId:
      "laFeedback1",

    nextId:
      "laNext1",

    scoreId:
      "laScore1",

    passScore:
      4,

    startText:
      "Look for evidence of wind, water, or ice.",

    items: [

      {
        evidence:
          "💧 A river carries sand and small rocks downstream.",

        question:
          "Which agent is causing the change?",

        choices: [
          "Water",
          "Wind",
          "Ice",
          "Cement"
        ],

        answer:
          0,

        explanation:
          "Flowing water can transport sediment."
      },

      {
        evidence:
          "💨 Loose desert sand blows across the ground.",

        question:
          "Which agent is causing the change?",

        choices: [
          "Ice",
          "Water",
          "Wind",
          "Compaction"
        ],

        answer:
          2,

        explanation:
          "Wind can transport loose sand and sediment."
      },

      {
        evidence:
          "🧊 A slowly moving glacier drags rock across the ground.",

        question:
          "Which agent is causing the change?",

        choices: [
          "Wind",
          "Ice",
          "Water only",
          "Cementation"
        ],

        answer:
          1,

        explanation:
          "Moving ice can erode and transport Earth material."
      },

      {
        evidence:
          "🏞️ Sediment settles where a river enters a lake.",

        question:
          "Which agent transported the sediment?",

        choices: [
          "Water",
          "Wind",
          "Ice",
          "Heat"
        ],

        answer:
          0,

        explanation:
          "The river water transported the sediment before it was deposited."
      },

      {
        evidence:
          "🏜️ Sand builds into a ridge after being blown across open land.",

        question:
          "Which agent transported the sand?",

        choices: [
          "Water",
          "Wind",
          "Ice",
          "Pressure"
        ],

        answer:
          1,

        explanation:
          "Wind transported the sand."
      }

    ]

  });


  /* ========================================================
     MISSION 2 - CONSTRUCTOR
     ======================================================== */


  let selectedAgent =
    null;


  let selectedProcess =
    null;


  let targetIndex =
    0;


  const targets = [

    {
      name:
        "DELTA",

      icon:
        "🏞️",

      clue:
        "Sediment builds where flowing water slows.",

      agent:
        "water",

      process:
        "deposition",

      className:
        "delta",

      scene:
        "💧➡️ 🌊<br>⬇️⬇️⬇️<br>🏞️ DELTA BUILT",

      explanation:
        "Water transported the sediment. When the water slowed, deposition built the delta."
    },

    {
      name:
        "CANYON",

      icon:
        "🏜️",

      clue:
        "Running water removes rock and sediment over long periods.",

      agent:
        "water",

      process:
        "erosion",

      className:
        "canyon",

      scene:
        "⛰️ 💧 ⛰️<br>⬇️<br>🏜️ CANYON CARVED",

      explanation:
        "Running water causes erosion that can deepen and widen a canyon over time."
    },

    {
      name:
        "SAND DUNE",

      icon:
        "💨🏜️",

      clue:
        "Transported sand is dropped and accumulates.",

      agent:
        "wind",

      process:
        "deposition",

      className:
        "dune",

      scene:
        "💨💨💨<br>•••• ➡️ ⬇️<br>🏜️ SAND DUNE BUILT",

      explanation:
        "Wind transported sand. Deposition allowed the sand to accumulate into a dune."
    },

    {
      name:
        "ICE SURFACE CHANGE",

      icon:
        "🧊🏔️",

      clue:
        "Moving ice scrapes and transports rock and sediment.",

      agent:
        "ice",

      process:
        "erosion",

      className:
        "ice",

      scene:
        "🏔️🧊➡️<br>🪨🪨🪨<br>SURFACE RESHAPED",

      explanation:
        "Moving ice can erode and transport rock and sediment, reshaping Earth's surface."
    }

  ];


  function renderTarget() {

    const target =
      targets[
        targetIndex
      ];


    document.getElementById(
      "laTargetIcon"
    ).textContent =
      target.icon;


    document.getElementById(
      "laTargetName"
    ).textContent =
      target.name;


    document.getElementById(
      "laTargetClue"
    ).textContent =
      target.clue;


    document.getElementById(
      "laLandscapeFeature"
    ).className =
      "la-landscape-feature";


    document.getElementById(
      "laLandscapeFeature"
    ).textContent =
      "SELECT AN AGENT + PROCESS";


    selectedAgent =
      null;


    selectedProcess =
      null;


    document.querySelectorAll(
      ".la-agent, .la-process"
    ).forEach(
      function (button) {

        button.classList.remove(
          "selected"
        );
      }
    );
  }


  document.querySelectorAll(
    ".la-agent"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.querySelectorAll(
            ".la-agent"
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


          selectedAgent =
            button.dataset.agent;
        };
    }
  );


  document.querySelectorAll(
    ".la-process"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          document.querySelectorAll(
            ".la-process"
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


          selectedProcess =
            button.dataset.process;
        };
    }
  );


  document.getElementById(
    "laBuild"
  ).onclick =
    function () {

      const feedback =
        document.getElementById(
          "laFeedback2"
        );


      if (!complete.one) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Complete Mission 1 first.";

        return;
      }


      if (
        !selectedAgent
        ||
        !selectedProcess
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Select both an agent and a process.";

        return;
      }


      const target =
        targets[
          targetIndex
        ];


      if (
        selectedAgent !==
        target.agent
        ||
        selectedProcess !==
        target.process
      ) {

        feedback.style.color =
          "#b00020";


        feedback.innerHTML = `

          ❌ MODEL DID NOT MATCH THE TARGET.

          <br><br>

          Ask:

          <strong>
            What is moving the material?
          </strong>

          <br>

          Then ask:

          <strong>
            Is material moving away
            or being dropped?
          </strong>

        `;

        return;
      }


      const feature =
        document.getElementById(
          "laLandscapeFeature"
        );


      feature.className =
        "la-landscape-feature "
        +
        target.className;


      feature.innerHTML =
        target.scene;


      document.getElementById(
        "laBuildDot"
        +
        (
          targetIndex + 1
        )
      ).classList.add(
        "done"
      );


      feedback.style.color =
        "#087a35";


      feedback.innerHTML =
        "✅ <strong>CORRECT MODEL!</strong><br><br>"
        +
        target.explanation;


      targetIndex += 1;


      if (
        targetIndex >=
        targets.length
      ) {

        complete.two =
          true;


        feedback.innerHTML += `

          <br><br>

          🏆
          <strong>
            LANDFORM CONSTRUCTOR COMPLETE!
          </strong>

        `;


        updateStatus();

        return;
      }


      window.setTimeout(
        renderTarget,
        1600
      );
    };


  /* ========================================================
     MISSION 3
     ======================================================== */


  makeQuiz({

    level:
      "three",

    evidenceId:
      "laEvidence3",

    questionId:
      "laQuestion3",

    choicesId:
      "laChoices3",

    checkId:
      "laCheck3",

    feedbackId:
      "laFeedback3",

    nextId:
      "laNext3",

    scoreId:
      "laScore3",

    passScore:
      4,

    startText:
      "Erosion = MOVE. Deposition = DROP.",

    items: [

      {
        evidence:
          "➡️ River water carries sediment downstream.",

        question:
          "Which process is represented?",

        choices: [
          "Erosion",
          "Deposition"
        ],

        answer:
          0,

        explanation:
          "The sediment is moving, so this is erosion."
      },

      {
        evidence:
          "⬇️ Sediment settles where river water slows.",

        question:
          "Which process is represented?",

        choices: [
          "Erosion",
          "Deposition"
        ],

        answer:
          1,

        explanation:
          "The sediment is being dropped, so this is deposition."
      },

      {
        evidence:
          "💨 Wind carries sand across a field.",

        question:
          "Which process is represented?",

        choices: [
          "Erosion",
          "Deposition"
        ],

        answer:
          0,

        explanation:
          "The sand is being transported, so erosion is occurring."
      },

      {
        evidence:
          "🏜️ Blown sand piles up behind an obstacle.",

        question:
          "Which process is represented?",

        choices: [
          "Erosion",
          "Deposition"
        ],

        answer:
          1,

        explanation:
          "The sand is accumulating, so deposition is occurring."
      },

      {
        evidence:
          "🧊 Moving ice carries rocks across the land.",

        question:
          "Which process is represented most directly?",

        choices: [
          "Erosion / transport",
          "Deposition"
        ],

        answer:
          0,

        explanation:
          "The rock material is being moved by the ice."
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
      "laEvidence4",

    questionId:
      "laQuestion4",

    choicesId:
      "laChoices4",

    checkId:
      "laCheck4",

    feedbackId:
      "laFeedback4",

    nextId:
      "laNext4",

    scoreId:
      "laScore4",

    passScore:
      5,

    startText:
      "Identify: agent → process → landform.",

    items: [

      {
        evidence:
          `
          <strong>CASE 1</strong><br><br>
          A river flows through rock
          and removes material
          year after year.
          `,

        question:
          "Which landform could this process help form?",

        choices: [
          "Canyon",
          "Delta",
          "Sand dune",
          "Volcano"
        ],

        answer:
          0,

        explanation:
          "Running-water erosion can contribute to canyon formation."
      },

      {
        evidence:
          `
          <strong>CASE 2</strong><br><br>
          A river enters a lake.
          Its water slows,
          and sediment settles.
          `,

        question:
          "Which landform can build?",

        choices: [
          "Canyon",
          "Sand dune",
          "Delta",
          "Mountain"
        ],

        answer:
          2,

        explanation:
          "Water deposition can build a delta."
      },

      {
        evidence:
          `
          <strong>CASE 3</strong><br><br>
          Wind transports sand,
          then drops it
          when wind speed decreases.
          `,

        question:
          "Which landform may form?",

        choices: [
          "Delta",
          "Sand dune",
          "Canyon",
          "River"
        ],

        answer:
          1,

        explanation:
          "Wind deposition builds sand dunes."
      },

      {
        evidence:
          `
          <strong>CASE 4</strong><br><br>
          A glacier moves slowly
          across rock,
          scraping and carrying
          loose material.
          `,

        question:
          "Which agent is changing the surface?",

        choices: [
          "Wind",
          "Water",
          "Ice",
          "Heat"
        ],

        answer:
          2,

        explanation:
          "A glacier is moving ice."
      },

      {
        evidence:
          `
          <strong>CASE 5</strong><br><br>
          Student claim:
          "Deposition means sediment is moving away."
          `,

        question:
          "Which correction is best?",

        choices: [
          "Correct; deposition means move.",
          "Incorrect; erosion moves sediment and deposition drops it.",
          "Incorrect; cementation moves sediment.",
          "Correct; deposition and erosion mean the same thing."
        ],

        answer:
          1,

        explanation:
          "Erosion = MOVE. Deposition = DROP."
      },

      {
        evidence:
          `
          <strong>CASE 6</strong><br><br>
          Canyon — ?
          Delta — ?
          Sand dune — ?
          `,

        question:
          "Which set correctly matches each landform to a major process in our model?",

        choices: [
          "Canyon = water erosion; Delta = water deposition; Sand dune = wind deposition",
          "Canyon = wind deposition; Delta = ice erosion; Sand dune = water cementation",
          "Canyon = water deposition; Delta = wind erosion; Sand dune = ice compaction",
          "All three = cementation only"
        ],

        answer:
          0,

        explanation:
          "That set correctly matches the three required landform patterns."
      }

    ]

  });


  renderTarget();

  updateStatus();

})();
