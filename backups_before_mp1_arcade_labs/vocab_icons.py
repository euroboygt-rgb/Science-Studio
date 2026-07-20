from pathlib import Path
import re


def vocab_slug(term):
    term = str(term).lower().strip()
    term = term.replace("/", " ")
    term = term.replace("-", " ")
    term = re.sub(r"[^a-z0-9]+", "_", term)
    return term.strip("_") or "default_vocab"


def vocab_icon_path(term):
    slug = vocab_slug(term)
    icon_file = Path("static/vocab_icons") / f"{slug}.svg"

    if icon_file.exists():
        return f"/static/vocab_icons/{slug}.svg"

    return "/static/vocab_icons/default_vocab.svg"
