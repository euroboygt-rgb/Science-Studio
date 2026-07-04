from pathlib import Path
import ast

# This helper prints the image paths you can add to vocabulary dictionaries.
unit1 = {
    "conductor": "/static/vocabulary/unit1/conductor.png",
    "conductivity": "/static/vocabulary/unit1/conductor.png",
    "gas": "/static/vocabulary/unit1/gas.png",
    "insulator": "/static/vocabulary/unit1/insulator.png",
    "liquid": "/static/vocabulary/unit1/liquid.png",
    "magnetism": "/static/vocabulary/unit1/magnetism.png",
    "mass": "/static/vocabulary/unit1/mass.png",
    "matter": "/static/vocabulary/unit1/matter.png",
    "physical state": "/static/vocabulary/unit1/physical_state.png",
    "relative density": "/static/vocabulary/unit1/relative_density.png",
    "solid": "/static/vocabulary/unit1/solid.png",
    "solubility": "/static/vocabulary/unit1/solubility.png",
    "volume": "/static/vocabulary/unit1/volume.png",
}

unit2 = {
    "conservation of matter": "/static/vocabulary/unit2/conservation_of_matter.png",
    "mixture": "/static/vocabulary/unit2/mixture.png",
    "particle": "/static/vocabulary/unit2/particle.png",
    "solute": "/static/vocabulary/unit2/solute.png",
    "solution": "/static/vocabulary/unit2/solution.png",
    "solvent": "/static/vocabulary/unit2/solvent.png",
}

print("Unit 1 image paths:")
for k, v in unit1.items():
    print(f'{k}: "image": "{v}",')
print("\nUnit 2 image paths:")
for k, v in unit2.items():
    print(f'{k}: "image": "{v}",')
