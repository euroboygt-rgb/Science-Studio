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
    "day61"
  ) {
    return;
  }


  function start() {

    setTimeout(
      applyMission,
      700
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
              item.textContent || ""
            ).toLowerCase();


          return (
            text.includes(
              "can you make a bulb light"
            )
            ||
            text.includes(
              "can you power two bulbs"
            )
            ||
            text.includes(
              "can you add more loads"
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
        "Day 61 Circuit Builder heading not found."
      );

      return;
    }


    heading.textContent =
      "What happens when you remove one bulb?";


    let missionCard =
      heading.parentElement;


    while (
      missionCard
      &&
      missionCard !==
      document.body
    ) {

      const text =
        (
          missionCard.innerText || ""
        ).toUpperCase();


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
      !missionCard
      ||
      missionCard ===
      document.body
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
        "Build a complete two-bulb series circuit. Test it. "
        +
        "Then remove one bulb and test the circuit again.";
    }


    if (
      !document.getElementById(
        "day61CircuitBuilderMission"
      )
    ) {

      const panel =
        document.createElement(
          "div"
        );


      panel.id =
        "day61CircuitBuilderMission";


      panel.innerHTML = `

        <strong>
          🎯 Day 61 Break-the-Path Mission
        </strong>


        <div class="d61cb-step">

          <b>1.</b>

          Build:

          🔋 + 💡 + 💡

          using exactly

          <b>1 battery, 2 bulbs, and 3 wires.</b>

        </div>


        <div class="d61cb-step">

          <b>2.</b>

          Press

          <b>Test Circuit.</b>

          Both bulbs should be powered.

        </div>


        <div class="d61cb-step">

          <b>3.</b>

          Select either bulb and click

          <b>Delete Selected.</b>

        </div>


        <div class="d61cb-step">

          <b>4.</b>

          Press

          <b>Test Circuit</b>

          again.

        </div>


        <div class="d61cb-evidence">

          🔍 <strong>Evidence Question:</strong>

          Why is the remaining bulb no longer powered?

        </div>


        <div class="d61cb-rule">

          ⭐ SERIES CIRCUIT RULE:

          One path means one break can stop
          the entire circuit.

        </div>

      `;


      missionCard.appendChild(
        panel
      );
    }


    if (
      !document.getElementById(
        "day61CircuitBuilderStyle"
      )
    ) {

      const style =
        document.createElement(
          "style"
        );


      style.id =
        "day61CircuitBuilderStyle";


      style.textContent = `

        #day61CircuitBuilderMission {
          margin-top: 12px;
          padding: 12px;
          border: 2px solid #111;
          border-radius: 10px;
          background: #eef7ff;
        }

        #day61CircuitBuilderMission > strong {
          display: block;
          margin-bottom: 8px;
          font-size: 1.05rem;
        }

        .d61cb-step {
          margin: 6px 0;
          padding: 7px;
          border: 1px solid #777;
          border-radius: 6px;
          background: #ffffff;
        }

        .d61cb-evidence {
          margin-top: 9px;
          padding: 8px;
          border: 2px solid #111;
          border-radius: 7px;
          background: #dcf6df;
        }

        .d61cb-rule {
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
