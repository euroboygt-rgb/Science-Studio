import os
from curriculum.vocabulary_library import get_vocab_info
from flask import Flask, render_template, request, redirect
from curriculum.first_nine_weeks import first_nine_weeks as first_nine_weeks_lessons
from curriculum.day1 import day1
from curriculum.day2 import day2
from curriculum.day3 import day3
from curriculum.day4 import day4
from curriculum.day5 import day5
from curriculum.day6 import day6
from curriculum.day7 import day7
from curriculum.day8 import day8
from curriculum.day9 import day9
from curriculum.day10 import day10
from curriculum.day11 import day11
from curriculum.day12 import day12
from curriculum.day13 import day13
from curriculum.day14 import day14
from curriculum.day15 import day15
from curriculum.day16 import day16
from curriculum.day17 import day17
from curriculum.day18 import day18
from curriculum.day19 import day19
from curriculum.day20 import day20
from curriculum.day21 import day21
from curriculum.day22 import day22
from curriculum.day23 import day23
from curriculum.day24 import day24
from curriculum.day25 import day25
from curriculum.day26 import day26
from curriculum.day27 import day27
from curriculum.day28 import day28
from curriculum.day29 import day29
from curriculum.day30 import day30
from curriculum.day31 import day31
from curriculum.day32 import day32
from curriculum.day33 import day33
from curriculum.day34 import day34
from curriculum.day35 import day35
from curriculum.day36 import day36
from curriculum.day37 import day37
from curriculum.day38 import day38
from curriculum.day39 import day39
from curriculum.day40 import day40
from curriculum.day41 import day41
from curriculum.day42 import day42
from curriculum.day43 import day43
from curriculum.day44 import day44
from curriculum.day45 import day45

from curriculum.printable_resources import resource_folders, printable_resources_by_slug, printable_resources_by_day

app = Flask(__name__)


@app.context_processor
def inject_vocabulary_helpers():
    return dict(get_vocab_info=get_vocab_info)



def get_first_nine_weeks_lessons():
    from curriculum.first_nine_weeks import first_nine_weeks_lessons
    return first_nine_weeks_lessons


def get_first_nine_weeks_lesson(day):
    lessons = get_first_nine_weeks_lessons()

    for lesson in lessons:
        lesson_day = lesson.get("day") if isinstance(lesson, dict) else getattr(lesson, "day", None)
        if lesson_day == day:
            return lesson

    return None



@app.context_processor
def inject_printable_resource_helpers():
    def get_printable_resource_for_day(day):
        try:
            return printable_resources_by_day.get(int(day))
        except Exception:
            return None

    return dict(get_printable_resource_for_day=get_printable_resource_for_day)



def get_student_dashboard_lessons():
    try:
        from curriculum import first_nine_weeks as fw

        for name in [
            "first_nine_weeks_lessons",
            "first_nine_weeks",
            "lessons",
            "all_lessons",
        ]:
            data = getattr(fw, name, None)
            if isinstance(data, list) and len(data) > 0:
                return data
    except Exception as error:
        print("Could not load student dashboard lessons:", error)

    return []



lesson_details = {
    1: day1,
    2: day2,
    3: day3,
    4: day4,
    5: day5,
    6: day6,
    7: day7,
    8: day8,
    9: day9,
    10: day10,
    11: day11,
    12: day12,
    13: day13,
    14: day14,
    15: day15,
    16: day16,
    17: day17,
    18: day18,
    19: day19,
    20: day20,
    21: day21,
    22: day22,
    23: day23,
    24: day24,
    25: day25,
    26: day26,
    27: day27,
    28: day28,
    29: day29,
    30: day30,
    31: day31,
    32: day32,
    33: day33,
    34: day34,
    35: day35,
    36: day36,
    37: day37,
    38: day38,
    39: day39,
    40: day40,
    41: day41,
    42: day42,
    43: day43,
    44: day44,
    45: day45,
}



@app.route("/")
def index():
    return render_template(
        "index.html",
        lessons=get_first_nine_weeks_lessons()
    )


@app.route("/labs")
def labs():
    return render_template("labs.html")


@app.route("/labs/mass-volume")
def mass_volume_lab():
    return render_template("mass_volume_lab.html")


@app.route("/labs/sink-float")
def sink_float_lab():
    return render_template("sink_float_lab.html")

