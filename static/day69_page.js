(function () {
  "use strict";


  const currentPath =
    window.location.pathname;


  if (
    !currentPath.endsWith(
      "/day/69"
    )
  ) {
    return;
  }


  console.log(
    "DAY 69 DIRECT PAGE SCRIPT STARTED"
  );


  function normalize(value) {

    return String(value || "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  }


  function headings() {

    return Array.from(
      document.querySelectorAll(
        "h1,h2,h3,h4"
      )
    );
  }


  function headingContaining(text) {

    const target =
      normalize(text);


    return headings().find(
      function (heading) {

        return normalize(
          heading.textContent
        ).includes(
          target
        );
      }
    );
  }


  function cardForHeading(
    heading
  ) {

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


      if (
        node.id ===
        "scienceStudioDay69ForceTop"
        ||
        node.id ===
        "scienceStudioDay69ForceLower"
      ) {

        return node;
      }


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
            style.borderBottomWidth || "0"
          ),
          parseFloat(
            style.borderLeftWidth || "0"
          ),
          parseFloat(
            style.borderRightWidth || "0"
          )
        );


      const radius =
        parseFloat(
          style.borderTopLeftRadius || "0"
        );


      if (
        rect.width >= 450
        &&
        rect.height >= 55
        &&
        rect.height <= 1300
        &&
        (
          border >= 1
          ||
          radius >= 5
        )
      ) {

        return node;
      }


      if (
        node.tagName === "MAIN"
      ) {
        break;
      }
    }


    return heading.parentElement;
  }


  function findCard(
    title
  ) {

    return cardForHeading(
      headingContaining(
        title
      )
    );
  }


  function ensureStyles() {

    if (
      document.getElementById(
        "day69DirectStyles"
      )
    ) {
      return;
    }


    const link =
      document.createElement(
        "link"
      );


    link.id =
      "day69DirectStyles";

    link.rel =
      "stylesheet";

    link.href =
      "/static/day59_page.css?v=69-direct-1";


    document.head.appendChild(
      link
    );
  }


  function makeSection(
    className
  ) {

    const section =
      document.createElement(
        "section"
      );


    section.className =
      className;


    return section;
  }


  function buildPhenomenon() {

    const section =
      makeSection(
        "d59-card d59-cream"
      );


    section.innerHTML = `

      <div class="d59-badge">
        🌈 Phenomenon Mission
      </div>

      <h2>
        What Happens Inside a Raindrop?
      </h2>

      <div class="d59-unit">
        Day 69 • Rainbow Science
      </div>


      <div class="d59-image">

        <img
          src="/static/phenomenon/day69_raindrop_rainbow.svg"
          alt="Sunlight refracting and reflecting inside a raindrop"
        >

      </div>


      <div class="d59-focus">

        <strong>
          ❓ Mystery Question:
        </strong>

        How can white sunlight enter
        one raindrop and leave as
        different colors?

      </div>


      <div class="d59-grid2">

        <div class="d59-box">

          <strong>
            1️⃣ Refract In
          </strong>

          Sunlight changes direction
          as it travels from air
          into water.

        </div>


        <div class="d59-box">

          <strong>
            2️⃣ Reflect Inside
          </strong>

          Light reflects from
          an inside surface
          of the raindrop.

        </div>


        <div class="d59-box">

          <strong>
            3️⃣ Refract Out
          </strong>

          Light changes direction again
          as it travels from water
          back into air.

        </div>


        <div class="d59-box">

          <strong>
            4️⃣ Spectrum
          </strong>

          The colors contained
          in white light leave
          along different paths.

        </div>

      </div>

    `;


    return section;
  }


  function buildMissionBrief() {

    const section =
      makeSection(
        "d59-card d59-cream"
      );


    section.innerHTML = `

      <div class="d59-header">

        <div>

          <div class="d59-badge">
            🎬 Mission Brief
          </div>

          <h2>
            Journey Through a Raindrop
          </h2>

          <div class="d59-unit">
            Day 69 • Lesson Explanation
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
        icon: "☀️",
        title: "White Sunlight",
        main:
          "Sunlight may look white, but it contains the colors of visible light.",
        caption:
          "The colors begin the journey together."
      },

      {
        icon: "💧",
        title: "The Raindrop",
        main:
          "A raindrop is water surrounded by air.",
        caption:
          "The light is about to cross from one medium into another."
      },

      {
        icon: "↘️",
        title: "Step 1: Refraction In",
        main:
          "Sunlight changes direction as it travels from air into water.",
        caption:
          "Different colors begin bending by slightly different amounts."
      },

      {
        icon: "🪞",
        title: "Step 2: Internal Reflection",
        main:
          "The light reaches the inside back surface of the droplet and reflects.",
        caption:
          "The light remains inside the water."
      },

      {
        icon: "↗️",
        title: "Step 3: Refraction Out",
        main:
          "The light changes direction again as it leaves the water and returns to air.",
        caption:
          "Refraction happens a second time."
      },

      {
        icon: "🌈",
        title: "Step 4: The Spectrum",
        main:
          "The visible colors leave the droplet along slightly different paths.",
        caption:
          "This separation of colors is called dispersion."
      },

      {
        icon: "🌦️",
        title: "Many Raindrops",
        main:
          "Many water droplets send different colors toward an observer.",
        caption:
          "Together, those droplets create the rainbow we see."
      },

      {
        icon: "⭐",
        title: "Remember the Sequence",
        main:
          "REFRACT IN → REFLECT INSIDE → REFRACT OUT → SPECTRUM",
        caption:
          "Refraction occurs twice."
      }

    ];


    let index = 0;
    let timer = null;


    const icon =
      section.querySelector(
        ".d59-slide-icon"
      );

    const title =
      section.querySelector(
        ".d59-slide-title"
      );

    const main =
      section.querySelector(
        ".d59-slide-main"
      );

    const caption =
      section.querySelector(
        ".d59-slide-caption"
      );

    const number =
      section.querySelector(
        ".d59-number"
      );

    const play =
      section.querySelector(
        ".d59-play"
      );


    function draw() {

      const slide =
        slides[index];


      icon.textContent =
        slide.icon;

      title.textContent =
        slide.title;

      main.textContent =
        slide.main;

      caption.textContent =
        slide.caption;

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


    section
      .querySelector(
        ".d59-back"
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


    section
      .querySelector(
        ".d59-next"
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


    section
      .querySelector(
        ".d59-restart"
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

              } else {

                stop();
              }

            },
            4200
          );
      };


    draw();


    return section;
  }


  function buildSteve() {

    const section =
      makeSection(
        "d59-card d59-blue"
      );


    section.innerHTML = `

      <div class="d59-steve-grid">

        <div class="d59-penguin">
          🐧
        </div>


        <div>

          <div class="d59-badge d59-blue-badge">
            🐧 Steve the Penguin's STAAR Mission
          </div>

          <h2>
            Steve's Rainbow Investigation
          </h2>

          <div class="d59-unit">
            Day 69 • Follow the Light
          </div>


          <div class="d59-scenario">

            <strong>
              Steve's Scenario:
            </strong>

            <br><br>

            Steve observes sunlight
            entering a raindrop.

            The ray bends when it enters,
            changes direction inside the droplet,
            and bends again when it leaves.

          </div>


          <div class="d59-question">

            <strong>
              STAAR-Style Question:
            </strong>

            <p>
              Which sequence best describes
              the light path Steve observed?
            </p>


            <button
              class="d59-answer"
              data-answer="A"
            >
              A. Refract in → reflect inside → refract out
            </button>

            <button
              class="d59-answer"
              data-answer="B"
            >
              B. Reflect in → absorb → reflect out
            </button>

            <button
              class="d59-answer"
              data-answer="C"
            >
              C. Conduct → magnetize → reflect
            </button>

            <button
              class="d59-answer"
              data-answer="D"
            >
              D. Absorb → vibrate → refract
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


    let selected = null;


    const answers =
      Array.from(
        section.querySelectorAll(
          ".d59-answer"
        )
      );


    const feedback =
      section.querySelector(
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


    section
      .querySelector(
        ".d59-check"
      )
      .onclick =
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
            "Correct! Light refracts into the water, reflects inside the droplet, and refracts again when it exits.";

        } else {

          feedback.style.color =
            "#b00020";

          feedback.textContent =
            "Try again. Remember: bend in, bounce inside, bend out.";
        }
      };


    section
      .querySelector(
        ".d59-reset"
      )
      .onclick =
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


    return section;
  }


  function practiceQuestion(
    number,
    prompt,
    choices,
    answer,
    explanation
  ) {

    return `

      <div
        class="d59-practice"
        data-answer="${answer}"
        data-explanation="${explanation}"
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
                data-choice="${choice.charAt(0)}"
                type="button"
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


  function activatePractice(
    root
  ) {

    root
      .querySelectorAll(
        ".d59-practice"
      )
      .forEach(
        function (question) {

          const correct =
            question.dataset.answer;

          const explanation =
            question.dataset.explanation;

          const feedback =
            question.querySelector(
              ".d59-practice-feedback"
            );


          question
            .querySelectorAll(
              ".d59-practice-answer"
            )
            .forEach(
              function (button) {

                button.onclick =
                  function () {

                    if (
                      button.dataset.choice ===
                      correct
                    ) {

                      feedback.style.color =
                        "#087a35";

                      feedback.textContent =
                        "Correct! "
                        +
                        explanation;

                    } else {

                      feedback.style.color =
                        "#b00020";

                      feedback.textContent =
                        "Try again. "
                        +
                        explanation;
                    }
                  };
              }
            );
        }
      );
  }


  function buildLower() {

    const wrapper =
      document.createElement(
        "div"
      );


    wrapper.id =
      "scienceStudioDay69ForceLower";


    wrapper.innerHTML = `

      <section class="d59-card">

        <h2>
          🔔 Bell Ringer — After the Rain
        </h2>

        <div class="d59-box">

          Sunlight appears white,
          but after a rainstorm
          a rainbow may appear.

          <ol>

            <li>
              What medium surrounds a raindrop?
            </li>

            <li>
              What medium is inside the raindrop?
            </li>

            <li>
              What two light behaviors have we already studied
              that could occur in a raindrop?
            </li>

          </ol>

        </div>

      </section>


      <section class="d59-card">

        <h2>
          👨‍🏫 Mini Lesson — Building a Rainbow
        </h2>


        <div class="d59-grid2">

          <div class="d59-box">

            <strong>
              ☀️ White Light
            </strong>

            Sunlight contains
            many visible colors.

          </div>


          <div class="d59-box">

            <strong>
              ↘️ Refraction
            </strong>

            Light changes direction
            when it crosses between
            air and water.

          </div>


          <div class="d59-box">

            <strong>
              🪞 Internal Reflection
            </strong>

            Light reflects from
            an inside surface
            of the raindrop.

          </div>


          <div class="d59-box">

            <strong>
              🌈 Dispersion
            </strong>

            White light separates
            into visible colors.

          </div>

        </div>


        <div class="d59-warning">

          <strong>
            Rainbow Sequence
          </strong>

          <br><br>

          ☀️ WHITE SUNLIGHT

          → ↘️ REFRACT IN

          → 🪞 REFLECT INSIDE

          → ↗️ REFRACT OUT

          → 🌈 SPECTRUM

        </div>

      </section>


      <section class="d59-card">

        <h2>
          📓 Science Notebook — Journey Through a Raindrop
        </h2>

        <div class="d59-box">

          Draw one large raindrop.

          <br><br>

          Number and label:

          <ol>

            <li>
              Refraction entering water
            </li>

            <li>
              Internal reflection
            </li>

            <li>
              Refraction leaving water
            </li>

            <li>
              Spectrum leaving the droplet
            </li>

          </ol>

        </div>


        <div class="d59-focus">

          <strong>
            Complete the Science Rule:
          </strong>

          <br><br>

          Refraction happens
          __________ times.

          <br><br>

          Reflection happens
          ______________________________.

        </div>

      </section>


      <section class="d59-card d59-cream">

        <div class="d59-badge">
          🌈 Interactive Lab
        </div>

        <h2>
          Raindrop Rainbow Lab:
          Follow the Light
        </h2>

        <p>
          Reveal the path of sunlight
          through one raindrop
          one step at a time.
        </p>


        <div class="d59-required">

          <div>
            ☀️
            <strong>
              Sunlight
            </strong>
          </div>

          <div>
            💧
            <strong>
              Water Droplet
            </strong>
          </div>

          <div>
            🌈
            <strong>
              Spectrum
            </strong>
          </div>

        </div>


        <div class="d59-box">

          <strong>
            Your Mission
          </strong>

          <ol>

            <li>
              Reveal refraction into the droplet.
            </li>

            <li>
              Reveal reflection inside the droplet.
            </li>

            <li>
              Reveal refraction back into air.
            </li>

            <li>
              Reveal the separated colors.
            </li>

            <li>
              Explain the complete sequence.
            </li>

          </ol>

        </div>


        <div class="d59-success">

          🌈
          <strong>
            Evidence Goal:
          </strong>

          Explain why a rainbow requires
          both
          <strong>refraction</strong>
          and
          <strong>reflection</strong>.

        </div>


        <a
          class="d59-lab-button"
          href="/labs/raindrop-rainbow?mission=day69"
        >
          🌈 Start Raindrop Rainbow Lab
        </a>

      </section>


      <section class="d59-card">

        <div class="d59-badge">
          ⭐ STAAR Practice
        </div>

        <h2>
          Rainbow Light Evidence
        </h2>


        ${practiceQuestion(
          1,
          "Sunlight changes direction as it moves from air into a raindrop. Which behavior occurs?",
          [
            "A. Refraction",
            "B. Magnetism",
            "C. Conduction",
            "D. Sound vibration"
          ],
          "A",
          "Light changes direction when it crosses from air into water."
        )}


        ${practiceQuestion(
          2,
          "Light reaches the inside back surface of a raindrop and changes direction while remaining inside the water. Which behavior occurs?",
          [
            "A. Internal reflection",
            "B. Evaporation",
            "C. Conduction",
            "D. Magnetism"
          ],
          "A",
          "The light reflects from an inside surface of the droplet."
        )}


        ${practiceQuestion(
          3,
          "Which sequence correctly describes the light path through a raindrop that contributes to a rainbow?",
          [
            "A. Refraction in → reflection inside → refraction out",
            "B. Reflection in → absorption → reflection out",
            "C. Conduction → reflection → magnetism",
            "D. Absorption → sound → refraction"
          ],
          "A",
          "A rainbow ray refracts entering water, reflects inside, and refracts again as it exits."
        )}

      </section>


      <section class="d59-card">

        <h2>
          🎟 Written Exit Ticket
        </h2>

        <p>
          Explain how sunlight travels
          through a raindrop.

          Use the words
          <strong>refraction</strong>,
          <strong>reflection</strong>,
          <strong>water</strong>,
          <strong>air</strong>,
          and
          <strong>spectrum</strong>.
        </p>

        <textarea
          class="d59-textarea"
          placeholder="First, sunlight..."
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

          How does one raindrop
          change the path of sunlight?

        </div>


        <div class="d59-grid3">

          <div>

            <h3>
              Claim
            </h3>

            <textarea
              class="d59-textarea"
              placeholder="A raindrop changes sunlight by..."
            ></textarea>

          </div>


          <div>

            <h3>
              Evidence
            </h3>

            <textarea
              class="d59-textarea"
              placeholder="In the Raindrop Rainbow Lab..."
            ></textarea>

          </div>


          <div>

            <h3>
              Reasoning
            </h3>

            <textarea
              class="d59-textarea"
              placeholder="This evidence shows..."
            ></textarea>

          </div>

        </div>

      </section>


      <section class="d59-card d59-cream">

        <div class="d59-badge d59-blue-badge">
          📘 McGraw Hill Lesson Connection
        </div>

        <h2>
          Light, Water, and Rainbows
        </h2>

        <div class="d59-box">

          Reinforce:

          <ul>

            <li>refraction,</li>

            <li>reflection,</li>

            <li>water as a medium,</li>

            <li>white light,</li>

            <li>visible spectrum.</li>

          </ul>

        </div>

      </section>

    `;


    activatePractice(
      wrapper
    );


    return wrapper;
  }


  function hideOldGenericCards() {

    const titles = [

      "bell ringer",
      "mini lesson",
      "science notebook",
      "guided practice",
      "lab / investigation",
      "lab notebook",
      "staar practice",
      "written exit ticket",
      "explain your thinking",
      "mcgraw hill connection"

    ];


    headings().forEach(
      function (heading) {

        if (
          heading.closest(
            "#scienceStudioDay69ForceTop"
          )
          ||
          heading.closest(
            "#scienceStudioDay69ForceLower"
          )
        ) {
          return;
        }


        const value =
          normalize(
            heading.textContent
          );


        if (
          !titles.some(
            function (title) {

              return value.includes(
                title
              );
            }
          )
        ) {
          return;
        }


        const card =
          cardForHeading(
            heading
          );


        if (
          card
          &&
          card !== document.body
          &&
          card.tagName !== "MAIN"
        ) {

          card.style.display =
            "none";
        }
      }
    );
  }


  function build() {

    if (
      document.getElementById(
        "scienceStudioDay69ForceTop"
      )
    ) {
      return true;
    }


    const vocabulary =
      findCard(
        "Vocabulary Anchor Chart"
      );


    const learningTarget =
      findCard(
        "Learning Target"
      );


    if (
      !vocabulary
      ||
      !learningTarget
    ) {

      return false;
    }


    ensureStyles();


    const top =
      document.createElement(
        "div"
      );


    top.id =
      "scienceStudioDay69ForceTop";


    top.appendChild(
      buildPhenomenon()
    );


    top.appendChild(
      buildMissionBrief()
    );


    top.appendChild(
      buildSteve()
    );


    vocabulary.parentNode.insertBefore(
      top,
      vocabulary
    );


    const lower =
      buildLower();


    learningTarget.insertAdjacentElement(
      "afterend",
      lower
    );


    hideOldGenericCards();


    [
      250,
      600,
      1200,
      2200,
      4000
    ].forEach(
      function (delay) {

        setTimeout(
          hideOldGenericCards,
          delay
        );
      }
    );


    document.body.setAttribute(
      "data-day69-finished",
      "yes"
    );


    console.log(
      "DAY 69 FINISHED PAGE BUILT SUCCESSFULLY"
    );


    return true;
  }


  function start() {

    let count = 0;


    const timer =
      setInterval(
        function () {

          count += 1;


          if (
            build()
            ||
            count >= 80
          ) {

            clearInterval(
              timer
            );
          }

        },
        200
      );


    setTimeout(
      build,
      50
    );


    window.addEventListener(
      "load",
      build,
      {
        once: true
      }
    );
  }


  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      start,
      {
        once: true
      }
    );

  } else {

    start();
  }

})();
