(function () {
  const root = document.querySelector("#scienceStudioCircuitBuilder");
  if (!root || root.dataset.initialized === "true") return;

  root.dataset.initialized = "true";

  const board = root.querySelector("#cbBoard");
  const componentLayer = root.querySelector("#cbComponentLayer");
  const wireLayer = root.querySelector("#cbWireLayer");
  const emptyMessage = root.querySelector("#cbEmptyMessage");

  const testButton = root.querySelector("#cbTestCircuit");
  const toggleSwitchButton = root.querySelector("#cbToggleSwitch");
  const deleteButton = root.querySelector("#cbDeleteSelected");
  const resetButton = root.querySelector("#cbResetBoard");

  const statusElement = root.querySelector("#cbCircuitStatus");
  const countElement = root.querySelector("#cbObjectCount");

  const inspectorEmpty = root.querySelector("#cbInspectorEmpty");
  const inspectorContent = root.querySelector("#cbInspectorContent");
  const inspectorTitle = root.querySelector("#cbInspectorTitle");
  const inspectorDescription = root.querySelector("#cbInspectorDescription");
  const inspectorTerminals = root.querySelector("#cbInspectorTerminals");

  const NS = "http://www.w3.org/2000/svg";

  let nextId = 1;

  const state = {
    components: [],
    wires: [],
    selected: null,
    interaction: null,
    tested: false
  };

  const componentDefinitions = {
    battery: {
      label: "Battery",
      description: "Power source with a positive (+) terminal and negative (−) terminal.",
      terminals: [
        { id: "positive", x: 0, y: -58, label: "+" },
        { id: "negative", x: 0, y: 58, label: "−" }
      ]
    },

    bulb: {
      label: "Bulb",
      description: "A load that transforms electrical energy into light and thermal energy.",
      terminals: [
        { id: "a", x: -48, y: 32, label: "Terminal A" },
        { id: "b", x: 48, y: 32, label: "Terminal B" }
      ]
    },

    switch: {
      label: "Switch",
      description: "Controls whether the conducting path is open or closed.",
      terminals: [
        { id: "a", x: -55, y: 12, label: "Terminal A" },
        { id: "b", x: 55, y: 12, label: "Terminal B" }
      ]
    },

    motor: {
      label: "Motor",
      description: "A load that transforms electrical energy into motion.",
      terminals: [
        { id: "a", x: -52, y: 36, label: "Terminal A" },
        { id: "b", x: 52, y: 36, label: "Terminal B" }
      ]
    },

    speaker: {
      label: "Speaker",
      description: "A load that transforms electrical energy into sound.",
      terminals: [
        { id: "a", x: -52, y: 34, label: "Terminal A" },
        { id: "b", x: 52, y: 34, label: "Terminal B" }
      ]
    }
  };

  function svgPoint(event) {
    const pt = board.createSVGPoint();
    pt.x = event.clientX;
    pt.y = event.clientY;

    const matrix = board.getScreenCTM();
    if (!matrix) return { x: 500, y: 325 };

    const transformed = pt.matrixTransform(matrix.inverse());

    return {
      x: Math.max(20, Math.min(980, transformed.x)),
      y: Math.max(20, Math.min(630, transformed.y))
    };
  }

  function uid(prefix) {
    return prefix + "-" + nextId++;
  }

  function addComponent(type, x = 500, y = 325) {
    if (!componentDefinitions[type]) return;

    const component = {
      id: uid(type),
      type,
      x,
      y,
      closed: type === "switch" ? false : undefined
    };

    state.components.push(component);
    state.tested = false;

    selectObject("component", component.id);
    render();
  }

  function addWire(x = 500, y = 325) {
    const wire = {
      id: uid("wire"),
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

    state.wires.push(wire);
    state.tested = false;

    selectObject("wire", wire.id);
    render();
  }

  function getComponent(id) {
    return state.components.find(c => c.id === id);
  }

  function getWire(id) {
    return state.wires.find(w => w.id === id);
  }

  function terminalKey(componentId, terminalId) {
    return componentId + ":" + terminalId;
  }

  function terminalPosition(key) {
    const parts = key.split(":");
    const component = getComponent(parts[0]);

    if (!component) return null;

    const definition = componentDefinitions[component.type];

    const terminal = definition.terminals.find(t => t.id === parts[1]);

    if (!terminal) return null;

    return {
      x: component.x + terminal.x,
      y: component.y + terminal.y
    };
  }

  function endpointPosition(endpoint) {
    if (endpoint.terminal) {
      const snapped = terminalPosition(endpoint.terminal);

      if (snapped) {
        return snapped;
      }

      endpoint.terminal = null;
    }

    return {
      x: endpoint.x,
      y: endpoint.y
    };
  }

  function terminalConnections(key) {
    let count = 0;

    state.wires.forEach(wire => {
      if (wire.a.terminal === key) count += 1;
      if (wire.b.terminal === key) count += 1;
    });

    return count;
  }

  function nearestTerminal(point, maximumDistance = 35) {
    let best = null;
    let bestDistance = maximumDistance;

    state.components.forEach(component => {
      const definition = componentDefinitions[component.type];

      definition.terminals.forEach(terminal => {
        const key = terminalKey(component.id, terminal.id);

        const pos = terminalPosition(key);

        const distance = Math.hypot(
          pos.x - point.x,
          pos.y - point.y
        );

        if (distance < bestDistance) {
          bestDistance = distance;
          best = key;
        }
      });
    });

    return best;
  }

  function selectObject(kind, id) {
    state.selected = { kind, id };
    updateToolbar();
    updateInspector();
  }

  function clearSelection() {
    state.selected = null;
    updateToolbar();
    updateInspector();
  }

  function updateToolbar() {
    const selected = state.selected;

    deleteButton.disabled = !selected;

    if (
      selected &&
      selected.kind === "component"
    ) {
      const component = getComponent(selected.id);

      toggleSwitchButton.disabled =
        !component || component.type !== "switch";
    } else {
      toggleSwitchButton.disabled = true;
    }
  }

  function updateInspector() {
    if (!state.selected) {
      inspectorEmpty.hidden = false;
      inspectorContent.hidden = true;
      return;
    }

    inspectorEmpty.hidden = true;
    inspectorContent.hidden = false;

    if (state.selected.kind === "wire") {
      const wire = getWire(state.selected.id);

      if (!wire) {
        clearSelection();
        return;
      }

      inspectorTitle.textContent = "Wire";

      inspectorDescription.textContent =
        "Drag either round endpoint onto a component terminal. Connected endpoints turn green.";

      inspectorTerminals.innerHTML = `
        <div>
          End A:
          <strong>${wire.a.terminal ? "Connected" : "Not connected"}</strong>
        </div>
        <div>
          End B:
          <strong>${wire.b.terminal ? "Connected" : "Not connected"}</strong>
        </div>
      `;

      return;
    }

    const component = getComponent(state.selected.id);

    if (!component) {
      clearSelection();
      return;
    }

    const definition = componentDefinitions[component.type];

    inspectorTitle.textContent = definition.label;
    inspectorDescription.textContent = definition.description;

    inspectorTerminals.innerHTML = definition.terminals.map(terminal => {
      const key = terminalKey(component.id, terminal.id);
      const count = terminalConnections(key);

      return `
        <div>
          ${terminal.label}:
          <strong>${count ? count + " wire connection" + (count === 1 ? "" : "s") : "not connected"}</strong>
        </div>
      `;
    }).join("");

    if (component.type === "switch") {
      inspectorTerminals.innerHTML += `
        <div>
          Switch state:
          <strong>${component.closed ? "CLOSED" : "OPEN"}</strong>
        </div>
      `;
    }
  }

  function setStatus(message, type = "") {
    statusElement.textContent = message;
    statusElement.classList.remove("success", "error");

    if (type) {
      statusElement.classList.add(type);
    }
  }

  function setSvgAttributes(node, attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      node.setAttribute(key, value);
    });
  }

  function createSvg(tag, attributes = {}) {
    const node = document.createElementNS(NS, tag);
    setSvgAttributes(node, attributes);
    return node;
  }

  function textNode(x, y, text, options = {}) {
    const node = createSvg("text", {
      x,
      y,
      "text-anchor": options.anchor || "middle",
      "font-size": options.size || 16,
      "font-weight": options.weight || 800,
      fill: options.fill || "#111"
    });

    node.textContent = text;

    return node;
  }

  function renderBattery(group, component) {
    group.appendChild(createSvg("rect", {
      x: -34,
      y: -50,
      width: 68,
      height: 100,
      rx: 12,
      fill: "#ffc400",
      stroke: "#111",
      "stroke-width": 4
    }));

    group.appendChild(createSvg("rect", {
      x: -14,
      y: -63,
      width: 28,
      height: 13,
      rx: 3,
      fill: "#333",
      stroke: "#111",
      "stroke-width": 2
    }));

    group.appendChild(createSvg("rect", {
      x: -14,
      y: 50,
      width: 28,
      height: 13,
      rx: 3,
      fill: "#333",
      stroke: "#111",
      "stroke-width": 2
    }));

    group.appendChild(textNode(
      0,
      -18,
      "BATTERY",
      { size: 13 }
    ));

    group.appendChild(textNode(
      0,
      10,
      "POWER",
      { size: 12 }
    ));

    group.appendChild(textNode(
      27,
      -55,
      "+",
      {
        size: 26,
        fill: "#087a35",
        weight: 900
      }
    ));

    group.appendChild(textNode(
      27,
      64,
      "−",
      {
        size: 26,
        fill: "#b00020",
        weight: 900
      }
    ));
  }

  function renderBulb(group) {
    group.appendChild(createSvg("circle", {
      cx: 0,
      cy: -8,
      r: 38,
      class: "cb-bulb-glass"
    }));

    group.appendChild(createSvg("path", {
      d: "M -14 -8 Q 0 -32 14 -8 Q 0 16 -14 -8",
      fill: "none",
      stroke: "#555",
      "stroke-width": 4
    }));

    group.appendChild(createSvg("rect", {
      x: -25,
      y: 27,
      width: 50,
      height: 25,
      rx: 5,
      fill: "#f08a24",
      stroke: "#111",
      "stroke-width": 4
    }));

    group.appendChild(textNode(
      0,
      76,
      "BULB",
      { size: 15 }
    ));
  }

  function renderSwitch(group, component) {
    group.appendChild(createSvg("rect", {
      x: -65,
      y: -30,
      width: 130,
      height: 75,
      rx: 14,
      fill: "#fff",
      stroke: "#111",
      "stroke-width": 4
    }));

    group.appendChild(createSvg("circle", {
      cx: -35,
      cy: 12,
      r: 7,
      fill: "#111"
    }));

    group.appendChild(createSvg("circle", {
      cx: 35,
      cy: 12,
      r: 7,
      fill: "#111"
    }));

    group.appendChild(createSvg("line", {
      x1: -35,
      y1: 12,
      x2: component.closed ? 35 : 28,
      y2: component.closed ? 12 : -18,
      stroke: "#111",
      "stroke-width": 7,
      "stroke-linecap": "round"
    }));

    group.appendChild(textNode(
      0,
      70,
      component.closed ? "SWITCH CLOSED" : "SWITCH OPEN",
      {
        size: 14,
        fill: component.closed ? "#087a35" : "#b00020"
      }
    ));
  }

  function renderMotor(group) {
    group.appendChild(createSvg("rect", {
      x: -55,
      y: -42,
      width: 110,
      height: 82,
      rx: 18,
      fill: "#cfeaff",
      stroke: "#111",
      "stroke-width": 4
    }));

    group.appendChild(createSvg("circle", {
      cx: 0,
      cy: -2,
      r: 28,
      fill: "white",
      stroke: "#111",
      "stroke-width": 3
    }));

    const rotor = createSvg("g", {
      class: "cb-motor-rotor"
    });

    rotor.appendChild(createSvg("line", {
      x1: -20,
      y1: -2,
      x2: 20,
      y2: -2,
      stroke: "#4d8eaa",
      "stroke-width": 6,
      "stroke-linecap": "round"
    }));

    rotor.appendChild(createSvg("line", {
      x1: 0,
      y1: -22,
      x2: 0,
      y2: 18,
      stroke: "#4d8eaa",
      "stroke-width": 6,
      "stroke-linecap": "round"
    }));

    group.appendChild(rotor);

    group.appendChild(textNode(
      0,
      70,
      "MOTOR",
      { size: 15 }
    ));
  }

  function renderSpeaker(group) {
    group.appendChild(createSvg("rect", {
      x: -55,
      y: -42,
      width: 110,
      height: 80,
      rx: 16,
      fill: "#e1ddff",
      stroke: "#111",
      "stroke-width": 4
    }));

    group.appendChild(createSvg("circle", {
      cx: -5,
      cy: -2,
      r: 26,
      fill: "#444",
      stroke: "#111",
      "stroke-width": 3
    }));

    group.appendChild(createSvg("path", {
      d: "M 26 -25 C 55 -15 55 10 26 20",
      fill: "none",
      stroke: "#a23ab8",
      "stroke-width": 6,
      class: "cb-speaker-wave"
    }));

    group.appendChild(createSvg("path", {
      d: "M 36 -34 C 78 -18 78 15 36 30",
      fill: "none",
      stroke: "#a23ab8",
      "stroke-width": 6,
      class: "cb-speaker-wave"
    }));

    group.appendChild(textNode(
      0,
      70,
      "SPEAKER",
      { size: 15 }
    ));
  }

  function renderComponent(component, poweredSet) {
    const group = createSvg("g", {
      class:
        "cb-component" +
        (
          state.selected &&
          state.selected.kind === "component" &&
          state.selected.id === component.id
            ? " selected"
            : ""
        ) +
        (
          poweredSet.has(component.id)
            ? " powered"
            : ""
        ),
      "data-id": component.id,
      transform: `translate(${component.x} ${component.y})`
    });

    group.appendChild(createSvg("rect", {
      x: -78,
      y: -82,
      width: 156,
      height: 170,
      rx: 18,
      class: "cb-select-ring"
    }));

    if (component.type === "battery") {
      renderBattery(group, component);
    }

    if (component.type === "bulb") {
      renderBulb(group);
    }

    if (component.type === "switch") {
      renderSwitch(group, component);
    }

    if (component.type === "motor") {
      renderMotor(group);
    }

    if (component.type === "speaker") {
      renderSpeaker(group);
    }

    const definition = componentDefinitions[component.type];

    definition.terminals.forEach(terminal => {
      const key = terminalKey(component.id, terminal.id);

      const circle = createSvg("circle", {
        cx: terminal.x,
        cy: terminal.y,
        r: 10,
        class:
          "cb-terminal" +
          (
            terminalConnections(key)
              ? " connected"
              : ""
          ),
        "data-terminal": key
      });

      group.appendChild(circle);
    });

    return group;
  }

  function renderWire(wire) {
    const a = endpointPosition(wire.a);
    const b = endpointPosition(wire.b);

    const group = createSvg("g", {
      class:
        "cb-wire" +
        (
          state.selected &&
          state.selected.kind === "wire" &&
          state.selected.id === wire.id
            ? " selected"
            : ""
        ),
      "data-id": wire.id
    });

    const pathString =
      `M ${a.x} ${a.y} ` +
      `C ${(a.x + b.x) / 2} ${a.y}, ` +
      `${(a.x + b.x) / 2} ${b.y}, ` +
      `${b.x} ${b.y}`;

    group.appendChild(createSvg("path", {
      d: pathString,
      class: "cb-wire-visible"
    }));

    group.appendChild(createSvg("path", {
      d: pathString,
      class: "cb-wire-hit",
      "data-wire-body": wire.id
    }));

    group.appendChild(createSvg("circle", {
      cx: a.x,
      cy: a.y,
      r: 11,
      class:
        "cb-wire-end" +
        (wire.a.terminal ? " connected" : ""),
      "data-wire": wire.id,
      "data-end": "a"
    }));

    group.appendChild(createSvg("circle", {
      cx: b.x,
      cy: b.y,
      r: 11,
      class:
        "cb-wire-end" +
        (wire.b.terminal ? " connected" : ""),
      "data-wire": wire.id,
      "data-end": "b"
    }));

    return group;
  }

  function buildGraph(excludedInternalComponentId = null) {
    const graph = new Map();

    function ensure(node) {
      if (!graph.has(node)) {
        graph.set(node, new Set());
      }
    }

    function connect(a, b) {
      ensure(a);
      ensure(b);

      graph.get(a).add(b);
      graph.get(b).add(a);
    }

    state.components.forEach(component => {
      const definition = componentDefinitions[component.type];

      definition.terminals.forEach(terminal => {
        ensure(terminalKey(component.id, terminal.id));
      });

      if (
        component.id === excludedInternalComponentId ||
        component.type === "battery"
      ) {
        return;
      }

      if (
        component.type === "switch" &&
        !component.closed
      ) {
        return;
      }

      const terminals = definition.terminals;

      if (terminals.length >= 2) {
        connect(
          terminalKey(component.id, terminals[0].id),
          terminalKey(component.id, terminals[1].id)
        );
      }
    });

    state.wires.forEach(wire => {
      if (wire.a.terminal && wire.b.terminal) {
        connect(
          wire.a.terminal,
          wire.b.terminal
        );
      }
    });

    return graph;
  }

  function reachable(graph, start, target) {
    if (!start || !target) return false;
    if (start === target) return true;

    const queue = [start];
    const visited = new Set([start]);

    while (queue.length) {
      const current = queue.shift();

      for (const next of graph.get(current) || []) {
        if (next === target) {
          return true;
        }

        if (!visited.has(next)) {
          visited.add(next);
          queue.push(next);
        }
      }
    }

    return false;
  }

  function evaluateCircuit() {
    const batteries =
      state.components.filter(c => c.type === "battery");

    const loads =
      state.components.filter(c =>
        ["bulb", "motor", "speaker"].includes(c.type)
      );

    const fullGraph = buildGraph();

    let completeCircuit = false;

    for (const battery of batteries) {
      const positive =
        terminalKey(battery.id, "positive");

      const negative =
        terminalKey(battery.id, "negative");

      if (reachable(fullGraph, positive, negative)) {
        completeCircuit = true;
        break;
      }
    }

    const poweredLoads = new Set();

    loads.forEach(load => {
      const definition =
        componentDefinitions[load.type];

      const loadA =
        terminalKey(load.id, definition.terminals[0].id);

      const loadB =
        terminalKey(load.id, definition.terminals[1].id);

      const graphWithoutLoad =
        buildGraph(load.id);

      batteries.forEach(battery => {
        const positive =
          terminalKey(battery.id, "positive");

        const negative =
          terminalKey(battery.id, "negative");

        const directionOne =
          reachable(graphWithoutLoad, positive, loadA) &&
          reachable(graphWithoutLoad, loadB, negative);

        const directionTwo =
          reachable(graphWithoutLoad, positive, loadB) &&
          reachable(graphWithoutLoad, loadA, negative);

        if (directionOne || directionTwo) {
          poweredLoads.add(load.id);
        }
      });
    });

    const batteryExists = batteries.length > 0;

    const positiveConnected = batteries.some(battery =>
      terminalConnections(
        terminalKey(battery.id, "positive")
      ) > 0
    );

    const negativeConnected = batteries.some(battery =>
      terminalConnections(
        terminalKey(battery.id, "negative")
      ) > 0
    );

    return {
      completeCircuit,
      poweredLoads,
      batteryExists,
      positiveConnected,
      negativeConnected,
      loadExists: loads.length > 0
    };
  }

  function updateMissionChecks(result) {
    const checks = [
      ["#cbCheckBattery", result.batteryExists, "Battery on board"],
      ["#cbCheckPositive", result.positiveConnected, "Wire connected to +"],
      ["#cbCheckNegative", result.negativeConnected, "Wire connected to −"],
      ["#cbCheckLoad", result.loadExists, "Load in the circuit"],
      ["#cbCheckComplete", result.completeCircuit, "Complete conducting path"]
    ];

    checks.forEach(([selector, passed, text]) => {
      const element = root.querySelector(selector);

      element.textContent =
        (passed ? "✓ " : "○ ") + text;

      element.style.color =
        passed ? "#087a35" : "";
    });
  }

  function testCircuit() {
    state.tested = true;

    const result = evaluateCircuit();

    updateMissionChecks(result);

    if (!result.batteryExists) {
      setStatus(
        "Add a battery first. A circuit needs a power source.",
        "error"
      );
    }

    else if (!result.positiveConnected) {
      setStatus(
        "Connect a wire to the battery's positive (+) terminal.",
        "error"
      );
    }

    else if (!result.negativeConnected) {
      setStatus(
        "Your circuit needs a return wire connected to the battery's negative (−) terminal.",
        "error"
      );
    }

    else if (!result.loadExists) {
      setStatus(
        "Add a load such as a bulb, motor, or speaker.",
        "error"
      );
    }

    else if (!result.completeCircuit) {
      setStatus(
        "The path is incomplete. Check for loose wire ends and open switches.",
        "error"
      );
    }

    else if (!result.poweredLoads.size) {
      setStatus(
        "A complete path exists, but no load is correctly placed in the powered path.",
        "error"
      );
    }

    else {
      const names = [];

      result.poweredLoads.forEach(id => {
        const component = getComponent(id);

        if (component) {
          names.push(
            componentDefinitions[component.type].label
          );
        }
      });

      setStatus(
        "Circuit complete! Powered load" +
        (names.length === 1 ? ": " : "s: ") +
        names.join(", ") +
        ".",
        "success"
      );
    }

    render(result.poweredLoads);
  }

  function render(poweredLoadsOverride = null) {
    const result =
      poweredLoadsOverride === null
        ? (
            state.tested
              ? evaluateCircuit()
              : { poweredLoads: new Set() }
          )
        : { poweredLoads: poweredLoadsOverride };

    wireLayer.innerHTML = "";
    componentLayer.innerHTML = "";

    state.wires.forEach(wire => {
      wireLayer.appendChild(
        renderWire(wire)
      );
    });

    state.components.forEach(component => {
      componentLayer.appendChild(
        renderComponent(
          component,
          result.poweredLoads
        )
      );
    });

    emptyMessage.style.display =
      (
        state.components.length === 0 &&
        state.wires.length === 0
      )
        ? ""
        : "none";

    countElement.textContent =
      state.components.length +
      " part" +
      (state.components.length === 1 ? "" : "s") +
      " • " +
      state.wires.length +
      " wire" +
      (state.wires.length === 1 ? "" : "s");

    updateToolbar();
    updateInspector();

    if (!state.tested) {
      updateMissionChecks(
        evaluateCircuit()
      );
    }
  }

  function deleteSelected() {
    if (!state.selected) return;

    if (state.selected.kind === "wire") {
      state.wires =
        state.wires.filter(
          wire => wire.id !== state.selected.id
        );
    }

    else {
      const componentId =
        state.selected.id;

      state.components =
        state.components.filter(
          component => component.id !== componentId
        );

      state.wires.forEach(wire => {
        if (
          wire.a.terminal &&
          wire.a.terminal.startsWith(componentId + ":")
        ) {
          const old = endpointPosition(wire.a);
          wire.a.terminal = null;
          wire.a.x = old.x;
          wire.a.y = old.y;
        }

        if (
          wire.b.terminal &&
          wire.b.terminal.startsWith(componentId + ":")
        ) {
          const old = endpointPosition(wire.b);
          wire.b.terminal = null;
          wire.b.x = old.x;
          wire.b.y = old.y;
        }
      });
    }

    state.selected = null;
    state.tested = false;

    setStatus(
      "Item deleted. Test the circuit again when ready."
    );

    render();
  }

  function resetBoard() {
    if (
      state.components.length ||
      state.wires.length
    ) {
      const okay =
        window.confirm(
          "Clear every component and wire from the Circuit Builder?"
        );

      if (!okay) return;
    }

    state.components = [];
    state.wires = [];
    state.selected = null;
    state.interaction = null;
    state.tested = false;

    setStatus(
      "Board reset. Add parts to begin."
    );

    render();
  }

  function toggleSelectedSwitch() {
    if (
      !state.selected ||
      state.selected.kind !== "component"
    ) {
      return;
    }

    const component =
      getComponent(state.selected.id);

    if (
      !component ||
      component.type !== "switch"
    ) {
      return;
    }

    component.closed =
      !component.closed;

    state.tested = false;

    setStatus(
      component.closed
        ? "Switch closed. Test the circuit."
        : "Switch opened. The path through this switch is now broken."
    );

    render();
  }

  function beginComponentDrag(componentId, point) {
    const component =
      getComponent(componentId);

    if (!component) return;

    state.interaction = {
      type: "component",
      id: componentId,
      offsetX: point.x - component.x,
      offsetY: point.y - component.y
    };

    selectObject("component", componentId);
  }

  function beginWireEndpointDrag(wireId, endName) {
    const wire = getWire(wireId);

    if (!wire) return;

    const endpoint =
      wire[endName];

    const pos =
      endpointPosition(endpoint);

    endpoint.terminal = null;
    endpoint.x = pos.x;
    endpoint.y = pos.y;

    state.interaction = {
      type: "wire-end",
      id: wireId,
      end: endName
    };

    selectObject("wire", wireId);
    state.tested = false;
  }

  function beginWireBodyDrag(wireId, point) {
    const wire = getWire(wireId);

    if (!wire) return;

    const a =
      endpointPosition(wire.a);

    const b =
      endpointPosition(wire.b);

    if (wire.a.terminal || wire.b.terminal) {
      selectObject("wire", wireId);

      setStatus(
        "Disconnect both wire ends before moving the entire wire."
      );

      return;
    }

    state.interaction = {
      type: "wire-body",
      id: wireId,
      startX: point.x,
      startY: point.y,
      aStart: { ...a },
      bStart: { ...b }
    };

    selectObject("wire", wireId);
  }

  board.addEventListener("pointerdown", event => {
    const point = svgPoint(event);

    const endpoint =
      event.target.closest(".cb-wire-end");

    if (endpoint) {
      beginWireEndpointDrag(
        endpoint.dataset.wire,
        endpoint.dataset.end
      );

      board.setPointerCapture?.(event.pointerId);
      event.preventDefault();
      return;
    }

    const wireBody =
      event.target.closest(".cb-wire-hit");

    if (wireBody) {
      beginWireBodyDrag(
        wireBody.dataset.wireBody,
        point
      );

      board.setPointerCapture?.(event.pointerId);
      event.preventDefault();
      return;
    }

    const component =
      event.target.closest(".cb-component");

    if (component) {
      beginComponentDrag(
        component.dataset.id,
        point
      );

      board.setPointerCapture?.(event.pointerId);
      event.preventDefault();
      return;
    }

    clearSelection();
    render();
  });

  board.addEventListener("pointermove", event => {
    if (!state.interaction) return;

    const point =
      svgPoint(event);

    if (state.interaction.type === "component") {
      const component =
        getComponent(state.interaction.id);

      if (!component) return;

      component.x =
        Math.max(
          90,
          Math.min(
            910,
            point.x - state.interaction.offsetX
          )
        );

      component.y =
        Math.max(
          90,
          Math.min(
            560,
            point.y - state.interaction.offsetY
          )
        );
    }

    if (state.interaction.type === "wire-end") {
      const wire =
        getWire(state.interaction.id);

      if (!wire) return;

      const endpoint =
        wire[state.interaction.end];

      endpoint.x = point.x;
      endpoint.y = point.y;
    }

    if (state.interaction.type === "wire-body") {
      const wire =
        getWire(state.interaction.id);

      if (!wire) return;

      const dx =
        point.x - state.interaction.startX;

      const dy =
        point.y - state.interaction.startY;

      wire.a.x =
        state.interaction.aStart.x + dx;

      wire.a.y =
        state.interaction.aStart.y + dy;

      wire.b.x =
        state.interaction.bStart.x + dx;

      wire.b.y =
        state.interaction.bStart.y + dy;
    }

    state.tested = false;
    render();
  });

  function finishInteraction(event) {
    if (!state.interaction) return;

    if (state.interaction.type === "wire-end") {
      const wire =
        getWire(state.interaction.id);

      if (wire) {
        const endpoint =
          wire[state.interaction.end];

        const point =
          endpointPosition(endpoint);

        const terminal =
          nearestTerminal(point, 38);

        if (terminal) {
          endpoint.terminal =
            terminal;

          const snap =
            terminalPosition(terminal);

          endpoint.x =
            snap.x;

          endpoint.y =
            snap.y;

          setStatus(
            "Wire snapped to terminal."
          );
        }
      }
    }

    state.interaction = null;
    state.tested = false;

    try {
      board.releasePointerCapture?.(
        event.pointerId
      );
    } catch (_) {}

    render();
  }

  board.addEventListener(
    "pointerup",
    finishInteraction
  );

  board.addEventListener(
    "pointercancel",
    finishInteraction
  );

  root.querySelectorAll(".cb-part").forEach(button => {
    const type =
      button.dataset.component;

    button.addEventListener("click", () => {
      if (type === "wire") {
        addWire();
      } else {
        addComponent(type);
      }
    });

    button.addEventListener("dragstart", event => {
      event.dataTransfer.setData(
        "text/plain",
        type
      );

      event.dataTransfer.effectAllowed =
        "copy";
    });
  });

  board.addEventListener("dragover", event => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  });

  board.addEventListener("drop", event => {
    event.preventDefault();

    const type =
      event.dataTransfer.getData("text/plain");

    if (!type) return;

    const point =
      svgPoint(event);

    if (type === "wire") {
      addWire(point.x, point.y);
    } else {
      addComponent(
        type,
        Math.max(90, Math.min(910, point.x)),
        Math.max(90, Math.min(560, point.y))
      );
    }
  });

  testButton.addEventListener(
    "click",
    testCircuit
  );

  toggleSwitchButton.addEventListener(
    "click",
    toggleSelectedSwitch
  );

  deleteButton.addEventListener(
    "click",
    deleteSelected
  );

  resetButton.addEventListener(
    "click",
    resetBoard
  );

  root.addEventListener("keydown", event => {
    const tag =
      event.target.tagName.toLowerCase();

    if (
      tag === "input" ||
      tag === "textarea" ||
      tag === "select"
    ) {
      return;
    }

    if (
      event.key === "Delete" ||
      event.key === "Backspace"
    ) {
      if (state.selected) {
        event.preventDefault();
        deleteSelected();
      }
    }
  });


  // Science Studio Single Rotation Controller V4

  /*
    Earlier development versions attached more than one Rotate handler.

    We clone the button here. Cloning removes every old direct click listener.
    Then our new listener stops the click before any older delegated listener
    can receive it.

    Result: ONE click = exactly 90 degrees.
  */

  const oldRotateControl =
    root.querySelector("#cbRotateSelected");

  if (oldRotateControl) {
    const cleanRotateControl =
      oldRotateControl.cloneNode(true);

    oldRotateControl.replaceWith(
      cleanRotateControl
    );

    cleanRotateControl.disabled = false;

    cleanRotateControl.addEventListener(
      "click",
      function(event) {
        event.preventDefault();

        /*
          Critical:
          prevent old delegated Rotate handlers on #scienceStudioCircuitBuilder
          from also firing.
        */
        event.stopPropagation();
        event.stopImmediatePropagation();

        if (
          !state.selected ||
          state.selected.kind !== "component"
        ) {
          setStatus(
            "Select a battery, bulb, switch, motor, or speaker first.",
            "error"
          );

          return;
        }

        const component =
          getComponent(
            state.selected.id
          );

        if (!component) {
          setStatus(
            "Click the component again, then press Rotate 90°.",
            "error"
          );

          return;
        }

        const oldAngle =
          Number(component.rotation || 0);

        const newAngle =
          (oldAngle + 90) % 360;

        component.rotation =
          newAngle;

        state.tested = false;

        /*
          Preserve selection.
        */
        state.selected = {
          kind: "component",
          id: component.id
        };

        /*
          Redraw the component AND every attached wire.
        */
        render();

        /*
          Refresh controls and Inspector after redraw.
        */
        updateToolbar();
        updateInspector();

        setStatus(
          componentDefinitions[component.type].label +
          " rotated: " +
          oldAngle +
          "° → " +
          newAngle +
          "°",
          "success"
        );

        console.log(
          "Science Studio rotation:",
          component.id,
          oldAngle,
          "->",
          newAngle
        );
      }
    );
  }

  // End Science Studio Single Rotation Controller V4


  // Science Studio Authoritative Rotating Renderer V6

  /*
    This replaces the visual component renderer used by render().

    OUTER GROUP:
      controls where the item sits on the board.

    INNER GROUP:
      physically rotates the item around its own center.

    The component body AND its electrical terminals are inside
    the rotating group, so the picture and connection points
    always rotate together.
  */

  renderComponent = function(component, poweredSet) {

    const angle =
      Number(component.rotation || 0);

    const isSelected =
      state.selected &&
      state.selected.kind === "component" &&
      state.selected.id === component.id;

    const isPowered =
      poweredSet.has(component.id);

    // --------------------------------------------------------
    // POSITION GROUP
    // --------------------------------------------------------

    const positionGroup = createSvg("g", {
      class:
        "cb-component" +
        (isSelected ? " selected" : "") +
        (isPowered ? " powered" : ""),

      "data-id": component.id,
      "data-rotation": angle,

      transform:
        "translate(" +
        component.x +
        " " +
        component.y +
        ")"
    });


    // --------------------------------------------------------
    // ROTATION GROUP
    // --------------------------------------------------------

    const rotationGroup = createSvg("g", {
      class: "cb-component-visual-rotation-v6",

      "data-angle": angle,

      transform:
        "rotate(" +
        angle +
        " 0 0)"
    });


    // --------------------------------------------------------
    // SELECTION BOX
    // --------------------------------------------------------

    rotationGroup.appendChild(
      createSvg("rect", {
        x: -78,
        y: -82,
        width: 156,
        height: 170,
        rx: 18,
        class: "cb-select-ring"
      })
    );


    // --------------------------------------------------------
    // DRAW COMPONENT
    // --------------------------------------------------------

    if (component.type === "battery") {
      renderBattery(
        rotationGroup,
        component
      );
    }

    else if (component.type === "bulb") {
      renderBulb(
        rotationGroup
      );
    }

    else if (component.type === "switch") {
      renderSwitch(
        rotationGroup,
        component
      );
    }

    else if (component.type === "motor") {
      renderMotor(
        rotationGroup
      );
    }

    else if (component.type === "speaker") {
      renderSpeaker(
        rotationGroup
      );
    }


    // --------------------------------------------------------
    // DRAW ELECTRICAL TERMINALS
    // Terminals rotate with the component.
    // --------------------------------------------------------

    const definition =
      componentDefinitions[
        component.type
      ];

    definition.terminals.forEach(
      function(terminal) {

        const key =
          terminalKey(
            component.id,
            terminal.id
          );

        const helpRing =
          createSvg("circle", {
            cx: terminal.x,
            cy: terminal.y,
            r: 22,
            class: "cb-terminal-help-ring"
          });

        rotationGroup.appendChild(
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

        const terminalCircle =
          createSvg("circle", {
            cx: terminal.x,
            cy: terminal.y,
            r: 13,

            class:
              terminalClass,

            "data-terminal":
              key
          });

        rotationGroup.appendChild(
          terminalCircle
        );
      }
    );


    // --------------------------------------------------------
    // PUT ROTATING PICTURE INSIDE POSITION GROUP
    // --------------------------------------------------------

    positionGroup.appendChild(
      rotationGroup
    );

    return positionGroup;
  };

  // End Science Studio Authoritative Rotating Renderer V6

  render();
})();