@app.route("/labs/liquid-density")
def liquid_density_lab():
    return render_template("liquid_density_lab.html")



@app.route("/labs/solubility")
def solubility_lab():
    return render_template("solubility_lab.html")


@app.route("/labs/conductivity")
def conductivity_lab():
    return render_template("conductivity_lab.html")


@app.route("/labs/unit1-review")
def unit1_review_game():
    return render_template("unit1_review_game.html")


@app.route("/labs/mixtures")
def mixtures_lab():
    return render_template("mixtures_lab.html")


@app.route("/labs/particle-size")
def particle_size_lab():
    return render_template("particle_size_lab.html")


@app.route("/labs/magnet-separation")
def magnet_separation_lab():
    return render_template("magnet_separation_lab.html")


@app.route("/labs/relative-density-mixtures")
def relative_density_mixtures_lab():
    return render_template("relative_density_mixtures_lab.html")


@app.route("/labs/solutions")
def solutions_lab():
    return render_template("solutions_lab.html")


@app.route("/labs/evaporation")
def evaporation_lab():
    return render_template("evaporation_lab.html")


@app.route("/labs/conservation-matter")
def conservation_matter_lab():
    return render_template("conservation_matter_lab.html")


@app.route("/labs/unit2-review")
def unit2_review_game():
    return render_template("unit2_review_game.html")


@app.route("/labs/particles")
def particles_lab():
    return render_template("particles_lab.html")


@app.route("/labs/unit2-performance")
def unit2_performance_game():
    return render_template("unit2_performance_game.html")


@app.route("/labs/forces")
def forces_lab():
    return render_template("forces_lab.html")


@app.route("/labs/balanced-forces")
def balanced_forces_lab():
    return render_template("balanced_forces_lab.html")


@app.route("/labs/unequal-forces")
def unequal_forces_lab():
    return render_template("unequal_forces_lab.html")



@app.route("/labs/force-strength-direction")
def force_strength_direction_lab():
    return render_template("force_strength_direction_lab.html")



@app.route("/labs/gravity-drop")
def gravity_drop_lab():
    return render_template("gravity_drop_lab.html")



@app.route("/labs/friction-surfaces")
def friction_surfaces_lab():
    return render_template("friction_surfaces_lab.html")



@app.route("/labs/magnetism-force")
def magnetism_force_lab():
    return render_template("magnetism_force_lab.html")



@app.route("/labs/mechanical-energy-transfer")
def mechanical_energy_transfer_lab():
    return render_template("mechanical_energy_transfer_lab.html")



@app.route("/labs/variables-planner")
def variables_planner_lab():
    return render_template("variables_planner_lab.html")



@app.route("/videos/day35-data-graphing")
def day35_data_graphing_video():
    return render_template("day35_data_graphing_video.html")



@app.route("/labs/data-graphing")
def data_graphing_lab():
    return render_template("data_graphing_lab.html")



@app.route("/labs/ramp-investigation")
def ramp_investigation_lab():
    return render_template("ramp_investigation_lab.html")



@app.route("/labs/balloon-rocket")
def balloon_rocket_lab():
    return render_template("balloon_rocket_lab.html")



@app.route("/labs/ball-bounce-designer")
def ball_bounce_designer_lab():
    return render_template("ball_bounce_designer_lab.html")



@app.route("/labs/ball-bounce-analyzer")
def ball_bounce_analyzer_lab():
    return render_template("ball_bounce_analyzer_lab.html")



@app.route("/labs/playground-safety")
def playground_safety_lab():
    return render_template("playground_safety_lab.html")



@app.route("/labs/unit3-presentation-builder")
def unit3_presentation_builder():
    return render_template("unit3_presentation_builder.html")



@app.route("/labs/staar-spiral-review-game")
def staar_spiral_review_game():
    return render_template("staar_spiral_review_game.html")



@app.route("/labs/science-stations-board")
def science_stations_board():
    return render_template("science_stations_board.html")



@app.route("/labs/staar-digital-assessment")
def staar_digital_assessment():
    return render_template("staar_digital_assessment.html")



@app.route("/labs/reflection-tracker")
def reflection_tracker():
    return render_template("reflection_tracker.html")






@app.route("/teacher-dashboard")
def teacher_dashboard():
    return render_template(
        "teacher_dashboard.html",
        lessons=get_first_nine_weeks_lessons()
    )


