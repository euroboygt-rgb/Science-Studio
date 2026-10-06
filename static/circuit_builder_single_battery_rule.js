(function () {
  "use strict";


  // =========================================================
  // ONLY RUN INSIDE THE CIRCUIT BUILDER
  // =========================================================

  if (
    window.location.pathname !==
    "/labs/circuit-builder"
  ) {
    return;
  }


  const params =
    new URLSearchParams(
      window.location.search
    );


  const mission =
    params.get("mission") || "";


  /*
    Classroom circuit missions use ONE power source.

    Free Build remains unrestricted.
  */

  const SINGLE_BATTERY_MISSIONS =
    new Set([
      "day55",
      "day56",
      "day57",
      "day58",
      "day59",
      "day60",
      "day61",
      "day62"
    ]);


  if (
    !SINGLE_BATTERY_MISSIONS.has(
      mission
    )
  ) {
    return;
  }


  // =========================================================
  // FIND THE BUILD BOARD SVG
  // =========================================================

  function getBoardSVG() {

    const svgs =
      Array.from(
        document.querySelectorAll(
          "svg"
        )
      );


    /*
      The Circuit Builder board contains the
      interactive terminal circles.
    */

    const terminalBoard =
      svgs.find(
        function (svg) {

          return (
            svg.querySelector(
              ".cb-terminal"
            )
          );
        }
      );


    if (terminalBoard) {
      return terminalBoard;
    }


    /*
      Fallback:
      use the largest SVG on the page.
    */

    return svgs
      .sort(
        function (a, b) {

          const areaA =
            a.getBoundingClientRect().width
            *
            a.getBoundingClientRect().height;


          const areaB =
            b.getBoundingClientRect().width
            *
            b.getBoundingClientRect().height;


          return areaB - areaA;
        }
      )[0] || null;
  }


  // =========================================================
  // COUNT BATTERIES ACTUALLY ON THE BOARD
  // =========================================================

  function batteryCount() {

    const board =
      getBoardSVG();


    if (!board) {
      return 0;
    }


    const textNodes =
      Array.from(
        board.querySelectorAll(
          "text"
        )
      );


    return textNodes.filter(
      function (node) {

        const text =
          (
            node.textContent ||
            ""
          )
          .replace(/\s+/g, " ")
          .trim()
          .toUpperCase();


        return (
          text === "BATTERY"
        );
      }
    ).length;
  }


  // =========================================================
  // FIND BATTERY CONTROL IN PARTS TRAY
  // =========================================================

  function getBatteryTrayControl() {

    /*
      Prefer normal clickable elements.
    */

    const clickable =
      Array.from(
        document.querySelectorAll(
          "button, [role='button']"
        )
      );


    let match =
      clickable.find(
        function (element) {

          const text =
            (
              element.innerText ||
              ""
            )
            .replace(/\s+/g, " ")
            .trim()
            .toLowerCase();


          return (
            text.includes("battery")
            &&
            text.includes("power source")
          );
        }
      );


    if (match) {
      return match;
    }


    /*
      Fallback for older Parts Tray markup.
    */

    const candidates =
      Array.from(
        document.querySelectorAll(
          "div"
        )
      )
      .filter(
        function (element) {

          const text =
            (
              element.innerText ||
              ""
            )
            .replace(/\s+/g, " ")
            .trim()
            .toLowerCase();


          const rect =
            element.getBoundingClientRect();


          return (
            text.includes("battery")
            &&
            text.includes("power source")
            &&
            rect.width > 60
            &&
            rect.width < 300
            &&
            rect.height > 30
            &&
            rect.height < 150
          );
        }
      );


    candidates.sort(
      function (a, b) {

        return (
          a.getBoundingClientRect().width
          *
          a.getBoundingClientRect().height
        )
        -
        (
          b.getBoundingClientRect().width
          *
          b.getBoundingClientRect().height
        );
      }
    );


    return candidates[0] || null;
  }


  // =========================================================
  // MESSAGE
  // =========================================================

  function showBatteryMessage() {

    let message =
      document.getElementById(
        "singleBatteryMissionMessage"
      );


    if (!message) {

      message =
        document.createElement(
          "div"
        );


      message.id =
        "singleBatteryMissionMessage";


      message.innerHTML = `
        🔋 <strong>One battery maximum for this mission.</strong>
        Delete the battery on the board before adding another one.
      `;


      document.body.appendChild(
        message
      );
    }


    message.classList.add(
      "show"
    );


    clearTimeout(
      window.__singleBatteryMessageTimer
    );


    window.__singleBatteryMessageTimer =
      setTimeout(
        function () {

          message.classList.remove(
            "show"
          );

        },
        2600
      );
  }


  // =========================================================
  // UPDATE BATTERY BUTTON
  // =========================================================

  function updateBatteryControl() {

    const control =
      getBatteryTrayControl();


    if (!control) {
      return;
    }


    const count =
      batteryCount();


    if (count >= 1) {

      control.classList.add(
        "cb-single-battery-locked"
      );


      control.setAttribute(
        "aria-disabled",
        "true"
      );


      control.title =
        "One battery maximum for this mission.";


      if (
        !control.querySelector(
          ".cb-battery-limit"
        )
      ) {

        const label =
          document.createElement(
            "span"
          );


        label.className =
          "cb-battery-limit";


        label.textContent =
          "1 Battery Max";


        control.appendChild(
          label
        );
      }

    } else {

      control.classList.remove(
        "cb-single-battery-locked"
      );


      control.removeAttribute(
        "aria-disabled"
      );


      control.title =
        "";


      const label =
        control.querySelector(
          ".cb-battery-limit"
        );


      if (label) {
        label.remove();
      }
    }
  }


  // =========================================================
  // BLOCK SECOND BATTERY
  // =========================================================

  function stopSecondBattery(
    event
  ) {

    const control =
      getBatteryTrayControl();


    if (
      !control ||
      !control.contains(
        event.target
      )
    ) {
      return;
    }


    if (
      batteryCount() < 1
    ) {
      return;
    }


    event.preventDefault();

    event.stopPropagation();

    if (
      event.stopImmediatePropagation
    ) {
      event.stopImmediatePropagation();
    }


    showBatteryMessage();

    updateBatteryControl();
  }


  /*
    Catch mouse, touch, tap, and drag attempts
    before the Circuit Builder handles them.
  */

  [
    "pointerdown",
    "mousedown",
    "touchstart",
    "click",
    "dragstart"
  ]
  .forEach(
    function (eventName) {

      document.addEventListener(
        eventName,
        stopSecondBattery,
        true
      );
    }
  );


  // =========================================================
  // WATCH FOR BATTERY ADD / DELETE
  // =========================================================

  function start() {

    updateBatteryControl();


    const observer =
      new MutationObserver(
        function () {

          updateBatteryControl();
        }
      );


    observer.observe(
      document.body,
      {
        childList: true,
        subtree: true,
        characterData: true
      }
    );


    /*
      The renderer sometimes redraws the SVG without
      changing enough DOM for a useful mutation event.
    */

    setInterval(
      updateBatteryControl,
      500
    );
  }


  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      start
    );

  } else {

    start();
  }


  // =========================================================
  // STYLE
  // =========================================================

  const style =
    document.createElement(
      "style"
    );


  style.textContent = `

    .cb-single-battery-locked {
      opacity: .55 !important;
      cursor: not-allowed !important;
      position: relative;
    }

    .cb-single-battery-locked::after {
      content: "✓";
      position: absolute;
      right: 7px;
      top: 6px;
      display: grid;
      place-items: center;
      width: 20px;
      height: 20px;
      border: 2px solid #111;
      border-radius: 50%;
      background: #d9f6df;
      color: #087a35;
      font-weight: 900;
    }

    .cb-battery-limit {
      display: block;
      margin-top: 3px;
      color: #8a1d1d;
      font-size: .70rem;
      font-weight: 900;
    }

    #singleBatteryMissionMessage {
      position: fixed;
      left: 50%;
      bottom: 28px;
      z-index: 999999;
      max-width: 440px;
      padding: 13px 18px;
      border: 3px solid #111;
      border-radius: 12px;
      background: #fff1a8;
      color: #111;
      box-shadow: 4px 5px 0 rgba(0,0,0,.25);
      font-size: .95rem;
      text-align: center;

      opacity: 0;
      transform: translate(-50%, 30px);
      pointer-events: none;

      transition:
        opacity .18s ease,
        transform .18s ease;
    }

    #singleBatteryMissionMessage.show {
      opacity: 1;
      transform: translate(-50%, 0);
    }

  `;


  document.head.appendChild(
    style
  );

})();
