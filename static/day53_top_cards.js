(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }


  ready(function () {

    if (
      !window.location.pathname.includes(
        "/second-nine-weeks/day/53"
      )
    ) {
      return;
    }


    addStyles();


    /*
      Wait until the regular lesson-page scripts finish
      rearranging Power Frame / Vocabulary.
    */
    setTimeout(
      buildDay53TopCards,
      700
    );

  });


  // =========================================================
  // STYLE
  // =========================================================

  function addStyles() {

    const old =
      document.getElementById(
        "day53-polished-style"
      );

    if (old) {
      old.remove();
    }


    const style =
      document.createElement(
        "style"
      );


    style.id =
      "day53-polished-style";


    style.textContent = `

      #scienceStudioDay53TopCards {
        display: block;
        width: 100%;
      }


      /* =====================================================
         SHARED CARD
         ===================================================== */

      #scienceStudioDay53TopCards .d53-top-card {
        margin: 18px 0;
        padding: 17px;
        border: 3px solid #171717;
        border-radius: 18px;
        box-sizing: border-box;
        box-shadow: 4px 5px 0 rgba(0,0,0,.13);
      }


      #scienceStudioDay53TopCards .d53-cream {
        background: #fff4cd;
      }


      #scienceStudioDay53TopCards .d53-blue {
        background: #eef8ff;
      }


      #scienceStudioDay53TopCards .d53-badge {
        display: inline-block;
        margin-bottom: 9px;
        padding: 5px 12px;
        border: 2px solid #151515;
        border-radius: 999px;
        background: #7131cc;
        color: #fff13b;
        font-size: .83rem;
        font-weight: 900;
      }


      #scienceStudioDay53TopCards .d53-blue-badge {
        background: #1681ee;
        color: white;
      }


      #scienceStudioDay53TopCards .d53-title {
        margin: 2px 0 2px;
        font-size: 1.5rem;
        font-weight: 900;
        line-height: 1.1;
      }


      #scienceStudioDay53TopCards .d53-unit-line {
        margin-bottom: 11px;
        font-size: .9rem;
        font-weight: 800;
      }


      /* =====================================================
         PHENOMENON
         ===================================================== */

      #scienceStudioDay53TopCards .d53-phenomenon-image {
        padding: 10px;
        border: 3px solid #171717;
        border-radius: 14px;
        background: white;
      }


      #scienceStudioDay53TopCards .d53-phenomenon-image svg {
        display: block;
        width: 100%;
        height: auto;
      }


      #scienceStudioDay53TopCards .d53-focus {
        margin-top: 10px;
        padding: 11px;
        border: 2px solid #171717;
        border-radius: 11px;
        background: #e6f3ff;
      }


      #scienceStudioDay53TopCards .d53-focus-title {
        font-weight: 900;
      }


      #scienceStudioDay53TopCards .d53-four-grid {
        display: grid;
        grid-template-columns: repeat(2,minmax(0,1fr));
        gap: 10px;
        margin-top: 10px;
      }


      #scienceStudioDay53TopCards .d53-info-box {
        padding: 11px;
        border: 2px solid #171717;
        border-radius: 11px;
        background: white;
      }


      #scienceStudioDay53TopCards .d53-info-box strong {
        display: block;
        margin-bottom: 3px;
      }


      /* =====================================================
         MISSION BRIEF
         ===================================================== */

      #scienceStudioDay53TopCards .d53-brief-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
      }


      #scienceStudioDay53TopCards .d53-play {
        flex: 0 0 auto;
        padding: 10px 16px;
        border: 2px solid #171717;
        border-radius: 9px;
        background: #ffc400;
        color: #111;
        font-weight: 900;
        cursor: pointer;
        box-shadow: 2px 3px 0 rgba(0,0,0,.15);
      }


      #scienceStudioDay53TopCards .d53-slide {
        min-height: 235px;
        margin-top: 11px;
        padding: 24px;
        border: 2px solid #171717;
        border-radius: 12px;
        background: white;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        text-align: center;
      }


      #scienceStudioDay53TopCards .d53-slide-icon {
        margin-bottom: 8px;
        font-size: 3.3rem;
      }


      #scienceStudioDay53TopCards .d53-slide-title {
        margin-bottom: 8px;
        font-size: 1.6rem;
        font-weight: 900;
      }


      #scienceStudioDay53TopCards .d53-slide-main {
        max-width: 780px;
        font-size: 1.05rem;
        font-weight: 800;
      }


      #scienceStudioDay53TopCards .d53-slide-caption {
        margin-top: 9px;
        color: #444;
      }


      #scienceStudioDay53TopCards .d53-brief-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-top: 9px;
      }


      #scienceStudioDay53TopCards .d53-slide-number {
        font-weight: 900;
      }


      #scienceStudioDay53TopCards .d53-controls {
        display: flex;
        gap: 6px;
      }


      #scienceStudioDay53TopCards .d53-control {
        padding: 7px 11px;
        border: 2px solid #171717;
        border-radius: 7px;
        background: #f4f4f4;
        font-weight: 900;
        cursor: pointer;
      }


      #scienceStudioDay53TopCards .d53-next {
        background: #1681ee;
        color: white;
      }


      #scienceStudioDay53TopCards .d53-restart {
        background: #2ba34a;
        color: white;
      }


      /* =====================================================
         STEVE
         ===================================================== */

      #scienceStudioDay53TopCards .d53-steve-layout {
        display: grid;
        grid-template-columns: 72px 1fr;
        gap: 12px;
      }


      #scienceStudioDay53TopCards .d53-steve-icon {
        padding-top: 9px;
        text-align: center;
        font-size: 4.6rem;
        line-height: 1;
      }


      #scienceStudioDay53TopCards .d53-steve-scenario {
        margin-top: 10px;
        padding: 12px;
        border: 2px solid #171717;
        border-radius: 10px;
        background: #fff4cd;
      }


      #scienceStudioDay53TopCards .d53-question-panel {
        margin-top: 10px;
        padding: 12px;
        border: 2px solid #171717;
        border-radius: 10px;
        background: white;
      }


      #scienceStudioDay53TopCards .d53-question-label {
        margin-bottom: 7px;
        font-weight: 900;
      }


      #scienceStudioDay53TopCards .d53-answer {
        display: block;
        width: 100%;
        margin: 6px 0;
        padding: 8px 10px;
        border: 2px solid #171717;
        border-radius: 7px;
        background: #f6f6f8;
        text-align: left;
        font-weight: 800;
        cursor: pointer;
      }


      #scienceStudioDay53TopCards .d53-answer.selected {
        background: #dfeeff;
        border-color: #1875cf;
      }


      #scienceStudioDay53TopCards .d53-answer.correct {
        background: #d8f4dc;
        border-color: #16823b;
      }


      #scienceStudioDay53TopCards .d53-answer.wrong {
        background: #ffdede;
        border-color: #bc2637;
      }


      #scienceStudioDay53TopCards .d53-steve-buttons {
        display: flex;
        gap: 7px;
        margin-top: 9px;
      }


      #scienceStudioDay53TopCards .d53-check {
        padding: 9px 14px;
        border: 2px solid #171717;
        border-radius: 7px;
        background: #ffc400;
        font-weight: 900;
        cursor: pointer;
      }


      #scienceStudioDay53TopCards .d53-reset {
        padding: 9px 14px;
        border: 2px solid #171717;
        border-radius: 7px;
        background: white;
        font-weight: 900;
        cursor: pointer;
      }


      #scienceStudioDay53TopCards .d53-feedback {
        min-height: 24px;
        margin-top: 8px;
        font-weight: 900;
      }


      @media (max-width: 760px) {

        #scienceStudioDay53TopCards .d53-four-grid {
          grid-template-columns: 1fr;
        }

        #scienceStudioDay53TopCards .d53-brief-header {
          display: block;
        }

        #scienceStudioDay53TopCards .d53-play {
          margin-top: 9px;
        }

        #scienceStudioDay53TopCards .d53-steve-layout {
          grid-template-columns: 1fr;
        }

        #scienceStudioDay53TopCards .d53-steve-icon {
          display: none;
        }

      }
    `;


    document.head.appendChild(
      style
    );
  }


  // =========================================================
  // BUILD
  // =========================================================

  function buildDay53TopCards() {

    const existing =
      document.getElementById(
        "scienceStudioDay53TopCards"
      );


    if (existing) {
      existing.remove();
    }


    /*
      Also remove the older Day 53 top-card attempts.
    */

    [
      "scienceStudioDay53Phenomenon",
      "scienceStudioDay53Video",
      "scienceStudioDay53Steve",
      "scienceStudioDay53TopLessons"
    ]
    .forEach(
      function (id) {

        const element =
          document.getElementById(id);

        if (element) {
          element.remove();
        }
      }
    );


    const vocabulary =
      findVisualCard(
        "Vocabulary Anchor Chart"
      );


    if (!vocabulary) {

      console.log(
        "Day 53: Vocabulary card not found."
      );

      return;
    }


    const container =
      document.createElement(
        "div"
      );


    container.id =
      "scienceStudioDay53TopCards";


    container.appendChild(
      buildPhenomenon()
    );


    container.appendChild(
      buildMissionBrief()
    );


    container.appendChild(
      buildSteve()
    );


    vocabulary.parentNode.insertBefore(
      container,
      vocabulary
    );
  }


  // =========================================================
  // PHENOMENON
  // =========================================================

  function buildPhenomenon() {

    const section =
      document.createElement(
        "section"
      );


    section.className =
      "d53-top-card d53-cream";


    section.innerHTML = `

      <div class="d53-badge">
        🔎 Phenomenon Mission
      </div>

      <div class="d53-title">
        What Does a Circuit Need?
      </div>

      <div class="d53-unit-line">
        Day 53 • Circuit Systems
      </div>


      <div class="d53-phenomenon-image">

        <svg
          viewBox="0 0 1000 470"
          role="img"
          aria-label="Simple circuit system with battery, switch, wires, and bulb"
        >

          <rect
            width="1000"
            height="470"
            rx="22"
            fill="#f4f9fd"
          />


          <text
            x="500"
            y="48"
            text-anchor="middle"
            font-size="31"
            font-weight="900"
            fill="#20346f"
          >
            PHENOMENON MISSION:
          </text>


          <text
            x="500"
            y="83"
            text-anchor="middle"
            font-size="32"
            font-weight="900"
            fill="#13265b"
          >
            WHAT DOES A CIRCUIT NEED?
          </text>


          <text
            x="500"
            y="112"
            text-anchor="middle"
            font-size="17"
            font-weight="700"
            fill="#20346f"
          >
            Examine the system. What job does each part perform?
          </text>


          <!-- circuit board -->
          <rect
            x="100"
            y="145"
            width="800"
            height="235"
            rx="22"
            fill="#ffffff"
            stroke="#cbd8f2"
            stroke-width="4"
          />


          <!-- battery -->
          <g transform="translate(195 245)">

            <rect
              x="-38"
              y="-64"
              width="76"
              height="128"
              rx="10"
              fill="#ffc400"
              stroke="#171717"
              stroke-width="4"
            />

            <rect
              x="-13"
              y="-77"
              width="26"
              height="13"
              rx="2"
              fill="#444"
            />

            <text
              x="0"
              y="-9"
              text-anchor="middle"
              font-size="15"
              font-weight="900"
            >
              BATTERY
            </text>

            <text
              x="0"
              y="16"
              text-anchor="middle"
              font-size="13"
            >
              POWER
            </text>

            <text
              x="48"
              y="-62"
              font-size="24"
              font-weight="900"
              fill="#087a35"
            >
              +
            </text>

            <text
              x="48"
              y="76"
              font-size="24"
              font-weight="900"
              fill="#b00020"
            >
              −
            </text>

          </g>


          <!-- upper wire -->
          <path
            d="M 195 168
               C 300 168, 320 168, 390 168"
            fill="none"
            stroke="#f0831e"
            stroke-width="8"
            stroke-linecap="round"
          />


          <!-- switch -->
          <g transform="translate(485 168)">

            <rect
              x="-70"
              y="-32"
              width="140"
              height="64"
              rx="12"
              fill="#fff"
              stroke="#171717"
              stroke-width="4"
            />

            <circle
              cx="-38"
              cy="5"
              r="7"
              fill="#171717"
            />

            <circle
              cx="38"
              cy="5"
              r="7"
              fill="#171717"
            />

            <line
              x1="-38"
              y1="5"
              x2="28"
              y2="-20"
              stroke="#171717"
              stroke-width="7"
              stroke-linecap="round"
            />

            <text
              x="0"
              y="63"
              text-anchor="middle"
              font-size="17"
              font-weight="900"
            >
              SWITCH
            </text>

          </g>


          <!-- wire to bulb -->
          <path
            d="M 555 168
               C 635 168, 680 168, 735 190"
            fill="none"
            stroke="#f0831e"
            stroke-width="8"
            stroke-linecap="round"
          />


          <!-- bulb -->
          <g transform="translate(790 220)">

            <circle
              cx="0"
              cy="0"
              r="47"
              fill="#fff8bf"
              stroke="#d49a00"
              stroke-width="5"
            />

            <path
              d="M -18 0
                 Q 0 -27 18 0
                 Q 0 27 -18 0"
              fill="none"
              stroke="#444"
              stroke-width="4"
            />

            <rect
              x="-25"
              y="42"
              width="50"
              height="26"
              rx="5"
              fill="#f0831e"
              stroke="#171717"
              stroke-width="3"
            />

            <text
              x="0"
              y="94"
              text-anchor="middle"
              font-size="17"
              font-weight="900"
            >
              BULB / LOAD
            </text>

          </g>


          <!-- return wire -->
          <path
            d="M 790 288
               C 705 340, 420 340, 195 309"
            fill="none"
            stroke="#f0831e"
            stroke-width="8"
            stroke-linecap="round"
          />


          <!-- labels -->
          <rect
            x="117"
            y="319"
            width="165"
            height="43"
            rx="10"
            fill="#fff3b8"
            stroke="#171717"
            stroke-width="2"
          />

          <text
            x="200"
            y="346"
            text-anchor="middle"
            font-size="16"
            font-weight="800"
          >
            POWER SOURCE
          </text>


          <rect
            x="400"
            y="319"
            width="170"
            height="43"
            rx="10"
            fill="#dff0ff"
            stroke="#171717"
            stroke-width="2"
          />

          <text
            x="485"
            y="346"
            text-anchor="middle"
            font-size="16"
            font-weight="800"
          >
            CONTROL
          </text>


          <rect
            x="706"
            y="319"
            width="170"
            height="43"
            rx="10"
            fill="#e8e3ff"
            stroke="#171717"
            stroke-width="2"
          />

          <text
            x="791"
            y="346"
            text-anchor="middle"
            font-size="16"
            font-weight="800"
          >
            ENERGY OUTPUT
          </text>

        </svg>

      </div>


      <div class="d53-focus">

        <span class="d53-focus-title">
          ❓ Focus Question:
        </span>

        How do the parts of an electrical circuit
        work together as a system?

      </div>


      <div class="d53-four-grid">

        <div class="d53-info-box">
          <strong>👀 Notice</strong>
          The system has a battery, wires,
          a switch, and a bulb.
        </div>

        <div class="d53-info-box">
          <strong>🤔 Wonder</strong>
          Which part provides energy?
          Which part changes the energy?
        </div>

        <div class="d53-info-box">
          <strong>🧪 Quick Explore</strong>
          Identify the power source,
          conducting path, control, and load.
        </div>

        <div class="d53-info-box">
          <strong>📊 Evidence Tracker</strong>
          Record the job performed by each
          part of the circuit system.
        </div>

      </div>

    `;


    return section;
  }


  // =========================================================
  // MISSION BRIEF
  // =========================================================

  function buildMissionBrief() {

    const section =
      document.createElement(
        "section"
      );


    section.className =
      "d53-top-card d53-cream";


    section.innerHTML = `

      <div class="d53-brief-header">

        <div>

          <div class="d53-badge">
            🎬 Mission Brief Animation
          </div>

          <div class="d53-title">
            Mission Brief: Circuit Systems
          </div>

          <div class="d53-unit-line">
            Day 53 • Circuit Vocabulary and Parts
          </div>

        </div>


        <button
          type="button"
          class="d53-play"
        >
          ▶ Play Mission Brief
        </button>

      </div>


      <div class="d53-slide">

        <div class="d53-slide-icon"></div>

        <div class="d53-slide-title"></div>

        <div class="d53-slide-main"></div>

        <div class="d53-slide-caption"></div>

      </div>


      <div class="d53-brief-footer">

        <div class="d53-slide-number"></div>

        <div class="d53-controls">

          <button
            type="button"
            class="d53-control d53-back"
          >
            ◀ Back
          </button>

          <button
            type="button"
            class="d53-control d53-next"
          >
            Next ▶
          </button>

          <button
            type="button"
            class="d53-control d53-restart"
          >
            Restart
          </button>

        </div>

      </div>

    `;


    const slides = [

      {
        icon: "⚡",
        title: "Today's Mission",

        main:
          "Today we will identify and describe the main parts of an electrical circuit system.",

        caption:
          "A system works because its parts work together."
      },


      {
        icon: "🔋",
        title: "Battery: The Power Source",

        main:
          "The battery provides the energy source for the circuit.",

        caption:
          "A battery has a positive (+) terminal and a negative (−) terminal."
      },


      {
        icon: "〰️",
        title: "Wires: The Conducting Path",

        main:
          "Wires provide a conducting path between the parts of the circuit.",

        caption:
          "Electrical energy needs a complete conducting path."
      },


      {
        icon: "🔘",
        title: "Switch: The Control",

        main:
          "A switch can open or close the conducting path.",

        caption:
          "Open switch = broken path. Closed switch = connected path."
      },


      {
        icon: "💡 ⚙️ 🔊",
        title: "Loads Transform Energy",

        main:
          "Loads transform electrical energy into another observable form of energy.",

        caption:
          "Bulb → light. Motor → motion. Speaker → sound."
      },


      {
        icon: "🎯",
        title: "STAAR Strategy",

        main:
          "Trace the circuit from one battery terminal, through every component, and back to the other battery terminal.",

        caption:
          "A functioning circuit needs a complete conducting path."
      }

    ];


    let index = 0;
    let timer = null;


    const icon =
      section.querySelector(
        ".d53-slide-icon"
      );


    const title =
      section.querySelector(
        ".d53-slide-title"
      );


    const main =
      section.querySelector(
        ".d53-slide-main"
      );


    const caption =
      section.querySelector(
        ".d53-slide-caption"
      );


    const number =
      section.querySelector(
        ".d53-slide-number"
      );


    const play =
      section.querySelector(
        ".d53-play"
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
        (
          index + 1
        )
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
        ".d53-back"
      )
      .addEventListener(
        "click",
        function () {

          stop();

          index =
            Math.max(
              0,
              index - 1
            );

          draw();
        }
      );


    section
      .querySelector(
        ".d53-next"
      )
      .addEventListener(
        "click",
        function () {

          stop();

          index =
            Math.min(
              slides.length - 1,
              index + 1
            );

          draw();
        }
      );


    section
      .querySelector(
        ".d53-restart"
      )
      .addEventListener(
        "click",
        function () {

          stop();

          index = 0;

          draw();
        }
      );


    play.addEventListener(
      "click",
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
              }

              else {

                stop();
              }

            },
            4500
          );
      }
    );


    draw();


    return section;
  }


  // =========================================================
  // STEVE
  // =========================================================

  function buildSteve() {

    const section =
      document.createElement(
        "section"
      );


    section.className =
      "d53-top-card d53-blue";


    section.innerHTML = `

      <div class="d53-steve-layout">

        <div class="d53-steve-icon">
          🐧
        </div>


        <div>

          <div class="d53-badge d53-blue-badge">
            🐧 Steve the Penguin's STAAR Mission
          </div>

          <div class="d53-title">
            Steve the Penguin's Circuit Systems Mission
          </div>

          <div class="d53-unit-line">
            Day 53 • Circuit Parts Evidence
          </div>


          <div class="d53-steve-scenario">

            <strong>
              Steve's Scenario:
            </strong>

            <br><br>

            Steve the Penguin has a battery,
            two wires, a switch, and a bulb.

            He wants to identify the job of
            each part before he builds the circuit.

          </div>


          <div class="d53-question-panel">

            <div class="d53-question-label">
              STAAR-Style Question:
            </div>


            <div style="
              margin-bottom:8px;
              font-weight:900;
            ">
              Which statement best explains
              the job of the battery?
            </div>


            <button
              class="d53-answer"
              data-value="A"
            >
              A. The battery provides the energy source for the circuit.
            </button>


            <button
              class="d53-answer"
              data-value="B"
            >
              B. The battery changes electrical energy into sound.
            </button>


            <button
              class="d53-answer"
              data-value="C"
            >
              C. The battery opens and closes the conducting path.
            </button>


            <button
              class="d53-answer"
              data-value="D"
            >
              D. The battery is the conducting wire between every component.
            </button>


            <div class="d53-steve-buttons">

              <button
                type="button"
                class="d53-check"
              >
                Check Answer
              </button>

              <button
                type="button"
                class="d53-reset"
              >
                Reset
              </button>

            </div>


            <div class="d53-feedback"></div>

          </div>

        </div>

      </div>

    `;


    let selected =
      null;


    const answers =
      Array.from(
        section.querySelectorAll(
          ".d53-answer"
        )
      );


    const feedback =
      section.querySelector(
        ".d53-feedback"
      );


    answers.forEach(
      function (button) {

        button.addEventListener(
          "click",
          function () {

            answers.forEach(
              answer =>
                answer.classList.remove(
                  "selected"
                )
            );


            button.classList.add(
              "selected"
            );


            selected =
              button.dataset.value;
          }
        );
      }
    );


    section
      .querySelector(
        ".d53-check"
      )
      .addEventListener(
        "click",
        function () {

          if (!selected) {

            feedback.textContent =
              "Choose an answer first.";

            return;
          }


          answers.forEach(
            answer =>
              answer.classList.remove(
                "correct",
                "wrong"
              )
          );


          const chosen =
            answers.find(
              answer =>
                answer.dataset.value ===
                selected
            );


          const correct =
            answers.find(
              answer =>
                answer.dataset.value ===
                "A"
            );


          correct.classList.add(
            "correct"
          );


          if (
            selected ===
            "A"
          ) {

            feedback.style.color =
              "#087a35";


            feedback.textContent =
              "Correct! The battery is the power source for the circuit.";
          }

          else {

            chosen.classList.add(
              "wrong"
            );


            feedback.style.color =
              "#b00020";


            feedback.textContent =
              "Try again. The battery provides the energy source. Wires conduct energy, the switch controls the path, and the bulb is a load.";
          }
        }
      );


    section
      .querySelector(
        ".d53-reset"
      )
      .addEventListener(
        "click",
        function () {

          selected =
            null;


          feedback.textContent =
            "";


          answers.forEach(
            answer =>
              answer.classList.remove(
                "selected",
                "correct",
                "wrong"
              )
          );
        }
      );


    return section;
  }


  // =========================================================
  // LOCATE NORMAL SCIENCE STUDIO CARD
  // =========================================================

  function findVisualCard(text) {

    const candidates =
      Array.from(
        document.querySelectorAll(
          "section, article, div"
        )
      );


    const matches =
      candidates.filter(
        function (element) {

          const content =
            (
              element.innerText ||
              ""
            )
            .replace(
              /\s+/g,
              " "
            )
            .trim();


          return content.includes(
            text
          );
        }
      );


    /*
      Prefer the smallest sensible visual card
      instead of a giant page container.
    */

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
          rect.height > 80
        );
      }
    ) || null;
  }

})();