@app.route("/go-to-lesson")
def go_to_lesson():
    day = request.args.get("day", type=int)

    if not day:
        return redirect("/student-dashboard")

    return redirect(f"/first-nine-weeks/day/{day}?view=student")





@app.route("/student-dashboard")
def student_dashboard():
    return render_template(
        "student_dashboard.html",
        lessons=get_first_nine_weeks_lessons()
    )


@app.route("/labs/physical-properties-sort")
def physical_properties_sort():
    return render_template("physical_properties_sort_game.html")



@app.route("/labs/states-matter-match")
def states_matter_match():
    return render_template("states_matter_match_game.html")



@app.route("/labs/magnetic-or-not")
def magnetic_or_not():
    return render_template("magnetic_or_not_lab_game.html")



@app.route("/labs/balance-scale-mass")
def balance_scale_mass():
    return render_template("balance_scale_mass_simulator.html")



@app.route("/labs/graduated-cylinder-volume")
def graduated_cylinder_volume():
    return render_template("graduated_cylinder_volume_simulator.html")



@app.route("/vocabulary")
def vocabulary_posters():
    return render_template("vocabulary_posters.html")



@app.route("/site-overview")
@app.route("/instructional-officer-demo")
def instructional_officer_demo():
    return render_template("instructional_officer_demo.html")




@app.route("/student-privacy")
@app.route("/privacy")
def student_privacy():
    return render_template("student_privacy.html")


@app.route("/resources")
def resources():
    return render_template("resources.html", resource_folders=resource_folders)

@app.route("/resources/<slug>")
def printable_resource(slug):
    resource = printable_resources_by_slug.get(slug)
    if not resource:
        return render_template("resources.html", resource_folders=resource_folders), 404
    return render_template("printable_resource.html", resource=resource)



@app.route("/first-nine-weeks")
def first_nine_weeks_page():
    return render_template(
        "first_nine_weeks.html",
        lessons=get_first_nine_weeks_lessons()
    )



@app.route("/first-nine-weeks/day/<int:day>")
def lesson_detail(day):
    view = request.args.get("view", "teacher")
    lesson = get_first_nine_weeks_lesson(day)

    if not lesson:
        return redirect("/first-nine-weeks")

    return render_template(
        "lesson_detail.html",
        lesson=lesson,
        view=view
    )



@app.route("/resources/cmelts-energy-anchor-chart")
def cmelts_energy_anchor_chart():
    return render_template("cmelts_anchor_chart.html")



@app.route("/go-to-teacher-lesson")
def go_to_teacher_lesson():
    from flask import request, redirect

    day = request.args.get("day", "").strip()

    if not day.isdigit():
        return redirect("/teacher-dashboard")

    return redirect(f"/first-nine-weeks/day/{int(day)}?view=teacher")


@app.route("/go-to-student-lesson")
def go_to_student_lesson():
    from flask import request, redirect

    day = request.args.get("day", "").strip()

    if not day.isdigit():
        return redirect("/student-dashboard")

    return redirect(f"/first-nine-weeks/day/{int(day)}?view=student")



@app.context_processor
def inject_teacher_support():
    from curriculum.teacher_support import get_teacher_support
    return dict(get_teacher_support=get_teacher_support)



@app.context_processor
def inject_staar_practice():
    from curriculum.staar_practice import get_staar_question
    return dict(get_staar_question=get_staar_question)



@app.context_processor
def inject_daily_assessments():
    from curriculum.daily_assessments import get_daily_assessment
    return dict(get_daily_assessment=get_daily_assessment)



@app.context_processor
def inject_lesson_page_helpers():
    from curriculum.lesson_flow import get_lesson_flow
    from curriculum.staar_practice import get_staar_question
    from curriculum.daily_assessments import get_daily_assessment
    from curriculum.teacher_support import get_teacher_support
    from curriculum.vocabulary_library import get_vocab_info

    return dict(
        get_lesson_flow=get_lesson_flow,
        get_staar_question=get_staar_question,
        get_daily_assessment=get_daily_assessment,
        get_teacher_support=get_teacher_support,
        get_vocab_info=get_vocab_info,
    )



@app.context_processor
def inject_vocab_icon_paths():
    from curriculum.vocab_icons import vocab_icon_path
    return dict(vocab_icon_path=vocab_icon_path)



