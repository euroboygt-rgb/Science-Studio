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
    "day57"
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

          return (
            (
              item.textContent ||
              ""
            )
            .toLowerCase()
            .includes(
              "can you make a bulb light"
            )
          );
        }
      );


    if (!heading) {

      console.log(
        "Day 57 Circuit Builder heading not found."
      );

      return;
    }


    heading.textContent =
      "Can you power three different loads?";


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
        "Build three simple circuits. Test a bulb, motor, and speaker one at a time. "
        +
        "Use one battery and two wires for each build.";
    }


    if (
      !document.getElementById(
        "day57CircuitBuilderMission"
      )
    ) {

      const panel =
        document.createElement(
          "div"
        );


      panel.id =
        "day57CircuitBuilderMission";


      panel.innerHTML = `

        <strong>
          🎯 Day 57 Three Loads Challenge
        </strong>

        <div class="d57cb-load">
          💡 <b>Build 1:</b>
          Bulb → observe light and thermal output.
        </div>

        <div class="d57cb-load">
          ⚙️ <b>Build 2:</b>
          Motor → observe motion output.
        </div>

        <div class="d57cb-load">
          🔊 <b>Build 3:</b>
          Speaker → observe sound output.
        </div>

        <div class="d57cb-rule">
          For each build: one battery + two wires + one load.
        </div>

      `;


      missionCard.appendChild(
        panel
      );
    }


    if (
      !document.getElementById(
        "day57CircuitBuilderStyle"
      )
    ) {

      const style =
        document.createElement(
          "style"
        );


      style.id =
        "day57CircuitBuilderStyle";


      style.textContent = `

        #day57CircuitBuilderMission {
          margin-top: 12px;
          padding: 12px;
          border: 2px solid #111;
          border-radius: 10px;
          background: #eef7ff;
        }

        #day57CircuitBuilderMission > strong {
          display: block;
          margin-bottom: 8px;
          font-size: 1.05rem;
        }

        #day57CircuitBuilderMission .d57cb-load {
          margin: 6px 0;
          padding: 6px 8px;
          border: 1px solid #999;
          border-radius: 7px;
          background: #fff;
        }

        #day57CircuitBuilderMission .d57cb-rule {
          margin-top: 9px;
          padding: 7px;
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
