(function () {
  "use strict";


  const WATER_Y = 250;

  const N_WATER = 1.33;
  const N_AIR = 1.00;

  const PENCIL_SURFACE = {
    x: 430,
    y: WATER_Y
  };


  let depth = 180;

  let view = "middle";

  let showActual = false;
  let showApparent = true;
  let showRays = false;


  const eyePositions = {

    near: {
      x: 700,
      y: 105
    },

    middle: {
      x: 815,
      y: 105
    },

    far: {
      x: 910,
      y: 105
    }

  };


  function eye() {
    return eyePositions[view];
  }


  function actualTip() {

    /*
      The physical pencil remains straight.
      Its submerged section continues along
      the same direction as the upper pencil.
    */

    const dx = 95;
    const dy = 195;

    const scale =
      depth / dy;


    return {

      x:
        PENCIL_SURFACE.x
        +
        dx * scale,

      y:
        WATER_Y
        +
        depth
    };
  }


  function sinAngleFromNormal(
    horizontal,
    vertical
  ) {

    const hyp =
      Math.hypot(
        horizontal,
        vertical
      );


    return (
      Math.abs(horizontal)
      /
      hyp
    );
  }


  function findSurfacePoint(
    object,
    observer
  ) {

    /*
      Find the location at the flat water surface
      that satisfies Snell's law:

      n_water sin(theta_water)
      =
      n_air sin(theta_air)

      A small numerical search keeps this readable
      while giving us a realistic classroom model.
    */

    let bestX =
      object.x;

    let bestDifference =
      Infinity;


    const start =
      Math.min(
        object.x,
        observer.x
      );


    const end =
      Math.max(
        object.x,
        observer.x
      );


    for (
      let x = start;
      x <= end;
      x += .5
    ) {

      const waterHorizontal =
        x - object.x;


      const airHorizontal =
        observer.x - x;


      const waterSin =
        sinAngleFromNormal(
          waterHorizontal,
          WATER_Y - object.y
        );


      const airSin =
        sinAngleFromNormal(
          airHorizontal,
          observer.y - WATER_Y
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


  function apparentTip(
    surface,
    observer
  ) {

    /*
      The observer assumes the ray continued
      straight through the boundary.

      Extend the AIR ray backward into the water.

      Water makes the object appear shallower,
      so apparent depth is modeled as
      actual depth / 1.33.
    */

    const apparentDepth =
      depth / N_WATER;


    const dx =
      surface.x
      -
      observer.x;


    const dy =
      WATER_Y
      -
      observer.y;


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

    const observer =
      eye();


    const actual =
      actualTip();


    const surface =
      findSurfacePoint(
        actual,
        observer
      );


    const apparent =
      apparentTip(
        surface,
        observer
      );


    // Observer

    const eyeGroup =
      document.getElementById(
        "wrEye"
      );


    eyeGroup.setAttribute(
      "transform",
      "translate("
      +
      (
        observer.x - 815
      )
      +
      ",0)"
    );


    // Actual pencil

    setLine(
      "wrActualPencil",
      PENCIL_SURFACE,
      actual
    );


    document
      .getElementById(
        "wrActualLabel"
      )
      .setAttribute(
        "x",
        actual.x - 85
      );


    document
      .getElementById(
        "wrActualLabel"
      )
      .setAttribute(
        "y",
        Math.min(
          actual.y + 35,
          560
        )
      );


    // Apparent pencil

    setLine(
      "wrApparentPencil",
      PENCIL_SURFACE,
      apparent
    );


    setLine(
      "wrApparentHighlight",
      PENCIL_SURFACE,
      apparent
    );


    document
      .getElementById(
        "wrApparentLabel"
      )
      .setAttribute(
        "x",
        apparent.x + 15
      );


    document
      .getElementById(
        "wrApparentLabel"
      )
      .setAttribute(
        "y",
        apparent.y + 27
      );


    // Ray inside water

    setLine(
      "wrWaterRayGlow",
      actual,
      surface
    );


    setLine(
      "wrWaterRay",
      actual,
      surface
    );


    // Refracted ray in air

    setLine(
      "wrAirRayGlow",
      surface,
      observer
    );


    setLine(
      "wrAirRay",
      surface,
      observer
    );


    // Apparent straight-back projection

    setLine(
      "wrBackProjection",
      surface,
      apparent
    );


    // Boundary point

    const boundary =
      document.getElementById(
        "wrBoundaryPoint"
      );


    boundary.setAttribute(
      "cx",
      surface.x
    );


    boundary.setAttribute(
      "cy",
      WATER_Y
    );


    // Visibility

    document
      .getElementById(
        "wrActualGroup"
      )
      .setAttribute(
        "opacity",
        showActual
          ? "1"
          : "0"
      );


    document
      .getElementById(
        "wrApparentGroup"
      )
      .setAttribute(
        "opacity",
        showApparent
          ? "1"
          : "0"
      );


    document
      .getElementById(
        "wrRayGroup"
      )
      .setAttribute(
        "opacity",
        showRays
          ? "1"
          : "0"
      );


    return {
      actual,
      apparent,
      surface,
      observer
    };
  }


  document
    .querySelectorAll(
      ".wr-view"
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
                ".wr-view"
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
      ".wr-depth"
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
                ".wr-depth"
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
      "wrActual"
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
            "👻 Hide Actual Pencil"
            :
            "👻 Show Actual Pencil";


        update();
      }
    );


  document
    .getElementById(
      "wrApparent"
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
            "✏️ Hide Apparent Pencil"
            :
            "✏️ Show Apparent Pencil";


        update();
      }
    );


  document
    .getElementById(
      "wrRays"
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
      "wrTrace"
    )
    .addEventListener(
      "click",
      function () {

        showActual = true;
        showApparent = true;
        showRays = true;


        const actualButton =
          document.getElementById(
            "wrActual"
          );


        const apparentButton =
          document.getElementById(
            "wrApparent"
          );


        const rayButton =
          document.getElementById(
            "wrRays"
          );


        actualButton.classList.add(
          "active"
        );


        apparentButton.classList.add(
          "active"
        );


        rayButton.classList.add(
          "active"
        );


        actualButton.textContent =
          "👻 Hide Actual Pencil";


        apparentButton.textContent =
          "✏️ Hide Apparent Pencil";


        rayButton.textContent =
          "🔦 Hide Light Rays";


        const model =
          update();


        const shift =
          Math.round(
            Math.hypot(
              model.actual.x
              -
              model.apparent.x,

              model.actual.y
              -
              model.apparent.y
            )
          );


        const result =
          document.getElementById(
            "wrResult"
          );


        result.innerHTML = `

          💧
          <strong>
            Refraction observed!
          </strong>

          Light from the underwater pencil traveled
          through

          <strong>water</strong>

          until it reached the

          <strong>water-air boundary</strong>.

          The light changed direction as it entered

          <strong>air</strong>

          and then traveled toward the observer.

          Because the observer receives this refracted light,
          the underwater part appears shifted from its

          <strong>actual position</strong>.

          The pencil did not physically bend.

          <br><br>

          Apparent shift in this model:
          <strong>${shift} model units</strong>.

        `;


        result.classList.add(
          "show"
        );
      }
    );


  update();

})();
