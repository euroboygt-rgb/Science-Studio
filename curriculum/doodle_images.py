from pathlib import Path
import re


def doodle_slug(term):
    term = str(term).lower().strip()
    term = term.replace("/", " ")
    term = term.replace("-", " ")
    term = re.sub(r"[^a-z0-9]+", "_", term)
    return term.strip("_") or "default"


def doodle_picture_path(term):
    slug = doodle_slug(term)
    file_path = Path("static/doodle_images") / f"{slug}.svg"

    if file_path.exists():
        return f"/static/doodle_images/{slug}.svg"

    return "/static/doodle_images/default.svg"
