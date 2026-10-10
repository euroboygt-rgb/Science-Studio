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
      ["one","feStatus1"],
      ["two","feStatus2"],
      ["three","feStatus3"],
      ["four","feStatus4"]
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
        "feFinalMessage"
      );


    if (
      count === 4
    ) {

      final.innerHTML = `

        🏆
        <strong>
          ALL FOSSIL CASE FILES SOLVED!
        </strong>

        <br><br>

        You used layer position,
        fossil evidence,
        and knowledge of organisms
        to reconstruct past environments.

        <br><br>

        <strong>
          FOSSIL EVIDENCE DETECTIVE
          STATUS EARNED.
        </strong>

      `;

    } else {

      final.textContent =
        count
        +
        " of 4 fossil investigations complete.";
    }
  }


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
              function (item) {

                item.classList.remove(
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


  let oldest =
    null;


  let youngest =
    null;


  singleChoice(
    "[data-old]",
    function (button) {

      oldest =
        button.dataset.old;
    }
  );


  singleChoice(
    "[data-young]",
    function (button) {

      youngest =
        button.dataset.young;
    }
  );


  document.getElementById(
    "feCheck1"
  ).onclick =
    function () {

      if (
        !oldest ||
        !youngest
      ) {

        feedback(
          "feFeedback1",
          false,
          "Choose both the oldest and most recently deposited layers."
        );

        return;
      }


      if (
        oldest === "A"
        &&
        youngest === "D"
      ) {

        complete.one =
          true;


        feedback(
          "feFeedback1",
          true,
          "✅ <strong>LAYER AGE SCANNER COMPLETE!</strong><br><br>Layer A is the bottom layer and was deposited first. Layer D is on top and was deposited later."
        );

      } else {

        complete.one =
          false;


        feedback(
          "feFeedback1",
          false,
          "🔍 Try again. In this simple undisturbed model, read the deposition sequence from the bottom upward."
        );
      }


      updateStatus();
    };


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

      selected =
        null;


      answered =
        false;


      const item =
        config.items[
          index
        ];


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
            "fe-choice";


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
                  ".fe-choice"
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
          config.items[
            index
          ];


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
            "<br><br>Review the fossil evidence before trying again.";
        }


        next.disabled =
          true;


        updateStatus();
      };


    draw();
  }


  /* ========================================================
     MISSION 2
     ======================================================== */


  makeQuiz({

    level:
      "two",

    evidenceId:
      "feEvidence2",

    questionId:
      "feQuestion2",

    choicesId:
      "feChoices2",

    checkId:
      "feCheck2",

    feedbackId:
      "feFeedback2",

    nextId:
      "feNext2",

    scoreId:
      "feScore2",

    passScore:
      2,

    startText:
      "Use the fossil as evidence.",

    items: [

      {
        evidence:
          "🐟 <strong>Fossil:</strong> Fish",

        question:
          "Which past environment is most strongly supported?",

        choices: [
          "Aquatic environment",
          "Dry desert with no water",
          "Space",
          "Volcanic lava only"
        ],

        answer:
          0,

        explanation:
          "Fish require an aquatic environment."
      },

      {
        evidence:
          "🌿 <strong>Fossil:</strong> Leaf from a land plant",

        question:
          "Which conclusion is best supported?",

        choices: [
          "Plants once grew in the area.",
          "The area contained no living things.",
          "The fossil proves the area was always ocean.",
          "The fossil describes tomorrow's weather."
        ],

        answer:
          0,

        explanation:
          "A plant fossil provides evidence that plants lived in the area in the past."
      },

      {
        evidence:
          "🐚 <strong>Fossil:</strong> Aquatic shell organism",

        question:
          "What is the strongest environmental clue?",

        choices: [
          "Water was once part of the environment.",
          "The area was always completely dry.",
          "The fossil formed today.",
          "No environmental information is available."
        ],

        answer:
          0,

        explanation:
          "An aquatic-organism fossil supports the presence of a past aquatic environment."
      }

    ]

  });


  /* ========================================================
     MISSION 3
     ======================================================== */


  let claim =
    null;


  const support =
    new Set();


  singleChoice(
    "[data-claim]",
    function (button) {

      claim =
        button.dataset.claim;
    }
  );


  document.querySelectorAll(
    "[data-support]"
  ).forEach(
    function (button) {

      button.onclick =
        function () {

          const key =
            button.dataset.support;


          if (
            support.has(
              key
            )
          ) {

            support.delete(
              key
            );


            button.classList.remove(
              "selected"
            );

          } else {

            if (
              support.size >= 2
            ) {
              return;
            }


            support.add(
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
    "feCheck3"
  ).onclick =
    function () {

      if (
        !claim ||
        support.size !== 2
      ) {

        feedback(
          "feFeedback3",
          false,
          "Choose one claim and exactly TWO supporting ideas."
        );

        return;
      }


      const correctSupport =
        support.has(
          "fossil"
        )
        &&
        support.has(
          "fishwater"
        );


      if (
        claim === "A"
        &&
        correctSupport
      ) {

        complete.three =
          true;


        feedback(
          "feFeedback3",
          true,
          "🐟🏜️ <strong>DESERT FISH MYSTERY SOLVED!</strong><br><br>The fish fossil is the observation. Fish require aquatic environments. Together, these support the inference that this area once had water and the environment later changed."
        );

      } else {

        complete.three =
          false;


        feedback(
          "feFeedback3",
          false,
          "🔍 Case remains open. Use the fossil observation plus what you know about where fish live."
        );
      }


      updateStatus();
    };


  /* ========================================================
     MISSION 4
     ======================================================== */


  makeQuiz({

    level:
      "four",

    evidenceId:
      "feEvidence4",

    questionId:
      "feQuestion4",

    choicesId:
      "feChoices4",

    checkId:
      "feCheck4",

    feedbackId:
      "feFeedback4",

    nextId:
      "feNext4",

    scoreId:
      "feScore4",

    passScore:
      3,

    startText:
      "Use all available evidence.",

    items: [

      {
        evidence:
          `
          <strong>CASE FILE A</strong><br><br>
          Present environment: dry rocky land.<br>
          Evidence: several fish fossils are found in an older sedimentary layer.
          `,

        question:
          "Which conclusion is best supported?",

        choices: [
          "The area once had an aquatic environment.",
          "Fish have always lived on dry land.",
          "The fossils describe only the present environment.",
          "The environment never changed."
        ],

        answer:
          0,

        explanation:
          "Fish fossils provide evidence that an aquatic environment existed there in the past."
      },

      {
        evidence:
          `
          <strong>CASE FILE B</strong><br><br>
          Four undisturbed layers:<br>
          D — top<br>
          C<br>
          B<br>
          A — bottom
          `,

        question:
          "Which layer is oldest in this model?",

        choices: [
          "Layer D",
          "Layer C",
          "Layer B",
          "Layer A"
        ],

        answer:
          3,

        explanation:
          "Layer A is at the bottom and was deposited before the layers above it."
      },

      {
        evidence:
          `
          <strong>CASE FILE C</strong><br><br>
          A leaf fossil occurs in Layer 2.
          A fish fossil occurs in the lower Layer 1.
          `,

        question:
          "Which fossil is found in the older layer?",

        choices: [
          "The leaf fossil",
          "The fish fossil",
          "Both are automatically the same age",
          "There is no way to use layer position"
        ],

        answer:
          1,

        explanation:
          "Layer 1 is lower in the undisturbed model, so it was deposited before Layer 2."
      },

      {
        evidence:
          `
          <strong>CASE FILE D</strong><br><br>
          Fossils of aquatic organisms occur in lower rock layers.
          Fossils of land plants occur in higher layers.
          `,

        question:
          "Which explanation is most reasonable?",

        choices: [
          "The environmental conditions represented by the layers changed over time.",
          "Every layer represents exactly the same environment.",
          "Fossils cannot provide environmental evidence.",
          "The lower fossils must have formed yesterday."
        ],

        answer:
          0,

        explanation:
          "Different fossil evidence in different layers can support a change in environmental conditions over time."
      }

    ]

  });


  updateStatus();

})();
