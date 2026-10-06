(function () {
  "use strict";


  if (
    !window.location.pathname.includes(
      "/second-nine-weeks/day/55"
    )
  ) {
    return;
  }


  function start() {
    setTimeout(buildDay55, 850);
  }


  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      start
    );

  } else {

    start();
  }


  function buildDay55() {

    const old =
      document.getElementById(
        "scienceStudioDay55"
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
        "Day 55: Vocabulary card not found."
      );

      return;
    }


    const top =
      document.createElement(
        "div"
      );


    top.id =
      "scienceStudioDay55";


    top.appendChild(
      buildPhenomenon()
    );


    top.appendChild(
      buildMissionBrief()
    );


    top.appendChild(
      buildSteve()
    );


    vocabulary.parentNode.insertBefore(
      top,
      vocabulary
    );


    const lower =
      buildLowerLesson();


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

  function buildPhenomenon() {

    const card =
      makeSection(
        "d55-card d55-cream"
      );


    card.innerHTML = `

      <div class="d55-badge">
        🔎 Phenomenon Mission
      </div>

      <h2>
        Make the Bulb Light
      </h2>

      <div class="d55-unit">
        Day 55 • Build a Simple Circuit
      </div>


      <div class="d55-image">

        <img
          src="/static/phenomenon/day55_simple_circuit.svg"
          alt="Simple circuit with one battery, two wires, and one bulb"
        >

      </div>


      <div class="d55-focus">

        <strong>
          ❓ Focus Question:
        </strong>

        Why does connecting both battery terminals
        through the bulb make it light?

      </div>


      <div class="d55-grid2">

        <div class="d55-box">
          <strong>👀 Notice</strong>
          One wire leaves one battery terminal.
          The other wire returns to the other terminal.
        </div>

        <div class="d55-box">
          <strong>🤔 Wonder</strong>
          What would happen if either wire were disconnected?
        </div>

        <div class="d55-box">
          <strong>🧪 Quick Explore</strong>
          Trace the path from + through the bulb and back to −.
        </div>

        <div class="d55-box">
          <strong>📊 Evidence Tracker</strong>
          Record what happens when the path is complete
          and when a connection is broken.
        </div>

      </div>

    `;


    return card;
  }


  // =========================================================
  // MISSION BRIEF
  // =========================================================

  function buildMissionBrief() {

    const card =
      makeSection(
        "d55-card d55-cream"
      );


    card.innerHTML = `

      <div class="d55-header">

        <div>

          <div class="d55-badge">
            🎬 Mission Brief Animation
          </div>

          <h2>
            Mission Brief: Build a Simple Circuit
          </h2>

          <div class="d55-unit">
            Day 55 • Battery + Two Wires + Bulb
          </div>

        </div>


        <button
          type="button"
          class="d55-play"
        >
          ▶ Play Mission Brief
        </button>

      </div>


      <div class="d55-slide">

        <div class="d55-slide-icon"></div>

        <h2 class="d55-slide-title"></h2>

        <div class="d55-slide-main"></div>

        <div class="d55-slide-caption"></div>

      </div>


      <div class="d55-footer">

        <strong class="d55-number"></strong>

        <div>

          <button
            type="button"
            class="d55-control d55-back"
          >
            ◀ Back
          </button>

          <button
            type="button"
            class="d55-control d55-next"
          >
            Next ▶
          </button>

          <button
            type="button"
            class="d55-control d55-restart"
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
          "Build a functioning simple circuit using one battery, two wires, and one bulb.",
        caption:
          "You may experiment with extra parts, but they are not required."
      },

      {
        icon: "🔋",
        title: "Start With the Battery",
        main:
          "Identify the positive (+) and negative (−) battery terminals.",
        caption:
          "Both battery terminals must become part of the complete path."
      },

      {
        icon: "〰️",
        title: "Wire 1",
        main:
          "Connect one battery terminal to one terminal on the bulb.",
        caption:
          "The wire provides part of the conducting path."
      },

      {
        icon: "💡",
        title: "The Bulb Is the Load",
        main:
          "The conducting path must travel through the bulb.",
        caption:
          "The bulb transforms electrical energy into light and thermal energy."
      },

      {
        icon: "〰️",
        title: "Wire 2",
        main:
          "Connect the bulb back to the other battery terminal.",
        caption:
          "The second wire completes the return path."
      },

      {
        icon: "✨",
        title: "Test the Circuit",
        main:
          "When every connection is secure and the path is complete, the bulb can light.",
        caption:
          "Observable output is evidence that the system is functioning."
      },

      {
        icon: "⭐",
        title: "STAAR Strategy",
        main:
          "Trace the entire circuit instead of simply counting the parts.",
        caption:
          "Correct parts + correct connections = functioning circuit."
      }

    ];


    let index = 0;
    let timer = null;


    const icon =
      card.querySelector(".d55-slide-icon");

    const title =
      card.querySelector(".d55-slide-title");

    const main =
      card.querySelector(".d55-slide-main");

    const caption =
      card.querySelector(".d55-slide-caption");

    const number =
      card.querySelector(".d55-number");

    const play =
      card.querySelector(".d55-play");


    function draw() {

      const slide =
        slides[index];


      icon.textContent =
        slide.icon;

      title.textContent =
        slide.title;

      main.textContent =
        slide.main;

      caption.textContent =
        slide.caption;

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


    card.querySelector(".d55-back").onclick =
      function () {

        stop();

        index =
          Math.max(
            0,
            index - 1
          );

        draw();
      };


    card.querySelector(".d55-next").onclick =
      function () {

        stop();

        index =
          Math.min(
            slides.length - 1,
            index + 1
          );

        draw();
      };


    card.querySelector(".d55-restart").onclick =
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


    return card;
  }


  // =========================================================
  // STEVE
  // =========================================================

  function buildSteve() {

    const card =
      makeSection(
        "d55-card d55-blue"
      );


    card.innerHTML = `

      <div class="d55-steve-grid">

        <div class="d55-penguin">
          🐧
        </div>


        <div>

          <div class="d55-badge d55-blue-badge">
            🐧 Steve the Penguin's STAAR Mission
          </div>

          <h2>
            Steve the Penguin's Light-It-Up Mission
          </h2>

          <div class="d55-unit">
            Day 55 • Simple Circuit Evidence
          </div>


          <div class="d55-scenario">

            <strong>
              Steve's Scenario:
            </strong>

            <br><br>

            Steve has one battery, two wires,
            and one bulb.

            One wire connects the positive (+)
            battery terminal to the bulb.

            Steve still needs to decide where
            the second wire should connect.

          </div>


          <div class="d55-question">

            <strong>
              STAAR-Style Question:
            </strong>

            <p>
              Where should Steve connect the second wire
              so the bulb can be part of a complete
              conducting path?
            </p>


            <button class="d55-answer" data-answer="A">
              A. From the bulb back to the negative battery terminal.
            </button>

            <button class="d55-answer" data-answer="B">
              B. From the bulb back to the same positive terminal.
            </button>

            <button class="d55-answer" data-answer="C">
              C. To another loose wire that touches nothing.
            </button>

            <button class="d55-answer" data-answer="D">
              D. The second wire does not need to be connected.
            </button>


            <div class="d55-answer-row">

              <button
                type="button"
                class="d55-check"
              >
                Check Answer
              </button>

              <button
                type="button"
                class="d55-reset"
              >
                Reset
              </button>

            </div>


            <div class="d55-feedback"></div>

          </div>

        </div>

      </div>

    `;


    activateSteveQuestion(
      card
    );


    return card;
  }


  // =========================================================
  // LOWER LESSON
  // =========================================================

  function buildLowerLesson() {

    const lower =
      document.createElement(
        "div"
      );


    lower.id =
      "scienceStudioDay55Lower";


    lower.innerHTML = `

      <section class="d55-card">

        <h2>
          🔔 Bell Ringer
        </h2>

        <div class="d55-box">

          <p>
            You have one battery,
            two wires, and one bulb.
          </p>

          <ol>
            <li>
              Where should the first wire connect?
            </li>

            <li>
              Where should the second wire connect?
            </li>

            <li>
              How will you know the conducting path is complete?
            </li>
          </ol>

        </div>

      </section>


      <section class="d55-card">

        <h2>
          👨‍🏫 Mini Lesson
        </h2>


        <div class="d55-grid3">

          <div class="d55-box">
            <strong>🔋 Battery</strong>
            Power source
          </div>

          <div class="d55-box">
            <strong>〰️ Two Wires</strong>
            Conducting path
          </div>

          <div class="d55-box">
            <strong>💡 Bulb</strong>
            Load
          </div>

        </div>


        <div class="d55-path">

          <strong>
            COMPLETE PATH:
          </strong>

          <span>
            battery terminal
          </span>

          <b>→</b>

          <span>
            wire
          </span>

          <b>→</b>

          <span>
            bulb
          </span>

          <b>→</b>

          <span>
            wire
          </span>

          <b>→</b>

          <span>
            other battery terminal
          </span>

        </div>


        <div class="d55-warning">

          <strong>⭐ STAAR Thinking:</strong>

          Do not just count the components.
          Trace the actual conducting path.

        </div>

      </section>


      <section class="d55-card">

        <h2>
          📓 Science Notebook
        </h2>

        <div class="d55-box">

          <strong>
            Draw your successful circuit.
          </strong>

          <ul>
            <li>Label the battery.</li>
            <li>Label + and − terminals.</li>
            <li>Label Wire 1.</li>
            <li>Label Wire 2.</li>
            <li>Label the bulb/load.</li>
            <li>
              Draw arrows showing the complete path.
            </li>
          </ul>

        </div>

      </section>


      <section class="d55-card">

        <h2>
          🤝 Guided Practice — Trace Before You Build
        </h2>

        <div class="d55-box">

          <ol>
            <li>
              Start at one battery terminal.
            </li>

            <li>
              Follow Wire 1.
            </li>

            <li>
              Trace through the bulb.
            </li>

            <li>
              Follow Wire 2.
            </li>

            <li>
              Make sure Wire 2 returns to the other battery terminal.
            </li>

            <li>
              Check that every wire snaps onto an actual connection point.
            </li>
          </ol>

        </div>

      </section>


      <section class="d55-card d55-cream">

        <div class="d55-badge">
          ⚡ Interactive Lab
        </div>

        <h2>
          Circuit Builder Mission: Make the Bulb Light
        </h2>

        <p>
          Build your first functioning circuit.
        </p>


        <div class="d55-required">

          <div>
            🔋
            <strong>1 Battery</strong>
          </div>

          <div>
            〰️
            <strong>2 Wires</strong>
          </div>

          <div>
            💡
            <strong>1 Bulb</strong>
          </div>

        </div>


        <div class="d55-grid2">

          <div class="d55-box">
            ✓ Connect to one battery terminal.
          </div>

          <div class="d55-box">
            ✓ Travel through the bulb.
          </div>

          <div class="d55-box">
            ✓ Return to the other battery terminal.
          </div>

          <div class="d55-box">
            ✓ Test the circuit.
          </div>

          <div class="d55-box">
            ✓ Repair any loose connection.
          </div>

          <div class="d55-box">
            ✓ Get the bulb to light.
          </div>

        </div>


        <div class="d55-success">

          🏁 <strong>MISSION COMPLETE:</strong>

          The bulb lights and you can trace
          the complete conducting path.

        </div>


        <a
          href="/labs/circuit-builder?mission=day55"
          class="d55-lab-button"
        >
          ⚡ Start Simple Circuit Mission
        </a>

      </section>


      <section class="d55-card">

        <div class="d55-badge">
          ⭐ STAAR Practice
        </div>

        <h2>
          Simple Circuit Evidence
        </h2>


        ${questionHTML(
          1,
          "A student has one battery, two wires, and one bulb. Which setup will most likely make the bulb light?",
          [
            "A. One wire connects the battery to the bulb, but the second wire is not connected.",
            "B. Both wires connect only to the same battery terminal.",
            "C. One wire connects one battery terminal to the bulb and the second wire connects the bulb to the other battery terminal.",
            "D. The bulb is placed beside the battery without wires."
          ],
          "C",
          "The conducting path must travel from one battery terminal, through the bulb, and back to the other terminal."
        )}


        ${questionHTML(
          2,
          "A student builds a simple circuit, but the bulb does not light. Which action should the student do first?",
          [
            "A. Trace the conducting path and check every connection.",
            "B. Add several extra bulbs.",
            "C. Move the battery farther away.",
            "D. Remove both wires."
          ],
          "A",
          "Tracing the conducting path helps locate a loose connection or gap."
        )}


        ${questionHTML(
          3,
          "Which observation is the best evidence that electrical energy is moving through a complete simple circuit?",
          [
            "A. The wires are the same length.",
            "B. The battery is standing upright.",
            "C. The bulb lights.",
            "D. The parts are close together."
          ],
          "C",
          "A lit bulb is observable evidence that the circuit is functioning."
        )}

      </section>


      <section class="d55-card">

        <h2>
          🎟 Written Exit Ticket
        </h2>

        <p>
          Describe the path electrical energy
          follows in your successful simple circuit.
        </p>

        <textarea
          class="d55-textarea"
          placeholder="Start at one battery terminal..."
        ></textarea>

      </section>


      <section class="d55-card">

        <h2>
          🧠 Explain Your Thinking: CER
        </h2>


        <div class="d55-focus">

          <strong>
            CER Question:
          </strong>

          What evidence shows that your simple circuit
          formed a complete conducting path?

        </div>


        <div class="d55-grid3">

          <div>

            <h3>Claim</h3>

            <textarea
              class="d55-textarea"
              placeholder="My claim is..."
            ></textarea>

          </div>


          <div>

            <h3>Evidence</h3>

            <textarea
              class="d55-textarea"
              placeholder="I observed..."
            ></textarea>

          </div>


          <div>

            <h3>Reasoning</h3>

            <textarea
              class="d55-textarea"
              placeholder="This shows a complete path because..."
            ></textarea>

          </div>

        </div>

      </section>


      <section class="d55-card d55-cream">

        <div class="d55-badge d55-blue-badge">
          📘 McGraw Hill Lesson Connection
        </div>

        <h2>
          Electricity and Light
        </h2>


        <div class="d55-box">

          <h3>
            Chapter 4 — Electrical Circuits
          </h3>

          <p>
            Use the district-approved McGraw Hill
            circuit diagrams to reinforce how the
            battery, conducting wires, and load
            work together in a complete circuit.
          </p>


          <strong>
            Today's connection:
          </strong>

          <ul>
            <li>power source,</li>
            <li>conducting path,</li>
            <li>load,</li>
            <li>positive battery terminal,</li>
            <li>negative battery terminal,</li>
            <li>complete circuit evidence.</li>
          </ul>

        </div>

      </section>

    `;


    activatePracticeQuestions(
      lower
    );


    return lower;
  }


  // =========================================================
  // STEVE QUESTION
  // =========================================================

  function activateSteveQuestion(
    card
  ) {

    let selected = null;


    const answers =
      Array.from(
        card.querySelectorAll(
          ".d55-answer"
        )
      );


    const feedback =
      card.querySelector(
        ".d55-feedback"
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


    card.querySelector(".d55-check").onclick =
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
            "Correct! The conducting path must return to the other battery terminal.";

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
            "Try again. Trace the path from one battery terminal, through the bulb, and back to the other terminal.";
        }
      };


    card.querySelector(".d55-reset").onclick =
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

  function questionHTML(
    number,
    question,
    choices,
    correct,
    rationale
  ) {

    return `

      <div
        class="d55-practice"
        data-correct="${correct}"
        data-rationale="${escapeAttribute(rationale)}"
      >

        <h3>
          Question ${number}
        </h3>

        <p>
          ${question}
        </p>


        ${choices.map(
          function (choice) {

            return `

              <button
                type="button"
                class="d55-practice-answer"
                data-letter="${choice.charAt(0)}"
              >
                ${choice}
              </button>

            `;

          }
        ).join("")}


        <div class="d55-practice-feedback"></div>

      </div>

    `;
  }


  function activatePracticeQuestions(
    container
  ) {

    container
      .querySelectorAll(
        ".d55-practice"
      )
      .forEach(
        function (question) {

          const correct =
            question.dataset.correct;


          const rationale =
            question.dataset.rationale;


          const feedback =
            question.querySelector(
              ".d55-practice-feedback"
            );


          question
            .querySelectorAll(
              ".d55-practice-answer"
            )
            .forEach(
              function (answer) {

                answer.onclick =
                  function () {

                    question
                      .querySelectorAll(
                        ".d55-practice-answer"
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
                            ".d55-practice-answer"
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
  // OLD GENERIC CONTENT
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

  function makeSection(
    className
  ) {

    const section =
      document.createElement(
        "section"
      );


    section.className =
      className;


    return section;
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
