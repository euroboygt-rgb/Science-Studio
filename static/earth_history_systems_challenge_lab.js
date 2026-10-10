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
      ["one","ehStatus1"],
      ["two","ehStatus2"],
      ["three","ehStatus3"],
      ["four","ehStatus4"]
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
        "ehFinalMessage"
      );


    if (
      count === 4
    ) {

      final.innerHTML = `

        🏆
        <strong>
          EARTH HISTORY SYSTEMS CHALLENGE COMPLETE!
        </strong>

        <br><br>

        You successfully identified
        sedimentary-rock processes,
        rock-layer evidence,
        fossil-environment evidence,
        coal formation,
        and petroleum/natural-gas formation.

        <br><br>

        <strong>
          EARTH HISTORY SYSTEMS SPECIALIST
          STATUS EARNED.
        </strong>

        <br><br>

        Day 97 certification unlocked.

      `;

    } else {

      final.textContent =
        count
        +
        " of 4 systems challenges complete.";
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
            "eh-choice";


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
                  ".eh-choice"
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
            "<br><br>Review the evidence before trying again.";
        }


        next.disabled =
          true;


        updateStatus();
      };


    draw();
  }


  /* ========================================================
     MISSION 1 - WEDCC
     ======================================================== */


  makeQuiz({

    level:
      "one",

    evidenceId:
      "ehEvidence1",

    questionId:
      "ehQuestion1",

    choicesId:
      "ehChoices1",

    checkId:
      "ehCheck1",

    feedbackId:
      "ehFeedback1",

    nextId:
      "ehNext1",

    scoreId:
      "ehScore1",

    passScore:
      4,

    startText:
      "BREAK → MOVE → DROP → SQUEEZE → BIND",

    items: [

      {
        evidence:
          "💥 A rock cracks into many smaller pieces.",

        question:
          "Which process is represented?",

        choices: [
          "Weathering",
          "Erosion",
          "Deposition",
          "Cementation"
        ],

        answer:
          0,

        explanation:
          "Weathering BREAKS rock."
      },

      {
        evidence:
          "➡️ A river carries sediment downstream.",

        question:
          "Which process is represented?",

        choices: [
          "Compaction",
          "Erosion",
          "Cementation",
          "Deposition"
        ],

        answer:
          1,

        explanation:
          "Erosion MOVES sediment."
      },

      {
        evidence:
          "⬇️ Sediment settles onto the bottom of a lake.",

        question:
          "Which process is represented?",

        choices: [
          "Weathering",
          "Cementation",
          "Deposition",
          "Compaction"
        ],

        answer:
          2,

        explanation:
          "Deposition DROPS sediment."
      },

      {
        evidence:
          "🗜️ Weight from layers above squeezes grains closer together.",

        question:
          "Which process is represented?",

        choices: [
          "Compaction",
          "Erosion",
          "Weathering",
          "Deposition"
        ],

        answer:
          0,

        explanation:
          "Compaction SQUEEZES sediment grains."
      },

      {
        evidence:
          "🧱 Mineral material forms between sediment grains and binds them.",

        question:
          "Which process is represented?",

        choices: [
          "Deposition",
          "Weathering",
          "Erosion",
          "Cementation"
        ],

        answer:
          3,

        explanation:
          "Cementation BINDS sediment grains."
      }

    ]

  });


  /* ========================================================
     MISSION 2 - LAYERS + FOSSILS
     ======================================================== */


  makeQuiz({

    level:
      "two",

    evidenceId:
      "ehEvidence2",

    questionId:
      "ehQuestion2",

    choicesId:
      "ehChoices2",

    checkId:
      "ehCheck2",

    feedbackId:
      "ehFeedback2",

    nextId:
      "ehNext2",

    scoreId:
      "ehScore2",

    passScore:
      3,

    startText:
      "Oldest at bottom. Fossils are evidence.",

    items: [

      {
        evidence:
          `
          <strong>CASE A</strong><br><br>
          Simple undisturbed layers:<br>
          D — top<br>
          C<br>
          B<br>
          A — bottom
          `,

        question:
          "Which layer is oldest?",

        choices: [
          "Layer D",
          "Layer C",
          "Layer B",
          "Layer A"
        ],

        answer:
          3,

        explanation:
          "Layer A is at the bottom and was deposited first in this model."
      },

      {
        evidence:
          `
          <strong>CASE B</strong><br><br>
          A fish fossil is discovered
          in a sedimentary rock layer
          beneath a modern desert.
          `,

        question:
          "Which conclusion is best supported?",

        choices: [
          "The area once had an aquatic environment.",
          "Fish have always lived in dry sand.",
          "The environment never changed.",
          "The fossil proves the exact depth of the ancient water."
        ],

        answer:
          0,

        explanation:
          "The fish fossil supports a past aquatic environment."
      },

      {
        evidence:
          `
          <strong>CASE C</strong><br><br>
          A shell fossil occurs in Layer 1.
          A plant fossil occurs in Layer 3.
          Layer 1 is below Layer 3.
          `,

        question:
          "Which fossil is in the older layer?",

        choices: [
          "Plant fossil",
          "Shell fossil",
          "Both must be identical in age",
          "Layer position provides no evidence"
        ],

        answer:
          1,

        explanation:
          "Layer 1 is lower in the undisturbed model, so it was deposited earlier."
      },

      {
        evidence:
          `
          <strong>CASE D</strong><br><br>
          Aquatic-organism fossils occur in lower layers.
          Land-plant fossils occur in higher layers.
          `,

        question:
          "Which conclusion is most reasonable?",

        choices: [
          "The environmental conditions represented by the layers changed over time.",
          "Every layer represents exactly the same environment.",
          "Fossils cannot provide environmental evidence.",
          "The higher fossils must be older because they are easier to see."
        ],

        answer:
          0,

        explanation:
          "Different fossil evidence in different layers can support environmental change over time."
      }

    ]

  });


  /* ========================================================
     MISSION 3 - FOSSIL FUEL MATCH
     ======================================================== */


  makeQuiz({

    level:
      "three",

    evidenceId:
      "ehEvidence3",

    questionId:
      "ehQuestion3",

    choicesId:
      "ehChoices3",

    checkId:
      "ehCheck3",

    feedbackId:
      "ehFeedback3",

    nextId:
      "ehNext3",

    scoreId:
      "ehScore3",

    passScore:
      4,

    startText:
      "Follow the source material.",

    items: [

      {
        evidence:
          "🌿 Ancient swamp plants accumulate and form peat.",

        question:
          "Which fossil-fuel pathway is represented?",

        choices: [
          "Coal",
          "Petroleum / natural gas",
          "Both equally from this clue",
          "Neither"
        ],

        answer:
          0,

        explanation:
          "Peat and ancient swamp plants identify the coal pathway."
      },

      {
        evidence:
          "🌊🦠 Tiny ancient aquatic organisms become buried beneath marine sediments.",

        question:
          "Which pathway is most closely represented?",

        choices: [
          "Coal",
          "Petroleum / natural gas",
          "Sedimentary rock only",
          "Weathering"
        ],

        answer:
          1,

        explanation:
          "Ancient aquatic organic material is commonly connected to petroleum and natural gas."
      },

      {
        evidence:
          "♨️🗜️🕰️ Deep burial, heat, pressure, and millions of years.",

        question:
          "Which statement is best?",

        choices: [
          "These conditions can be important to both coal and petroleum/natural-gas formation.",
          "Only coal requires time.",
          "Only petroleum requires burial.",
          "These conditions describe cementation only."
        ],

        answer:
          0,

        explanation:
          "Both fossil-fuel pathways involve long geologic change under suitable burial conditions."
      },

      {
        evidence:
          "🟫 Partly decayed plant material accumulated in a wet environment.",

        question:
          "What is this material called?",

        choices: [
          "Petroleum",
          "Peat",
          "Natural gas",
          "Cement"
        ],

        answer:
          1,

        explanation:
          "Peat is an early plant-rich material in the coal pathway."
      },

      {
        evidence:
          "🛢️ A liquid fossil fuel and 🔥 a gaseous fossil fuel are present.",

        question:
          "Which pair is represented?",

        choices: [
          "Coal and peat",
          "Petroleum and natural gas",
          "Weathering and erosion",
          "Sand and clay"
        ],

        answer:
          1,

        explanation:
          "Petroleum is liquid; natural gas is gaseous."
      }

    ]

  });


  /* ========================================================
     MISSION 4 - MASTER MIXED CASES
     ======================================================== */


  makeQuiz({

    level:
      "four",

    evidenceId:
      "ehEvidence4",

    questionId:
      "ehQuestion4",

    choicesId:
      "ehChoices4",

    checkId:
      "ehCheck4",

    feedbackId:
      "ehFeedback4",

    nextId:
      "ehNext4",

    scoreId:
      "ehScore4",

    passScore:
      5,

    startText:
      "Identify the evidence first.",

    items: [

      {
        evidence:
          `
          <strong>MASTER CASE 1</strong><br><br>
          Loose sediment is pressed together,
          then mineral material binds the grains.
          `,

        question:
          "Which two processes are occurring?",

        choices: [
          "Weathering + erosion",
          "Deposition + erosion",
          "Compaction + cementation",
          "Coal + petroleum formation"
        ],

        answer:
          2,

        explanation:
          "Compaction squeezes; cementation binds."
      },

      {
        evidence:
          `
          <strong>MASTER CASE 2</strong><br><br>
          A fossilized aquatic organism is found
          in rock beneath a dry present-day landscape.
          `,

        question:
          "What does the evidence best support?",

        choices: [
          "The area once had an aquatic environment.",
          "The fossil formed yesterday.",
          "The area was always dry.",
          "Every fossil becomes fossil fuel."
        ],

        answer:
          0,

        explanation:
          "Aquatic fossil evidence supports the presence of water in the past."
      },

      {
        evidence:
          `
          <strong>MASTER CASE 3</strong><br><br>
          Ancient plants → peat → deep burial
          → heat + pressure → millions of years.
          `,

        question:
          "Which product is most closely represented?",

        choices: [
          "Coal",
          "Petroleum only",
          "Clouds",
          "Sediment"
        ],

        answer:
          0,

        explanation:
          "Ancient plants and peat identify the coal pathway."
      },

      {
        evidence:
          `
          <strong>MASTER CASE 4</strong><br><br>
          Ancient aquatic organic material is buried
          beneath thick sediment and changes over geologic time.
          `,

        question:
          "Which products are most closely connected to this model?",

        choices: [
          "Coal only",
          "Petroleum and natural gas",
          "Peat only",
          "Sedimentary rock only"
        ],

        answer:
          1,

        explanation:
          "This is the petroleum and natural-gas pathway."
      },

      {
        evidence:
          `
          <strong>MASTER CASE 5</strong><br><br>
          Layer E is on top.
          Layer A is on the bottom.
          The sequence is undisturbed.
          `,

        question:
          "Which statement is supported?",

        choices: [
          "Layer E was deposited first.",
          "Layer A was deposited before Layer E.",
          "All layers formed at exactly the same time.",
          "Layer color determines age."
        ],

        answer:
          1,

        explanation:
          "The lower Layer A was deposited before the layers above it."
      },

      {
        evidence:
          `
          <strong>MASTER CASE 6</strong><br><br>
          A student says:
          "Cementation turns ancient organisms into coal,
          petroleum, and natural gas."
          `,

        question:
          "Which correction is best?",

        choices: [
          "Correct; cementation creates all fossil fuels.",
          "Incorrect; cementation helps form sedimentary rock, while fossil fuels form from ancient organic material under other geologic conditions.",
          "Correct; all fossils become fuel.",
          "Incorrect because fossil fuels form in one day."
        ],

        answer:
          1,

        explanation:
          "Cementation belongs to sedimentary-rock formation, not the direct fossil-fuel formation pathway."
      }

    ]

  });


  updateStatus();

})();
