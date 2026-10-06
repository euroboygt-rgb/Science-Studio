(function () {
  "use strict";


  if (
    !window.location.pathname.includes(
      "/second-nine-weeks/day/56"
    )
  ) {
    return;
  }


  function start() {
    setTimeout(buildDay56, 850);
  }


  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      start
    );

  } else {

    start();
  }


  function buildDay56() {

    const old =
      document.getElementById(
        "scienceStudioDay56"
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
        "Day 56: vocabulary card not found."
      );

      return;
    }


    const top =
      document.createElement(
        "div"
      );


    top.id =
      "scienceStudioDay56";


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
        "d56-card d56-cream"
      );


    card.innerHTML = `

      <div class="d56-badge">
        🔎 Phenomenon Mission
      </div>

      <h2>
        What Changed?
      </h2>

      <div class="d56-unit">
        Day 56 • Open and Closed Circuits
      </div>


      <div class="d56-image">

        <img
          src="/static/phenomenon/day56_open_closed_switch.svg"
          alt="Comparison of an open-switch circuit with bulb off and a closed-switch circuit with bulb on"
        >

      </div>


      <div class="d56-focus">

        <strong>
          ❓ Focus Question:
        </strong>

        Why does changing only the switch position
        change whether the bulb lights?

      </div>


      <div class="d56-grid2">

        <div class="d56-box">

          <strong>
            👀 Notice
          </strong>

          Both systems have the same battery,
          wires, switch, and bulb.

        </div>


        <div class="d56-box">

          <strong>
            🤔 Wonder
          </strong>

          Why does the bulb light in one circuit
          but not the other?

        </div>


        <div class="d56-box">

          <strong>
            🧪 Quick Explore
          </strong>

          Trace the conducting path in both diagrams.

        </div>


        <div class="d56-box">

          <strong>
            📊 Evidence Tracker
          </strong>

          Identify exactly where the path is
          connected or broken.

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
        "d56-card d56-cream"
      );


    card.innerHTML = `

      <div class="d56-header">

        <div>

          <div class="d56-badge">
            🎬 Mission Brief Animation
          </div>

          <h2>
            Mission Brief: Control the Conducting Path
          </h2>

          <div class="d56-unit">
            Day 56 • Open and Closed Circuits
          </div>

        </div>


        <button
          class="d56-play"
          type="button"
        >
          ▶ Play Mission Brief
        </button>

      </div>


      <div class="d56-slide">

        <div class="d56-slide-icon"></div>

        <h2 class="d56-slide-title"></h2>

        <div class="d56-slide-main"></div>

        <div class="d56-slide-caption"></div>

      </div>


      <div class="d56-footer">

        <strong class="d56-number"></strong>

        <div>

          <button
            class="d56-control d56-back"
            type="button"
          >
            ◀ Back
          </button>

          <button
            class="d56-control d56-next"
            type="button"
          >
            Next ▶
          </button>

          <button
            class="d56-control d56-restart"
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
          "Investigate how a switch controls whether an electrical circuit is open or closed.",

        caption:
          "Keep the other circuit parts the same."
      },


      {
        icon: "🔘",
        title: "The Switch Is a Control",

        main:
          "The switch controls whether the conducting path is connected or broken.",

        caption:
          "The switch does not create the electrical energy."
      },


      {
        icon: "⭕",
        title: "Open Circuit",

        main:
          "An open switch creates a gap in the conducting path.",

        caption:
          "With a break in the path, the bulb does not light."
      },


      {
        icon: "✅",
        title: "Closed Circuit",

        main:
          "A closed switch connects the conducting path.",

        caption:
          "Electrical energy can move through the complete circuit."
      },


      {
        icon: "💡",
        title: "Observe the Load",

        main:
          "The bulb provides visible evidence about whether the circuit is functioning.",

        caption:
          "Bulb ON = functioning path. Bulb OFF may indicate a break."
      },


      {
        icon: "🔋",
        title: "The Battery Still Has Energy",

        main:
          "Opening the switch does not make the battery lose its stored energy.",

        caption:
          "The open switch prevents the circuit from having a complete path."
      },


      {
        icon: "⭐",
        title: "STAAR Strategy",

        main:
          "When two circuits use the same parts, compare the connections and the switch position.",

        caption:
          "Look for the exact place where the conducting path is broken."
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
        "d56-card d56-blue"
      );


    card.innerHTML = `

      <div class="d56-steve-grid">

        <div class="d56-penguin">
          🐧
        </div>


        <div>

          <div class="d56-badge d56-blue-badge">
            🐧 Steve the Penguin's STAAR Mission
          </div>

          <h2>
            Steve the Penguin's Switch Mission
          </h2>

          <div class="d56-unit">
            Day 56 • Open and Closed Circuit Evidence
          </div>


          <div class="d56-scenario">

            <strong>
              Steve's Scenario:
            </strong>

            <br><br>

            Steve builds a circuit with a battery,
            wires, a switch, and a bulb.

            The bulb lights when the switch is closed.

            Steve opens the switch and the bulb turns off.

            He does not move any other circuit part.

          </div>


          <div class="d56-question">

            <strong>
              STAAR-Style Question:
            </strong>

            <p>
              Which conclusion is best supported
              by Steve's evidence?
            </p>


            <button
              class="d56-answer"
              data-answer="A"
            >
              A. Opening the switch created a break in the conducting path.
            </button>


            <button
              class="d56-answer"
              data-answer="B"
            >
              B. Opening the switch removed all energy from the battery.
            </button>


            <button
              class="d56-answer"
              data-answer="C"
            >
              C. Opening the switch changed the bulb into a conductor.
            </button>


            <button
              class="d56-answer"
              data-answer="D"
            >
              D. Opening the switch caused the wires to stop conducting permanently.
            </button>


            <div class="d56-answer-row">

              <button
                class="d56-check"
                type="button"
              >
                Check Answer
              </button>

              <button
                class="d56-reset"
                type="button"
              >
                Reset
              </button>

            </div>


            <div class="d56-feedback"></div>

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
      "scienceStudioDay56Lower";


    lower.innerHTML = `

      <section class="d56-card">

        <h2>
          🔔 Bell Ringer
        </h2>

        <div class="d56-box">

          <p>
            Yesterday you made a bulb light
            with a battery and two wires.
          </p>

          <ol>
            <li>
              What would happen if you created
              a gap in one wire?
            </li>

            <li>
              How could a switch create that gap?
            </li>

            <li>
              How could the switch reconnect the path?
            </li>
          </ol>

        </div>

      </section>


      <section class="d56-card">

        <h2>
          👨‍🏫 Mini Lesson
        </h2>


        <div class="d56-grid2">

          <div class="d56-box">

            <strong>
              🔘 Switch
            </strong>

            Controls whether the conducting
            path is connected or broken.

          </div>


          <div class="d56-box">

            <strong>
              ⭕ Open Circuit
            </strong>

            The conducting path contains a break.

          </div>


          <div class="d56-box">

            <strong>
              ✅ Closed Circuit
            </strong>

            The conducting path is connected.

          </div>


          <div class="d56-box">

            <strong>
              💡 Load Evidence
            </strong>

            The bulb turning on or off provides
            observable evidence about the circuit.

          </div>

        </div>


        <div class="d56-compare">

          <div class="d56-open">

            <strong>
              SWITCH OPEN
            </strong>

            <span>
              path broken
            </span>

            <span>
              bulb OFF
            </span>

          </div>


          <div class="d56-arrow">
            ⇄
          </div>


          <div class="d56-closed">

            <strong>
              SWITCH CLOSED
            </strong>

            <span>
              path complete
            </span>

            <span>
              bulb ON
            </span>

          </div>

        </div>

      </section>


      <section class="d56-card">

        <h2>
          📓 Science Notebook
        </h2>

        <p>
          Complete an Open vs. Closed Circuit evidence table.
        </p>


        <div class="d56-table-wrap">

          <table class="d56-table">

            <thead>

              <tr>
                <th>Switch Position</th>
                <th>Conducting Path</th>
                <th>Bulb</th>
                <th>Evidence</th>
              </tr>

            </thead>


            <tbody>

              <tr>
                <td>OPEN</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>CLOSED</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>OPEN AGAIN</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>CLOSED AGAIN</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>


      <section class="d56-card">

        <h2>
          🤝 Guided Practice — Trace the Switch
        </h2>

        <div class="d56-box">

          <ol>
            <li>
              Start at one battery terminal.
            </li>

            <li>
              Follow the wire to the switch.
            </li>

            <li>
              Decide whether the switch
              connects or breaks the path.
            </li>

            <li>
              Continue through the bulb.
            </li>

            <li>
              Trace the path back to the
              other battery terminal.
            </li>

            <li>
              Predict whether the bulb
              should be ON or OFF.
            </li>
          </ol>

        </div>

      </section>


      <section class="d56-card d56-cream">

        <div class="d56-badge">
          ⚡ Interactive Lab
        </div>

        <h2>
          Circuit Builder Mission: Control the Bulb
        </h2>


        <div class="d56-required">

          <div>
            🔋
            <strong>1 Battery</strong>
          </div>

          <div>
            💡
            <strong>1 Bulb</strong>
          </div>

          <div>
            🔘
            <strong>1 Switch</strong>
          </div>

          <div>
            〰️
            <strong>3 Wires</strong>
          </div>

        </div>


        <div class="d56-mission">

          <h3>
            Mission Sequence
          </h3>

          <div>
            1️⃣ Build the circuit with the switch CLOSED.
          </div>

          <div>
            2️⃣ Test it. The bulb should light.
          </div>

          <div>
            3️⃣ OPEN the switch.
          </div>

          <div>
            4️⃣ Test it again. Observe the bulb.
          </div>

          <div>
            5️⃣ CLOSE the switch again.
          </div>

          <div>
            6️⃣ Explain why the bulb turns ON → OFF → ON.
          </div>

        </div>


        <div class="d56-success">

          🏁 <strong>MISSION COMPLETE:</strong>

          You can use the switch to control the bulb
          and explain how opening and closing the switch
          changes the conducting path.

        </div>


        <a
          href="/labs/circuit-builder?mission=day56"
          class="d56-lab-button"
        >
          ⚡ Start Switch Circuit Mission
        </a>

      </section>


      <section class="d56-card">

        <div class="d56-badge">
          ⭐ STAAR Practice
        </div>

        <h2>
          Open and Closed Circuit Evidence
        </h2>


        ${question(
          1,
          "A bulb is connected to a battery with wires and a switch. The switch is open. Why does the bulb not light?",
          [
            "A. The open switch creates a break in the conducting path.",
            "B. The battery stops containing energy when the switch opens.",
            "C. The bulb becomes an insulator when the switch opens.",
            "D. The wires stop being conductors when the switch opens."
          ],
          "A",
          "An open switch creates a break in the conducting path."
        )}


        ${question(
          2,
          "A student closes a switch and the bulb immediately lights. Which statement best explains the observation?",
          [
            "A. Closing the switch creates a complete conducting path.",
            "B. Closing the switch creates a new battery.",
            "C. Closing the switch changes the wire into a power source.",
            "D. Closing the switch removes the load from the circuit."
          ],
          "A",
          "Closing the switch connects the conducting path."
        )}


        ${question(
          3,
          "Which investigation provides the best evidence that a switch controls the conducting path?",
          [
            "A. Compare a closed switch with an open switch while keeping the battery, wires, and bulb the same.",
            "B. Use two different batteries and two different bulbs.",
            "C. Measure several wires without connecting them.",
            "D. Move the circuit to different places in the classroom."
          ],
          "A",
          "Changing only the switch position isolates the variable being tested."
        )}

      </section>


      <section class="d56-card">

        <h2>
          🎟 Written Exit Ticket
        </h2>

        <p>
          Explain why opening a switch turns
          a bulb off even though the battery
          is still connected to the circuit.
        </p>

        <textarea
          class="d56-textarea"
          placeholder="When the switch opens..."
        ></textarea>

      </section>


      <section class="d56-card">

        <h2>
          🧠 Explain Your Thinking: CER
        </h2>


        <div class="d56-focus">

          <strong>
            CER Question:
          </strong>

          How does a switch control whether
          an electrical circuit functions?

        </div>


        <div class="d56-grid3">

          <div>

            <h3>Claim</h3>

            <textarea
              class="d56-textarea"
              placeholder="My claim is..."
            ></textarea>

          </div>


          <div>

            <h3>Evidence</h3>

            <textarea
              class="d56-textarea"
              placeholder="When the switch was closed/open..."
            ></textarea>

          </div>


          <div>

            <h3>Reasoning</h3>

            <textarea
              class="d56-textarea"
              placeholder="This happened because..."
            ></textarea>

          </div>

        </div>

      </section>


      <section class="d56-card d56-cream">

        <div class="d56-badge d56-blue-badge">
          📘 McGraw Hill Lesson Connection
        </div>

        <h2>
          Electricity and Light
        </h2>


        <div class="d56-box">

          <h3>
            Chapter 4 — Electrical Circuits
          </h3>

          <p>
            Use the district-approved McGraw Hill
            circuit diagrams and investigations to
            reinforce open and closed circuits.
          </p>


          <strong>
            Today's connection:
          </strong>

          <ul>
            <li>switches as controls,</li>
            <li>open circuits,</li>
            <li>closed circuits,</li>
            <li>complete conducting paths,</li>
            <li>observable evidence from the load.</li>
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
      card.querySelector(".d56-slide-icon");

    const title =
      card.querySelector(".d56-slide-title");

    const main =
      card.querySelector(".d56-slide-main");

    const caption =
      card.querySelector(".d56-slide-caption");

    const number =
      card.querySelector(".d56-number");

    const play =
      card.querySelector(".d56-play");


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

        clearInterval(timer);

        timer = null;
      }


      play.textContent =
        "▶ Play Mission Brief";
    }


    card.querySelector(".d56-back").onclick =
      function () {

        stop();

        index =
          Math.max(
            0,
            index - 1
          );

        draw();
      };


    card.querySelector(".d56-next").onclick =
      function () {

        stop();

        index =
          Math.min(
            slides.length - 1,
            index + 1
          );

        draw();
      };


    card.querySelector(".d56-restart").onclick =
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
  // STEVE QUESTION
  // =========================================================

  function activateSteve(
    card
  ) {

    let selected = null;


    const answers =
      Array.from(
        card.querySelectorAll(
          ".d56-answer"
        )
      );


    const feedback =
      card.querySelector(
        ".d56-feedback"
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


    card.querySelector(".d56-check").onclick =
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


        if (selected === "A") {

          feedback.style.color =
            "#087a35";


          feedback.textContent =
            "Correct! Opening the switch created a break in the conducting path.";

        } else {

          const chosen =
            answers.find(
              button =>
                button.dataset.answer ===
                selected
            );


          chosen.classList.add(
            "wrong"
          );


          feedback.style.color =
            "#b00020";


          feedback.textContent =
            "Try again. The only change was the switch position, so look at what happened to the conducting path.";
        }
      };


    card.querySelector(".d56-reset").onclick =
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
  // STAAR QUESTIONS
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
        class="d56-practice"
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
                class="d56-practice-answer"
                type="button"
                data-letter="${choice.charAt(0)}"
              >
                ${choice}
              </button>

            `;

          }
        ).join("")}


        <div class="d56-practice-feedback"></div>

      </div>

    `;
  }


  function activateQuestions(
    container
  ) {

    container
      .querySelectorAll(
        ".d56-practice"
      )
      .forEach(
        function (question) {

          const correct =
            question.dataset.correct;


          const rationale =
            question.dataset.rationale;


          const feedback =
            question.querySelector(
              ".d56-practice-feedback"
            );


          question
            .querySelectorAll(
              ".d56-practice-answer"
            )
            .forEach(
              function (answer) {

                answer.onclick =
                  function () {

                    question
                      .querySelectorAll(
                        ".d56-practice-answer"
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
                            ".d56-practice-answer"
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
  // OLD GENERIC SECTIONS
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
          findCard(text);


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
          rect.width > 500 &&
          rect.height > 70
        );
      }
    ) || null;
  }


  function escapeAttribute(
    value
  ) {

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

})();
