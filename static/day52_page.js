(function () {
  if (!window.location.pathname.includes("/second-nine-weeks/day/52")) {
    return;
  }

  const slides = [
    {
      icon: "🛠️",
      title: "Today’s Mission",
      text: "Use evidence to troubleshoot an electrical system.",
      note: "Inspect the system one part at a time."
    },
    {
      icon: "🔋",
      title: "Check the Power Source",
      text: "Make sure the circuit has a battery or other energy source.",
      note: "No energy source means the system cannot function."
    },
    {
      icon: "🔘",
      title: "Check the Switch",
      text: "A closed switch completes the path. An open switch creates a gap.",
      note: "Trace the path through the switch."
    },
    {
      icon: "🔗",
      title: "Check Every Connection",
      text: "A loose or disconnected wire creates an incomplete circuit.",
      note: "Electrical energy needs a continuous conducting path."
    },
    {
      icon: "🧪",
      title: "Check the Material",
      text: "Conductors allow electrical energy to flow. Insulators can interrupt the path.",
      note: "Use physical properties as evidence."
    },
    {
      icon: "💡",
      title: "Check the Output",
      text: "A working load transforms electrical energy into an observable output.",
      note: "Look for light, motion, sound, or thermal energy."
    },
    {
      icon: "🧠",
      title: "Diagnose Before Repairing",
      text: "Identify the evidence first. Then choose the repair that fixes the actual problem.",
      note: "Engineers use evidence instead of guessing."
    },
    {
      icon: "🎯",
      title: "STAAR Strategy",
      text: "Trace the entire circuit and find the break in the system.",
      note: "Power source + conducting path + load + output."
    }
  ];

  function makeCard(id) {
    const card = document.createElement("section");
    card.id = id;
    card.className = "day52-fixed-card";
    return card;
  }

  function buildPhenomenon() {
    const card = makeCard("scienceStudioDay52PhenomenonFixed");

    card.innerHTML = `
      <span class="day52-fixed-badge">🔎 Phenomenon Mission</span>

      <h2>Why Won't the System Work?</h2>

      <p><strong>Circuit troubleshooting evidence</strong></p>

      <img
        class="day52-fixed-image"
        src="/static/phenomenon/day52_circuit_troubleshooting_mission.svg"
        alt="Circuit troubleshooting phenomenon mission">

      <div class="day52-fixed-box mt-3">
        <h4>❓ Focus Question</h4>
        <p class="mb-0">
          How can evidence help us diagnose and repair an electrical system?
        </p>
      </div>

      <div class="day52-fixed-grid mt-3">

        <div class="day52-fixed-box">
          <h4>👀 Notice</h4>
          <p>
            The circuit has a battery, wires, switch, and bulb.
            The switch is open, there is a gap, and the bulb does not light.
          </p>
        </div>

        <div class="day52-fixed-box">
          <h4>🤔 Wonder</h4>
          <p>
            Which problem prevents electrical energy from flowing?
            What repair would make the system work?
          </p>
        </div>

        <div class="day52-fixed-box">
          <h4>🧪 Quick Explore</h4>
          <p>
            Trace the path from the battery through every component
            and back to the battery.
          </p>
        </div>

        <div class="day52-fixed-box">
          <h4>📊 Evidence Tracker</h4>
          <p>
            Record each problem you find and explain how it affects
            the complete circuit.
          </p>
        </div>

        <div class="day52-fixed-box">
          <h4>💬 CER Starter</h4>
          <p>
            The electrical system does not work because...
          </p>
        </div>

      </div>
    `;

    return card;
  }

  function buildMissionBrief() {
    const card = makeCard("scienceStudioDay52MissionBriefFixed");

    card.innerHTML = `
      <div class="d-flex justify-content-between align-items-start flex-wrap gap-2">

        <div>
          <span class="day52-fixed-badge">🎬 Mission Brief Animation</span>
          <h2>Mission Brief: Circuit System Troubleshooting</h2>
          <p><strong>Day 52 • Diagnose, Repair, Explain</strong></p>
        </div>

        <button class="day52-nav" id="day52PlayFixed">
          ▶ Play Mission Brief
        </button>

      </div>

      <div id="day52SlideFixed" class="day52-slide"></div>

      <div class="d-flex justify-content-between align-items-center mt-2 flex-wrap gap-2">

        <strong id="day52CounterFixed"></strong>

        <div>
          <button class="day52-nav" id="day52BackFixed">⬅ Back</button>
          <button class="day52-nav" id="day52NextFixed">Next ➡</button>
          <button class="day52-nav" id="day52RestartFixed"
                  style="background:#0b8f4d;color:white;">
            Restart
          </button>
        </div>

      </div>
    `;

    let index = 0;
    let timer = null;

    function render() {
      const slide = slides[index];

      card.querySelector("#day52SlideFixed").innerHTML = `
        <div>
          <div class="day52-slide-icon">${slide.icon}</div>
          <h3>${slide.title}</h3>
          <p class="fs-5 fw-bold">${slide.text}</p>
          <p class="mb-0">${slide.note}</p>
        </div>
      `;

      card.querySelector("#day52CounterFixed").textContent =
        "Slide " + (index + 1) + " of " + slides.length;
    }

    function next() {
      index = (index + 1) % slides.length;
      render();
    }

    setTimeout(function () {
      card.querySelector("#day52BackFixed").addEventListener("click", function () {
        index = (index - 1 + slides.length) % slides.length;
        render();
      });

      card.querySelector("#day52NextFixed").addEventListener("click", next);

      card.querySelector("#day52RestartFixed").addEventListener("click", function () {
        index = 0;
        render();
      });

      card.querySelector("#day52PlayFixed").addEventListener("click", function () {
        if (timer) {
          clearInterval(timer);
          timer = null;
          this.textContent = "▶ Play Mission Brief";
        } else {
          timer = setInterval(next, 10000);
          this.textContent = "⏸ Pause Mission Brief";
        }
      });

      render();
    }, 0);

    return card;
  }

  function buildSteve() {
    const card = makeCard("scienceStudioDay52SteveFixed");

    card.style.background = "#f6fbff";

    card.innerHTML = `
      <span class="day52-fixed-badge">
        🐧 Steve the Penguin’s STAAR Mission
      </span>

      <h2>Steve the Penguin’s Circuit Repair Mission</h2>

      <p>
        <strong>Day 52 • Circuit System Troubleshooting</strong>
      </p>

      <div class="day52-fixed-box mb-3" style="background:#fff7d6;">

        <strong>Steve’s Scenario:</strong>

        <p class="mb-0">
          Steve builds a circuit with a battery, bulb, conducting wires,
          and a closed switch. One wire is disconnected from the bulb.
          The bulb does not light.
        </p>

      </div>

      <div class="day52-fixed-box">

        <strong>STAAR-Style Question:</strong>

        <p class="fw-bold mt-2">
          Which change would most likely make Steve’s bulb light?
        </p>

        <button class="day52-answer" data-answer="A">
          A. Replace the conducting wires with plastic strips.
        </button>

        <button class="day52-answer" data-answer="B">
          B. Reconnect the loose wire so the circuit has a complete conducting path.
        </button>

        <button class="day52-answer" data-answer="C">
          C. Open the switch so electrical energy cannot flow.
        </button>

        <button class="day52-answer" data-answer="D">
          D. Remove the battery from the circuit.
        </button>

        <button class="day52-check" id="day52CheckFixed">
          Check Answer
        </button>

        <button class="day52-check" id="day52ResetFixed"
                style="background:#f7f7f7;">
          Reset
        </button>

        <span id="day52ResultFixed" class="fw-bold ms-2"></span>

        <div id="day52ExplanationFixed"
             class="mt-3 p-3 rounded-3 border border-dark"
             style="display:none;background:#eaf7ed;">

          <strong>🐧 Steve Explains the Evidence:</strong>

          <p class="mb-0">
            The disconnected wire creates a gap.
            Reconnecting it creates a complete conducting path so
            electrical energy can flow to the bulb.
          </p>

        </div>

        <div class="mt-3 p-3 rounded-3 border border-dark"
             style="background:#eef6ff;">

          <strong>⭐ STAAR Tip:</strong>

          <p class="mb-0">
            Trace the circuit all the way around. Look for gaps,
            open switches, disconnected wires, and insulators.
          </p>

        </div>

      </div>
    `;

    let selected = null;

    setTimeout(function () {

      card.querySelectorAll(".day52-answer").forEach(function (button) {

        button.addEventListener("click", function () {

          selected = button.dataset.answer;

          card.querySelectorAll(".day52-answer").forEach(function (btn) {
            btn.style.background = "#f7f7f7";
            btn.style.borderColor = "#111";
          });

          button.style.background = "#dff3e6";
          button.style.borderColor = "#087a35";
        });
      });

      card.querySelector("#day52CheckFixed").addEventListener("click", function () {

        const result = card.querySelector("#day52ResultFixed");

        if (!selected) {
          result.textContent = "Choose an answer first.";
          result.style.color = "#9a5b00";
          return;
        }

        card.querySelectorAll(".day52-answer").forEach(function (btn) {

          if (btn.dataset.answer === "B") {
            btn.style.background = "#dff3e6";
            btn.style.borderColor = "#087a35";
          }

          else if (btn.dataset.answer === selected) {
            btn.style.background = "#ffe1e1";
            btn.style.borderColor = "#b00020";
          }
        });

        card.querySelector("#day52ExplanationFixed").style.display = "block";

        if (selected === "B") {
          result.textContent = "Correct! Steve repaired the circuit.";
          result.style.color = "#087a35";
        } else {
          result.textContent = "Try again. Look for the gap.";
          result.style.color = "#b00020";
        }
      });

      card.querySelector("#day52ResetFixed").addEventListener("click", function () {

        selected = null;

        card.querySelector("#day52ResultFixed").textContent = "";

        card.querySelector("#day52ExplanationFixed").style.display = "none";

        card.querySelectorAll(".day52-answer").forEach(function (btn) {
          btn.style.background = "#f7f7f7";
          btn.style.borderColor = "#111";
        });
      });

    }, 0);

    return card;
  }

  function buildLab() {
    const card = makeCard("scienceStudioDay52LabFixed");

    card.innerHTML = `
      <div class="day52-lab-grid">

        <div>

          <div class="badge rounded-pill text-bg-warning border border-dark mb-2">
            🧪 Interactive Lab
          </div>

          <h2>Mission Control Circuit Repair</h2>

          <p class="fw-bold">
            Inspect broken electrical systems, diagnose the failure,
            choose the repair, and explain the evidence.
          </p>

          <p>
            Inspect → Diagnose → Repair → Test → Explain
          </p>

          <a class="day52-lab-button"
             href="/labs/day52-circuit-repair-lab">
            ▶ Start Interactive Lab
          </a>

        </div>

        <div class="day52-mini">
          🔋 → 🔍 → 🛠️ → ⚡
          <br><br>
          Find the failure.<br>
          Repair the system.
        </div>

      </div>
    `;

    return card;
  }

  function removeOldBrokenDay52Sections() {
    [
      "#scienceStudioDay52Phenomenon",
      "#scienceStudioDay52MissionBrief",
      "#scienceStudioDay52SteveMission",
      "#scienceStudioDay52LabLaunch"
    ].forEach(function (selector) {
      const old = document.querySelector(selector);
      if (old) old.remove();
    });
  }

  function buildPage() {

    if (document.querySelector("#scienceStudioDay52PhenomenonFixed")) {
      return true;
    }

    const powerFrame =
      document.querySelector("#scienceStudioUniversalPowerFrame");

    if (!powerFrame) {
      return false;
    }

    removeOldBrokenDay52Sections();

    const phenomenon = buildPhenomenon();
    const missionBrief = buildMissionBrief();
    const steve = buildSteve();
    const lab = buildLab();

    powerFrame.insertAdjacentElement("afterend", phenomenon);
    phenomenon.insertAdjacentElement("afterend", missionBrief);
    missionBrief.insertAdjacentElement("afterend", steve);
    steve.insertAdjacentElement("afterend", lab);

    return true;
  }

  function startDay52() {

    if (buildPage()) {
      return;
    }

    let tries = 0;

    const timer = setInterval(function () {

      tries += 1;

      if (buildPage() || tries >= 20) {
        clearInterval(timer);
      }

    }, 250);
  }

  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      startDay52
    );

  } else {

    startDay52();

  }

  const observer = new MutationObserver(function () {

    if (!document.querySelector("#scienceStudioDay52PhenomenonFixed")) {
      buildPage();
    }

  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

})();
