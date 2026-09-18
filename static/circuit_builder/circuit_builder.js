(function () {

  const root =
    document.querySelector("#scienceStudioCircuitBuilder");

  if (!root) return;

  const board =
    root.querySelector("#cbBoard");

  const componentLayer =
    root.querySelector("#cbComponentLayer");

  const wireLayer =
    root.querySelector("#cbWireLayer");

  const emptyMessage =
    root.querySelector("#cbEmptyMessage");

  const testButton =
    root.querySelector("#cbTestCircuit");

  const toggleSwitchButton =
    root.querySelector("#cbToggleSwitch");

  const rotateButton =
    root.querySelector("#cbRotateSelected");

  const deleteButton =
    root.querySelector("#cbDeleteSelected");

  const resetButton =
    root.querySelector("#cbResetBoard");

  const statusElement =
    root.querySelector("#cbCircuitStatus");

  const countElement =
    root.querySelector("#cbObjectCount");

  const inspectorEmpty =
    root.querySelector("#cbInspectorEmpty");

  const inspectorContent =
    root.querySelector("#cbInspectorContent");

  const inspectorTitle =
    root.querySelector("#cbInspectorTitle");

  const inspectorDescription =
    root.querySelector("#cbInspectorDescription");

  const inspectorTerminals =
    root.querySelector("#cbInspectorTerminals");

  const NS =
    "http://www.w3.org/2000/svg";

  const MAGNET_RADIUS = 105;
  const HARD_SNAP_RADIUS = 30;

  let nextId = 1;

  const state = {
    components: [],
    wires: [],
    selected: null,
    interaction: null,
    snapCandidate: null,
    tested: false
  };


  // =========================================================
  // COMPONENT DEFINITIONS
  // =========================================================

  const componentDefinitions = {

    battery: {
      label: "Battery",
      description:
        "Power source with a positive (+) terminal and negative (−) terminal.",

      terminals: [
        {
          id: "positive",
          x: 0,
          y: -58,
          label: "+"
        },
        {
          id: "negative",
          x: 0,
          y: 58,
          label: "−"
        }
      ]
    },

    bulb: {
      label: "Bulb",
      description:
        "A load that transforms electrical energy into light and thermal energy.",

      terminals: [
        {
          id: "a",
          x: -48,
          y: 32,
          label: "Terminal A"
        },
        {
          id: "b",
          x: 48,
          y: 32,
          label: "Terminal B"
        }
      ]
    },

    switch: {
      label: "Switch",
      description:
        "Controls whether the conducting path is open or closed.",

      terminals: [
        {
          id: "a",
          x: -55,
          y: 12,
          label: "Terminal A"
        },
        {
          id: "b",
          x: 55,
          y: 12,
          label: "Terminal B"
        }
      ]
    },

    motor: {
      label: "Motor",
      description:
        "A load that transforms electrical energy into motion.",

      terminals: [
        {
          id: "a",
          x: -52,
          y: 36,
          label: "Terminal A"
        },
        {
          id: "b",
          x: 52,
          y: 36,
          label: "Terminal B"
        }
      ]
    },

    speaker: {
      label: "Speaker",
      description:
        "A load that transforms electrical energy into sound.",

      terminals: [
        {
          id: "a",
          x: -52,
          y: 34,
          label: "Terminal A"
        },
        {
          id: "b",
          x: 52,
          y: 34,
          label: "Terminal B"
        }
      ]
    }
  };


  // =========================================================
  // BASIC HELPERS
  // =========================================================

  function uid(prefix) {
    return prefix + "-" + nextId++;
  }


  function createSvg(tag, attrs = {}) {

    const node =
      document.createElementNS(
        NS,
        tag
      );

    Object.entries(attrs)
      .forEach(
        ([key, value]) => {
          node.setAttribute(
            key,
            value
          );
        }
      );

    return node;
  }


  function textNode(
    x,
    y,
    text,
    options = {}
  ) {

    const node =
      createSvg(
        "text",
        {
          x,
          y,

          "text-anchor":
            options.anchor ||
            "middle",

          "font-size":
            options.size ||
            16,

          "font-weight":
            options.weight ||
            800,

          fill:
            options.fill ||
            "#111"
        }
      );

    node.textContent =
      text;

    return node;
  }


  function svgPoint(event) {

    const pt =
      board.createSVGPoint();

    pt.x =
      event.clientX;

    pt.y =
      event.clientY;

    const matrix =
      board.getScreenCTM();

    if (!matrix) {
      return {
        x: 500,
        y: 325
      };
    }

    const transformed =
      pt.matrixTransform(
        matrix.inverse()
      );

    return {
      x:
        Math.max(
          20,
          Math.min(
            980,
            transformed.x
          )
        ),

      y:
        Math.max(
          20,
          Math.min(
            630,
            transformed.y
          )
        )
    };
  }


  function getComponent(id) {

    return state.components.find(
      item =>
        item.id === id
    );
  }


  function getWire(id) {

    return state.wires.find(
      item =>
        item.id === id
    );
  }


  function terminalKey(
    componentId,
    terminalId
  ) {

    return (
      componentId +
      ":" +
      terminalId
    );
  }


  // =========================================================
  // ONE AUTHORITATIVE ROTATION CALCULATION
  // =========================================================

  function rotateLocalPoint(
    x,
    y,
    degrees
  ) {

    const radians =
      degrees *
      Math.PI /
      180;

    return {

      x:
        x *
        Math.cos(radians)
        -
        y *
        Math.sin(radians),

      y:
        x *
        Math.sin(radians)
        +
        y *
        Math.cos(radians)
    };
  }


  // =========================================================
  // ONE AUTHORITATIVE TERMINAL POSITION
  // =========================================================

  function terminalPosition(key) {

    if (!key) return null;

    const divider =
      key.indexOf(":");

    if (divider < 0) {
      return null;
    }

    const componentId =
      key.slice(
        0,
        divider
      );

    const terminalId =
      key.slice(
        divider + 1
      );

    const component =
      getComponent(
        componentId
      );

    if (!component) {
      return null;
    }

    const definition =
      componentDefinitions[
        component.type
      ];

    if (!definition) {
      return null;
    }

    const terminal =
      definition.terminals.find(
        item =>
          item.id === terminalId
      );

    if (!terminal) {
      return null;
    }

    const rotated =
      rotateLocalPoint(
        terminal.x,
        terminal.y,
        Number(
          component.rotation ||
          0
        )
      );

    return {

      x:
        component.x +
        rotated.x,

      y:
        component.y +
        rotated.y
    };
  }


  function terminalConnections(key) {

    let count = 0;

    state.wires.forEach(
      wire => {

        if (
          wire.a.terminal === key
        ) {
          count += 1;
        }

        if (
          wire.b.terminal === key
        ) {
          count += 1;
        }
      }
    );

    return count;
  }


  function nearestTerminal(
    point,
    radius = MAGNET_RADIUS
  ) {

    let closest = null;
    let closestDistance = radius;

    state.components.forEach(
      component => {

        const definition =
          componentDefinitions[
            component.type
          ];

        definition.terminals.forEach(
          terminal => {

            const key =
              terminalKey(
                component.id,
                terminal.id
              );

            const position =
              terminalPosition(
                key
              );

            if (!position) return;

            const distance =
              Math.hypot(
                position.x -
                point.x,

                position.y -
                point.y
              );

            if (
              distance <
              closestDistance
            ) {

              closestDistance =
                distance;

              closest =
                key;
            }
          }
        );
      }
    );

    return closest;
  }


  // =========================================================
  // WIRE DISPLAY POSITION
  // =========================================================

  function wireEndpointPosition(
    wire,
    endName
  ) {

    const endpoint =
      wire[endName];

    /*
      CONNECTED WIRE:
      Always use current terminal coordinates.

      Stored endpoint.x/y are ignored completely.
    */

    if (endpoint.terminal) {

      const exact =
        terminalPosition(
          endpoint.terminal
        );

      if (exact) {
        return exact;
      }

      endpoint.terminal =
        null;
    }


    const normal = {

      x:
        Number(
          endpoint.x
        ) || 0,

      y:
        Number(
          endpoint.y
        ) || 0
    };


    /*
      Magnetic attraction only applies
      to the wire end currently being dragged.
    */

    if (
      !state.interaction ||
      state.interaction.type !==
        "wire-end" ||
      state.interaction.id !==
        wire.id ||
      state.interaction.end !==
        endName ||
      !state.snapCandidate
    ) {

      return normal;
    }


    const target =
      terminalPosition(
        state.snapCandidate
      );

    if (!target) {
      return normal;
    }


    const dx =
      target.x -
      normal.x;

    const dy =
      target.y -
      normal.y;

    const distance =
      Math.hypot(
        dx,
        dy
      );


    if (
      distance <=
      HARD_SNAP_RADIUS
    ) {

      return {
        x: target.x,
        y: target.y
      };
    }


    if (
      distance >=
      MAGNET_RADIUS
    ) {

      return normal;
    }


    const closeness =
      1 -
      distance /
      MAGNET_RADIUS;


    const pull =
      0.10 +
      (
        0.78 *
        Math.pow(
          closeness,
          1.4
        )
      );


    return {

      x:
        normal.x +
        dx * pull,

      y:
        normal.y +
        dy * pull
    };
  }


  // =========================================================
  // ADD OBJECTS
  // =========================================================

  function addComponent(
    type,
    x = 500,
    y = 325
  ) {

    if (
      !componentDefinitions[type]
    ) {
      return;
    }

    const component = {

      id:
        uid(type),

      type,

      x,

      y,

      rotation: 0,

      closed:
        type === "switch"
          ? false
          : undefined
    };


    state.components.push(
      component
    );

    state.tested =
      false;

    state.selected = {
      kind: "component",
      id: component.id
    };

    render();
  }


  function addWire(
    x = 500,
    y = 325
  ) {

    const wire = {

      id:
        uid("wire"),

      a: {
        x: x - 70,
        y,
        terminal: null
      },

      b: {
        x: x + 70,
        y,
        terminal: null
      }
    };


    state.wires.push(
      wire
    );

    state.tested =
      false;

    state.selected = {
      kind: "wire",
      id: wire.id
    };

    render();
  }


  // =========================================================
  // SELECTION / STATUS / INSPECTOR
  // =========================================================

  function setStatus(
    message,
    type = ""
  ) {

    statusElement.textContent =
      message;

    statusElement.classList.remove(
      "success",
      "error"
    );

    if (type) {
      statusElement.classList.add(
        type
      );
    }
  }


  function selectObject(
    kind,
    id
  ) {

    state.selected = {
      kind,
      id
    };

    render();
  }


  function clearSelection() {

    state.selected =
      null;

    render();
  }


  function updateToolbar() {

    const selected =
      state.selected;

    deleteButton.disabled =
      !selected;


    /*
      Keep rotate clickable.
      It explains what to do if nothing is selected.
    */

    rotateButton.disabled =
      false;


    if (
      selected &&
      selected.kind ===
        "component"
    ) {

      const component =
        getComponent(
          selected.id
        );


      if (
        component &&
        component.type ===
          "switch"
      ) {

        toggleSwitchButton.disabled =
          false;

        toggleSwitchButton.textContent =
          component.closed
            ? "Open Switch"
            : "Close Switch";
      }

      else {

        toggleSwitchButton.disabled =
          true;

        toggleSwitchButton.textContent =
          "Toggle Switch";
      }
    }

    else {

      toggleSwitchButton.disabled =
        true;

      toggleSwitchButton.textContent =
        "Toggle Switch";
    }
  }


  function updateInspector() {

    if (!state.selected) {

      inspectorEmpty.hidden =
        false;

      inspectorContent.hidden =
        true;

      return;
    }


    inspectorEmpty.hidden =
      true;

    inspectorContent.hidden =
      false;


    if (
      state.selected.kind ===
      "wire"
    ) {

      const wire =
        getWire(
          state.selected.id
        );

      if (!wire) {

        state.selected =
          null;

        updateInspector();

        return;
      }


      inspectorTitle.textContent =
        "Wire";

      inspectorDescription.textContent =
        "Drag either round endpoint near a terminal. Magnetic terminals pull the wire into place.";


      inspectorTerminals.innerHTML =
        `
          <div>
            End A:
            <strong>
              ${
                wire.a.terminal
                  ? "Connected"
                  : "Not connected"
              }
            </strong>
          </div>

          <div>
            End B:
            <strong>
              ${
                wire.b.terminal
                  ? "Connected"
                  : "Not connected"
              }
            </strong>
          </div>
        `;

      return;
    }


    const component =
      getComponent(
        state.selected.id
      );

    if (!component) {

      state.selected =
        null;

      updateInspector();

      return;
    }


    const definition =
      componentDefinitions[
        component.type
      ];


    inspectorTitle.textContent =
      definition.label;

    inspectorDescription.textContent =
      definition.description;


    inspectorTerminals.innerHTML =
      definition.terminals
        .map(
          terminal => {

            const key =
              terminalKey(
                component.id,
                terminal.id
              );

            const count =
              terminalConnections(
                key
              );

            return `
              <div>
                ${terminal.label}:
                <strong>
                  ${
                    count
                      ? count +
                        " wire connection" +
                        (
                          count === 1
                            ? ""
                            : "s"
                        )
                      : "not connected"
                  }
                </strong>
              </div>
            `;
          }
        )
        .join("");


    inspectorTerminals.innerHTML +=
      `
        <div>
          Rotation:
          <strong>
            ${component.rotation}°
          </strong>
        </div>
      `;


    if (
      component.type ===
      "switch"
    ) {

      inspectorTerminals.innerHTML +=
        `
          <div>
            Switch:
            <strong>
              ${
                component.closed
                  ? "CLOSED"
                  : "OPEN"
              }
            </strong>
          </div>
        `;
    }
  }


  // =========================================================
  // COMPONENT DRAWINGS
  // =========================================================

  function renderBattery(group) {

    group.appendChild(
      createSvg(
        "rect",
        {
          x: -34,
          y: -50,
          width: 68,
          height: 100,
          rx: 12,
          fill: "#ffc400",
          stroke: "#111",
          "stroke-width": 4
        }
      )
    );


    group.appendChild(
      createSvg(
        "rect",
        {
          x: -14,
          y: -63,
          width: 28,
          height: 13,
          rx: 3,
          fill: "#333",
          stroke: "#111",
          "stroke-width": 2
        }
      )
    );


    group.appendChild(
      createSvg(
        "rect",
        {
          x: -14,
          y: 50,
          width: 28,
          height: 13,
          rx: 3,
          fill: "#333",
          stroke: "#111",
          "stroke-width": 2
        }
      )
    );


    group.appendChild(
      textNode(
        0,
        -18,
        "BATTERY",
        {
          size: 13
        }
      )
    );


    group.appendChild(
      textNode(
        0,
        10,
        "POWER",
        {
          size: 12
        }
      )
    );


    group.appendChild(
      textNode(
        27,
        -55,
        "+",
        {
          size: 26,
          fill: "#087a35"
        }
      )
    );


    group.appendChild(
      textNode(
        27,
        64,
        "−",
        {
          size: 26,
          fill: "#b00020"
        }
      )
    );
  }


  function renderBulb(group) {

    group.appendChild(
      createSvg(
        "circle",
        {
          cx: 0,
          cy: -8,
          r: 38,
          class: "cb-bulb-glass"
        }
      )
    );


    group.appendChild(
      createSvg(
        "path",
        {
          d:
            "M -14 -8 Q 0 -32 14 -8 Q 0 16 -14 -8",

          fill: "none",
          stroke: "#555",
          "stroke-width": 4
        }
      )
    );


    group.appendChild(
      createSvg(
        "rect",
        {
          x: -25,
          y: 27,
          width: 50,
          height: 25,
          rx: 5,
          fill: "#f08a24",
          stroke: "#111",
          "stroke-width": 4
        }
      )
    );


    group.appendChild(
      textNode(
        0,
        76,
        "BULB",
        {
          size: 15
        }
      )
    );
  }


  function renderSwitch(
    group,
    component
  ) {

    group.appendChild(
      createSvg(
        "rect",
        {
          x: -65,
          y: -30,
          width: 130,
          height: 75,
          rx: 14,
          fill: "#fff",
          stroke: "#111",
          "stroke-width": 4
        }
      )
    );


    group.appendChild(
      createSvg(
        "circle",
        {
          cx: -35,
          cy: 12,
          r: 7,
          fill: "#111"
        }
      )
    );


    group.appendChild(
      createSvg(
        "circle",
        {
          cx: 35,
          cy: 12,
          r: 7,
          fill: "#111"
        }
      )
    );


    group.appendChild(
      createSvg(
        "line",
        {
          x1: -35,
          y1: 12,

          x2:
            component.closed
              ? 35
              : 28,

          y2:
            component.closed
              ? 12
              : -18,

          stroke: "#111",

          "stroke-width": 7,

          "stroke-linecap":
            "round"
        }
      )
    );


    group.appendChild(
      textNode(
        0,
        70,

        component.closed
          ? "SWITCH CLOSED"
          : "SWITCH OPEN",

        {
          size: 14,

          fill:
            component.closed
              ? "#087a35"
              : "#b00020"
        }
      )
    );


    group.appendChild(
      createSvg(
        "rect",
        {
          x: -42,
          y: -27,
          width: 84,
          height: 62,
          rx: 12,
          fill: "transparent",
          "data-switch-toggle":
            component.id,
          class:
            "cb-switch-toggle-hit"
        }
      )
    );
  }


  function renderMotor(group) {

    group.appendChild(
      createSvg(
        "rect",
        {
          x: -55,
          y: -42,
          width: 110,
          height: 82,
          rx: 18,
          fill: "#cfeaff",
          stroke: "#111",
          "stroke-width": 4
        }
      )
    );


    group.appendChild(
      createSvg(
        "circle",
        {
          cx: 0,
          cy: -2,
          r: 28,
          fill: "white",
          stroke: "#111",
          "stroke-width": 3
        }
      )
    );


    const rotor =
      createSvg(
        "g",
        {
          class:
            "cb-motor-rotor"
        }
      );


    rotor.appendChild(
      createSvg(
        "line",
        {
          x1: -20,
          y1: -2,
          x2: 20,
          y2: -2,
          stroke: "#4d8eaa",
          "stroke-width": 6,
          "stroke-linecap":
            "round"
        }
      )
    );


    rotor.appendChild(
      createSvg(
        "line",
        {
          x1: 0,
          y1: -22,
          x2: 0,
          y2: 18,
          stroke: "#4d8eaa",
          "stroke-width": 6,
          "stroke-linecap":
            "round"
        }
      )
    );


    group.appendChild(
      rotor
    );


    group.appendChild(
      textNode(
        0,
        70,
        "MOTOR",
        {
          size: 15
        }
      )
    );
  }


  function renderSpeaker(group) {

    group.appendChild(
      createSvg(
        "rect",
        {
          x: -55,
          y: -42,
          width: 110,
          height: 80,
          rx: 16,
          fill: "#e1ddff",
          stroke: "#111",
          "stroke-width": 4
        }
      )
    );


    group.appendChild(
      createSvg(
        "circle",
        {
          cx: -5,
          cy: -2,
          r: 26,
          fill: "#444",
          stroke: "#111",
          "stroke-width": 3
        }
      )
    );


    group.appendChild(
      createSvg(
        "path",
        {
          d:
            "M 26 -25 C 55 -15 55 10 26 20",

          fill: "none",
          stroke: "#a23ab8",
          "stroke-width": 6,
          class:
            "cb-speaker-wave"
        }
      )
    );


    group.appendChild(
      textNode(
        0,
        70,
        "SPEAKER",
        {
          size: 15
        }
      )
    );
  }


  // =========================================================
  // ONE COMPONENT RENDERER
  // =========================================================

  function renderComponent(
    component,
    poweredLoads
  ) {

    const selected =
      state.selected &&
      state.selected.kind ===
        "component" &&
      state.selected.id ===
        component.id;


    const powered =
      poweredLoads.has(
        component.id
      );


    const outer =
      createSvg(
        "g",
        {
          class:
            "cb-component" +
            (
              selected
                ? " selected"
                : ""
            ) +
            (
              powered
                ? " powered"
                : ""
            ),

          "data-id":
            component.id,

          transform:
            "translate(" +
            component.x +
            " " +
            component.y +
            ")"
        }
      );


    const rotation =
      createSvg(
        "g",
        {
          class:
            "cb-component-rotation-layer",

          transform:
            "rotate(" +
            component.rotation +
            " 0 0)"
        }
      );


    rotation.appendChild(
      createSvg(
        "rect",
        {
          x: -78,
          y: -82,
          width: 156,
          height: 170,
          rx: 18,
          class:
            "cb-select-ring"
        }
      )
    );


    if (
      component.type ===
      "battery"
    ) {
      renderBattery(
        rotation
      );
    }


    if (
      component.type ===
      "bulb"
    ) {
      renderBulb(
        rotation
      );
    }


    if (
      component.type ===
      "switch"
    ) {
      renderSwitch(
        rotation,
        component
      );
    }


    if (
      component.type ===
      "motor"
    ) {
      renderMotor(
        rotation
      );
    }


    if (
      component.type ===
      "speaker"
    ) {
      renderSpeaker(
        rotation
      );
    }


    const definition =
      componentDefinitions[
        component.type
      ];


    definition.terminals.forEach(
      terminal => {

        const key =
          terminalKey(
            component.id,
            terminal.id
          );


        const helpRing =
          createSvg(
            "circle",
            {
              cx: terminal.x,
              cy: terminal.y,
              r: 23,

              class:
                "cb-terminal-help-ring" +
                (
                  state.snapCandidate ===
                  key
                    ? " magnet-active"
                    : ""
                )
            }
          );


        rotation.appendChild(
          helpRing
        );


        let terminalClass =
          "cb-terminal";


        if (
          terminalConnections(key)
        ) {
          terminalClass +=
            " connected";
        }


        if (
          state.snapCandidate === key
        ) {
          terminalClass +=
            " available";
        }


        rotation.appendChild(
          createSvg(
            "circle",
            {
              cx: terminal.x,
              cy: terminal.y,
              r: 13,

              class:
                terminalClass,

              "data-terminal":
                key
            }
          )
        );
      }
    );


    outer.appendChild(
      rotation
    );

    return outer;
  }


  // =========================================================
  // ONE WIRE RENDERER
  // =========================================================

  function renderWire(wire) {

    const a =
      wireEndpointPosition(
        wire,
        "a"
      );

    const b =
      wireEndpointPosition(
        wire,
        "b"
      );


    const selected =
      state.selected &&
      state.selected.kind ===
        "wire" &&
      state.selected.id ===
        wire.id;


    const group =
      createSvg(
        "g",
        {
          class:
            "cb-wire" +
            (
              selected
                ? " selected"
                : ""
            ),

          "data-id":
            wire.id
        }
      );


    const middleX =
      (
        a.x +
        b.x
      ) / 2;


    const pathString =
      "M " +
      a.x +
      " " +
      a.y +

      " C " +
      middleX +
      " " +
      a.y +

      ", " +
      middleX +
      " " +
      b.y +

      ", " +
      b.x +
      " " +
      b.y;


    group.appendChild(
      createSvg(
        "path",
        {
          d:
            pathString,

          class:
            "cb-wire-visible"
        }
      )
    );


    group.appendChild(
      createSvg(
        "path",
        {
          d:
            pathString,

          class:
            "cb-wire-hit",

          "data-wire-body":
            wire.id
        }
      )
    );


    let classA =
      "cb-wire-end";


    if (
      wire.a.terminal
    ) {
      classA +=
        " connected";
    }


    if (
      state.interaction &&
      state.interaction.type ===
        "wire-end" &&
      state.interaction.id ===
        wire.id &&
      state.interaction.end ===
        "a" &&
      state.snapCandidate
    ) {

      classA +=
        " cb-magnetic-end";
    }


    group.appendChild(
      createSvg(
        "circle",
        {
          cx: a.x,
          cy: a.y,
          r: 14,

          class:
            classA,

          "data-wire":
            wire.id,

          "data-end":
            "a"
        }
      )
    );


    let classB =
      "cb-wire-end";


    if (
      wire.b.terminal
    ) {
      classB +=
        " connected";
    }


    if (
      state.interaction &&
      state.interaction.type ===
        "wire-end" &&
      state.interaction.id ===
        wire.id &&
      state.interaction.end ===
        "b" &&
      state.snapCandidate
    ) {

      classB +=
        " cb-magnetic-end";
    }


    group.appendChild(
      createSvg(
        "circle",
        {
          cx: b.x,
          cy: b.y,
          r: 14,

          class:
            classB,

          "data-wire":
            wire.id,

          "data-end":
            "b"
        }
      )
    );


    return group;
  }


  // =========================================================
  // GRAPH / CIRCUIT ANALYSIS
  // =========================================================

  function buildGraph(
    excludedComponentId =
      null
  ) {

    const graph =
      new Map();


    function ensure(node) {

      if (
        !graph.has(node)
      ) {

        graph.set(
          node,
          new Set()
        );
      }
    }


    function connect(
      a,
      b
    ) {

      ensure(a);
      ensure(b);

      graph.get(a).add(b);
      graph.get(b).add(a);
    }


    state.components.forEach(
      component => {

        const definition =
          componentDefinitions[
            component.type
          ];


        definition.terminals.forEach(
          terminal => {

            ensure(
              terminalKey(
                component.id,
                terminal.id
              )
            );
          }
        );


        if (
          component.id ===
            excludedComponentId ||
          component.type ===
            "battery"
        ) {

          return;
        }


        if (
          component.type ===
            "switch" &&
          !component.closed
        ) {

          return;
        }


        if (
          definition.terminals.length >=
          2
        ) {

          connect(
            terminalKey(
              component.id,
              definition.terminals[0].id
            ),

            terminalKey(
              component.id,
              definition.terminals[1].id
            )
          );
        }
      }
    );


    state.wires.forEach(
      wire => {

        if (
          wire.a.terminal &&
          wire.b.terminal
        ) {

          connect(
            wire.a.terminal,
            wire.b.terminal
          );
        }
      }
    );


    return graph;
  }


  function reachable(
    graph,
    start,
    target
  ) {

    if (
      !start ||
      !target
    ) {

      return false;
    }


    if (
      start === target
    ) {

      return true;
    }


    const queue =
      [start];

    const visited =
      new Set(
        [start]
      );


    while (
      queue.length
    ) {

      const current =
        queue.shift();


      for (
        const next of
        graph.get(current) ||
        []
      ) {

        if (
          next === target
        ) {

          return true;
        }


        if (
          !visited.has(next)
        ) {

          visited.add(next);
          queue.push(next);
        }
      }
    }


    return false;
  }


  function evaluateCircuit() {

    const batteries =
      state.components.filter(
        component =>
          component.type ===
          "battery"
      );


    const loads =
      state.components.filter(
        component =>
          [
            "bulb",
            "motor",
            "speaker"
          ].includes(
            component.type
          )
      );


    const graph =
      buildGraph();


    let completeCircuit =
      false;


    batteries.forEach(
      battery => {

        const positive =
          terminalKey(
            battery.id,
            "positive"
          );

        const negative =
          terminalKey(
            battery.id,
            "negative"
          );


        if (
          reachable(
            graph,
            positive,
            negative
          )
        ) {

          completeCircuit =
            true;
        }
      }
    );


    const poweredLoads =
      new Set();


    loads.forEach(
      load => {

        const definition =
          componentDefinitions[
            load.type
          ];


        const loadA =
          terminalKey(
            load.id,
            definition.terminals[0].id
          );

        const loadB =
          terminalKey(
            load.id,
            definition.terminals[1].id
          );


        const graphWithoutLoad =
          buildGraph(
            load.id
          );


        batteries.forEach(
          battery => {

            const positive =
              terminalKey(
                battery.id,
                "positive"
              );

            const negative =
              terminalKey(
                battery.id,
                "negative"
              );


            const directionOne =
              reachable(
                graphWithoutLoad,
                positive,
                loadA
              )
              &&
              reachable(
                graphWithoutLoad,
                loadB,
                negative
              );


            const directionTwo =
              reachable(
                graphWithoutLoad,
                positive,
                loadB
              )
              &&
              reachable(
                graphWithoutLoad,
                loadA,
                negative
              );


            if (
              directionOne ||
              directionTwo
            ) {

              poweredLoads.add(
                load.id
              );
            }
          }
        );
      }
    );


    const batteryExists =
      batteries.length >
      0;


    const positiveConnected =
      batteries.some(
        battery =>
          terminalConnections(
            terminalKey(
              battery.id,
              "positive"
            )
          ) >
          0
      );


    const negativeConnected =
      batteries.some(
        battery =>
          terminalConnections(
            terminalKey(
              battery.id,
              "negative"
            )
          ) >
          0
      );


    return {
      batteryExists,
      positiveConnected,
      negativeConnected,
      loadExists:
        loads.length > 0,
      completeCircuit,
      poweredLoads
    };
  }


  // =========================================================
  // MISSION CHECKS
  // =========================================================

  function updateMissionChecks(
    result
  ) {

    const checks = [

      [
        "#cbCheckBattery",
        result.batteryExists,
        "Battery on board"
      ],

      [
        "#cbCheckPositive",
        result.positiveConnected,
        "Wire connected to +"
      ],

      [
        "#cbCheckNegative",
        result.negativeConnected,
        "Wire connected to −"
      ],

      [
        "#cbCheckLoad",
        result.loadExists,
        "Load in the circuit"
      ],

      [
        "#cbCheckComplete",
        result.completeCircuit,
        "Complete conducting path"
      ]
    ];


    checks.forEach(
      item => {

        const element =
          root.querySelector(
            item[0]
          );


        if (!element) return;


        element.textContent =
          (
            item[1]
              ? "✓ "
              : "○ "
          )
          +
          item[2];


        element.style.color =
          item[1]
            ? "#087a35"
            : "";
      }
    );
  }


  // =========================================================
  // SNAP FEEDBACK
  // =========================================================

  function showSnapFeedback(
    terminalKeyValue
  ) {

    setTimeout(
      function() {

        const terminal =
          Array.from(
            board.querySelectorAll(
              ".cb-terminal"
            )
          ).find(
            node =>
              node.dataset.terminal ===
              terminalKeyValue
          );


        if (!terminal) {
          return;
        }


        terminal.classList.add(
          "cb-snap-pop"
        );


        const x =
          Number(
            terminal.getAttribute(
              "cx"
            )
          ) || 0;

        const y =
          Number(
            terminal.getAttribute(
              "cy"
            )
          ) || 0;


        const label =
          createSvg(
            "text",
            {
              x,
              y: y - 30,

              "text-anchor":
                "middle",

              class:
                "cb-snap-label"
            }
          );


        label.textContent =
          "✓ SNAP!";


        terminal.parentNode.appendChild(
          label
        );


        setTimeout(
          function() {

            label.remove();

            terminal.classList.remove(
              "cb-snap-pop"
            );

          },
          750
        );

      },
      0
    );
  }


  // =========================================================
  // RENDER EVERYTHING
  // =========================================================

  function render() {

    const result =
      state.tested
        ? evaluateCircuit()
        : {
            poweredLoads:
              new Set()
          };


    wireLayer.innerHTML =
      "";

    componentLayer.innerHTML =
      "";


    state.wires.forEach(
      wire => {

        wireLayer.appendChild(
          renderWire(
            wire
          )
        );
      }
    );


    state.components.forEach(
      component => {

        componentLayer.appendChild(
          renderComponent(
            component,
            result.poweredLoads
          )
        );
      }
    );


    emptyMessage.style.display =
      (
        state.components.length ===
          0 &&
        state.wires.length ===
          0
      )
        ? ""
        : "none";


    countElement.textContent =
      state.components.length +
      " part" +
      (
        state.components.length === 1
          ? ""
          : "s"
      )
      +
      " • "
      +
      state.wires.length +
      " wire" +
      (
        state.wires.length === 1
          ? ""
          : "s"
      );


    updateToolbar();
    updateInspector();


    if (!state.tested) {
      updateMissionChecks(
        evaluateCircuit()
      );
    }
  }


  // =========================================================
  // TEST CIRCUIT
  // =========================================================

  function testCircuit() {

    state.tested =
      true;

    const result =
      evaluateCircuit();

    updateMissionChecks(
      result
    );


    if (
      !result.batteryExists
    ) {

      setStatus(
        "Add a battery first.",
        "error"
      );
    }


    else if (
      !result.positiveConnected
    ) {

      setStatus(
        "Connect a wire to the battery's positive (+) terminal.",
        "error"
      );
    }


    else if (
      !result.negativeConnected
    ) {

      setStatus(
        "Connect a return wire to the battery's negative (−) terminal.",
        "error"
      );
    }


    else if (
      !result.loadExists
    ) {

      setStatus(
        "Add a bulb, motor, or speaker.",
        "error"
      );
    }


    else if (
      !result.completeCircuit
    ) {

      setStatus(
        "The path is incomplete. Check wire connections and open switches.",
        "error"
      );
    }


    else if (
      !result.poweredLoads.size
    ) {

      setStatus(
        "The circuit is complete, but no load is correctly connected.",
        "error"
      );
    }


    else {

      const names =
        [];


      result.poweredLoads.forEach(
        id => {

          const component =
            getComponent(id);

          if (component) {

            names.push(
              componentDefinitions[
                component.type
              ].label
            );
          }
        }
      );


      setStatus(
        "Circuit complete! Powered load" +
        (
          names.length === 1
            ? ": "
            : "s: "
        )
        +
        names.join(", ")
        +
        ".",

        "success"
      );
    }


    render();
  }


  // =========================================================
  // ROTATION
  // =========================================================

  function rotateSelected() {

    if (
      !state.selected ||
      state.selected.kind !==
        "component"
    ) {

      setStatus(
        "Select a component first.",
        "error"
      );

      return;
    }


    const component =
      getComponent(
        state.selected.id
      );


    if (!component) {
      return;
    }


    const oldRotation =
      component.rotation;


    component.rotation =
      (
        component.rotation +
        90
      ) %
      360;


    state.tested =
      false;


    setStatus(
      componentDefinitions[
        component.type
      ].label
      +
      " rotated: "
      +
      oldRotation
      +
      "° → "
      +
      component.rotation
      +
      "°",

      "success"
    );


    /*
      THIS render redraws both:
      - the rotated component
      - connected wires at new terminal coordinates
    */

    render();
  }


  // =========================================================
  // SWITCH
  // =========================================================

  function toggleSwitch(
    componentId
  ) {

    const component =
      getComponent(
        componentId
      );


    if (
      !component ||
      component.type !==
        "switch"
    ) {

      return;
    }


    component.closed =
      !component.closed;


    state.selected = {
      kind: "component",
      id: component.id
    };


    state.tested =
      false;


    setStatus(
      component.closed
        ? "Switch CLOSED."
        : "Switch OPEN."
    );


    render();
  }


  // =========================================================
  // DELETE
  // =========================================================

  function deleteSelected() {

    if (!state.selected) {
      return;
    }


    if (
      state.selected.kind ===
      "wire"
    ) {

      state.wires =
        state.wires.filter(
          wire =>
            wire.id !==
            state.selected.id
        );
    }


    else {

      const componentId =
        state.selected.id;


      state.components =
        state.components.filter(
          component =>
            component.id !==
            componentId
        );


      state.wires.forEach(
        wire => {

          ["a", "b"].forEach(
            endName => {

              const endpoint =
                wire[endName];


              if (
                endpoint.terminal &&
                endpoint.terminal.startsWith(
                  componentId +
                  ":"
                )
              ) {

                const last =
                  wireEndpointPosition(
                    wire,
                    endName
                  );


                endpoint.terminal =
                  null;

                endpoint.x =
                  last.x;

                endpoint.y =
                  last.y;
              }
            }
          );
        }
      );
    }


    state.selected =
      null;

    state.tested =
      false;


    setStatus(
      "Item deleted. Test the circuit again when ready."
    );


    render();
  }


  // =========================================================
  // RESET
  // =========================================================

  function resetBoard() {

    if (
      state.components.length ||
      state.wires.length
    ) {

      if (
        !window.confirm(
          "Clear the entire Circuit Builder?"
        )
      ) {

        return;
      }
    }


    state.components =
      [];

    state.wires =
      [];

    state.selected =
      null;

    state.interaction =
      null;

    state.snapCandidate =
      null;

    state.tested =
      false;


    setStatus(
      "Board reset."
    );


    render();
  }


  // =========================================================
  // EASY CLICK-TO-CONNECT
  // =========================================================

  function connectSelectedWireToTerminal(
    key
  ) {

    if (
      !state.selected ||
      state.selected.kind !==
        "wire"
    ) {

      const componentId =
        key.split(":")[0];


      state.selected = {
        kind: "component",
        id: componentId
      };


      setStatus(
        "Terminal selected. Select or add a wire to connect it."
      );


      render();

      return;
    }


    const wire =
      getWire(
        state.selected.id
      );


    if (!wire) return;


    let endName =
      null;


    if (
      !wire.a.terminal
    ) {

      endName =
        "a";
    }


    else if (
      !wire.b.terminal
    ) {

      endName =
        "b";
    }


    if (!endName) {

      setStatus(
        "Both ends of this wire are already connected."
      );

      return;
    }


    const endpoint =
      wire[endName];


    endpoint.terminal =
      key;


    const position =
      terminalPosition(
        key
      );


    if (position) {

      endpoint.x =
        position.x;

      endpoint.y =
        position.y;
    }


    state.tested =
      false;


    setStatus(
      "✓ SNAP! Wire connected securely to the terminal.",
      "success"
    );


    render();

    showSnapFeedback(
      key
    );
  }


  // =========================================================
  // POINTER INTERACTIONS
  // =========================================================

  board.addEventListener(
    "pointerdown",
    function(event) {

      const point =
        svgPoint(
          event
        );


      // -----------------------------------------------------
      // SWITCH LEVER
      // -----------------------------------------------------

      const switchHit =
        event.target.closest(
          "[data-switch-toggle]"
        );


      if (switchHit) {

        event.preventDefault();

        toggleSwitch(
          switchHit.dataset.switchToggle
        );

        return;
      }


      // -----------------------------------------------------
      // TERMINAL CLICK
      // -----------------------------------------------------

      const terminal =
        event.target.closest(
          ".cb-terminal"
        );


      if (terminal) {

        event.preventDefault();

        connectSelectedWireToTerminal(
          terminal.dataset.terminal
        );

        return;
      }


      // -----------------------------------------------------
      // WIRE END
      // -----------------------------------------------------

      const wireEnd =
        event.target.closest(
          ".cb-wire-end"
        );


      if (wireEnd) {

        const wire =
          getWire(
            wireEnd.dataset.wire
          );


        if (!wire) return;


        const endName =
          wireEnd.dataset.end;


        const current =
          wireEndpointPosition(
            wire,
            endName
          );


        /*
          Detach it first,
          but preserve current visual position.
        */

        wire[endName].terminal =
          null;

        wire[endName].x =
          current.x;

        wire[endName].y =
          current.y;


        state.selected = {
          kind: "wire",
          id: wire.id
        };


        state.interaction = {
          type: "wire-end",
          id: wire.id,
          end: endName
        };


        state.snapCandidate =
          null;

        state.tested =
          false;


        board.setPointerCapture?.(
          event.pointerId
        );


        event.preventDefault();

        render();

        return;
      }


      // -----------------------------------------------------
      // WIRE BODY
      // -----------------------------------------------------

      const wireBody =
        event.target.closest(
          ".cb-wire-hit"
        );


      if (wireBody) {

        const wire =
          getWire(
            wireBody.dataset.wireBody
          );


        if (!wire) return;


        state.selected = {
          kind: "wire",
          id: wire.id
        };


        /*
          Only move whole wire if both ends are free.
        */

        if (
          wire.a.terminal ||
          wire.b.terminal
        ) {

          setStatus(
            "Disconnect both ends before moving the entire wire."
          );

          render();

          return;
        }


        state.interaction = {
          type: "wire-body",

          id:
            wire.id,

          startX:
            point.x,

          startY:
            point.y,

          aStart: {
            x: wire.a.x,
            y: wire.a.y
          },

          bStart: {
            x: wire.b.x,
            y: wire.b.y
          }
        };


        board.setPointerCapture?.(
          event.pointerId
        );


        event.preventDefault();

        render();

        return;
      }


      // -----------------------------------------------------
      // COMPONENT
      // -----------------------------------------------------

      const componentNode =
        event.target.closest(
          ".cb-component"
        );


      if (componentNode) {

        const component =
          getComponent(
            componentNode.dataset.id
          );


        if (!component) return;


        state.selected = {
          kind: "component",
          id: component.id
        };


        state.interaction = {
          type: "component",

          id:
            component.id,

          offsetX:
            point.x -
            component.x,

          offsetY:
            point.y -
            component.y
        };


        board.setPointerCapture?.(
          event.pointerId
        );


        event.preventDefault();

        render();

        return;
      }


      state.selected =
        null;

      render();
    }
  );


  board.addEventListener(
    "pointermove",
    function(event) {

      if (!state.interaction) {
        return;
      }


      const point =
        svgPoint(
          event
        );


      // -----------------------------------------------------
      // COMPONENT MOVE
      // -----------------------------------------------------

      if (
        state.interaction.type ===
        "component"
      ) {

        const component =
          getComponent(
            state.interaction.id
          );


        if (!component) return;


        component.x =
          Math.max(
            90,

            Math.min(
              910,

              point.x -
              state.interaction.offsetX
            )
          );


        component.y =
          Math.max(
            90,

            Math.min(
              560,

              point.y -
              state.interaction.offsetY
            )
          );
      }


      // -----------------------------------------------------
      // WIRE END MOVE
      // -----------------------------------------------------

      if (
        state.interaction.type ===
        "wire-end"
      ) {

        const wire =
          getWire(
            state.interaction.id
          );


        if (!wire) return;


        const endpoint =
          wire[
            state.interaction.end
          ];


        endpoint.x =
          point.x;

        endpoint.y =
          point.y;


        state.snapCandidate =
          nearestTerminal(
            point,
            MAGNET_RADIUS
          );
      }


      // -----------------------------------------------------
      // WHOLE WIRE MOVE
      // -----------------------------------------------------

      if (
        state.interaction.type ===
        "wire-body"
      ) {

        const wire =
          getWire(
            state.interaction.id
          );


        if (!wire) return;


        const dx =
          point.x -
          state.interaction.startX;


        const dy =
          point.y -
          state.interaction.startY;


        wire.a.x =
          state.interaction.aStart.x +
          dx;


        wire.a.y =
          state.interaction.aStart.y +
          dy;


        wire.b.x =
          state.interaction.bStart.x +
          dx;


        wire.b.y =
          state.interaction.bStart.y +
          dy;
      }


      state.tested =
        false;


      render();
    }
  );


  function finishPointer(
    event
  ) {

    if (!state.interaction) {
      return;
    }


    let snappedTerminal =
      null;


    if (
      state.interaction.type ===
      "wire-end"
    ) {

      const wire =
        getWire(
          state.interaction.id
        );


      if (wire) {

        const endpoint =
          wire[
            state.interaction.end
          ];


        const candidate =
          state.snapCandidate ||
          nearestTerminal(
            {
              x: endpoint.x,
              y: endpoint.y
            },

            MAGNET_RADIUS
          );


        if (candidate) {

          const position =
            terminalPosition(
              candidate
            );


          endpoint.terminal =
            candidate;


          if (position) {

            endpoint.x =
              position.x;

            endpoint.y =
              position.y;
          }


          snappedTerminal =
            candidate;
        }
      }
    }


    state.interaction =
      null;

    state.snapCandidate =
      null;

    state.tested =
      false;


    try {

      board.releasePointerCapture?.(
        event.pointerId
      );

    }

    catch (_) {}


    render();


    if (snappedTerminal) {

      setStatus(
        "✓ SNAP! Wire connected securely to the terminal.",
        "success"
      );


      showSnapFeedback(
        snappedTerminal
      );
    }
  }


  board.addEventListener(
    "pointerup",
    finishPointer
  );


  board.addEventListener(
    "pointercancel",
    finishPointer
  );


  // =========================================================
  // PARTS TRAY
  // =========================================================

  root.querySelectorAll(
    ".cb-part"
  )
  .forEach(
    button => {

      const type =
        button.dataset.component;


      button.addEventListener(
        "click",
        function() {

          if (
            type ===
            "wire"
          ) {

            addWire();
          }

          else {

            addComponent(
              type
            );
          }
        }
      );


      button.addEventListener(
        "dragstart",
        function(event) {

          event.dataTransfer.setData(
            "text/plain",
            type
          );


          event.dataTransfer.effectAllowed =
            "copy";
        }
      );
    }
  );


  board.addEventListener(
    "dragover",
    function(event) {

      event.preventDefault();

      event.dataTransfer.dropEffect =
        "copy";
    }
  );


  board.addEventListener(
    "drop",
    function(event) {

      event.preventDefault();


      const type =
        event.dataTransfer.getData(
          "text/plain"
        );


      if (!type) return;


      const point =
        svgPoint(
          event
        );


      if (
        type ===
        "wire"
      ) {

        addWire(
          point.x,
          point.y
        );
      }


      else {

        addComponent(
          type,

          Math.max(
            90,
            Math.min(
              910,
              point.x
            )
          ),

          Math.max(
            90,
            Math.min(
              560,
              point.y
            )
          )
        );
      }
    }
  );


  // =========================================================
  // TOOLBAR
  // =========================================================

  testButton.onclick =
    function(event) {

      event.preventDefault();

      testCircuit();
    };


  rotateButton.onclick =
    function(event) {

      event.preventDefault();

      rotateSelected();
    };


  toggleSwitchButton.onclick =
    function(event) {

      event.preventDefault();


      if (
        !state.selected ||
        state.selected.kind !==
          "component"
      ) {

        return;
      }


      toggleSwitch(
        state.selected.id
      );
    };


  deleteButton.onclick =
    function(event) {

      event.preventDefault();

      deleteSelected();
    };


  resetButton.onclick =
    function(event) {

      event.preventDefault();

      resetBoard();
    };


  // =========================================================
  // KEYBOARD
  // =========================================================

  root.addEventListener(
    "keydown",
    function(event) {

      const tag =
        event.target.tagName
          .toLowerCase();


      if (
        tag === "input" ||
        tag === "textarea"
      ) {

        return;
      }


      if (
        event.key ===
          "Delete" ||
        event.key ===
          "Backspace"
      ) {

        if (
          state.selected
        ) {

          event.preventDefault();

          deleteSelected();
        }
      }


      if (
        event.key.toLowerCase() ===
        "r"
      ) {

        event.preventDefault();

        rotateSelected();
      }
    }
  );


  // =========================================================
  // INITIALIZE
  // =========================================================

  render();

})();
