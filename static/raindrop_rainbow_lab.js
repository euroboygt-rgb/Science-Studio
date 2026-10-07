(function () {
  "use strict";


  let stage = 0;
  let path = "middle";


  const paths = {

    high: {

      entry: {
        x: 335,
        y: 225
      },

      reflect: {
        x: 690,
        y: 365
      },

      exit: {
        x: 470,
        y: 505
      }

    },


    middle: {

      entry: {
        x: 332,
        y: 260
      },

      reflect: {
        x: 680,
        y: 410
      },

      exit: {
        x: 460,
        y: 500
      }

    },


    low: {

      entry: {
        x: 345,
        y: 305
      },

      reflect: {
        x: 655,
        y: 455
      },

      exit: {
        x: 440,
        y: 480
      }

    }

  };


  const source = {
    x: 155,
    y: 255
  };


  function setLine(
    id,
    start,
    end
  ) {

    const line =
      document.getElementById(id);


    line.setAttribute(
      "x1",
      start.x
    );


    line.setAttribute(
      "y1",
      start.y
    );


    line.setAttribute(
      "x2",
      end.x
    );


    line.setAttribute(
      "y2",
      end.y
    );
  }


  function updateGeometry() {

    const p =
      paths[path];


    setLine(
      "rrIncomingGlow",
      source,
      p.entry
    );


    setLine(
      "rrIncomingRay",
      source,
      p.entry
    );


    setLine(
      "rrStep1Glow",
      p.entry,
      p.reflect
    );


    setLine(
      "rrStep1Ray",
      p.entry,
      p.reflect
    );


    setLine(
      "rrStep2Glow",
      p.reflect,
      p.exit
    );


    setLine(
      "rrStep2Ray",
      p.reflect,
      p.exit
    );


    document
      .getElementById(
        "rrEntryPoint"
      )
      .setAttribute(
        "cx",
        p.entry.x
      );


    document
      .getElementById(
        "rrEntryPoint"
      )
      .setAttribute(
        "cy",
        p.entry.y
      );


    document
      .getElementById(
        "rrReflectPoint"
      )
      .setAttribute(
        "cx",
        p.reflect.x
      );


    document
      .getElementById(
        "rrReflectPoint"
      )
      .setAttribute(
        "cy",
        p.reflect.y
      );


    document
      .getElementById(
        "rrExitPoint"
      )
      .setAttribute(
        "cx",
        p.exit.x
      );


    document
      .getElementById(
        "rrExitPoint"
      )
      .setAttribute(
        "cy",
        p.exit.y
      );


    setLine(
      "rrExitWhite",
      p.exit,
      {
        x: 840,
        y: p.exit.y + 40
      }
    );


    const spectrum = [

      ["rrRed", 12],
      ["rrOrange", 27],
      ["rrYellow", 42],
      ["rrGreen", 57],
      ["rrBlue", 72],
      ["rrViolet", 87]

    ];


    spectrum.forEach(
      function (item) {

        setLine(
          item[0],
          p.exit,
          {
            x: 900,
            y: p.exit.y + item[1]
          }
        );
      }
    );
  }


  function setOpacity(
    id,
    visible
  ) {

    document
      .getElementById(id)
      .setAttribute(
        "opacity",
        visible
          ? "1"
          : "0"
      );
  }


  function updateStage() {

    setOpacity(
      "rrStep1",
      stage >= 1
    );


    setOpacity(
      "rrStep2",
      stage >= 2
    );


    setOpacity(
      "rrStep3",
      stage >= 3
    );


    setOpacity(
      "rrSpectrum",
      stage >= 4
    );


    /*
      When the spectrum is revealed,
      hide the single white exit ray
      so the separated colors are easier to see.
    */

    document
      .getElementById(
        "rrExitWhite"
      )
      .setAttribute(
        "opacity",
        stage >= 4
          ? "0"
          : "1"
      );


    const buttons = [

      document.getElementById(
        "rrReveal1"
      ),

      document.getElementById(
        "rrReveal2"
      ),

      document.getElementById(
        "rrReveal3"
      ),

      document.getElementById(
        "rrReveal4"
      )

    ];


    buttons.forEach(
      function (button, index) {

        const step =
          index + 1;


        button.disabled =
          step > stage + 1;


        button.classList.toggle(
          "complete",
          stage >= step
        );
      }
    );


    const result =
      document.getElementById(
        "rrResult"
      );


    if (stage === 0) {

      result.innerHTML = `

        Begin with

        <strong>
          Step 1.
        </strong>

        Follow the white sunlight
        as it enters the raindrop.

      `;

    } else if (stage === 1) {

      result.innerHTML = `

        1️⃣
        <strong>
          Refraction:
        </strong>

        Sunlight moved from

        <strong>air into water</strong>

        and changed direction.

        The colors contained in white light
        also begin bending by slightly different amounts.

      `;

    } else if (stage === 2) {

      result.innerHTML = `

        2️⃣
        <strong>
          Internal Reflection:
        </strong>

        The light reached the back inside surface
        of the raindrop and

        <strong>reflected</strong>

        back through the water.

      `;

    } else if (stage === 3) {

      result.innerHTML = `

        3️⃣
        <strong>
          Refraction Again:
        </strong>

        The light moved from

        <strong>water back into air</strong>

        and changed direction again.

      `;

    } else {

      result.innerHTML = `

        🌈
        <strong>
          Rainbow path complete!
        </strong>

        White sunlight

        <strong>refracted into</strong>

        the raindrop,

        <strong>reflected inside</strong>,

        and

        <strong>refracted out</strong>

        again.

        The colors of the visible spectrum
        leave along slightly different paths.

        Many raindrops sending these colors
        toward an observer create the rainbow
        we see in the sky.

      `;
    }
  }


  function reset() {

    stage = 0;

    updateStage();
  }


  document
    .querySelectorAll(
      ".rr-angle"
    )
    .forEach(
      function (button) {

        button.addEventListener(
          "click",
          function () {

            path =
              button.dataset.path;


            document
              .querySelectorAll(
                ".rr-angle"
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


            reset();

            updateGeometry();
          }
        );
      }
    );


  document
    .getElementById(
      "rrReveal1"
    )
    .addEventListener(
      "click",
      function () {

        stage =
          Math.max(
            stage,
            1
          );

        updateStage();
      }
    );


  document
    .getElementById(
      "rrReveal2"
    )
    .addEventListener(
      "click",
      function () {

        stage =
          Math.max(
            stage,
            2
          );

        updateStage();
      }
    );


  document
    .getElementById(
      "rrReveal3"
    )
    .addEventListener(
      "click",
      function () {

        stage =
          Math.max(
            stage,
            3
          );

        updateStage();
      }
    );


  document
    .getElementById(
      "rrReveal4"
    )
    .addEventListener(
      "click",
      function () {

        stage =
          Math.max(
            stage,
            4
          );

        updateStage();
      }
    );


  document
    .getElementById(
      "rrReset"
    )
    .addEventListener(
      "click",
      reset
    );


  updateGeometry();
  updateStage();

})();
