(function () {
  "use strict";


  if (
    !window.location.pathname.includes(
      "/second-nine-weeks/day/63"
    )
  ) {
    return;
  }


  function replaceLab() {

    const embedded =
      document.getElementById(
        "day63-light-path-lab"
      );


    if (!embedded) {
      return;
    }


    if (
      document.getElementById(
        "day63LightLabLaunch"
      )
    ) {

      embedded.remove();

      return;
    }


    const launch =
      document.createElement(
        "section"
      );


    launch.id =
      "day63LightLabLaunch";


    launch.className =
      "d59-card d59-cream";


    launch.innerHTML = `

      <div class="d59-badge">
        🔦 Interactive Lab
      </div>


      <h2>
        Light Path Lab:
        Can the Beam Reach the Target?
      </h2>


      <p>
        Test how light travels through
        aligned openings, a moved opening,
        and an opaque blocker.
      </p>


      <div class="d59-required">

        <div>
          🔦
          <strong>
            Light Source
          </strong>
        </div>

        <div>
          ⭕⭕⭕
          <strong>
            Openings
          </strong>
        </div>

        <div>
          🎯
          <strong>
            Target
          </strong>
        </div>

      </div>


      <div class="d59-box">

        <strong>
          Your Mission
        </strong>

        <ol>

          <li>
            Test three aligned openings.
          </li>

          <li>
            Move the middle opening.
          </li>

          <li>
            Test an opaque blocker.
          </li>

          <li>
            Compare the evidence.
          </li>

          <li>
            Explain how the investigation
            demonstrates that light travels
            in a straight line.
          </li>

        </ol>

      </div>


      <div class="d59-success">

        🧠
        <strong>
          Evidence Goal:
        </strong>

        Determine why the beam reaches
        the target only when a straight
        open path is available.

      </div>


      <a
        href="/labs/light-path?mission=day63"
        class="d59-lab-button"
      >
        🔦 Start Light Path Lab
      </a>

    `;


    embedded.replaceWith(
      launch
    );
  }


  function start() {

    replaceLab();


    setTimeout(
      replaceLab,
      600
    );

    setTimeout(
      replaceLab,
      1200
    );

    setTimeout(
      replaceLab,
      2200
    );


    const observer =
      new MutationObserver(
        function () {

          replaceLab();
        }
      );


    observer.observe(
      document.body,
      {
        childList: true,
        subtree: true
      }
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

})();
