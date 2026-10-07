(function () {
  "use strict";


  const colors = [
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Indigo",
    "Violet"
  ];


  const models = {

    orange: {

      label: "ORANGE",
      fill: "#f28b2e",
      text: "#ffffff",

      reflected: [
        "Orange"
      ],

      absorbed: [
        "Red",
        "Yellow",
        "Green",
        "Blue",
        "Indigo",
        "Violet"
      ],

      explanation:
        "The orange object appears orange because orange light is reflected toward the observer while much of the other visible light is absorbed."
    },


    green: {

      label: "GREEN",
      fill: "#45b85e",
      text: "#ffffff",

      reflected: [
        "Green"
      ],

      absorbed: [
        "Red",
        "Orange",
        "Yellow",
        "Blue",
        "Indigo",
        "Violet"
      ],

      explanation:
        "The green object appears green because green light is reflected toward the observer."
    },


    blue: {

      label: "BLUE",
      fill: "#4389ff",
      text: "#ffffff",

      reflected: [
        "Blue"
      ],

      absorbed: [
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Indigo",
        "Violet"
      ],

      explanation:
        "The blue object appears blue because blue light is reflected toward the observer."
    },


    white: {

      label: "WHITE",
      fill: "#ffffff",
      text: "#111111",

      reflected: [
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Blue",
        "Indigo",
        "Violet"
      ],

      absorbed: [
        "Very little in this simplified model"
      ],

      explanation:
        "The white object reflects much of the visible light that strikes it, so many visible colors return toward the observer."
    },


    black: {

      label: "BLACK",
      fill: "#171717",
      text: "#ffffff",

      reflected: [
        "Very little visible light"
      ],

      absorbed: [
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Blue",
        "Indigo",
        "Violet"
      ],

      explanation:
        "The black object absorbs most visible light and reflects very little visible light toward the observer."
    }

  };


  let selected =
    "orange";


  const rayIds = {

    Red: "cdRed",
    Orange: "cdOrange",
    Yellow: "cdYellow",
    Green: "cdGreen",
    Blue: "cdBlue",
    Indigo: "cdIndigo",
    Violet: "cdViolet"

  };


  function model() {

    return models[selected];
  }


  function updateObject() {

    const item =
      model();


    const object =
      document.getElementById(
        "cdObject"
      );


    object.setAttribute(
      "fill",
      item.fill
    );


    const label =
      document.getElementById(
        "cdObjectLabel"
      );


    label.textContent =
      item.label;


    label.setAttribute(
      "fill",
      item.text
    );


    document
      .getElementById(
        "cdIncoming"
      )
      .setAttribute(
        "opacity",
        "0"
      );


    document
      .getElementById(
        "cdReflected"
      )
      .setAttribute(
        "opacity",
        "0"
      );


    document
      .getElementById(
        "cdBottomMessage"
      )
      .textContent =
      "Press SHINE WHITE LIGHT to test "
      +
      item.label.toLowerCase()
      +
      ".";


    document
      .getElementById(
        "cdResult"
      )
      .textContent =
      "Ready to test the "
      +
      item.label.toLowerCase()
      +
      " object.";


    document
      .getElementById(
        "cdReflectedList"
      )
      .textContent =
      "Test the object first.";


    document
      .getElementById(
        "cdAbsorbedList"
      )
      .textContent =
      "Test the object first.";
  }


  function setRayVisibility() {

    const item =
      model();


    colors.forEach(
      function (color) {

        const ray =
          document.getElementById(
            rayIds[color]
          );


        if (
          selected === "black"
        ) {

          ray.setAttribute(
            "opacity",
            ".05"
          );

          return;
        }


        ray.setAttribute(
          "opacity",
          item.reflected.includes(
            color
          )
          ? "1"
          : ".05"
        );
      }
    );
  }


  function chips(
    containerId,
    items
  ) {

    const container =
      document.getElementById(
        containerId
      );


    container.innerHTML = "";


    items.forEach(
      function (item) {

        const chip =
          document.createElement(
            "span"
          );


        chip.className =
          "cd-chip";


        chip.textContent =
          item;


        container.appendChild(
          chip
        );
      }
    );
  }


  document
    .querySelectorAll(
      ".cd-object"
    )
    .forEach(
      function (button) {

        button.onclick =
          function () {

            selected =
              button.dataset.object;


            document
              .querySelectorAll(
                ".cd-object"
              )
              .forEach(
                function (item) {

                  item.classList.remove(
                    "active"
                  );
                }
              );


            button.classList.add(
              "active"
            );


            updateObject();
          };
      }
    );


  document
    .getElementById(
      "cdTest"
    )
    .onclick =
    function () {

      const item =
        model();


      document
        .getElementById(
          "cdIncoming"
        )
        .setAttribute(
          "opacity",
          "1"
        );


      document
        .getElementById(
          "cdReflected"
        )
        .setAttribute(
          "opacity",
          "1"
        );


      setRayVisibility();


      chips(
        "cdReflectedList",
        item.reflected
      );


      chips(
        "cdAbsorbedList",
        item.absorbed
      );


      document
        .getElementById(
          "cdBottomMessage"
        )
        .textContent =
        item.label
        +
        " OBJECT: FOLLOW THE REFLECTED LIGHT TO THE OBSERVER";


      document
        .getElementById(
          "cdResult"
        )
        .innerHTML = `

          👁️
          <strong>
            Observation:
          </strong>

          ${item.explanation}

          <br><br>

          The color the observer sees depends on
          the visible light that is

          <strong>
            reflected toward the eye.
          </strong>

        `;
    };


  updateObject();

})();
