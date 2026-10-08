(function () {
  "use strict";


  const degreeDisplay =
    document.getElementById(
      "emDegrees"
    );

  const marker =
    document.getElementById(
      "emNorthAmericaMarker"
    );

  const americas =
    document.getElementById(
      "emAmericasLand"
    );

  const farSide =
    document.getElementById(
      "emFarSideLand"
    );

  const status =
    document.getElementById(
      "emGlobePositionStatus"
    );


  if (
    !degreeDisplay ||
    !marker ||
    !americas ||
    !farSide ||
    !status
  ) {
    return;
  }


  function readDegrees() {

    const value =
      parseInt(
        degreeDisplay.textContent,
        10
      );

    return Number.isFinite(value)
      ? value
      : 0;
  }


  function drawGlobe() {

    const degrees =
      readDegrees();


    const normalized =
      degrees === 360
        ? 360
        : (
            (
              degrees % 360
            )
            + 360
          ) % 360;


    const angle =
      normalized
      * Math.PI
      / 180;


    /*
      sin(angle) = left / right position

      cos(angle) = whether North America
      is on the front or back hemisphere
    */

    const side =
      Math.sin(angle);

    const depth =
      Math.cos(angle);


    /*
      North America stays in the northern half
      of Earth.

      It does NOT rotate to the bottom
      like a flat clock-face image.
    */

    const markerX =
      260
      +
      side * 92;


    const markerY =
      172
      +
      side * 15;


    marker.setAttribute(
      "transform",
      "translate("
      +
      markerX.toFixed(1)
      +
      " "
      +
      markerY.toFixed(1)
      +
      ")"
    );


    /*
      Hide North America while it is
      behind Earth.
    */

    marker.style.opacity =
      depth < -0.05
        ? "0"
        : "1";


    /*
      Surface appearance changes as Earth turns.
    */

    const frontOpacity =
      Math.max(
        0.04,
        (depth + 1) / 2
      );


    const backOpacity =
      Math.max(
        0.04,
        (1 - depth) / 2
      );


    americas.style.opacity =
      frontOpacity.toFixed(2);


    farSide.style.opacity =
      backOpacity.toFixed(2);


    americas.setAttribute(
      "transform",
      "translate("
      +
      (side * 64).toFixed(1)
      +
      " 0)"
    );


    farSide.setAttribute(
      "transform",
      "translate("
      +
      (side * -64).toFixed(1)
      +
      " 0)"
    );


    /*
      Student-friendly description
    */

    if (
      normalized === 0 ||
      normalized === 360
    ) {

      status.textContent =
        "North America faces us.";

    } else if (
      normalized === 90
    ) {

      status.textContent =
        "North America is at Earth's edge.";

    } else if (
      normalized === 180
    ) {

      status.textContent =
        "North America is on Earth's far side.";

    } else if (
      normalized === 270
    ) {

      status.textContent =
        "North America is coming back into view.";

    } else if (
      depth < 0
    ) {

      status.textContent =
        "North America is moving across the far side.";

    } else {

      status.textContent =
        "North America is moving across the near side.";
    }
  }


  const observer =
    new MutationObserver(
      function () {
        drawGlobe();
      }
    );


  observer.observe(
    degreeDisplay,
    {
      childList: true,
      subtree: true,
      characterData: true
    }
  );


  document
    .querySelectorAll(
      ".em-rotation-buttons button"
    )
    .forEach(
      function (button) {

        button.addEventListener(
          "click",
          function () {

            setTimeout(
              drawGlobe,
              25
            );

          }
        );

      }
    );


  drawGlobe();

})();
