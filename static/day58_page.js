(function () {
  "use strict";


  if (
    !window.location.pathname.includes(
      "/second-nine-weeks/day/58"
    )
  ) {
    return;
  }


  function start() {
    setTimeout(buildDay58, 850);
  }


  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      start
    );

  } else {

    start();
  }


  function buildDay58() {

    const old =
      document.getElementById(
        "scienceStudioDay58"
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
        "Day 58: vocabulary card not found."
      );

      return;
    }


    const top =
      document.createElement(
        "div"
      );


    top.id =
      "scienceStudioDay58";


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
        "d58-card d58-cream"
      );


    card.innerHTML = `

      <div class="d58-badge">
        🔎 Phenomenon Mission
      </div>

      <h2>
        Circuit Detective: Why Won't It Work?
      </h2>

      <div class="d58-unit">
        Day 58 • Troubleshooting Circuits
      </div>


      <div class="d58-image">

        <img
          src="/static/phenomenon/day58_circuit_detective.svg"
          alt="Circuit detective diagram showing an open switch and a gap in a circuit"
        >

      </div>


      <div class="d58-focus">

        <strong>
          ❓ Focus Question:
        </strong>

        What evidence would help you locate
        and repair a fault in a circuit?

      </div>


      <div class="d58-grid2">

        <div class="d58-box">

          <strong>
            👀 Notice
          </strong>

          The system contains a battery,
          wires, a switch, and a bulb.

        </div>


        <div class="d58-box">

          <strong>
            🤔 Wonder
          </strong>

          If all the parts are present,
          why is the bulb still off?

        </div>


        <div class="d58-box">

          <strong>
            🔍 Quick Explore
          </strong>

          Trace the circuit from one battery
          terminal all the way around.

        </div>


        <div class="d58-box">

          <strong>
            📊 Evidence Tracker
          </strong>

          Record every break or incorrect
          connection you discover.

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
        "d58-card d58-cream"
      );


    card.innerHTML = `

      <div class="d58-header">

        <div>

          <div class="d58-badge">
            🎬 Mission Brief Animation
          </div>

          <h2>
            Mission Brief: Circuit Detective
          </h2>

          <div class="d58-unit">
            Day 58 • Diagnose → Repair → Test
          </div>

        </div>


        <button
          class="d58-play"
          type="button"
        >
          ▶ Play Mission Brief
        </button>

      </div>


      <div class="d58-slide">

        <div class="d58-slide-icon"></div>

        <h2 class="d58-slide-title"></h2>

        <div class="d58-slide-main"></div>

        <div class="d58-slide-caption"></div>

      </div>


      <div class="d58-footer">

        <strong class="d58-number"></strong>

        <div>

          <button
            class="d58-control d58-back"
            type="button"
          >
            ◀ Back
          </button>

          <button
            class="d58-control d58-next"
            type="button"
          >
            Next ▶
          </button>

          <button
            class="d58-control d58-restart"
            type="button"
          >
            Restart
          </button>

        </div>

      </div>

    `;


    const slides = [

      {
        icon: "🕵️",
        title: "Today's Mission",

        main:
          "Become a Circuit Detective. Diagnose faults, repair them, and use evidence to prove the circuit works.",

        caption:
          "Do not guess — trace the path."
      },


      {
        icon: "🔋",
        title: "Start at the Power Source",

        main:
          "Begin at one battery terminal and trace every connection.",

        caption:
          "A working path must eventually return to the other battery terminal."
      },


      {
        icon: "🔘",
        title: "Fault 1: Open Switch",

        main:
          "An open switch creates a break in the conducting path.",

        caption:
          "Repair: close the switch."
      },


      {
        icon: "〰️",
        title: "Fault 2: Loose or Disconnected Wire",

        main:
          "A loose wire can interrupt the conducting path.",

        caption:
          "Repair: reconnect the wire securely to the terminal."
      },


      {
        icon: "🔋",
        title: "Fault 3: Broken Return Path",

        main:
          "The path must connect through both battery terminals.",

        caption:
          "Repair the connection so the path returns to the opposite terminal."
      },


      {
        icon: "💡",
        title: "Use the Load as Evidence",

        main:
          "When the bulb lights after a repair, you have evidence that the conducting path is functioning.",

        caption:
          "Observe before and after each repair."
      },


      {
        icon: "🧪",
        title: "Change One Thing at a Time",

        main:
          "Make one repair, then test the circuit again.",

        caption:
          "This helps you know which change fixed the problem."
      },


      {
        icon: "⭐",
        title: "STAAR Strategy",

        main:
          "Trace the entire conducting path instead of choosing an answer because the diagram looks complete.",

        caption:
          "Look closely at switches, wire ends, loads, and both battery terminals."
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
        "d58-card d58-blue"
      );


    card.innerHTML = `

      <div class="d58-steve-grid">

        <div class="d58-penguin">
          🐧
        </div>


        <div>

          <div class="d58-badge d58-blue-badge">
            🐧 Steve the Penguin's STAAR Mission
          </div>

          <h2>
            Steve the Penguin's Circuit Repair Mission
          </h2>

          <div class="d58-unit">
            Day 58 • Troubleshooting Evidence
          </div>


          <div class="d58-scenario">

            <strong>
              Steve's Scenario:
            </strong>

            <br><br>

            Steve builds a circuit with a battery,
            wires, a closed switch, and a bulb.

            The bulb does not light.

            Steve traces the path and finds that
            one wire is not touching the bulb terminal.

            He reconnects the wire and the bulb lights.

          </div>


          <div class="d58-question">

            <strong>
              STAAR-Style Question:
            </strong>

            <p>
              Which conclusion is best supported
              by Steve's evidence?
            </p>


            <button
              class="d58-answer"
              data-answer="A"
            >
              A. The loose wire had created a break in the conducting path.
            </button>


            <button
              class="d58-answer"
              data-answer="B"
            >
              B. The battery began storing energy only after the repair.
            </button>


            <button
              class="d58-answer"
              data-answer="C"
            >
              C. The bulb did not need both battery terminals.
            </button>


            <button
              class="d58-answer"
              data-answer="D"
            >
              D. The switch caused the wire to become an insulator.
            </button>


            <div class="d58-answer-row">

              <button
                class="d58-check"
                type="button"
              >
                Check Answer
              </button>

              <button
                class="d58-reset"
                type="button"
              >
                Reset
              </button>

            </div>


            <div class="d58-feedback"></div>

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
      "scienceStudioDay58Lower";


    lower.innerHTML = `

      <section class="d58-card">

        <h2>
          🔔 Bell Ringer
        </h2>

        <div class="d58-box">

          <p>
            A circuit has a battery, wires,
            switch, and bulb — but the bulb is off.
          </p>

          <ol>

            <li>
              Does having all the correct parts
              guarantee the circuit will work?
            </li>

            <li>
              What should you inspect first?
            </li>

            <li>
              Why is tracing the path better than guessing?
            </li>

          </ol>

        </div>

      </section>


      <section class="d58-card">

        <h2>
          👨‍🏫 Mini Lesson — Troubleshooting
        </h2>


        <div class="d58-fault-grid">

          <div class="d58-fault">

            <span>
              🔘
            </span>

            <strong>
              OPEN SWITCH
            </strong>

            <p>
              Fault: gap in path
            </p>

            <b>
              Repair: close switch
            </b>

          </div>


          <div class="d58-fault">

            <span>
              〰️
            </span>

            <strong>
              LOOSE WIRE
            </strong>

            <p>
              Fault: disconnected terminal
            </p>

            <b>
              Repair: reconnect wire
            </b>

          </div>


          <div class="d58-fault">

            <span>
              🔋
            </span>

            <strong>
              WRONG RETURN PATH
            </strong>

            <p>
              Fault: path does not return
              to opposite battery terminal
            </p>

            <b>
              Repair: trace and reconnect
            </b>

          </div>

        </div>


        <div class="d58-trace">

          <strong>
            CIRCUIT DETECTIVE ROUTINE
          </strong>

          <span>1. Start at a battery terminal.</span>

          <span>2. Trace every connection.</span>

          <span>3. Find the fault.</span>

          <span>4. Repair ONE thing.</span>

          <span>5. Test again.</span>

          <span>6. Record evidence.</span>

        </div>


        <div class="d58-warning">

          <strong>
            ⭐ STAAR Thinking:
          </strong>

          A diagram can contain all the correct parts
          and still be an incomplete circuit.
          Always inspect the connections.

        </div>

      </section>


      <section class="d58-card">

        <h2>
          📓 Science Notebook
        </h2>

        <p>
          Complete your Circuit Detective Evidence Table.
        </p>


        <div class="d58-table-wrap">

          <table class="d58-table">

            <thead>

              <tr>
                <th>Fault</th>
                <th>Evidence</th>
                <th>Repair</th>
                <th>Result</th>
              </tr>

            </thead>


            <tbody>

              <tr>
                <td>Open switch</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>Disconnected wire</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>Broken return path</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>


      <section class="d58-card">

        <h2>
          🤝 Guided Practice — Trace the Fault
        </h2>

        <div class="d58-box">

          <ol>

            <li>
              Start at one battery terminal.
            </li>

            <li>
              Trace every wire and component.
            </li>

            <li>
              Inspect the switch.
            </li>

            <li>
              Inspect both terminals on the load.
            </li>

            <li>
              Make sure the path returns to the
              other battery terminal.
            </li>

            <li>
              Repair one problem and test again.
            </li>

          </ol>

        </div>

      </section>


      <section class="d58-card d58-cream">

        <div class="d58-badge">
          ⚡ Interactive Lab
        </div>

        <h2>
          Circuit Builder Mission: Circuit Detective
        </h2>

        <p>
          First build a working circuit.
          Then create, diagnose, and repair three faults.
        </p>


        <div class="d58-required">

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


        <div class="d58-repair-list">

          <div>

            <span>
              🔘
            </span>

            <strong>
              REPAIR #1
            </strong>

            Open the switch.
            Diagnose why the bulb turns off.
            Repair it.

          </div>


          <div>

            <span>
              〰️
            </span>

            <strong>
              REPAIR #2
            </strong>

            Disconnect a wire.
            Diagnose the gap.
            Repair it.

          </div>


          <div>

            <span>
              🔋
            </span>

            <strong>
              REPAIR #3
            </strong>

            Create an incorrect return path.
            Trace both battery terminals.
            Repair it.

          </div>

        </div>


        <div class="d58-success">

          🏁 <strong>MISSION COMPLETE:</strong>

          You can locate a circuit fault,
          repair it, and explain the evidence
          that proves your repair worked.

        </div>


        <a
          href="/labs/circuit-builder?mission=day58"
          class="d58-lab-button"
        >
          🕵️ Start Circuit Detective Mission
        </a>

      </section>


      <section class="d58-card">

        <div class="d58-badge">
          ⭐ STAAR Practice
        </div>

        <h2>
          Circuit Troubleshooting Evidence
        </h2>


        ${question(
          1,
          "A student builds a circuit with a battery, wires, a closed switch, and a bulb. The bulb does not light. Which action is the best first step for finding the problem?",
          [
            "A. Trace the entire conducting path and inspect every connection.",
            "B. Add another battery before checking the connections.",
            "C. Replace every circuit part at the same time.",
            "D. Move the circuit to another table."
          ],
          "A",
          "Tracing the conducting path helps locate a gap, loose connection, or incorrect terminal connection."
        )}


        ${question(
          2,
          "A circuit contains a battery, wires, bulb, and switch. The bulb is off. The student observes that the switch is open. Which repair should make the circuit complete?",
          [
            "A. Close the switch.",
            "B. Remove the battery.",
            "C. Disconnect another wire.",
            "D. Remove the bulb."
          ],
          "A",
          "Closing the switch removes the break in the conducting path."
        )}


        ${question(
          3,
          "A student repairs a loose wire and the bulb begins to light. Which statement is best supported by this evidence?",
          [
            "A. The loose wire had created a break in the conducting path.",
            "B. The battery produced energy only after the wire was repaired.",
            "C. The bulb changed from an insulator into a conductor.",
            "D. The circuit no longer needs both battery terminals."
          ],
          "A",
          "The bulb changing from off to on after the repair is evidence that the loose wire had broken the path."
        )}

      </section>


      <section class="d58-card">

        <h2>
          🎟 Written Exit Ticket
        </h2>

        <p>
          A circuit has all the correct parts,
          but the bulb does not light.

          Describe the steps you would use
          to diagnose the problem.
        </p>

        <textarea
          class="d58-textarea"
          placeholder="First I would..."
        ></textarea>

      </section>


      <section class="d58-card">

        <h2>
          🧠 Explain Your Thinking: CER
        </h2>


        <div class="d58-focus">

          <strong>
            CER Question:
          </strong>

          How can repairing one faulty connection
          make an electrical circuit function again?

        </div>


        <div class="d58-grid3">

          <div>

            <h3>Claim</h3>

            <textarea
              class="d58-textarea"
              placeholder="My claim is..."
            ></textarea>

          </div>


          <div>

            <h3>Evidence</h3>

            <textarea
              class="d58-textarea"
              placeholder="Before the repair... After the repair..."
            ></textarea>

          </div>


          <div>

            <h3>Reasoning</h3>

            <textarea
              class="d58-textarea"
              placeholder="The repair restored the conducting path because..."
            ></textarea>

          </div>

        </div>

      </section>


      <section class="d58-card d58-cream">

        <div class="d58-badge d58-blue-badge">
          📘 McGraw Hill Lesson Connection
        </div>

        <h2>
          Electricity and Light
        </h2>


        <div class="d58-box">

          <h3>
            Chapter 4 — Electrical Circuits
          </h3>

          <p>
            Use the district-approved McGraw Hill
            circuit models to practice identifying
            complete and incomplete conducting paths.
          </p>


          <strong>
            Today's connection:
          </strong>

          <ul>
            <li>complete and incomplete circuits,</li>
            <li>open and closed switches,</li>
            <li>wire connections,</li>
            <li>battery terminals,</li>
            <li>troubleshooting using evidence.</li>
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
      card.querySelector(".d58-slide-icon");

    const title =
      card.querySelector(".d58-slide-title");

    const main =
      card.querySelector(".d58-slide-main");

    const caption =
      card.querySelector(".d58-slide-caption");

    const number =
      card.querySelector(".d58-number");

    const play =
      card.querySelector(".d58-play");


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


    card.querySelector(".d58-back").onclick =
      function () {

        stop();

        index =
          Math.max(
            0,
            index - 1
          );

        draw();
      };


    card.querySelector(".d58-next").onclick =
      function () {

        stop();

        index =
          Math.min(
            slides.length - 1,
            index + 1
          );

        draw();
      };


    card.querySelector(".d58-restart").onclick =
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
          ".d58-answer"
        )
      );


    const feedback =
      card.querySelector(
        ".d58-feedback"
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


    card.querySelector(".d58-check").onclick =
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
            "Correct! Reconnecting the wire restored the complete conducting path.";

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
            "Try again. Compare what changed immediately before the bulb began to light.";
        }
      };


    card.querySelector(".d58-reset").onclick =
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
        class="d58-practice"
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
                class="d58-practice-answer"
                type="button"
                data-letter="${choice.charAt(0)}"
              >
                ${choice}
              </button>

            `;

          }
        ).join("")}


        <div class="d58-practice-feedback"></div>

      </div>

    `;
  }


  function activateQuestions(
    container
  ) {

    container
      .querySelectorAll(
        ".d58-practice"
      )
      .forEach(
        function (question) {

          const correct =
            question.dataset.correct;


          const rationale =
            question.dataset.rationale;


          const feedback =
            question.querySelector(
              ".d58-practice-feedback"
            );


          question
            .querySelectorAll(
              ".d58-practice-answer"
            )
            .forEach(
              function (answer) {

                answer.onclick =
                  function () {

                    question
                      .querySelectorAll(
                        ".d58-practice-answer"
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
                            ".d58-practice-answer"
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
