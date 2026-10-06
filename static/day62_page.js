(function () {
  "use strict";


  if (
    !window.location.pathname.includes(
      "/second-nine-weeks/day/62"
    )
  ) {
    return;
  }


  function start() {
    setTimeout(
      buildDay62,
      800
    );
  }


  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      start
    );

  } else {

    start();
  }


  function buildDay62() {

    document.getElementById(
      "scienceStudioDay62"
    )?.remove();


    document.getElementById(
      "scienceStudioDay62Lower"
    )?.remove();


    hideGenericSections();


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
        "Day 62: Vocabulary Anchor Chart not found."
      );

      return;
    }


    const top =
      document.createElement(
        "div"
      );


    top.id =
      "scienceStudioDay62";


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


    const view =
      new URLSearchParams(
        window.location.search
      ).get("view") || "student";


    if (view !== "teacher") {

      lower.querySelectorAll(
        ".d59-card"
      ).forEach(
        function (card) {

          const heading =
            card.querySelector(
              "h1,h2,h3"
            );


          if (
            heading
            &&
            (
              heading.textContent || ""
            ).includes(
              "Guided Practice"
            )
          ) {

            card.remove();
          }
        }
      );
    }


    if (
      learningTarget
      &&
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


    hideGenericSections();

    setTimeout(
      hideGenericSections,
      500
    );

    setTimeout(
      hideGenericSections,
      1400
    );
  }


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
        Two Paths: Can One Keep Working?
      </h2>

      <div class="d59-unit">
        Day 62 • Introduction to Parallel Circuits
      </div>


      <div class="d59-image">

        <img
          src="/static/phenomenon/day62_parallel_circuit.svg"
          alt="Parallel circuit with two bulbs connected on separate branches"
        >

      </div>


      <div class="d59-focus">

        <strong>
          ❓ Focus Question:
        </strong>

        If one branch is broken,
        can another branch still form
        a complete conducting path?

      </div>


      <div class="d59-grid2">

        <div class="d59-box">

          <strong>
            👀 Notice
          </strong>

          Both bulbs connect to the same battery,
          but they are not on the same route.

        </div>


        <div class="d59-box">

          <strong>
            🤔 Wonder
          </strong>

          What would happen if Bulb 1
          were removed?

        </div>


        <div class="d59-box">

          <strong>
            🔍 Quick Explore
          </strong>

          Trace one route through Bulb 1.

          Then trace a different route
          through Bulb 2.

        </div>


        <div class="d59-box">

          <strong>
            📊 Evidence Tracker
          </strong>

          Count how many complete paths
          lead from one battery terminal
          back to the other.

        </div>

      </div>

    `;


    return card;
  }


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
            Mission Brief: More Than One Path
          </h2>

          <div class="d59-unit">
            Day 62 • Parallel Circuits
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
          "Build a circuit with two separate conducting paths.",
        caption:
          "Today we compare series and parallel circuits."
      },

      {
        icon: "1️⃣",
        title: "Series Circuit",
        main:
          "A series circuit has one continuous conducting path.",
        caption:
          "One break can stop the entire circuit."
      },

      {
        icon: "2️⃣",
        title: "Parallel Circuit",
        main:
          "A parallel circuit has more than one conducting path.",
        caption:
          "Each path is called a branch."
      },

      {
        icon: "🔀",
        title: "Branches",
        main:
          "Each branch provides another route through the electrical system.",
        caption:
          "Both branches connect to the same power source."
      },

      {
        icon: "❌💡",
        title: "Break One Branch",
        main:
          "Removing one bulb creates a gap in that branch.",
        caption:
          "But another branch may still be complete."
      },

      {
        icon: "💡",
        title: "One Bulb Can Stay On",
        main:
          "If Branch 2 is still complete, electrical energy can continue through that path.",
        caption:
          "This is different from the one-path series circuit."
      },

      {
        icon: "⭐",
        title: "STAAR Strategy",
        main:
          "Trace every possible route from one battery terminal back to the other.",
        caption:
          "More than one complete route is evidence of a parallel circuit."
      }

    ];


    activateSlides(
      card,
      slides
    );


    return card;
  }


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
            Steve the Penguin's Two-Path Mission
          </h2>

          <div class="d59-unit">
            Day 62 • Parallel Circuit Evidence
          </div>


          <div class="d59-scenario">

            <strong>
              Steve's Scenario:
            </strong>

            <br><br>

            Steve connects two bulbs to one battery.

            Each bulb is on a different branch.

            Both bulbs light.

            Steve removes Bulb 1.

            Bulb 2 stays lit.

          </div>


          <div class="d59-question">

            <strong>
              STAAR-Style Question:
            </strong>

            <p>
              Which evidence best explains
              why Bulb 2 remains lit?
            </p>


            <button
              class="d59-answer"
              data-answer="A"
            >
              A. Bulb 2 still has its own complete conducting path.
            </button>

            <button
              class="d59-answer"
              data-answer="B"
            >
              B. Bulb 2 changes into a battery.
            </button>

            <button
              class="d59-answer"
              data-answer="C"
            >
              C. Removing Bulb 1 creates extra electrical energy.
            </button>

            <button
              class="d59-answer"
              data-answer="D"
            >
              D. Bulb 2 no longer needs wires.
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


  function lowerLesson() {

    const lower =
      document.createElement(
        "div"
      );


    lower.id =
      "scienceStudioDay62Lower";


    lower.innerHTML = `

      <section class="d59-card">

        <h2>
          🔔 Bell Ringer
        </h2>


        <div class="d59-box">

          <p>
            Yesterday one removed bulb
            caused the entire series circuit
            to stop working.
          </p>

          <ol>

            <li>
              Why did the second bulb go out?
            </li>

            <li>
              How could we give Bulb 2
              another route to the battery?
            </li>

            <li>
              Predict what might happen
              if each bulb had its own branch.
            </li>

          </ol>

        </div>

      </section>


      <section class="d59-card">

        <h2>
          👨‍🏫 Mini Lesson — Series vs. Parallel
        </h2>


        <div class="d59-grid2">

          <div class="d59-box">

            <h3>
              🔗 Series Circuit
            </h3>

            <p>
              ONE conducting path
            </p>

            <p>
              🔋 → 💡 → 💡 → 🔋
            </p>

            <strong>
              Break one place =
              entire path is broken.
            </strong>

          </div>


          <div class="d59-box">

            <h3>
              🔀 Parallel Circuit
            </h3>

            <p>
              MORE THAN ONE conducting path
            </p>

            <p>
              🔋 → Branch 1 → 💡
            </p>

            <p>
              🔋 → Branch 2 → 💡
            </p>

            <strong>
              One branch can remain complete
              if another branch is broken.
            </strong>

          </div>

        </div>


        <div class="d59-warning">

          <strong>
            ⭐ STAAR Thinking:
          </strong>

          Do not decide whether a circuit is
          series or parallel by counting bulbs.

          <br><br>

          <strong>
            TRACE THE PATHS.
          </strong>

        </div>

      </section>


      <section class="d59-card">

        <h2>
          📓 Science Notebook
        </h2>


        <div class="d59-table-wrap">

          <table class="d59-table">

            <thead>

              <tr>
                <th>Evidence</th>
                <th>Series Circuit</th>
                <th>Parallel Circuit</th>
              </tr>

            </thead>


            <tbody>

              <tr>
                <td>Number of conducting paths</td>
                <td>1</td>
                <td></td>
              </tr>

              <tr>
                <td>Branches?</td>
                <td>No</td>
                <td></td>
              </tr>

              <tr>
                <td>Remove one bulb</td>
                <td>Other bulb goes out</td>
                <td></td>
              </tr>

              <tr>
                <td>Why?</td>
                <td>Only path is broken</td>
                <td></td>
              </tr>

            </tbody>

          </table>

        </div>


        <div class="d59-box">

          <strong>
            Draw and Label:
          </strong>

          Draw one series circuit and one parallel circuit.

          Label each conducting path.

        </div>

      </section>


      <section class="d59-card">

        <h2>
          🤝 Guided Practice — Count the Routes
        </h2>


        <div class="d59-box">

          <ol>

            <li>
              Find the battery.
            </li>

            <li>
              Start at the positive terminal.
            </li>

            <li>
              Trace the first complete route
              to the negative terminal.
            </li>

            <li>
              Return to the positive terminal.
            </li>

            <li>
              Look for a different route.
            </li>

            <li>
              Count the number of complete paths.
            </li>

          </ol>

        </div>

      </section>


      <section class="d59-card d59-cream">

        <div class="d59-badge">
          ⚡ Interactive Lab
        </div>

        <h2>
          Circuit Builder Final Mission:
          Build a Parallel Circuit
        </h2>


        <div class="d59-required">

          <div>
            🔋
            <strong>1 Battery</strong>
          </div>

          <div>
            💡💡
            <strong>2 Bulbs</strong>
          </div>

          <div>
            〰️〰️〰️〰️
            <strong>4 Wires</strong>
          </div>

        </div>


        <div class="d59-build">

          <strong>
            Branch 1
          </strong>

          <div class="d59-build-path">

            Battery +

            <span>→</span>

            💡 Bulb 1

            <span>→</span>

            Battery −

          </div>

        </div>


        <div class="d59-build">

          <strong>
            Branch 2
          </strong>

          <div class="d59-build-path">

            Battery +

            <span>→</span>

            💡 Bulb 2

            <span>→</span>

            Battery −

          </div>

        </div>


        <div class="d59-mission-steps">

          <strong>
            🧪 Final Circuit Challenge
          </strong>

          <div>
            1. Add one battery.
          </div>

          <div>
            2. Add two bulbs.
          </div>

          <div>
            3. Add four wires.
          </div>

          <div>
            4. Build Branch 1 through Bulb 1.
          </div>

          <div>
            5. Build Branch 2 through Bulb 2.
          </div>

          <div>
            6. Press <b>Test Circuit</b>.
          </div>

          <div>
            7. Confirm both bulbs are powered.
          </div>

          <div>
            8. Remove Bulb 1.
          </div>

          <div>
            9. Test again.
          </div>

          <div>
            10. Determine whether Bulb 2
            still has a complete path.
          </div>

        </div>


        <div class="d59-success">

          🏁
          <strong>
            FINAL CIRCUIT DISCOVERY:
          </strong>

          In a parallel circuit,
          breaking one branch does not have
          to break another complete branch.

        </div>


        <a
          href="/labs/circuit-builder?mission=day62"
          class="d59-lab-button"
        >
          ⚡ Start Parallel Circuit Mission
        </a>

      </section>


      <section class="d59-card">

        <div class="d59-badge">
          ⭐ STAAR Practice
        </div>

        <h2>
          Series vs. Parallel Evidence
        </h2>


        ${question(
          1,
          "Two bulbs are connected to one battery using two separate conducting paths. Which type of circuit is shown?",
          [
            "A. An incomplete circuit",
            "B. A series circuit",
            "C. A parallel circuit",
            "D. An open switch"
          ],
          "C",
          "A parallel circuit has more than one conducting path."
        )}


        ${question(
          2,
          "A student removes one bulb from a parallel circuit. The second bulb remains lit. Which statement best explains the observation?",
          [
            "A. The second bulb has its own complete branch through the circuit.",
            "B. The second bulb becomes a battery.",
            "C. The broken branch creates more electrical energy.",
            "D. The circuit changes into an insulator."
          ],
          "A",
          "The second bulb remains powered because its branch still forms a complete conducting path."
        )}


        ${question(
          3,
          "Which evidence best distinguishes a parallel circuit from a series circuit?",
          [
            "A. The circuit contains a battery.",
            "B. The circuit contains more than one conducting path.",
            "C. The circuit contains wires.",
            "D. The circuit contains more than one load."
          ],
          "B",
          "The defining evidence for a parallel circuit is more than one conducting path."
        )}

      </section>


      <section class="d59-card">

        <h2>
          🎟 Written Exit Ticket
        </h2>

        <p>
          Explain why removing one bulb
          from a parallel circuit can leave
          another bulb lit.

          Use the words
          <strong>branch</strong>,
          <strong>conducting path</strong>,
          and
          <strong>complete circuit</strong>.
        </p>


        <textarea
          class="d59-textarea"
          placeholder="The other bulb can remain lit because..."
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

          How does a parallel circuit keep
          one load working when another branch
          is broken?
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
              placeholder="Evidence from my parallel circuit is..."
            ></textarea>

          </div>


          <div>

            <h3>Reasoning</h3>

            <textarea
              class="d59-textarea"
              placeholder="This evidence supports my claim because..."
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
            circuit diagrams and investigations
            to compare series and parallel arrangements.
          </p>


          <strong>
            Students should focus on:
          </strong>


          <ul>

            <li>one path versus multiple paths,</li>

            <li>branches,</li>

            <li>complete conducting paths,</li>

            <li>series circuits,</li>

            <li>parallel circuits,</li>

            <li>what happens when one load is removed.</li>

          </ul>


          <p>
            The Science Studio Circuit Builder
            provides the hands-on comparison.
          </p>

        </div>

      </section>

    `;


    activateQuestions(
      lower
    );


    return lower;
  }


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
              function (button) {

                button.classList.remove(
                  "selected"
                );
              }
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
          function (button) {

            button.classList.remove(
              "correct",
              "wrong"
            );
          }
        );


        const correct =
          answers.find(
            function (button) {

              return (
                button.dataset.answer ===
                "A"
              );
            }
          );


        correct.classList.add(
          "correct"
        );


        if (selected === "A") {

          feedback.style.color =
            "#087a35";


          feedback.textContent =
            "Correct! Bulb 2 remains connected through its own complete branch.";

        } else {

          const chosen =
            answers.find(
              function (button) {

                return (
                  button.dataset.answer ===
                  selected
                );
              }
            );


          if (chosen) {

            chosen.classList.add(
              "wrong"
            );
          }


          feedback.style.color =
            "#b00020";


          feedback.textContent =
            "Try again. Trace the second branch from one battery terminal back to the other.";
        }
      };


    card.querySelector(
      ".d59-reset"
    ).onclick =
      function () {

        selected = null;

        feedback.textContent = "";


        answers.forEach(
          function (button) {

            button.classList.remove(
              "selected",
              "correct",
              "wrong"
            );
          }
        );
      };
  }


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
                        function (button) {

                          button.classList.remove(
                            "correct",
                            "wrong"
                          );
                        }
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
                          function (button) {

                            return (
                              button.dataset.letter ===
                              correct
                            );
                          }
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


  function hideGenericSections() {

    const titles = [

      "Bell Ringer",
      "Mini Lesson",
      "Science Notebook",
      "Guided Practice",
      "Lab / Investigation",
      "Lab Notebook",
      "Written Exit Ticket",
      "Explain Your Thinking: CER",
      "McGraw Hill Connection"

    ];


    const headings =
      Array.from(
        document.querySelectorAll(
          "h1,h2,h3,h4"
        )
      );


    headings.forEach(
      function (heading) {

        if (
          heading.closest(
            "#scienceStudioDay62"
          )
          ||
          heading.closest(
            "#scienceStudioDay62Lower"
          )
        ) {
          return;
        }


        const text =
          (
            heading.textContent || ""
          )
          .replace(
            /\s+/g,
            " "
          )
          .trim();


        const match =
          titles.some(
            function (title) {

              return (
                text === title
                ||
                text.endsWith(
                  title
                )
              );
            }
          );


        if (!match) {
          return;
        }


        let node =
          heading;


        while (
          node.parentElement
          &&
          node.parentElement !==
          document.body
        ) {

          node =
            node.parentElement;


          const rect =
            node.getBoundingClientRect();


          const style =
            window.getComputedStyle(
              node
            );


          if (
            rect.width > 500
            &&
            rect.height > 70
            &&
            (
              parseFloat(
                style.borderTopWidth || "0"
              )
              >= 1
              ||
              parseFloat(
                style.borderTopLeftRadius || "0"
              )
              >= 5
            )
          ) {

            node.style.display =
              "none";

            break;
          }
        }
      }
    );
  }


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

    const target =
      text.toLowerCase();


    const heading =
      Array.from(
        document.querySelectorAll(
          "h1,h2,h3,h4"
        )
      )
      .find(
        function (item) {

          return (
            (
              item.textContent || ""
            )
            .toLowerCase()
            .includes(
              target
            )
          );
        }
      );


    if (!heading) {
      return null;
    }


    let node =
      heading;


    while (
      node.parentElement
      &&
      node.parentElement !==
      document.body
    ) {

      node =
        node.parentElement;


      const rect =
        node.getBoundingClientRect();


      const style =
        window.getComputedStyle(
          node
        );


      if (
        rect.width > 500
        &&
        rect.height > 70
        &&
        (
          parseFloat(
            style.borderTopWidth || "0"
          )
          >= 1
          ||
          parseFloat(
            style.borderTopLeftRadius || "0"
          )
          >= 5
        )
      ) {

        return node;
      }
    }


    return heading.parentElement;
  }


  function escapeAttribute(
    value
  ) {

    return String(
      value
    )
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  }

})();