@app.route("/first-nine-weeks/day/<int:day>/packet")
def lesson_packet(day):
    from flask import request, render_template
    from curriculum.first_nine_weeks import first_nine_weeks_lessons
    from curriculum.lesson_flow import get_lesson_flow
    from curriculum.staar_practice import get_staar_question

    current_view = request.args.get("view", "student")

    if current_view not in ["teacher", "student"]:
        current_view = "student"

    lesson = None

    for item in first_nine_weeks_lessons:
        item_day = item.get("day") if isinstance(item, dict) else getattr(item, "day", None)

        if item_day == day:
            lesson = item
            break

    if lesson is None:
        return "Lesson not found", 404

    lesson_title = lesson.get("title") if isinstance(lesson, dict) else getattr(lesson, "title", f"Day {day}")
    lesson_teks = lesson.get("teks", "") if isinstance(lesson, dict) else getattr(lesson, "teks", "")
    learning_target = (
        lesson.get("learning_target")
        or lesson.get("objective")
        or ""
    ) if isinstance(lesson, dict) else (
        getattr(lesson, "learning_target", "")
        or getattr(lesson, "objective", "")
    )

    vocab_terms = (
        lesson.get("vocabulary")
        or lesson.get("vocab")
        or []
    ) if isinstance(lesson, dict) else (
        getattr(lesson, "vocabulary", None)
        or getattr(lesson, "vocab", None)
        or []
    )

    flow = get_lesson_flow(day, lesson_title)

    if not vocab_terms:
        vocab_terms = flow.get("vocabulary", [])

    return render_template(
        "lesson_packet.html",
        lesson=lesson,
        lesson_day=day,
        lesson_title=lesson_title,
        lesson_teks=lesson_teks,
        learning_target=learning_target,
        vocab_terms=vocab_terms,
        flow=flow,
        current_view=current_view,
        staar_item=get_staar_question(day),
    )



@app.context_processor
def inject_resource_support():
    from curriculum.resource_support import get_resource_support
    return dict(get_resource_support=get_resource_support)



@app.route("/first-nine-weeks/day/<int:day>/notebook-resource")
def lesson_notebook_resource(day):
    from flask import request, render_template
    from curriculum.first_nine_weeks import first_nine_weeks_lessons
    from curriculum.lesson_flow import get_lesson_flow

    current_view = request.args.get("view", "student")

    if current_view not in ["teacher", "student"]:
        current_view = "student"

    lesson = None

    for item in first_nine_weeks_lessons:
        item_day = item.get("day") if isinstance(item, dict) else getattr(item, "day", None)

        if item_day == day:
            lesson = item
            break

    if lesson is None:
        return "Lesson not found", 404

    lesson_title = lesson.get("title") if isinstance(lesson, dict) else getattr(lesson, "title", f"Day {day}")
    lesson_teks = lesson.get("teks", "") if isinstance(lesson, dict) else getattr(lesson, "teks", "")
    learning_target = (
        lesson.get("learning_target")
        or lesson.get("objective")
        or ""
    ) if isinstance(lesson, dict) else (
        getattr(lesson, "learning_target", "")
        or getattr(lesson, "objective", "")
    )

    vocab_terms = (
        lesson.get("vocabulary")
        or lesson.get("vocab")
        or []
    ) if isinstance(lesson, dict) else (
        getattr(lesson, "vocabulary", None)
        or getattr(lesson, "vocab", None)
        or []
    )

    flow = get_lesson_flow(day, lesson_title)

    if not vocab_terms:
        vocab_terms = flow.get("vocabulary", [])

    return render_template(
        "student_notebook_resource.html",
        lesson=lesson,
        lesson_day=day,
        lesson_title=lesson_title,
        lesson_teks=lesson_teks,
        learning_target=learning_target,
        vocab_terms=vocab_terms,
        flow=flow,
        current_view=current_view,
    )



@app.context_processor
def inject_doodle_resource():
    from curriculum.doodle_resource import get_doodle_resource
    return dict(get_doodle_resource=get_doodle_resource)



@app.context_processor
def inject_doodle_picture_paths():
    from curriculum.doodle_images import doodle_picture_path
    return dict(doodle_picture_path=doodle_picture_path)



