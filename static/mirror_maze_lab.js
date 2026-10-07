(function () {
  "use strict";


  const BOARD_W = 900;
  const BOARD_H = 520;

  const MIRROR_LENGTH = 100;
  const TARGET_RADIUS = 34;

  const EPSILON = 1.2;


  const board =
    document.getElementById(
      "mmBoard"
    );


  const raySvg =
    document.getElementById(
      "mmRaySvg"
    );


  const status =
    document.getElementById(
      "mmStatus"
    );


  const bounceCount =
    document.getElementById(
      "mmBounceCount"
    );


  const inspector =
    document.getElementById(
      "mmInspector"
    );


  if (
    !board
    ||
    !raySvg
  ) {
    return;
  }


  let components = [];

  let selectedId = null;

  let idCounter = 1;

  let currentMission = "1";

  let dragging = null;


  const missions = {

    "1": {

      title:
        "Mission 1: One Bounce",

      text:
        "Use one mirror to redirect the light toward the target.",

      maxMirrors: 1,

      source: {
        x: 105,
        y: 405,
        angle: 0
      },

      target: {
        x: 760,
        y: 105
      },

      blockers: []

    },


    "2": {

      title:
        "Mission 2: Around the Block",

      text:
        "Use up to two mirrors to redirect the light around the opaque wall.",

      maxMirrors: 2,

      source: {
        x: 95,
        y: 420,
        angle: 0
      },

      target: {
        x: 785,
        y: 95
      },

      blockers: [

        {
          x: 455,
          y: 330,
          w: 105,
          h: 245
        }

      ]

    },


    "3": {

      title:
        "Mission 3: Mirror Maze",

      text:
        "Use up to three mirrors to guide the beam through the maze and hit the target.",

      maxMirrors: 3,

      source: {
        x: 90,
        y: 440,
        angle: 0
      },

      target: {
        x: 800,
        y: 90
      },

      blockers: [

        {
          x: 350,
          y: 365,
          w: 95,
          h: 225
        },

        {
          x: 610,
          y: 205,
          w: 210,
          h: 80
        }

      ]

    }

  };


  function newId(
    type
  ) {

    return (
      type
      +
      "-"
      +
      idCounter++
    );
  }


  function makeComponent(
    type,
    options
  ) {

    return Object.assign(
      {
        id:
          newId(type),

        type:
          type,

        x:
          450,

        y:
          260,

        angle:
          0,

        locked:
          false
      },
      options || {}
    );
  }


  function loadMission(
    mission
  ) {

    currentMission =
      mission;


    selectedId = null;

    components = [];


    if (
      mission ===
      "free"
    ) {

      document.getElementById(
        "mmMissionTitle"
      ).textContent =
        "Free Build";


      document.getElementById(
        "mmMissionText"
      ).textContent =
        "Place your own light source, mirrors, target, and blockers.";


      status.innerHTML =
        "Build your own reflection challenge.";


      components.push(
        makeComponent(
          "light",
          {
            x: 100,
            y: 410,
            angle: 0
          }
        )
      );


      components.push(
        makeComponent(
          "target",
          {
            x: 780,
            y: 100
          }
        )
      );

    } else {

      const data =
        missions[mission];


      document.getElementById(
        "mmMissionTitle"
      ).textContent =
        data.title;


      document.getElementById(
        "mmMissionText"
      ).textContent =
        data.text;


      status.innerHTML =
        "Add mirrors, predict the path, then test the light.";


      components.push(
        makeComponent(
          "light",
          {
            x:
              data.source.x,

            y:
              data.source.y,

            angle:
              data.source.angle,

            locked:
              true
          }
        )
      );


      components.push(
        makeComponent(
          "target",
          {
            x:
              data.target.x,

            y:
              data.target.y,

            locked:
              true
          }
        )
      );


      data.blockers.forEach(
        function (blocker) {

          components.push(
            makeComponent(
              "blocker",
              {
                x:
                  blocker.x,

                y:
                  blocker.y,

                w:
                  blocker.w,

                h:
                  blocker.h,

                locked:
                  true
              }
            )
          );
        }
      );
    }


    document
      .querySelectorAll(
        ".mm-mission-button"
      )
      .forEach(
        function (button) {

          button.classList.toggle(
            "active",
            button.dataset.mission ===
            mission
          );
        }
      );


    document
      .querySelectorAll(
        ".mm-free-only"
      )
      .forEach(
        function (button) {

          button.style.display =
            mission === "free"
              ? "block"
              : "none";
        }
      );


    clearRays();

    renderComponents();

    updateInspector();
  }


  function addPart(
    type
  ) {

    if (
      currentMission !==
      "free"
      &&
      type !==
      "mirror"
    ) {
      return;
    }


    if (
      type ===
      "mirror"
      &&
      currentMission !==
      "free"
    ) {

      const maximum =
        missions[
          currentMission
        ].maxMirrors;


      const count =
        components.filter(
          function (component) {

            return (
              component.type ===
              "mirror"
            );
          }
        ).length;


      if (
        count >=
        maximum
      ) {

        status.innerHTML =
          "This mission allows up to "
          +
          maximum
          +
          " mirror"
          +
          (
            maximum === 1
              ? "."
              : "s."
          );

        return;
      }
    }


    if (
      type ===
      "light"
      &&
      components.some(
        function (component) {

          return component.type ===
            "light";
        }
      )
    ) {

      status.innerHTML =
        "Only one light source is needed.";

      return;
    }


    if (
      type ===
      "target"
      &&
      components.some(
        function (component) {

          return component.type ===
            "target";
        }
      )
    ) {

      status.innerHTML =
        "Only one target is needed.";

      return;
    }


    const offsets = {

      mirror: {
        x: 420,
        y: 300,
        angle: -30
      },

      light: {
        x: 100,
        y: 410,
        angle: 0
      },

      target: {
        x: 780,
        y: 100
      },

      blocker: {
        x: 500,
        y: 300,
        w: 100,
        h: 170
      }

    };


    const component =
      makeComponent(
        type,
        offsets[type]
      );


    components.push(
      component
    );


    selectedId =
      component.id;


    clearRays();

    renderComponents();

    updateInspector();
  }


  function renderComponents() {

    board
      .querySelectorAll(
        ".mm-part"
      )
      .forEach(
        function (element) {

          element.remove();
        }
      );


    components.forEach(
      function (component) {

        const element =
          document.createElement(
            "div"
          );


        element.className =
          "mm-part mm-"
          +
          component.type;


        if (
          component.locked
        ) {

          element.classList.add(
            "locked"
          );
        }


        if (
          component.id ===
          selectedId
        ) {

          element.classList.add(
            "selected"
          );
        }


        element.dataset.id =
          component.id;


        element.style.left =
          (
            component.x
            /
            BOARD_W
            *
            100
          )
          +
          "%";


        element.style.top =
          (
            component.y
            /
            BOARD_H
            *
            100
          )
          +
          "%";


        if (
          component.type ===
          "light"
        ) {

          element.innerHTML = `

            <div class="mm-light-body">
              LIGHT
            </div>

            <div class="mm-light-lens"></div>

          `;


          element.style.transform =
            "translate(-50%,-50%) rotate("
            +
            component.angle
            +
            "deg)";

        } else if (
          component.type ===
          "mirror"
        ) {

          element.innerHTML =
            '<div class="mm-mirror-line"></div>';


          element.style.transform =
            "translate(-50%,-50%) rotate("
            +
            component.angle
            +
            "deg)";

        } else if (
          component.type ===
          "target"
        ) {

          element.title =
            "Target";

        } else if (
          component.type ===
          "blocker"
        ) {

          element.textContent =
            "BLOCKER";


          element.style.width =
            (
              component.w || 100
            )
            /
            BOARD_W
            *
            100
            +
            "%";


          element.style.height =
            (
              component.h || 170
            )
            /
            BOARD_H
            *
            100
            +
            "%";
        }


        element.addEventListener(
          "pointerdown",
          function (event) {

            selectedId =
              component.id;


            renderComponents();

            updateInspector();


            if (
              component.locked
            ) {
              return;
            }


            const point =
              boardPoint(
                event
              );


            dragging = {

              id:
                component.id,

              dx:
                component.x
                -
                point.x,

              dy:
                component.y
                -
                point.y

            };


            clearRays();


            event.preventDefault();
          }
        );


        board.appendChild(
          element
        );
      }
    );
  }


  function boardPoint(
    event
  ) {

    const rect =
      board.getBoundingClientRect();


    return {

      x:
        (
          event.clientX
          -
          rect.left
        )
        /
        rect.width
        *
        BOARD_W,

      y:
        (
          event.clientY
          -
          rect.top
        )
        /
        rect.height
        *
        BOARD_H
    };
  }


  board.addEventListener(
    "pointermove",
    function (event) {

      if (!dragging) {
        return;
      }


      const component =
        components.find(
          function (item) {

            return (
              item.id ===
              dragging.id
            );
          }
        );


      if (!component) {
        return;
      }


      const point =
        boardPoint(
          event
        );


      component.x =
        clamp(
          point.x
          +
          dragging.dx,
          35,
          BOARD_W - 35
        );


      component.y =
        clamp(
          point.y
          +
          dragging.dy,
          35,
          BOARD_H - 35
        );


      const element =
        board.querySelector(
          '[data-id="'
          +
          component.id
          +
          '"]'
        );


      if (element) {

        element.style.left =
          (
            component.x
            /
            BOARD_W
            *
            100
          )
          +
          "%";


        element.style.top =
          (
            component.y
            /
            BOARD_H
            *
            100
          )
          +
          "%";
      }
    }
  );


  window.addEventListener(
    "pointerup",
    function () {

      dragging = null;
    }
  );


  function updateInspector() {

    const component =
      components.find(
        function (item) {

          return (
            item.id ===
            selectedId
          );
        }
      );


    if (!component) {

      inspector.innerHTML =
        "Select a mirror or part on the board.";

      return;
    }


    const names = {

      light:
        "🔦 Light Source",

      mirror:
        "🪞 Mirror",

      target:
        "🎯 Target",

      blocker:
        "⬛ Opaque Blocker"
    };


    let extra = "";


    if (
      component.type ===
      "mirror"
      ||
      component.type ===
      "light"
    ) {

      extra =
        "<p><strong>Orientation:</strong> "
        +
        Math.round(
          component.angle
        )
        +
        "°</p>";
    }


    inspector.innerHTML = `

      <div class="mm-inspector-name">
        ${names[component.type]}
      </div>

      <p>
        Position:
        ${Math.round(component.x)},
        ${Math.round(component.y)}
      </p>

      ${extra}

      <p>
        ${
          component.locked
            ? "🔒 Mission part — position locked."
            : "Drag this part to move it."
        }
      </p>

    `;
  }


  function selectedComponent() {

    return components.find(
      function (component) {

        return (
          component.id ===
          selectedId
        );
      }
    );
  }


  function rotateSelected(
    amount
  ) {

    const component =
      selectedComponent();


    if (
      !component
      ||
      component.locked
      ||
      (
        component.type !==
        "mirror"
        &&
        component.type !==
        "light"
      )
    ) {

      status.innerHTML =
        "Select a movable mirror to rotate.";

      return;
    }


    component.angle =
      (
        component.angle
        +
        amount
        +
        360
      )
      %
      360;


    clearRays();

    renderComponents();

    updateInspector();
  }


  function deleteSelected() {

    const component =
      selectedComponent();


    if (!component) {
      return;
    }


    if (
      component.locked
    ) {

      status.innerHTML =
        "That mission part is locked.";

      return;
    }


    components =
      components.filter(
        function (item) {

          return (
            item.id !==
            component.id
          );
        }
      );


    selectedId = null;

    clearRays();

    renderComponents();

    updateInspector();
  }


  // =========================================================
  // RAY PHYSICS
  // ============================================================

  function vectorFromAngle(
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
      0.0001
    ) {
      return null;
    }


    const qMinusP =
      subtract(
        a,
        origin
      );


    const t =
      cross(
        qMinusP,
        segment
      )
      /
      denominator;


    const u =
      cross(
        qMinusP,
        direction
      )
      /
      denominator;


    if (
      t > EPSILON
      &&
      u >= 0
      &&
      u <= 1
    ) {

      return {

        t:
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


  function mirrorIntersection(
    origin,
    direction,
    mirror
  ) {

    const tangent =
      vectorFromAngle(
        mirror.angle
      );


    const half =
      MIRROR_LENGTH
      /
      2;


    const a = {

      x:
        mirror.x
        -
        tangent.x
        *
        half,

      y:
        mirror.y
        -
        tangent.y
        *
        half
    };


    const b = {

      x:
        mirror.x
        +
        tangent.x
        *
        half,

      y:
        mirror.y
        +
        tangent.y
        *
        half
    };


    const hit =
      raySegmentIntersection(
        origin,
        direction,
        a,
        b
      );


    if (!hit) {
      return null;
    }


    hit.component =
      mirror;


    hit.type =
      "mirror";


    hit.tangent =
      tangent;


    return hit;
  }


  function reflectDirection(
    direction,
    tangent
  ) {

    const dot =
      direction.x
      *
      tangent.x
      +
      direction.y
      *
      tangent.y;


    let x =
      2
      *
      dot
      *
      tangent.x
      -
      direction.x;


    let y =
      2
      *
      dot
      *
      tangent.y
      -
      direction.y;


    const length =
      Math.hypot(
        x,
        y
      );


    x /= length;
    y /= length;


    return {
      x,
      y
    };
  }


  function rayCircleIntersection(
    origin,
    direction,
    target
  ) {

    const ox =
      origin.x
      -
      target.x;


    const oy =
      origin.y
      -
      target.y;


    const b =
      2
      *
      (
        ox * direction.x
        +
        oy * direction.y
      );


    const c =
      ox * ox
      +
      oy * oy
      -
      TARGET_RADIUS
      *
      TARGET_RADIUS;


    const discriminant =
      b * b
      -
      4 * c;


    if (
      discriminant < 0
    ) {
      return null;
    }


    const root =
      Math.sqrt(
        discriminant
      );


    const options = [

      (
        -b
        -
        root
      )
      /
      2,

      (
        -b
        +
        root
      )
      /
      2

    ]
    .filter(
      function (value) {

        return (
          value >
          EPSILON
        );
      }
    )
    .sort(
      function (a, b) {

        return a - b;
      }
    );


    if (!options.length) {
      return null;
    }


    const t =
      options[0];


    return {

      type:
        "target",

      component:
        target,

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


  function rayRectangleIntersection(
    origin,
    direction,
    blocker
  ) {

    const halfW =
      (
        blocker.w || 100
      )
      /
      2;


    const halfH =
      (
        blocker.h || 170
      )
      /
      2;


    const minX =
      blocker.x
      -
      halfW;


    const maxX =
      blocker.x
      +
      halfW;


    const minY =
      blocker.y
      -
      halfH;


    const maxY =
      blocker.y
      +
      halfH;


    let tMin =
      -Infinity;


    let tMax =
      Infinity;


    if (
      Math.abs(
        direction.x
      )
      <
      0.0001
    ) {

      if (
        origin.x < minX
        ||
        origin.x > maxX
      ) {
        return null;
      }

    } else {

      const tx1 =
        (
          minX
          -
          origin.x
        )
        /
        direction.x;


      const tx2 =
        (
          maxX
          -
          origin.x
        )
        /
        direction.x;


      tMin =
        Math.max(
          tMin,
          Math.min(
            tx1,
            tx2
          )
        );


      tMax =
        Math.min(
          tMax,
          Math.max(
            tx1,
            tx2
          )
        );
    }


    if (
      Math.abs(
        direction.y
      )
      <
      0.0001
    ) {

      if (
        origin.y < minY
        ||
        origin.y > maxY
      ) {
        return null;
      }

    } else {

      const ty1 =
        (
          minY
          -
          origin.y
        )
        /
        direction.y;


      const ty2 =
        (
          maxY
          -
          origin.y
        )
        /
        direction.y;


      tMin =
        Math.max(
          tMin,
          Math.min(
            ty1,
            ty2
          )
        );


      tMax =
        Math.min(
          tMax,
          Math.max(
            ty1,
            ty2
          )
        );
    }


    if (
      tMax < tMin
      ||
      tMax < EPSILON
    ) {
      return null;
    }


    const t =
      tMin > EPSILON
        ? tMin
        : tMax;


    if (
      t <= EPSILON
    ) {
      return null;
    }


    return {

      type:
        "blocker",

      component:
        blocker,

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
          BOARD_W
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
          BOARD_H
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

          return (
            value >
            EPSILON
          );
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

      type:
        "edge",

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


  function nearestHit(
    origin,
    direction,
    lastMirrorId
  ) {

    const hits = [];


    components
      .filter(
        function (component) {

          return (
            component.type ===
            "mirror"
            &&
            component.id !==
            lastMirrorId
          );
        }
      )
      .forEach(
        function (mirror) {

          const hit =
            mirrorIntersection(
              origin,
              direction,
              mirror
            );


          if (hit) {
            hits.push(hit);
          }
        }
      );


    components
      .filter(
        function (component) {

          return (
            component.type ===
            "target"
          );
        }
      )
      .forEach(
        function (target) {

          const hit =
            rayCircleIntersection(
              origin,
              direction,
              target
            );


          if (hit) {
            hits.push(hit);
          }
        }
      );


    components
      .filter(
        function (component) {

          return (
            component.type ===
            "blocker"
          );
        }
      )
      .forEach(
        function (blocker) {

          const hit =
            rayRectangleIntersection(
              origin,
              direction,
              blocker
            );


          if (hit) {
            hits.push(hit);
          }
        }
      );


    hits.push(
      boardExit(
        origin,
        direction
      )
    );


    hits.sort(
      function (a, b) {

        return (
          a.t
          -
          b.t
        );
      }
    );


    return hits[0];
  }


  function drawRaySegment(
    start,
    end
  ) {

    const ns =
      "http://www.w3.org/2000/svg";


    const glow =
      document.createElementNS(
        ns,
        "line"
      );


    glow.setAttribute(
      "x1",
      start.x
    );

    glow.setAttribute(
      "y1",
      start.y
    );

    glow.setAttribute(
      "x2",
      end.x
    );

    glow.setAttribute(
      "y2",
      end.y
    );

    glow.setAttribute(
      "stroke",
      "#ffe45d"
    );

    glow.setAttribute(
      "stroke-width",
      "18"
    );

    glow.setAttribute(
      "stroke-linecap",
      "round"
    );

    glow.setAttribute(
      "opacity",
      ".25"
    );


    raySvg.appendChild(
      glow
    );


    const ray =
      document.createElementNS(
        ns,
        "line"
      );


    ray.setAttribute(
      "x1",
      start.x
    );

    ray.setAttribute(
      "y1",
      start.y
    );

    ray.setAttribute(
      "x2",
      end.x
    );

    ray.setAttribute(
      "y2",
      end.y
    );

    ray.setAttribute(
      "stroke",
      "#fff1a0"
    );

    ray.setAttribute(
      "stroke-width",
      "6"
    );

    ray.setAttribute(
      "stroke-linecap",
      "round"
    );


    raySvg.appendChild(
      ray
    );
  }


  function clearRays() {

    raySvg.innerHTML = "";


    board
      .querySelectorAll(
        ".mm-target"
      )
      .forEach(
        function (target) {

          target.classList.remove(
            "hit"
          );
        }
      );


    bounceCount.textContent =
      "Reflections: 0";
  }


  function testLight() {

    clearRays();


    const source =
      components.find(
        function (component) {

          return component.type ===
            "light";
        }
      );


    const target =
      components.find(
        function (component) {

          return component.type ===
            "target";
        }
      );


    if (
      !source
      ||
      !target
    ) {

      status.innerHTML =
        '<span class="mm-fail">Add one light source and one target first.</span>';

      return;
    }


    let origin = {

      x:
        source.x,

      y:
        source.y
    };


    let direction =
      vectorFromAngle(
        source.angle
      );


    let reflections = 0;

    let lastMirrorId = null;


    for (
      let step = 0;
      step < 12;
      step++
    ) {

      const hit =
        nearestHit(
          origin,
          direction,
          lastMirrorId
        );


      if (!hit) {
        break;
      }


      drawRaySegment(
        origin,
        hit
      );


      if (
        hit.type ===
        "target"
      ) {

        reflections =
          reflections;


        bounceCount.textContent =
          "Reflections: "
          +
          reflections;


        status.innerHTML =
          '<span class="mm-success">🏁 TARGET HIT! Mission accomplished.</span>';


        const targetElement =
          board.querySelector(
            '[data-id="'
            +
            target.id
            +
            '"]'
          );


        if (targetElement) {

          targetElement.classList.add(
            "hit"
          );
        }


        return;
      }


      if (
        hit.type ===
        "blocker"
      ) {

        bounceCount.textContent =
          "Reflections: "
          +
          reflections;


        status.innerHTML =
          '<span class="mm-fail">⬛ Beam blocked. Use reflection to redirect the light.</span>';

        return;
      }


      if (
        hit.type ===
        "edge"
      ) {

        bounceCount.textContent =
          "Reflections: "
          +
          reflections;


        status.innerHTML =
          '<span class="mm-fail">↗️ The light left the board before reaching the target. Adjust a mirror.</span>';

        return;
      }


      if (
        hit.type ===
        "mirror"
      ) {

        reflections += 1;


        direction =
          reflectDirection(
            direction,
            hit.tangent
          );


        origin = {

          x:
            hit.x
            +
            direction.x
            *
            EPSILON
            *
            2,

          y:
            hit.y
            +
            direction.y
            *
            EPSILON
            *
            2
        };


        lastMirrorId =
          hit.component.id;


        continue;
      }
    }


    bounceCount.textContent =
      "Reflections: "
      +
      reflections;


    status.innerHTML =
      '<span class="mm-fail">The beam did not reach the target. Revise your design.</span>';
  }


  // =========================================================
  // BUTTONS
  // ============================================================

  document
    .querySelectorAll(
      ".mm-part-button"
    )
    .forEach(
      function (button) {

        button.addEventListener(
          "click",
          function () {

            addPart(
              button.dataset.add
            );
          }
        );
      }
    );


  document
    .querySelectorAll(
      ".mm-mission-button"
    )
    .forEach(
      function (button) {

        button.addEventListener(
          "click",
          function () {

            loadMission(
              button.dataset.mission
            );
          }
        );
      }
    );


  document
    .getElementById(
      "mmRotateLeft"
    )
    .addEventListener(
      "click",
      function () {

        rotateSelected(
          -15
        );
      }
    );


  document
    .getElementById(
      "mmRotateRight"
    )
    .addEventListener(
      "click",
      function () {

        rotateSelected(
          15
        );
      }
    );


  document
    .getElementById(
      "mmDelete"
    )
    .addEventListener(
      "click",
      deleteSelected
    );


  document
    .getElementById(
      "mmTest"
    )
    .addEventListener(
      "click",
      testLight
    );


  document
    .getElementById(
      "mmReset"
    )
    .addEventListener(
      "click",
      function () {

        loadMission(
          currentMission
        );
      }
    );


  function clamp(
    value,
    minimum,
    maximum
  ) {

    return Math.max(
      minimum,
      Math.min(
        maximum,
        value
      )
    );
  }


  loadMission(
    "1"
  );

})();
