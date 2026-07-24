from pathlib import Path
import html
import textwrap

OUT = Path("static/anchor_charts")
OUT.mkdir(parents=True, exist_ok=True)

W = 1200
H = 1600


def esc(value):
    return html.escape(str(value), quote=True)


def svg_start(title):
    return [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" role="img" aria-label="{esc(title)}">',
        '<rect width="1200" height="1600" fill="#ffffff"/>',
        '<style>',
        '.title{font-family:Arial,sans-serif;font-size:78px;font-weight:900}',
        '.subtitle{font-family:Arial,sans-serif;font-size:32px;font-weight:800;fill:#111}',
        '.head{font-family:Arial,sans-serif;font-size:34px;font-weight:900}',
        '.text{font-family:Arial,sans-serif;font-size:25px;font-weight:700;fill:#111}',
        '.small{font-family:Arial,sans-serif;font-size:21px;font-weight:700;fill:#111}',
        '.tiny{font-family:Arial,sans-serif;font-size:18px;font-weight:700;fill:#111}',
        '.box{stroke:#111;stroke-width:6}',
        '</style>',
    ]


def text(x, y, content, size=26, fill="#111", weight=700, anchor="start"):
    return (
        f'<text x="{x}" y="{y}" text-anchor="{anchor}" '
        f'font-family="Arial,sans-serif" font-size="{size}" font-weight="{weight}" fill="{fill}">{esc(content)}</text>'
    )


def wrapped(x, y, content, width, size=24, fill="#111", weight=700, anchor="start", line_height=None):
    if line_height is None:
        line_height = int(size * 1.25)
    max_chars = max(10, int(width / (size * 0.55)))
    lines = textwrap.wrap(str(content), width=max_chars)
    out = [
        f'<text x="{x}" y="{y}" text-anchor="{anchor}" font-family="Arial,sans-serif" font-size="{size}" font-weight="{weight}" fill="{fill}">'
    ]
    for i, line in enumerate(lines):
        dy = 0 if i == 0 else line_height
        out.append(f'<tspan x="{x}" dy="{dy}">{esc(line)}</tspan>')
    out.append('</text>')
    return "\n".join(out)


def card(x, y, w, h, fill):
    return f'<rect class="box" x="{x}" y="{y}" width="{w}" height="{h}" rx="28" fill="{fill}"/>'