@app.route("/print-center")
@app.route("/resources/print-center")
def print_center():
    from flask import render_template
    from curriculum.first_nine_weeks import first_nine_weeks_lessons

    lesson_map = {}

    for lesson in first_nine_weeks_lessons:
        if isinstance(lesson, dict):
            lesson_map[lesson.get("day")] = lesson
        else:
            lesson_map[getattr(lesson, "day", None)] = {
                "day": getattr(lesson, "day", None),
                "title": getattr(lesson, "title", "Lesson"),
            }

    return render_template("print_center.html", lesson_map=lesson_map)



@app.context_processor
def inject_power_frames():
    from curriculum.power_frames import get_power_frame
    return dict(get_power_frame=get_power_frame)





# Simple in-memory Science Studio AI cost guard.
# This helps prevent students from clicking too fast or using too many AI questions.
SCIENCE_AI_REQUESTS = {}

def science_ai_rate_limit_ok(student_key):
    import time

    now = time.time()
    window_seconds = 10 * 60
    max_questions = 10
    minimum_seconds_between_questions = 4

    old_times = SCIENCE_AI_REQUESTS.get(student_key, [])
    recent_times = [t for t in old_times if now - t < window_seconds]

    if recent_times and now - recent_times[-1] < minimum_seconds_between_questions:
        SCIENCE_AI_REQUESTS[student_key] = recent_times
        return False, "Slow down, scientist. Please wait a few seconds before asking another question."

    if len(recent_times) >= max_questions:
        SCIENCE_AI_REQUESTS[student_key] = recent_times
        return False, "You have asked a lot of questions. Take a short break and try again in about 10 minutes."

    recent_times.append(now)
    SCIENCE_AI_REQUESTS[student_key] = recent_times
    return True, ""


@app.route("/api/science-ai", methods=["POST"])
def api_science_ai():
    from flask import request, jsonify
    from curriculum.science_ai_tutor import answer_science_question

    forwarded_for = request.headers.get("X-Forwarded-For", "")
    student_key = forwarded_for.split(",")[0].strip() or request.remote_addr or "unknown"

    ok, message = science_ai_rate_limit_ok(student_key)
    if not ok:
        return jsonify({"answer": message}), 200

    data = request.get_json(silent=True) or {}
    question = (data.get("question") or "").strip()
    page_path = (data.get("page_path") or "").strip()

    try:
        answer = answer_science_question(question, page_path=page_path)
        return jsonify({"answer": answer})
    except Exception:
        return jsonify({
            "answer": "Science Studio AI is having trouble right now. Try again in a minute."
        }), 200




# Circuit Conductor Tester routes
@app.route("/labs/circuit-conductor-tester")
@app.route("/labs/conductor-insulator-circuit")
@app.route("/labs/unit1/arcade/electrical-conductivity")
@app.route("/labs/unit1/arcade/conductivity-lab")
def circuit_conductor_tester():
    from flask import render_template
    return render_template("circuit_conductor_tester.html")
# End Circuit Conductor Tester routes

@app.route("/labs/unit1/arcade/<lab_slug>")
def unit1_lab_arcade(lab_slug):
    from flask import render_template, redirect
    from curriculum.unit1_lab_arcades import get_unit1_arcade_by_slug

    lab = get_unit1_arcade_by_slug(lab_slug)

    if not lab:
        return redirect("/labs")

    lab = dict(lab)
    lab["slug"] = lab_slug

    return render_template("unit1_matter_arcade.html", lab=lab)


@app.route("/labs/unit1/day/<int:day>")
def unit1_lab_arcade_by_day(day):
    from flask import redirect
    from curriculum.unit1_lab_arcades import get_unit1_arcade_for_day

    lab = get_unit1_arcade_for_day(day)

    if not lab:
        return redirect("/labs")

    return redirect(lab["url"])



@app.route("/resources/sinc-magnetic-anchor-chart")
def sinc_magnetic_anchor_chart():
    from flask import render_template
    return render_template("sinc_magnetic_anchor_chart.html")



