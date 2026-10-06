(function () {
  "use strict";

  /*
    SCIENCE STUDIO GLOBAL VOCABULARY ZOOM
    -------------------------------------
    Works on every lesson page.

    HOVER:
      Slight enlargement.

    CLICK:
      Large vocabulary card with:
        - image
        - science word
        - definition
  */


  const path =
    window.location.pathname;


  const lessonPage =
    /\/(?:first-nine-weeks|second-nine-weeks|2nd-nine-weeks)\/day\/\d+/.test(
      path
    );


  if (!lessonPage) {
    return;
  }


  // =========================================================
  // BACKUP DEFINITIONS
  //
  // The script first tries to read the real definition from
  // the lesson's Vocabulary section.
  //
  // These definitions are backups if needed.
  // =========================================================

  const backupDefinitions = {

    "circuit":
      "A complete path through which electrical energy can flow.",

    "system":
      "A group of connected parts that work together.",

    "battery":
      "A power source that provides energy to an electrical circuit.",

    "power source":
      "The part of a system that supplies energy.",

    "wire":
      "A conductor that provides a path for electrical energy to move.",

    "conductor":
      "A material that allows electrical energy to transfer through it easily.",

    "insulator":
      "A material that does not allow electrical energy to transfer through it easily.",

    "load":
      "A circuit component that transforms electrical energy into another form of energy.",

    "switch":
      "A circuit component that opens or closes the conducting path.",

    "open circuit":
      "A circuit with a break in the conducting path.",

    "closed circuit":
      "A circuit with an unbroken conducting path.",

    "complete circuit":
      "A circuit with a continuous conducting path from one battery terminal back to the other.",

    "incomplete circuit":
      "A circuit with a break or missing connection that prevents a complete conducting path.",

    "electrical energy":
      "Energy associated with electric charges moving through a circuit.",

    "positive terminal":
      "The positive (+) connection point on a battery or power source.",

    "negative terminal":
      "The negative (−) connection point on a battery or power source.",

    "conducting path":
      "The continuous route through which electrical energy can travel.",

    "bulb":
      "A load that transforms electrical energy mainly into light and thermal energy.",

    "motor":
      "A load that transforms electrical energy into motion.",

    "speaker":
      "A load that transforms electrical energy into sound.",

    "series circuit":
      "A circuit in which loads are connected along one continuous conducting path.",

    "parallel circuit":
      "A circuit with more than one conducting path or branch.",

    "branch":
      "One separate conducting path in a parallel circuit.",

    "one path":
      "One continuous route from one battery terminal through the circuit and back to the other terminal.",

    "multiple loads":
      "Two or more circuit components that transform electrical energy into other forms.",

    "energy":
      "The ability to cause change or do work.",

    "energy transformation":
      "A change from one form of energy into another.",

    "mechanical energy":
      "Energy associated with the motion or position of an object.",

    "light energy":
      "Energy carried by light.",

    "sound energy":
      "Energy produced by vibrations and carried through matter.",

    "thermal energy":
      "Energy associated with the motion of particles and experienced as heat.",

    "motion":
      "A change in an object's position over time.",

    "reflection":
      "The bouncing of light off a surface.",

    "refraction":
      "The bending of light as it moves from one medium into another.",

    "medium":
      "Matter through which energy or waves travel.",

    "transparent":
      "Allows most light to pass through.",

    "translucent":
      "Allows some light to pass through but scatters the light.",

    "opaque":
      "Does not allow light to pass through."
  };


  function normalize(value) {

    return String(
      value || ""
    )
    .toLowerCase()
    .replace(/[^\p{L}\p{N}+\- ]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
  }


  function visibleText(element) {

    return String(
      element?.innerText || ""
    )
    .replace(/\s+/g, " ")
    .trim();
  }


  // =========================================================
  // FIND VOCABULARY ANCHOR CHART
  // =========================================================

  function findAnchorChart() {

    const headings =
      Array.from(
        document.querySelectorAll(
          "h1,h2,h3,h4"
        )
      );


    const heading =
      headings.find(
        function (item) {

          return normalize(
            item.textContent
          )
          .includes(
            "vocabulary anchor chart"
          );
        }
      );


    if (!heading) {
      return null;
    }


    let current =
      heading;


    while (
      current.parentElement
      &&
      current.parentElement !==
      document.body
    ) {

      current =
        current.parentElement;


      const text =
        normalize(
          current.innerText
        );


      if (
        text.includes(
          "print this anchor chart"
        )
        ||
        text.includes(
          "open full vocabulary page"
        )
      ) {

        return current;
      }
    }


    return heading.parentElement;
  }


  // =========================================================
  // READ DEFINITIONS ALREADY ON THE LESSON PAGE
  // =========================================================

  function collectDefinitions() {

    const definitions =
      Object.assign(
        {},
        backupDefinitions
      );


    const possibleCards =
      Array.from(
        document.querySelectorAll(
          "section,article,div"
        )
      );


    possibleCards.forEach(
      function (card) {

        const text =
          visibleText(
            card
          );


        if (
          text.length < 15
          ||
          text.length > 700
          ||
          !/definition\s*:/i.test(
            text
          )
        ) {
          return;
        }


        // Skip large parent containers containing several
        // vocabulary definitions.
        const nested =
          Array.from(
            card.children
          )
          .filter(
            function (child) {

              return /definition\s*:/i.test(
                visibleText(child)
              );
            }
          );


        if (
          nested.length > 1
        ) {
          return;
        }


        let term = "";


        const heading =
          card.querySelector(
            "h1,h2,h3,h4,strong"
          );


        if (heading) {

          term =
            normalize(
              heading.textContent
            );
        }


        if (!term) {

          const before =
            text.split(
              /definition\s*:/i
            )[0];


          term =
            normalize(
              before
            );
        }


        const match =
          text.match(
            /definition\s*:\s*(.*?)(?=$|example\s*:|science\s*:|real\s+world\s*:|staar\s*:)/i
          );


        if (
          !term
          ||
          !match
        ) {
          return;
        }


        const definition =
          String(
            match[1] || ""
          )
          .replace(/\s+/g, " ")
          .trim();


        if (
          definition.length > 8
          &&
          !definition
            .toLowerCase()
            .includes(
              "a science word connected to this lesson"
            )
        ) {

          definitions[term] =
            definition;
        }
      }
    );


    return definitions;
  }


  // =========================================================
  // FIND THE SMALLEST CARD CONTAINING AN IMAGE
  // =========================================================

  function getVocabularyTile(
    image,
    anchor
  ) {

    let node =
      image.parentElement;


    let best =
      null;


    while (
      node
      &&
      node !== anchor
      &&
      node !== document.body
    ) {

      const rect =
        node.getBoundingClientRect();


      const text =
        visibleText(
          node
        );


      if (
        text
        &&
        text.length < 100
        &&
        rect.width >= 55
        &&
        rect.width <= 240
        &&
        rect.height >= 45
        &&
        rect.height <= 190
      ) {

        best =
          node;
      }


      node =
        node.parentElement;
    }


    return best;
  }


  function determineTerm(
    tile,
    definitions
  ) {

    const tileText =
      normalize(
        tile.innerText
      );


    const terms =
      Object.keys(
        definitions
      )
      .sort(
        function (a, b) {

          return (
            b.length -
            a.length
          );
        }
      );


    for (
      const term
      of terms
    ) {

      if (
        tileText === term
        ||
        tileText.endsWith(
          " " + term
        )
        ||
        tileText.includes(
          term
        )
      ) {

        return term;
      }
    }


    // If a future lesson has a new vocabulary word,
    // use the visible label as the term.
    const cleaned =
      tileText
      .replace(
        "science word",
        ""
      )
      .trim();


    if (
      cleaned &&
      cleaned.length < 50
    ) {

      return cleaned;
    }


    return "";
  }


  // =========================================================
  // MODAL
  // =========================================================

  function createModal() {

    let modal =
      document.getElementById(
        "scienceStudioVocabularyModal"
      );


    if (modal) {
      return modal;
    }


    modal =
      document.createElement(
        "div"
      );


    modal.id =
      "scienceStudioVocabularyModal";


    modal.innerHTML = `

      <div
        class="ss-vocab-overlay"
        data-close-vocab="true"
      ></div>


      <div
        class="ss-vocab-big-card"
        role="dialog"
        aria-modal="true"
      >

        <button
          type="button"
          class="ss-vocab-close"
          data-close-vocab="true"
          aria-label="Close"
        >
          ✕
        </button>


        <div class="ss-vocab-label">
          🔬 Science Vocabulary
        </div>


        <div class="ss-vocab-big-image-box">

          <img
            id="ssVocabBigImage"
            class="ss-vocab-big-image"
            alt=""
          >

          <div
            id="ssVocabBigFallback"
            class="ss-vocab-big-fallback"
          >
            🔬
          </div>

        </div>


        <h2 id="ssVocabBigTerm"></h2>


        <div class="ss-vocab-definition-label">
          Definition
        </div>


        <div
          id="ssVocabBigDefinition"
          class="ss-vocab-definition"
        ></div>


        <div class="ss-vocab-close-hint">
          Click outside this card or press ESC to close.
        </div>

      </div>
    `;


    document.body.appendChild(
      modal
    );


    modal
      .querySelectorAll(
        "[data-close-vocab='true']"
      )
      .forEach(
        function (element) {

          element.addEventListener(
            "click",
            closeModal
          );
        }
      );


    return modal;
  }


  function openModal(
    term,
    definition,
    imageSource
  ) {

    const modal =
      createModal();


    modal.querySelector(
      "#ssVocabBigTerm"
    ).textContent =
      term;


    modal.querySelector(
      "#ssVocabBigDefinition"
    ).textContent =
      definition;


    const image =
      modal.querySelector(
        "#ssVocabBigImage"
      );


    const fallback =
      modal.querySelector(
        "#ssVocabBigFallback"
      );


    if (imageSource) {

      image.src =
        imageSource;

      image.alt =
        term;

      image.style.display =
        "block";

      fallback.style.display =
        "none";

    } else {

      image.style.display =
        "none";

      fallback.style.display =
        "block";
    }


    modal.classList.add(
      "open"
    );


    document.body.classList.add(
      "ss-vocab-open"
    );
  }


  function closeModal() {

    const modal =
      document.getElementById(
        "scienceStudioVocabularyModal"
      );


    if (modal) {

      modal.classList.remove(
        "open"
      );
    }


    document.body.classList.remove(
      "ss-vocab-open"
    );
  }


  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Escape"
      ) {

        closeModal();
      }
    }
  );


  // =========================================================
  // ACTIVATE ALL VOCABULARY CARDS
  // =========================================================

  function activate() {

    const anchor =
      findAnchorChart();


    if (!anchor) {
      return;
    }


    const definitions =
      collectDefinitions();


    const images =
      Array.from(
        anchor.querySelectorAll(
          "img"
        )
      );


    const used =
      new Set();


    images.forEach(
      function (image) {

        const tile =
          getVocabularyTile(
            image,
            anchor
          );


        if (
          !tile
          ||
          used.has(tile)
        ) {
          return;
        }


        used.add(
          tile
        );


        const term =
          determineTerm(
            tile,
            definitions
          );


        if (!term) {
          return;
        }


        let definition =
          definitions[
            term
          ];


        if (!definition) {

          definition =
            "This science word is used in today's lesson. "
            +
            "Use the vocabulary page and lesson notes to explain its meaning.";
        }


        tile.classList.add(
          "ss-vocab-clickable"
        );


        tile.setAttribute(
          "role",
          "button"
        );


        tile.setAttribute(
          "tabindex",
          "0"
        );


        tile.setAttribute(
          "aria-label",
          "Open definition for "
          +
          term
        );


        tile.dataset.vocabReady =
          "true";


        const open =
          function (event) {

            event.preventDefault();

            event.stopPropagation();


            openModal(
              term,
              definition,
              image.src || ""
            );
          };


        if (
          tile.dataset.vocabListener !==
          "true"
        ) {

          tile.dataset.vocabListener =
            "true";


          tile.addEventListener(
            "click",
            open
          );


          tile.addEventListener(
            "keydown",
            function (event) {

              if (
                event.key === "Enter"
                ||
                event.key === " "
              ) {

                open(
                  event
                );
              }
            }
          );
        }
      }
    );


    // -------------------------------------------------------
    // Add the instruction bar once.
    // -------------------------------------------------------

    if (
      !anchor.querySelector(
        ".ss-vocab-directions"
      )
    ) {

      const directions =
        document.createElement(
          "div"
        );


      directions.className =
        "ss-vocab-directions";


      directions.innerHTML = `

        🔍
        <strong>
          Vocabulary Zoom:
        </strong>

        Hover over a vocabulary card to enlarge it.

        <strong>
          Click it
        </strong>

        to see the picture and definition.

      `;


      const heading =
        Array.from(
          anchor.querySelectorAll(
            "h1,h2,h3,h4"
          )
        )
        .find(
          function (item) {

            return normalize(
              item.textContent
            )
            .includes(
              "vocabulary anchor chart"
            );
          }
        );


      if (heading) {

        heading.insertAdjacentElement(
          "afterend",
          directions
        );
      }
    }
  }


  // =========================================================
  // STYLING
  // =========================================================

  function installStyle() {

    if (
      document.getElementById(
        "ssGlobalVocabularyStyle"
      )
    ) {
      return;
    }


    const style =
      document.createElement(
        "style"
      );


    style.id =
      "ssGlobalVocabularyStyle";


    style.textContent = `

      .ss-vocab-clickable {
        cursor: pointer !important;

        position: relative;

        transition:
          transform .16s ease,
          box-shadow .16s ease,
          background .16s ease;

        transform-origin: center;
      }


      .ss-vocab-clickable:hover,
      .ss-vocab-clickable:focus {
        transform: scale(1.12);

        z-index: 50;

        background: #ffffff !important;

        outline: 3px solid #7b2cff;
        outline-offset: 2px;

        box-shadow:
          0 10px 22px rgba(0,0,0,.25);
      }


      .ss-vocab-clickable::after {
        content: "🔍";

        position: absolute;

        right: 4px;
        top: 3px;

        opacity: 0;

        pointer-events: none;
      }


      .ss-vocab-clickable:hover::after,
      .ss-vocab-clickable:focus::after {
        opacity: 1;
      }


      .ss-vocab-directions {
        margin: 7px 0 10px;

        padding: 8px 11px;

        border: 2px solid #171717;
        border-radius: 8px;

        background: #e9f5ff;

        font-size: .88rem;
      }


      body.ss-vocab-open {
        overflow: hidden;
      }


      #scienceStudioVocabularyModal {
        display: none;

        position: fixed;
        inset: 0;

        z-index: 999999;
      }


      #scienceStudioVocabularyModal.open {
        display: flex;

        align-items: center;
        justify-content: center;
      }


      .ss-vocab-overlay {
        position: absolute;
        inset: 0;

        background:
          rgba(10,20,40,.74);

        backdrop-filter:
          blur(3px);
      }


      .ss-vocab-big-card {
        position: relative;

        z-index: 2;

        width:
          min(580px, 90vw);

        max-height:
          88vh;

        overflow-y: auto;

        box-sizing: border-box;

        padding: 25px;

        border:
          4px solid #171717;

        border-radius:
          22px;

        background:
          #fff4cd;

        text-align: center;

        box-shadow:
          8px 10px 0
          rgba(0,0,0,.24);

        animation:
          ssVocabularyPop
          .18s ease-out;
      }


      @keyframes ssVocabularyPop {

        from {
          opacity: 0;
          transform: scale(.82);
        }

        to {
          opacity: 1;
          transform: scale(1);
        }
      }


      .ss-vocab-close {
        position: absolute;

        right: 12px;
        top: 11px;

        width: 40px;
        height: 40px;

        border:
          2px solid #171717;

        border-radius: 50%;

        background: #ffffff;

        font-weight: 900;
        font-size: 18px;

        cursor: pointer;
      }


      .ss-vocab-label {
        display: inline-block;

        margin-bottom: 14px;

        padding: 6px 13px;

        border:
          2px solid #171717;

        border-radius:
          999px;

        background:
          #7131cc;

        color:
          #fff13b;

        font-weight: 900;
      }


      .ss-vocab-big-image-box {
        display: flex;

        align-items: center;
        justify-content: center;

        width:
          min(300px, 75vw);

        min-height:
          190px;

        box-sizing: border-box;

        margin:
          0 auto 15px;

        padding: 15px;

        border:
          3px solid #171717;

        border-radius:
          16px;

        background:
          #ffffff;
      }


      .ss-vocab-big-image {
        max-width: 100%;
        max-height: 250px;

        object-fit: contain;
      }


      .ss-vocab-big-fallback {
        font-size: 7rem;
      }


      #ssVocabBigTerm {
        margin:
          4px 0 15px;

        font-size:
          2rem;

        text-transform:
          capitalize;
      }


      .ss-vocab-definition-label {
        margin-bottom: 6px;

        color:
          #7131cc;

        font-weight: 900;

        text-transform:
          uppercase;
      }


      .ss-vocab-definition {
        padding: 15px;

        border:
          3px solid #171717;

        border-radius:
          12px;

        background:
          #eaf6ff;

        font-size:
          1.2rem;

        line-height:
          1.45;

        text-align:
          left;
      }


      .ss-vocab-close-hint {
        margin-top: 12px;

        color: #555;

        font-size: .78rem;
      }


      @media (max-width: 700px) {

        .ss-vocab-clickable:hover {
          transform: scale(1.04);
        }


        .ss-vocab-big-card {
          padding: 18px;
        }


        #ssVocabBigTerm {
          font-size: 1.6rem;
        }


        .ss-vocab-definition {
          font-size: 1.05rem;
        }
      }

    `;


    document.head.appendChild(
      style
    );
  }


  // =========================================================
  // START
  // =========================================================

  let scanTimer = null;


  function scheduleScan() {

    clearTimeout(
      scanTimer
    );


    scanTimer =
      setTimeout(
        activate,
        160
      );
  }


  function start() {

    installStyle();


    // Immediate and delayed scans support older pages
    // and newer JS-generated lesson pages.

    activate();

    setTimeout(
      activate,
      500
    );

    setTimeout(
      activate,
      1000
    );

    setTimeout(
      activate,
      1800
    );

    setTimeout(
      activate,
      3000
    );


    // Watch for Phenomenon/Mission/Lesson JS adding
    // sections after the page originally loads.

    const observer =
      new MutationObserver(
        function () {

          scheduleScan();
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
