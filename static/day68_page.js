(function () {
  "use strict";


  if (
    !window.location.pathname.includes(
      "/second-nine-weeks/day/68"
    )
  ) {
    return;
  }


  function ensureDay68Styles() {

    if (
      document.getElementById(
        "scienceStudioDay68Styles"
      )
    ) {
      return;
    }


    const link =
      document.createElement(
        "link"
      );


    link.id =
      "scienceStudioDay68Styles";


    link.rel =
      "stylesheet";


    link.href =
      "/static/day59_page.css?v=59.68b";


    document.head.appendChild(
      link
    );
  }


  ensureDay68Styles();


  function start() {

    let observer = null;


    function ready() {

      return Array
        .from(
          document.querySelectorAll(
            "h1,h2,h3,h4"
          )
        )
        .some(
          function (heading) {

            return (
              (
                heading.textContent || ""
              )
              .toLowerCase()
              .includes(
                "vocabulary anchor chart"
              )
            );
          }
        );
    }


    function attempt() {

      if (
        document.getElementById(
          "scienceStudioDay68"
        )
      ) {

        if (observer) {
          observer.disconnect();
        }

        return;
      }


      if (!ready()) {
        return;
      }


      try {

        buildDay68();

        console.log(
          "Science Studio Day 68 custom lesson loaded."
        );

      } catch (error) {

        console.error(
          "Day 68 custom lesson error:",
          error
        );
      }
    }


    [
      0,
      250,
      600,
      1000,
      1600,
      2400,
      3400,
      4800
    ].forEach(
      function (delay) {

        setTimeout(
          attempt,
          delay
        );
      }
    );


    observer =
      new MutationObserver(
        attempt
      );


    observer.observe(
      document.documentElement,
      {
        childList: true,
        subtree: true
      }
    );


    setTimeout(
      function () {

        if (observer) {
          observer.disconnect();
        }

      },
      7000
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


  function buildDay68() {

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


    hideGenericSections();


    const top =
      document.createElement(
        "div"
      );


    top.id =
      "scienceStudioDay68";


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


    lower.id =
      "scienceStudioDay68Lower";


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
        🏊 Phenomenon Mission
      </div>

      <h2>
        How Deep Is the Pool?
      </h2>

      <div class="d59-unit">
        Day 68 • Apparent Depth
      </div>

      <div class="d59-image">

        <img
          src="/static/phenomenon/day68_pool_apparent_depth.svg"
          alt="Underwater object showing actual depth and apparent depth"
        >

      </div>

      <div class="d59-focus">

        <strong>
          ❓ Mystery Question:
        </strong>

        Why does the underwater object
        appear closer to the surface?

      </div>

      <div class="d59-grid2">

        <div class="d59-box">

          <strong>
            👀 Notice
          </strong>

          The actual object is deeper
          than its apparent position.

        </div>

        <div class="d59-box">

          <strong>
            🤔 Wonder
          </strong>

          Why does our brain place
          the object higher in the water?

        </div>

        <div class="d59-box">

          <strong>
            💧 Medium Change
          </strong>

          The ray travels
          WATER → AIR.

        </div>

        <div class="d59-box">

          <strong>
            📏 Compare
          </strong>

          Actual depth versus
          apparent depth.

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
            Mission Brief: The Shallow Pool Illusion
          </h2>

          <div class="d59-unit">
            Day 68 • Refraction Through Water
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

          <button class="d59-control d59-back">
            ◀ Back
          </button>

          <button class="d59-control d59-next">
            Next ▶
          </button>

          <button class="d59-control d59-restart">
            Restart
          </button>

        </div>

      </div>

    `;


    activateSlides(
      card,
      [

        {
          icon: "🏊",
          title: "Look Into the Pool",
          main:
            "An underwater object may appear closer to the surface than it really is.",
          caption:
            "This is an apparent-position effect."
        },

        {
          icon: "📏",
          title: "Actual Depth",
          main:
            "Actual depth is the object's real distance below the water surface.",
          caption:
            "This position does not change just because someone looks at it."
        },

        {
          icon: "🔦",
          title: "Light Travels Through Water",
          main:
            "Light from the underwater object travels through the water toward the surface.",
          caption:
            "The ray travels straight while it remains in the same medium."
        },

        {
          icon: "↗️",
          title: "Crossing Into Air",
          main:
            "The ray changes direction when it crosses from water into air.",
          caption:
            "This change in direction is refraction."
        },

        {
          icon: "👁",
          title: "The Observer Sees the Refracted Ray",
          main:
            "The observer receives light after it has changed direction.",
          caption:
            "The object appears to come from a shallower position."
        },

        {
          icon: "📍",
          title: "Apparent Depth",
          main:
            "Apparent depth is how deep the underwater object seems to be.",
          caption:
            "It can be different from the actual depth."
        },

        {
          icon: "⭐",
          title: "STAAR Strategy",
          main:
            "When an underwater object appears shifted, look for refraction at the water-air boundary.",
          caption:
            "The object itself did not move."
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
            Steve's Pool Treasure Mystery
          </h2>

          <div class="d59-unit">
            Day 68 • Apparent Depth
          </div>

          <div class="d59-scenario">

            <strong>
              Steve's Scenario:
            </strong>

            <br><br>

            Steve sees a shiny coin
            on the bottom of a clear pool.

            The coin looks close enough
            to reach easily.

            When Steve measures the pool,
            the coin is actually deeper
            than it appeared.

          </div>

          <div class="d59-question">

            <strong>
              STAAR-Style Question:
            </strong>

            <p>
              Why did the coin appear
              closer to the surface?
            </p>

            <button
              class="d59-answer"
              data-answer="A"
            >
              A. Light refracted as it traveled from water into air.
            </button>

            <button
              class="d59-answer"
              data-answer="B"
            >
              B. The coin floated upward when Steve looked at it.
            </button>

            <button
              class="d59-answer"
              data-answer="C"
            >
              C. The water became magnetic.
            </button>

            <button
              class="d59-answer"
              data-answer="D"
            >
              D. The coin became a light source.
            </button>

            <div class="d59-answer-row">

              <button class="d59-check">
                Check Answer
              </button>

              <button class="d59-reset">
                Reset
              </button>

            </div>

            <div class="d59-feedback"></div>

          </div>

        </div>

      </div>

    `;


    activateSteve(card);

    return card;
  }


  function lowerLesson() {

    const lower =
      document.createElement(
        "div"
      );


    lower.innerHTML = `

      <section class="d59-card">

        <h2>
          🔔 Bell Ringer — How Deep Is It?
        </h2>

        <div class="d59-box">

          A student looks into
          a clear swimming pool.

          <br><br>

          The bottom appears closer
          than the measured depth.

          <ol>

            <li>
              What two media does the light travel through?
            </li>

            <li>
              Where does the ray change direction?
            </li>

            <li>
              Which is the real measurement:
              actual depth or apparent depth?
            </li>

          </ol>

        </div>

      </section>


      <section class="d59-card">

        <h2>
          👨‍🏫 Mini Lesson — Actual Depth vs. Apparent Depth
        </h2>

        <div class="d59-grid2">

          <div class="d59-box">

            <strong>
              📏 Actual Depth
            </strong>

            The real distance
            below the water surface.

          </div>

          <div class="d59-box">

            <strong>
              👁 Apparent Depth
            </strong>

            The depth at which
            the object seems to be.

          </div>

          <div class="d59-box">

            <strong>
              💧 Water
            </strong>

            The first medium
            in today's ray path.

          </div>

          <div class="d59-box">

            <strong>
              🌬️ Air
            </strong>

            The second medium
            before the ray reaches the observer.

          </div>

        </div>

        <div class="d59-warning">

          <strong>
            Follow the Light:
          </strong>

          <br><br>

          underwater object

          → WATER

          → water-air BOUNDARY

          → REFRACTION

          → AIR

          → OBSERVER

        </div>

      </section>


      <section class="d59-card">

        <h2>
          📓 Science Notebook — Depth Diagram
        </h2>

        <div class="d59-box">

          Draw a side-view model of a pool.

          <br><br>

          Include and label:

          <ul>

            <li>air,</li>

            <li>water,</li>

            <li>water-air boundary,</li>

            <li>actual underwater object,</li>

            <li>apparent object position,</li>

            <li>actual depth,</li>

            <li>apparent depth,</li>

            <li>refracted light ray.</li>

          </ul>

        </div>

        <div class="d59-focus">

          <strong>
            Complete the Comparison:
          </strong>

          The object's actual depth is
          ______________________________.

          The object's apparent depth is
          ______________________________.

        </div>

      </section>


      <section class="d59-card">

        <h2>
          🤝 Guided Practice — Trace the Pool Ray
        </h2>

        <div class="d59-box">

          <ol>

            <li>
              Locate the actual underwater object.
            </li>

            <li>
              Trace the ray through water.
            </li>

            <li>
              Circle the water-air boundary.
            </li>

            <li>
              Trace the refracted ray to the observer.
            </li>

            <li>
              Mark where the object appears to be.
            </li>

            <li>
              Compare actual and apparent depth.
            </li>

          </ol>

        </div>

      </section>


      <section class="d59-card d59-cream">

        <div class="d59-badge">
          🏊 Interactive Lab
        </div>

        <h2>
          Pool Refraction Lab:
          Actual Depth vs. Apparent Depth
        </h2>

        <p>
          Change the real depth of the underwater object
          and move the observer.

          Then reveal the light-ray path
          to explain the apparent-depth illusion.
        </p>

        <div class="d59-required">

          <div>
            🌊
            <strong>Actual Depth</strong>
          </div>

          <div>
            👁
            <strong>Observer</strong>
          </div>

          <div>
            📍
            <strong>Apparent Depth</strong>
          </div>

        </div>

        <div class="d59-box">

          <strong>
            Your Investigation
          </strong>

          <ol>

            <li>Test shallow depth.</li>

            <li>Test medium depth.</li>

            <li>Test deep depth.</li>

            <li>Move the observer.</li>

            <li>Reveal actual depth.</li>

            <li>Reveal the ray path.</li>

            <li>Compare actual and apparent positions.</li>

          </ol>

        </div>

        <div class="d59-success">

          🔎
          <strong>
            Evidence Goal:
          </strong>

          Prove that refraction can make
          an underwater object appear
          closer to the surface.

        </div>

        <a
          href="/labs/pool-refraction?mission=day68"
          class="d59-lab-button"
        >
          🏊 Start Pool Refraction Lab
        </a>

      </section>


      <section class="d59-card">

        <div class="d59-badge">
          ⭐ STAAR Practice
        </div>

        <h2>
          Apparent Depth Evidence
        </h2>

        ${question(
          1,
          "A student looks into a clear swimming pool and the bottom appears closer to the surface than it really is. Which behavior of light best explains this observation?",
          [
            "A. Refraction",
            "B. Magnetism",
            "C. Electrical conduction",
            "D. Sound vibration"
          ],
          "A",
          "Light refracts as it moves from water into air, changing the apparent position."
        )}

        ${question(
          2,
          "Which statement correctly compares actual depth and apparent depth in a pool?",
          [
            "A. Actual depth is the real depth, while apparent depth is how deep the object seems to be.",
            "B. Actual depth always changes when an observer moves.",
            "C. Apparent depth is the real measured depth.",
            "D. Actual depth only exists when light is present."
          ],
          "A",
          "Actual depth is real position; apparent depth describes the observed position."
        )}

        ${question(
          3,
          "Which observation is evidence that refraction is occurring when a student looks into a lake?",
          [
            "A. An underwater object appears shifted from its actual position.",
            "B. The water becomes magnetic.",
            "C. The object produces sound.",
            "D. The air becomes opaque."
          ],
          "A",
          "An apparent shift is evidence that the light path changed at the water-air boundary."
        )}

      </section>


      <section class="d59-card">

        <h2>
          🎟 Written Exit Ticket
        </h2>

        <p>
          Explain why the bottom of a pool
          can appear closer to the surface
          than it really is.

          Use the words

          <strong>refraction</strong>,
          <strong>actual depth</strong>,
          <strong>apparent depth</strong>,
          <strong>water</strong>,
          and
          <strong>air</strong>.
        </p>

        <textarea
          class="d59-textarea"
          placeholder="The pool appears shallower because..."
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

          What evidence shows that
          the underwater object did not actually move?

        </div>

        <div class="d59-grid3">

          <div>

            <h3>Claim</h3>

            <textarea
              class="d59-textarea"
              placeholder="The underwater object appears..."
            ></textarea>

          </div>

          <div>

            <h3>Evidence</h3>

            <textarea
              class="d59-textarea"
              placeholder="In the Pool Refraction Lab..."
            ></textarea>

          </div>

          <div>

            <h3>Reasoning</h3>

            <textarea
              class="d59-textarea"
              placeholder="This happens because light..."
            ></textarea>

          </div>

        </div>

      </section>


      <section class="d59-card d59-cream">

        <div class="d59-badge d59-blue-badge">
          📘 McGraw Hill Lesson Connection
        </div>

        <h2>
          Refraction in Water
        </h2>

        <div class="d59-box">

          Use district-approved light-energy resources
          to reinforce:

          <ul>

            <li>water as a medium,</li>

            <li>refraction,</li>

            <li>actual depth,</li>

            <li>apparent depth,</li>

            <li>ray diagrams.</li>

          </ul>

          <p>
            Next comes one of the biggest light missions
            in this unit:

            <strong>
              sunlight traveling through a raindrop
              to create a rainbow.
            </strong>
          </p>

        </div>

      </section>

    `;


    activateQuestions(lower);

    return lower;
  }


  function activateSlides(
    card,
    slides
  ) {

    let index = 0;
    let timer = null;


    const icon =
      card.querySelector(".d59-slide-icon");

    const title =
      card.querySelector(".d59-slide-title");

    const main =
      card.querySelector(".d59-slide-main");

    const caption =
      card.querySelector(".d59-slide-caption");

    const number =
      card.querySelector(".d59-number");

    const play =
      card.querySelector(".d59-play");


    function draw() {

      const item =
        slides[index];

      icon.textContent = item.icon;
      title.textContent = item.title;
      main.textContent = item.main;
      caption.textContent = item.caption;

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


    card.querySelector(".d59-back").onclick =
      function () {

        stop();

        index =
          Math.max(
            0,
            index - 1
          );

        draw();
      };


    card.querySelector(".d59-next").onclick =
      function () {

        stop();

        index =
          Math.min(
            slides.length - 1,
            index + 1
          );

        draw();
      };


    card.querySelector(".d59-restart").onclick =
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


  function activateSteve(card) {

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


    card.querySelector(".d59-check").onclick =
      function () {

        if (!selected) {

          feedback.textContent =
            "Choose an answer first.";

          return;
        }


        if (
          selected === "A"
        ) {

          feedback.style.color =
            "#087a35";

          feedback.textContent =
            "Correct! Refraction changed the path of the light before it reached Steve.";

        } else {

          feedback.style.color =
            "#b00020";

          feedback.textContent =
            "Try again. The coin did not actually move. Think about what happened to the light.";
        }
      };


    card.querySelector(".d59-reset").onclick =
      function () {

        selected = null;

        feedback.textContent = "";


        answers.forEach(
          function (button) {

            button.classList.remove(
              "selected"
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


  function activateQuestions(container) {

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
              "#scienceStudioDay68"
            )
            ||
            heading.closest(
              "#scienceStudioDay68Lower"
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
              window.getComputedStyle(node);


            const border =
              Math.max(
                parseFloat(style.borderTopWidth || "0"),
                parseFloat(style.borderRightWidth || "0"),
                parseFloat(style.borderBottomWidth || "0"),
                parseFloat(style.borderLeftWidth || "0")
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


  function section(className) {

    const element =
      document.createElement(
        "section"
      );


    element.className =
      className;


    return element;
  }


  function findCard(text) {

    const target =
      text.toLowerCase();


    const heading =
      Array
        .from(
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
        window.getComputedStyle(node);


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


  function escapeAttribute(value) {

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

})();