@app.route("/labs/unit1/arcade/<lab_slug>/recording-sheet")
def unit1_lab_recording_sheet(lab_slug):
    from flask import render_template, redirect, request
    from curriculum.unit1_lab_arcades import get_unit1_arcade_by_slug

    lab = get_unit1_arcade_by_slug(lab_slug)

    if not lab:
        return redirect("/labs")

    lab = dict(lab)
    lab["slug"] = lab_slug

    view = request.args.get("view", "student").strip().lower()

    if view not in ["student", "teacher"]:
        view = "student"

    return render_template("unit1_lab_recording_sheet.html", lab=lab, view=view)



@app.route("/labs/mp1/arcade/<lab_slug>")
def mp1_science_arcade(lab_slug):
    from flask import render_template, redirect
    from curriculum.mp1_lab_arcades import get_mp1_arcade_by_slug

    lab = get_mp1_arcade_by_slug(lab_slug)

    if not lab:
        return redirect("/labs")

    lab = dict(lab)
    lab["slug"] = lab_slug

    return render_template("mp1_science_arcade.html", lab=lab)


@app.route("/labs/mp1/day/<int:day>")
def mp1_science_arcade_by_day(day):
    from flask import redirect
    from curriculum.mp1_lab_arcades import get_mp1_arcade_for_day

    lab = get_mp1_arcade_for_day(day)

    if not lab:
        return redirect("/labs")

    return redirect(lab["url"])


@app.route("/labs/mp1/arcade/<lab_slug>/recording-sheet")
def mp1_lab_recording_sheet(lab_slug):
    from flask import render_template, redirect, request
    from curriculum.mp1_lab_arcades import get_mp1_arcade_by_slug

    lab = get_mp1_arcade_by_slug(lab_slug)

    if not lab:
        return redirect("/labs")

    lab = dict(lab)
    lab["slug"] = lab_slug

    view = request.args.get("view", "student").strip().lower()

    if view not in ["student", "teacher"]:
        view = "student"

    return render_template("mp1_lab_recording_sheet.html", lab=lab, view=view)



# Custom Day 40 Flashlight Energy Flow arcade lab
@app.route("/labs/mp1/arcade/flashlight-flow")
@app.route("/labs/flashlight-energy-flow")
@app.route("/labs/flashlight-flow")
def flashlight_energy_flow_game():
    from flask import render_template
    from curriculum.mp1_lab_arcades import get_mp1_arcade_by_slug

    lab = get_mp1_arcade_by_slug("flashlight-flow") or {
        "day": 40,
        "unit": "Unit 4",
        "title": "Flashlight Energy Flow",
        "subtitle": "Trace chemical, electrical, light, and thermal energy in a flashlight.",
        "slug": "flashlight-flow",
    }

    lab = dict(lab)
    lab["slug"] = "flashlight-flow"

    return render_template("flashlight_energy_flow_game.html", lab=lab)
# End custom Day 40 Flashlight Energy Flow arcade lab



@app.context_processor
def inject_science_video_helpers():
    from curriculum.video_library import get_videos_for_day
    return dict(get_videos_for_day=get_videos_for_day)



@app.route("/video-library")
@app.route("/videos")
def science_video_library_page():
    from flask import render_template
    from curriculum.video_library import get_all_videos

    return render_template("video_library.html", videos=get_all_videos())


@app.route("/video-library/<video_slug>/notes")
def general_video_note_taker(video_slug):
    from flask import render_template, redirect, request
    from curriculum.video_library import get_video_by_slug

    video = get_video_by_slug(video_slug)

    if not video:
        return redirect("/video-library")

    view = request.args.get("view", "student").strip().lower()
    if view not in ["student", "teacher"]:
        view = "student"

    return render_template("video_note_taker.html", video=video, day=None, view=view)


@app.route("/first-nine-weeks/day/<int:day>/video-notes/<video_slug>")
def lesson_video_note_taker(day, video_slug):
    from flask import render_template, redirect, request
    from curriculum.video_library import get_video_by_slug, get_videos_for_day

    video = get_video_by_slug(video_slug)

    if not video:
        return redirect(f"/first-nine-weeks/day/{day}?view=student")

    allowed_slugs = [v["slug"] for v in get_videos_for_day(day)]

    if video_slug not in allowed_slugs:
        return redirect(f"/first-nine-weeks/day/{day}?view=student")

    view = request.args.get("view", "student").strip().lower()
    if view not in ["student", "teacher"]:
        view = "student"

    return render_template("video_note_taker.html", video=video, day=day, view=view)



