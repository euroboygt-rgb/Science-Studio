(function () {
  "use strict";


  /*
    ==========================================================
    SCIENCE STUDIO REFLECTION ENGINE
    ==========================================================

    The flashlight always aims at one point on the mirror:

        CONTACT = (500, 261)

    Incoming light:
        travels from left to the contact point.

    Reflected light:
        begins at that exact point.

    The reflected direction is calculated by reflecting
    the incoming vector across the MIRROR SURFACE.

    This keeps the ray on the incident side of the opaque
    mirror instead of incorrectly passing through it.
  */


  const CONTACT_X = 500;
  const CONTACT_Y = 261;


  let mirrorAngle =
    -45;


  const choices =
    Array.from(
      document.querySelectorAll(
        ".rf-choice"
      )
    );


  const mirror =
    document.getElementById(
      "rfMirror"
    );


  const incoming =
    document.getElementById(
      "rfIncoming"
    );


  const incomingGlow =
    document.getElementById(
      "rfIncomingGlow"
    );


  const reflected =
    document.getElementById(
      "rfReflected"
    );


  const reflectedGlow =
    document.getElementById(
      "rfReflectedGlow"
    );


  const arrow =
    document.getElementById(
      "rfArrow"
    );


  const label =
    document.getElementById(
      "rfLabel"
    );


  const labelBox =
    document.getElementById(
      "rfLabelBox"
    );


  const result =
    document.getElementById(
      "rfResult"
    );


  const test =
    document.getElementById(
      "rfTest"
    );


  if (
    !mirror
    ||
    !incoming
    ||
    !incomingGlow
    ||
    !reflected
    ||
    !reflectedGlow
    ||
    !arrow
    ||
    !result
    ||
    !test
  ) {
    return;
  }


  // =========================================================
  // REFLECTION VECTOR
  // =========================================================

  function reflectedDirection() {

    const theta =
      mirrorAngle
      *
      Math.PI
      /
      180;


    /*
      The mirror begins as a VERTICAL line.

      After rotation theta, its unit tangent vector is:

          t = (-sin(theta), cos(theta))

      Incoming direction:

          d = (1, 0)

      Reflect d across the mirror line:

          r = 2(d·t)t - d
    */


    const tx =
      -Math.sin(
        theta
      );


    const ty =
      Math.cos(
        theta
      );


    const dot =
      tx;


    let rx =
      2
      *
      dot
      *
      tx
      -
      1;


    let ry =
      2
      *
      dot
      *
      ty;


    const length =
      Math.hypot(
        rx,
        ry
      );


    rx /= length;
    ry /= length;


    return {
      x: rx,
      y: ry
    };
  }


  function reflectedEndpoint() {

    const direction =
      reflectedDirection();


    const rayLength =
      225;


    return {

      x:
        CONTACT_X
        +
        direction.x
        *
        rayLength,

      y:
        CONTACT_Y
        +
        direction.y
        *
        rayLength,

      rx:
        direction.x,

      ry:
        direction.y
    };
  }


  function arrowPoints(
    x,
    y,
    rx,
    ry
  ) {

    const backX =
      x
      -
      rx
      *
      23;


    const backY =
      y
      -
      ry
      *
      23;


    const px =
      -ry;


    const py =
      rx;


    const leftX =
      backX
      +
      px
      *
      11;


    const leftY =
      backY
      +
      py
      *
      11;


    const rightX =
      backX
      -
      px
      *
      11;


    const rightY =
      backY
      -
      py
      *
      11;


    return (
      x + "," + y
      + " "
      + leftX + "," + leftY
      + " "
      + rightX + "," + rightY
    );
  }


  function hideReflection() {

    // Incoming ray always ends exactly at mirror contact.

    incoming.setAttribute(
      "x2",
      CONTACT_X
    );


    incoming.setAttribute(
      "y2",
      CONTACT_Y
    );


    incomingGlow.setAttribute(
      "x2",
      CONTACT_X
    );


    incomingGlow.setAttribute(
      "y2",
      CONTACT_Y
    );


    // Reflected ray begins at the SAME contact point.

    reflected.setAttribute(
      "x1",
      CONTACT_X
    );


    reflected.setAttribute(
      "y1",
      CONTACT_Y
    );


    reflected.setAttribute(
      "x2",
      CONTACT_X
    );


    reflected.setAttribute(
      "y2",
      CONTACT_Y
    );


    reflectedGlow.setAttribute(
      "x1",
      CONTACT_X
    );


    reflectedGlow.setAttribute(
      "y1",
      CONTACT_Y
    );


    reflectedGlow.setAttribute(
      "x2",
      CONTACT_X
    );


    reflectedGlow.setAttribute(
      "y2",
      CONTACT_Y
    );


    arrow.setAttribute(
      "points",
      "0,0 0,0 0,0"
    );


    label.setAttribute(
      "opacity",
      "0"
    );


    labelBox.setAttribute(
      "opacity",
      "0"
    );


    result.classList.remove(
      "show"
    );


    result.innerHTML = "";
  }


  function updateMirror() {

    mirror.setAttribute(
      "transform",
      "translate("
      +
      CONTACT_X
      +
      ","
      +
      CONTACT_Y
      +
      ") rotate("
      +
      mirrorAngle
      +
      ")"
    );


    hideReflection();
  }


  function updateLabel(
    end
  ) {

    const midX =
      (
        CONTACT_X
        +
        end.x
      )
      /
      2;


    const midY =
      (
        CONTACT_Y
        +
        end.y
      )
      /
      2;


    const boxWidth =
      160;


    labelBox.setAttribute(
      "x",
      (
        midX
        -
        boxWidth / 2
      ).toFixed(1)
    );


    labelBox.setAttribute(
      "y",
      (
        midY
        -
        22
      ).toFixed(1)
    );


    label.setAttribute(
      "x",
      midX.toFixed(1)
    );


    label.setAttribute(
      "y",
      (
        midY
        +
        3
      ).toFixed(1)
    );


    labelBox.setAttribute(
      "opacity",
      "1"
    );


    label.setAttribute(
      "opacity",
      "1"
    );
  }


  function directionWords() {

    if (
      mirrorAngle < -45
    ) {

      return (
        "downward and slightly to the right"
      );
    }


    if (
      mirrorAngle > -45
    ) {

      return (
        "downward and slightly to the left"
      );
    }


    return "straight downward";
  }


  // =========================================================
  // MIRROR BUTTONS
  // =========================================================

  choices.forEach(
    function (choice) {

      choice.addEventListener(
        "click",
        function () {

          mirrorAngle =
            Number(
              choice.dataset.angle
            );


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


          updateMirror();
        }
      );
    }
  );


  // =========================================================
  // TEST REFLECTION
  // =========================================================

  test.addEventListener(
    "click",
    function () {

      const end =
        reflectedEndpoint();


      reflected.setAttribute(
        "x1",
        CONTACT_X
      );


      reflected.setAttribute(
        "y1",
        CONTACT_Y
      );


      reflected.setAttribute(
        "x2",
        end.x.toFixed(1)
      );


      reflected.setAttribute(
        "y2",
        end.y.toFixed(1)
      );


      reflectedGlow.setAttribute(
        "x1",
        CONTACT_X
      );


      reflectedGlow.setAttribute(
        "y1",
        CONTACT_Y
      );


      reflectedGlow.setAttribute(
        "x2",
        end.x.toFixed(1)
      );


      reflectedGlow.setAttribute(
        "y2",
        end.y.toFixed(1)
      );


      arrow.setAttribute(
        "points",
        arrowPoints(
          end.x,
          end.y,
          end.rx,
          end.ry
        )
      );


      updateLabel(
        end
      );


      result.innerHTML = `

        🪞
        <strong>
          Reflection observed!
        </strong>

        The incoming ray traveled straight
        from the flashlight to the mirror.

        At the yellow contact point,
        the light

        <strong>
          bounced from the reflective surface.
        </strong>

        It did not travel through the mirror.

        The reflected ray traveled

        <strong>
          ${directionWords()}.
        </strong>

      `;


      result.classList.add(
        "show"
      );
    }
  );


  updateMirror();

})();
