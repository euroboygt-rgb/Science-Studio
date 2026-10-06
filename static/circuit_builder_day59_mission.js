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
    "day59"
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
            ||
            text.includes(
              "can you diagnose and repair"
            )
          );
        }
      );


    if (!heading) {

      console.log(
        "Day 59 Circuit Builder heading not found."
      );

      return;
    }


    heading.textContent =
      "Can you power two bulbs in one path?";


    let missionCard =
      heading.parentElement;


    while (
      missionCard
      &&
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
      !missionCard
      ||
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


    if (
      paragraphs.length
    ) {

      paragraphs[0].textContent =
        "Build a series circuit using one battery, two bulbs, and three wires. "
        +
        "Both bulbs must be part of one continuous conducting path.";
    }


    if (
      !document.getElementById(
        "day59CircuitBuilderMission"
      )
    ) {

      const panel =
        document.createElement(
          "div"
        );


      panel.id =
        "day59CircuitBuilderMission";


      panel.innerHTML = `

        <strong>
          🎯 Day 59 One Path, Two Loads Mission
        </strong>


        <div class="d59cb-required">

          <span>
            🔋 1 Battery
          </span>

          <span>
            💡 2 Bulbs
          </span>

          <span>
            〰️ 3 Wires
          </span>

        </div>


        <div class="d59cb-path">

          <strong>
            Build this conducting path:
          </strong>

          <br>

          Battery

          <b>→</b>

          Bulb 1

          <b>→</b>

          Bulb 2

          <b>→</b>

          opposite battery terminal

        </div>


        <div class="d59cb-rule">

          ⭐ Mission Rule:

          One battery only.

          Both bulbs must be connected in
          the same continuous path.

        </div>

      `;


      missionCard.appendChild(
        panel
      );
    }


    if (
      !document.getElementById(
        "day59CircuitBuilderStyle"
      )
    ) {

      const style =
        document.createElement(
          "style"
        );


      style.id =
        "day59CircuitBuilderStyle";


      style.textContent = `

        #day59CircuitBuilderMission {
          margin-top: 12px;
          padding: 12px;
          border: 2px solid #111;
          border-radius: 10px;
          background: #eef7ff;
        }

        #day59CircuitBuilderMission > strong {
          display: block;
          margin-bottom: 8px;
          font-size: 1.05rem;
        }

        #day59CircuitBuilderMission .d59cb-required {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 5px;
        }

        #day59CircuitBuilderMission .d59cb-required span {
          padding: 6px;
          border: 1px solid #777;
          border-radius: 6px;
          background: #fff;
          text-align: center;
          font-weight: 800;
        }

        #day59CircuitBuilderMission .d59cb-path {
          margin-top: 8px;
          padding: 8px;
          border: 2px solid #111;
          border-radius: 7px;
          background: #fff;
          text-align: center;
        }

        #day59CircuitBuilderMission .d59cb-path b {
          margin: 0 4px;
          color: #7131cc;
        }

        #day59CircuitBuilderMission .d59cb-rule {
          margin-top: 8px;
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
