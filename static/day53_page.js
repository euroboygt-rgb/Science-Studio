document.addEventListener("DOMContentLoaded", function () {

  if (
    !window.location.pathname.includes(
      "/second-nine-weeks/day/53"
    )
  ) {
    return;
  }


  // =========================================================
  // HELPERS
  // =========================================================

  function makeSection(id, html) {

    const section =
      document.createElement("section");

    section.id = id;
    section.className =
      "science-studio-day53-section";

    section.innerHTML = html;

    return section;
  }


  function headingMatches(text) {

    const headings =
      Array.from(
        document.querySelectorAll(
          "h1, h2, h3, h4, h5"
        )
      );

    return headings.find(
      function (heading) {

        return (
          (
            heading.textContent ||
            ""
          )
          .trim()
          .toLowerCase()
          .includes(
            text.toLowerCase()
          )
        );
      }
    );
  }


  function visualCardForHeading(text) {

    const heading =
      headingMatches(text);

    if (!heading) {
      return null;
    }


    const direct =
      heading.closest(
        "section, article, .card, .lesson-section"
      );

    if (direct) {
      return direct;
    }


    let element =
      heading.parentElement;


    while (
      element &&
      element !== document.body
    ) {

      const style =
        window.getComputedStyle(
          element
        );


      const width =
        parseFloat(
          style.borderTopWidth || "0"
        );


      if (
        width >= 2 &&
        (
          element.innerText ||
          ""
        ).length < 9000
      ) {

        return element;
      }


      element =
        element.parentElement;
    }


    return heading.parentElement;
  }


  function hideCard(text) {

    const card =
      visualCardForHeading(
        text
      );

    if (card) {
      card.style.display =
        "none";
    }
  }


  function insertAfter(
    reference,
    element
  ) {

    if (!reference) {
      return;
    }

    reference.insertAdjacentElement(
      "afterend",
      element
    );
  }


  // =========================================================
  // CLEAN UP OLD / GENERIC DAY 53 CONTENT
  // =========================================================

  [
    "Bell Ringer",
    "Mini Lesson",
    "Science Notebook",
    "Guided Practice",
    "Guided Practice: Science Investigation Scenario",
    "Lab / Investigation",
    "Lab Notebook",
    "STAAR Practice",
    "Written Exit Ticket",
    "Explain Your Thinking: CER",
    "McGraw Hill Connection"
  ]
  .forEach(
    hideCard
  );


  const oldLab =
    document.getElementById(
      "scienceStudioDay53CircuitBuilder"
    );

  if (oldLab) {
    oldLab.remove();
  }


  const previousComplete =
    document.getElementById(
      "scienceStudioDay53CompleteLesson"
    );

  if (previousComplete) {
    previousComplete.remove();
  }


  // =========================================================
  // PAGE REFERENCES
  // =========================================================

  const powerFrame =
    visualCardForHeading(
      "Today's Learning Power Frame"
    );

  const vocabulary =
    visualCardForHeading(
      "Vocabulary Anchor Chart"
    );

  const learningTarget =
    visualCardForHeading(
      "Learning Target"
    );


  // =========================================================
  // 1. PHENOMENON MISSION
  // =========================================================

  const phenomenon =
    makeSection(
      "scienceStudioDay53Phenomenon",
      `
      <div class="d53-card d53-phenomenon">

        <div class="d53-pill">
          🔎 Phenomenon Mission
        </div>

        <h2>
          What Does a Circuit Need?
        </h2>

        <p class="d53-subtitle">
          Examine the parts of an electrical system.
          What job does each part perform?
        </p>

        <div class="d53-image-frame">

          <img
            src="/static/phenomenon/day53_circuit_parts_mission.svg"
            alt="Battery, wire, switch, bulb, and motor circuit parts"
          >

        </div>

        <div class="d53-question">
          <strong>Focus Question:</strong>
          How do the parts of an electrical circuit work
          together as a system?
        </div>

        <div class="d53-grid-2">

          <div class="d53-small-card">
            <h3>👀 Notice</h3>
            <p>
              Identify the battery, conducting wires,
              switch, and loads.
            </p>
          </div>

          <div class="d53-small-card">
            <h3>🤔 Wonder</h3>
            <p>
              Which parts must be connected before
              electrical energy can move through the system?
            </p>
          </div>

          <div class="d53-small-card">
            <h3>🔍 Quick Explore</h3>
            <p>
              Which component is the power source?
              Which components are loads?
            </p>
          </div>

          <div class="d53-small-card">
            <h3>📊 Evidence Tracker</h3>
            <p>
              Record the job performed by each component
              as you investigate it today.
            </p>
          </div>

        </div>

      </div>
      `
    );


  if (powerFrame) {
    insertAfter(
      powerFrame,
      phenomenon
    );
  }


  // =========================================================
  // 2. ANIMATED VIDEO LESSON
  // =========================================================

  const video =
    makeSection(
      "scienceStudioDay53Video",
      `
      <div class="d53-card d53-video-card">

        <div class="d53-pill">
          ▶ Science Video Support
        </div>

        <h2>
          Circuit Parts Explained
        </h2>

        <p>
          Press Play for a short animated lesson before
          starting today's Circuit Builder exploration.
        </p>

        <div
          id="d53VideoScreen"
          class="d53-video-screen"
        >

          <div
            id="d53VideoIcon"
            class="d53-video-icon"
          >
            ⚡
          </div>

          <h3 id="d53VideoTitle">
            Electrical Circuits Are Systems
          </h3>

          <p id="d53VideoText">
            A circuit is a system made of parts that
            work together.
          </p>

          <div
            id="d53VideoCaption"
            class="d53-video-caption"
          >
            Mission Brief 1 of 6
          </div>

        </div>

        <div class="d53-video-controls">

          <button
            type="button"
            id="d53VideoBack"
            class="d53-btn"
          >
            ◀ Back
          </button>

          <button
            type="button"
            id="d53VideoPlay"
            class="d53-btn d53-btn-yellow"
          >
            ▶ Play Lesson
          </button>

          <button
            type="button"
            id="d53VideoNext"
            class="d53-btn"
          >
            Next ▶
          </button>

        </div>

        <div class="d53-progress-shell">
          <div
            id="d53VideoProgress"
            class="d53-progress"
          ></div>
        </div>

      </div>
      `
    );


  insertAfter(
    phenomenon,
    video
  );


  // =========================================================
  // 3. STEVE THE PENGUIN
  // =========================================================

  const steve =
    makeSection(
      "scienceStudioDay53Steve",
      `
      <div class="d53-card d53-steve">

        <div class="d53-pill">
          🐧 Steve the Penguin's STAAR Mission
        </div>

        <h2>
          Steve's Circuit Parts Challenge
        </h2>

        <p>
          Steve is preparing an emergency warning system.
          Help him identify the parts he needs.
        </p>

        <div class="d53-staar-question">

          <h3>
            Question 1
          </h3>

          <p>
            Steve has a battery, wires, a switch,
            and a bulb. Which part provides the
            energy source for the circuit?
          </p>

          <div class="d53-choice-grid">

            <button
              class="d53-choice"
              data-answer="wrong"
              data-feedback="The bulb is a load. It transforms electrical energy into light."
            >
              A. Bulb
            </button>

            <button
              class="d53-choice"
              data-answer="wrong"
              data-feedback="The wire provides a conducting path."
            >
              B. Wire
            </button>

            <button
              class="d53-choice"
              data-answer="wrong"
              data-feedback="The switch controls whether the conducting path is open or closed."
            >
              C. Switch
            </button>

            <button
              class="d53-choice"
              data-answer="correct"
              data-feedback="Correct! The battery is the power source."
            >
              D. Battery
            </button>

          </div>

          <div class="d53-feedback"></div>

        </div>


        <div class="d53-staar-question">

          <h3>
            Question 2
          </h3>

          <p>
            Steve connects a wire to the positive
            terminal of a battery but nothing is
            connected to the negative terminal.
            Why will his bulb not light?
          </p>

          <div class="d53-choice-grid">

            <button
              class="d53-choice"
              data-answer="wrong"
              data-feedback="One battery can power a simple circuit."
            >
              A. He needs two batteries.
            </button>

            <button
              class="d53-choice"
              data-answer="correct"
              data-feedback="Correct! The circuit does not have a complete conducting path back to the other battery terminal."
            >
              B. The conducting path is incomplete.
            </button>

            <button
              class="d53-choice"
              data-answer="wrong"
              data-feedback="The problem is the incomplete circuit path, not too much energy."
            >
              C. The battery has too much energy.
            </button>

            <button
              class="d53-choice"
              data-answer="wrong"
              data-feedback="A wire conducts electrical energy; it does not produce the light."
            >
              D. The wire must produce the light.
            </button>

          </div>

          <div class="d53-feedback"></div>

        </div>

      </div>
      `
    );


  insertAfter(
    video,
    steve
  );


  // =========================================================
  // 4. COMPLETE DAY 53 LESSON CONTENT
  // =========================================================

  const lesson =
    document.createElement(
      "div"
    );

  lesson.id =
    "scienceStudioDay53CompleteLesson";


  lesson.innerHTML = `

    <!-- BELL RINGER -->

    <section class="d53-card">

      <h2>
        🔔 Bell Ringer
      </h2>

      <div class="d53-blue-box">

        <p>
          A student has a battery, two wires, and a bulb.
        </p>

        <p>
          <strong>
            What job do you think each part performs?
          </strong>
        </p>

        <ol>
          <li>
            Which part provides the energy source?
          </li>

          <li>
            Which parts provide a conducting path?
          </li>

          <li>
            Which part changes electrical energy
            into another form?
          </li>
        </ol>

      </div>

    </section>


    <!-- MINI LESSON -->

    <section class="d53-card">

      <h2>
        👨‍🏫 Mini Lesson
      </h2>

      <div class="d53-grid-2">

        <div class="d53-small-card">
          <h3>🔋 Battery / Power Source</h3>
          <p>
            Supplies energy to the electrical system.
            A battery has a positive (+) terminal and
            a negative (−) terminal.
          </p>
        </div>

        <div class="d53-small-card">
          <h3>〰 Wire / Conductor</h3>
          <p>
            Provides a conducting path between
            circuit components.
          </p>
        </div>

        <div class="d53-small-card">
          <h3>🔘 Switch / Control</h3>
          <p>
            Opens or closes the conducting path.
            An open switch creates a break in the path.
          </p>
        </div>

        <div class="d53-small-card">
          <h3>💡 Load</h3>
          <p>
            Changes electrical energy into another
            form of energy.
          </p>
        </div>

      </div>


      <div class="d53-energy-row">

        <div>
          💡
          <strong>Bulb</strong>
          <span>Electrical → Light + Thermal</span>
        </div>

        <div>
          ⚙️
          <strong>Motor</strong>
          <span>Electrical → Motion</span>
        </div>

        <div>
          🔊
          <strong>Speaker</strong>
          <span>Electrical → Sound</span>
        </div>

      </div>


      <div class="d53-important">

        <strong>STAAR Thinking:</strong>

        Trace the entire conducting path.
        A working circuit must connect through
        both battery terminals.

      </div>

    </section>


    <!-- SCIENCE NOTEBOOK -->

    <section class="d53-card">

      <h2>
        📓 Science Notebook
      </h2>

      <p>
        Create this chart in your science notebook.
      </p>

      <div class="d53-table-wrap">

        <table class="d53-table">

          <thead>
            <tr>
              <th>Part</th>
              <th>Job</th>
              <th>Energy / Function</th>
              <th>My Observation</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Battery</td>
              <td>Power source</td>
              <td>Provides energy</td>
              <td></td>
            </tr>

            <tr>
              <td>Wire</td>
              <td>Conducting path</td>
              <td>Carries electrical energy through the path</td>
              <td></td>
            </tr>

            <tr>
              <td>Switch</td>
              <td>Control</td>
              <td>Opens or closes the path</td>
              <td></td>
            </tr>

            <tr>
              <td>Bulb</td>
              <td>Load</td>
              <td>Light + thermal output</td>
              <td></td>
            </tr>

            <tr>
              <td>Motor</td>
              <td>Load</td>
              <td>Motion output</td>
              <td></td>
            </tr>

            <tr>
              <td>Speaker</td>
              <td>Load</td>
              <td>Sound output</td>
              <td></td>
            </tr>

          </tbody>

        </table>

      </div>

    </section>


    <!-- GUIDED PRACTICE -->

    <section class="d53-card">

      <h2>
        🤝 Guided Practice
      </h2>

      <div class="d53-blue-box">

        <h3>
          Trace the System
        </h3>

        <p>
          For each example, identify:
        </p>

        <ol>
          <li>the power source,</li>
          <li>the conducting path,</li>
          <li>the control if one is present,</li>
          <li>the load, and</li>
          <li>
            whether a complete path could be formed
            from one battery terminal back to the other.
          </li>
        </ol>

      </div>

    </section>


    <!-- LAB -->

    <section class="d53-card d53-lab">

      <div class="d53-pill">
        ⚡ Interactive Lab
      </div>

      <h2>
        Circuit Builder Exploration Mission
      </h2>

      <p>
        Today is exploration day.
        You are learning how the parts work.
      </p>

      <div class="d53-mission-list">

        <div>✓ Add a battery.</div>
        <div>✓ Add at least two wires.</div>
        <div>✓ Add a bulb.</div>
        <div>✓ Add a switch.</div>
        <div>✓ Add a motor.</div>
        <div>✓ Add a speaker.</div>
        <div>✓ Move the components.</div>
        <div>✓ Rotate the components.</div>
        <div>✓ Inspect the connection points.</div>
        <div>✓ Identify each part's job.</div>

      </div>

      <p class="d53-important">
        <strong>
          You do NOT need to build a successful
          circuit today.
        </strong>
        Tomorrow we will focus more closely on
        the parts required for a functioning circuit.
      </p>

      <a
        class="d53-big-lab-button"
        href="/labs/circuit-builder"
      >
        ⚡ Open Circuit Builder
      </a>

    </section>


    <!-- STAAR -->

    <section class="d53-card">

      <div class="d53-pill">
        ⭐ STAAR Practice
      </div>

      <h2>
        Circuit Parts — Evidence Questions
      </h2>


      <div class="d53-staar-question">

        <h3>Question 1</h3>

        <p>
          A student is building an electrical circuit.
          Which component provides the energy source
          for the circuit?
        </p>

        <div class="d53-choice-grid">

          <button
            class="d53-choice"
            data-answer="wrong"
            data-feedback="A wire provides a conducting path."
          >
            A. Wire
          </button>

          <button
            class="d53-choice"
            data-answer="correct"
            data-feedback="Correct. The battery is the power source."
          >
            B. Battery
          </button>

          <button
            class="d53-choice"
            data-answer="wrong"
            data-feedback="A bulb is a load."
          >
            C. Bulb
          </button>

          <button
            class="d53-choice"
            data-answer="wrong"
            data-feedback="A switch controls the path."
          >
            D. Switch
          </button>

        </div>

        <div class="d53-feedback"></div>

      </div>


      <div class="d53-staar-question">

        <h3>Question 2</h3>

        <p>
          Which component provides a conducting path
          between the parts of a simple circuit?
        </p>

        <div class="d53-choice-grid">

          <button
            class="d53-choice"
            data-answer="correct"
            data-feedback="Correct. Conducting wires connect circuit components."
          >
            A. Wire
          </button>

          <button
            class="d53-choice"
            data-answer="wrong"
            data-feedback="A speaker is a load."
          >
            B. Speaker
          </button>

          <button
            class="d53-choice"
            data-answer="wrong"
            data-feedback="A motor is a load."
          >
            C. Motor
          </button>

          <button
            class="d53-choice"
            data-answer="wrong"
            data-feedback="A bulb is a load."
          >
            D. Bulb
          </button>

        </div>

        <div class="d53-feedback"></div>

      </div>


      <div class="d53-staar-question">

        <h3>Question 3</h3>

        <p>
          A bulb is connected to the positive terminal
          of a battery, but there is no conducting path
          back to the negative terminal.
          What will most likely happen?
        </p>

        <div class="d53-choice-grid">

          <button
            class="d53-choice"
            data-answer="wrong"
            data-feedback="An incomplete path cannot continuously transfer electrical energy through the load."
          >
            A. The bulb will stay brightly lit.
          </button>

          <button
            class="d53-choice"
            data-answer="correct"
            data-feedback="Correct. The bulb will not light because the conducting path is incomplete."
          >
            B. The bulb will not light.
          </button>

          <button
            class="d53-choice"
            data-answer="wrong"
            data-feedback="The problem is the incomplete path, not excessive energy."
          >
            C. The battery will create too much energy.
          </button>

          <button
            class="d53-choice"
            data-answer="wrong"
            data-feedback="The wire conducts energy; it does not become the load."
          >
            D. The wire will become the load.
          </button>

        </div>

        <div class="d53-feedback"></div>

      </div>

    </section>


    <!-- EXIT TICKET -->

    <section class="d53-card">

      <h2>
        🎟 Written Exit Ticket
      </h2>

      <p>
        Name four important parts of an electrical
        circuit system and explain the job of each.
      </p>

      <textarea
        class="d53-textarea"
        placeholder="Write your answer here..."
      ></textarea>

    </section>


    <!-- CER -->

    <section class="d53-card">

      <h2>
        🧠 Explain Your Thinking: CER
      </h2>

      <div class="d53-question">

        <strong>CER Question:</strong>

        Why is a circuit considered a system
        whose parts must work together?

      </div>

      <div class="d53-cer-grid">

        <div>
          <h3>Claim</h3>
          <textarea
            class="d53-textarea"
            placeholder="My claim is..."
          ></textarea>
        </div>

        <div>
          <h3>Evidence</h3>
          <textarea
            class="d53-textarea"
            placeholder="Evidence from the Circuit Builder..."
          ></textarea>
        </div>

        <div>
          <h3>Reasoning</h3>
          <textarea
            class="d53-textarea"
            placeholder="This evidence supports my claim because..."
          ></textarea>
        </div>

      </div>

    </section>


    <!-- MCGRAW HILL -->

    <section class="d53-card d53-connection">

      <div class="d53-pill d53-blue-pill">
        📘 McGraw Hill Lesson Connection
      </div>

      <h2>
        Electricity and Light
      </h2>

      <div class="d53-blue-box">

        <h3>
          Chapter 4 — Electrical Circuits
        </h3>

        <p>
          Use the district-approved McGraw Hill materials
          to reinforce today's vocabulary and circuit-part
          diagrams.
        </p>

        <p>
          <strong>Students should focus on:</strong>
        </p>

        <ul>
          <li>battery / power source,</li>
          <li>conducting wires,</li>
          <li>switches,</li>
          <li>loads,</li>
          <li>complete conducting paths, and</li>
          <li>
            how circuit parts work together as a system.
          </li>
        </ul>

        <p>
          The Science Studio Circuit Builder is the
          hands-on application for this lesson.
        </p>

      </div>

    </section>

  `;


  if (learningTarget) {

    insertAfter(
      learningTarget,
      lesson
    );
  }

  else if (vocabulary) {

    insertAfter(
      vocabulary,
      lesson
    );
  }


  // =========================================================
  // VIDEO PLAYER
  // =========================================================

  const videoSlides = [

    {
      icon: "⚡",
      title:
        "Electrical Circuits Are Systems",

      text:
        "A circuit is a system made of parts that work together."
    },

    {
      icon: "🔋",
      title:
        "The Battery Is the Power Source",

      text:
        "The battery provides the energy source and has a positive (+) terminal and a negative (−) terminal."
    },

    {
      icon: "〰",
      title:
        "Wires Create a Conducting Path",

      text:
        "Conducting wires connect the parts of the electrical system."
    },

    {
      icon: "🔘",
      title:
        "The Switch Controls the Path",

      text:
        "A closed switch connects the path. An open switch creates a break."
    },

    {
      icon: "💡 ⚙️ 🔊",
      title:
        "Loads Transform Electrical Energy",

      text:
        "Bulbs produce light, motors produce motion, and speakers produce sound."
    },

    {
      icon: "🔌",
      title:
        "A Complete Circuit Needs a Complete Path",

      text:
        "Trace from one battery terminal through the circuit and back to the other battery terminal."
    }

  ];


  let videoIndex = 0;
  let videoTimer = null;


  const videoIcon =
    document.getElementById(
      "d53VideoIcon"
    );

  const videoTitle =
    document.getElementById(
      "d53VideoTitle"
    );

  const videoText =
    document.getElementById(
      "d53VideoText"
    );

  const videoCaption =
    document.getElementById(
      "d53VideoCaption"
    );

  const videoProgress =
    document.getElementById(
      "d53VideoProgress"
    );

  const playButton =
    document.getElementById(
      "d53VideoPlay"
    );


  function showVideoSlide() {

    const slide =
      videoSlides[
        videoIndex
      ];


    videoIcon.textContent =
      slide.icon;

    videoTitle.textContent =
      slide.title;

    videoText.textContent =
      slide.text;

    videoCaption.textContent =
      "Mission Brief " +
      (
        videoIndex + 1
      )
      +
      " of "
      +
      videoSlides.length;


    videoProgress.style.width =
      (
        (
          videoIndex + 1
        )
        /
        videoSlides.length
        *
        100
      )
      +
      "%";
  }


  function stopVideo() {

    if (videoTimer) {

      clearInterval(
        videoTimer
      );

      videoTimer =
        null;
    }

    playButton.textContent =
      "▶ Play Lesson";
  }


  document
    .getElementById(
      "d53VideoNext"
    )
    .addEventListener(
      "click",
      function () {

        stopVideo();

        videoIndex =
          (
            videoIndex + 1
          )
          %
          videoSlides.length;

        showVideoSlide();
      }
    );


  document
    .getElementById(
      "d53VideoBack"
    )
    .addEventListener(
      "click",
      function () {

        stopVideo();

        videoIndex =
          (
            videoIndex -
            1 +
            videoSlides.length
          )
          %
          videoSlides.length;

        showVideoSlide();
      }
    );


  playButton.addEventListener(
    "click",
    function () {

      if (videoTimer) {

        stopVideo();

        return;
      }


      playButton.textContent =
        "⏸ Pause";


      videoTimer =
        setInterval(
          function () {

            videoIndex =
              (
                videoIndex + 1
              )
              %
              videoSlides.length;

            showVideoSlide();

          },
          5000
        );
    }
  );


  showVideoSlide();


  // =========================================================
  // INTERACTIVE QUESTION FEEDBACK
  // =========================================================

  document
    .querySelectorAll(
      ".d53-choice"
    )
    .forEach(
      function (button) {

        button.addEventListener(
          "click",
          function () {

            const question =
              button.closest(
                ".d53-staar-question"
              );


            if (!question) {
              return;
            }


            const feedback =
              question.querySelector(
                ".d53-feedback"
              );


            question
              .querySelectorAll(
                ".d53-choice"
              )
              .forEach(
                function (choice) {

                  choice.classList.remove(
                    "d53-correct",
                    "d53-wrong"
                  );
                }
              );


            const correct =
              button.dataset.answer ===
              "correct";


            button.classList.add(
              correct
                ? "d53-correct"
                : "d53-wrong"
            );


            feedback.textContent =
              button.dataset.feedback;


            feedback.className =
              "d53-feedback "
              +
              (
                correct
                  ? "d53-feedback-correct"
                  : "d53-feedback-wrong"
              );
          }
        );
      }
    );


  // Science Studio Day 53 Fixed Anchors V3

  /*
    Older Science Studio lesson scripts also rearrange the
    Power Frame / Vocabulary area.

    Wait until those scripts finish, then put the Day 53
    sections exactly where they belong.
  */

  setTimeout(
    function () {

      // =====================================================
      // TOP LESSON CONTAINER
      // =====================================================

      let topContainer =
        document.getElementById(
          "scienceStudioDay53TopLessons"
        );


      if (!topContainer) {

        topContainer =
          document.createElement(
            "div"
          );

        topContainer.id =
          "scienceStudioDay53TopLessons";

      }


      /*
        Reattach the actual Day 53 objects.
        Even if another script moved or detached them,
        these variables still reference the real elements.
      */

      [
        phenomenon,
        video,
        steve
      ]
      .forEach(
        function (section) {

          if (!section) {
            return;
          }

          section.style.display =
            "";

          topContainer.appendChild(
            section
          );
        }
      );


      // =====================================================
      // PLACE TOP CONTAINER BEFORE VOCABULARY
      // =====================================================

      const currentVocabulary =
        visualCardForHeading(
          "Vocabulary Anchor Chart"
        );


      if (
        currentVocabulary &&
        currentVocabulary.parentNode
      ) {

        currentVocabulary.parentNode.insertBefore(
          topContainer,
          currentVocabulary
        );
      }

      else {

        const currentPowerFrame =
          visualCardForHeading(
            "Today's Learning Power Frame"
          );


        if (
          currentPowerFrame &&
          currentPowerFrame.parentNode
        ) {

          currentPowerFrame.insertAdjacentElement(
            "afterend",
            topContainer
          );
        }
      }


      // =====================================================
      // FORCE TOP SECTIONS VISIBLE
      // =====================================================

      [
        "scienceStudioDay53Phenomenon",
        "scienceStudioDay53Video",
        "scienceStudioDay53Steve"
      ]
      .forEach(
        function (id) {

          const element =
            document.getElementById(
              id
            );

          if (element) {

            element.style.display =
              "block";

            element.style.visibility =
              "visible";

            element.style.opacity =
              "1";
          }
        }
      );


      // =====================================================
      // MCGRAW HILL CONNECTION
      // =====================================================

      const day53Lesson =
        document.getElementById(
          "scienceStudioDay53CompleteLesson"
        );


      if (day53Lesson) {

        const connection =
          day53Lesson.querySelector(
            ".d53-connection"
          );


        if (connection) {

          connection.style.display =
            "block";

          connection.style.visibility =
            "visible";

          connection.style.opacity =
            "1";


          /*
            Always keep McGraw Hill as the last lesson card.
          */

          day53Lesson.appendChild(
            connection
          );
        }
      }


      // =====================================================
      // REMOVE ACCIDENTAL GENERIC DUPLICATES
      // =====================================================

      document
        .querySelectorAll(
          "#scienceStudioDay53TopLessons " +
          "#scienceStudioDay53Phenomenon"
        );

      console.log(
        "Science Studio Day 53 fixed anchors applied."
      );

    },
    600
  );

  // End Science Studio Day 53 Fixed Anchors V3

});
