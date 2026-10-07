(function () {
  "use strict";


  if (
    !window.location.pathname.includes(
      "/second-nine-weeks/day/64"
    )
  ) {
    return;
  }


  function start() {

    setTimeout(
      buildDay64,
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


  function buildDay64() {

    document.getElementById(
      "scienceStudioDay64"
    )?.remove();


    document.getElementById(
      "scienceStudioDay64Lower"
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
        "Day 64: Vocabulary Anchor Chart not found."
      );

      return;
    }


    const top =
      document.createElement(
        "div"
      );


    top.id =
      "scienceStudioDay64";


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
        Where Did the Light Go?
      </h2>

      <div class="d59-unit">
        Day 64 • Reflection
      </div>


      <div class="d59-image">

        <img
          src="/static/phenomenon/day64_reflection_mirror.svg"
          alt="Flashlight ray striking a mirror and reflecting toward a target"
        >

      </div>


      <div class="d59-focus">

        <strong>
          ❓ Focus Question:
        </strong>

        What caused the light
        to change direction?

      </div>


      <div class="d59-grid2">

        <div class="d59-box">

          <strong>
            👀 Notice
          </strong>

          Light travels straight
          toward the mirror.

        </div>


        <div class="d59-box">

          <strong>
            🤔 Wonder
          </strong>

          Why does the light travel
          in a different direction afterward?

        </div>


        <div class="d59-box">

          <strong>
            🔍 Trace It
          </strong>

          Trace the incoming ray.

          Then trace the reflected ray.

        </div>


        <div class="d59-box">

          <strong>
            📊 Evidence
          </strong>

          The mirror changes
          the direction of the ray.

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
            Mission Brief: Bounce the Light
          </h2>

          <div class="d59-unit">
            Day 64 • Reflection
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
        icon: "🔦",
        title: "Start With the Source",
        main:
          "Light travels from the flashlight toward the mirror.",
        caption:
          "This path can be modeled with a straight ray."
      },

      {
        icon: "➡️",
        title: "Incoming Ray",
        main:
          "The ray traveling toward the mirror is the incoming ray.",
        caption:
          "Follow the direction of the arrow."
      },

      {
        icon: "🪞",
        title: "Light Meets the Mirror",
        main:
          "When the light strikes the mirror, the surface redirects the light.",
        caption:
          "The light changes direction."
      },

      {
        icon: "↗️",
        title: "Reflected Ray",
        main:
          "The ray traveling away from the mirror is the reflected ray.",
        caption:
          "Reflection is the bouncing of light from a surface."
      },

      {
        icon: "🔄",
        title: "Rotate the Mirror",
        main:
          "Changing the mirror orientation changes the direction of the reflected ray.",
        caption:
          "The mirror controls where the reflected light travels."
      },

      {
        icon: "⭐",
        title: "STAAR Strategy",
        main:
          "Trace the ray toward the surface, then trace the ray away from the surface.",
        caption:
          "A bouncing light path is evidence of reflection."
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
            Steve's Mirror Rescue Mission
          </h2>

          <div class="d59-unit">
            Day 64 • Reflection Evidence
          </div>


          <div class="d59-scenario">

            <strong>
              Steve's Scenario:
            </strong>

            <br><br>

            Steve shines a flashlight at a mirror.

            The beam strikes the mirror
            and then travels toward a target
            on another wall.

          </div>


          <div class="d59-question">

            <strong>
              STAAR-Style Question:
            </strong>

            <p>
              Which behavior of light
              is Steve observing?
            </p>


            <button
              class="d59-answer"
              data-answer="A"
            >
              A. Reflection
            </button>

            <button
              class="d59-answer"
              data-answer="B"
            >
              B. Electrical conduction
            </button>

            <button
              class="d59-answer"
              data-answer="C"
            >
              C. Sound vibration
            </button>

            <button
              class="d59-answer"
              data-answer="D"
            >
              D. Magnetism
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
      "scienceStudioDay64Lower";


    lower.innerHTML = `

      <section class="d59-card">

        <h2>
          🔔 Bell Ringer
        </h2>


        <div class="d59-box">

          <p>
            Imagine shining a flashlight
            directly at a mirror.
          </p>


          <ol>

            <li>
              What happens when the light
              reaches the mirror?
            </li>

            <li>
              Does the mirror create the light?
            </li>

            <li>
              What evidence could show
              that the light changed direction?
            </li>

          </ol>

        </div>

      </section>


      <section class="d59-card">

        <h2>
          👨‍🏫 Mini Lesson — Reflection
        </h2>


        <div class="d59-grid2">

          <div class="d59-box">

            <strong>
              ➡️ Incoming Ray
            </strong>

            The light ray traveling
            toward the surface.

          </div>


          <div class="d59-box">

            <strong>
              🪞 Mirror
            </strong>

            A surface that reflects
            a large amount of visible light.

          </div>


          <div class="d59-box">

            <strong>
              ↗️ Reflected Ray
            </strong>

            The light ray traveling away
            from the surface after reflection.

          </div>


          <div class="d59-box">

            <strong>
              🔄 Reflection
            </strong>

            The bouncing of light
            from a surface.

          </div>

        </div>


        <div class="d59-warning">

          <strong>
            ⭐ Remember Day 63:
          </strong>

          Light travels in a straight line
          until it interacts with matter.

          <br><br>

          Today the mirror causes
          the light to change direction.

        </div>

      </section>


      <section class="d59-card">

        <h2>
          📓 Science Notebook
        </h2>


        <div class="d59-box">

          <strong>
            Draw and Label
          </strong>

          <br><br>

          🔦 → → → 🪞 ↗ → → 🎯

          <br><br>

          Label:

          <ul>
            <li>light source</li>
            <li>incoming ray</li>
            <li>mirror</li>
            <li>reflected ray</li>
          </ul>

        </div>


        <div class="d59-focus">

          <strong>
            Complete the Rule:
          </strong>

          Reflection happens when light
          ______________________________
          from a surface.

        </div>

      </section>


      <section class="d59-card">

        <h2>
          🤝 Guided Practice — Trace the Reflection
        </h2>


        <div class="d59-box">

          <ol>

            <li>
              Identify the light source.
            </li>

            <li>
              Trace the incoming ray.
            </li>

            <li>
              Find where the ray strikes the mirror.
            </li>

            <li>
              Trace the reflected ray.
            </li>

            <li>
              Explain how the direction changed.
            </li>

          </ol>

        </div>

      </section>


      <section class="d59-card d59-cream">

        <div class="d59-badge">
          🪞 Interactive Lab
        </div>

        <h2>
          Reflection Lab:
          Redirect the Light
        </h2>


        <p>
          Rotate a mirror and investigate
          how the direction of reflected light changes.
        </p>


        <div class="d59-required">

          <div>
            🔦
            <strong>
              Light Source
            </strong>
          </div>

          <div>
            🪞
            <strong>
              Mirror
            </strong>
          </div>

          <div>
            ↗️
            <strong>
              Reflected Ray
            </strong>
          </div>

        </div>


        <div class="d59-box">

          <strong>
            Your Mission
          </strong>

          <ol>

            <li>
              Test the mirror tilted left.
            </li>

            <li>
              Test the mirror in the center position.
            </li>

            <li>
              Test the mirror tilted right.
            </li>

            <li>
              Compare the reflected rays.
            </li>

            <li>
              Explain what changes
              when the mirror rotates.
            </li>

          </ol>

        </div>


        <div class="d59-success">

          🧠
          <strong>
            Evidence Goal:
          </strong>

          Show that reflection changes
          the direction of light.

        </div>


        <a
          href="/labs/reflection?mission=day64"
          class="d59-lab-button"
        >
          🪞 Start Reflection Lab
        </a>

      </section>


      <section class="d59-card">

        <div class="d59-badge">
          ⭐ STAAR Practice
        </div>

        <h2>
          Reflection Evidence
        </h2>


        ${question(
          1,
          "A student shines a flashlight at a mirror. The light changes direction after striking the mirror. Which behavior of light is demonstrated?",
          [
            "A. Reflection",
            "B. Absorption",
            "C. Sound transfer",
            "D. Electrical conduction"
          ],
          "A",
          "Reflection occurs when light bounces from a surface and changes direction."
        )}


        ${question(
          2,
          "Which statement correctly describes the reflected ray in a ray diagram?",
          [
            "A. It travels from the light source toward the mirror.",
            "B. It travels away from the mirror after light strikes the surface.",
            "C. It remains inside the flashlight.",
            "D. It shows where sound travels."
          ],
          "B",
          "The reflected ray shows the direction light travels after bouncing from the surface."
        )}


        ${question(
          3,
          "A student rotates a mirror while shining the same flashlight at it. The reflected spot moves. Which conclusion is best supported?",
          [
            "A. Changing the mirror changes the direction of reflected light.",
            "B. The mirror becomes a new light source.",
            "C. Light stops traveling before reaching the mirror.",
            "D. The flashlight changes into thermal energy."
          ],
          "A",
          "Rotating the mirror changes the direction in which the reflected ray travels."
        )}

      </section>


      <section class="d59-card">

        <h2>
          🎟 Written Exit Ticket
        </h2>


        <p>
          A flashlight beam strikes a mirror
          and then travels toward a wall.

          Explain what happened using the words

          <strong>reflection</strong>,
          <strong>incoming ray</strong>,
          and
          <strong>reflected ray</strong>.
        </p>


        <textarea
          class="d59-textarea"
          placeholder="When the incoming ray reached the mirror..."
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

          How does a mirror change
          the path of light?
        </div>


        <div class="d59-grid3">

          <div>

            <h3>Claim</h3>

            <textarea
              class="d59-textarea"
              placeholder="A mirror..."
            ></textarea>

          </div>


          <div>

            <h3>Evidence</h3>

            <textarea
              class="d59-textarea"
              placeholder="In the Reflection Lab..."
            ></textarea>

          </div>


          <div>

            <h3>Reasoning</h3>

            <textarea
              class="d59-textarea"
              placeholder="This demonstrates reflection because..."
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

          <p>
            Use the district-approved McGraw Hill
            light-energy resources to reinforce
            models of reflected light.
          </p>


          <strong>
            Today's focus:
          </strong>

          <ul>
            <li>reflection,</li>
            <li>mirrors and reflective surfaces,</li>
            <li>incoming rays,</li>
            <li>reflected rays,</li>
            <li>changes in light direction.</li>
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
            "Correct! The light changed direction after bouncing from the mirror.";

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
            "Try again. Look for evidence that the light bounced from the surface.";
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
            "#scienceStudioDay64"
          )
          ||
          heading.closest(
            "#scienceStudioDay64Lower"
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
