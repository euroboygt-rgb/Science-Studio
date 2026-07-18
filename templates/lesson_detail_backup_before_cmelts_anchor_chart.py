{% extends "base.html" %}

{% block title %}
    Day {{ lesson.day if lesson.day is defined else lesson["day"] }} - {{ lesson.title if lesson.title is defined else lesson["title"] }}

<script>
function printAnchorChartOnly() {
    document.body.classList.add("print-anchor-only");
    window.print();
    setTimeout(function() {
        document.body.classList.remove("print-anchor-only");
    }, 500);
}
</script>

{% endblock %}

{% block content %}

<style>
    .lesson-hero {
        background: linear-gradient(135deg, #102542 0%, #1b4965 55%, #5fa8d3 100%);
        color: white;
        border: 5px solid #111;
        border-radius: 28px;
        padding: 30px;
        box-shadow: 8px 8px 0 rgba(17,17,17,0.18);
        margin-bottom: 24px;
    }

    .lesson-card {
        background: white;
        border: 4px solid #111;
        border-radius: 20px;
        padding: 20px;
        margin-bottom: 20px;
        box-shadow: 5px 5px 0 rgba(17,17,17,0.14);
    }

    .teks-badge {
        display: inline-block;
        background: #d8f3dc;
        border: 2px solid #111;
        border-radius: 999px;
        padding: 5px 12px;
        margin: 4px 5px 4px 0;
        font-weight: 900;
        white-space: nowrap;
    }

    .science-btn {
        border: 3px solid #111;
        border-radius: 12px;
        font-weight: 900;
        box-shadow: 3px 3px 0 rgba(17,17,17,0.2);
        margin: 4px;
    }

    .student-box {
        background: #fff3cd;
    }

    .teacher-box {
        background: #e8f4ff;
    }

    textarea, select {
        border: 2px solid #111 !important;
    }

    @media print {
        .no-print, nav, footer {
            display: none !important;
        }

        .lesson-card, .lesson-hero {
            box-shadow: none !important;
        }
    }

    .vocab-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 16px;
        margin-top: 14px;
    }

    .vocab-card {
        border: 3px solid #111;
        border-radius: 18px;
        padding: 14px;
        background: #f8f9fa;
        box-shadow: 3px 3px 0 rgba(17,17,17,0.12);
    }

    .vocab-picture {
        width: 70px;
        height: 70px;
        border: 3px solid #111;
        border-radius: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        line-height: 1;
        background: #fff3cd;
        margin-bottom: 12px;
        overflow: hidden;
        white-space: nowrap;
        flex-shrink: 0;
    }

    .vocab-word {
        font-size: 1.25rem;
        font-weight: 950;
        margin-bottom: 8px;
    }

    .vocab-label {
        font-weight: 900;
    }


    .vocab-picture img {
        max-width: 58px;
        max-height: 58px;
        display: block;
        object-fit: contain;
    }

    .anchor-chart-card {
        background: #fff7d6;
        border: 4px solid #111;
        border-radius: 20px;
        padding: 20px;
        margin-bottom: 20px;
        box-shadow: 5px 5px 0 rgba(17,17,17,0.14);
    }

    .anchor-chart-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 10px;
        margin-top: 12px;
    }

    .anchor-chart-word {
        background: white;
        border: 3px solid #111;
        border-radius: 14px;
        padding: 10px;
        font-weight: 900;
        text-align: center;
    }

    .anchor-chart-icon {
        font-size: 1.7rem;
        display: block;
        margin-bottom: 6px;
    }

    .anchor-chart-icon img {
        width: 42px;
        height: 42px;
        object-fit: contain;
        display: block;
        margin: 0 auto 6px auto;
    }

    @media print {
        body.print-anchor-only * {
            visibility: hidden !important;
        }

        body.print-anchor-only #lessonAnchorChart,
        body.print-anchor-only #lessonAnchorChart * {
            visibility: visible !important;
        }

        body.print-anchor-only #lessonAnchorChart {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            box-shadow: none !important;
        }
    }

</style>

{% macro teks_badges(teks_text) %}
    {% if teks_text %}
        {% set text_value = teks_text|string %}
        {% for item in text_value.split(",") %}
            {% set clean_item = item|trim %}
            {% if clean_item %}
                <span class="teks-badge">TEKS {{ clean_item }}</span>
            {% endif %}
        {% endfor %}
    {% endif %}
{% endmacro %}

