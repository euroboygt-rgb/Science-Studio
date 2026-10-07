(function () {
  "use strict";


  if (
    !window.location.pathname.includes(
      "/second-nine-weeks/day/66"
    )
  ) {
    return;
  }


  function start() {

    const attempts = [
      300,
      800,
      1400,
      2200,
      3200
    ];


    attempts.forEach(
      function (delay) {

        setTimeout(
          function () {

            if (
              !document.getElementById(
                "scienceStudioDay66"
              )
            ) {

              buildDay66();
            }

          },
          delay
        );

      }
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


  function buildDay66() {

    document
      .getElementById(
        "scienceStudioDay66"
      )
      ?.remove();


    document
      .getElementById(
        "scienceStudioDay66Lower"
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
      "scienceStudioDay66";


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
        Why Did the Light Bend?
      </h2>


      <div class="d59-unit">
        Day 66 • Refraction Through Glass
      </div>


      <div class="d59-image">

        <img
          src="/static/phenomenon/day66_prism_refraction.svg"
          alt="Light ray refracting as it enters and exits a glass prism"
        >

      </div>


      <div class="d59-focus">

        <strong>
          ❓ Focus Question:
        </strong>

        At which boundaries
        did the light change direction?

      </div>


      <div class="d59-grid2">

        <div class="d59-box">

          <strong>
            👀 Notice
          </strong>

          The ray is straight while
          traveling through each medium.

        </div>


        <div class="d59-box">

          <strong>
            🤔 Wonder
          </strong>

          Why does the ray bend
          when it enters the glass?

        </div>


        <div class="d59-box">

          <strong>
            🔍 Trace It
          </strong>

          Follow the ray:
          Air → Glass → Air.

        </div>


        <div class="d59-box">

          <strong>
            📊 Evidence
          </strong>

          Look for changes
          at the medium boundaries.

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
            Mission Brief: Crossing the Boundary
          </h2>

          <div class="d59-unit">
            Day 66 • Refraction
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
          icon: "➡️",
          title: "Light in One Medium",
          main:
            "Light travels in a straight line while moving through the same medium.",
          caption:
            "Air is one medium."
        },

        {
          icon: "🔺",
          title: "Meet the Glass Prism",
          main:
            "The prism is made of glass, which is a different medium.",
          caption:
            "The ray is about to cross a boundary."
        },

        {
          icon: "↘️",
          title: "Air to Glass",
          main:
            "The light can change direction as it enters the glass.",
          caption:
            "This change is refraction."
        },

        {
          icon: "➡️",
          title: "Inside the Glass",
          main:
            "After changing direction, the ray travels straight through the glass.",
          caption:
            "It stays straight until the next interaction."
        },

        {
          icon: "↘️",
          title: "Glass Back to Air",
          main:
            "The ray can change direction again when it leaves the glass.",
          caption:
            "A second medium boundary causes another refraction."
        },

        {
          icon: "🪞≠🔺",
          title: "Reflection vs. Refraction",
          main:
            "Reflection bounces light from a surface. Refraction bends the ray as it crosses into another medium.",
          caption:
            "Do not confuse the two behaviors."
        },

        {
          icon: "⭐",
          title: "STAAR Strategy",
          main:
            "Look for a light ray crossing from one material into another and changing direction.",
          caption:
            "That is evidence of refraction."
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
            Steve's Glass Prism Mystery
          </h2>


          <div class="d59-unit">
            Day 66 • Refraction Evidence
          </div>


          <div class="d59-scenario">

            <strong>
              Steve's Scenario:
            </strong>

            <br><br>

            Steve shines a light through the air
            toward a clear glass prism.

            The ray changes direction
            when it enters the glass.

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
              A. Refraction
            </button>

            <button
              class="d59-answer"
              data-answer="B"
            >
              B. Magnetism
            </button>

            <button
              class="d59-answer"
              data-answer="C"
            >
              C. Electrical conduction
            </button>

            <button
              class="d59-answer"
              data-answer="D"
            >
              D. Sound vibration
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
      "scienceStudioDay66Lower";


    lower.innerHTML = `

      <section class="d59-card">

        <h2>
          🔔 Bell Ringer
        </h2>


        <div class="d59-box">

          Yesterday a mirror caused light
          to bounce away from a surface.

          <ol>

            <li>
              What do you predict will happen
              when light enters clear glass?
            </li>

            <li>
              Will the light bounce away
              or travel into the glass?
            </li>

            <li>
              What might happen to its direction?
            </li>

          </ol>

        </div>

      </section>


      <section class="d59-card">

        <h2>
          👨‍🏫 Mini Lesson — Refraction
        </h2>


        <div class="d59-grid2">

          <div class="d59-box">

            <strong>
              🌬️ Medium 1: Air
            </strong>

            Matter through which
            the light ray travels.

          </div>


          <div class="d59-box">

            <strong>
              🔺 Medium 2: Glass
            </strong>

            A different transparent medium.

          </div>


          <div class="d59-box">

            <strong>
              ↘️ Refraction
            </strong>

            A change in the direction
            of light as it moves
            between different media.

          </div>


          <div class="d59-box">

            <strong>
              🚧 Boundary
            </strong>

            The place where one medium
            meets another medium.

          </div>

        </div>


        <div class="d59-warning">

          <strong>
            Today's Path:
          </strong>

          <br><br>

          AIR

          → boundary →

          GLASS

          → boundary →

          AIR

          <br><br>

          Look for where the ray
          changes direction.

        </div>

      </section>


      <section class="d59-card">

        <h2>
          📓 Science Notebook
        </h2>


        <div class="d59-box">

          Draw a triangular prism.

          <br><br>

          Label:

          <ul>

            <li>Air</li>

            <li>Glass</li>

            <li>Incoming ray</li>

            <li>Refracted ray</li>

            <li>Exiting ray</li>

            <li>Boundary 1</li>

            <li>Boundary 2</li>

          </ul>

        </div>


        <div class="d59-focus">

          <strong>
            Complete the Rule:
          </strong>

          Refraction occurs when light
          ______________________________
          as it moves from one
          ______________________________
          into another.

        </div>

      </section>


      <section class="d59-card">

        <h2>
          🤝 Guided Practice — Trace the Prism
        </h2>


        <div class="d59-box">

          <ol>

            <li>
              Identify the incoming medium.
            </li>

            <li>
              Trace the incoming ray.
            </li>

            <li>
              Circle Boundary 1.
            </li>

            <li>
              Trace the ray inside the glass.
            </li>

            <li>
              Circle Boundary 2.
            </li>

            <li>
              Trace the exiting ray.
            </li>

            <li>
              Describe where the direction changed.
            </li>

          </ol>

        </div>

      </section>


      <section class="d59-card d59-cream">

        <div class="d59-badge">
          🔺 Interactive Lab
        </div>


        <h2>
          Prism Refraction Lab:
          Follow the Bending Light
        </h2>


        <p>
          Test three incoming rays and observe
          what happens as light travels

          <strong>
            air → glass → air.
          </strong>
        </p>


        <div class="d59-required">

          <div>
            🌬️
            <strong>
              Air
            </strong>
          </div>

          <div>
            🔺
            <strong>
              Glass Prism
            </strong>
          </div>

          <div>
            ↘️
            <strong>
              Refracted Ray
            </strong>
          </div>

        </div>


        <div class="d59-box">

          <strong>
            Your Mission
          </strong>

          <ol>

            <li>
              Test the straight ray.
            </li>

            <li>
              Test the upward ray.
            </li>

            <li>
              Test the downward ray.
            </li>

            <li>
              Compare the ray before,
              inside, and after the prism.
            </li>

            <li>
              Identify both boundaries
              where refraction occurred.
            </li>

          </ol>

        </div>


        <div class="d59-success">

          🧠
          <strong>
            Evidence Goal:
          </strong>

          Explain why the ray changes direction
          when it crosses between air and glass.

        </div>


        <a
          href="/labs/prism-refraction?mission=day66"
          class="d59-lab-button"
        >
          🔺 Start Prism Refraction Lab
        </a>

      </section>


      <section class="d59-card">

        <div class="d59-badge">
          ⭐ STAAR Practice
        </div>


        <h2>
          Refraction Evidence
        </h2>


        ${question(
          1,
          "A beam of light travels from air into a glass prism and changes direction. Which behavior of light is demonstrated?",
          [
            "A. Refraction",
            "B. Magnetism",
            "C. Electrical conduction",
            "D. Sound vibration"
          ],
          "A",
          "Refraction occurs when light changes direction as it moves between different media."
        )}


        ${question(
          2,
          "In a ray diagram, where would refraction most likely occur?",
          [
            "A. At the boundary between air and glass",
            "B. Only inside the flashlight",
            "C. At the center of an opaque wall",
            "D. Only after the light stops moving"
          ],
          "A",
          "Refraction occurs at a boundary where light moves from one medium into another."
        )}


        ${question(
          3,
          "A ray enters a glass prism from air and later exits the prism back into air. Which observation is the best evidence of refraction?",
          [
            "A. The ray changes direction at the air-glass and glass-air boundaries.",
            "B. The prism becomes a light source.",
            "C. The ray produces sound inside the prism.",
            "D. The glass becomes opaque."
          ],
          "A",
          "Changing direction when crossing between media is evidence of refraction."
        )}

      </section>


      <section class="d59-card">

        <h2>
          🎟 Written Exit Ticket
        </h2>


        <p>
          A light ray travels from air
          into a glass prism
          and then back into air.

          Explain what happens at both boundaries.

          Use the words

          <strong>medium</strong>,
          <strong>boundary</strong>,
          and
          <strong>refraction</strong>.
        </p>


        <textarea
          class="d59-textarea"
          placeholder="When the light crosses from air into glass..."
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

          What evidence demonstrates
          that light refracts
          when it moves between air and glass?
        </div>


        <div class="d59-grid3">

          <div>

            <h3>Claim</h3>

            <textarea
              class="d59-textarea"
              placeholder="Light can..."
            ></textarea>

          </div>


          <div>

            <h3>Evidence</h3>

            <textarea
              class="d59-textarea"
              placeholder="In the Prism Refraction Lab..."
            ></textarea>

          </div>


          <div>

            <h3>Reasoning</h3>

            <textarea
              class="d59-textarea"
              placeholder="This is evidence of refraction because..."
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

          Use the district-approved
          light-energy resources
          to reinforce:

          <ul>

            <li>refraction,</li>

            <li>media,</li>

            <li>air and glass,</li>

            <li>light-ray models,</li>

            <li>changes in direction at boundaries.</li>

          </ul>


          <p>
            Tomorrow we will investigate
            refraction through

            <strong>
              water
            </strong>

            using the broken-pencil phenomenon.
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
            4400
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


        if (
          selected ===
          "A"
        ) {

          feedback.style.color =
            "#087a35";


          feedback.textContent =
            "Correct! The change in direction as light enters the glass is refraction.";

        } else {

          feedback.style.color =
            "#b00020";


          feedback.textContent =
            "Try again. Look for the behavior where light changes direction as it enters a different medium.";
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


    document
      .querySelectorAll(
        "h1,h2,h3,h4"
      )
      .forEach(
        function (heading) {

          if (
            heading.closest(
              "#scienceStudioDay66"
            )
            ||
            heading.closest(
              "#scienceStudioDay66Lower"
            )
          ) {
            return;
          }


          const headingText =
            (
              heading.textContent || ""
            )
            .replace(
              /\s+/g,
              " "
            )
            .trim();


          if (
            !titles.some(
              function (title) {

                return (
                  headingText === title
                  ||
                  headingText.endsWith(
                    title
                  )
                );
              }
            )
          ) {
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
                border >= 1
                ||
                radius >= 5
              )
            ) {

              node.style.display =
                "none";

              break;
            }


            if (
              node.tagName ===
              "MAIN"
              ||
              node.id ===
              "content"
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
