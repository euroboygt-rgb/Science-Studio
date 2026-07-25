<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>{% block title %}5th Grade Science Studio{% endblock %}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Bootstrap for clean responsive layout -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- Science classroom styling used across the app -->
  <style>
    :root {
      --science-dark: #102542;
      --science-blue: #1b4965;
      --science-sky: #bde0fe;
      --science-green: #d1e7dd;
      --science-yellow: #fff3cd;
      --science-ink: #111;
      --science-paper: #f8f9fa;
    }

    body {
      background:
        radial-gradient(circle at 10% 10%, rgba(189, 224, 254, 0.35), transparent 25%),
        radial-gradient(circle at 90% 20%, rgba(209, 231, 221, 0.45), transparent 25%),
        linear-gradient(180deg, #eef7ff 0%, #f8fbff 45%, #ffffff 100%);
      color: #111;
      min-height: 100vh;
    }

    .science-navbar {
      background: linear-gradient(90deg, var(--science-dark), var(--science-blue));
      border-bottom: 5px solid var(--science-ink);
    }

    .navbar-brand {
      font-weight: 900;
      letter-spacing: 0.3px;
    }

    .nav-link {
      font-weight: 700;
    }

    .science-shell {
      max-width: 1220px;
      margin: 0 auto;
      padding: 26px 16px 60px;
    }

    .science-card {
      background: white;
      border: 4px solid var(--science-ink);
      border-radius: 22px;
      box-shadow: 6px 6px 0 rgba(17, 17, 17, 0.15);
    }

    .science-card-soft {
      background: rgba(255, 255, 255, 0.92);
      border: 2px solid rgba(17, 17, 17, 0.15);
      border-radius: 20px;
    }

    .science-btn {
      border: 3px solid var(--science-ink);
      border-radius: 14px;
      font-weight: 800;
      box-shadow: 3px 3px 0 rgba(17, 17, 17, 0.18);
    }

    .science-btn:hover {
      transform: translateY(-1px);
      box-shadow: 4px 4px 0 rgba(17, 17, 17, 0.2);
    }

    .badge-science {
      display: inline-block;
      background: var(--science-yellow);
      border: 3px solid var(--science-ink);
      border-radius: 999px;
      padding: 7px 12px;
      font-weight: 800;
      margin: 4px;
    }

    .classroom-footer {
      border-top: 4px solid var(--science-ink);
      background: #fff;
      padding: 16px;
      text-align: center;
      font-weight: 700;
    }

    a {
      text-decoration: none;
    }

    @media print {
      .science-navbar,
      .classroom-footer,
      .no-print {
        display: none !important;
      }

      body {
        background: white;
      }

      .science-card,
      .science-card-soft {
        box-shadow: none;
        border: 2px solid #111;
      }
    }
  </style>

  {% block head %}{% endblock %}
</head>

<body>
  <nav class="navbar navbar-expand-lg navbar-dark science-navbar no-print">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">🔬 5th Grade Science Studio</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#scienceNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="scienceNav">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link" href="/">Dashboard</a></li>
          <li class="nav-item"><a class="nav-link" href="/student-dashboard">Student Dashboard</a></li>
          <li class="nav-item"><a class="nav-link" href="/first-nine-weeks">1st 9 Weeks</a></li>
          <li class="nav-item"><a class="nav-link" href="/teacher-dashboard">Teacher Dashboard</a></li>
          <li class="nav-item"><a class="nav-link" href="/labs">Labs</a></li>
          <li class="nav-item"><a class="nav-link" href="/vocabulary">Vocabulary</a>
                    <a class="nav-link" href="/video-library">Video Library</a>
                    <a class="nav-link" href="/staar-practice/2022">STAAR Practice</a></li>
          <li class="nav-item"><a class="nav-link" href="/print-center">Print Center</a>
                    <a class="nav-link" href="/resources">Resources</a></li>
          <li class="nav-item"><a class="nav-link" href="/student-privacy">Privacy</a></li>
          <li class="nav-item"><a class="nav-link" href="/labs/staar-digital-assessment">Assessment</a></li>
          <li class="nav-item"><a class="nav-link" href="/labs/reflection-tracker">Reflection</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <main class="science-shell">
    {% block content %}{% endblock %}
  </main>

  <footer class="classroom-footer no-print">
    Built for 5th Grade Science • TEKS Practice • STAAR Readiness • Interactive Learning
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  {% block scripts %}{% endblock %}










<!-- Science Studio title oval fixer FINAL -->
<script>
document.addEventListener("DOMContentLoaded", function () {
    function applyTitleOvalFix() {
        document.querySelectorAll("h1").forEach(function (title) {
            let hero = title.parentElement;

            // Walk upward until we find the large title/header box.
            for (let i = 0; i < 8 && hero; i++) {
                const rect = hero.getBoundingClientRect();
                const style = window.getComputedStyle(hero);

                const isLargeBox = rect.width > 450 && rect.height > 90;
                const hasRoundedBorder = parseFloat(style.borderTopLeftRadius) >= 12;
                const isNearTop = rect.top < 280;

                if (isLargeBox && hasRoundedBorder && isNearTop) {
                    break;
                }

                hero = hero.parentElement;
            }

            if (!hero) return;

            const titleRect = title.getBoundingClientRect();
            const heroRect = hero.getBoundingClientRect();

            hero.querySelectorAll("span, a, div").forEach(function (el) {
                const text = (el.textContent || "").trim();
                const rect = el.getBoundingClientRect();
                const style = window.getComputedStyle(el);

                if (!text) return;
                if (text.length > 70) return;

                // Only items above the page title.
                if (rect.bottom > titleRect.top + 8) return;

                // Only items inside the title box.
                if (rect.top < heroRect.top || rect.left < heroRect.left || rect.right > heroRect.right) return;

                // Do not recolor regular buttons.
                if (el.tagName.toLowerCase() === "button") return;
                if (el.classList.contains("btn")) return;

                // Must look like a small oval/chip.
                const radius = parseFloat(style.borderTopLeftRadius) || 0;
                if (radius < 8) return;
                if (rect.width < 35 || rect.width > 320) return;
                if (rect.height < 16 || rect.height > 60) return;

                el.style.setProperty("background", "#6f2dbd", "important");
                el.style.setProperty("background-color", "#6f2dbd", "important");
                el.style.setProperty("color", "#ff9f1c", "important");
                el.style.setProperty("border", "4px solid #111", "important");
                el.style.setProperty("border-radius", "999px", "important");
                el.style.setProperty("font-weight", "1000", "important");
                el.style.setProperty("text-shadow", "none", "important");
                el.style.setProperty("box-shadow", "3px 3px 0 rgba(0,0,0,0.32)", "important");
            });
        });
    }

    applyTitleOvalFix();
    setTimeout(applyTitleOvalFix, 250);
});
</script>











<!-- Science Studio AI Floating Widget -->
<style>
#scienceStudioAiWidget {
    position: fixed !important;
    right: 24px !important;
    bottom: 24px !important;
    z-index: 999999 !important;
    font-family: Arial, sans-serif !important;
}