# STAAR 2022-style practice helper and routes
@app.context_processor
def inject_staar_2022_practice_helpers():
    from curriculum.staar_2022_practice import get_staar_2022_questions_for_day
    return dict(get_staar_2022_questions_for_day=get_staar_2022_questions_for_day)


@app.route("/staar-practice")
@app.route("/staar-practice/2022")
@app.route("/staar-practice-2022")
def staar_2022_practice_library():
    from flask import render_template
    from curriculum.staar_2022_practice import get_all_staar_2022_questions

    return render_template(
        "staar_2022_practice_library.html",
        questions=get_all_staar_2022_questions(),
        page_title="STAAR Practice Library",
        page_subtitle="Original Grade 5 Science STAAR-style questions aligned to the 2022 released test skills."
    )


@app.route("/staar-practice/2022/day/<int:day>")
def staar_2022_practice_by_day(day):
    from flask import render_template
    from curriculum.staar_2022_practice import get_staar_2022_questions_for_day

    return render_template(
        "staar_2022_practice_library.html",
        questions=get_staar_2022_questions_for_day(day),
        page_title=f"Day {day} STAAR Practice",
        page_subtitle="Original STAAR-style practice connected to this lesson day."
    )


@app.route("/staar-practice/2022/item/<int:item_number>")
def staar_2022_practice_item(item_number):
    from flask import render_template, redirect, request
    from curriculum.staar_2022_practice import get_staar_2022_question

    question = get_staar_2022_question(item_number)

    if not question:
        return redirect("/staar-practice/2022")

    view = request.args.get("view", "student").strip().lower()

    if view not in ["student", "teacher"]:
        view = "student"

    return render_template("staar_2022_practice_question.html", question=question, view=view)


@app.route("/staar-practice/2022/printable")
def staar_2022_practice_printable():
    from flask import render_template, request
    from curriculum.staar_2022_practice import get_all_staar_2022_questions

    view = request.args.get("view", "student").strip().lower()

    if view not in ["student", "teacher"]:
        view = "student"

    return render_template(
        "staar_2022_printable.html",
        questions=get_all_staar_2022_questions(),
        view=view
    )
# End STAAR 2022-style practice helper and routes



@app.context_processor
def inject_staar_teks_grouping_helper():
    from curriculum.staar_2022_practice import group_staar_questions_by_teks
    return dict(group_staar_questions_by_teks=group_staar_questions_by_teks)



@app.context_processor
def inject_staar_grade_dropdown_grouping_helper():
    from curriculum.staar_2022_practice import group_staar_questions_by_grade_and_teks
    return dict(group_staar_questions_by_grade_and_teks=group_staar_questions_by_grade_and_teks)






@app.context_processor
def inject_guided_practice_scenario_helpers():
    from curriculum.guided_practice_scenarios import get_guided_practice_scenario, is_circuit_lesson
    return dict(
        get_guided_practice_scenario=get_guided_practice_scenario,
        is_circuit_lesson=is_circuit_lesson
    )









# Science Studio printable lesson anchor chart routes
@app.context_processor
def inject_lesson_anchor_chart_helpers():
    from curriculum.lesson_anchor_charts import get_lesson_anchor_chart_for_day, get_all_lesson_anchor_charts
    return dict(
        get_lesson_anchor_chart_for_day=get_lesson_anchor_chart_for_day,
        get_all_lesson_anchor_charts=get_all_lesson_anchor_charts
    )

@app.route("/resources/anchor-charts")
@app.route("/anchor-charts")
def lesson_anchor_chart_library():
    from flask import render_template
    from curriculum.lesson_anchor_charts import get_all_lesson_anchor_charts
    return render_template(
        "lesson_anchor_chart_library.html",
        charts=get_all_lesson_anchor_charts()
    )

@app.route("/resources/anchor-chart/<chart_slug>")
def lesson_anchor_chart_print(chart_slug):
    from flask import render_template, request, redirect
    from curriculum.lesson_anchor_charts import get_anchor_chart_by_slug
    chart = get_anchor_chart_by_slug(chart_slug)
    if not chart:
        return redirect("/resources/anchor-charts")
    return render_template(
        "lesson_anchor_chart_print.html",
        chart=chart,
        autoprint=request.args.get("print") == "1"
    )
# End Science Studio printable lesson anchor chart routes


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False, use_reloader=False)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False, use_reloader=False)
