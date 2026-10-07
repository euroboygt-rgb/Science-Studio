(function () {
  "use strict";


  /*
    ==========================================================
    SCIENCE STUDIO GLOBAL VOCABULARY ZOOM
    ==========================================================

    Automatically works on ALL lesson pages.

    - Finds the Vocabulary Anchor Chart
    - Makes EVERY vocabulary tile clickable
    - Hover enlarges tile
    - Click opens picture + term + definition
    - Works with NEW vocabulary automatically
    - MutationObserver supports JS-generated lessons
  */


  const pathname =
    window.location.pathname;


  const isLessonPage =
    /\/(?:first-nine-weeks|second-nine-weeks|2nd-nine-weeks)\/day\/\d+/.test(
      pathname
    );


  if (!isLessonPage) {
    return;
  }


  // =========================================================
  // DEFINITIONS
  //
  // These are fallbacks.
  // If a definition exists elsewhere on the page,
  // Science Studio will prefer that definition.
  // =========================================================

  const definitions = {

    // CIRCUITS

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


    // ENERGY

    "energy":
      "The ability to cause change or do work.",

    "energy transformation":
      "A change from one form of energy into another.",

    "mechanical energy":
      "Energy associated with the motion or position of an object.",

    "electrical energy":
      "Energy associated with electric charges moving through a circuit.",

    "light energy":
      "Energy carried by light.",

    "sound energy":
      "Energy produced by vibrations and carried through matter.",

    "thermal energy":
      "Energy associated with the motion of particles and experienced as heat.",

    "motion":
      "A change in an object's position over time.",


    // LIGHT

    "light":
      "A form of energy that travels and allows objects to be seen.",

    "light source":
      "An object that produces light, such as the Sun, a lamp, or a flashlight.",

    "light ray":
      "A straight-line model that shows the direction light travels.",

    "straight line":
      "A path that does not curve or change direction.",

    "opaque":
      "Describes a material that blocks light from passing through.",

    "transparent":
      "Describes a material that allows most light to pass through.",

    "translucent":
      "Describes a material that allows some light through but scatters the light.",

    "shadow":
      "A dark region formed when an object blocks light.",

    "absorb":
      "To take in light energy instead of reflecting or transmitting it.",

    "absorption":
      "The process in which matter takes in light energy.",

    "reflection":
      "The bouncing of light off a surface.",

    "reflect":
      "To bounce light away from a surface.",

    "refraction":
      "The bending of light as it passes from one medium into another.",

    "refract":
      "To bend as light moves from one medium into another.",

    "medium":
      "Matter through which light or another form of energy travels.",

    "ray":
      "A line with an arrow used to model the direction light travels."
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
  // FIND THE VOCABULARY ANCHOR CHART
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


    let node =
      heading;


    while (
      node.parentElement
      &&
      node.parentElement !==
      document.body
    ) {

      node =
        node.parentElement;


      const text =
        normalize(
          node.innerText
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

        return node;
      }
    }


    return heading.parentElement;
  }


  // =========================================================
  // READ REAL DEFINITIONS FROM THE PAGE
  // =========================================================

  function collectPageDefinitions() {

    const found =
      Object.assign(
        {},
        definitions
      );


    const elements =
      Array.from(
        document.querySelectorAll(
          "section,article,div"
        )
      );


    elements.forEach(
      function (element) {

        const text =
          visibleText(
            element
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


        const childrenWithDefinitions =
          Array.from(
            element.children
          )
          .filter(
            function (child) {

              return /definition\s*:/i.test(
                visibleText(child)
              );
            }
          );


        if (
          childrenWithDefinitions.length > 1
        ) {
          return;
        }


        let term = "";


        const heading =
          element.querySelector(
            "h1,h2,h3,h4,strong"
          );


        if (heading) {

          term =
            normalize(
              heading.textContent
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
              "science word connected to this lesson"
            )
        ) {

          found[term] =
            definition;
        }
      }
    );


    return found;
  }


  // =========================================================
  // FIND VOCABULARY TILES
  //
  // IMPORTANT:
  // This no longer requires us to know the word first.
  // Every image-containing tile becomes clickable.
  // =========================================================

  function findTileForImage(
    image,
    anchor
  ) {

    let node =
      image.parentElement;


    let candidate =
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
        text.length <= 80
        &&
        rect.width >= 50
        &&
        rect.width <= 250
        &&
        rect.height >= 40
        &&
        rect.height <= 200
      ) {

        candidate =
          node;
      }


      node =
        node.parentElement;
    }


    return candidate;
  }


  function termFromTile(
    tile
  ) {

    // Try labels that are NOT the image itself.

    const text =
      normalize(
        tile.innerText
      );


    if (
      text
      &&
      text.length <= 50
    ) {

      return text;
    }


    // Future fallback:
    // image alt text.

    const image =
      tile.querySelector(
        "img"
      );


    if (
      image
      &&
      image.alt
    ) {

      return normalize(
        image.alt
      );
    }


    return "";
  }


  function bestDefinition(
    term,
    pageDefinitions
  ) {

    const normalizedTerm =
      normalize(
        term
      );


    if (
      pageDefinitions[
        normalizedTerm
      ]
    ) {

      return pageDefinitions[
        normalizedTerm
      ];
    }


    // Check whether the card label contains a known term.

    const knownTerms =
      Object.keys(
        pageDefinitions
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
      const knownTerm
      of knownTerms
    ) {

      if (
        normalizedTerm === knownTerm
        ||
        normalizedTerm.includes(
          knownTerm
        )
      ) {

        return pageDefinitions[
          knownTerm
        ];
      }
    }


    // New science word:
    // still clickable rather than silently failing.

    return (
      "This is an important science vocabulary word "
      +
      "for today's lesson. Use the lesson notes and "
      +
      "class discussion to describe its scientific meaning."
    );
  }


  // =========================================================
  // MODAL
  // =========================================================

  function makeModal() {

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


      <article
        class="ss-vocab-big-card"
        role="dialog"
        aria-modal="true"
      >

        <button
          type="button"
          class="ss-vocab-close"
          data-close-vocab="true"
          aria-label="Close vocabulary definition"
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
          Click outside the card or press ESC to close.
        </div>

      </article>

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
      makeModal();


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

    document
      .getElementById(
        "scienceStudioVocabularyModal"
      )
      ?.classList.remove(
        "open"
      );


    document.body.classList.remove(
      "ss-vocab-open"
    );
  }


  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key ===
        "Escape"
      ) {

        closeModal();
      }
    }
  );


  // =========================================================
  // ACTIVATE ALL TILES
  // =========================================================

  function activateVocabularyZoom() {

    const anchor =
      findAnchorChart();


    if (!anchor) {
      return false;
    }


    const pageDefinitions =
      collectPageDefinitions();


    const images =
      Array.from(
        anchor.querySelectorAll(
          "img"
        )
      );


    const activated =
      new Set();


    images.forEach(
      function (image) {

        const tile =
          findTileForImage(
            image,
            anchor
          );


        if (
          !tile
          ||
          activated.has(
            tile
          )
        ) {
          return;
        }


        activated.add(
          tile
        );


        const term =
          termFromTile(
            tile
          );


        if (!term) {
          return;
        }


        const definition =
          bestDefinition(
            term,
            pageDefinitions
          );


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


        tile.title =
          "Click to enlarge "
          +
          term;


        if (
          tile.dataset.vocabListener ===
          "true"
        ) {
          return;
        }


        tile.dataset.vocabListener =
          "true";


        function open(event) {

          event.preventDefault();

          event.stopPropagation();


          openModal(
            term,
            definition,
            image.src || ""
          );
        }


        tile.addEventListener(
          "click",
          open
        );


        tile.addEventListener(
          "keydown",
          function (event) {

            if (
              event.key ===
              "Enter"
              ||
              event.key ===
              " "
            ) {

              open(
                event
              );
            }
          }
        );
      }
    );


    // Add directions even if cards load later.

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

        Hover to preview.

        <strong>
          Click any vocabulary word
        </strong>

        to enlarge its picture
        and read the definition.

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


    return true;
  }


  // =========================================================
  // STYLE
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
        transform: scale(1.14);

        z-index: 100;

        background: #ffffff !important;

        outline:
          3px solid #7131cc;

        outline-offset: 2px;

        box-shadow:
          0 11px 24px
          rgba(0,0,0,.26);
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

        border:
          2px solid #171717;

        border-radius: 8px;

        background:
          #e9f5ff;

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
          rgba(10,20,40,.75);

        backdrop-filter:
          blur(3px);
      }


      .ss-vocab-big-card {
        position: relative;
        z-index: 2;

        width:
          min(590px,90vw);

        max-height:
          88vh;

        overflow-y: auto;

        box-sizing: border-box;

        padding: 25px;

        border:
          4px solid #171717;

        border-radius: 22px;

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
          min(310px,75vw);

        min-height:
          195px;

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
        max-height: 255px;

        object-fit: contain;
      }


      .ss-vocab-big-fallback {
        font-size: 7rem;
      }


      #ssVocabBigTerm {
        margin:
          4px 0 15px;

        font-size: 2rem;

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

        text-align: left;
      }


      .ss-vocab-close-hint {
        margin-top: 12px;

        color: #555;

        font-size: .78rem;
      }


      @media (max-width:700px) {

        .ss-vocab-clickable:hover {
          transform: scale(1.05);
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
  // KEEP SCANNING AS LESSON CONTENT LOADS
  // =========================================================

  let timer = null;


  function rescan() {

    clearTimeout(
      timer
    );


    timer =
      setTimeout(
        activateVocabularyZoom,
        100
      );
  }


  function start() {

    installStyle();


    activateVocabularyZoom();


    [
      300,
      700,
      1200,
      2000,
      3200
    ]
    .forEach(
      function (delay) {

        setTimeout(
          activateVocabularyZoom,
          delay
        );
      }
    );


    const observer =
      new MutationObserver(
        rescan
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
