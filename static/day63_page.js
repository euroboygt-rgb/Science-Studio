(function () {
  "use strict";


  if (
    !window.location.pathname.includes(
      "/second-nine-weeks/day/63"
    )
  ) {
    return;
  }


  function start() {

    installDay63Styles();

    setTimeout(
      buildDay63,
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


  function installDay63Styles() {

    if (
      document.getElementById(
        "scienceStudioDay63Style"
      )
    ) {
      return;
    }


    const style =
      document.createElement(
        "style"
      );


    style.id =
      "scienceStudioDay63Style";


    style.textContent = `

      .d63-light-lab {
        margin-top: 14px;
        padding: 16px;
        border: 3px solid #171717;
        border-radius: 14px;
        background: #10172c;
      }


      .d63-lab-controls {
        display: grid;
        grid-template-columns: repeat(3,minmax(0,1fr));
        gap: 9px;
        margin-bottom: 12px;
      }


      .d63-lab-choice {
        padding: 10px;
        border: 3px solid #171717;
        border-radius: 10px;
        background: #fff;
        font-weight: 900;
        cursor: pointer;
      }


      .d63-lab-choice.active {
        background: #fff3ad;
        outline: 4px solid #7131cc;
      }


      .d63-lab-svg-wrap {
        overflow: hidden;
        border: 3px solid #171717;
        border-radius: 12px;
        background: #071120;
      }


      .d63-lab-svg {
        display: block;
        width: 100%;
        height: auto;
      }


      .d63-test-beam {
        display: block;
        width: min(340px,100%);
        margin: 14px auto 0;
        padding: 12px 18px;
        border: 3px solid #171717;
        border-radius: 10px;
        background: #ffe45d;
        font-size: 1rem;
        font-weight: 900;
        cursor: pointer;
      }


      .d63-lab-result {
        display: none;
        margin-top: 13px;
        padding: 13px;
        border: 3px solid #171717;
        border-radius: 10px;
        background: #fff;
        font-weight: 800;
        line-height: 1.45;
      }


      .d63-lab-result.show {
        display: block;
      }


      .d63-evidence-grid {
        display: grid;
        grid-template-columns: repeat(3,minmax(0,1fr));
        gap: 9px;
        margin-top: 12px;
      }


      .d63-evidence-card {
        padding: 11px;
        border: 3px solid #171717;
        border-radius: 10px;
        background: #fff;
        text-align: center;
      }


      .d63-evidence-card strong {
        display: block;
        margin-bottom: 5px;
      }


      .d63-ray-key {
        margin-top: 11px;
        padding: 10px;
        border: 3px solid #171717;
        border-radius: 10px;
        background: #eaf6ff;
      }


      @media (max-width:760px) {

        .d63-lab-controls,
        .d63-evidence-grid {
          grid-template-columns: 1fr;
        }
      }

    `;


    document.head.appendChild(
      style
    );
  }


  function buildDay63() {

    document.getElementById(
      "scienceStudioDay63"
    )?.remove();


    document.getElementById(
      "scienceStudioDay63Lower"
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
        "Day 63: Vocabulary Anchor Chart not found."
      );

      return;
    }


    const top =
      document.createElement(
        "div"
      );


    top.id =
      "scienceStudioDay63";


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


    activateLightLab(
      lower
    );


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
        Can Light Turn the Corner?
      </h2>

      <div class="d59-unit">
        Day 63 • Light Travels in a Straight Line
      </div>


      <div class="d59-image">

        <img
          src="/static/phenomenon/day63_light_straight_line.svg"
          alt="Flashlight shining through three aligned openings toward a target"
        >

      </div>


      <div class="d59-focus">

        <strong>
          ❓ Focus Question:
        </strong>

        Why must all three openings
        be lined up for the light
        to reach the target?

      </div>


      <div class="d59-grid2">

        <div class="d59-box">

          <strong>
            👀 Notice
          </strong>

          The openings are positioned
          along the same line.

        </div>


        <div class="d59-box">

          <strong>
            🤔 Wonder
          </strong>

          What happens if the middle
          opening moves upward?

        </div>


        <div class="d59-box">

          <strong>
            🔍 Trace It
          </strong>

          Use your finger to trace
          the beam from the flashlight
          to the target.

        </div>


        <div class="d59-box">

          <strong>
            📊 Evidence
          </strong>

          Notice whether the path
          bends between openings.

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
            Mission Brief: Follow the Light
          </h2>

          <div class="d59-unit">
            Day 63 • Modeling Light Rays
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
        title: "Start With a Light Source",
        main:
          "A flashlight is a light source because it produces light.",
        caption:
          "Light begins at a source."
      },

      {
        icon: "➡️",
        title: "Model the Path",
        main:
          "Scientists use straight arrows called light rays to model the direction light travels.",
        caption:
          "A ray shows direction."
      },

      {
        icon: "📏",
        title: "Straight-Line Travel",
        main:
          "Light travels in a straight line until it interacts with matter.",
        caption:
          "The path does not randomly curve through empty space."
      },

      {
        icon: "⭕⭕⭕",
        title: "Align the Openings",
        main:
          "If three openings lie along the same straight path, light can pass through all three.",
        caption:
          "Alignment provides evidence."
      },

      {
        icon: "⭕⬆️⭕",
        title: "Move One Opening",
        main:
          "Moving one opening away from the straight path blocks the beam.",
        caption:
          "The light does not bend around the card."
      },

      {
        icon: "⬛",
        title: "Opaque Objects",
        main:
          "An opaque object blocks light from passing through it.",
        caption:
          "A blocked path can produce a shadow."
      },

      {
        icon: "⭐",
        title: "STAAR Strategy",
        main:
          "When a question asks how light travels, trace the ray from the source and look for the material it strikes.",
        caption:
          "First identify the straight path."
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
            Steve's Flashlight Challenge
          </h2>

          <div class="d59-unit">
            Day 63 • Evidence About Light
          </div>


          <div class="d59-scenario">

            <strong>
              Steve's Scenario:
            </strong>

            <br><br>

            Steve places three cards between
            a flashlight and a wall.

            Each card has one small hole.

            The wall lights up only when
            all three holes are lined up.

          </div>


          <div class="d59-question">

            <strong>
              STAAR-Style Question:
            </strong>

            <p>
              Which conclusion is best supported
              by Steve's investigation?
            </p>


            <button
              class="d59-answer"
              data-answer="A"
            >
              A. Light travels in a straight line.
            </button>

            <button
              class="d59-answer"
              data-answer="B"
            >
              B. Light always curves around objects.
            </button>

            <button
              class="d59-answer"
              data-answer="C"
            >
              C. Light travels only through cardboard.
            </button>

            <button
              class="d59-answer"
              data-answer="D"
            >
              D. Light stops after passing through one opening.
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
      "scienceStudioDay63Lower";


    lower.innerHTML = `

      <section class="d59-card">

        <h2>
          🔔 Bell Ringer
        </h2>


        <div class="d59-box">

          <p>
            Imagine shining a flashlight
            through three cards.

            Each card has one small hole.
          </p>


          <ol>

            <li>
              Where should the holes be placed
              for the light to reach a target?
            </li>

            <li>
              What would happen if the middle
              opening moved upward?
            </li>

            <li>
              What might this tell us
              about how light travels?
            </li>

          </ol>

        </div>

      </section>


      <section class="d59-card">

        <h2>
          👨‍🏫 Mini Lesson — How Does Light Travel?
        </h2>


        <div class="d59-grid2">

          <div class="d59-box">

            <strong>
              🔦 Light Source
            </strong>

            An object that produces light.

            <br><br>

            Examples:
            Sun, flashlight, lamp.

          </div>


          <div class="d59-box">

            <strong>
              ➡️ Light Ray
            </strong>

            A model showing the direction
            that light travels.

          </div>


          <div class="d59-box">

            <strong>
              📏 Straight-Line Travel
            </strong>

            Light travels in a straight line
            until it interacts with matter.

          </div>


          <div class="d59-box">

            <strong>
              ⬛ Opaque Object
            </strong>

            An object that blocks light
            from passing through.

          </div>

        </div>


        <div class="d59-warning">

          <strong>
            ⭐ Important:
          </strong>

          The light does not curve around
          the cardboard to find the next hole.

          <br><br>

          If the straight path is blocked,
          the beam does not reach the target.

        </div>

      </section>


      <section class="d59-card">

        <h2>
          📓 Science Notebook
        </h2>


        <div class="d59-box">

          <strong>
            Model 1 — Aligned Openings
          </strong>

          <br><br>

          🔦 → ⭕ → ⭕ → ⭕ → 🎯

          <br><br>

          Use a ruler to draw the light ray.

        </div>


        <div class="d59-box">

          <strong>
            Model 2 — Misaligned Opening
          </strong>

          <br><br>

          🔦 → ⭕ → ⬆️⭕ → ⭕ → 🎯

          <br><br>

          Draw where the ray is blocked.

        </div>


        <div class="d59-focus">

          <strong>
            Notebook Rule:
          </strong>

          Light travels ______________________
          until it interacts with ______________________.

        </div>

      </section>


      <section class="d59-card">

        <h2>
          🤝 Guided Practice — Trace the Ray
        </h2>


        <div class="d59-box">

          <ol>

            <li>
              Identify the light source.
            </li>

            <li>
              Use a ruler or finger
              to trace the expected ray.
            </li>

            <li>
              Identify anything in the ray's path.
            </li>

            <li>
              Decide whether the ray
              can continue straight.
            </li>

            <li>
              Use evidence from the model
              to explain your answer.
            </li>

          </ol>

        </div>

      </section>


      <section
        id="day63-light-path-lab"
        class="d59-card d59-cream"
      >

        <div class="d59-badge">
          🔦 Interactive Lab
        </div>

        <h2>
          Light Path Lab:
          Can the Beam Reach the Target?
        </h2>


        <p>
          Choose a setup.

          Make a prediction.

          Then press
          <strong>TEST LIGHT BEAM</strong>.
        </p>


        <div class="d63-light-lab">

          <div class="d63-lab-controls">

            <button
              class="d63-lab-choice active"
              type="button"
              data-state="aligned"
            >
              ✅ Aligned Openings
            </button>


            <button
              class="d63-lab-choice"
              type="button"
              data-state="misaligned"
            >
              ↗️ Move Middle Opening
            </button>


            <button
              class="d63-lab-choice"
              type="button"
              data-state="blocked"
            >
              ⬛ Solid Blocker
            </button>

          </div>


          <div class="d63-lab-svg-wrap">

            <svg
              class="d63-lab-svg"
              viewBox="0 0 1000 360"
            >

              <rect
                width="1000"
                height="360"
                fill="#071120"
              ></rect>


              <!-- flashlight -->

              <rect
                x="55"
                y="145"
                width="125"
                height="70"
                rx="16"
                fill="#7131cc"
                stroke="#ffffff"
                stroke-width="4"
              ></rect>

              <rect
                x="155"
                y="125"
                width="70"
                height="110"
                rx="12"
                fill="#9c6ddd"
                stroke="#ffffff"
                stroke-width="4"
              ></rect>

              <circle
                cx="225"
                cy="180"
                r="38"
                fill="#fff3a0"
                stroke="#ffffff"
                stroke-width="4"
              ></circle>


              <text
                x="110"
                y="188"
                fill="#ffffff"
                text-anchor="middle"
                font-size="17"
                font-weight="900"
              >
                LIGHT
              </text>


              <!-- beam -->

              <line
                id="d63LabBeamGlow"
                x1="265"
                y1="180"
                x2="265"
                y2="180"
                stroke="#ffe45d"
                stroke-width="24"
                stroke-linecap="round"
                opacity=".28"
              ></line>

              <line
                id="d63LabBeam"
                x1="265"
                y1="180"
                x2="265"
                y2="180"
                stroke="#fff6a9"
                stroke-width="8"
                stroke-linecap="round"
              ></line>


              <!-- screen 1 -->

              <rect
                x="365"
                y="65"
                width="38"
                height="230"
                rx="6"
                fill="#55c6ef"
                stroke="#ffffff"
                stroke-width="3"
              ></rect>

              <circle
                id="d63Hole1"
                cx="384"
                cy="180"
                r="22"
                fill="#071120"
                stroke="#ffffff"
                stroke-width="3"
              ></circle>


              <!-- screen 2 -->

              <rect
                id="d63Screen2"
                x="545"
                y="65"
                width="38"
                height="230"
                rx="6"
                fill="#f0831e"
                stroke="#ffffff"
                stroke-width="3"
              ></rect>

              <circle
                id="d63Hole2"
                cx="564"
                cy="180"
                r="22"
                fill="#071120"
                stroke="#ffffff"
                stroke-width="3"
              ></circle>


              <!-- screen 3 -->

              <rect
                x="725"
                y="65"
                width="38"
                height="230"
                rx="6"
                fill="#50b96b"
                stroke="#ffffff"
                stroke-width="3"
              ></rect>

              <circle
                id="d63Hole3"
                cx="744"
                cy="180"
                r="22"
                fill="#071120"
                stroke="#ffffff"
                stroke-width="3"
              ></circle>


              <!-- target -->

              <circle
                id="d63TargetOuter"
                cx="900"
                cy="180"
                r="62"
                fill="#333c50"
                stroke="#ffffff"
                stroke-width="4"
              ></circle>

              <circle
                id="d63TargetMiddle"
                cx="900"
                cy="180"
                r="38"
                fill="#566074"
              ></circle>

              <circle
                id="d63TargetCenter"
                cx="900"
                cy="180"
                r="15"
                fill="#758096"
              ></circle>


              <text
                x="384"
                y="325"
                fill="#ffffff"
                text-anchor="middle"
                font-size="17"
                font-weight="900"
              >
                CARD 1
              </text>

              <text
                x="564"
                y="325"
                fill="#ffffff"
                text-anchor="middle"
                font-size="17"
                font-weight="900"
              >
                CARD 2
              </text>

              <text
                x="744"
                y="325"
                fill="#ffffff"
                text-anchor="middle"
                font-size="17"
                font-weight="900"
              >
                CARD 3
              </text>

              <text
                x="900"
                y="325"
                fill="#ffffff"
                text-anchor="middle"
                font-size="17"
                font-weight="900"
              >
                TARGET
              </text>

            </svg>

          </div>


          <button
            class="d63-test-beam"
            type="button"
          >
            🔦 TEST LIGHT BEAM
          </button>


          <div class="d63-lab-result"></div>

        </div>


        <div class="d63-evidence-grid">

          <div class="d63-evidence-card">

            <strong>
              Trial 1
            </strong>

            Aligned openings

            <br>

            Target reached? _____

          </div>


          <div class="d63-evidence-card">

            <strong>
              Trial 2
            </strong>

            Middle opening moved

            <br>

            Target reached? _____

          </div>


          <div class="d63-evidence-card">

            <strong>
              Trial 3
            </strong>

            Opaque blocker

            <br>

            Target reached? _____

          </div>

        </div>


        <div class="d63-ray-key">

          <strong>
            🧠 Evidence Question:
          </strong>

          What pattern across the three trials
          demonstrates that light travels
          in a straight line?

        </div>

      </section>


      <section class="d59-card">

        <div class="d59-badge">
          ⭐ STAAR Practice
        </div>

        <h2>
          Light Path Evidence
        </h2>


        ${question(
          1,
          "A student shines a flashlight toward three cards. Each card has one small hole. Light reaches a screen only when all three holes are lined up. Which statement is best supported?",
          [
            "A. Light travels in a straight line.",
            "B. Light always travels around objects.",
            "C. Light moves only through opaque materials.",
            "D. Light stops after passing through one opening."
          ],
          "A",
          "The aligned openings provide one straight path from the flashlight to the screen."
        )}


        ${question(
          2,
          "A flashlight shines toward an opaque book. A dark region forms behind the book. Which explanation best describes why?",
          [
            "A. The book creates new light.",
            "B. The book blocks light traveling along its path.",
            "C. The light curves around the entire book.",
            "D. The book changes light into sound."
          ],
          "B",
          "An opaque object blocks light traveling along its path, creating a shadowed region behind it."
        )}


        ${question(
          3,
          "Which model best represents light traveling from a flashlight toward a wall before it interacts with the wall?",
          [
            "A. A straight ray extending from the flashlight toward the wall",
            "B. A spiral moving from the flashlight toward the wall",
            "C. A ray randomly changing direction in empty space",
            "D. A circle remaining around the flashlight"
          ],
          "A",
          "A straight ray correctly models the direction light travels before interacting with another material."
        )}

      </section>


      <section class="d59-card">

        <h2>
          🎟 Written Exit Ticket
        </h2>


        <p>
          Three cards each contain one hole.

          Light passes through all three
          only when the holes are lined up.

          Explain how this provides evidence
          that light travels in a straight line.
        </p>


        <textarea
          class="d59-textarea"
          placeholder="This is evidence that light travels in a straight line because..."
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
          how light travels?
        </div>


        <div class="d59-grid3">

          <div>

            <h3>Claim</h3>

            <textarea
              class="d59-textarea"
              placeholder="Light travels..."
            ></textarea>

          </div>


          <div>

            <h3>Evidence</h3>

            <textarea
              class="d59-textarea"
              placeholder="In the Light Path Lab..."
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
            Light Energy
          </h3>


          <p>
            Use the district-approved McGraw Hill
            light-energy materials to reinforce
            the straight-line model of light.
          </p>


          <strong>
            Today's Science Studio focus:
          </strong>


          <ul>

            <li>light sources,</li>

            <li>light rays,</li>

            <li>straight-line travel,</li>

            <li>opaque blockers,</li>

            <li>shadows,</li>

            <li>using models as evidence.</li>

          </ul>


          <p>
            Reflection, refraction, and absorption
            will be investigated in upcoming missions.
          </p>

        </div>

      </section>

    `;


    activateQuestions(
      lower
    );


    return lower;
  }


  function activateLightLab(
    container
  ) {

    const lab =
      container.querySelector(
        "#day63-light-path-lab"
      );


    if (!lab) {
      return;
    }


    let state =
      "aligned";


    const choices =
      Array.from(
        lab.querySelectorAll(
          ".d63-lab-choice"
        )
      );


    const hole2 =
      lab.querySelector(
        "#d63Hole2"
      );


    const beam =
      lab.querySelector(
        "#d63LabBeam"
      );


    const glow =
      lab.querySelector(
        "#d63LabBeamGlow"
      );


    const targetOuter =
      lab.querySelector(
        "#d63TargetOuter"
      );


    const targetMiddle =
      lab.querySelector(
        "#d63TargetMiddle"
      );


    const targetCenter =
      lab.querySelector(
        "#d63TargetCenter"
      );


    const result =
      lab.querySelector(
        ".d63-lab-result"
      );


    function resetBeam() {

      beam.setAttribute(
        "x2",
        "265"
      );


      glow.setAttribute(
        "x2",
        "265"
      );


      targetOuter.setAttribute(
        "fill",
        "#333c50"
      );


      targetMiddle.setAttribute(
        "fill",
        "#566074"
      );


      targetCenter.setAttribute(
        "fill",
        "#758096"
      );


      result.classList.remove(
        "show"
      );


      result.textContent = "";
    }


    function drawSetup() {

      resetBeam();


      if (
        state ===
        "aligned"
      ) {

        hole2.setAttribute(
          "cy",
          "180"
        );


        hole2.setAttribute(
          "r",
          "22"
        );


        hole2.style.display =
          "block";

      } else if (
        state ===
        "misaligned"
      ) {

        hole2.setAttribute(
          "cy",
          "105"
        );


        hole2.setAttribute(
          "r",
          "22"
        );


        hole2.style.display =
          "block";

      } else {

        hole2.style.display =
          "none";
      }
    }


    choices.forEach(
      function (choice) {

        choice.addEventListener(
          "click",
          function () {

            state =
              choice.dataset.state;


            choices.forEach(
              function (button) {

                button.classList.remove(
                  "active"
                );
              }
            );


            choice.classList.add(
              "active"
            );


            drawSetup();
          }
        );
      }
    );


    lab.querySelector(
      ".d63-test-beam"
    )
    .addEventListener(
      "click",
      function () {

        if (
          state ===
          "aligned"
        ) {

          beam.setAttribute(
            "x2",
            "900"
          );


          glow.setAttribute(
            "x2",
            "900"
          );


          targetOuter.setAttribute(
            "fill",
            "#fff4a8"
          );


          targetMiddle.setAttribute(
            "fill",
            "#ffe45d"
          );


          targetCenter.setAttribute(
            "fill",
            "#f0831e"
          );


          result.innerHTML =
            "✅ <strong>Target reached!</strong> "
            +
            "All three openings lie along the same straight path. "
            +
            "The beam can travel directly from the flashlight to the target.";

        } else if (
          state ===
          "misaligned"
        ) {

          beam.setAttribute(
            "x2",
            "545"
          );


          glow.setAttribute(
            "x2",
            "545"
          );


          result.innerHTML =
            "❌ <strong>Target not reached.</strong> "
            +
            "The middle opening is no longer on the beam's straight path. "
            +
            "The light does not curve upward to find the opening.";

        } else {

          beam.setAttribute(
            "x2",
            "545"
          );


          glow.setAttribute(
            "x2",
            "545"
          );


          result.innerHTML =
            "❌ <strong>Target not reached.</strong> "
            +
            "The opaque card blocks the straight path of the light.";
        }


        result.classList.add(
          "show"
        );
      }
    );


    drawSetup();
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
            "Correct! The aligned openings provide evidence that light travels in a straight line.";

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
            "Try again. Think about why all three holes must lie along the same path.";
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
            "#scienceStudioDay63"
          )
          ||
          heading.closest(
            "#scienceStudioDay63Lower"
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