#scienceStudioAiPanel {
    display: none;
    width: 380px;
    max-width: calc(100vw - 40px);
    margin-bottom: 14px;
    background: white;
    border: 5px solid #111;
    border-radius: 22px;
    box-shadow: 8px 8px 0 rgba(0,0,0,0.3);
    overflow: hidden;
}

#scienceStudioAiPanel.open {
    display: block !important;
}

#scienceStudioAiButton {
    background: #6f2dbd !important;
    color: #ff9f1c !important;
    border: 5px solid #111 !important;
    border-radius: 999px !important;
    padding: 14px 20px !important;
    font-size: 16px !important;
    font-weight: 1000 !important;
    box-shadow: 6px 6px 0 rgba(0,0,0,0.35) !important;
    cursor: pointer !important;
}

.science-ai-top {
    background: linear-gradient(135deg, #123f8c, #6f2dbd);
    color: white;
    padding: 14px;
    border-bottom: 4px solid #111;
    font-weight: 1000;
}

.science-ai-content {
    padding: 14px;
    background: #f7fbff;
    max-height: 430px;
    overflow-y: auto;
}

.science-ai-bubble {
    background: white;
    border: 3px solid #111;
    border-radius: 16px;
    padding: 12px;
    margin-bottom: 10px;
    white-space: pre-wrap;
}

.science-ai-student {
    background: #fff7d6;
}

.science-ai-input-row {
    display: flex;
    gap: 8px;
    margin-top: 10px;
}

#scienceStudioAiInput {
    flex: 1;
    border: 3px solid #111;
    border-radius: 12px;
    padding: 9px;
}

