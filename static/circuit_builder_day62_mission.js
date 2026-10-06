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
    "day62"
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
              "can you add more loads"
            )
            ||
            text.includes(
              "what happens when you remove"
            )
            ||
            text.includes(
              "can you power"
            )
          );
        }
      );


    if (!heading) {

      console.log(
        "Day 62 Circuit Builder heading not found."
      );

      return;
    }


    heading.textContent =
      "Can you build two complete paths?";


    let missionCard =
      heading.parentElement;


    while (
      missionCard
      &&
      missionCard !== document.body
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
        "Build a parallel circuit using one battery, two bulbs, and four wires. "
        +
        "Each bulb needs its own complete branch.";
    }


    if (
      !document.getElementById(
        "day62CircuitBuilderMission"
      )
    ) {

      const panel =
        document.createElement(
          "div"
        );


      panel.id =
        "day62CircuitBuilderMission";


      panel.innerHTML = `

        <strong>
          🏁 Day 62 Final Circuit Mission
        </strong>


        <div class="d62cb-rule">

          <b>Use:</b>

          🔋 1 battery

          • 💡 2 bulbs

          • 〰️ 4 wires

        </div>


        <div class="d62cb-branch">

          <strong>
            Branch 1
          </strong>

          Battery +

          → Bulb 1 →

          Battery −

        </div>


        <div class="d62cb-branch">

          <strong>
            Branch 2
          </strong>

          Battery +

          → Bulb 2 →

          Battery −

        </div>


        <div class="d62cb-step">

          <b>1.</b>
          Build both branches.

        </div>

        <div class="d62cb-step">

          <b>2.</b>
          Press <b>Test Circuit</b>.

        </div>

        <div class="d62cb-step">

          <b>3.</b>
          Verify both bulbs are powered.

        </div>

        <div class="d62cb-step">

          <b>4.</b>
          Trace BOTH complete paths.

        </div>

        <div class="d62cb-step">

          <b>5.</b>
          Select Bulb 1 and click
          <b>Delete Selected</b>.

        </div>

        <div class="d62cb-step">

          <b>6.</b>
          Test again.

        </div>


        <div class="d62cb-evidence">

          🔍
          <strong>
            Evidence Question:
          </strong>

          Why can Bulb 2 remain powered
          even though Branch 1 is broken?

        </div>


        <div class="d62cb-success">

          ⭐ PARALLEL CIRCUIT RULE:

          More than one branch means
          more than one possible conducting path.

        </div>

      `;


      missionCard.appendChild(
        panel
      );
    }


    if (
      !document.getElementById(
        "day62CircuitBuilderStyle"
      )
    ) {

      const style =
        document.createElement(
          "style"
        );


      style.id =
        "day62CircuitBuilderStyle";


      style.textContent = `

        #day62CircuitBuilderMission {
          margin-top: 12px;
          padding: 12px;
          border: 2px solid #111;
          border-radius: 10px;
          background: #eef7ff;
        }

        #day62CircuitBuilderMission > strong {
          display: block;
          margin-bottom: 9px;
          font-size: 1.08rem;
        }

        .d62cb-rule,
        .d62cb-branch,
        .d62cb-step,
        .d62cb-evidence,
        .d62cb-success {
          margin: 6px 0;
          padding: 8px;
          border: 1px solid #777;
          border-radius: 7px;
          background: #fff;
        }

        .d62cb-branch {
          border: 2px solid #7131cc;
          background: #f0e9ff;
        }

        .d62cb-evidence {
          border: 2px solid #111;
          background: #dcf6df;
        }

        .d62cb-success {
          border: 2px solid #111;
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
