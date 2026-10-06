(function () {
  "use strict";


  if (
    !window.location.pathname.includes(
      "/second-nine-weeks/day/57"
    )
  ) {
    return;
  }


  function start() {
    setTimeout(buildDay57, 850);
  }


  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      start
    );

  } else {

    start();
  }


  function buildDay57() {

    const old =
      document.getElementById(
        "scienceStudioDay57"
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
        "Day 57: vocabulary card not found."
      );

      return;
    }


    const top =
      document.createElement(
        "div"
      );


    top.id =
      "scienceStudioDay57";


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
        "d57-card d57-cream"
      );


    card.innerHTML = `

      <div class="d57-badge">
        🔎 Phenomenon Mission
      </div>

      <h2>
        Same Electrical Energy — Different Outputs
      </h2>

      <div class="d57-unit">
        Day 57 • Different Loads
      </div>


      <div class="d57-image">

        <img
          src="/static/phenomenon/day57_different_loads.svg"
          alt="Three circuits showing a bulb, motor, and speaker producing different energy outputs"
        >

      </div>


      <div class="d57-focus">

        <strong>
          ❓ Focus Question:
        </strong>

        Why does changing the load change
        the observable energy output?

      </div>


      <div class="d57-grid2">

        <div class="d57-box">
          <strong>👀 Notice</strong>
          Each circuit uses a battery and conducting path.
        </div>

        <div class="d57-box">
          <strong>🤔 Wonder</strong>
          Why doesn't every load produce light?
        </div>

        <div class="d57-box">
          <strong>🧪 Quick Explore</strong>
          Identify what is different in the three systems.
        </div>

        <div class="d57-box">
          <strong>📊 Evidence Tracker</strong>
          Match each load with its observable energy output.
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
        "d57-card d57-cream"
      );


    card.innerHTML = `

      <div class="d57-header">

        <div>

          <div class="d57-badge">
            🎬 Mission Brief Animation
          </div>

          <h2>
            Mission Brief: Different Loads
          </h2>

          <div class="d57-unit">
            Day 57 • Electrical Energy Transformations
          </div>

        </div>


        <button
          class="d57-play"
          type="button"
        >
          ▶ Play Mission Brief
        </button>

      </div>


      <div class="d57-slide">

        <div class="d57-slide-icon"></div>

        <h2 class="d57-slide-title"></h2>

        <div class="d57-slide-main"></div>

        <div class="d57-slide-caption"></div>

      </div>


      <div class="d57-footer">

        <strong class="d57-number"></strong>

        <div>

          <button
            class="d57-control d57-back"
            type="button"
          >
            ◀ Back
          </button>

          <button
            class="d57-control d57-next"
            type="button"
          >
            Next ▶
          </button>

          <button
            class="d57-control d57-restart"
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
          "Compare how a bulb, motor, and speaker transform electrical energy.",

        caption:
          "The load changes, but each system still needs a complete circuit."
      },


      {
        icon: "⚡",
        title: "Electrical Energy Enters the Load",

        main:
          "A functioning circuit transfers electrical energy to the load.",

        caption:
          "The load is where an observable energy transformation occurs."
      },


      {
        icon: "💡",
        title: "Bulb",

        main:
          "A bulb transforms electrical energy into light energy and some thermal energy.",

        caption:
          "Evidence: light and warmth."
      },


      {
        icon: "⚙️",
        title: "Motor",

        main:
          "A motor transforms electrical energy into motion.",

        caption:
          "Evidence: the motor shaft or fan moves."
      },


      {
        icon: "🔊",
        title: "Speaker",

        main:
          "A speaker transforms electrical energy into sound energy.",

        caption:
          "Evidence: sound can be heard."
      },


      {
        icon: "🔄",
        title: "Change the Load",

        main:
          "The battery and conducting path can stay similar while the load changes.",

        caption:
          "Changing the load changes the observable output."
      },


      {
        icon: "⭐",
        title: "STAAR Strategy",

        main:
          "Identify the electrical input, then identify the observable output from the load.",

        caption:
          "Bulb → light. Motor → motion. Speaker → sound."
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
        "d57-card d57-blue"
      );


    card.innerHTML = `

      <div class="d57-steve-grid">

        <div class="d57-penguin">
          🐧
        </div>


        <div>

          <div class="d57-badge d57-blue-badge">
            🐧 Steve the Penguin's STAAR Mission
          </div>

          <h2>
            Steve the Penguin's Mystery Load Mission
          </h2>

          <div class="d57-unit">
            Day 57 • Energy Transformation Evidence
          </div>


          <div class="d57-scenario">

            <strong>
              Steve's Scenario:
            </strong>

            <br><br>

            Steve builds a complete circuit
            with a battery, wires, and a mystery load.

            When he tests the circuit,
            the load begins spinning.

          </div>


          <div class="d57-question">

            <strong>
              STAAR-Style Question:
            </strong>

            <p>
              Which conclusion is best supported
              by Steve's observation?
            </p>


            <button
              class="d57-answer"
              data-answer="A"
            >
              A. The load is transforming electrical energy into motion.
            </button>


            <button
              class="d57-answer"
              data-answer="B"
            >
              B. The load is transforming sound energy into electrical energy.
            </button>


            <button
              class="d57-answer"
              data-answer="C"
            >
              C. The battery is transforming motion into chemical energy.
            </button>


            <button
              class="d57-answer"
              data-answer="D"
            >
              D. The wires are producing the motion without electrical energy.
            </button>


            <div class="d57-answer-row">

              <button
                class="d57-check"
                type="button"
              >
                Check Answer
              </button>

              <button
                class="d57-reset"
                type="button"
              >
                Reset
              </button>

            </div>


            <div class="d57-feedback"></div>

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
      "scienceStudioDay57Lower";


    lower.innerHTML = `

      <section class="d57-card">

        <h2>
          🔔 Bell Ringer
        </h2>

        <div class="d57-box">

          <p>
            A battery can power a bulb,
            motor, or speaker.
          </p>

          <ol>
            <li>
              Does each load produce the same output?
            </li>

            <li>
              What output would you expect from a bulb?
            </li>

            <li>
              What output would you expect from a motor?
            </li>

            <li>
              What output would you expect from a speaker?
            </li>
          </ol>

        </div>

      </section>


      <section class="d57-card">

        <h2>
          👨‍🏫 Mini Lesson
        </h2>


        <div class="d57-transformation-grid">

          <div class="d57-transform">

            <div class="d57-big-icon">
              💡
            </div>

            <strong>
              BULB
            </strong>

            <span>
              Electrical
            </span>

            <b>↓</b>

            <span>
              Light + Thermal
            </span>

          </div>


          <div class="d57-transform">

            <div class="d57-big-icon">
              ⚙️
            </div>

            <strong>
              MOTOR
            </strong>

            <span>
              Electrical
            </span>

            <b>↓</b>

            <span>
              Motion
            </span>

          </div>


          <div class="d57-transform">

            <div class="d57-big-icon">
              🔊
            </div>

            <strong>
              SPEAKER
            </strong>

            <span>
              Electrical
            </span>

            <b>↓</b>

            <span>
              Sound
            </span>

          </div>

        </div>


        <div class="d57-warning">

          <strong>
            ⭐ STAAR Thinking:
          </strong>

          Identify the energy entering the load,
          then use the observable evidence to
          determine the output energy.

        </div>

      </section>


      <section class="d57-card">

        <h2>
          📓 Science Notebook
        </h2>

        <p>
          Complete the Load and Energy Output table.
        </p>


        <div class="d57-table-wrap">

          <table class="d57-table">

            <thead>

              <tr>
                <th>Load</th>
                <th>Energy In</th>
                <th>Observable Energy Out</th>
                <th>Evidence</th>
              </tr>

            </thead>


            <tbody>

              <tr>
                <td>Bulb</td>
                <td>Electrical</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>Motor</td>
                <td>Electrical</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>Speaker</td>
                <td>Electrical</td>
                <td></td>
                <td></td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>


      <section class="d57-card">

        <h2>
          🤝 Guided Practice — Identify the Transformation
        </h2>

        <div class="d57-box">

          <ol>
            <li>Identify the power source.</li>
            <li>Trace the conducting path.</li>
            <li>Identify the load.</li>
            <li>Observe what the load does.</li>
            <li>Identify the energy output.</li>
            <li>
              State the transformation:
              electrical → ______.
            </li>
          </ol>

        </div>

      </section>


      <section class="d57-card d57-cream">

        <div class="d57-badge">
          ⚡ Interactive Lab
        </div>

        <h2>
          Circuit Builder Mission: Three Loads Challenge
        </h2>


        <div class="d57-build-row">

          <div>
            <span>1️⃣</span>
            <strong>Bulb Circuit</strong>
            Electrical → Light + Thermal
          </div>

          <div>
            <span>2️⃣</span>
            <strong>Motor Circuit</strong>
            Electrical → Motion
          </div>

          <div>
            <span>3️⃣</span>
            <strong>Speaker Circuit</strong>
            Electrical → Sound
          </div>

        </div>


        <div class="d57-mission">

          <h3>
            For Each Build
          </h3>

          <div>
            ✓ Use one battery.
          </div>

          <div>
            ✓ Use two wires.
          </div>

          <div>
            ✓ Use only one load at a time.
          </div>

          <div>
            ✓ Connect through both battery terminals.
          </div>

          <div>
            ✓ Test the circuit.
          </div>

          <div>
            ✓ Record the observable output.
          </div>

        </div>


        <div class="d57-success">

          🏁 <strong>MISSION COMPLETE:</strong>

          You successfully powered all three loads
          and can explain how each load transformed
          electrical energy.

        </div>


        <a
          href="/labs/circuit-builder?mission=day57"
          class="d57-lab-button"
        >
          ⚡ Start Three Loads Challenge
        </a>

      </section>


      <section class="d57-card">

        <div class="d57-badge">
          ⭐ STAAR Practice
        </div>

        <h2>
          Loads and Energy Transformations
        </h2>


        ${question(
          1,
          "A battery powers a small motor in a complete circuit. Which energy transformation is best represented by the motor?",
          [
            "A. Electrical energy to motion",
            "B. Sound energy to electrical energy",
            "C. Light energy to chemical energy",
            "D. Thermal energy to electrical energy"
          ],
          "A",
          "A motor transforms electrical energy into observable motion."
        )}


        ${question(
          2,
          "A student replaces a bulb in a complete circuit with a speaker. Which observation would best show that the new load is functioning?",
          [
            "A. The speaker produces sound.",
            "B. The battery changes color.",
            "C. The wire becomes shorter.",
            "D. The circuit moves across the table."
          ],
          "A",
          "A speaker transforms electrical energy into sound energy."
        )}


        ${question(
          3,
          "Three complete circuits use identical batteries and wires. One uses a bulb, one uses a motor, and one uses a speaker. Why are their observable outputs different?",
          [
            "A. Different loads transform electrical energy into different forms.",
            "B. Each battery contains a completely different kind of electricity.",
            "C. Only the bulb uses electrical energy.",
            "D. The wires determine whether the output is light, motion, or sound."
          ],
          "A",
          "The load determines how electrical energy is transformed into an observable output."
        )}

      </section>


      <section class="d57-card">

        <h2>
          🎟 Written Exit Ticket
        </h2>

        <p>
          Explain how a bulb, motor, and speaker
          can use electrical energy but produce
          different outputs.
        </p>

        <textarea
          class="d57-textarea"
          placeholder="The loads produce different outputs because..."
        ></textarea>

      </section>


      <section class="d57-card">

        <h2>
          🧠 Explain Your Thinking: CER
        </h2>


        <div class="d57-focus">

          <strong>
            CER Question:
          </strong>

          How does changing the load change
          the energy output of an electrical system?

        </div>


        <div class="d57-grid3">

          <div>

            <h3>Claim</h3>

            <textarea
              class="d57-textarea"
              placeholder="My claim is..."
            ></textarea>

          </div>


          <div>

            <h3>Evidence</h3>

            <textarea
              class="d57-textarea"
              placeholder="Evidence from the bulb, motor, and speaker..."
            ></textarea>

          </div>


          <div>

            <h3>Reasoning</h3>

            <textarea
              class="d57-textarea"
              placeholder="This evidence shows..."
            ></textarea>

          </div>

        </div>

      </section>


      <section class="d57-card d57-cream">

        <div class="d57-badge d57-blue-badge">
          📘 McGraw Hill Lesson Connection
        </div>

        <h2>
          Electricity and Light
        </h2>


        <div class="d57-box">

          <h3>
            Chapter 4 — Electrical Energy
          </h3>

          <p>
            Use the district-approved McGraw Hill
            materials to compare how electrical
            energy can be transformed by different
            circuit components.
          </p>


          <strong>
            Today's connection:
          </strong>

          <ul>
            <li>electrical energy,</li>
            <li>loads,</li>
            <li>light and thermal output,</li>
            <li>motion output,</li>
            <li>sound output,</li>
            <li>energy transformations in systems.</li>
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
  // MISSION BRIEF
  // =========================================================

  function activateSlides(
    card,
    slides
  ) {

    let index = 0;
    let timer = null;


    const icon =
      card.querySelector(".d57-slide-icon");

    const title =
      card.querySelector(".d57-slide-title");

    const main =
      card.querySelector(".d57-slide-main");

    const caption =
      card.querySelector(".d57-slide-caption");

    const number =
      card.querySelector(".d57-number");

    const play =
      card.querySelector(".d57-play");


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


    card.querySelector(".d57-back").onclick =
      function () {

        stop();

        index =
          Math.max(
            0,
            index - 1
          );

        draw();
      };


    card.querySelector(".d57-next").onclick =
      function () {

        stop();

        index =
          Math.min(
            slides.length - 1,
            index + 1
          );

        draw();
      };


    card.querySelector(".d57-restart").onclick =
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
          ".d57-answer"
        )
      );


    const feedback =
      card.querySelector(
        ".d57-feedback"
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


    card.querySelector(".d57-check").onclick =
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
            "Correct! Spinning is observable evidence of electrical energy transforming into motion.";

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
            "Try again. Use the observable output — the load is spinning.";
        }
      };


    card.querySelector(".d57-reset").onclick =
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
        class="d57-practice"
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
                class="d57-practice-answer"
                type="button"
                data-letter="${choice.charAt(0)}"
              >
                ${choice}
              </button>

            `;

          }
        ).join("")}


        <div class="d57-practice-feedback"></div>

      </div>

    `;
  }


  function activateQuestions(
    container
  ) {

    container
      .querySelectorAll(
        ".d57-practice"
      )
      .forEach(
        function (question) {

          const correct =
            question.dataset.correct;


          const rationale =
            question.dataset.rationale;


          const feedback =
            question.querySelector(
              ".d57-practice-feedback"
            );


          question
            .querySelectorAll(
              ".d57-practice-answer"
            )
            .forEach(
              function (answer) {

                answer.onclick =
                  function () {

                    question
                      .querySelectorAll(
                        ".d57-practice-answer"
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
                            ".d57-practice-answer"
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