#scienceStudioAiAsk {
    background: #ff9f1c;
    border: 3px solid #111;
    border-radius: 12px;
    padding: 9px 12px;
    font-weight: 1000;
    cursor: pointer;
}

@media print {
    #scienceStudioAiWidget {
        display: none !important;
    }
}
</style>

<div id="scienceStudioAiWidget">
    <div id="scienceStudioAiPanel">
        <div class="science-ai-top">
            🧪 Ask Science Studio AI<br>
            <span style="font-size: 13px;">5th Grade Science Helper</span>
        </div>

        <div class="science-ai-content" id="scienceStudioAiContent">
            <div class="science-ai-bubble">
Hi scientist! Ask me a 5th grade science question. I can help with matter, mixtures, force, motion, energy, labs, vocabulary, and STAAR thinking.
            </div>

            <div class="science-ai-bubble">
Example: <strong>What makes wood an insulator of electrical and thermal energy?</strong>
            </div>

            <div class="science-ai-bubble" style="font-size: 12px;">Please do not share private information. Keep questions science-related.<br>I can help you understand science, but I will not give answers to STAAR, exit ticket, quiz, or page questions.</div>

            <div class="science-ai-input-row">
                <input id="scienceStudioAiInput" type="text" maxlength="350" placeholder="Ask a science question..." />
                <button id="scienceStudioAiAsk" type="button">Ask</button>
            </div>
        </div>
    </div>

    <button id="scienceStudioAiButton" type="button">🧪 Ask Science Studio AI</button>
</div>

<script>
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("scienceStudioAiButton");
    const panel = document.getElementById("scienceStudioAiPanel");
    const input = document.getElementById("scienceStudioAiInput");
    const ask = document.getElementById("scienceStudioAiAsk");
    const content = document.getElementById("scienceStudioAiContent");
    const inputRow = content.querySelector(".science-ai-input-row");

    function addBubble(text, className) {
        const bubble = document.createElement("div");
        bubble.className = "science-ai-bubble " + (className || "");
        bubble.textContent = text;
        content.insertBefore(bubble, inputRow);
        content.scrollTop = content.scrollHeight;
    }

    button.addEventListener("click", function () {
        panel.classList.toggle("open");
    });

    async function askScienceAi() {
        const question = input.value.trim();

        if (!question) {
            return;
        }

        if (question.length > 350) {
            addBubble("Please ask a shorter science question. Keep it under 350 characters.", "");
            return;
        }

        addBubble("You asked:\n" + question, "science-ai-student");
        input.value = "";
        input.disabled = true;
        ask.disabled = true;
        ask.textContent = "...";

        try {
            const response = await fetch("/api/science-ai", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({question: question, page_path: window.location.pathname})
            });

            const data = await response.json();
            addBubble(data.answer || "I had trouble answering that. Try asking another science question.", "");
        } catch (error) {
            addBubble("Science Studio AI is having trouble connecting. Try again in a minute.", "");
        }

        input.disabled = false;
        ask.disabled = false;
        ask.textContent = "Ask";
        input.focus();
    }

    ask.addEventListener("click", askScienceAi);

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            askScienceAi();
        }
    });
});
</script>
<!-- End Science Studio AI Floating Widget -->


