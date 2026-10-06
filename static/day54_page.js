(function () {
  "use strict";


  if (
    !window.location.pathname.includes(
      "/second-nine-weeks/day/54"
    )
  ) {
    return;
  }


  function startDay54() {

    setTimeout(
      buildDay54,
      850
    );
  }


  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      startDay54
    );

  }

  else {

    startDay54();
  }


  function buildDay54() {

    const old =
      document.getElementById(
        "scienceStudioDay54"
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
        "Day 54: vocabulary card not found."
      );

      return;
    }


    const top =
      document.createElement(
        "div"
      );


    top.id =
      "scienceStudioDay54";


    top.className =
      "d54-top";


    top.appendChild(
      phenomenonCard()
    );


    top.appendChild(
      missionBriefCard()
    );


    top.appendChild(
      steveCard()
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

    }

    else {

      vocabulary.insertAdjacentElement(
        "afterend",
        lower
      );
    }


    /*
      Top and lower sections are already placed directly
      on the lesson page. Do not move them again.
    */
  }


  // =========================================================
  // PHENOMENON
  // =========================================================

  function phenomenonCard() {

    const card =
      section(
        "d54-card d54-cream"
      );


    card.innerHTML = `

      <div class="d54-badge">
        🔎 Phenomenon Mission
      </div>

      <h2>
        Which Circuit Will Work?
      </h2>

      <div class="d54-unit">
        Day 54 • Parts of a Functioning Circuit
      </div>


      <div class="d54-image">

        <img
          src="/static/phenomenon/day54_functioning_circuit.svg"
          alt="Three electrical circuits showing a missing return path, an open switch, and a complete conducting path"
        >

      </div>


      <div class="d54-focus">

        <strong>
          ❓ Focus Question:
        </strong>

        Which circuit can function?
        What evidence supports your answer?

      </div>


      <div class="d54-grid2">

        <div class="d54-box">

          <strong>
            👀 Notice
          </strong>

          Each circuit contains similar parts,
          but the connections are different.

        </div>


        <div class="d54-box">

          <strong>
            🤔 Wonder
          </strong>

          Does having all the parts guarantee
          that a circuit will function?

        </div>


        <div class="d54-box">

          <strong>
            🧪 Quick Explore
          </strong>

          Trace each circuit from the positive
          battery terminal to the negative terminal.

        </div>


        <div class="d54-box">

          <strong>
            📊 Evidence Tracker
          </strong>

          Identify the exact place where
          each nonworking path is broken.

        </div>

      </div>

    `;


    return card;
  }


  // =========================================================
  // MISSION BRIEF
  // =========================================================

  function missionBriefCard() {

    const card =
      section(
        "d54-card d54-cream"
      );


    card.innerHTML = `

      <div class="d54-header-row">

        <div>

          <div class="d54-badge">
            🎬 Mission Brief Animation
          </div>

          <h2>
            Mission Brief: Functioning Circuits
          </h2>

          <div class="d54-unit">
            Day 54 • Trace the Conducting Path
          </div>

        </div>


        <button
          class="d54-play"
          type="button"
        >
          ▶ Play Mission Brief
        </button>

      </div>


      <div class="d54-slide">

        <div class="d54-slide-icon"></div>

        <h2 class="d54-slide-title"></h2>

        <div class="d54-slide-main"></div>

        <div class="d54-slide-caption"></div>

      </div>


      <div class="d54-footer">

        <strong class="d54-slide-number"></strong>

        <div>

          <button
            class="d54-small d54-back"
            type="button"
          >
            ◀ Back
          </button>

          <button
            class="d54-small d54-next"
            type="button"
          >
            Next ▶
          </button>

          <button
            class="d54-small d54-restart"
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
          "Determine what connections are required for an electrical circuit to function.",

        caption:
          "The parts must form one complete conducting path."
      },

      {
        icon: "🔋",
        title: "Start at the Power Source",

        main:
          "Begin tracing at one battery terminal.",

        caption:
          "Remember that a battery has a positive (+) terminal and a negative (−) terminal."
      },

      {
        icon: "〰️",
        title: "Follow the Conducting Path",

        main:
          "Trace every wire and every connection in the circuit.",

        caption:
          "A loose or missing connection creates a break."
      },

      {
        icon: "🔘",
        title: "Check the Switch",

        main:
          "An open switch creates a break in the path. A closed switch connects the path.",

        caption:
          "Always inspect the switch when troubleshooting."
      },

      {
        icon: "💡",
        title: "Find the Load",

        main:
          "Electrical energy travels through the load, where it can transform into light, motion, sound, or thermal energy.",

        caption:
          "The load must be part of the complete path."
      },

      {
        icon: "➕ ➖",
        title: "Return to the Battery",

        main:
          "The conducting path must return to the other battery terminal.",

        caption:
          "A connection to only one battery terminal is not a complete circuit."
      },

      {
        icon: "⭐",
        title: "STAAR Strategy",

        main:
          "Trace the whole path. Stop wherever you find a gap, open switch, or missing terminal connection.",

        caption:
          "Use the break in the path as evidence for why the circuit does not function."
      }

    ];


    let index = 0;
    let timer = null;


    const icon =
      card.querySelector(
        ".d54-slide-icon"
      );


    const title =
      card.querySelector(
        ".d54-slide-title"
      );


    const main =
      card.querySelector(
        ".d54-slide-main"
      );


    const caption =
      card.querySelector(
        ".d54-slide-caption"
      );


    const number =
      card.querySelector(
        ".d54-slide-number"
      );


    const play =
      card.querySelector(
        ".d54-play"
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
        (
          index + 1
        )
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


    card
      .querySelector(
        ".d54-back"
      )
      .onclick =
        function () {

          stop();

          index =
            Math.max(
              0,
              index - 1
            );

          draw();
        };


    card
      .querySelector(
        ".d54-next"
      )
      .onclick =
        function () {

          stop();

          index =
            Math.min(
              slides.length - 1,
              index + 1
            );

          draw();
        };


    card
      .querySelector(
        ".d54-restart"
      )
      .onclick =
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

              }

              else {

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

  function steveCard() {

    const card =
      section(
        "d54-card d54-blue"
      );


    card.innerHTML = `

      <div class="d54-steve-grid">

        <div class="d54-penguin">
          🐧
        </div>


        <div>

          <div class="d54-badge d54-blue-badge">
            🐧 Steve the Penguin's STAAR Mission
          </div>

          <h2>
            Steve the Penguin's Circuit Repair Mission
          </h2>

          <div class="d54-unit">
            Day 54 • Functioning Circuit Evidence
          </div>


          <div class="d54-scenario">

            <strong>
              Steve's Scenario:
            </strong>

            <br><br>

            Steve connects a battery, wires,
            a switch, and a bulb.

            A wire leaves the positive (+) battery terminal,
            travels through the circuit, but the path never
            connects back to the negative (−) terminal.

          </div>


          <div class="d54-question">

            <strong>
              STAAR-Style Question:
            </strong>

            <p>
              Which change would most likely make
              Steve's circuit complete?
            </p>


            <button class="d54-answer" data-answer="A">
              A. Add another bulb without connecting it.
            </button>

            <button class="d54-answer" data-answer="B">
              B. Connect a return wire to the negative battery terminal.
            </button>

            <button class="d54-answer" data-answer="C">
              C. Remove the wire connected to the positive terminal.
            </button>

            <button class="d54-answer" data-answer="D">
              D. Move the battery farther away from the bulb.
            </button>


            <div class="d54-answer-buttons">

              <button class="d54-check" type="button">
                Check Answer
              </button>

              <button class="d54-reset" type="button">
                Reset
              </button>

            </div>


            <div class="d54-feedback"></div>

          </div>

        </div>

      </div>

    `;


    let selected = null;


    const answers =
      Array.from(
        card.querySelectorAll(
          ".d54-answer"
        )
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


    const feedback =
      card.querySelector(
        ".d54-feedback"
      );


    card
      .querySelector(
        ".d54-check"
      )
      .onclick =
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
                "B"
            );


          correct.classList.add(
            "correct"
          );


          if (
            selected ===
            "B"
          ) {

            feedback.style.color =
              "#087a35";


            feedback.textContent =
              "Correct! The path must return to the other battery terminal.";

          }

          else {

            answers
              .find(
                button =>
                  button.dataset.answer ===
                  selected
              )
              .classList.add(
                "wrong"
              );


            feedback.style.color =
              "#b00020";


            feedback.textContent =
              "Try again. Trace the conducting path all the way back to the battery.";
          }
        };


    card
      .querySelector(
        ".d54-reset"
      )
      .onclick =
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
      "scienceStudioDay54Lower";


    lower.innerHTML = `

      <section class="d54-card">

        <h2>
          🔔 Bell Ringer
        </h2>

        <div class="d54-box">

          <p>
            A circuit has a battery, wires,
            a bulb, and a switch.
          </p>

          <strong>
            What should you check before deciding
            whether the circuit will work?
          </strong>

          <ol>
            <li>Where does the conducting path begin?</li>
            <li>Is every connection touching a terminal?</li>
            <li>Is the switch open or closed?</li>
            <li>Does the path return to the other battery terminal?</li>
          </ol>

        </div>

      </section>


      <section class="d54-card">

        <h2>
          👨‍🏫 Mini Lesson
        </h2>


        <div class="d54-grid2">

          <div class="d54-box">
            <strong>🔋 Power Source</strong>
            The battery supplies energy to the system.
          </div>

          <div class="d54-box">
            <strong>〰️ Conducting Path</strong>
            Wires connect the parts of the circuit.
          </div>

          <div class="d54-box">
            <strong>🔘 Control</strong>
            A switch opens or closes the path.
          </div>

          <div class="d54-box">
            <strong>💡 Load</strong>
            The load transforms electrical energy.
          </div>

        </div>


        <div class="d54-warning">

          <strong>⭐ STAAR Thinking:</strong>

          Having all the correct parts is not enough.
          The parts must be connected in a complete
          conducting path.

        </div>

      </section>


      <section class="d54-card">

        <h2>
          📓 Science Notebook
        </h2>

        <p>
          Complete the Functioning Circuit Evidence Chart.
        </p>

        <div class="d54-table-wrap">

          <table class="d54-table">

            <thead>
              <tr>
                <th>Part / Connection</th>
                <th>Job</th>
                <th>What happens if it is missing or open?</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Battery</td>
                <td>Power source</td>
                <td></td>
              </tr>

              <tr>
                <td>Positive terminal</td>
                <td>One battery connection point</td>
                <td></td>
              </tr>

              <tr>
                <td>Negative terminal</td>
                <td>Other battery connection point</td>
                <td></td>
              </tr>

              <tr>
                <td>Wire</td>
                <td>Conducting path</td>
                <td></td>
              </tr>

              <tr>
                <td>Switch</td>
                <td>Opens / closes path</td>
                <td></td>
              </tr>

              <tr>
                <td>Load</td>
                <td>Transforms electrical energy</td>
                <td></td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>


      <section class="d54-card">

        <h2>
          🤝 Guided Practice — Circuit Detective
        </h2>

        <div class="d54-box">

          <ol>
            <li>Start at one battery terminal.</li>
            <li>Trace each wire.</li>
            <li>Check every component connection.</li>
            <li>Check the switch.</li>
            <li>Continue tracing through the load.</li>
            <li>Determine whether the path returns to the other battery terminal.</li>
            <li>Identify the exact location of any break.</li>
          </ol>

        </div>

      </section>


      <section class="d54-card d54-cream">

        <div class="d54-badge">
          ⚡ Interactive Lab
        </div>

        <h2>
          Circuit Builder: Functioning Circuit Detective
        </h2>


        <div class="d54-grid2">

          <div class="d54-box">
            ✓ Add one battery.
          </div>

          <div class="d54-box">
            ✓ Add one bulb.
          </div>

          <div class="d54-box">
            ✓ Add one switch.
          </div>

          <div class="d54-box">
            ✓ Add at least three wires.
          </div>

          <div class="d54-box">
            ✓ Identify + and − battery terminals.
          </div>

          <div class="d54-box">
            ✓ Create a missing return path.
          </div>

          <div class="d54-box">
            ✓ Test an open switch.
          </div>

          <div class="d54-box">
            ✓ Test a closed switch.
          </div>

          <div class="d54-box">
            ✓ Disconnect one wire.
          </div>

          <div class="d54-box">
            ✓ Record why each circuit works or does not work.
          </div>

        </div>


        <div class="d54-warning">

          Tomorrow's mission will be different:
          you will independently build a simple
          functioning circuit using one battery,
          two wires, and one load.

        </div>


        <a
          href="/labs/circuit-builder"
          class="d54-lab-button"
        >
          ⚡ Open Circuit Builder
        </a>

      </section>


      <section class="d54-card">

        <div class="d54-badge">
          ⭐ STAAR Practice
        </div>

        <h2>
          Functioning Circuit Evidence
        </h2>

        ${questionHTML(
          1,
          "A circuit contains a battery, wires, a bulb, and an open switch. Why does the bulb not light?",
          [
            "A. The switch creates a break in the conducting path.",
            "B. The bulb is producing too much electrical energy.",
            "C. The battery needs only one terminal connected.",
            "D. The wires are changing electrical energy into motion."
          ],
          "A",
          "An open switch creates a break in the conducting path."
        )}

        ${questionHTML(
          2,
          "One wire connects the positive battery terminal to a bulb, but there is no path from the bulb back to the negative terminal. Which change completes the path?",
          [
            "A. Add another bulb without connecting it.",
            "B. Connect a wire from the bulb back to the negative battery terminal.",
            "C. Remove the positive-terminal wire.",
            "D. Move the battery farther from the bulb."
          ],
          "B",
          "A complete path must return to the other battery terminal."
        )}

        ${questionHTML(
          3,
          "Which observation is the best evidence that a simple bulb circuit has a complete conducting path?",
          [
            "A. The bulb lights when the circuit is tested.",
            "B. The battery is yellow.",
            "C. The wire is longer than the bulb.",
            "D. The switch is far from the battery."
          ],
          "A",
          "A lit bulb is observable evidence that the circuit is functioning."
        )}

      </section>


      <section class="d54-card">

        <h2>
          🎟 Written Exit Ticket
        </h2>

        <p>
          Explain how you can trace a circuit
          to decide whether it has a complete
          conducting path.
        </p>

        <textarea
          class="d54-textarea"
          placeholder="Write your answer here..."
        ></textarea>

      </section>


      <section class="d54-card">

        <h2>
          🧠 Explain Your Thinking: CER
        </h2>


        <div class="d54-focus">

          <strong>
            CER Question:
          </strong>

          Why must an electrical circuit have
          a complete conducting path to function?

        </div>


        <div class="d54-grid3">

          <div>
            <h3>Claim</h3>

            <textarea
              class="d54-textarea"
              placeholder="My claim is..."
            ></textarea>
          </div>


          <div>
            <h3>Evidence</h3>

            <textarea
              class="d54-textarea"
              placeholder="Evidence from the Circuit Builder..."
            ></textarea>
          </div>


          <div>
            <h3>Reasoning</h3>

            <textarea
              class="d54-textarea"
              placeholder="This evidence supports my claim because..."
            ></textarea>
          </div>

        </div>

      </section>


      <section class="d54-card d54-cream">

        <div class="d54-badge d54-blue-badge">
          📘 McGraw Hill Lesson Connection
        </div>

        <h2>
          Electricity and Light
        </h2>


        <div class="d54-box">

          <h3>
            Chapter 4 — Electrical Circuits
          </h3>

          <p>
            Use the district-approved McGraw Hill
            circuit diagrams to practice identifying
            the parts and connections needed for
            a functioning electrical system.
          </p>


          <strong>
            Today's connection:
          </strong>

          <ul>
            <li>power source,</li>
            <li>conducting path,</li>
            <li>switch / control,</li>
            <li>load,</li>
            <li>complete and incomplete paths,</li>
            <li>positive and negative battery terminals.</li>
          </ul>

        </div>

      </section>

    `;


    addQuestionBehavior(
      lower
    );


    return lower;
  }


  // =========================================================
  // QUESTION HELPERS
  // =========================================================

  function questionHTML(
    number,
    prompt,
    choices,
    answer,
    rationale
  ) {

    return `

      <div
        class="d54-practice"
        data-correct="${answer}"
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

            const letter =
              choice.charAt(0);

            return `
              <button
                class="d54-practice-answer"
                data-letter="${letter}"
                type="button"
              >
                ${choice}
              </button>
            `;
          }
        ).join("")}


        <div class="d54-practice-feedback"></div>

      </div>

    `;
  }


  function addQuestionBehavior(
    container
  ) {

    container
      .querySelectorAll(
        ".d54-practice"
      )
      .forEach(
        function (question) {

          const correct =
            question.dataset.correct;


          const rationale =
            question.dataset.rationale;


          const feedback =
            question.querySelector(
              ".d54-practice-feedback"
            );


          question
            .querySelectorAll(
              ".d54-practice-answer"
            )
            .forEach(
              function (answer) {

                answer.onclick =
                  function () {

                    question
                      .querySelectorAll(
                        ".d54-practice-answer"
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
                        "Correct! " +
                        rationale;

                    }

                    else {

                      answer.classList.add(
                        "wrong"
                      );


                      const correctButton =
                        Array.from(
                          question.querySelectorAll(
                            ".d54-practice-answer"
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
                        "Not quite. " +
                        rationale;
                    }
                  };
              }
            );
        }
      );
  }


  // =========================================================
  // REMOVE OLD GENERIC SECTIONS
  // =========================================================

  function hideOldSections() {

    [
      "Bell Ringer",
      "Mini Lesson",
      "Science Notebook",
      "Guided Practice",
      "Lab / Investigation",
      "Lab Notebook",
      "STAAR Practice",
      "Written Exit Ticket",
      "Explain Your Thinking: CER",
      "McGraw Hill Connection"
    ]
    .forEach(
      function (name) {

        const card =
          findCard(name);


        if (card) {

          card.style.display =
            "none";
        }
      }
    );
  }


  // =========================================================
  // UTILITIES
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

    const candidates =
      Array.from(
        document.querySelectorAll(
          "section, article, div"
        )
      );


    const matches =
      candidates.filter(
        function (element) {

          const content =
            (
              element.innerText ||
              ""
            )
            .replace(
              /\s+/g,
              " "
            )
            .trim();


          return content.includes(
            text
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
