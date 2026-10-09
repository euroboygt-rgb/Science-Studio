(function () {
  "use strict";


  const complete = {
    w: false,
    e: false,
    d: false,
    c1: false,
    c2: false,
    sequence: false
  };


  let answers = {
    one: null,
    two: null,
    three: null,
    four: null,
    five: null
  };


  function choose(
    selector,
    key,
    dataName
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


            answers[key] =
              button.dataset[
                dataName
              ];
          };
      }
    );
  }


  choose(
    "[data-stage1]",
    "one",
    "stage1"
  );

  choose(
    "[data-stage2]",
    "two",
    "stage2"
  );

  choose(
    "[data-stage3]",
    "three",
    "stage3"
  );

  choose(
    "[data-stage4]",
    "four",
    "stage4"
  );

  choose(
    "[data-stage5]",
    "five",
    "stage5"
  );


  function markStatus(
    id,
    done
  ) {

    const box =
      document.getElementById(id);


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


  function updateStatus() {

    markStatus(
      "wrStatusW",
      complete.w
    );

    markStatus(
      "wrStatusE",
      complete.e
    );

    markStatus(
      "wrStatusD",
      complete.d
    );

    markStatus(
      "wrStatusC1",
      complete.c1
    );

    markStatus(
      "wrStatusC2",
      complete.c2
    );


    const allStages =
      complete.w &&
      complete.e &&
      complete.d &&
      complete.c1 &&
      complete.c2;


    const final =
      document.getElementById(
        "wrFinalMessage"
      );


    if (
      allStages &&
      complete.sequence
    ) {

      final.innerHTML = `

        🏆
        <strong>
          SEDIMENTARY ROCK COMPLETE!
        </strong>

        <br><br>

        W.E.D.C.C.

        <br><br>

        Weathering
        →
        Erosion
        →
        Deposition
        →
        Compaction
        →
        Cementation

        <br><br>

        <strong>
          W.E.D.C.C. ROCK BUILDER
          STATUS EARNED.
        </strong>

      `;

    } else if (
      allStages
    ) {

      final.innerHTML = `

        ✅ All five Earth processes complete.

        <br><br>

        Now pass the
        <strong>
          W.E.D.C.C. Memory Check
        </strong>
        below.

      `;

    } else {

      const count =
        [
          complete.w,
          complete.e,
          complete.d,
          complete.c1,
          complete.c2
        ].filter(Boolean).length;


      final.textContent =
        count
        +
        " of 5 rock-formation stages complete.";
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


  /* WEATHERING */


  document.getElementById(
    "wrRun1"
  ).onclick =
    function () {

      if (
        answers.one !==
        "break"
      ) {

        feedback(
          "wrFeedback1",
          false,
          "🔍 Try again. Weathering BREAKS rock into smaller pieces."
        );

        return;
      }


      complete.w =
        true;


      document.getElementById(
        "wrMountain"
      ).style.transform =
        "scale(.55)";


      document.getElementById(
        "wrMountain"
      ).style.opacity =
        ".25";


      document.getElementById(
        "wrParticles"
      ).style.opacity =
        "1";


      document.getElementById(
        "wrStageLabel"
      ).textContent =
        "Stage 1: Weathering created sediment.";


      document.getElementById(
        "wrMaterial"
      ).textContent =
        "Loose sediment";


      document.getElementById(
        "wrProcess"
      ).textContent =
        "WEATHERING — BREAK";


      feedback(
        "wrFeedback1",
        true,
        "✅ <strong>W COMPLETE!</strong> Weathering broke the rock into smaller pieces called sediment."
      );


      updateStatus();
    };


  /* EROSION */


  document.getElementById(
    "wrRun2"
  ).onclick =
    function () {

      if (!complete.w) {

        feedback(
          "wrFeedback2",
          false,
          "Complete Weathering first. W.E.D.C.C. must stay in order."
        );

        return;
      }


      if (
        answers.two !==
        "transport"
      ) {

        feedback(
          "wrFeedback2",
          false,
          "🔍 Try again. Erosion MOVES sediment."
        );

        return;
      }


      complete.e =
        true;


      document.getElementById(
        "wrTransport"
      ).style.opacity =
        "1";


      document.getElementById(
        "wrParticles"
      ).style.left =
        "58%";


      document.getElementById(
        "wrStageLabel"
      ).textContent =
        "Stage 2: Erosion transported the sediment.";


      document.getElementById(
        "wrProcess"
      ).textContent =
        "EROSION — MOVE";


      feedback(
        "wrFeedback2",
        true,
        "✅ <strong>E COMPLETE!</strong> Erosion transported the sediment to another location."
      );


      updateStatus();
    };


  /* DEPOSITION */


  document.getElementById(
    "wrRun3"
  ).onclick =
    function () {

      if (!complete.e) {

        feedback(
          "wrFeedback3",
          false,
          "Complete Erosion first. Moving sediment must arrive before it can be deposited."
        );

        return;
      }


      if (
        answers.three !==
        "settle"
      ) {

        feedback(
          "wrFeedback3",
          false,
          "🔍 Try again. Deposition happens when sediment DROPS or settles."
        );

        return;
      }


      complete.d =
        true;


      document.getElementById(
        "wrParticles"
      ).style.opacity =
        "0";


      document.getElementById(
        "wrTransport"
      ).style.opacity =
        "0";


      document.getElementById(
        "wrLayers"
      ).style.opacity =
        "1";


      document.getElementById(
        "wrStageLabel"
      ).textContent =
        "Stage 3: Deposition built sediment layers.";


      document.getElementById(
        "wrMaterial"
      ).textContent =
        "Layers of loose sediment";


      document.getElementById(
        "wrProcess"
      ).textContent =
        "DEPOSITION — DROP";


      feedback(
        "wrFeedback3",
        true,
        "✅ <strong>D COMPLETE!</strong> Deposition dropped sediment and built layers."
      );


      updateStatus();
    };


  /* COMPACTION */


  document.getElementById(
    "wrRun4"
  ).onclick =
    function () {

      if (!complete.d) {

        feedback(
          "wrFeedback4",
          false,
          "Complete Deposition first. Sediment layers must build before they can be compacted."
        );

        return;
      }


      if (
        answers.four !==
        "squeeze"
      ) {

        feedback(
          "wrFeedback4",
          false,
          "🔍 Try again. Compaction SQUEEZES sediment grains closer together."
        );

        return;
      }


      complete.c1 =
        true;


      document.getElementById(
        "wrPressureTop"
      ).style.opacity =
        "1";


      document.getElementById(
        "wrPressureBottom"
      ).style.opacity =
        "1";


      document.getElementById(
        "wrLayers"
      ).style.transform =
        "scaleY(.72)";


      document.getElementById(
        "wrStageLabel"
      ).textContent =
        "Stage 4: Compaction squeezed sediment layers.";


      document.getElementById(
        "wrMaterial"
      ).textContent =
        "Compacted sediment";


      document.getElementById(
        "wrProcess"
      ).textContent =
        "COMPACTION — SQUEEZE";


      feedback(
        "wrFeedback4",
        true,
        "✅ <strong>C COMPLETE!</strong> Pressure squeezed the sediment grains closer together."
      );


      updateStatus();
    };


  /* CEMENTATION */


  document.getElementById(
    "wrRun5"
  ).onclick =
    function () {

      if (!complete.c1) {

        feedback(
          "wrFeedback5",
          false,
          "Complete Compaction first. Follow W.E.D.C.C. in order."
        );

        return;
      }


      if (
        answers.five !==
        "minerals"
      ) {

        feedback(
          "wrFeedback5",
          false,
          "🔍 Try again. Cementation happens when minerals BIND sediment grains."
        );

        return;
      }


      complete.c2 =
        true;


      document.getElementById(
        "wrMinerals"
      ).style.opacity =
        "1";


      document.getElementById(
        "wrLayers"
      ).style.opacity =
        ".15";


      document.getElementById(
        "wrPressureTop"
      ).style.opacity =
        "0";


      document.getElementById(
        "wrPressureBottom"
      ).style.opacity =
        "0";


      document.getElementById(
        "wrFinalRock"
      ).style.opacity =
        "1";


      document.getElementById(
        "wrFinalRock"
      ).style.transform =
        "scale(1.03)";


      document.getElementById(
        "wrStageLabel"
      ).textContent =
        "Stage 5: Cementation produced solid sedimentary rock.";


      document.getElementById(
        "wrMaterial"
      ).textContent =
        "Sedimentary rock";


      document.getElementById(
        "wrProcess"
      ).textContent =
        "CEMENTATION — BIND";


      feedback(
        "wrFeedback5",
        true,
        "✅ <strong>C COMPLETE!</strong> Minerals bound the compacted sediment grains into solid sedimentary rock."
      );


      updateStatus();
    };


  /* SEQUENCE MEMORY CHECK */


  const correctSequence =
    [
      "weathering",
      "erosion",
      "deposition",
      "compaction",
      "cementation"
    ];


  const labels = {

    weathering:
      "W — Weathering",

    erosion:
      "E — Erosion",

    deposition:
      "D — Deposition",

    compaction:
      "C — Compaction",

    cementation:
      "C — Cementation"

  };


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

      document.getElementById(
        "wrSlot"
        +
        (i + 1)
      ).textContent =
        sequence[i]
          ?
          labels[
            sequence[i]
          ]
          :
          "?";
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
    "wrResetSequence"
  ).onclick =
    function () {

      sequence =
        [];


      complete.sequence =
        false;


      drawSequence();


      document.getElementById(
        "wrSequenceFeedback"
      ).style.color =
        "#111";


      document.getElementById(
        "wrSequenceFeedback"
      ).textContent =
        "Build W.E.D.C.C. from memory.";


      updateStatus();
    };


  document.getElementById(
    "wrCheckSequence"
  ).onclick =
    function () {

      if (
        !complete.w ||
        !complete.e ||
        !complete.d ||
        !complete.c1 ||
        !complete.c2
      ) {

        feedback(
          "wrSequenceFeedback",
          false,
          "Complete all five Rock Factory stages before the final memory check."
        );

        return;
      }


      if (
        sequence.length !== 5
      ) {

        feedback(
          "wrSequenceFeedback",
          false,
          "Fill all five W.E.D.C.C. slots."
        );

        return;
      }


      const correct =
        correctSequence.every(
          function (
            item,
            index
          ) {

            return (
              sequence[index]
              ===
              item
            );
          }
        );


      if (correct) {

        complete.sequence =
          true;


        feedback(
          "wrSequenceFeedback",
          true,
          "🏆 <strong>W.E.D.C.C. MASTERED!</strong><br><br>Weathering → Erosion → Deposition → Compaction → Cementation"
        );

      } else {

        complete.sequence =
          false;


        feedback(
          "wrSequenceFeedback",
          false,
          "🔍 Sequence incorrect. Remember: BREAK → MOVE → DROP → SQUEEZE → BIND."
        );
      }


      updateStatus();
    };


  drawSequence();

  updateStatus();

})();
