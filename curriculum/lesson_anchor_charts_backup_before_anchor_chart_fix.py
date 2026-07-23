ANCHOR_CHARTS = {
    "properties-of-matter": {
        "slug": "properties-of-matter",
        "title": "Properties of Matter Anchor Chart",
        "description": "Use this chart to review mass, volume, density, temperature, texture, conductivity, magnetism, solubility, and physical state.",
        "image": "/static/anchor_charts/unit1_properties_of_matter_anchor_chart.svg",
        "unit": "Unit 1",
    },
    "mixtures": {
        "slug": "mixtures",
        "title": "Mixtures Anchor Chart",
        "description": "Use this chart to review what a mixture is and how materials keep their physical properties when combined.",
        "image": "/static/anchor_charts/unit2_mixtures_anchor_chart.png",
        "unit": "Unit 2",
    },
    "solutions-solubility": {
        "slug": "solutions-solubility",
        "title": "Solutions and Solubility Anchor Chart",
        "description": "Use this chart to review solute, solvent, solution, dissolve, soluble, and insoluble.",
        "image": "/static/anchor_charts/unit2_solutions_solubility_anchor_chart.png",
        "unit": "Unit 2",
    },
    "separating-mixtures": {
        "slug": "separating-mixtures",
        "title": "Separating Mixtures and Solutions Anchor Chart",
        "description": "Use this chart to review filtering, sieving, magnetism, density, sorting tools, and evaporation.",
        "image": "/static/anchor_charts/unit2_separating_mixtures_anchor_chart.png",
        "unit": "Unit 2",
    },
    "forces": {
        "slug": "forces",
        "title": "Forces Anchor Chart",
        "description": "Use this chart to review push, pull, balanced forces, unbalanced forces, friction, and gravity.",
        "image": "/static/anchor_charts/unit3_forces_anchor_chart.png",
        "unit": "Unit 3",
    },
}

DAY_TO_ANCHOR_CHART = {
    3: "properties-of-matter",
    4: "properties-of-matter",
    5: "properties-of-matter",
    6: "properties-of-matter",
    7: "properties-of-matter",
    8: "properties-of-matter",
    9: "solutions-solubility",
    10: "solutions-solubility",
    11: "properties-of-matter",
    12: "properties-of-matter",
    13: "properties-of-matter",
    14: "properties-of-matter",
    15: "properties-of-matter",
    16: "properties-of-matter",

    17: "mixtures",
    18: "separating-mixtures",
    19: "separating-mixtures",
    20: "solutions-solubility",
    21: "solutions-solubility",
    22: "solutions-solubility",
    23: "solutions-solubility",
    24: "solutions-solubility",
    25: "solutions-solubility",
    26: "separating-mixtures",

    27: "forces",
    28: "forces",
    29: "forces",
    30: "forces",
    31: "forces",
    32: "forces",
    33: "forces",
    34: "forces",
    35: "forces",
    36: "forces",
}


def get_lesson_anchor_chart_for_day(day):
    try:
        day = int(day)
    except Exception:
        return None

    slug = DAY_TO_ANCHOR_CHART.get(day)
    if not slug:
        return None

    return ANCHOR_CHARTS.get(slug)


def get_anchor_chart_by_slug(slug):
    return ANCHOR_CHARTS.get(str(slug or "").strip())


def get_all_lesson_anchor_charts():
    return list(ANCHOR_CHARTS.values())
