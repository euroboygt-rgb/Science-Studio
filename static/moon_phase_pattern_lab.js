(function () {
  "use strict";


  const phases = [

    {
      id: "new",
      icon: "🌑",
      name: "New Moon"
    },

    {
      id: "waxing-crescent",
      icon: "🌒",
      name: "Waxing Crescent"
    },

    {
      id: "first-quarter",
      icon: "🌓",
      name: "First Quarter"
    },

    {
      id: "waxing-gibbous",
      icon: "🌔",
      name: "Waxing Gibbous"
    },

    {
      id: "full",
      icon: "🌕",
      name: "Full Moon"
    },

    {
      id: "waning-gibbous",
      icon: "🌖",
      name: "Waning Gibbous"
    },

    {
      id: "third-quarter",
      icon: "🌗",
      name: "Third Quarter"
    },

    {
      id: "waning-crescent",
      icon: "🌘",
      name: "Waning Crescent"
    }

  ];


  const correctOrder =
    phases.map(
      function (phase) {

        return phase.id;
      }
    );


  let selectedPhaseId = null;

  let orderComplete = false;

  let selectedPrediction = null;

  let predictionScore = 0;

  let predictionAttempts = 0;

  let predictorComplete = false;


  const tray =
    document.getElementById(
      "mpPhaseTray"
    );


  function phaseById(id) {

    return phases.find(
      function (phase) {

        return phase.id === id;
      }
    );
  }


  function cardById(id) {

    return document.querySelector(
      '.mp-phase-card[data-id="' + id + '"]'
    );
  }


  function makePhaseCard(phase) {

    const card =
      document.createElement(
        "div"
      );


    card.className =
      "mp-phase-card";


    card.dataset.id =
      phase.id;


    card.draggable =
      true;


    card.innerHTML = `

      <span class="mp-phase-icon">
        ${phase.icon}
      </span>

      <span class="mp-phase-name">
        ${phase.name}
      </span>

    `;


    card.onclick =
      function () {

        document
          .querySelectorAll(
            ".mp-phase-card"
          )
          .forEach(
            function (other) {

              other.classList.remove(
                "selected"
              );
            }
          );


        selectedPhaseId =
          phase.id;


        card.classList.add(
          "selected"
        );
      };


    card.addEventListener(
      "dragstart",
      function (event) {

        event.dataTransfer.setData(
          "text/plain",
          phase.id
        );
      }
    );


    return card;
  }


  function movePhase(
    id,
    slotNumber
  ) {

    const card =
      cardById(id);


    const slot =
      document.querySelector(
        '.mp-slot[data-slot="' + slotNumber + '"] .mp-slot-zone'
      );


    if (
      !card
      ||
      !slot
    ) {
      return;
    }


    const existing =
      slot.querySelector(
        ".mp-phase-card"
      );


    if (
      existing
      &&
      existing !== card
    ) {

      tray.appendChild(
        existing
      );


      delete existing.dataset.slot;
    }


    card.dataset.slot =
      String(slotNumber);


    card.classList.remove(
      "selected",
      "correct",
      "wrong"
    );


    slot.appendChild(
      card
    );


    selectedPhaseId = null;


    updateOrderCounter();
  }


  function updateOrderCounter() {

    const placed =
      document.querySelectorAll(
        ".mp-phase-card[data-slot]"
      ).length;


    document
      .getElementById(
        "mpOrderCounter"
      )
      .textContent =
      placed
      +
      " / 8 placed";
  }


  function updateMaster() {

    document
      .getElementById(
        "mpOrderStatus"
      )
      .textContent =
      orderComplete
        ? "✅"
        : "⬜";


    document
      .getElementById(
        "mpPredictStatus"
      )
      .textContent =
      predictorComplete
        ? "✅"
        : "⬜";


    const message =
      document.getElementById(
        "mpMasterMessage"
      );


    if (
      orderComplete
      &&
      predictorComplete
    ) {

      message.innerHTML = `

        🏆
        <strong>
          MOON PATTERN MISSION COMPLETE!
        </strong>

        <br><br>

        You built the Moon phase cycle
        and successfully used the pattern
        to predict future Moon phases.

        <br><br>

        <strong>
          Moon Pattern Specialist status earned.
        </strong>

      `;

    } else {

      message.textContent =
        "Build the cycle and make at least 3 correct predictions.";
    }
  }


  function resetOrder() {

    selectedPhaseId = null;
    orderComplete = false;


    tray.innerHTML = "";


    document
      .querySelectorAll(
        ".mp-slot-zone"
      )
      .forEach(
        function (zone) {

          zone.innerHTML = "";
        }
      );


    phases.forEach(
      function (phase) {

        tray.appendChild(
          makePhaseCard(
            phase
          )
        );
      }
    );


    document
      .getElementById(
        "mpOrderFeedback"
      )
      .textContent =
      "Place all eight Moon phases before checking.";


    updateOrderCounter();
    updateMaster();
  }


  document
    .querySelectorAll(
      ".mp-slot"
    )
    .forEach(
      function (slot) {

        const slotNumber =
          Number(
            slot.dataset.slot
          );


        slot.addEventListener(
          "click",
          function (event) {

            if (
              event.target.closest(
                ".mp-phase-card"
              )
            ) {
              return;
            }


            if (!selectedPhaseId) {
              return;
            }


            movePhase(
              selectedPhaseId,
              slotNumber
            );
          }
        );


        slot.addEventListener(
          "dragover",
          function (event) {

            event.preventDefault();
          }
        );


        slot.addEventListener(
          "drop",
          function (event) {

            event.preventDefault();


            const id =
              event.dataTransfer.getData(
                "text/plain"
              );


            movePhase(
              id,
              slotNumber
            );
          }
        );
      }
    );


  document
    .getElementById(
      "mpCheckOrder"
    )
    .onclick =
    function () {

      const placed =
        document.querySelectorAll(
          ".mp-phase-card[data-slot]"
        );


      const feedback =
        document.getElementById(
          "mpOrderFeedback"
        );


      if (
        placed.length !==
        8
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Place all 8 Moon phases before checking.";

        return;
      }


      let correctCount = 0;


      correctOrder.forEach(
        function (id, index) {

          const card =
            cardById(id);


          card.classList.remove(
            "correct",
            "wrong"
          );


          if (
            Number(
              card.dataset.slot
            )
            === index
          ) {

            correctCount += 1;

            card.classList.add(
              "correct"
            );

          } else {

            card.classList.add(
              "wrong"
            );
          }
        }
      );


      if (
        correctCount ===
        8
      ) {

        orderComplete = true;


        feedback.style.color =
          "#087a35";


        feedback.innerHTML = `

          ✅
          <strong>
            Moon Phase Cycle Correct!
          </strong>

          <br><br>

          🌑 New Moon →
          🌒 Waxing Crescent →
          🌓 First Quarter →
          🌔 Waxing Gibbous →
          🌕 Full Moon →
          🌖 Waning Gibbous →
          🌗 Third Quarter →
          🌘 Waning Crescent →
          🌑 New Moon again

        `;

      } else {

        orderComplete = false;


        feedback.style.color =
          "#b00020";


        feedback.innerHTML = `

          You have

          <strong>
            ${correctCount} of 8
          </strong>

          positions correct.

          <br><br>

          Red-outlined phases need to move.
          Follow the repeating Moon pattern
          and try again.

        `;
      }


      updateMaster();
    };


  document
    .getElementById(
      "mpResetOrder"
    )
    .onclick =
    resetOrder;


  /* ========================================================
     PREDICTOR
     ======================================================== */


  const startSelect =
    document.getElementById(
      "mpStartPhase"
    );


  const daysSelect =
    document.getElementById(
      "mpDaysLater"
    );


  const choiceContainer =
    document.getElementById(
      "mpPredictionChoices"
    );


  function predictedIndex(
    startIndex,
    days
  ) {

    const phaseLength =
      29.5 / 8;


    const phaseSteps =
      Math.round(
        days / phaseLength
      );


    return (
      startIndex
      +
      phaseSteps
    ) % 8;
  }


  function drawPredictionChoices() {

    selectedPrediction = null;


    choiceContainer.innerHTML =
      "";


    phases.forEach(
      function (phase, index) {

        const button =
          document.createElement(
            "button"
          );


        button.type =
          "button";


        button.className =
          "mp-predict-choice";


        button.dataset.index =
          String(index);


        button.innerHTML = `

          <span>
            ${phase.icon}
          </span>

          ${phase.name}

        `;


        button.onclick =
          function () {

            choiceContainer
              .querySelectorAll(
                ".mp-predict-choice"
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


            selectedPrediction =
              index;
          };


        choiceContainer.appendChild(
          button
        );
      }
    );
  }


  function updatePredictionPrompt() {

    const startIndex =
      Number(
        startSelect.value
      );


    const days =
      Number(
        daysSelect.value
      );


    const startPhase =
      phases[startIndex];


    document
      .getElementById(
        "mpStartDisplay"
      )
      .textContent =
      startPhase.icon;


    document
      .getElementById(
        "mpStartName"
      )
      .textContent =
      startPhase.name;


    document
      .getElementById(
        "mpPredictionPrompt"
      )
      .textContent =
      "What phase should we expect about "
      +
      days
      +
      " days later?";


    document
      .getElementById(
        "mpPredictionFeedback"
      )
      .textContent =
      "Choose the phase you predict, then check your reasoning.";


    drawPredictionChoices();
  }


  startSelect.onchange =
    updatePredictionPrompt;


  daysSelect.onchange =
    updatePredictionPrompt;


  document
    .getElementById(
      "mpCheckPrediction"
    )
    .onclick =
    function () {

      const feedback =
        document.getElementById(
          "mpPredictionFeedback"
        );


      if (
        selectedPrediction === null
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Choose a Moon phase before checking.";

        return;
      }


      const startIndex =
        Number(
          startSelect.value
        );


      const days =
        Number(
          daysSelect.value
        );


      const expected =
        predictedIndex(
          startIndex,
          days
        );


      const buttons =
        Array.from(
          choiceContainer.querySelectorAll(
            ".mp-predict-choice"
          )
        );


      buttons.forEach(
        function (button) {

          button.classList.remove(
            "correct",
            "wrong"
          );
        }
      );


      buttons[
        expected
      ].classList.add(
        "correct"
      );


      predictionAttempts += 1;


      if (
        selectedPrediction ===
        expected
      ) {

        predictionScore += 1;


        feedback.style.color =
          "#087a35";


        feedback.innerHTML = `

          ✅
          <strong>
            Prediction Correct!
          </strong>

          <br><br>

          Starting at

          <strong>
            ${phases[startIndex].name}
          </strong>

          and moving forward about

          <strong>
            ${days} days
          </strong>

          brings us near

          <strong>
            ${phases[expected].name}.
          </strong>

        `;

      } else {

        buttons[
          selectedPrediction
        ].classList.add(
          "wrong"
        );


        feedback.style.color =
          "#b00020";


        feedback.innerHTML = `

          🔍
          <strong>
            Check the Pattern.
          </strong>

          <br><br>

          Starting at

          <strong>
            ${phases[startIndex].name}
          </strong>

          and moving forward about

          <strong>
            ${days} days
          </strong>

          brings the cycle near

          <strong>
            ${phases[expected].name}.
          </strong>

        `;
      }


      document
        .getElementById(
          "mpPredictionScore"
        )
        .textContent =
        predictionScore
        +
        " correct";


      if (
        predictionScore >= 3
      ) {

        predictorComplete = true;
      }


      updateMaster();
    };


  document
    .getElementById(
      "mpNewPrediction"
    )
    .onclick =
    function () {

      updatePredictionPrompt();
    };


  resetOrder();

  updatePredictionPrompt();

})();