def simple_icon(kind, x, y):
    if kind == "balance":
        return f'''
        <line x1="{x+20}" y1="{y+70}" x2="{x+170}" y2="{y+70}" stroke="#111" stroke-width="5"/>
        <rect x="{x+82}" y="{y+25}" width="26" height="120" fill="#555" stroke="#111" stroke-width="5"/>
        <rect x="{x+50}" y="{y+62}" width="92" height="38" fill="#ddd" stroke="#111" stroke-width="5"/>
        <circle cx="{x+35}" cy="{y+125}" r="30" fill="#9ca3af" stroke="#111" stroke-width="5"/>
        <circle cx="{x+165}" cy="{y+125}" r="26" fill="#f97316" stroke="#111" stroke-width="5"/>
        '''
    if kind == "beaker":
        return f'''
        <rect x="{x+35}" y="{y+30}" width="120" height="130" rx="14" fill="#bfdbfe" stroke="#111" stroke-width="5"/>
        <path d="M{x+35} {y+92} Q{x+95} {y+118} {x+155} {y+92} L{x+155} {y+160} L{x+35} {y+160} Z" fill="#60a5fa"/>
        '''
    if kind == "cylinder":
        return f'''
        <path d="M{x+55} {y+25} H{x+145} L{x+125} {y+160} Q{x+100} {y+180} {x+75} {y+160} Z" fill="#dbeafe" stroke="#111" stroke-width="5"/>
        <path d="M{x+67} {y+100} Q{x+100} {y+122} {x+133} {y+100} L{x+125} {y+160} Q{x+100} {y+180} {x+75} {y+160} Z" fill="#0284c7"/>
        <line x1="{x+130}" y1="{y+50}" x2="{x+105}" y2="{y+50}" stroke="#111" stroke-width="4"/>
        <line x1="{x+125}" y1="{y+78}" x2="{x+105}" y2="{y+78}" stroke="#111" stroke-width="4"/>
        '''
    if kind == "thermometer":
        return f'''
        <rect x="{x+65}" y="{y+35}" width="45" height="110" rx="18" fill="#fff" stroke="#111" stroke-width="5"/>
        <rect x="{x+80}" y="{y+65}" width="15" height="62" fill="#ef4444"/>
        <circle cx="{x+88}" cy="{y+150}" r="27" fill="#ef4444" stroke="#111" stroke-width="5"/>
        <circle cx="{x+155}" cy="{y+55}" r="25" fill="#fde047" stroke="#111" stroke-width="5"/>
        '''
    if kind == "texture":
        return f'''
        <circle cx="{x+65}" cy="{y+85}" r="45" fill="#f97316" stroke="#111" stroke-width="5"/>
        <rect x="{x+145}" y="{y+60}" width="88" height="60" fill="#c2410c" stroke="#111" stroke-width="5"/>
        <circle cx="{x+175}" cy="{y+90}" r="8" fill="#fff7d6"/>
        <circle cx="{x+210}" cy="{y+100}" r="8" fill="#fff7d6"/>
        <path d="M{x+40} {y+155} Q{x+135} {y+112} {x+235} {y+155}" fill="none" stroke="#111" stroke-width="5"/>
        '''
    if kind == "circuit":
        return f'''
        <rect x="{x+40}" y="{y+90}" width="50" height="75" rx="10" fill="#9ca3af" stroke="#111" stroke-width="5"/>
        <circle cx="{x+155}" cy="{y+112}" r="34" fill="#fde047" stroke="#111" stroke-width="5"/>
        <path d="M{x+85} {y+125} C{x+120} {y+50} {x+190} {y+50} {x+225} {y+125}" fill="none" stroke="#0284c7" stroke-width="8"/>
        <path d="M{x+85} {y+140} C{x+120} {y+198} {x+190} {y+198} {x+225} {y+140}" fill="none" stroke="#0284c7" stroke-width="8"/>
        '''
    if kind == "magnet":
        return f'''
        <path d="M{x+50} {y+80} a70 70 0 0 1 140 0 v55 h-42 v-55 a28 28 0 0 0 -56 0 v55 h-42z" fill="#dc2626" stroke="#111" stroke-width="5"/>
        <rect x="{x+50}" y="{y+135}" width="42" height="38" fill="#d1d5db" stroke="#111" stroke-width="5"/>
        <rect x="{x+148}" y="{y+135}" width="42" height="38" fill="#d1d5db" stroke="#111" stroke-width="5"/>
        '''
    if kind == "sandwater":
        return f'''
        <rect x="{x+40}" y="{y+30}" width="90" height="120" rx="12" fill="#bfdbfe" stroke="#111" stroke-width="5"/>
        <path d="M{x+40} {y+105} Q{x+85} {y+130} {x+130} {y+105} L{x+130} {y+150} L{x+40} {y+150} Z" fill="#d6a85c"/>
        <rect x="{x+170}" y="{y+30}" width="90" height="120" rx="12" fill="#bfdbfe" stroke="#111" stroke-width="5"/>
        <path d="M{x+170} {y+75} Q{x+215} {y+95} {x+260} {y+75} L{x+260} {y+150} L{x+170} {y+150} Z" fill="#60a5fa"/>
        '''
    if kind == "filter":
        return f'''
        <path d="M{x+75} {y+30} H{x+190} L{x+145} {y+135} V{x+185} H{x+120} V{x+135} Z" fill="#fff" stroke="#111" stroke-width="5"/>
        <path d="M{x+90} {y+85} H{x+175}" stroke="#38bdf8" stroke-width="10"/>
        '''
    if kind == "sieve":
        return f'''
        <ellipse cx="{x+145}" cy="{y+82}" rx="95" ry="42" fill="#fff" stroke="#111" stroke-width="5"/>
        <line x1="{x+65}" y1="{y+82}" x2="{x+225}" y2="{y+82}" stroke="#777" stroke-width="3"/>
        <line x1="{x+85}" y1="{y+55}" x2="{x+205}" y2="{y+110}" stroke="#777" stroke-width="3"/>
        <line x1="{x+85}" y1="{y+110}" x2="{x+205}" y2="{y+55}" stroke="#777" stroke-width="3"/>
        <circle cx="{x+120}" cy="{y+75}" r="12" fill="#6b7280" stroke="#111" stroke-width="4"/>
        <circle cx="{x+165}" cy="{y+100}" r="12" fill="#6b7280" stroke="#111" stroke-width="4"/>
        '''
    if kind == "evaporation":
        return f'''
        <ellipse cx="{x+155}" cy="{y+80}" rx="105" ry="32" fill="#bfdbfe" stroke="#111" stroke-width="5"/>
        <path d="M{x+80} {y+55} Q{x+155} {y+95} {x+230} {y+55}" fill="none" stroke="#0284c7" stroke-width="8"/>
        <rect x="{x+75}" y="{y+112}" width="160" height="58" rx="12" fill="#333" stroke="#111" stroke-width="5"/>
        <path d="M{x+95} {y+25} q-15 -38 15 -72 M{x+155} {y+25} q-15 -38 15 -72 M{x+215} {y+25} q-15 -38 15 -72" fill="none" stroke="#0284c7" stroke-width="6"/>
        '''
    if kind == "force":
        return f'''
        <rect x="{x+105}" y="{y+70}" width="110" height="72" fill="#a16207" stroke="#111" stroke-width="5"/>
        <line x1="{x+20}" y1="{y+106}" x2="{x+115}" y2="{y+106}" stroke="#7e22ce" stroke-width="12"/>
        <polygon points="{x+115},{y+76} {x+160},{y+106} {x+115},{y+136}" fill="#7e22ce" stroke="#111" stroke-width="4"/>
        '''
    if kind == "friction":
        return f'''
        <rect x="{x+65}" y="{y+120}" width="210" height="45" rx="20" fill="#ef4444" stroke="#111" stroke-width="5"/>
        <circle cx="{x+110}" cy="{y+175}" r="19" fill="#111"/>
        <circle cx="{x+230}" cy="{y+175}" r="19" fill="#111"/>
        <rect x="{x+150}" y="{y+75}" width="85" height="45" fill="#f97316" stroke="#111" stroke-width="5"/>
        '''
    if kind == "gravity":
        return f'''
        <circle cx="{x+105}" cy="{y+115}" r="35" fill="#ef4444" stroke="#111" stroke-width="5"/>
        <line x1="{x+105}" y1="{y+40}" x2="{x+105}" y2="{y+80}" stroke="#7e22ce" stroke-width="8"/>
        <polygon points="{x+85},{y+75} {x+105},{y+110} {x+125},{y+75}" fill="#7e22ce"/>
        <circle cx="{x+260}" cy="{y+115}" r="62" fill="#38bdf8" stroke="#111" stroke-width="5"/>
        '''
    if kind == "light":
        return f'''
        <circle cx="{x+140}" cy="{y+105}" r="42" fill="#fde047" stroke="#111" stroke-width="5"/>
        <line x1="{x+140}" y1="{y+25}" x2="{x+140}" y2="{y-25}" stroke="#f59e0b" stroke-width="8"/>
        <line x1="{x+140}" y1="{y+185}" x2="{x+140}" y2="{y+235}" stroke="#f59e0b" stroke-width="8"/>
        <line x1="{x+60}" y1="{y+105}" x2="{x+10}" y2="{y+105}" stroke="#f59e0b" stroke-width="8"/>
        <line x1="{x+220}" y1="{y+105}" x2="{x+270}" y2="{y+105}" stroke="#f59e0b" stroke-width="8"/>
        '''
    return ""