<!-- Unit 1 Matter Lab Arcade Button Router -->
<script>
document.addEventListener("DOMContentLoaded", function () {
    const match = window.location.pathname.match(/\/first-nine-weeks\/day\/(\d+)/);

    if (!match) {
        return;
    }

    const day = parseInt(match[1], 10);

    const unit1Arcades = {
        3: {url: "/labs/unit1/arcade/particle-states", text: "Open Particle State Sort"},
        4: {url: "/labs/unit1/arcade/mass-balance", text: "Open Mass Balance Challenge"},
        5: {url: "/labs/unit1/arcade/volume-pour", text: "Open Volume Pour Lab"},
        6: {url: "/labs/unit1/arcade/magnetism-sorter", text: "Open Magnetism Sorter"},
        7: {url: "/labs/unit1/arcade/density-tank", text: "Open Density Tank"},
        8: {url: "/labs/unit1/arcade/liquid-layers", text: "Open Liquid Layer Lab"},
        9: {url: "/labs/unit1/arcade/solubility-mixer", text: "Open Solubility Mixer"},
        10: {url: "/labs/unit1/arcade/insoluble-lab", text: "Open Insoluble Material Lab"},
        11: {url: "/labs/unit1/arcade/conductivity-lab", text: "Open Conductor or Insulator Lab"},
        12: {url: "/labs/unit1/arcade/electrical-conductivity", text: "Open Electrical Circuit Tester"},
        13: {url: "/labs/unit1/arcade/thermal-conductivity", text: "Open Thermal Energy Race"},
        14: {url: "/labs/unit1/arcade/property-detective", text: "Open Property Detective"},
        15: {url: "/labs/unit1/arcade/toy-engineering", text: "Open Toy Engineering Challenge"},
        16: {url: "/labs/unit1/arcade/unit-review", text: "Open Unit 1 Review Arcade"}
    };

    const lab = unit1Arcades[day];

    if (!lab) {
        return;
    }

    const candidates = Array.from(document.querySelectorAll("a, button")).filter(function (el) {
        const text = (el.textContent || "").trim().toLowerCase();
        return text.includes("open lab") || text.includes("open investigation") || text.includes("lab / investigation");
    });

    candidates.forEach(function (el) {
        const link = document.createElement("a");

        link.href = lab.url;
        link.textContent = lab.text;
        link.className = el.className || "btn btn-success";
        link.style.cssText = el.style.cssText || "";
        link.style.display = "inline-block";
        link.style.textDecoration = "none";

        el.replaceWith(link);
    });
});
</script>
<!-- End Unit 1 Matter Lab Arcade Button Router -->


