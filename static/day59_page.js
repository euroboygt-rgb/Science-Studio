(function () {
  "use strict";

  // Science Studio Day 59 Embedded Style Start

  (function () {

    if (
      document.getElementById(
        "scienceStudioDay59EmbeddedStyle"
      )
    ) {
      return;
    }


    const style =
      document.createElement(
        "style"
      );


    style.id =
      "scienceStudioDay59EmbeddedStyle";


    style.textContent =
      "\n/* =========================================================\n   SCIENCE STUDIO DAY 59\n   ONE PATH, TWO LOADS\n   ========================================================= */\n\n#scienceStudioDay59,\n#scienceStudioDay59Lower {\n  width: 100%;\n  box-sizing: border-box;\n}\n\n\n/* ---------------------------------------------------------\n   MAIN CARDS\n   --------------------------------------------------------- */\n\n.d59-card {\n  width: 100%;\n  box-sizing: border-box;\n\n  margin: 18px 0;\n  padding: 18px;\n\n  border: 3px solid #171717;\n  border-radius: 18px;\n\n  background: #ffffff;\n\n  box-shadow:\n    4px 5px 0 rgba(0,0,0,.13);\n}\n\n\n.d59-cream {\n  background: #fff4cd;\n}\n\n\n.d59-blue {\n  background: #eef8ff;\n}\n\n\n.d59-card h2 {\n  margin: 5px 0 7px;\n\n  font-size: 1.55rem;\n  line-height: 1.15;\n\n  font-weight: 900;\n}\n\n\n.d59-card h3 {\n  margin-top: 8px;\n  font-weight: 900;\n}\n\n\n.d59-unit {\n  margin-bottom: 10px;\n\n  font-size: .88rem;\n  font-weight: 800;\n}\n\n\n/* ---------------------------------------------------------\n   BADGES\n   --------------------------------------------------------- */\n\n.d59-badge {\n  display: inline-block;\n\n  margin-bottom: 7px;\n  padding: 5px 12px;\n\n  border: 2px solid #171717;\n  border-radius: 999px;\n\n  background: #7131cc;\n  color: #fff13b;\n\n  font-size: .82rem;\n  font-weight: 900;\n}\n\n\n.d59-blue-badge {\n  background: #1681ee;\n  color: #ffffff;\n}\n\n\n/* ---------------------------------------------------------\n   PHENOMENON\n   --------------------------------------------------------- */\n\n.d59-image {\n  width: 100%;\n\n  box-sizing: border-box;\n\n  margin-top: 10px;\n  padding: 12px;\n\n  overflow: hidden;\n\n  border: 3px solid #171717;\n  border-radius: 15px;\n\n  background: #ffffff;\n}\n\n\n.d59-image img {\n  display: block;\n\n  width: 100%;\n  max-width: 100%;\n  height: auto;\n  max-height: 520px;\n\n  margin: 0 auto;\n\n  object-fit: contain;\n}\n\n\n.d59-focus {\n  margin-top: 10px;\n  padding: 11px;\n\n  border: 2px solid #171717;\n  border-radius: 10px;\n\n  background: #e6f3ff;\n}\n\n\n.d59-grid2 {\n  display: grid;\n\n  grid-template-columns:\n    repeat(2, minmax(0,1fr));\n\n  gap: 10px;\n\n  margin-top: 10px;\n}\n\n\n.d59-grid3 {\n  display: grid;\n\n  grid-template-columns:\n    repeat(3, minmax(0,1fr));\n\n  gap: 10px;\n\n  margin-top: 10px;\n}\n\n\n.d59-box {\n  box-sizing: border-box;\n\n  padding: 12px;\n\n  border: 2px solid #171717;\n  border-radius: 10px;\n\n  background: #edf7ff;\n}\n\n\n.d59-box strong {\n  display: block;\n  margin-bottom: 5px;\n}\n\n\n/* ---------------------------------------------------------\n   MISSION BRIEF\n   --------------------------------------------------------- */\n\n.d59-header {\n  display: flex;\n\n  justify-content: space-between;\n  align-items: flex-start;\n\n  gap: 14px;\n}\n\n\n.d59-play {\n  flex-shrink: 0;\n\n  padding: 10px 15px;\n\n  border: 2px solid #171717;\n  border-radius: 8px;\n\n  background: #ffc400;\n\n  color: #111111;\n\n  font-weight: 900;\n\n  cursor: pointer;\n\n  box-shadow:\n    2px 3px 0 rgba(0,0,0,.15);\n}\n\n\n.d59-slide {\n  min-height: 235px;\n\n  margin-top: 12px;\n  padding: 25px;\n\n  box-sizing: border-box;\n\n  border: 2px solid #171717;\n  border-radius: 12px;\n\n  background: #ffffff;\n\n  text-align: center;\n\n  display: flex;\n\n  flex-direction: column;\n\n  justify-content: center;\n  align-items: center;\n}\n\n\n.d59-slide-icon {\n  margin-bottom: 5px;\n\n  font-size: 3.7rem;\n}\n\n\n.d59-slide-title {\n  margin: 4px 0 10px !important;\n}\n\n\n.d59-slide-main {\n  max-width: 760px;\n\n  font-size: 1.08rem;\n  line-height: 1.45;\n\n  font-weight: 900;\n}\n\n\n.d59-slide-caption {\n  margin-top: 10px;\n\n  color: #444444;\n}\n\n\n.d59-footer {\n  display: flex;\n\n  justify-content: space-between;\n  align-items: center;\n\n  gap: 10px;\n\n  margin-top: 10px;\n}\n\n\n.d59-control {\n  padding: 7px 11px;\n\n  border: 2px solid #171717;\n  border-radius: 7px;\n\n  background: #ffffff;\n\n  font-weight: 900;\n\n  cursor: pointer;\n}\n\n\n.d59-next {\n  background: #1681ee;\n  color: #ffffff;\n}\n\n\n.d59-restart {\n  background: #2ba34a;\n  color: #ffffff;\n}\n\n\n/* ---------------------------------------------------------\n   STEVE\n   --------------------------------------------------------- */\n\n.d59-steve-grid {\n  display: grid;\n\n  grid-template-columns:\n    85px 1fr;\n\n  gap: 14px;\n}\n\n\n.d59-penguin {\n  padding-top: 8px;\n\n  text-align: center;\n\n  font-size: 5rem;\n}\n\n\n.d59-scenario {\n  margin-top: 10px;\n  padding: 13px;\n\n  border: 2px solid #171717;\n  border-radius: 10px;\n\n  background: #fff4cd;\n}\n\n\n.d59-question {\n  margin-top: 11px;\n  padding: 13px;\n\n  border: 2px solid #171717;\n  border-radius: 10px;\n\n  background: #ffffff;\n}\n\n\n.d59-answer {\n  display: block;\n\n  width: 100%;\n\n  box-sizing: border-box;\n\n  margin: 7px 0;\n  padding: 10px;\n\n  border: 2px solid #171717;\n  border-radius: 7px;\n\n  background: #f6f6f8;\n\n  color: #111111;\n\n  text-align: left;\n\n  font-weight: 800;\n\n  cursor: pointer;\n}\n\n\n.d59-answer:hover {\n  background: #e8f3ff;\n}\n\n\n.d59-answer.selected {\n  border-color: #1875cf;\n  background: #dfeeff;\n}\n\n\n.d59-answer.correct {\n  border-color: #16823b;\n  background: #d8f4dc;\n}\n\n\n.d59-answer.wrong {\n  border-color: #bc2637;\n  background: #ffdede;\n}\n\n\n.d59-answer-row {\n  display: flex;\n\n  gap: 8px;\n\n  margin-top: 9px;\n}\n\n\n.d59-check,\n.d59-reset {\n  padding: 8px 13px;\n\n  border: 2px solid #171717;\n  border-radius: 7px;\n\n  font-weight: 900;\n\n  cursor: pointer;\n}\n\n\n.d59-check {\n  background: #ffc400;\n}\n\n\n.d59-reset {\n  background: #ffffff;\n}\n\n\n.d59-feedback {\n  min-height: 24px;\n\n  margin-top: 9px;\n\n  font-weight: 900;\n}\n\n\n/* ---------------------------------------------------------\n   MINI LESSON SERIES PATH\n   --------------------------------------------------------- */\n\n.d59-series-path {\n  display: grid;\n\n  grid-template-columns:\n    1fr auto 1fr auto 1fr auto 1fr;\n\n  align-items: center;\n\n  gap: 8px;\n\n  margin: 13px 0;\n  padding: 14px;\n\n  border: 3px solid #171717;\n  border-radius: 13px;\n\n  background: #fff4cd;\n}\n\n\n.d59-series-path div {\n  padding: 11px;\n\n  border: 2px solid #171717;\n  border-radius: 10px;\n\n  background: #ffffff;\n\n  text-align: center;\n\n  font-size: 1.35rem;\n}\n\n\n.d59-series-path strong {\n  display: block;\n\n  margin-top: 5px;\n\n  font-size: .84rem;\n}\n\n\n.d59-series-path span {\n  font-size: 1.7rem;\n  font-weight: 900;\n}\n\n\n.d59-warning,\n.d59-success {\n  margin-top: 12px;\n  padding: 12px;\n\n  border: 2px solid #171717;\n  border-radius: 10px;\n}\n\n\n.d59-warning {\n  background: #fff2a8;\n}\n\n\n.d59-success {\n  background: #dcf6df;\n}\n\n\n/* ---------------------------------------------------------\n   SCIENCE NOTEBOOK\n   --------------------------------------------------------- */\n\n.d59-notebook {\n  display: grid;\n\n  grid-template-columns:\n    repeat(2,minmax(0,1fr));\n\n  gap: 9px;\n\n  margin: 11px 0 14px;\n}\n\n\n.d59-notebook div {\n  padding: 11px;\n\n  border: 2px solid #171717;\n  border-radius: 9px;\n\n  background: #edf7ff;\n}\n\n\n.d59-table-wrap {\n  width: 100%;\n\n  overflow-x: auto;\n}\n\n\n.d59-table {\n  width: 100%;\n\n  border-collapse: collapse;\n}\n\n\n.d59-table th,\n.d59-table td {\n  padding: 9px;\n\n  border: 2px solid #171717;\n\n  text-align: left;\n}\n\n\n.d59-table th {\n  background: #e6f3ff;\n}\n\n\n/* ---------------------------------------------------------\n   LAB\n   --------------------------------------------------------- */\n\n.d59-required {\n  display: grid;\n\n  grid-template-columns:\n    repeat(3,minmax(0,1fr));\n\n  gap: 10px;\n\n  margin: 13px 0;\n}\n\n\n.d59-required div {\n  padding: 15px;\n\n  border: 3px solid #171717;\n  border-radius: 12px;\n\n  background: #ffffff;\n\n  text-align: center;\n\n  font-size: 1.2rem;\n}\n\n\n.d59-required strong {\n  display: block;\n\n  margin-top: 5px;\n}\n\n\n.d59-build {\n  margin-top: 12px;\n  padding: 14px;\n\n  border: 3px solid #171717;\n  border-radius: 12px;\n\n  background: #e6f3ff;\n}\n\n\n.d59-build-path {\n  margin-top: 8px;\n  padding: 13px;\n\n  border: 2px solid #171717;\n  border-radius: 9px;\n\n  background: #ffffff;\n\n  text-align: center;\n\n  font-size: 1.05rem;\n  font-weight: 900;\n}\n\n\n.d59-build-path span {\n  display: inline-block;\n\n  margin: 0 8px;\n\n  color: #7131cc;\n\n  font-size: 1.4rem;\n}\n\n\n.d59-mission-steps {\n  margin-top: 12px;\n  padding: 13px;\n\n  border: 2px solid #171717;\n  border-radius: 11px;\n\n  background: #ffffff;\n}\n\n\n.d59-mission-steps > strong {\n  display: block;\n\n  margin-bottom: 8px;\n\n  font-size: 1.05rem;\n}\n\n\n.d59-mission-steps div {\n  margin: 6px 0;\n\n  font-weight: 800;\n}\n\n\n.d59-lab-button {\n  display: inline-block;\n\n  margin-top: 13px;\n  padding: 13px 20px;\n\n  border: 3px solid #171717;\n  border-radius: 10px;\n\n  background: #ffc400;\n\n  color: #111111 !important;\n\n  text-decoration: none;\n\n  font-size: 1.05rem;\n  font-weight: 900;\n\n  box-shadow:\n    3px 4px 0 rgba(0,0,0,.17);\n}\n\n\n/* ---------------------------------------------------------\n   STAAR PRACTICE\n   --------------------------------------------------------- */\n\n.d59-practice {\n  margin-top: 12px;\n  padding: 13px;\n\n  border: 2px solid #171717;\n  border-radius: 11px;\n\n  background: #edf7ff;\n}\n\n\n.d59-practice h3 {\n  margin: 0 0 7px;\n}\n\n\n.d59-practice-answer {\n  display: block;\n\n  width: 100%;\n\n  box-sizing: border-box;\n\n  margin: 7px 0;\n  padding: 10px;\n\n  border: 2px solid #171717;\n  border-radius: 7px;\n\n  background: #ffffff;\n\n  color: #111111;\n\n  text-align: left;\n\n  font-weight: 800;\n\n  cursor: pointer;\n}\n\n\n.d59-practice-answer:hover {\n  background: #e8f3ff;\n}\n\n\n.d59-practice-answer.correct {\n  border-color: #16823b;\n  background: #d8f4dc;\n}\n\n\n.d59-practice-answer.wrong {\n  border-color: #bc2637;\n  background: #ffdede;\n}\n\n\n.d59-practice-feedback {\n  min-height: 23px;\n\n  margin-top: 8px;\n\n  font-weight: 900;\n}\n\n\n/* ---------------------------------------------------------\n   WRITING BOXES\n   --------------------------------------------------------- */\n\n.d59-textarea {\n  width: 100%;\n  min-height: 115px;\n\n  box-sizing: border-box;\n\n  padding: 10px;\n\n  border: 2px solid #171717;\n  border-radius: 9px;\n\n  font-family: inherit;\n\n  resize: vertical;\n}\n\n\n/* ---------------------------------------------------------\n   MOBILE / SMALL SCREEN\n   --------------------------------------------------------- */\n\n@media (max-width: 760px) {\n\n  .d59-grid2,\n  .d59-grid3,\n  .d59-notebook,\n  .d59-required,\n  .d59-steve-grid {\n    grid-template-columns: 1fr;\n  }\n\n\n  .d59-penguin {\n    display: none;\n  }\n\n\n  .d59-header,\n  .d59-footer {\n    display: block;\n  }\n\n\n  .d59-play {\n    margin-top: 8px;\n  }\n\n\n  .d59-series-path {\n    grid-template-columns: 1fr;\n  }\n\n\n  .d59-series-path > span {\n    transform: rotate(90deg);\n\n    text-align: center;\n  }\n\n}\n\n";


    document.head.appendChild(
      style
    );

  })();

  // Science Studio Day 59 Embedded Style End



  if (
    !window.location.pathname.includes(
      "/second-nine-weeks/day/59"
    )
  ) {
    return;
  }


  function start() {
    setTimeout(buildDay59, 850);
  }


  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      start
    );

  } else {

    start();
  }


  function buildDay59() {

    const old =
      document.getElementById(
        "scienceStudioDay59"
      );


    if (old) {
      old.remove();
    }


    hideOldSections();


    const vocabulary =
      findCard(
        "Vocabulary Anchor Chart"
      );


    const learningTarget =
      findCard(
        "Learning Target"
      );


    if (!vocabulary) {

      console.log(
        "Day 59: vocabulary card not found."
      );

      return;
    }


    const top =
      document.createElement(
        "div"
      );


    top.id =
      "scienceStudioDay59";


    top.appendChild(
      phenomenon()
    );


    top.appendChild(
      missionBrief()
    );


    top.appendChild(
      steve()
    );


    vocabulary.parentNode.insertBefore(
      top,
      vocabulary
    );


    const lower =
      lowerLesson();


    // -------------------------------------------------------
    // STUDENT VIEW:
    // Guided Practice belongs on the teacher page only.
    // -------------------------------------------------------

    const day59View =
      new URLSearchParams(
        window.location.search
      ).get("view") || "student";


    if (day59View !== "teacher") {

      Array.from(
        lower.querySelectorAll(
          ".d59-card"
        )
      )
      .forEach(
        function (card) {

          const heading =
            card.querySelector(
              "h1,h2,h3"
            );


          if (
            heading &&
            (
              heading.textContent ||
              ""
            )
            .includes(
              "Guided Practice"
            )
          ) {

            card.remove();
          }
        }
      );
    }


    if (
      learningTarget &&
      learningTarget.parentNode
    ) {

      learningTarget.insertAdjacentElement(
        "afterend",
        lower
      );

    } else {

      vocabulary.insertAdjacentElement(
        "afterend",
        lower
      );
    }
  }


  // =========================================================
  // PHENOMENON
  // =========================================================

  function phenomenon() {

    const card =
      section(
        "d59-card d59-cream"
      );


    card.innerHTML = `

      <div class="d59-badge">
        🔎 Phenomenon Mission
      </div>

      <h2>
        Can One Battery Power Two Bulbs?
      </h2>

      <div class="d59-unit">
        Day 59 • Introduction to Series Circuits
      </div>


      <div class="d59-image">

        <img
          src="/static/phenomenon/day59_series_two_bulbs.svg"
          alt="Series circuit containing one battery and two bulbs in one conducting path"
        >

      </div>


      <div class="d59-focus">

        <strong>
          ❓ Focus Question:
        </strong>

        How can two bulbs be connected
        in one continuous conducting path?

      </div>


      <div class="d59-grid2">

        <div class="d59-box">

          <strong>
            👀 Notice
          </strong>

          The circuit has one battery,
          three wires, and two loads.

        </div>


        <div class="d59-box">

          <strong>
            🤔 Wonder
          </strong>

          Does electrical energy have to
          travel through both bulbs?

        </div>


        <div class="d59-box">

          <strong>
            🔍 Quick Explore
          </strong>

          Trace the circuit from the positive
          battery terminal all the way around.

        </div>


        <div class="d59-box">

          <strong>
            📊 Evidence Tracker
          </strong>

          Count the number of continuous
          conducting paths.

        </div>

      </div>

    `;


    return card;
  }


  // =========================================================
  // MISSION BRIEF
  // =========================================================

  function missionBrief() {

    const card =
      section(
        "d59-card d59-cream"
      );


    card.innerHTML = `

      <div class="d59-header">

        <div>

          <div class="d59-badge">
            🎬 Mission Brief Animation
          </div>

          <h2>
            Mission Brief: One Path, Two Loads
          </h2>

          <div class="d59-unit">
            Day 59 • Series Circuit Introduction
          </div>

        </div>


        <button
          class="d59-play"
          type="button"
        >
          ▶ Play Mission Brief
        </button>

      </div>


      <div class="d59-slide">

        <div class="d59-slide-icon"></div>

        <h2 class="d59-slide-title"></h2>

        <div class="d59-slide-main"></div>

        <div class="d59-slide-caption"></div>

      </div>


      <div class="d59-footer">

        <strong class="d59-number"></strong>

        <div>

          <button
            class="d59-control d59-back"
            type="button"
          >
            ◀ Back
          </button>

          <button
            class="d59-control d59-next"
            type="button"
          >
            Next ▶
          </button>

          <button
            class="d59-control d59-restart"
            type="button"
          >
            Restart
          </button>

        </div>

      </div>

    `;


    const slides = [

      {
        icon: "🎯",
        title: "Today's Mission",

        main:
          "Build a circuit with one battery and two bulbs connected in one path.",

        caption:
          "Today we are adding another load."
      },


      {
        icon: "🔋",
        title: "Start at the Battery",

        main:
          "Every complete circuit still begins at one battery terminal and returns to the other terminal.",

        caption:
          "The power source rule has not changed."
      },


      {
        icon: "💡",
        title: "Load Number One",

        main:
          "The conducting path enters the first bulb through one terminal and leaves through the other terminal.",

        caption:
          "The bulb must be included in the path."
      },


      {
        icon: "💡",
        title: "Load Number Two",

        main:
          "The conducting path then continues into the second bulb.",

        caption:
          "Both bulbs are loads in the same circuit."
      },


      {
        icon: "〰️",
        title: "One Continuous Path",

        main:
          "A series circuit connects its loads along one continuous conducting path.",

        caption:
          "There are no separate branches in today's circuit."
      },


      {
        icon: "🔍",
        title: "Trace the Whole System",

        main:
          "Battery → Bulb 1 → Bulb 2 → opposite battery terminal.",

        caption:
          "Trace the connections instead of judging the diagram by appearance."
      },


      {
        icon: "⭐",
        title: "STAAR Strategy",

        main:
          "When you see multiple loads, trace every connection and count the available paths.",

        caption:
          "Today's circuit has one path through both loads."
      }

    ];


    activateSlides(
      card,
      slides
    );


    return card;
  }


  // =========================================================
  // STEVE
  // =========================================================

  function steve() {

    const card =
      section(
        "d59-card d59-blue"
      );


    card.innerHTML = `

      <div class="d59-steve-grid">

        <div class="d59-penguin">
          🐧
        </div>


        <div>

          <div class="d59-badge d59-blue-badge">
            🐧 Steve the Penguin's STAAR Mission
          </div>

          <h2>
            Steve the Penguin's Two-Bulb Mission
          </h2>

          <div class="d59-unit">
            Day 59 • Series Circuit Evidence
          </div>


          <div class="d59-scenario">

            <strong>
              Steve's Scenario:
            </strong>

            <br><br>

            Steve connects one battery to Bulb 1.

            A second wire connects Bulb 1 to Bulb 2.

            A third wire connects Bulb 2 back
            to the opposite battery terminal.

          </div>


          <div class="d59-question">

            <strong>
              STAAR-Style Question:
            </strong>

            <p>
              Which statement best describes
              Steve's circuit?
            </p>


            <button
              class="d59-answer"
              data-answer="A"
            >
              A. Both bulbs are loads connected in one continuous path.
            </button>


            <button
              class="d59-answer"
              data-answer="B"
            >
              B. Each bulb is connected to a different battery.
            </button>


            <button
              class="d59-answer"
              data-answer="C"
            >
              C. Only Bulb 1 is part of the conducting path.
            </button>


            <button
              class="d59-answer"
              data-answer="D"
            >
              D. The circuit does not contain a load.
            </button>


            <div class="d59-answer-row">

              <button
                class="d59-check"
                type="button"
              >
                Check Answer
              </button>

              <button
                class="d59-reset"
                type="button"
              >
                Reset
              </button>

            </div>


            <div class="d59-feedback"></div>

          </div>

        </div>

      </div>

    `;


    activateSteve(
      card
    );


    return card;
  }


  // =========================================================
  // LOWER LESSON
  // =========================================================

  function lowerLesson() {

    const lower =
      document.createElement(
        "div"
      );


    lower.id =
      "scienceStudioDay59Lower";


    lower.innerHTML = `

      <section class="d59-card">

        <h2>
          🔔 Bell Ringer
        </h2>

        <div class="d59-box">

          <p>
            Yesterday you repaired circuits
            by tracing the conducting path.
          </p>

          <ol>

            <li>
              Can one battery power more than one load?
            </li>

            <li>
              How might two bulbs be connected?
            </li>

            <li>
              Would both bulbs need to be part
              of a complete conducting path?
            </li>

          </ol>

        </div>

      </section>


      <section class="d59-card">

        <h2>
          👨‍🏫 Mini Lesson — Series Circuits
        </h2>


        <div class="d59-series-path">

          <div>
            🔋
            <strong>BATTERY</strong>
          </div>

          <span>→</span>

          <div>
            💡
            <strong>BULB 1</strong>
          </div>

          <span>→</span>

          <div>
            💡
            <strong>BULB 2</strong>
          </div>

          <span>→</span>

          <div>
            🔋
            <strong>OTHER TERMINAL</strong>
          </div>

        </div>


        <div class="d59-grid2">

          <div class="d59-box">

            <strong>
              1️⃣ One Path
            </strong>

            A series circuit has loads connected
            along one continuous conducting path.

          </div>


          <div class="d59-box">

            <strong>
              💡 Two Loads
            </strong>

            Bulb 1 and Bulb 2 are both
            part of the same electrical system.

          </div>


          <div class="d59-box">

            <strong>
              🔋 Battery Rule
            </strong>

            The path must still connect
            both battery terminals.

          </div>


          <div class="d59-box">

            <strong>
              🔍 Trace It
            </strong>

            Follow every connection
            through both bulbs.

          </div>

        </div>


        <div class="d59-warning">

          <strong>
            ⭐ STAAR Thinking:
          </strong>

          Do not assume a circuit is complete
          because all the parts are present.

          Trace the complete path through
          every load.

        </div>

      </section>


      <section class="d59-card">

        <h2>
          📓 Science Notebook
        </h2>

        <p>
          Draw and label your Day 59 circuit.
        </p>


        <div class="d59-notebook">

          <div>
            <strong>1.</strong>
            Draw one battery.
          </div>

          <div>
            <strong>2.</strong>
            Draw Bulb 1.
          </div>

          <div>
            <strong>3.</strong>
            Draw Bulb 2.
          </div>

          <div>
            <strong>4.</strong>
            Draw all three wires.
          </div>

          <div>
            <strong>5.</strong>
            Label + and − battery terminals.
          </div>

          <div>
            <strong>6.</strong>
            Add arrows showing the single path.
          </div>

        </div>


        <div class="d59-table-wrap">

          <table class="d59-table">

            <thead>

              <tr>
                <th>Part</th>
                <th>Job</th>
                <th>Position in Path</th>
              </tr>

            </thead>


            <tbody>

              <tr>
                <td>Battery</td>
                <td>Power source</td>
                <td></td>
              </tr>

              <tr>
                <td>Bulb 1</td>
                <td>Load</td>
                <td></td>
              </tr>

              <tr>
                <td>Bulb 2</td>
                <td>Load</td>
                <td></td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>


      <section class="d59-card">

        <h2>
          🤝 Guided Practice — Trace the Series Path
        </h2>

        <div class="d59-box">

          <ol>

            <li>
              Start at the positive battery terminal.
            </li>

            <li>
              Trace the wire to Bulb 1.
            </li>

            <li>
              Continue from Bulb 1 to Bulb 2.
            </li>

            <li>
              Continue from Bulb 2 back to
              the opposite battery terminal.
            </li>

            <li>
              Count the number of available paths.
            </li>

            <li>
              Identify both loads.
            </li>

          </ol>

        </div>

      </section>


      <section class="d59-card d59-cream">

        <div class="d59-badge">
          ⚡ Interactive Lab
        </div>

        <h2>
          Circuit Builder Mission: One Path, Two Bulbs
        </h2>


        <div class="d59-required">

          <div>
            🔋
            <strong>1 Battery</strong>
          </div>

          <div>
            💡
            <strong>2 Bulbs</strong>
          </div>

          <div>
            〰️
            <strong>3 Wires</strong>
          </div>

        </div>


        <div class="d59-build">

          <h3>
            Build This Path
          </h3>

          <div class="d59-build-path">

            🔋 Battery

            <span>→</span>

            💡 Bulb 1

            <span>→</span>

            💡 Bulb 2

            <span>→</span>

            🔋 opposite battery terminal

          </div>

        </div>


        <div class="d59-mission-steps">

          <strong>
            Mission Steps
          </strong>

          <div>
            ✓ Add one battery.
          </div>

          <div>
            ✓ Add two bulbs.
          </div>

          <div>
            ✓ Add three wires.
          </div>

          <div>
            ✓ Connect both bulbs in one path.
          </div>

          <div>
            ✓ Test the circuit.
          </div>

          <div>
            ✓ Trace the complete path.
          </div>

          <div>
            ✓ Identify both loads.
          </div>

        </div>


        <div class="d59-success">

          🏁 <strong>MISSION COMPLETE:</strong>

          You built a series circuit with two loads
          connected in one continuous conducting path.

        </div>


        <a
          href="/labs/circuit-builder?mission=day59"
          class="d59-lab-button"
        >
          ⚡ Start Two-Bulb Series Mission
        </a>

      </section>


      <section class="d59-card">

        <div class="d59-badge">
          ⭐ STAAR Practice
        </div>

        <h2>
          Series Circuit Evidence
        </h2>


        ${question(
          1,
          "A student connects two bulbs in one continuous path with a battery. Which statement best describes the circuit?",
          [
            "A. Both bulbs are loads in the same conducting path.",
            "B. Each bulb must have its own separate battery.",
            "C. Only the first bulb is part of the circuit.",
            "D. The wires are the loads in the circuit."
          ],
          "A",
          "Both bulbs are loads connected along the same continuous conducting path."
        )}


        ${question(
          2,
          "Which path correctly describes a two-bulb series circuit?",
          [
            "A. Battery terminal → Bulb 1 → Bulb 2 → opposite battery terminal",
            "B. Battery terminal → Bulb 1 → same battery terminal",
            "C. Bulb 1 → Bulb 2 without a battery",
            "D. Battery → wire that does not connect to either bulb"
          ],
          "A",
          "A complete path leaves one battery terminal, passes through both loads, and returns to the opposite terminal."
        )}


        ${question(
          3,
          "A student wants to prove that two bulbs are connected in one continuous path. Which evidence would be most useful?",
          [
            "A. Trace one unbroken route from one battery terminal through both bulbs and back to the other terminal.",
            "B. Count how many colors are used in the wires.",
            "C. Measure the distance between the bulbs.",
            "D. Place the bulbs on opposite sides of the table."
          ],
          "A",
          "Tracing the entire conducting path provides evidence that both loads are in the same circuit path."
        )}

      </section>


      <section class="d59-card">

        <h2>
          🎟 Written Exit Ticket
        </h2>

        <p>
          Describe the path electrical energy follows
          in a circuit with one battery and two bulbs
          connected in series.
        </p>

        <textarea
          class="d59-textarea"
          placeholder="The path begins at..."
        ></textarea>

      </section>


      <section class="d59-card">

        <h2>
          🧠 Explain Your Thinking: CER
        </h2>


        <div class="d59-focus">

          <strong>
            CER Question:
          </strong>

          How do you know both bulbs are connected
          in the same circuit path?

        </div>


        <div class="d59-grid3">

          <div>

            <h3>Claim</h3>

            <textarea
              class="d59-textarea"
              placeholder="My claim is..."
            ></textarea>

          </div>


          <div>

            <h3>Evidence</h3>

            <textarea
              class="d59-textarea"
              placeholder="Evidence from my Circuit Builder model..."
            ></textarea>

          </div>


          <div>

            <h3>Reasoning</h3>

            <textarea
              class="d59-textarea"
              placeholder="This proves there is one path because..."
            ></textarea>

          </div>

        </div>

      </section>


      <section class="d59-card d59-cream">

        <div class="d59-badge d59-blue-badge">
          📘 McGraw Hill Lesson Connection
        </div>

        <h2>
          Electricity and Light
        </h2>


        <div class="d59-box">

          <h3>
            Chapter 4 — Electrical Circuits
          </h3>

          <p>
            Use the district-approved McGraw Hill
            circuit models and diagrams to reinforce
            complete circuits containing multiple loads.
          </p>


          <strong>
            Today's connection:
          </strong>

          <ul>
            <li>complete conducting paths,</li>
            <li>multiple loads,</li>
            <li>one continuous path,</li>
            <li>battery terminal connections,</li>
            <li>series circuit models.</li>
          </ul>

        </div>

      </section>

    `;


    activateQuestions(
      lower
    );


    return lower;
  }


  // =========================================================
  // SLIDES
  // =========================================================

  function activateSlides(
    card,
    slides
  ) {

    let index = 0;
    let timer = null;


    const icon =
      card.querySelector(
        ".d59-slide-icon"
      );

    const title =
      card.querySelector(
        ".d59-slide-title"
      );

    const main =
      card.querySelector(
        ".d59-slide-main"
      );

    const caption =
      card.querySelector(
        ".d59-slide-caption"
      );

    const number =
      card.querySelector(
        ".d59-number"
      );

    const play =
      card.querySelector(
        ".d59-play"
      );


    function draw() {

      const item =
        slides[index];


      icon.textContent =
        item.icon;

      title.textContent =
        item.title;

      main.textContent =
        item.main;

      caption.textContent =
        item.caption;

      number.textContent =
        "Slide "
        +
        (index + 1)
        +
        " of "
        +
        slides.length;
    }


    function stop() {

      if (timer) {

        clearInterval(
          timer
        );

        timer = null;
      }


      play.textContent =
        "▶ Play Mission Brief";
    }


    card.querySelector(
      ".d59-back"
    ).onclick =
      function () {

        stop();

        index =
          Math.max(
            0,
            index - 1
          );

        draw();
      };


    card.querySelector(
      ".d59-next"
    ).onclick =
      function () {

        stop();

        index =
          Math.min(
            slides.length - 1,
            index + 1
          );

        draw();
      };


    card.querySelector(
      ".d59-restart"
    ).onclick =
      function () {

        stop();

        index = 0;

        draw();
      };


    play.onclick =
      function () {

        if (timer) {

          stop();

          return;
        }


        play.textContent =
          "⏸ Pause Mission Brief";


        timer =
          setInterval(
            function () {

              if (
                index <
                slides.length - 1
              ) {

                index += 1;

                draw();

              } else {

                stop();
              }

            },
            4500
          );
      };


    draw();
  }


  // =========================================================
  // STEVE
  // =========================================================

  function activateSteve(
    card
  ) {

    let selected = null;


    const answers =
      Array.from(
        card.querySelectorAll(
          ".d59-answer"
        )
      );


    const feedback =
      card.querySelector(
        ".d59-feedback"
      );


    answers.forEach(
      function (answer) {

        answer.onclick =
          function () {

            answers.forEach(
              button =>
                button.classList.remove(
                  "selected"
                )
            );


            answer.classList.add(
              "selected"
            );


            selected =
              answer.dataset.answer;
          };
      }
    );


    card.querySelector(
      ".d59-check"
    ).onclick =
      function () {

        if (!selected) {

          feedback.textContent =
            "Choose an answer first.";

          return;
        }


        answers.forEach(
          button =>
            button.classList.remove(
              "correct",
              "wrong"
            )
        );


        const correct =
          answers.find(
            button =>
              button.dataset.answer ===
              "A"
          );


        correct.classList.add(
          "correct"
        );


        if (
          selected ===
          "A"
        ) {

          feedback.style.color =
            "#087a35";


          feedback.textContent =
            "Correct! Both bulbs are loads connected in the same continuous path.";

        } else {

          const chosen =
            answers.find(
              button =>
                button.dataset.answer ===
                selected
            );


          if (chosen) {

            chosen.classList.add(
              "wrong"
            );
          }


          feedback.style.color =
            "#b00020";


          feedback.textContent =
            "Try again. Trace from one battery terminal through Bulb 1, Bulb 2, and back to the opposite terminal.";
        }
      };


    card.querySelector(
      ".d59-reset"
    ).onclick =
      function () {

        selected = null;

        feedback.textContent =
          "";


        answers.forEach(
          button =>
            button.classList.remove(
              "selected",
              "correct",
              "wrong"
            )
        );
      };
  }


  // =========================================================
  // STAAR PRACTICE
  // =========================================================

  function question(
    number,
    prompt,
    choices,
    correct,
    rationale
  ) {

    return `

      <div
        class="d59-practice"
        data-correct="${correct}"
        data-rationale="${escapeAttribute(rationale)}"
      >

        <h3>
          Question ${number}
        </h3>

        <p>
          ${prompt}
        </p>


        ${choices.map(
          function (choice) {

            return `

              <button
                class="d59-practice-answer"
                type="button"
                data-letter="${choice.charAt(0)}"
              >
                ${choice}
              </button>

            `;

          }
        ).join("")}


        <div class="d59-practice-feedback"></div>

      </div>

    `;
  }


  function activateQuestions(
    container
  ) {

    container
      .querySelectorAll(
        ".d59-practice"
      )
      .forEach(
        function (question) {

          const correct =
            question.dataset.correct;


          const rationale =
            question.dataset.rationale;


          const feedback =
            question.querySelector(
              ".d59-practice-feedback"
            );


          question
            .querySelectorAll(
              ".d59-practice-answer"
            )
            .forEach(
              function (answer) {

                answer.onclick =
                  function () {

                    question
                      .querySelectorAll(
                        ".d59-practice-answer"
                      )
                      .forEach(
                        button =>
                          button.classList.remove(
                            "correct",
                            "wrong"
                          )
                      );


                    if (
                      answer.dataset.letter ===
                      correct
                    ) {

                      answer.classList.add(
                        "correct"
                      );


                      feedback.style.color =
                        "#087a35";


                      feedback.textContent =
                        "Correct! "
                        +
                        rationale;

                    } else {

                      answer.classList.add(
                        "wrong"
                      );


                      const correctButton =
                        Array.from(
                          question.querySelectorAll(
                            ".d59-practice-answer"
                          )
                        )
                        .find(
                          button =>
                            button.dataset.letter ===
                            correct
                        );


                      if (correctButton) {

                        correctButton.classList.add(
                          "correct"
                        );
                      }


                      feedback.style.color =
                        "#b00020";


                      feedback.textContent =
                        "Not quite. "
                        +
                        rationale;
                    }
                  };
              }
            );
        }
      );
  }


  // =========================================================
  // HIDE OLD GENERIC SECTIONS
  // =========================================================

  function hideOldSections() {

    [
      "Bell Ringer",
      "Mini Lesson",
      "Science Notebook",
      "Guided Practice",
      "Lab / Investigation",
      "Lab Notebook",
      "Written Exit Ticket",
      "Explain Your Thinking: CER",
      "McGraw Hill Connection"
    ]
    .forEach(
      function (text) {

        const card =
          findCard(
            text
          );


        if (card) {

          card.style.display =
            "none";
        }
      }
    );
  }


  // =========================================================
  // HELPERS
  // =========================================================

  function section(
    className
  ) {

    const element =
      document.createElement(
        "section"
      );


    element.className =
      className;


    return element;
  }


  function findCard(
    text
  ) {

    const matches =
      Array.from(
        document.querySelectorAll(
          "section, article, div"
        )
      )
      .filter(
        function (element) {

          return (
            (
              element.innerText ||
              ""
            )
            .replace(
              /\s+/g,
              " "
            )
            .trim()
            .includes(
              text
            )
          );
        }
      );


    matches.sort(
      function (a, b) {

        return (
          a.getBoundingClientRect().height
          -
          b.getBoundingClientRect().height
        );
      }
    );


    return matches.find(
      function (element) {

        const rect =
          element.getBoundingClientRect();


        return (
          rect.width > 500
          &&
          rect.height > 70
        );
      }
    ) || null;
  }


  function escapeAttribute(
    value
  ) {

    return String(
      value
    )
    .replace(
      /&/g,
      "&amp;"
    )
    .replace(
      /"/g,
      "&quot;"
    )
    .replace(
      /</g,
      "&lt;"
    )
    .replace(
      />/g,
      "&gt;"
    );
  }

})();