def write_chart(filename, parts):
    Path(filename).write_text("\n".join(parts) + "\n</svg>\n")


def properties():
    p = svg_start("Properties of Matter anchor chart")
    p += [
        text(600, 90, "Properties of Matter", 72, "#6f2dbd", 900, "middle"),
        '<path d="M220 125 Q600 170 980 125" fill="none" stroke="#00a6d6" stroke-width="10"/>',
        text(600, 195, "Matter takes up space and has mass.", 34, "#111", 800, "middle"),
        text(600, 245, "We identify matter by its physical properties.", 30, "#111", 800, "middle"),
    ]
    items = [
        ("Mass", "amount of matter", "#fff7d6", "#0f766e", "balance"),
        ("Density", "float or sink in water", "#eef9ff", "#1d4ed8", "beaker"),
        ("Volume", "space matter takes up", "#fff7ed", "#9333ea", "cylinder"),
        ("Temperature", "hot or cold", "#fdf2f8", "#db2777", "thermometer"),
        ("Texture", "smooth, rough, soft", "#fff7d6", "#ea580c", "texture"),
        ("Conductivity", "energy flows or is blocked", "#f0fdf4", "#854d0e", "circuit"),
        ("Magnetism", "attract or repel", "#f5f3ff", "#4f46e5", "magnet"),
        ("Solubility", "dissolves or does not dissolve", "#eff6ff", "#0284c7", "sandwater"),
        ("Physical State", "solid, liquid, gas", "#ecfdf5", "#16a34a", "beaker"),
    ]
    xs = [75, 435, 795]
    ys = [315, 610, 905]
    i = 0
    for y in ys:
        for x in xs:
            title, desc, fill, color, icon = items[i]
            p.append(card(x, y, 330, 250, fill))
            p.append(text(x + 165, y + 52, title, 32, color, 900, "middle"))
            p.append(simple_icon(icon, x + 55, y + 70))
            p.append(wrapped(x + 165, y + 220, desc, 280, 21, "#111", 700, "middle", 25))
            i += 1
    p += [
        '<rect x="130" y="1250" width="940" height="190" rx="36" fill="#fff7d6" stroke="#111" stroke-width="6"/>',
        text(600, 1320, "Remember!", 38, "#6f2dbd", 900, "middle"),
        text(600, 1375, "Physical properties can be observed or measured", 30, "#111", 800, "middle"),
        text(600, 1420, "without changing what the matter is.", 30, "#111", 800, "middle"),
    ]
    write_chart(OUT / "unit1_properties_of_matter_anchor_chart.svg", p)


