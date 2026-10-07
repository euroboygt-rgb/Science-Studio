(function () {
  "use strict";


  /*
    ==========================================================
    SCIENCE STUDIO REFRACTION ENGINE V1
    ==========================================================

    Day 66:
      AIR -> GLASS -> AIR

    The prism is a triangle.

    We:
      1. Trace the incoming ray to the prism.
      2. Refract from air into glass.
      3. Trace the ray through the glass.
      4. Refract from glass back into air.
      5. Extend the exiting ray to the board edge.

    Index values are approximate classroom models:

      air   = 1.00
      glass = 1.50
  */


  const N_AIR =
    1.00;


  const N_GLASS =
    1.50;


  const SOURCE = {
    x: 274,
    y: 281
  };


  const BOARD = {
    width: 1000,
    height: 560
  };


  const PRISM = [

    {
      x: 530,
      y: 105
    },

    {
      x: 365,
      y: 435
    },

    {
      x: 695,
      y: 435
    }

  ];


  const CENTROID = {

    x:
      (
        PRISM[0].x
        +
        PRISM[1].x
        +
        PRISM[2].x
      )
      /
      3,

    y:
      (
        PRISM[0].y
        +
        PRISM[1].y
        +
        PRISM[2].y
      )
      /
      3

  };


  let incomingAngle =
    0;


  let predictionVisible =
    false;


  const rayGroup =
    document.getElementById(
      "prRays"
    );


  const glowGroup =
    document.getElementById(
      "prRayGlow"
    );


  const pointsGroup =
    document.getElementById(
      "prPoints"
    );


  const labelsGroup =
    document.getElementById(
      "prLabels"
    );


  const result =
    document.getElementById(
      "prResult"
    );


  const prediction =
    document.getElementById(
      "prPredictionRay"
    );


  if (
    !rayGroup
    ||
    !result
  ) {
    return;
  }


  function normalize(
    vector
  ) {

    const length =
      Math.hypot(
        vector.x,
        vector.y
      );


    return {

      x:
        vector.x / length,

      y:
        vector.y / length
    };
  }


  function add(
    a,
    b
  ) {

    return {

      x:
        a.x + b.x,

      y:
        a.y + b.y
    };
  }


  function subtract(
    a,
    b
  ) {

    return {

      x:
        a.x - b.x,

      y:
        a.y - b.y
    };
  }


  function multiply(
    vector,
    amount
  ) {

    return {

      x:
        vector.x * amount,

      y:
        vector.y * amount
    };
  }


  function dot(
    a,
    b
  ) {

    return (
      a.x * b.x
      +
      a.y * b.y
    );
  }


  function cross(
    a,
    b
  ) {

    return (
      a.x * b.y
      -
      a.y * b.x
    );
  }


  function directionFromAngle(
    degrees
  ) {

    const radians =
      degrees
      *
      Math.PI
      /
      180;


    return {

      x:
        Math.cos(
          radians
        ),

      y:
        Math.sin(
          radians
        )
    };
  }


  function raySegmentIntersection(
    origin,
    direction,
    a,
    b
  ) {

    const segment =
      subtract(
        b,
        a
      );


    const denominator =
      cross(
        direction,
        segment
      );


    if (
      Math.abs(
        denominator
      )
      <
      0.000001
    ) {
      return null;
    }


    const difference =
      subtract(
        a,
        origin
      );


    const t =
      cross(
        difference,
        segment
      )
      /
      denominator;


    const u =
      cross(
        difference,
        direction
      )
      /
      denominator;


    if (
      t > 0.5
      &&
      u >= 0
      &&
      u <= 1
    ) {

      return {

        t,

        x:
          origin.x
          +
          direction.x
          *
          t,

        y:
          origin.y
          +
          direction.y
          *
          t
      };
    }


    return null;
  }


  function edgeData(
    index
  ) {

    const a =
      PRISM[index];


    const b =
      PRISM[
        (
          index + 1
        )
        %
        PRISM.length
      ];


    const tangent =
      normalize(
        subtract(
          b,
          a
        )
      );


    const midpoint = {

      x:
        (
          a.x
          +
          b.x
        )
        /
        2,

      y:
        (
          a.y
          +
          b.y
        )
        /
        2
    };


    const towardCenter =
      subtract(
        CENTROID,
        midpoint
      );


    const normalA = {

      x:
        -tangent.y,

      y:
        tangent.x
    };


    const normalB = {

      x:
        tangent.y,

      y:
        -tangent.x
    };


    const inward =
      dot(
        normalA,
        towardCenter
      )
      >
      0
        ?
        normalA
        :
        normalB;


    const outward = {

      x:
        -inward.x,

      y:
        -inward.y
    };


    return {

      index,

      a,

      b,

      tangent,

      inward,

      outward
    };
  }


  function prismIntersection(
    origin,
    direction,
    ignoredEdge
  ) {

    const hits = [];


    for (
      let index = 0;
      index < PRISM.length;
      index++
    ) {

      if (
        index ===
        ignoredEdge
      ) {
        continue;
      }


      const edge =
        edgeData(
          index
        );


      const hit =
        raySegmentIntersection(
          origin,
          direction,
          edge.a,
          edge.b
        );


      if (hit) {

        hit.edge =
          edge;


        hits.push(
          hit
        );
      }
    }


    hits.sort(
      function (a, b) {

        return (
          a.t
          -
          b.t
        );
      }
    );


    return hits[0] || null;
  }


  /*
    Snell's law using a normal that points
    INTO the destination medium.

    direction:
      incoming unit vector

    destinationNormal:
      normal pointing into the new medium
  */

  function refract(
    direction,
    destinationNormal,
    n1,
    n2
  ) {

    const normal =
      normalize(
        destinationNormal
      );


    let tangent = {

      x:
        -normal.y,

      y:
        normal.x
    };


    let sin1 =
      dot(
        direction,
        tangent
      );


    const sin2 =
      (
        n1
        /
        n2
      )
      *
      sin1;


    if (
      Math.abs(
        sin2
      )
      >
      1
    ) {

      return null;
    }


    const cos2 =
      Math.sqrt(
        1
        -
        sin2
        *
        sin2
      );


    return normalize({

      x:
        normal.x
        *
        cos2
        +
        tangent.x
        *
        sin2,

      y:
        normal.y
        *
        cos2
        +
        tangent.y
        *
        sin2
    });
  }


  function boardExit(
    origin,
    direction
  ) {

    const candidates = [];


    if (
      direction.x > 0
    ) {

      candidates.push(
        (
          BOARD.width
          -
          origin.x
        )
        /
        direction.x
      );

    } else if (
      direction.x < 0
    ) {

      candidates.push(
        (
          0
          -
          origin.x
        )
        /
        direction.x
      );
    }


    if (
      direction.y > 0
    ) {

      candidates.push(
        (
          BOARD.height
          -
          origin.y
        )
        /
        direction.y
      );

    } else if (
      direction.y < 0
    ) {

      candidates.push(
        (
          0
          -
          origin.y
        )
        /
        direction.y
      );
    }


    const valid =
      candidates
      .filter(
        function (value) {

          return value > 0;
        }
      )
      .sort(
        function (a, b) {

          return a - b;
        }
      );


    const t =
      valid[0];


    return {

      x:
        origin.x
        +
        direction.x
        *
        t,

      y:
        origin.y
        +
        direction.y
        *
        t
    };
  }


  function clearDiagram() {

    rayGroup.innerHTML = "";
    glowGroup.innerHTML = "";
    pointsGroup.innerHTML = "";
    labelsGroup.innerHTML = "";


    result.classList.remove(
      "show"
    );


    result.innerHTML = "";
  }


  function svgLine(
    group,
    start,
    end,
    color,
    width,
    opacity
  ) {

    const ns =
      "http://www.w3.org/2000/svg";


    const line =
      document.createElementNS(
        ns,
        "line"
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


    line.setAttribute(
      "stroke",
      color
    );


    line.setAttribute(
      "stroke-width",
      width
    );


    line.setAttribute(
      "stroke-linecap",
      "round"
    );


    line.setAttribute(
      "opacity",
      opacity
    );


    group.appendChild(
      line
    );
  }


  function drawSegment(
    start,
    end,
    color
  ) {

    svgLine(
      glowGroup,
      start,
      end,
      color,
      24,
      .22
    );


    svgLine(
      rayGroup,
      start,
      end,
      color,
      8,
      1
    );
  }


  function drawPoint(
    point,
    number
  ) {

    const ns =
      "http://www.w3.org/2000/svg";


    const circle =
      document.createElementNS(
        ns,
        "circle"
      );


    circle.setAttribute(
      "cx",
      point.x
    );


    circle.setAttribute(
      "cy",
      point.y
    );


    circle.setAttribute(
      "r",
      "10"
    );


    circle.setAttribute(
      "fill",
      "#ffe45d"
    );


    circle.setAttribute(
      "stroke",
      "#ffffff"
    );


    circle.setAttribute(
      "stroke-width",
      "3"
    );


    pointsGroup.appendChild(
      circle
    );


    const text =
      document.createElementNS(
        ns,
        "text"
      );


    text.setAttribute(
      "x",
      point.x
    );


    text.setAttribute(
      "y",
      point.y - 17
    );


    text.setAttribute(
      "text-anchor",
      "middle"
    );


    text.setAttribute(
      "fill",
      "#ffffff"
    );


    text.setAttribute(
      "font-size",
      "16"
    );


    text.setAttribute(
      "font-weight",
      "900"
    );


    text.textContent =
      "Boundary "
      +
      number;


    labelsGroup.appendChild(
      text
    );
  }


  function drawLabel(
    start,
    end,
    label
  ) {

    const ns =
      "http://www.w3.org/2000/svg";


    const text =
      document.createElementNS(
        ns,
        "text"
      );


    text.setAttribute(
      "x",
      (
        start.x
        +
        end.x
      )
      /
      2
    );


    text.setAttribute(
      "y",
      (
        start.y
        +
        end.y
      )
      /
      2
      -
      15
    );


    text.setAttribute(
      "text-anchor",
      "middle"
    );


    text.setAttribute(
      "fill",
      "#ffffff"
    );


    text.setAttribute(
      "font-size",
      "16"
    );


    text.setAttribute(
      "font-weight",
      "900"
    );


    text.textContent =
      label;


    labelsGroup.appendChild(
      text
    );
  }


  function testRefraction() {

    clearDiagram();


    const incoming =
      directionFromAngle(
        incomingAngle
      );


    const entry =
      prismIntersection(
        SOURCE,
        incoming,
        null
      );


    if (!entry) {

      const outside =
        boardExit(
          SOURCE,
          incoming
        );


      drawSegment(
        SOURCE,
        outside,
        "#fff6a9"
      );


      result.innerHTML = `

        ❌
        <strong>
          The ray missed the prism.
        </strong>

        Choose a different incoming direction.

      `;


      result.classList.add(
        "show"
      );

      return;
    }


    // AIR -> GLASS

    const insideDirection =
      refract(
        incoming,
        entry.edge.inward,
        N_AIR,
        N_GLASS
      );


    if (!insideDirection) {

      return;
    }


    const insideStart =
      add(
        entry,
        multiply(
          insideDirection,
          2
        )
      );


    const exit =
      prismIntersection(
        insideStart,
        insideDirection,
        entry.edge.index
      );


    if (!exit) {

      return;
    }


    // GLASS -> AIR

    const outsideDirection =
      refract(
        insideDirection,
        exit.edge.outward,
        N_GLASS,
        N_AIR
      );


    if (!outsideDirection) {

      result.innerHTML = `

        <strong>
          The ray remained inside the glass.
        </strong>

        Try another incoming direction.

      `;


      result.classList.add(
        "show"
      );

      return;
    }


    const exitStart =
      add(
        exit,
        multiply(
          outsideDirection,
          2
        )
      );


    const boardEnd =
      boardExit(
        exitStart,
        outsideDirection
      );


    drawSegment(
      SOURCE,
      entry,
      "#fff6a9"
    );


    drawSegment(
      entry,
      exit,
      "#70ddff"
    );


    drawSegment(
      exit,
      boardEnd,
      "#fff6a9"
    );


    drawPoint(
      entry,
      1
    );


    drawPoint(
      exit,
      2
    );


    drawLabel(
      SOURCE,
      entry,
      "INCOMING RAY"
    );


    drawLabel(
      entry,
      exit,
      "REFRACTED IN GLASS"
    );


    drawLabel(
      exit,
      boardEnd,
      "EXITING RAY"
    );


    result.innerHTML = `

      🔺
      <strong>
        Refraction observed!
      </strong>

      The light traveled through

      <strong>
        air
      </strong>

      until it reached

      <strong>
        Boundary 1.
      </strong>

      The ray changed direction as it entered

      <strong>
        glass.
      </strong>

      It traveled straight through the glass
      until reaching

      <strong>
        Boundary 2,
      </strong>

      where it changed direction again
      as it returned to

      <strong>
        air.
      </strong>

    `;


    result.classList.add(
      "show"
    );
  }


  document
    .querySelectorAll(
      ".pr-angle"
    )
    .forEach(
      function (button) {

        button.addEventListener(
          "click",
          function () {

            incomingAngle =
              Number(
                button.dataset.angle
              );


            document
              .querySelectorAll(
                ".pr-angle"
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


            clearDiagram();
          }
        );
      }
    );


  document
    .getElementById(
      "prPrediction"
    )
    .addEventListener(
      "click",
      function () {

        predictionVisible =
          !predictionVisible;


        const direction =
          directionFromAngle(
            incomingAngle
          );


        const end =
          boardExit(
            SOURCE,
            direction
          );


        prediction.setAttribute(
          "x1",
          SOURCE.x
        );


        prediction.setAttribute(
          "y1",
          SOURCE.y
        );


        prediction.setAttribute(
          "x2",
          end.x
        );


        prediction.setAttribute(
          "y2",
          end.y
        );


        prediction.setAttribute(
          "opacity",
          predictionVisible
            ? ".62"
            : "0"
        );


        this.textContent =
          predictionVisible
            ?
            "📏 Hide Straight Prediction"
            :
            "📏 Show Straight Prediction";
      }
    );


  document
    .getElementById(
      "prTest"
    )
    .addEventListener(
      "click",
      testRefraction
    );

})();
