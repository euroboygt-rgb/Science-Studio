(function () {
  "use strict";


  if (
    !window.location.pathname.includes(
      "/second-nine-weeks/day/61"
    )
  ) {
    return;
  }


  function start() {

    setTimeout(
      buildDay61,
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


  function buildDay61() {

    const existing =
      document.getElementById(
        "scienceStudioDay61"
      );


    if (existing) {
      existing.remove();
    }


    const existingLower =
      document.getElementById(
        "scienceStudioDay61Lower"
      );


    if (existingLower) {
      existingLower.remove();
    }


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
        "Day 61: Vocabulary Anchor Chart not found."
      );

      return;
    }


    const top =
      document.createElement(
        "div"
      );


    top.id =
      "scienceStudioDay61";


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

      lower
        .querySelectorAll(
          ".d59-card"
        )
        .forEach(
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
        The Missing Bulb Mystery
      </h2>

      <div class="d59-unit">
        Day 61 • Breaking a Series Circuit
      </div>


      <div class="d59-image">

        <img
          src="/static/phenomenon/day61_broken_series_path.svg"
          alt="Series circuit with one bulb removed creating a gap"
        >

      </div>


      <div class="d59-focus">

        <strong>
          ❓ Focus Question:
        </strong>

        Why does the remaining bulb
        go out when one bulb is removed?

      </div>


      <div class="d59-grid2">

        <div class="d59-box">

          <strong>
            👀 Notice
          </strong>

          One bulb was removed from
          a circuit that had one path.

        </div>


        <div class="d59-box">

          <strong>
            🤔 Wonder
          </strong>

          Why can't the remaining bulb
          continue to work?

        </div>


        <div class="d59-box">

          <strong>
            🔍 Quick Explore
          </strong>

          Trace the wire until you reach
          the missing section.

        </div>


        <div class="d59-box">

          <strong>
            📊 Evidence Tracker
          </strong>

          Identify where the conducting
          path is broken.

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
            Mission Brief: Break the Path
          </h2>

          <div class="d59-unit">
            Day 61 • Series Circuit Failure
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
          "Build a working two-bulb series circuit, then remove one bulb.",
        caption:
          "Use observations as evidence."
      },

      {
        icon: "🔋",
        title: "Start With a Complete Circuit",
        main:
          "Electrical energy needs a continuous path from one battery terminal back to the other.",
        caption:
          "Both battery terminals must be part of the path."
      },

      {
        icon: "💡💡",
        title: "Two Loads, One Path",
        main:
          "In a series circuit, both bulbs are part of the same conducting path.",
        caption:
          "There is no alternate route."
      },

      {
        icon: "❌💡",
        title: "Remove One Bulb",
        main:
          "Taking one bulb out creates a gap in the only conducting path.",
        caption:
          "The path is now incomplete."
      },

      {
        icon: "🚫⚡",
        title: "Energy Flow Stops",
        main:
          "Electrical energy cannot travel through the complete system when the path contains a gap.",
        caption:
          "The remaining bulb also goes out."
      },

      {
        icon: "🔍",
        title: "Use Evidence",
        main:
          "Compare the circuit before and after the bulb is removed.",
        caption:
          "The important evidence is the broken conducting path."
      },

      {
        icon: "⭐",
        title: "STAAR Strategy",
        main:
          "If removing one load causes every load to stop working, look for evidence that the loads share one conducting path.",
        caption:
          "Trace the path before choosing your answer."
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
            Steve the Penguin's Missing Bulb Mission
          </h2>

          <div class="d59-unit">
            Day 61 • Series Circuit Evidence
          </div>


          <div class="d59-scenario">

            <strong>
              Steve's Scenario:
            </strong>

            <br><br>

            Steve builds a circuit with one battery
            and two bulbs connected in one path.

            Both bulbs light.

            Steve removes one bulb.

            The second bulb goes out.

          </div>


          <div class="d59-question">

            <strong>
              STAAR-Style Question:
            </strong>

            <p>
              Which explanation is best supported
              by Steve's evidence?
            </p>


            <button
              class="d59-answer"
              data-answer="A"
            >
              A. Removing the bulb broke the only conducting path.
            </button>

            <button
              class="d59-answer"
              data-answer="B"
            >
              B. The remaining bulb became an insulator.
            </button>

            <button
              class="d59-answer"
              data-answer="C"
            >
              C. The battery stopped having terminals.
            </button>

            <button
              class="d59-answer"
              data-answer="D"
            >
              D. The wire changed into a load.
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
      "scienceStudioDay61Lower";


    lower.innerHTML = `

      <section class="d59-card">

        <h2>
          🔔 Bell Ringer
        </h2>


        <div class="d59-box">

          <p>
            Yesterday you built multiple bulbs
            in one continuous conducting path.
          </p>

          <ol>

            <li>
              Predict what happens if one bulb
              is completely removed.
            </li>

            <li>
              What happens to the conducting path?
            </li>

            <li>
              What evidence would prove your prediction?
            </li>

          </ol>

        </div>

      </section>


      <section class="d59-card">

        <h2>
          👨‍🏫 Mini Lesson — One Path Means One Chance
        </h2>


        <div class="d59-series-path">

          <div>
            🔋
            <strong>Battery +</strong>
          </div>

          <span>→</span>

          <div>
            💡
            <strong>Bulb 1</strong>
          </div>

          <span>→</span>

          <div>
            💡
            <strong>Bulb 2</strong>
          </div>

          <span>→</span>

          <div>
            🔋
            <strong>Battery −</strong>
          </div>

        </div>


        <div class="d59-warning">

          <strong>
            Remove one bulb:
          </strong>

          <br><br>

          🔋 → 💡 → ❌ GAP → 🔋

          <br><br>

          The conducting path is no longer complete.

        </div>


        <div class="d59-grid2">

          <div class="d59-box">

            <strong>
              ✅ Complete Circuit
            </strong>

            The conducting path is continuous.

          </div>


          <div class="d59-box">

            <strong>
              ❌ Incomplete Circuit
            </strong>

            A gap prevents a continuous conducting path.

          </div>


          <div class="d59-box">

            <strong>
              🔗 Series Circuit
            </strong>

            All loads depend on the same path.

          </div>


          <div class="d59-box">

            <strong>
              ⭐ Key Evidence
            </strong>

            One break affects every load
            on the single path.

          </div>

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
                <th>Observation</th>
                <th>Before Removing Bulb</th>
                <th>After Removing Bulb</th>
              </tr>

            </thead>


            <tbody>

              <tr>
                <td>Circuit complete?</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>Number of powered bulbs</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>Gap in conducting path?</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>Evidence</td>
                <td></td>
                <td></td>
              </tr>

            </tbody>

          </table>

        </div>


        <div class="d59-box">

          <strong>
            Draw It:
          </strong>

          Draw the working circuit.

          Then draw the circuit after one bulb
          has been removed.

          Circle the gap.

        </div>

      </section>


      <section class="d59-card">

        <h2>
          🤝 Guided Practice — Trace the Break
        </h2>

        <div class="d59-box">

          <ol>

            <li>
              Start at the positive battery terminal.
            </li>

            <li>
              Trace the wire through Bulb 1.
            </li>

            <li>
              Continue through Bulb 2.
            </li>

            <li>
              Return to the negative battery terminal.
            </li>

            <li>
              Remove one bulb.
            </li>

            <li>
              Trace the path again and locate the gap.
            </li>

          </ol>

        </div>

      </section>


      <section class="d59-card d59-cream">

        <div class="d59-badge">
          ⚡ Interactive Lab
        </div>

        <h2>
          Circuit Builder Mission: Remove One Bulb
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
            〰️〰️〰️
            <strong>3 Wires</strong>
          </div>

        </div>


        <div class="d59-build">

          <strong>
            Step 1 — Build It
          </strong>

          <div class="d59-build-path">

            🔋 Battery +

            <span>→</span>

            💡 Bulb 1

            <span>→</span>

            💡 Bulb 2

            <span>→</span>

            🔋 Battery −

          </div>

        </div>


        <div class="d59-mission-steps">

          <strong>
            🧪 Investigation Steps
          </strong>

          <div>
            1. Build the complete two-bulb series circuit.
          </div>

          <div>
            2. Press <b>Test Circuit</b>.
          </div>

          <div>
            3. Confirm both bulbs are powered.
          </div>

          <div>
            4. Select either bulb.
          </div>

          <div>
            5. Click <b>Delete Selected</b>.
          </div>

          <div>
            6. Press <b>Test Circuit</b> again.
          </div>

          <div>
            7. Observe the remaining bulb.
          </div>

          <div>
            8. Identify where the conducting path is broken.
          </div>

        </div>


        <div class="d59-success">

          <strong>
            🏁 Mission Evidence:
          </strong>

          Removing one bulb creates a gap
          in the only conducting path.

          The remaining bulb should no longer
          be powered.

        </div>


        <a
          href="/labs/circuit-builder?mission=day61"
          class="d59-lab-button"
        >
          ⚡ Start Remove-One-Bulb Mission
        </a>

      </section>


      <section class="d59-card">

        <div class="d59-badge">
          ⭐ STAAR Practice
        </div>

        <h2>
          Series Circuit Evidence Questions
        </h2>


        ${question(
          1,
          "Two bulbs are connected in a series circuit. A student removes one bulb. What will most likely happen to the other bulb?",
          [
            "A. It will become brighter.",
            "B. It will remain lit because it still touches a wire.",
            "C. It will go out because the only conducting path is broken.",
            "D. It will become a new power source."
          ],
          "C",
          "Removing one bulb creates a gap in the only conducting path."
        )}


        ${question(
          2,
          "Which evidence best explains why both bulbs stop working when one bulb is removed from a series circuit?",
          [
            "A. Both bulbs are the same size.",
            "B. There is only one conducting path through both bulbs.",
            "C. The battery is closest to the first bulb.",
            "D. The wires are different lengths."
          ],
          "B",
          "Both loads depend on the same single conducting path."
        )}


        ${question(
          3,
          "A student removes one load from a circuit and the other load stops working. Which conclusion is best supported?",
          [
            "A. The loads were likely connected along one continuous path.",
            "B. The circuit must have had several independent paths.",
            "C. The remaining load became a conductor.",
            "D. The battery changed into a load."
          ],
          "A",
          "If one removed load breaks the route for all loads, the evidence supports a series circuit."
        )}

      </section>


      <section class="d59-card">

        <h2>
          🎟 Written Exit Ticket
        </h2>

        <p>
          A two-bulb series circuit works
          until one bulb is removed.

          Explain why the second bulb
          also goes out.

          Use the words
          <strong>conducting path</strong>
          and
          <strong>gap</strong>.
        </p>

        <textarea
          class="d59-textarea"
          placeholder="The second bulb goes out because..."
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

          Why does removing one bulb affect
          every load in a series circuit?

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
              placeholder="My Circuit Builder evidence is..."
            ></textarea>

          </div>


          <div>

            <h3>Reasoning</h3>

            <textarea
              class="d59-textarea"
              placeholder="The evidence supports my claim because..."
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
            circuit diagrams and reading materials
            to reinforce how complete and incomplete
            circuits behave.
          </p>


          <strong>
            Students should focus on:
          </strong>

          <ul>

            <li>series circuits,</li>

            <li>one continuous conducting path,</li>

            <li>open and incomplete circuits,</li>

            <li>gaps in a circuit,</li>

            <li>how removing one load affects the system.</li>

          </ul>

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
            "Correct! Removing one bulb broke the only conducting path.";

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
            "Try again. Trace the one conducting path and find where it was broken.";
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
            "#scienceStudioDay61"
          )
          ||
          heading.closest(
            "#scienceStudioDay61Lower"
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


          const border =
            parseFloat(
              style.borderTopWidth || "0"
            );


          const radius =
            parseFloat(
              style.borderTopLeftRadius || "0"
            );


          if (
            rect.width > 500
            &&
            rect.height > 70
            &&
            (
              border >= 1
              ||
              radius >= 5
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


    const headings =
      Array.from(
        document.querySelectorAll(
          "h1,h2,h3,h4"
        )
      );


    const heading =
      headings.find(
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
