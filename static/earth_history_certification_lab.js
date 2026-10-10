(function () {
  "use strict";


  const passed = {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false
  };


  function updateCertification() {

    const map = [
      ["one","certStatus1"],
      ["two","certStatus2"],
      ["three","certStatus3"],
      ["four","certStatus4"],
      ["five","certStatus5"]
    ];


    map.forEach(
      function (item) {

        const box =
          document.getElementById(
            item[1]
          );


        const done =
          passed[
            item[0]
          ];


        box.querySelector(
          "span"
        ).textContent =
          done
            ? "✅"
            : "🔒";


        box.classList.toggle(
          "passed",
          done
        );
      }
    );


    const count =
      Object.values(
        passed
      ).filter(Boolean).length;


    document.getElementById(
      "certProgressBar"
    ).style.width =
      (
        count / 5 * 100
      )
      +
      "%";


    document.getElementById(
      "certProgressText"
    ).textContent =
      count
      +
      " / 5 LEVELS CERTIFIED";


    if (
      count === 5
    ) {

      const vault =
        document.getElementById(
          "certVault"
        );


      vault.classList.remove(
        "locked"
      );


      vault.classList.add(
        "unlocked"
      );


      document.getElementById(
        "certLockIcon"
      ).textContent =
        "🏆";


      document.getElementById(
        "certVaultMessage"
      ).innerHTML = `

        <strong>
          CERTIFICATION UNLOCKED!
        </strong>

        <br><br>

        All five mastery levels
        have been passed.

        <br><br>

        You are now certified as a

        <strong>
          Sedimentary Rocks &amp; Fossil Fuels
          Science Specialist.
        </strong>

      `;


      document.getElementById(
        "certCertificate"
      ).classList.add(
        "show"
      );
    }
  }


  function makeCertification(config) {

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
            "cert-choice";


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
                  ".cert-choice"
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
          "SUBMIT LEVEL →"
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


        if (
          score >=
          config.passScore
        ) {

          passed[
            config.level
          ] =
            true;


          feedback.style.color =
            "#087a35";


          feedback.innerHTML = `

            🏆
            <strong>
              LEVEL CERTIFIED!
            </strong>

            <br><br>

            Final score:
            ${score} / ${config.items.length}

          `;

        } else {

          feedback.style.color =
            "#b00020";


          feedback.innerHTML = `

            LEVEL NOT YET CERTIFIED.

            <br><br>

            Score:
            ${score} / ${config.items.length}

            <br><br>

            Required:
            ${config.passScore} / ${config.items.length}

            <br><br>

            Review the evidence
            and try the level again
            after refreshing the page.

          `;
        }


        next.disabled =
          true;


        updateCertification();
      };


    draw();
  }


  /* ========================================================
     LEVEL 1
     ======================================================== */


  makeCertification({

    level:
      "one",

    evidenceId:
      "certEvidence1",

    questionId:
      "certQuestion1",

    choicesId:
      "certChoices1",

    checkId:
      "certCheck1",

    feedbackId:
      "certFeedback1",

    nextId:
      "certNext1",

    scoreId:
      "certScore1",

    passScore:
      4,

    startText:
      "BREAK → MOVE → DROP → SQUEEZE → BIND",

    items: [

      {
        evidence:
          "💥 Water freezes in a crack and pieces of rock break apart.",

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
          "Weathering breaks rock into smaller pieces."
      },

      {
        evidence:
          "➡️ Wind carries loose sand across the ground.",

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
          "Erosion moves sediment."
      },

      {
        evidence:
          "⬇️ Sediment settles at the bottom of calm water.",

        question:
          "Which process is represented?",

        choices: [
          "Weathering",
          "Compaction",
          "Deposition",
          "Erosion"
        ],

        answer:
          2,

        explanation:
          "Deposition drops or settles sediment."
      },

      {
        evidence:
          "🗜️ Thick layers above squeeze sediment grains closer together.",

        question:
          "Which process is represented?",

        choices: [
          "Erosion",
          "Compaction",
          "Weathering",
          "Cementation"
        ],

        answer:
          1,

        explanation:
          "Compaction squeezes grains closer together."
      },

      {
        evidence:
          "🧱 Dissolved minerals form between grains and bind them together.",

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
          "Cementation binds sediment grains."
      }

    ]

  });


  /* ========================================================
     LEVEL 2
     ======================================================== */


  makeCertification({

    level:
      "two",

    evidenceId:
      "certEvidence2",

    questionId:
      "certQuestion2",

    choicesId:
      "certChoices2",

    checkId:
      "certCheck2",

    feedbackId:
      "certFeedback2",

    nextId:
      "certNext2",

    scoreId:
      "certScore2",

    passScore:
      4,

    startText:
      "Use layer position and fossil evidence.",

    items: [

      {
        evidence:
          `
          Simple undisturbed sequence:<br><br>
          D — top<br>
          C<br>
          B<br>
          A — bottom
          `,

        question:
          "Which layer was deposited first?",

        choices: [
          "D",
          "C",
          "B",
          "A"
        ],

        answer:
          3,

        explanation:
          "Layer A is lowest and was deposited first in this simple undisturbed model."
      },

      {
        evidence:
          "🐟 A fish fossil is found in sedimentary rock beneath a present-day desert.",

        question:
          "Which conclusion is best supported?",

        choices: [
          "The area once had an aquatic environment.",
          "The area has always been dry.",
          "Fish can live permanently without water.",
          "The fossil proves the exact water depth."
        ],

        answer:
          0,

        explanation:
          "The fish fossil supports a past aquatic environment."
      },

      {
        evidence:
          "Layer X lies below Layer Y in an undisturbed sequence.",

        question:
          "Which statement is supported?",

        choices: [
          "Layer Y was deposited before X.",
          "Layer X was deposited before Y.",
          "Both formed at exactly the same moment.",
          "Color determines which is older."
        ],

        answer:
          1,

        explanation:
          "The lower layer was deposited earlier."
      },

      {
        evidence:
          "Aquatic fossils occur in older layers and land-plant fossils occur in younger layers.",

        question:
          "What can scientists reasonably infer?",

        choices: [
          "The environment represented by the layers changed over time.",
          "All layers represent exactly the same environment.",
          "Fossils cannot reveal environments.",
          "The younger layer must be on the bottom."
        ],

        answer:
          0,

        explanation:
          "Changing fossil evidence can support environmental change over time."
      },

      {
        evidence:
          "🦴 A preserved shell impression is discovered in rock.",

        question:
          "What is the shell impression?",

        choices: [
          "A fossil",
          "A fossil fuel",
          "Coal",
          "Petroleum"
        ],

        answer:
          0,

        explanation:
          "A preserved trace or remains of past life is fossil evidence."
      }

    ]

  });


  /* ========================================================
     LEVEL 3
     ======================================================== */


  makeCertification({

    level:
      "three",

    evidenceId:
      "certEvidence3",

    questionId:
      "certQuestion3",

    choicesId:
      "certChoices3",

    checkId:
      "certCheck3",

    feedbackId:
      "certFeedback3",

    nextId:
      "certNext3",

    scoreId:
      "certScore3",

    passScore:
      3,

    startText:
      "Follow the ancient plant pathway.",

    items: [

      {
        evidence:
          "🌿 Ancient plant material accumulates in a swampy environment.",

        question:
          "Which fossil-fuel pathway is most closely represented?",

        choices: [
          "Coal",
          "Petroleum only",
          "Natural gas only",
          "None"
        ],

        answer:
          0,

        explanation:
          "Coal is mainly connected to ancient plant material."
      },

      {
        evidence:
          "🟫 Partly decayed plant material accumulates in wet conditions.",

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
          "Peat is an early plant-rich material in coal formation."
      },

      {
        evidence:
          "Peat is deeply buried for only two years.",

        question:
          "Why is the coal model incomplete?",

        choices: [
          "Coal requires extremely long geologic time and other suitable conditions.",
          "Two years is always enough.",
          "Coal forms from sunlight alone.",
          "Peat must first become a fish fossil."
        ],

        answer:
          0,

        explanation:
          "Coal formation takes extremely long geologic time."
      },

      {
        evidence:
          "🌿 → 🟫 → ⬇️ → ♨️🗜️🕰️ → ?",

        question:
          "Which product completes the model?",

        choices: [
          "Coal",
          "Rain",
          "Granite",
          "Glass"
        ],

        answer:
          0,

        explanation:
          "The sequence models coal formation."
      }

    ]

  });


  /* ========================================================
     LEVEL 4
     ======================================================== */


  makeCertification({

    level:
      "four",

    evidenceId:
      "certEvidence4",

    questionId:
      "certQuestion4",

    choicesId:
      "certChoices4",

    checkId:
      "certCheck4",

    feedbackId:
      "certFeedback4",

    nextId:
      "certNext4",

    scoreId:
      "certScore4",

    passScore:
      3,

    startText:
      "Follow the ancient aquatic pathway.",

    items: [

      {
        evidence:
          "🌊🦠 Ancient microscopic aquatic organisms accumulate with sediment.",

        question:
          "Which fossil-fuel pathway is most closely represented?",

        choices: [
          "Coal only",
          "Petroleum and natural gas",
          "Peat only",
          "Weathering"
        ],

        answer:
          1,

        explanation:
          "Ancient aquatic organic material is commonly linked to petroleum and natural gas."
      },

      {
        evidence:
          "Organic-rich material becomes deeply buried beneath sediment.",

        question:
          "Which additional conditions support petroleum formation?",

        choices: [
          "Heat, pressure, and millions of years",
          "One afternoon",
          "Only sunlight",
          "Magnetism"
        ],

        answer:
          0,

        explanation:
          "Long-term burial, heat, pressure, and geologic time are important to the model."
      },

      {
        evidence:
          "🛢️ Sample A is liquid. 🔥 Sample B is gaseous.",

        question:
          "Which identification is correct?",

        choices: [
          "A = coal; B = peat",
          "A = petroleum; B = natural gas",
          "A = natural gas; B = coal",
          "A = peat; B = petroleum"
        ],

        answer:
          1,

        explanation:
          "Petroleum is liquid and natural gas is gaseous."
      },

      {
        evidence:
          "A student says a preserved fish fossil will eventually melt into crude oil.",

        question:
          "Which correction is best?",

        choices: [
          "Correct; every fish fossil becomes oil.",
          "Incorrect; petroleum forms from ancient organic material through geologic processes, not by a visible fossil simply melting.",
          "Correct if cementation occurs.",
          "Incorrect because petroleum forms in one week."
        ],

        answer:
          1,

        explanation:
          "A fossil and fossil fuel are not the same thing."
      }

    ]

  });


  /* ========================================================
     LEVEL 5 - MASTER MIXED EVIDENCE
     ======================================================== */


  makeCertification({

    level:
      "five",

    evidenceId:
      "certEvidence5",

    questionId:
      "certQuestion5",

    choicesId:
      "certChoices5",

    checkId:
      "certCheck5",

    feedbackId:
      "certFeedback5",

    nextId:
      "certNext5",

    scoreId:
      "certScore5",

    passScore:
      7,

    startText:
      "Evidence first. Explanation second.",

    items: [

      {
        evidence:
          `
          <strong>MASTER CASE 1</strong><br><br>
          A rock breaks into sediment.
          Later, a stream carries the sediment away.
          `,

        question:
          "Which two processes occurred in order?",

        choices: [
          "Weathering then erosion",
          "Erosion then weathering",
          "Compaction then cementation",
          "Deposition then weathering"
        ],

        answer:
          0,

        explanation:
          "Weathering breaks; erosion moves."
      },

      {
        evidence:
          `
          <strong>MASTER CASE 2</strong><br><br>
          Sediment settles in layers,
          becomes squeezed,
          and minerals bind the grains.
          `,

        question:
          "Which sequence best matches the evidence?",

        choices: [
          "Deposition → compaction → cementation",
          "Weathering → erosion → weathering",
          "Coal → peat → deposition",
          "Erosion → cementation → weathering"
        ],

        answer:
          0,

        explanation:
          "Sediment drops, is squeezed, then becomes bound together."
      },

      {
        evidence:
          `
          <strong>MASTER CASE 3</strong><br><br>
          Layer A is at the bottom.
          Layer D is at the top.
          The sequence is undisturbed.
          `,

        question:
          "Which statement is supported?",

        choices: [
          "Layer D was deposited first.",
          "Layer A was deposited before Layer D.",
          "Layer color determines age.",
          "All layers formed simultaneously."
        ],

        answer:
          1,

        explanation:
          "The lower layer was deposited first."
      },

      {
        evidence:
          `
          <strong>MASTER CASE 4</strong><br><br>
          A fish fossil is found in rock
          in a location that is dry desert today.
          `,

        question:
          "Which conclusion is best supported?",

        choices: [
          "The location once had an aquatic environment.",
          "The location has always been desert.",
          "The fish lived without water.",
          "The fossil must be petroleum."
        ],

        answer:
          0,

        explanation:
          "The fossil provides evidence of a past aquatic environment."
      },

      {
        evidence:
          `
          <strong>MASTER CASE 5</strong><br><br>
          Ancient plant material → peat → burial
          → heat + pressure + millions of years
          `,

        question:
          "Which fossil fuel is represented?",

        choices: [
          "Coal",
          "Petroleum only",
          "Natural gas only",
          "None"
        ],

        answer:
          0,

        explanation:
          "Peat and ancient plants identify coal formation."
      },

      {
        evidence:
          `
          <strong>MASTER CASE 6</strong><br><br>
          Ancient aquatic organic material
          becomes deeply buried
          and changes under heat and pressure
          over millions of years.
          `,

        question:
          "Which products are most closely connected to the model?",

        choices: [
          "Coal and peat",
          "Petroleum and natural gas",
          "Sand and clay",
          "Fossils only"
        ],

        answer:
          1,

        explanation:
          "This evidence matches petroleum and natural-gas formation."
      },

      {
        evidence:
          `
          <strong>MASTER CASE 7</strong><br><br>
          Steve says:
          "Cementation creates sedimentary rock,
          so it also directly creates fossil fuels."
          `,

        question:
          "Which response is best?",

        choices: [
          "Correct; cementation creates all fossil fuels.",
          "Incorrect; cementation binds sediment grains, while fossil fuels form from ancient organic material under different geologic conditions.",
          "Correct; every sedimentary rock contains fuel.",
          "Incorrect because fossil fuels form instantly."
        ],

        answer:
          1,

        explanation:
          "Cementation is part of sedimentary-rock formation, not the direct fossil-fuel pathway."
      },

      {
        evidence:
          `
          <strong>MASTER CASE 8</strong><br><br>
          A preserved shell,
          a layer of coal,
          and a petroleum deposit
          are all discovered underground.
          `,

        question:
          "Which statement is scientifically correct?",

        choices: [
          "All three are exactly the same thing.",
          "The shell is fossil evidence, while coal and petroleum are fossil fuels.",
          "The shell must eventually become petroleum.",
          "Coal is a fossil and petroleum is sediment."
        ],

        answer:
          1,

        explanation:
          "A fossil is evidence of past life; coal and petroleum are fossil fuels."
      }

    ]

  });


  /* ========================================================
     CERTIFICATE CONTROLS
     ======================================================== */


  document.getElementById(
    "certApplyName"
  ).onclick =
    function () {

      const input =
        document.getElementById(
          "certNameInput"
        );


      const name =
        input.value.trim();


      document.getElementById(
        "certStudentName"
      ).textContent =
        name
          ?
          name
          :
          "SCIENCE SPECIALIST";
    };


  document.getElementById(
    "certPrint"
  ).onclick =
    function () {

      window.print();
    };


  updateCertification();

})();