def mixtures():
    p = svg_start("Mixtures anchor chart")
    p += [
        text(600, 100, "Mixtures", 88, "#6f2dbd", 900, "middle"),
        '<path d="M260 140 Q600 180 940 140" fill="none" stroke="#00a6d6" stroke-width="10"/>',
        text(600, 215, "A mixture combines two or more materials.", 34, "#111", 900, "middle"),
        text(600, 265, "Each material keeps its own physical properties.", 34, "#111", 900, "middle"),
    ]
    sections = [
        ("Ingredients stay the same", "A cookie and raisins keep their properties.", "#f0fdf4", "#16a34a", "texture"),
        ("Examples", "trail mix • sand and water", "#eff6ff", "#2563eb", "sandwater"),
        ("Can often be separated", "use magnets, filters, sieves, or sorting", "#fff7ed", "#ea580c", "filter"),
        ("Particles mix, not change", "materials mix but are not chemically changed", "#fdf2f8", "#db2777", "beaker"),
    ]
    coords = [(90, 345), (650, 345), (90, 685), (650, 685)]
    for (title, desc, fill, color, icon), (x, y) in zip(sections, coords):
        p.append(card(x, y, 460, 270, fill))
        p.append(wrapped(x + 230, y + 55, title, 390, 31, color, 900, "middle", 37))
        p.append(simple_icon(icon, x + 110, y + 78))
        p.append(wrapped(x + 230, y + 235, desc, 390, 22, "#111", 700, "middle", 26))
    p += [
        '<rect x="130" y="1055" width="940" height="300" rx="36" fill="#fff7d6" stroke="#111" stroke-width="6"/>',
        text(600, 1120, "Mixtures in Action", 44, "#6f2dbd", 900, "middle"),
        simple_icon("sandwater", 230, 1155),
        text(520, 1245, "+", 58, "#111", 900, "middle"),
        simple_icon("beaker", 565, 1155),
        text(800, 1245, "→", 58, "#111", 900, "middle"),
        simple_icon("filter", 835, 1155),
        text(600, 1320, "Sand and water can be mixed and separated.", 27, "#111", 800, "middle"),
        text(600, 1470, "Remember: mixtures can often be separated because properties are different!", 28, "#111", 900, "middle"),
    ]
    write_chart(OUT / "unit2_mixtures_anchor_chart.svg", p)