{% macro render_items(value) %}
    {% if value %}
        {% if value is string %}
            <p>{{ value }}</p>
        {% elif value is sequence %}
            <ul>
                {% for item in value %}
                    {% if item is mapping %}
                        <li>
                            {% if item.get("title") %}<strong>{{ item.get("title") }}:</strong>{% endif %}
                            {{ item.get("text") or item.get("description") or item.get("question") or item }}
                        </li>
                    {% else %}
                        <li>{{ item }}</li>
                    {% endif %}
                {% endfor %}
            </ul>
        {% else %}
            <p>{{ value }}</p>
        {% endif %}
    {% else %}
        <p>Use this section for today’s lesson activity, notebook work, or teacher directions.</p>
    {% endif %}
{% endmacro %}

{% set lesson_day = lesson.day if lesson.day is defined else lesson["day"] %}
{% set lesson_title = lesson.title if lesson.title is defined else lesson["title"] %}
{% set lesson_unit = lesson.unit if lesson.unit is defined else lesson.get("unit", "Science") %}
{% set lesson_teks = lesson.teks if lesson.teks is defined else lesson.get("teks", "") %}
{% set lesson_focus = lesson.focus if lesson.focus is defined else lesson.get("focus", lesson.get("overview", "")) %}

<section class="lesson-hero">
    <span class="badge-science">Day {{ lesson_day }}</span>
    <span class="badge-science">{{ view|capitalize }} View</span>
    <span class="badge-science">{{ lesson_unit }}</span>

    <h1 class="mt-3">{{ lesson_title }}</h1>
    <p class="lead mb-2">{{ lesson_focus }}</p>

    <div>
        {{ teks_badges(lesson_teks) }}
    </div>

    <div class="no-print mt-3">
        <a href="/first-nine-weeks" class="btn btn-light science-btn">Back to 1st 9 Weeks</a>
        <a href="/first-nine-weeks/day/{{ lesson_day }}?view=student" class="btn btn-primary science-btn">Student View</a>
        <a href="/first-nine-weeks/day/{{ lesson_day }}?view=teacher" class="btn btn-success science-btn">Teacher View</a>
    </div>
</section>


<section id="lessonAnchorChart" class="anchor-chart-card">
    <h2>📌 Vocabulary Anchor Chart</h2>
    <p class="mb-2">
        Use these words during today’s lesson, notebook writing, lab discussion, exit ticket, and CER.
    </p>

    {% if lesson.get("vocabulary") %}
        <div class="anchor-chart-grid">
            {% for word in lesson.get("vocabulary") %}
                {% if word is mapping %}
                    {% set vocab_word = word.get("term") or word.get("word") or word.get("title") %}
                {% else %}
                    {% set vocab_word = word %}
                {% endif %}

                {% set vocab = get_vocab_info(vocab_word) %}

                <div class="anchor-chart-word">
                    <span class="anchor-chart-icon">
                        {% if vocab.image and vocab.image.startswith('/static/') %}
                            <img src="{{ vocab.image }}" alt="{{ vocab.word }} icon">
                        {% else %}
                            {{ vocab.image }}
                        {% endif %}
                    </span>
                    {{ vocab.word }}
                </div>
            {% endfor %}
        </div>
    {% endif %}

    <div class="no-print mt-3">
        <button type="button" class="btn btn-warning science-btn" onclick="printAnchorChartOnly()">
            Print This Anchor Chart
        </button>

        <a href="/vocabulary" class="btn btn-primary science-btn">
            Open Full Vocabulary Page
        </a>
    </div>
</section>



<section class="lesson-card">
    <h2>🎯 Learning Target</h2>
    <p>{{ lesson.get("learning_target", "I can learn today’s science concept and explain my thinking with evidence.") }}</p>
</section>

<section class="lesson-card">
    <h2>🔔 Bell Ringer</h2>
    {{ render_items(lesson.get("bell_ringer")) }}
</section>

<section class="lesson-card">
    <h2>👩‍🏫 Mini Lesson</h2>
    {{ render_items(lesson.get("mini_lesson")) }}
</section>

<section class="lesson-card student-box">
    <h2>📓 Science Notebook</h2>
    {{ render_items(lesson.get("science_notebook")) }}
</section>

<section class="lesson-card">
    <h2>🤝 Guided Practice</h2>
    {{ render_items(lesson.get("guided_practice")) }}
</section>

<section class="lesson-card">
    <h2>🔬 Lab / Investigation</h2>
    {{ render_items(lesson.get("lab")) }}

    {% if lesson.get("lab_link") %}
        <div class="no-print mt-3">
            <a href="{{ lesson.get('lab_link') }}" class="btn btn-lg btn-warning science-btn">
                {{ lesson.get("lab_link_text", "Open Interactive Lab") }}
            </a>
        </div>
    {% endif %}
</section>

