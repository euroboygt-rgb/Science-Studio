(function () {
  "use strict";


  const WATER_Y = 190;

  const N_WATER = 1.33;
  const N_AIR = 1.00;

  const OBJECT_X = 410;


  let depth = 225;
  let view = "middle";

  let showActual = false;
  let showApparent = true;
  let showRays = false;


  const eyePositions = {

    near: {
      x: 690,
      y: 90
    },

    middle: {
      x: 815,
      y: 90
    },

    far: {
      x: 920,
      y: 90
    }

  };


  function observer() {

    return eyePositions[view];
  }


  function actualObject() {

    return {
      x: OBJECT_X,
      y: WATER_Y + depth
    };
  }


  function sinAngleFromNormal(
    horizontal,
    vertical
  ) {

    const hypotenuse =
      Math.hypot(
        horizontal,
        vertical
      );


    return (
      Math.abs(horizontal)
      /
      hypotenuse
    );
  }


  function findSurfacePoint(
    object,
    eye
  ) {

    let bestX =
      object.x;

    let bestDifference =
      Infinity;


    const start =
      Math.min(
        object.x,
        eye.x
      );


    const end =
      Math.max(
        object.x,
        eye.x
      );


    for (
      let x = start;
      x <= end;
      x += .5
    ) {

      const waterSin =
        sinAngleFromNormal(
          x - object.x,
          WATER_Y - object.y
        );


      const airSin =
        sinAngleFromNormal(
          eye.x - x,
          eye.y - WATER_Y
        );


      const difference =
        Math.abs(
          N_WATER * waterSin
          -
          N_AIR * airSin
        );


      if (
        difference <
        bestDifference
      ) {

        bestDifference =
          difference;

        bestX =
          x;
      }
    }


    return {
      x: bestX,
      y: WATER_Y
    };
  }


  function apparentObject(
    surface,
    eye
  ) {

    const apparentDepth =
      depth / N_WATER;


    const dx =
      surface.x - eye.x;


    const dy =
      WATER_Y - eye.y;


    return {

      x:
        surface.x
        +
        (
          dx / dy
        )
        *
        apparentDepth,

      y:
        WATER_Y
        +
        apparentDepth
    };
  }


  function setLine(
    id,
    start,
    end
  ) {

    const line =
      document.getElementById(
        id
      );


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


  function update() {

    const eye =
      observer();


    const actual =
      actualObject();


    const surface =
      findSurfacePoint(
        actual,
        eye
      );


    const apparent =
      apparentObject(
        surface,
        eye
      );


    // Move observer.

    document
      .getElementById(
        "pdEye"
      )
      .setAttribute(
        "transform",
        "translate("
        +
        (
          eye.x - 815
        )
        +
        ",0)"
      );


    // Actual object.

    const actualObjectElement =
      document.getElementById(
        "pdActualObject"
      );


    actualObjectElement.setAttribute(
      "cx",
      actual.x
    );


    actualObjectElement.setAttribute(
      "cy",
      actual.y
    );


    document
      .getElementById(
        "pdActualLabel"
      )
      .setAttribute(
        "x",
        actual.x
      );


    document
      .getElementById(
        "pdActualLabel"
      )
      .setAttribute(
        "y",
        Math.min(
          actual.y + 42,
          600
        )
      );


    setLine(
      "pdActualDepthLine",
      {
        x: 270,
        y: WATER_Y
      },
      {
        x: 270,
        y: actual.y
      }
    );


    const actualMid =
      (
        WATER_Y
        +
        actual.y
      )
      /
      2;


    const actualDepthText =
      document.getElementById(
        "pdActualDepthText"
      );


    actualDepthText.setAttribute(
      "x",
      245
    );


    actualDepthText.setAttribute(
      "y",
      actualMid
    );


    actualDepthText.setAttribute(
      "transform",
      "rotate(-90 245 "
      +
      actualMid
      +
      ")"
    );


    // Apparent object.

    const apparentElement =
      document.getElementById(
        "pdApparentObject"
      );


    apparentElement.setAttribute(
      "cx",
      apparent.x
    );


    apparentElement.setAttribute(
      "cy",
      apparent.y
    );


    document
      .getElementById(
        "pdApparentLabel"
      )
      .setAttribute(
        "x",
        apparent.x
      );


    document
      .getElementById(
        "pdApparentLabel"
      )
      .setAttribute(
        "y",
        apparent.y - 32
      );


    setLine(
      "pdApparentDepthLine",
      {
        x: 330,
        y: WATER_Y
      },
      {
        x: 330,
        y: apparent.y
      }
    );


    const apparentMid =
      (
        WATER_Y
        +
        apparent.y
      )
      /
      2;


    const apparentDepthText =
      document.getElementById(
        "pdApparentDepthText"
      );


    apparentDepthText.setAttribute(
      "x",
      350
    );


    apparentDepthText.setAttribute(
      "y",
      apparentMid
    );


    apparentDepthText.setAttribute(
      "transform",
      "rotate(-90 350 "
      +
      apparentMid
      +
      ")"
    );


    // Ray in water.

    setLine(
      "pdWaterGlow",
      actual,
      surface
    );


    setLine(
      "pdWaterRay",
      actual,
      surface
    );


    // Ray in air.

    setLine(
      "pdAirGlow",
      surface,
      eye
    );


    setLine(
      "pdAirRay",
      surface,
      eye
    );


    // Back projection toward apparent location.

    setLine(
      "pdBackProjection",
      surface,
      apparent
    );


    const boundary =
      document.getElementById(
        "pdBoundaryPoint"
      );


    boundary.setAttribute(
      "cx",
      surface.x
    );


    boundary.setAttribute(
      "cy",
      WATER_Y
    );


    document
      .getElementById(
        "pdActualGroup"
      )
      .setAttribute(
        "opacity",
        showActual
          ? "1"
          : "0"
      );


    document
      .getElementById(
        "pdApparentGroup"
      )
      .setAttribute(
        "opacity",
        showApparent
          ? "1"
          : "0"
      );


    document
      .getElementById(
        "pdRayGroup"
      )
      .setAttribute(
        "opacity",
        showRays
          ? "1"
          : "0"
      );


    return {
      eye,
      actual,
      apparent,
      surface
    };
  }


  document
    .querySelectorAll(
      ".pd-depth"
    )
    .forEach(
      function (button) {

        button.addEventListener(
          "click",
          function () {

            depth =
              Number(
                button.dataset.depth
              );


            document
              .querySelectorAll(
                ".pd-depth"
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


            update();
          }
        );
      }
    );


  document
    .querySelectorAll(
      ".pd-view"
    )
    .forEach(
      function (button) {

        button.addEventListener(
          "click",
          function () {

            view =
              button.dataset.view;


            document
              .querySelectorAll(
                ".pd-view"
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


            update();
          }
        );
      }
    );


  document
    .getElementById(
      "pdActual"
    )
    .addEventListener(
      "click",
      function () {

        showActual =
          !showActual;


        this.classList.toggle(
          "active",
          showActual
        );


        this.textContent =
          showActual
            ?
            "📏 Hide Actual Depth"
            :
            "📏 Show Actual Depth";


        update();
      }
    );


  document
    .getElementById(
      "pdApparent"
    )
    .addEventListener(
      "click",
      function () {

        showApparent =
          !showApparent;


        this.classList.toggle(
          "active",
          showApparent
        );


        this.textContent =
          showApparent
            ?
            "👁 Hide Apparent Depth"
            :
            "👁 Show Apparent Depth";


        update();
      }
    );


  document
    .getElementById(
      "pdRays"
    )
    .addEventListener(
      "click",
      function () {

        showRays =
          !showRays;


        this.classList.toggle(
          "active",
          showRays
        );


        this.textContent =
          showRays
            ?
            "🔦 Hide Light Rays"
            :
            "🔦 Show Light Rays";


        update();
      }
    );


  document
    .getElementById(
      "pdTrace"
    )
    .addEventListener(
      "click",
      function () {

        showActual = true;
        showApparent = true;
        showRays = true;


        const actualButton =
          document.getElementById(
            "pdActual"
          );


        const apparentButton =
          document.getElementById(
            "pdApparent"
          );


        const raysButton =
          document.getElementById(
            "pdRays"
          );


        actualButton.classList.add(
          "active"
        );


        apparentButton.classList.add(
          "active"
        );


        raysButton.classList.add(
          "active"
        );


        actualButton.textContent =
          "📏 Hide Actual Depth";


        apparentButton.textContent =
          "👁 Hide Apparent Depth";


        raysButton.textContent =
          "🔦 Hide Light Rays";


        const model =
          update();


        const actualDepth =
          Math.round(
            model.actual.y
            -
            WATER_Y
          );


        const apparentDepth =
          Math.round(
            model.apparent.y
            -
            WATER_Y
          );


        const difference =
          actualDepth
          -
          apparentDepth;


        const result =
          document.getElementById(
            "pdResult"
          );


        result.innerHTML = `

          🏊
          <strong>
            Refraction observed!
          </strong>

          Light from the underwater object traveled through

          <strong>water</strong>

          until it reached the

          <strong>water-air boundary</strong>.

          The ray changed direction as it entered

          <strong>air</strong>

          and then traveled to the observer.

          The object's

          <strong>actual depth</strong>

          in this model is

          <strong>${actualDepth}</strong>,

          while its

          <strong>apparent depth</strong>

          is only

          <strong>${apparentDepth}</strong>.

          <br><br>

          It appears about

          <strong>${difference} model units closer</strong>

          to the surface.

          The object did not move.

          The apparent shift was caused by

          <strong>refraction</strong>.

        `;


        result.classList.add(
          "show"
        );
      }
    );


  update();

})();
