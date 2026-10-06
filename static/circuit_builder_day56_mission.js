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
    "day56"
  ) {
    return;
  }


  function start() {

    setTimeout(
      applyDay56Mission,
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


  function applyDay56Mission() {

    const headings =
      Array.from(
        document.querySelectorAll(
          "h1,h2,h3"
        )
      );


    const missionHeading =
      headings.find(
        function (heading) {

          return (
            (
              heading.textContent ||
              ""
            )
            .toLowerCase()
            .includes(
              "can you make a bulb light"
            )
          );
        }
      );


    if (!missionHeading) {

      console.log(
        "Day 56 Circuit Builder mission heading not found."
      );

      return;
    }


    missionHeading.textContent =
      "Can you control the bulb with a switch?";


    let missionCard =
      missionHeading.parentElement;


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
        "Build a circuit using one battery, one bulb, one switch, and three wires. "
        +
        "Make the bulb light with the switch CLOSED, then OPEN the switch and test again.";
    }


    if (
      !document.getElementById(
        "day56CircuitBuilderMission"
      )
    ) {

      const instructions =
        document.createElement(
          "div"
        );


      instructions.id =
        "day56CircuitBuilderMission";


      instructions.innerHTML = `

        <strong>
          🎯 Day 56 Switch Mission
        </strong>

        <div>
          1. Build a complete circuit with the switch CLOSED.
        </div>

        <div>
          2. Test the circuit — the bulb should light.
        </div>

        <div>
          3. OPEN the switch and test again.
        </div>

        <div>
          4. CLOSE the switch again.
        </div>

        <div>
          5. Explain why the bulb changes ON → OFF → ON.
        </div>

      `;


      missionCard.appendChild(
        instructions
      );
    }


    if (
      !document.getElementById(
        "day56CircuitBuilderStyle"
      )
    ) {

      const style =
        document.createElement(
          "style"
        );


      style.id =
        "day56CircuitBuilderStyle";


      style.textContent = `

        #day56CircuitBuilderMission {
          margin-top: 12px;
          padding: 11px;
          border: 2px solid #111;
          border-radius: 10px;
          background: #eef7ff;
        }

        #day56CircuitBuilderMission strong {
          display: block;
          margin-bottom: 6px;
          font-size: 1.05rem;
        }

        #day56CircuitBuilderMission div {
          margin: 4px 0;
          font-weight: 700;
        }

      `;


      document.head.appendChild(
        style
      );
    }
  }

})();