<section class="lesson-card student-box">
    <h2>📋 Lab Notebook</h2>
    {{ render_items(lesson.get("lab_notebook")) }}
</section>

<section class="lesson-card">
    <h2>⭐ STAAR Practice</h2>
    {{ render_items(lesson.get("staar_practice")) }}
    <p><strong>Explain:</strong> How do you know your answer is correct?</p>
</section>

<section class="lesson-card">
    <h2>🎟️ Written Exit Ticket</h2>

    <p>Use this exit ticket to show your thinking in your own words.</p>

    <div class="mb-3">
        <label class="form-label"><strong>1. What is one important science idea you learned today?</strong></label>
        <textarea id="exitLearned{{ lesson_day }}" class="form-control" rows="4" placeholder="Today I learned..."></textarea>
    </div>

    <div class="mb-3">
        <label class="form-label"><strong>2. What evidence, data, model, or observation helped you understand it?</strong></label>
        <textarea id="exitEvidence{{ lesson_day }}" class="form-control" rows="4" placeholder="The evidence that helped me was..."></textarea>
    </div>

    <div class="mb-3">
        <label class="form-label"><strong>3. What question do you still have?</strong></label>
        <textarea id="exitQuestion{{ lesson_day }}" class="form-control" rows="3" placeholder="I still wonder..."></textarea>
    </div>

    <div class="mb-3">
        <label class="form-label"><strong>4. How confident do you feel?</strong></label>
        <select id="exitConfidence{{ lesson_day }}" class="form-select">
            <option value="">Choose one...</option>
            <option>I can teach this to someone else.</option>
            <option>I understand it with a little help.</option>
            <option>I am still confused and need more practice.</option>
        </select>
    </div>
</section>

<section class="lesson-card">
    <h2>🧠 Explain Your Thinking: CER</h2>

    <p>
        Use claim, evidence, and reasoning to explain your science thinking.
        This is different from STAAR multiple-choice practice.
    </p>

    <div class="row g-3">
        <div class="col-md-4">
            <label class="form-label"><strong>Claim</strong></label>
            <textarea id="cerClaim{{ lesson_day }}" class="form-control" rows="6" placeholder="My claim is..."></textarea>
        </div>

        <div class="col-md-4">
            <label class="form-label"><strong>Evidence</strong></label>
            <textarea id="cerEvidence{{ lesson_day }}" class="form-control" rows="6" placeholder="My evidence is..."></textarea>
        </div>

        <div class="col-md-4">
            <label class="form-label"><strong>Reasoning</strong></label>
            <textarea id="cerReasoning{{ lesson_day }}" class="form-control" rows="6" placeholder="This evidence supports my claim because..."></textarea>
        </div>
    </div>

    <div class="mt-3">
        <label class="form-label"><strong>Use Science Vocabulary</strong></label>
        <textarea id="cerVocabulary{{ lesson_day }}" class="form-control" rows="3" placeholder="Use at least one science vocabulary word from today’s lesson."></textarea>
    </div>

    <div class="alert alert-warning mt-3" style="border: 3px solid #111;">
        <strong>Oral Response Option:</strong>
        Students may also explain their response orally or record it using a teacher-approved district tool.
        Do not enter personal information.
    </div>

    <div class="no-print mt-3">
        <button type="button" class="btn btn-success science-btn" onclick="saveLessonResponses('{{ lesson_day }}')">
            Save on This Device
        </button>

        <button type="button" class="btn btn-warning science-btn" onclick="window.print()">
            Print / Save as PDF
        </button>

        <button type="button" class="btn btn-secondary science-btn" onclick="clearLessonResponses('{{ lesson_day }}')">
            Clear Responses
        </button>
    </div>

    <p class="small mt-3 mb-0">
        Privacy note: responses save only in this browser on this device. They are not sent to an online student database.
    </p>
</section>

<section class="lesson-card">
    <h2>🧾 Vocabulary</h2>

    {% if lesson.get("vocabulary") %}
        <div class="vocab-grid">
            {% for word in lesson.get("vocabulary") %}
                {% if word is mapping %}
                    {% set vocab_word = word.get("term") or word.get("word") or word.get("title") %}
                {% else %}
                    {% set vocab_word = word %}
                {% endif %}

                {% set vocab = get_vocab_info(vocab_word) %}

                <div class="vocab-card">
                    <div class="vocab-picture">
                        {% if vocab.image and vocab.image.startswith('/static/') %}
                            <img src="{{ vocab.image }}" alt="{{ vocab.word }} icon">
                        {% else %}
                            {{ vocab.image }}
                        {% endif %}
                    </div>

                    <div class="vocab-word">{{ vocab.word }}</div>

                    <p>
                        <span class="vocab-label">Definition:</span>
                        {{ vocab.definition }}
                    </p>

                    <p>
                        <span class="vocab-label">In science:</span>
                        {{ vocab.science }}
                    </p>

                    <p>
                        <span class="vocab-label">Real world:</span>
                        {{ vocab.real_world }}
                    </p>

                    <p class="mb-0">
                        <span class="vocab-label">STAAR connection:</span>
                        {{ vocab.staar }}
                    </p>
                </div>
            {% endfor %}
        </div>
    {% else %}
        <p>Add vocabulary from the unit word list or teacher notes.</p>
    {% endif %}
