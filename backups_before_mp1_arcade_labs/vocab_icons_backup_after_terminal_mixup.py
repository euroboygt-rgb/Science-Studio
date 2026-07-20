import re


def vocab_slug(term):
    term = str(term).lower().strip()
    term = term.replace("/", " ")
    term = term.replace("-", " ")
    term = re.sub(r"[^a-z0-9]+", "_", term)
    term = term.strip("_")
    return term or "science"


def vocab_icon_path(term):
    return f"/static/vocab_icons/{vocab_slug(term)}.svg"
