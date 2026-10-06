(function () {
  "use strict";


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


  if (
    params.get("mission") !==
    "day58"
  ) {
    return;
  }


  function start() {

    setTimeout(
      applyMission,
      650
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


  function applyMission() {

    const headings =
      Array.from(
        document.querySelectorAll(
          "h1,h2,h3"
        )
      );


    const heading =
      headings.find(
        function (item) {

          const text =
            (
              item.textContent ||
              ""
            )
            .toLowerCase();


          return (
            text.includes(
              "can you make a bulb light"
            )
            ||
            text.includes(
              "can you power three different loads"
            )
          );
        }
      );


    if (!heading) {

      console.log(
        "Day 58 Circuit Builder mission heading not found."
      );

      return;
    }


    heading.textContent =
      "Can you diagnose and repair the circuit?";


    let missionCard =
      heading.parentElement;


    while (
      missionCard &&
      missionCard !== document.body
    ) {

      const text =
        (
          missionCard.innerText ||
          ""
        )
        .toUpperCase();


      if (
        text.includes(
          "ENGINE TEST MISSION"
        )
      ) {
        break;
      }


      missionCard =
        missionCard.parentElement;
    }


    if (
      !missionCard ||
      missionCard === document.body
    ) {
      return;
    }


    const paragraphs =
      Array.from(
        missionCard.querySelectorAll(
          "p"
        )
      );


    if (paragraphs.length) {

      paragraphs[0].textContent =
        "Build a working battery-switch-bulb circuit. Then create three faults, "
        +
        "diagnose each problem, repair it, and test again.";
    }


    if (
      !document.getElementById(
        "day58CircuitBuilderMission"
      )
    ) {

      const panel =
        document.createElement(
          "div"
        );


      panel.id =
        "day58CircuitBuilderMission";


      panel.innerHTML = `

        <strong>
          🕵️ Day 58 Circuit Detective
        </strong>

        <div class="d58cb-first">
          FIRST: Build a functioning circuit with
          1 battery + 1 switch + 1 bulb + 3 wires.
        </div>


        <div class="d58cb-fault">

          <b>
            🔘 Fault 1 — Open Switch
          </b>

          Open the switch.
          Test the circuit.
          Identify the problem.
          Close the switch and test again.

        </div>


        <div class="d58cb-fault">

          <b>
            〰️ Fault 2 — Disconnected Wire
          </b>

          Disconnect one wire.
          Test the circuit.
          Trace the gap.
          Reconnect the wire and test again.

        </div>


        <div class="d58cb-fault">

          <b>
            🔋 Fault 3 — Broken Return Path
          </b>

          Make a connection that does not create
          a path through both battery terminals.

          Trace the complete system and repair it.

        </div>


        <div class="d58cb-rule">

          ⭐ Detective Rule:
          Change ONE thing at a time,
          then press Test Circuit.

        </div>

      `;


      missionCard.appendChild(
        panel
      );
    }


    if (
      !document.getElementById(
        "day58CircuitBuilderStyle"
      )
    ) {

      const style =
        document.createElement(
          "style"
        );


      style.id =
        "day58CircuitBuilderStyle";


      style.textContent = `

        #day58CircuitBuilderMission {
          margin-top: 12px;
          padding: 12px;
          border: 2px solid #111;
          border-radius: 10px;
          background: #eef7ff;
        }

        #day58CircuitBuilderMission > strong {
          display: block;
          margin-bottom: 8px;
          font-size: 1.05rem;
        }

        #day58CircuitBuilderMission .d58cb-first {
          margin: 7px 0;
          padding: 8px;
          border: 2px solid #111;
          border-radius: 7px;
          background: #dcf6df;
          font-weight: 900;
        }

        #day58CircuitBuilderMission .d58cb-fault {
          margin: 7px 0;
          padding: 8px;
          border: 1px solid #888;
          border-radius: 7px;
          background: #fff;
        }

        #day58CircuitBuilderMission .d58cb-fault b {
          display: block;
          margin-bottom: 3px;
        }

        #day58CircuitBuilderMission .d58cb-rule {
          margin-top: 9px;
          padding: 8px;
          border: 2px solid #111;
          border-radius: 7px;
          background: #fff3ad;
          font-weight: 900;
        }

      `;


      document.head.appendChild(
        style
      );
    }
  }

})();