def separating():
    p = svg_start("Separating mixtures and solutions anchor chart")
    p += [
        text(600, 85, "Separating", 72, "#2563eb", 900, "middle"),
        text(600, 155, "Mixtures and Solutions", 58, "#16a34a", 900, "middle"),
        text(600, 220, "Different ways to separate materials.", 32, "#111", 800, "middle"),
    ]
    methods = [
        ("1. Filter", "Separates solids from liquids.", "Example: sand and water", "#fff1f2", "#e11d48", "filter"),
        ("2. Sieve", "Separates large solids from small solids.", "Example: rocks and sand", "#f0fdf4", "#16a34a", "sieve"),
        ("3. Magnetism", "Separates magnetic items.", "Example: paper clips and beans", "#eff6ff", "#2563eb", "magnet"),
        ("4. Density", "Some items float and some sink.", "Example: cork and rock in water", "#fff7ed", "#ea580c", "beaker"),
        ("5. Sorting Tools", "Separate by size or shape.", "Example: beads by shape", "#f0fdfa", "#0f766e", "texture"),
        ("6. Evaporation", "Uses heat to separate dissolved solids.", "Example: salt water", "#faf5ff", "#7e22ce", "evaporation"),
    ]
    coords = [(75, 290), (625, 290), (75, 590), (625, 590), (75, 890), (625, 890)]
    for (title, desc, ex, fill, color, icon), (x, y) in zip(methods, coords):
        p.append(card(x, y, 500, 255, fill))
        p.append(text(x + 35, y + 60, title, 38, color, 900))
        p.append(wrapped(x + 35, y + 110, desc, 270, 24, "#111", 800, "start", 30))
        p.append(simple_icon(icon, x + 275, y + 55))
        p.append(wrapped(x + 35, y + 215, ex, 430, 22, color, 800, "start", 26))
    p += [
        '<rect x="120" y="1245" width="960" height="160" rx="36" fill="#fff7d6" stroke="#111" stroke-width="6"/>',
        text(600, 1310, "Materials can be separated because they have", 31, "#111", 900, "middle"),
        text(600, 1360, "different physical properties!", 34, "#2563eb", 900, "middle"),
    ]
    write_chart(OUT / "unit2_separating_mixtures_anchor_chart.svg", p)


