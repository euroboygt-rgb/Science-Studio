(function () {
  "use strict";


  if (
    !window.location.pathname.includes(
      "/second-nine-weeks/day/67"
    )
  ) {
    return;
  }


  function start() {

    let observer = null;


    function lessonReady() {

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


    function tryBuild() {

      if (
        document.getElementById(
          "scienceStudioDay67"
        )
      ) {

        if (observer) {
          observer.disconnect();
        }

        return;
      }


      if (!lessonReady()) {
        return;
      }


      try {

        buildDay67();

        console.log(
          "Science Studio Day 67 custom lesson loaded."
        );

      } catch (error) {

        console.error(
          "Day 67 custom lesson error:",
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
          tryBuild,
          delay
        );
      }
    );


    observer =
      new MutationObserver(
        tryBuild
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
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      start
    );

  } else {

    start();
  }


  function buildDay67() {

    document
      .getElementById(
        "scienceStudioDay67"
      )
      ?.remove();


    document
      .getElementById(
        "scienceStudioDay67Lower"
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
      "scienceStudioDay67";


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
        💧 Phenomenon Mission
      </div>

      <h2>
        Did the Pencil Break?
      </h2>

      <div class="d59-unit">
        Day 67 • Water Refraction
      </div>


      <div class="d59-image">

        <img
          src="/static/phenomenon/day67_broken_pencil.svg"
          alt="Pencil appearing bent where it enters water"
        >

      </div>


      <div class="d59-focus">

        <strong>
          ❓ Mystery Question:
        </strong>

        Did the pencil bend,
        or did the light bend?

      </div>


      <div class="d59-grid2">

        <div class="d59-box">

          <strong>
            👀 Notice
          </strong>

          The pencil appears disconnected
          or bent at the water surface.

        </div>


        <div class="d59-box">

          <strong>
            🤔 Wonder
          </strong>

          The pencil is solid,
          so why does it look broken?

        </div>


        <div class="d59-box">

          <strong>
            💧 Medium Change
          </strong>

          Light travels
          WATER → AIR.

        </div>


        <div class="d59-box">

          <strong>
            🔍 Evidence
          </strong>

          Compare actual position
          with apparent position.

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
            Mission Brief: The Broken Pencil Mystery
          </h2>

          <div class="d59-unit">
            Day 67 • Refraction Through Water
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
          icon: "✏️",
          title: "A Straight Pencil",
          main:
            "The pencil begins as one straight solid object.",
          caption:
            "The pencil itself does not change shape."
        },

        {
          icon: "💧",
          title: "Part of the Pencil Enters Water",
          main:
            "The underwater part is now viewed through a different medium.",
          caption:
            "Water and air are different media."
        },

        {
          icon: "🔦",
          title: "Light Leaves the Underwater Pencil",
          main:
            "Light travels from the underwater part of the pencil through the water.",
          caption:
            "The ray travels straight while it stays in the same medium."
        },

        {
          icon: "↗️",
          title: "The Ray Reaches the Surface",
          main:
            "At the water-air boundary, the light changes direction.",
          caption:
            "This is refraction."
        },

        {
          icon: "👁",
          title: "The Observer Receives the Refracted Light",
          main:
            "The observer's eyes receive the light after it has changed direction.",
          caption:
            "The underwater part appears shifted."
        },

        {
          icon: "📍",
          title: "Actual vs. Apparent Position",
          main:
            "The actual position is where the pencil really is. The apparent position is where it seems to be.",
          caption:
            "The difference creates the broken-pencil appearance."
        },

        {
          icon: "⭐",
          title: "STAAR Strategy",
          main:
            "If an object looks shifted through water, look for refraction at the water-air boundary.",
          caption:
            "The object did not physically move."
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
            Steve's Broken Straw Mystery
          </h2>


          <div class="d59-unit">
            Day 67 • Water Refraction
          </div>


          <div class="d59-scenario">

            <strong>
              Steve's Scenario:
            </strong>

            <br><br>

            Steve places a straight straw
            into a clear cup of water.

            The part below the water appears
            shifted away from the top part.

            Steve removes the straw
            and discovers it is still perfectly straight.

          </div>


          <div class="d59-question">

            <strong>
              STAAR-Style Question:
            </strong>

            <p>
              What best explains
              Steve's observation?
            </p>


            <button
              class="d59-answer"
              data-answer="A"
            >
              A. Light refracted as it moved from water into air.
            </button>

            <button
              class="d59-answer"
              data-answer="B"
            >
              B. Water physically bent the straw.
            </button>

            <button
              class="d59-answer"
              data-answer="C"
            >
              C. The straw became magnetic.
            </button>

            <button
              class="d59-answer"
              data-answer="D"
            >
              D. The water became opaque.
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
      "scienceStudioDay67Lower";


    lower.innerHTML = `

      <section class="d59-card">

        <h2>
          🔔 Bell Ringer — Explain the Mystery
        </h2>


        <div class="d59-box">

          A straight pencil is placed
          partly underwater.

          <br><br>

          The pencil appears bent
          at the water surface.

          <ol>

            <li>
              Did the pencil actually bend?
            </li>

            <li>
              What two media is the light traveling through?
            </li>

            <li>
              Where might the light change direction?
            </li>

          </ol>

        </div>

      </section>


      <section class="d59-card">

        <h2>
          👨‍🏫 Mini Lesson — Water Changes What We See
        </h2>


        <div class="d59-grid2">

          <div class="d59-box">

            <strong>
              💧 Water
            </strong>

            A transparent medium
            through which light can travel.

          </div>


          <div class="d59-box">

            <strong>
              🌬️ Air
            </strong>

            A different medium
            above the water.

          </div>


          <div class="d59-box">

            <strong>
              📍 Actual Position
            </strong>

            Where the underwater object
            really is.

          </div>


          <div class="d59-box">

            <strong>
              👁 Apparent Position
            </strong>

            Where the underwater object
            seems to be.

          </div>

        </div>


        <div class="d59-warning">

          <strong>
            Follow the Light:
          </strong>

          <br><br>

          Underwater pencil

          → light through WATER

          → water-air BOUNDARY

          → REFRACTION

          → light through AIR

          → observer's EYES

        </div>

      </section>


      <section class="d59-card">

        <h2>
          📓 Science Notebook — Actual vs. Apparent
        </h2>


        <div class="d59-box">

          Draw a cup with a pencil partly underwater.

          <br><br>

          Use:

          <ul>

            <li>
              a solid line for the apparent pencil,
            </li>

            <li>
              a dashed line for the actual underwater position,
            </li>

            <li>
              arrows for the light-ray path,
            </li>

            <li>
              a circle around the water-air boundary.
            </li>

          </ul>

        </div>


        <div class="d59-focus">

          <strong>
            Complete the Explanation:
          </strong>

          The pencil looks bent because light
          ______________________________
          when it moves from
          ______________________________
          into
          ______________________________.

        </div>

      </section>


      <section class="d59-card">

        <h2>
          🤝 Guided Practice — Follow the Ray
        </h2>


        <div class="d59-box">

          <ol>

            <li>
              Locate the underwater part of the pencil.
            </li>

            <li>
              Trace the ray through the water.
            </li>

            <li>
              Identify the water-air boundary.
            </li>

            <li>
              Trace the refracted ray toward the observer.
            </li>

            <li>
              Compare actual and apparent position.
            </li>

            <li>
              Explain why the pencil only appears bent.
            </li>

          </ol>

        </div>

      </section>


      <section class="d59-card d59-cream">

        <div class="d59-badge">
          💧 Interactive Lab
        </div>


        <h2>
          Broken Pencil Lab:
          Actual Position vs. Apparent Position
        </h2>


        <p>
          Change the viewing angle and pencil depth,
          then reveal the light-ray path
          that creates the broken-pencil illusion.
        </p>


        <div class="d59-required">

          <div>
            👁
            <strong>
              Viewing Angle
            </strong>
          </div>

          <div>
            💧
            <strong>
              Water
            </strong>
          </div>

          <div>
            ✏️
            <strong>
              Pencil Depth
            </strong>
          </div>

        </div>


        <div class="d59-box">

          <strong>
            Your Investigation
          </strong>

          <ol>

            <li>
              Observe the apparent pencil first.
            </li>

            <li>
              Change the observer's viewing angle.
            </li>

            <li>
              Change the pencil depth.
            </li>

            <li>
              Reveal the actual pencil position.
            </li>

            <li>
              Reveal the light rays.
            </li>

            <li>
              Identify exactly where refraction occurs.
            </li>

          </ol>

        </div>


        <div class="d59-success">

          🔎
          <strong>
            Evidence Goal:
          </strong>

          Prove that the pencil remains straight
          while refraction changes
          where the underwater part appears to be.

        </div>


        <a
          href="/labs/water-refraction?mission=day67"
          class="d59-lab-button"
        >
          💧 Start Broken Pencil Lab
        </a>

      </section>


      <section class="d59-card">

        <div class="d59-badge">
          ⭐ STAAR Practice
        </div>


        <h2>
          Water Refraction Evidence
        </h2>


        ${question(
          1,
          "A student places a straight pencil into a clear cup of water. The pencil appears bent at the water surface. Which behavior of light best explains this observation?",
          [
            "A. Refraction",
            "B. Magnetism",
            "C. Electrical conduction",
            "D. Sound vibration"
          ],
          "A",
          "Light refracts at the water-air boundary, causing the underwater part to appear shifted."
        )}


        ${question(
          2,
          "Why can the underwater part of a pencil appear to be in a different location from its actual position?",
          [
            "A. Light refracts as it crosses the water-air boundary.",
            "B. The pencil becomes magnetic underwater.",
            "C. Water physically breaks the pencil.",
            "D. The pencil begins producing light."
          ],
          "A",
          "The refracted ray reaches the observer along a changed path, producing an apparent position."
        )}


        ${question(
          3,
          "A student changes where she stands while looking at a pencil in water. The apparent bend changes. Which statement best explains the observation?",
          [
            "A. Changing the viewing angle changes the refracted path reaching the observer.",
            "B. The pencil changes shape whenever the student moves.",
            "C. The water becomes opaque.",
            "D. The pencil stops interacting with light."
          ],
          "A",
          "Different viewing positions receive light along different refracted paths."
        )}

      </section>


      <section class="d59-card">

        <h2>
          🎟 Written Exit Ticket
        </h2>


        <p>
          Explain why a straight pencil
          can look bent when part of it is underwater.

          Use the words

          <strong>water</strong>,
          <strong>air</strong>,
          <strong>boundary</strong>,
          <strong>refraction</strong>,
          and
          <strong>apparent position</strong>.
        </p>


        <textarea
          class="d59-textarea"
          placeholder="The pencil looks bent because..."
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

          What evidence proves
          that the pencil did not actually bend?
        </div>


        <div class="d59-grid3">

          <div>

            <h3>Claim</h3>

            <textarea
              class="d59-textarea"
              placeholder="The pencil appears bent because..."
            ></textarea>

          </div>


          <div>

            <h3>Evidence</h3>

            <textarea
              class="d59-textarea"
              placeholder="In the Broken Pencil Lab..."
            ></textarea>

          </div>


          <div>

            <h3>Reasoning</h3>

            <textarea
              class="d59-textarea"
              placeholder="This demonstrates refraction because..."
            ></textarea>

          </div>

        </div>

      </section>


      <section class="d59-card d59-cream">

        <div class="d59-badge d59-blue-badge">
          📘 McGraw Hill Lesson Connection
        </div>


        <h2>
          Light Through Water
        </h2>


        <div class="d59-box">

          Use district-approved light-energy resources
          to reinforce:

          <ul>

            <li>water as a medium,</li>

            <li>the water-air boundary,</li>

            <li>refraction,</li>

            <li>actual versus apparent position,</li>

            <li>ray diagrams.</li>

          </ul>


          <p>
            Next, we will use the same idea
            on a much larger scale:

            <strong>
              looking into a swimming pool or lake.
            </strong>
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


    card.querySelector(".d59-check").onclick =
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
            "Correct! Light refracted as it moved from water into air.";

        } else {

          feedback.style.color =
            "#b00020";


          feedback.textContent =
            "Try again. Remember that the straw was still straight when Steve removed it.";
        }
      };


    card.querySelector(".d59-reset").onclick =
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
              "#scienceStudioDay67"
            )
            ||
            heading.closest(
              "#scienceStudioDay67Lower"
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
                  headingText.endsWith(title)
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
            .includes(target)
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
