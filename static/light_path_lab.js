(function () {
  "use strict";


  let state =
    "aligned";


  const choices =
    Array.from(
      document.querySelectorAll(
        ".lp-choice"
      )
    );


  const hole2 =
    document.getElementById(
      "lpHole2"
    );


  const beam =
    document.getElementById(
      "lpBeam"
    );


  const glow =
    document.getElementById(
      "lpBeamGlow"
    );


  const targetOuter =
    document.getElementById(
      "lpTargetOuter"
    );


  const targetMiddle =
    document.getElementById(
      "lpTargetMiddle"
    );


  const targetCenter =
    document.getElementById(
      "lpTargetCenter"
    );


  const result =
    document.getElementById(
      "lpResult"
    );


  const test =
    document.getElementById(
      "lpTest"
    );


  if (
    !hole2
    ||
    !beam
    ||
    !glow
    ||
    !result
    ||
    !test
  ) {
    return;
  }


  function reset() {

    beam.setAttribute(
      "x2",
      "265"
    );


    glow.setAttribute(
      "x2",
      "265"
    );


    targetOuter.setAttribute(
      "fill",
      "#333c50"
    );


    targetMiddle.setAttribute(
      "fill",
      "#566074"
    );


    targetCenter.setAttribute(
      "fill",
      "#758096"
    );


    result.classList.remove(
      "show"
    );


    result.innerHTML =
      "";
  }


  function drawSetup() {

    reset();


    if (
      state ===
      "aligned"
    ) {

      hole2.style.display =
        "block";

      hole2.setAttribute(
        "cy",
        "211"
      );

    } else if (
      state ===
      "misaligned"
    ) {

      hole2.style.display =
        "block";

      hole2.setAttribute(
        "cy",
        "130"
      );

    } else {

      hole2.style.display =
        "none";
    }
  }


  choices.forEach(
    function (choice) {

      choice.addEventListener(
        "click",
        function () {

          state =
            choice.dataset.state;


          choices.forEach(
            function (button) {

              button.classList.remove(
                "active"
              );
            }
          );


          choice.classList.add(
            "active"
          );


          drawSetup();
        }
      );
    }
  );


  test.addEventListener(
    "click",
    function () {

      if (
        state ===
        "aligned"
      ) {

        beam.setAttribute(
          "x2",
          "900"
        );


        glow.setAttribute(
          "x2",
          "900"
        );


        targetOuter.setAttribute(
          "fill",
          "#fff4a8"
        );


        targetMiddle.setAttribute(
          "fill",
          "#ffe45d"
        );


        targetCenter.setAttribute(
          "fill",
          "#f0831e"
        );


        result.innerHTML = `
          ✅ <strong>Target reached!</strong>
          All three openings lie along the same straight path.
          The light travels directly from the flashlight
          through the openings to the target.
        `;

      } else if (
        state ===
        "misaligned"
      ) {

        beam.setAttribute(
          "x2",
          "535"
        );


        glow.setAttribute(
          "x2",
          "535"
        );


        result.innerHTML = `
          ❌ <strong>Target not reached.</strong>
          The middle opening moved away from the straight path.
          The light does not curve upward to find the opening.
        `;

      } else {

        beam.setAttribute(
          "x2",
          "535"
        );


        glow.setAttribute(
          "x2",
          "535"
        );


        result.innerHTML = `
          ❌ <strong>Target not reached.</strong>
          The opaque card blocks the straight path of the light.
        `;
      }


      result.classList.add(
        "show"
      );
    }
  );


  drawSetup();

})();
