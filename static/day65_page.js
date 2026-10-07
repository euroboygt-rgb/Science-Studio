(function () {
  "use strict";


  if (
    !window.location.pathname.includes(
      "/second-nine-weeks/day/65"
    )
  ) {
    return;
  }


  function start() {

    setTimeout(
      buildDay65,
      800
    );
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


  function buildDay65() {

    document
      .getElementById(
        "scienceStudioDay65"
      )
      ?.remove();


    document
      .getElementById(
        "scienceStudioDay65Lower"
      )
      ?.remove();


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
      return;
    }


    const top =
      document.createElement(
        "div"
      );


    top.id =
      "scienceStudioDay65";


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


    if (
      view !==
      "teacher"
    ) {

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
        Can Light Get Around the Wall?
      </h2>

      <div class="d59-unit">
        Day 65 • Mirror Maze Engineering Challenge
      </div>


      <div class="d59-image">

        <img
          src="/static/phenomenon/day65_mirror_maze.svg"
          alt="Flashlight, mirrors, obstacle, and target reflection maze"
        >

      </div>


      <div class="d59-focus">

        <strong>
          ❓ Engineering Question:
        </strong>

        How can mirrors redirect light
        around an opaque obstacle?

      </div>


      <div class="d59-grid2">

        <div class="d59-box">
          <strong>👀 Notice</strong>
          The direct path is blocked.
        </div>

        <div class="d59-box">
          <strong>🤔 Wonder</strong>
          Where should the first mirror go?
        </div>

        <div class="d59-box">
          <strong>📐 Plan</strong>
          Sketch a possible reflected path.
        </div>

        <div class="d59-box">
          <strong>🔁 Revise</strong>
          Use test evidence to adjust the design.
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
            Mission Brief: Engineer the Light Path
          </h2>

          <div class="d59-unit">
            Day 65 • Reflection Application
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


    activateSlides(
      card,
      [
        {
          icon: "🔦",
          title: "Start With the Light",
          main:
            "The light ray travels straight from the source.",
          caption:
            "Predict the original path first."
        },

        {
          icon: "⬛",
          title: "Find the Problem",
          main:
            "An opaque blocker stops the direct ray.",
          caption:
            "The target cannot be reached directly."
        },

        {
          icon: "🪞",
          title: "Add a Mirror",
          main:
            "Place a mirror where it can intercept the incoming ray.",
          caption:
            "The mirror can redirect the light."
        },

        {
          icon: "↗️",
          title: "Predict the Reflection",
          main:
            "Rotate the mirror and predict where the reflected ray will travel.",
          caption:
            "Mirror orientation matters."
        },

        {
          icon: "🧪",
          title: "Test",
          main:
            "Press Test Light and observe the actual ray path.",
          caption:
            "Evidence tells you what to change."
        },

        {
          icon: "🔁",
          title: "Revise",
          main:
            "Move or rotate mirrors until the light reaches the target.",
          caption:
            "Engineering improves through testing."
        },

        {
          icon: "⭐",
          title: "STAAR Connection",
          main:
            "Each change in direction occurs when the light reflects from a mirror.",
          caption:
            "Trace the complete ray path."
        }
      ]
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
            Steve's Frozen-Lab Light Rescue
          </h2>

          <div class="d59-unit">
            Day 65 • Reflection Engineering
          </div>


          <div class="d59-scenario">

            <strong>
              Steve's Scenario:
            </strong>

            <br><br>

            Steve needs a flashlight beam
            to reach a sensor around an opaque wall.

            He cannot move the flashlight or sensor,
            but he can place mirrors.

          </div>


          <div class="d59-question">

            <strong>
              STAAR-Style Question:
            </strong>

            <p>
              Why can mirrors help Steve
              reach the sensor?
            </p>

            <button
              class="d59-answer"
              data-answer="A"
            >
              A. Mirrors can reflect and redirect light.
            </button>

            <button
              class="d59-answer"
              data-answer="B"
            >
              B. Mirrors create electrical energy.
            </button>

            <button
              class="d59-answer"
              data-answer="C"
            >
              C. Mirrors make opaque walls transparent.
            </button>

            <button
              class="d59-answer"
              data-answer="D"
            >
              D. Mirrors cause light to become sound.
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
      "scienceStudioDay65Lower";


    lower.innerHTML = `

      <section class="d59-card">

        <h2>
          🔔 Bell Ringer
        </h2>

        <div class="d59-box">

          A flashlight points toward an opaque wall.
          The target is around the wall.

          <ol>
            <li>
              Why can't the direct ray reach the target?
            </li>

            <li>
              How could a mirror change the path?
            </li>

            <li>
              What would you test first?
            </li>
          </ol>

        </div>

      </section>


      <section class="d59-card">

        <h2>
          👨‍🏫 Mini Lesson — Engineer a Reflection Path
        </h2>


        <div class="d59-grid2">

          <div class="d59-box">
            <strong>1️⃣ PLAN</strong>
            Predict where the light will travel.
          </div>

          <div class="d59-box">
            <strong>2️⃣ BUILD</strong>
            Place a mirror in the ray path.
          </div>

          <div class="d59-box">
            <strong>3️⃣ TEST</strong>
            Observe the reflected ray.
          </div>

          <div class="d59-box">
            <strong>4️⃣ REVISE</strong>
            Move or rotate the mirror using evidence.
          </div>

        </div>


        <div class="d59-warning">

          <strong>
            Reflection Rule:
          </strong>

          Light travels straight between interactions.

          Every time the ray strikes a mirror,
          reflection can redirect the light.

        </div>

      </section>


      <section class="d59-card">

        <h2>
          📓 Science Notebook — Plan Your Maze
        </h2>


        <div class="d59-box">

          Draw:

          <ul>
            <li>light source</li>
            <li>target</li>
            <li>opaque blocker</li>
            <li>mirror locations</li>
            <li>incoming rays</li>
            <li>reflected rays</li>
          </ul>

          Circle every point where reflection occurs.

        </div>


        <div class="d59-focus">

          <strong>
            Prediction:
          </strong>

          I think the light will reach the target if
          ____________________________________________.

        </div>

      </section>


      <section class="d59-card">

        <h2>
          🤝 Guided Practice — One-Mirror Challenge
        </h2>

        <div class="d59-box">

          <ol>
            <li>Trace the original ray.</li>
            <li>Place one mirror in that path.</li>
            <li>Predict the reflected direction.</li>
            <li>Test the ray.</li>
            <li>Rotate the mirror based on evidence.</li>
          </ol>

        </div>

      </section>


      <section class="d59-card d59-cream">

        <div class="d59-badge">
          🔦 Interactive Engineering Lab
        </div>

        <h2>
          Mirror Maze Lab:
          Can You Hit the Target?
        </h2>


        <div class="d59-required">

          <div>
            🔦
            <strong>Light</strong>
          </div>

          <div>
            🪞
            <strong>Mirrors</strong>
          </div>

          <div>
            🎯
            <strong>Target</strong>
          </div>

        </div>


        <div class="d59-box">

          <strong>
            Challenge Progression
          </strong>

          <p>
            Mission 1 — One Bounce
          </p>

          <p>
            Mission 2 — Around the Block
          </p>

          <p>
            Mission 3 — Mirror Maze
          </p>

          <p>
            Free Build — Create your own challenge
          </p>

        </div>


        <div class="d59-success">

          🏁
          <strong>
            Engineering Goal:
          </strong>

          Reach the target by applying
          straight-line light travel and reflection.

        </div>


        <a
          href="/labs/mirror-maze?mission=day65"
          class="d59-lab-button"
        >
          🔦 Start Mirror Maze Lab
        </a>

      </section>


      <section class="d59-card">

        <div class="d59-badge">
          ⭐ STAAR Practice
        </div>

        <h2>
          Reflection Engineering Evidence
        </h2>


        ${question(
          1,
          "A flashlight beam cannot travel directly to a target because an opaque object blocks the path. Which tool could redirect the light around the object?",
          [
            "A. A mirror",
            "B. A battery",
            "C. A magnet",
            "D. A speaker"
          ],
          "A",
          "A mirror can reflect the light and redirect the ray along a new path."
        )}


        ${question(
          2,
          "A student rotates a mirror and the reflected beam moves away from the target. What should the student do next?",
          [
            "A. Use the ray path as evidence and adjust the mirror again.",
            "B. Conclude that light no longer travels in straight lines.",
            "C. Replace the mirror with an opaque blocker.",
            "D. Remove the light source."
          ],
          "A",
          "Testing provides evidence that can be used to revise the mirror orientation."
        )}


        ${question(
          3,
          "Which observation is evidence that reflection occurred in a mirror maze?",
          [
            "A. The light ray changed direction after striking a mirror.",
            "B. The flashlight produced sound.",
            "C. The blocker became transparent.",
            "D. The target became a light source."
          ],
          "A",
          "A change in the ray direction after striking the mirror is evidence of reflection."
        )}

      </section>


      <section class="d59-card">

        <h2>
          🎟 Written Exit Ticket
        </h2>

        <p>
          Explain how mirrors can redirect
          a light beam around an opaque obstacle.

          Use the words
          <strong>reflection</strong>,
          <strong>incoming ray</strong>,
          <strong>reflected ray</strong>,
          and
          <strong>target</strong>.
        </p>

        <textarea
          class="d59-textarea"
          placeholder="Mirrors can redirect the light because..."
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

          How can mirrors redirect light
          around an obstacle and toward a target?
        </div>


        <div class="d59-grid3">

          <div>
            <h3>Claim</h3>
            <textarea
              class="d59-textarea"
              placeholder="Mirrors can..."
            ></textarea>
          </div>

          <div>
            <h3>Evidence</h3>
            <textarea
              class="d59-textarea"
              placeholder="In the Mirror Maze..."
            ></textarea>
          </div>

          <div>
            <h3>Reasoning</h3>
            <textarea
              class="d59-textarea"
              placeholder="This evidence shows reflection because..."
            ></textarea>
          </div>

        </div>

      </section>


      <section class="d59-card d59-cream">

        <div class="d59-badge d59-blue-badge">
          📘 McGraw Hill Lesson Connection
        </div>

        <h2>
          Light Energy
        </h2>

        <div class="d59-box">

          Use the district-approved light-energy
          resources to reinforce:

          <ul>
            <li>straight-line light travel,</li>
            <li>reflection,</li>
            <li>incoming and reflected rays,</li>
            <li>opaque materials,</li>
            <li>using models and evidence.</li>
          </ul>

          Tomorrow, students will begin comparing
          reflection with <strong>refraction</strong>.

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
            4300
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


        const correct =
          "A";


        if (
          selected ===
          correct
        ) {

          feedback.style.color =
            "#087a35";

          feedback.textContent =
            "Correct! Mirrors reflect and redirect the light ray.";

        } else {

          feedback.style.color =
            "#b00020";

          feedback.textContent =
            "Try again. Think about which object can change a light ray's direction through reflection.";
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

                    if (
                      answer.dataset.letter ===
                      correct
                    ) {

                      feedback.style.color =
                        "#087a35";

                      feedback.textContent =
                        "Correct! "
                        +
                        rationale;

                    } else {

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

        // Never hide our custom Day 65 content.

        if (
          heading.closest(
            "#scienceStudioDay65"
          )
          ||
          heading.closest(
            "#scienceStudioDay65Lower"
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


          /*
            Only hide something that actually looks
            like one of the OLD lesson cards.

            This prevents the script from climbing
            all the way up and hiding the entire page.
          */

          const borderWidth =
            Math.max(
              parseFloat(
                style.borderTopWidth || "0"
              ),
              parseFloat(
                style.borderRightWidth || "0"
              ),
              parseFloat(
                style.borderBottomWidth || "0"
              ),
              parseFloat(
                style.borderLeftWidth || "0"
              )
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
            rect.height < 1200
            &&
            (
              borderWidth >= 1
              ||
              radius >= 5
            )
          ) {

            node.style.display =
              "none";

            break;
          }


          /*
            Safety stop:
            never climb into the page's main wrapper.
          */

          if (
            node.tagName === "MAIN"
            ||
            node.id === "content"
            ||
            node.classList.contains(
              "container"
            )
          ) {

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


      if (
        rect.width > 500
        &&
        rect.height > 70
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