<!-- MP1 Science Arcade Button Router -->
<script>
document.addEventListener("DOMContentLoaded", function () {
    const match = window.location.pathname.match(/\/first-nine-weeks\/day\/(\d+)/);

    if (!match) {
        return;
    }

    const day = parseInt(match[1], 10);

    const mp1Arcades = {
        1: {url: "/labs/mp1/arcade/lab-safety-review", text: "Open Lab Safety Review"},
        2: {url: "/labs/mp1/arcade/science-tools-practice", text: "Open Science Tools Practice"},
        17: {url: "/labs/mp1/arcade/mixture-sorter", text: "Open Mixture Sorter"},
        18: {url: "/labs/mp1/arcade/separation-magnetism-size", text: "Open Separation Tool Challenge"},
        19: {url: "/labs/mp1/arcade/filtration-evaporation", text: "Open Filtration and Evaporation Lab"},
        20: {url: "/labs/mp1/arcade/solution-maker", text: "Open Solution Maker"},
        21: {url: "/labs/mp1/arcade/solution-change-lab", text: "Open Solution Change Lab"},
        22: {url: "/labs/mp1/arcade/before-after-solution", text: "Open Before and After Solution Lab"},
        23: {url: "/labs/mp1/arcade/conservation-solution", text: "Open Conservation of Matter Lab"},
        24: {url: "/labs/mp1/arcade/measuring-conservation", text: "Open Mass Before and After Challenge"},
        25: {url: "/labs/mp1/arcade/tiny-particle-model", text: "Open Tiny Particle Model"},
        26: {url: "/labs/mp1/arcade/unit2-performance", text: "Open Unit 2 Review Game"},
        27: {url: "/labs/mp1/arcade/equal-pull", text: "Open Equal Pull Force Tug"},
        28: {url: "/labs/mp1/arcade/equal-push", text: "Open Equal Push Force Challenge"},
        29: {url: "/labs/mp1/arcade/unequal-pull", text: "Open Unequal Pull Force Lab"},
        30: {url: "/labs/mp1/arcade/unequal-push", text: "Open Unequal Push Force Lab"},
        31: {url: "/labs/mp1/arcade/mechanical-energy-transfer", text: "Open Mechanical Energy Transfer Lab"},
        32: {url: "/labs/mp1/arcade/motion-system", text: "Open Motion System Builder"},
        33: {url: "/labs/mp1/arcade/car-ramp", text: "Open Car on a Ramp Lab"},
        34: {url: "/labs/mp1/arcade/balloon-rocket", text: "Open Balloon Rocket Launch"},
        35: {url: "/labs/mp1/arcade/variables-data", text: "Open Variables and Data Lab"},
        36: {url: "/labs/mp1/arcade/force-motion-performance", text: "Open Force and Motion Performance Game"},
        37: {url: "/labs/mp1/arcade/forms-of-energy", text: "Open CMELTS Energy Sort"},
        38: {url: "/labs/mp1/arcade/everyday-transformations", text: "Open Energy Transformation Sorter"},
        39: {url: "/labs/mp1/arcade/battery-energy", text: "Open Battery Energy Lab"},
        40: {url: "/labs/mp1/arcade/flashlight-flow", text: "Open Flashlight Energy Flow"},
        41: {url: "/labs/mp1/arcade/flowchart-builder", text: "Open Energy Flowchart Builder"},
        42: {url: "/labs/mp1/arcade/multiple-devices", text: "Open Device Energy Detective"},
        43: {url: "/labs/mp1/arcade/energy-review", text: "Open Energy Transformation Review"},
        44: {url: "/labs/mp1/arcade/mp1-review-stations", text: "Open MP1 Review Stations Game"},
        45: {url: "/labs/mp1/arcade/mp1-test-reflection", text: "Open Science Reflection Builder"}
    };

    const lab = mp1Arcades[day];

    if (!lab) {
        return;
    }

    const candidates = Array.from(document.querySelectorAll("a, button")).filter(function (el) {
        const text = (el.textContent || "").trim().toLowerCase();
        return text.includes("open lab") || text.includes("open investigation") || text.includes("lab / investigation");
    });

    candidates.forEach(function (el) {
        const link = document.createElement("a");

        link.href = lab.url;
        link.textContent = lab.text;
        link.className = el.className || "btn btn-success";
        link.style.cssText = el.style.cssText || "";
        link.style.display = "inline-block";
        link.style.textDecoration = "none";

        el.replaceWith(link);
    });
});
</script>
<!-- End MP1 Science Arcade Button Router -->


<!-- Day 40 Flashlight Energy Flow Button Fix -->
<script>
document.addEventListener("DOMContentLoaded", function () {
    const match = window.location.pathname.match(/\/first-nine-weeks\/day\/(\d+)/);

    if (!match) {
        return;
    }

    const day = parseInt(match[1], 10);

    if (day !== 40) {
        return;
    }

    const flashlightUrl = "/labs/mp1/arcade/flashlight-flow";
    const flashlightText = "Open Flashlight Energy Flow Lab";

    const headings = Array.from(document.querySelectorAll("h2, h3")).filter(function (heading) {
        return (heading.textContent || "").toLowerCase().includes("lab");
    });

    headings.forEach(function (heading) {
        const card = heading.closest("section, .lesson-card, .card, .section-card, div");

        if (!card) {
            return;
        }

        const buttons = Array.from(card.querySelectorAll("a, button")).filter(function (el) {
            const text = (el.textContent || "").trim().toLowerCase();
            const href = (el.getAttribute("href") || "").toLowerCase();

            return (
                text.includes("open lab") ||
                text.includes("open investigation") ||
                text.includes("anchor chart") ||
                href.includes("cmelts-energy-anchor-chart") ||
                href.includes("energy-anchor-chart")
            );
        });

        buttons.forEach(function (el) {
            const link = document.createElement("a");
            link.href = flashlightUrl;
            link.textContent = flashlightText;
            link.className = el.className || "btn btn-success";
            link.style.cssText = el.style.cssText || "";
            link.style.display = "inline-block";
            link.style.textDecoration = "none";
            el.replaceWith(link);
        });
    });
});
</script>
<!-- End Day 40 Flashlight Energy Flow Button Fix -->