</section>

{% if lesson.get("mcgraw_hill") %}
<section class="lesson-card teacher-box">
    <h2>📘 McGraw Hill Connection</h2>
    <p>{{ lesson.get("mcgraw_hill") }}</p>
    <p class="small mb-0">
        Use the official district-approved McGraw Hill platform or textbook. Do not copy textbook pages into the public website.
    </p>
</section>
{% endif %}

{% if view == "teacher" %}
<section class="lesson-card teacher-box">
    <h2>🍎 Teacher Notes</h2>
    {{ render_items(lesson.get("teacher_notes")) }}

    {% if lesson.get("materials") %}
        <h3 class="mt-3">Materials</h3>
        {{ render_items(lesson.get("materials")) }}
    {% endif %}
</section>
{% endif %}

{% set printable_resource = none %}
{% if get_printable_resource_for_day is defined %}
    {% set printable_resource = get_printable_resource_for_day(lesson_day) %}
{% endif %}

{% if printable_resource %}
<section class="lesson-card">
    <h2>📄 Printable Resource</h2>
    <p>This lesson has a matching printable resource.</p>

    <a href="/resources/{{ printable_resource['slug'] }}" class="btn btn-lg btn-warning science-btn">
        Open Day {{ lesson_day }} Printable Resource
    </a>
</section>
{% endif %}

<script>
function getField(id) {
    return document.getElementById(id);
}

function saveLessonResponses(day) {
    const data = {
        exitLearned: getField("exitLearned" + day)?.value || "",
        exitEvidence: getField("exitEvidence" + day)?.value || "",
        exitQuestion: getField("exitQuestion" + day)?.value || "",
        exitConfidence: getField("exitConfidence" + day)?.value || "",
        cerClaim: getField("cerClaim" + day)?.value || "",
        cerEvidence: getField("cerEvidence" + day)?.value || "",
        cerReasoning: getField("cerReasoning" + day)?.value || "",
        cerVocabulary: getField("cerVocabulary" + day)?.value || ""
    };

    localStorage.setItem("scienceStudioLessonResponsesDay" + day, JSON.stringify(data));
    alert("Responses saved on this device.");
}

function loadLessonResponses(day) {
    const saved = localStorage.getItem("scienceStudioLessonResponsesDay" + day);

    if (!saved) return;

    try {
        const data = JSON.parse(saved);

        Object.keys(data).forEach(function(key) {
            const fieldId = key.replace("exit", "exit").replace("cer", "cer") + day;
        });

        if (getField("exitLearned" + day)) getField("exitLearned" + day).value = data.exitLearned || "";
        if (getField("exitEvidence" + day)) getField("exitEvidence" + day).value = data.exitEvidence || "";
        if (getField("exitQuestion" + day)) getField("exitQuestion" + day).value = data.exitQuestion || "";
        if (getField("exitConfidence" + day)) getField("exitConfidence" + day).value = data.exitConfidence || "";
        if (getField("cerClaim" + day)) getField("cerClaim" + day).value = data.cerClaim || "";
        if (getField("cerEvidence" + day)) getField("cerEvidence" + day).value = data.cerEvidence || "";
        if (getField("cerReasoning" + day)) getField("cerReasoning" + day).value = data.cerReasoning || "";
        if (getField("cerVocabulary" + day)) getField("cerVocabulary" + day).value = data.cerVocabulary || "";
    } catch (error) {
        console.log("Could not load lesson responses.", error);
    }
}

function clearLessonResponses(day) {
    if (!confirm("Clear saved responses for this lesson on this device?")) return;

    localStorage.removeItem("scienceStudioLessonResponsesDay" + day);

    [
        "exitLearned", "exitEvidence", "exitQuestion", "exitConfidence",
        "cerClaim", "cerEvidence", "cerReasoning", "cerVocabulary"
    ].forEach(function(prefix) {
        const field = getField(prefix + day);
        if (field) field.value = "";
    });
}

document.addEventListener("DOMContentLoaded", function () {
    loadLessonResponses("{{ lesson_day }}");
});
</script>

{% endblock %}