def forces():
    p = svg_start("Forces anchor chart")
    p += [
        text(600, 100, "Forces", 98, "#2563eb", 900, "middle"),
        '<path d="M330 145 Q600 185 870 145" fill="none" stroke="#16a34a" stroke-width="10"/>',
        text(600, 220, "Forces can be balanced or unbalanced.", 36, "#111", 900, "middle"),
        '<rect x="110" y="300" width="980" height="240" rx="36" fill="#faf5ff" stroke="#111" stroke-width="6"/>',
        text(600, 375, "A force is a PUSH or a PULL.", 50, "#111", 900, "middle"),
        simple_icon("force", 205, 390),
        '<g transform="translate(760 495) scale(-1 1)">' + simple_icon("force", 0, -105) + '</g>',
    ]
    sections = [
        ("Balanced Forces", "Equal size, opposite directions. Object stays still or moves the same.", "#f0fdf4", "#16a34a", "force"),
        ("Unbalanced Forces", "Forces are not equal. Motion changes.", "#fff1f2", "#dc2626", "force"),
        ("Friction", "A force between surfaces that rub. It slows motion.", "#eff6ff", "#2563eb", "friction"),
        ("Gravity", "A force that pulls objects toward Earth.", "#faf5ff", "#7e22ce", "gravity"),
    ]
    coords = [(90, 620), (650, 620), (90, 1010), (650, 1010)]
    for (title, desc, fill, color, icon), (x, y) in zip(sections, coords):
        p.append(card(x, y, 460, 320, fill))
        p.append(wrapped(x + 230, y + 60, title, 380, 36, color, 900, "middle", 40))
        p.append(wrapped(x + 230, y + 112, desc, 390, 25, "#111", 700, "middle", 31))
        p.append(simple_icon(icon, x + 90, y + 160))
    p.append(text(600, 1450, "Forces are all around us!", 44, "#6f2dbd", 900, "middle"))
    write_chart(OUT / "unit3_forces_anchor_chart.svg", p)


def cmelts():
    p = svg_start("CMELTS forms of energy anchor chart")
    p += [
        text(600, 95, "Forms of Energy", 82, "#6f2dbd", 900, "middle"),
        '<path d="M230 135 Q600 180 970 135" fill="none" stroke="#00a6d6" stroke-width="10"/>',
        text(600, 210, "Remember the forms of energy with CMELTS.", 34, "#111", 900, "middle"),
    ]
    forms = [
        ("C", "Chemical", "stored energy in food, fuel, batteries, and living things", "#fff7ed", "#ea580c", "circuit"),
        ("M", "Mechanical", "energy of motion, position, pushes, pulls, and moving parts", "#f0fdf4", "#16a34a", "force"),
        ("E", "Electrical", "energy moving through a closed circuit", "#eff6ff", "#2563eb", "circuit"),
        ("L", "Light", "energy we can see", "#fff1f2", "#dc2626", "light"),
        ("T", "Thermal", "heat energy from moving particles", "#faf5ff", "#7e22ce", "evaporation"),
        ("S", "Sound", "energy we hear from vibrations", "#f0fdfa", "#0f766e", "beaker"),
    ]
    coords = [(75, 285), (625, 285), (75, 585), (625, 585), (75, 885), (625, 885)]
    for (letter, title, desc, fill, color, icon), (x, y) in zip(forms, coords):
        p.append(card(x, y, 500, 255, fill))
        p.append(text(x + 45, y + 70, letter, 58, color, 900))
        p.append(text(x + 130, y + 65, title, 34, color, 900))
        p.append(wrapped(x + 130, y + 115, desc, 300, 23, "#111", 700, "start", 29))
        p.append(simple_icon(icon, x + 300, y + 65))
    p += [
        '<rect x="120" y="1240" width="960" height="185" rx="36" fill="#fff7d6" stroke="#111" stroke-width="6"/>',
        text(600, 1310, "Energy Transformation", 40, "#6f2dbd", 900, "middle"),
        text(600, 1365, "Energy can change from one form to another.", 31, "#111", 900, "middle"),
        text(600, 1410, "Battery → electrical energy → light and thermal energy", 27, "#111", 800, "middle"),
    ]
    write_chart(OUT / "unit4_cmelts_energy_anchor_chart.svg", p)


properties()
mixtures()
separating()
forces()
cmelts()

print("Clean anchor charts rebuilt:")
for path in sorted(OUT.glob("unit*_anchor_chart.svg")):
    print(" -", path)