<!-- Science Studio Reflection Tracker Phase 2 Score Fix -->
<script>
(function () {
    const reflectionKey = "scienceStudioReflectionTrackerDataV2";

    function isReflectionPage() {
        const path = window.location.pathname.toLowerCase();
        const text = document.body ? document.body.innerText || "" : "";

        return (
            path.includes("reflection") ||
            text.includes("Reflection Tracker") ||
            text.includes("Notebook Checklist") ||
            text.includes("Goal-Setting Tool") ||
            text.includes("Goal Setting") ||
            text.includes("Topic Reflection Tracker")
        );
    }

    function showMessage(message, good = true) {
        let box = document.getElementById("scienceStudioReflectionMessage");

        if (!box) {
            box = document.createElement("div");
            box.id = "scienceStudioReflectionMessage";
            box.className = "science-studio-reflection-message";

            const main = document.querySelector("main, .container, .page-shell, body");
            main.prepend(box);
        }

        box.textContent = message;
        box.classList.toggle("bad", !good);
    }

    function usableFields() {
        return Array.from(document.querySelectorAll("input, select, textarea")).filter(field => {
            const type = (field.type || "").toLowerCase();
            return !["button", "submit", "reset", "hidden"].includes(type);
        });
    }

    function fieldContext(field) {
        return [
            field.id || "",
            field.name || "",
            field.placeholder || "",
            field.getAttribute("aria-label") || "",
            field.closest("label") ? field.closest("label").innerText : "",
            field.closest("div") ? field.closest("div").innerText.slice(0, 250) : "",
            field.closest("section") ? field.closest("section").innerText.slice(0, 350) : ""
        ].join(" ").toLowerCase();
    }

    function fieldKey(field, index) {
        if (field.id) return "id:" + field.id;
        if (field.name) return "name:" + field.name;

        const context = fieldContext(field)
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, 80);

        return "field:" + index + ":" + context;
    }

    function parseScore(value) {
        const match = String(value || "").match(/\d+(\.\d+)?/);
        if (!match) return null;

        const score = Math.round(Number(match[0]));
        if (Number.isNaN(score)) return null;

        return Math.max(0, Math.min(100, score));
    }

    function findDay44ScoreField() {
        const fields = usableFields();

        return fields.find(field => {
            const text = fieldContext(field);
            return text.includes("day 44") && text.includes("score");
        }) || fields.find(field => {
            const text = fieldContext(field);
            return text.includes("score") && !text.includes("confidence") && !text.includes("initial");
        });
    }

    function getScoreFromPage() {
        const field = findDay44ScoreField();
        if (!field) return null;
        return parseScore(field.value);
    }

    function findSavedAssessmentScore() {
        const keys = [
            "scienceStudioDay44AssessmentReport",
            "scienceStudioAssessmentReport",
            "scienceStudioAssessmentResults",
            "scienceStudioAssessmentData",
            "scienceStudioDay44Score",
            "scienceStudioLastAssessmentReport"
        ];

        function searchObject(value) {
            if (typeof value === "number") {
                return parseScore(value);
            }

            if (typeof value === "string") {
                return parseScore(value);
            }

            if (!value || typeof value !== "object") {
                return null;
            }

            const directKeys = [
                "percent",
                "percentage",
                "scorePercent",
                "score_percentage",
                "finalPercent",
                "finalScore",
                "score"
            ];

            for (const key of directKeys) {
                if (key in value) {
                    const found = searchObject(value[key]);
                    if (found !== null) return found;
                }
            }

            if (typeof value.correct === "number" && typeof value.total === "number" && value.total > 0) {
                return Math.round((value.correct / value.total) * 100);
            }

            for (const key of Object.keys(value)) {
                const found = searchObject(value[key]);
                if (found !== null) return found;
            }

            return null;
        }

        for (const key of keys) {
            const raw = localStorage.getItem(key);
            if (!raw) continue;

            const direct = parseScore(raw);
            if (direct !== null) return direct;

            try {
                const parsed = JSON.parse(raw);
                const found = searchObject(parsed);
                if (found !== null) return found;
            } catch (error) {}
        }

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);

            if (!/assessment|day44|staar/i.test(key)) continue;

            const raw = localStorage.getItem(key);

            try {
                const parsed = JSON.parse(raw);
                const found = searchObject(parsed);
                if (found !== null) return found;
            } catch (error) {
                const found = parseScore(raw);
                if (found !== null) return found;
            }
        }

        return null;
    }

    function replaceScoreTextNodes(score) {
        const scoreText = score === null ? "--%" : score + "%";

        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            null
        );

        const nodes = [];

        while (walker.nextNode()) {
            const node = walker.currentNode;
            const value = node.nodeValue.trim();

            if (value === "--%" || /^\d{1,3}%$/.test(value)) {
                const parentText = node.parentElement ? node.parentElement.closest("section, article, div")?.innerText || "" : "";

                if (
                    parentText.includes("Assessment Score") ||
                    parentText.includes("Score Reflection") ||
                    parentText.includes("Assessment Data")
                ) {
                    nodes.push(node);
                }
            }
        }

        nodes.forEach(node => {
            node.nodeValue = node.nodeValue.replace(/--%|\d{1,3}%/, scoreText);
        });
    }

    function findScoreReflectionCard() {
        const cards = Array.from(document.querySelectorAll("section, article, .card, .content-card, div"));

        return cards.find(card => {
            const text = card.innerText || "";
            return text.includes("Score Reflection");
        }) || null;
    }

    function updateScoreReflectionPanel(score) {
        const card = findScoreReflectionCard();

        if (!card) {
            return;
        }

        let panel = document.getElementById("scienceStudioScoreReflectionAuto");

        if (!panel) {
            panel = document.createElement("div");
            panel.id = "scienceStudioScoreReflectionAuto";
            panel.className = "science-studio-score-reflection-auto";
            panel.innerHTML = `
                <div class="science-studio-score-track">
                    <div class="science-studio-score-fill" id="scienceStudioScoreFill"></div>
                </div>
                <div class="science-studio-score-message" id="scienceStudioScoreMessage"></div>
            `;
            card.appendChild(panel);
        }

        const fill = document.getElementById("scienceStudioScoreFill");
        const message = document.getElementById("scienceStudioScoreMessage");

        if (score === null) {
            if (fill) fill.style.width = "0%";
            if (message) message.textContent = "Enter your score or load your Day 44 assessment data.";
            return;
        }

        if (fill) fill.style.width = score + "%";

        if (message) {
            if (score >= 80) {
                message.textContent = "Strong work! Use your evidence to explain what helped you succeed.";
            } else if (score >= 60) {
                message.textContent = "You are building skill. Choose one topic to review and improve.";
            } else {
                message.textContent = "This is useful evidence. Pick one skill to practice again and grow.";
            }
        }
    }

    function updateScoreVisuals() {
        const score = getScoreFromPage();

        replaceScoreTextNodes(score);
        updateScoreReflectionPanel(score);
    }

    function saveReflection() {
        const fields = usableFields();
        const data = {
            savedAt: new Date().toISOString(),
            fields: {},
            radios: {}
        };

        fields.forEach((field, index) => {
            const type = (field.type || "").toLowerCase();
            const key = fieldKey(field, index);

            if (type === "radio") {
                if (field.checked) {
                    data.radios[field.name || key] = field.value;
                }
                return;
            }

            if (type === "checkbox") {
                data.fields[key] = field.checked;
                return;
            }

            data.fields[key] = field.value;
        });

        localStorage.setItem(reflectionKey, JSON.stringify(data));
        updateScoreVisuals();
        updateNotebookProgress();
        showMessage("Reflection saved on this device.");
    }

    function loadReflection() {
        const raw = localStorage.getItem(reflectionKey);

        if (!raw) {
            showMessage("No saved reflection found yet on this device.", false);
            return;
        }

        let data;

        try {
            data = JSON.parse(raw);
        } catch (error) {
            showMessage("Saved reflection data could not be loaded.", false);
            return;
        }

        const fields = usableFields();

        fields.forEach((field, index) => {
            const type = (field.type || "").toLowerCase();
            const key = fieldKey(field, index);

            if (type === "radio") {
                field.checked = data.radios && data.radios[field.name || key] === field.value;
                return;
            }

            if (!(key in (data.fields || {}))) return;

            if (type === "checkbox") {
                field.checked = Boolean(data.fields[key]);
            } else {
                field.value = data.fields[key];
            }

            field.dispatchEvent(new Event("input", { bubbles: true }));
            field.dispatchEvent(new Event("change", { bubbles: true }));
        });

        updateScoreVisuals();
        updateNotebookProgress();
        showMessage("Saved reflection loaded.");
    }

    function loadDay44AssessmentData() {
        const score = findSavedAssessmentScore();
        const scoreField = findDay44ScoreField();

        if (score === null) {
            showMessage("No Day 44 assessment score was found on this device yet.", false);
            return;
        }

        if (!scoreField) {
            showMessage("I found a score, but I could not find the Day 44 score box.", false);
            return;
        }

        scoreField.value = String(score);
        scoreField.dispatchEvent(new Event("input", { bubbles: true }));
        scoreField.dispatchEvent(new Event("change", { bubbles: true }));

        updateScoreVisuals();
        showMessage("Day 44 assessment score loaded: " + score + "%.");
    }

    function updateNotebookProgress() {
        const sections = Array.from(document.querySelectorAll("section, article, .card, .content-card, div"));

        sections.forEach(section => {
            const text = section.innerText || "";

            if (!/Notebook Checklist|Notebook Completion/i.test(text)) {
                return;
            }

            const checkboxes = Array.from(section.querySelectorAll("input[type='checkbox']"));
            if (checkboxes.length === 0) return;

            const complete = checkboxes.filter(box => box.checked).length;
            const total = checkboxes.length;

            const progress = section.querySelector("progress");

            if (progress) {
                progress.max = total;
                progress.value = complete;
            }

            const textTargets = Array.from(section.querySelectorAll("p, span, div, strong"));
            const target = textTargets.find(el => /\d+\s*of\s*\d+\s*complete/i.test(el.innerText || ""));

            if (target) {
                target.textContent = complete + " of " + total + " complete";
            }
        });
    }

    function scrollToSection(kind) {
        const patterns = {
            assessment: [/Part\s*1/i, /Student Information/i, /Assessment Data/i],
            notebook: [/Notebook Checklist/i, /Notebook Check/i],
            goal: [/Goal Setting/i, /Goal-Setting/i],
            next: [/Next Unit/i, /Preview/i]
        };

        const list = patterns[kind] || [];
        const sections = Array.from(document.querySelectorAll("section, article, .card, .content-card, div"));

        const section = sections.find(section => {
            const text = section.innerText || "";
            return list.some(pattern => pattern.test(text));
        });

        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    document.addEventListener("click", function (event) {
        if (!isReflectionPage()) return;

        const button = event.target.closest("a, button");
        if (!button) return;

        const label = (button.innerText || button.textContent || "").trim().toLowerCase();

        if (label.includes("load day 44")) {
            event.preventDefault();
            loadDay44AssessmentData();
            return;
        }

        if (label.includes("save reflection")) {
            event.preventDefault();
            saveReflection();
            return;
        }

        if (label.includes("load saved reflection")) {
            event.preventDefault();
            loadReflection();
            return;
        }

        if (label.includes("assessment data")) {
            event.preventDefault();
            scrollToSection("assessment");
            return;
        }

        if (label.includes("notebook check")) {
            event.preventDefault();
            scrollToSection("notebook");
            return;
        }

        if (label.includes("goal setting")) {
            event.preventDefault();
            scrollToSection("goal");
            return;
        }

        if (label.includes("next unit")) {
            event.preventDefault();
            scrollToSection("next");
            return;
        }

        if (label.includes("print report")) {
            event.preventDefault();
            window.print();
        }
    }, true);

    document.addEventListener("input", function () {
        if (!isReflectionPage()) return;
        updateScoreVisuals();
        updateNotebookProgress();
    }, true);

    document.addEventListener("change", function () {
        if (!isReflectionPage()) return;
        updateScoreVisuals();
        updateNotebookProgress();
    }, true);

    window.addEventListener("load", function () {
        if (!isReflectionPage()) return;
        updateScoreVisuals();
        updateNotebookProgress();
    });

    setTimeout(function () {
        if (!isReflectionPage()) return;
        updateScoreVisuals();
        updateNotebookProgress();
    }, 250);
})();
</script>
<!-- End Science Studio Reflection Tracker Phase 2 -->

</body>
</html>
