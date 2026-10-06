(function () {
  "use strict";


  if (
    !window.location.pathname.includes(
      "/second-nine-weeks/day/53"
    )
  ) {
    return;
  }


  const VOCAB = {

    "circuit": {
      definition:
        "A path or system through which electrical energy can move.",
      example:
        "A battery, wires, and a bulb can be connected to form a circuit.",
      icon: "🔌"
    },

    "system": {
      definition:
        "A group of connected parts that work together to perform a function.",
      example:
        "A circuit is a system because the battery, wires, switch, and load work together.",
      icon: "⚙️"
    },

    "battery": {
      definition:
        "A power source that provides energy to an electrical circuit.",
      example:
        "The battery provides energy for the bulb in a simple circuit.",
      icon: "🔋"
    },

    "power source": {
      definition:
        "The part of a system that supplies energy.",
      example:
        "In our Circuit Builder, the battery is the power source.",
      icon: "⚡"
    },

    "wire": {
      definition:
        "A conducting path used to connect parts of an electrical circuit.",
      example:
        "Wires connect the battery to the load and provide a path through the circuit.",
      icon: "〰️"
    },

    "conductor": {
      definition:
        "A material that allows electrical energy to move through it easily.",
      example:
        "Metal wire is a conductor used to connect circuit parts.",
      icon: "🔗"
    },

    "load": {
      definition:
        "A circuit component that changes electrical energy into another form of energy.",
      example:
        "A bulb, motor, and speaker are all examples of loads.",
      icon: "💡"
    },

    "switch": {
      definition:
        "A component that opens or closes the conducting path in a circuit.",
      example:
        "Closing the switch can complete the path so electrical energy can move through the circuit.",
      icon: "🔘"
    },

    "open circuit": {
      definition:
        "A circuit with a break or opening in the conducting path.",
      example:
        "When the switch is open, the path is broken and the bulb does not light.",
      icon: "⭕"
    },

    "closed circuit": {
      definition:
        "A circuit in which the conducting path is closed and connected.",
      example:
        "Closing the switch connects the path so electrical energy can move through the system.",
      icon: "✅"
    },

    "complete circuit": {
      definition:
        "A continuous conducting path from one battery terminal, through the circuit components, and back to the other battery terminal.",
      example:
        "A bulb can light when both battery terminals are connected through a complete conducting path.",
      icon: "🔁"
    },

    "electrical energy": {
      definition:
        "Energy associated with moving electric charges in a circuit.",
      example:
        "Electrical energy can be transformed into light, motion, sound, or thermal energy.",
      icon: "⚡"
    },

    "positive terminal": {
      definition:
        "The battery connection point marked with a plus (+) sign.",
      example:
        "One conducting path must connect to the battery's positive terminal.",
      icon: "➕"
    },

    "negative terminal": {
      definition:
        "The battery connection point marked with a minus (−) sign.",
      example:
        "The circuit must return to the battery's negative terminal to form a complete path.",
      icon: "➖"
    }

  };


  function ready(fn) {

    if (
      document.readyState ===
      "loading"
    ) {

      document.addEventListener(
        "DOMContentLoaded",
        fn
      );

    }

    else {

      fn();
    }
  }


  ready(function () {

    /*
      Wait until Science Studio finishes building/rearranging
      the Vocabulary Anchor Chart.
    */

    setTimeout(
      initializeVocabularyZoom,
      800
    );

  });


  function initializeVocabularyZoom() {

    const vocabCard =
      findVocabularyCard();


    if (!vocabCard) {

      console.log(
        "Day 53 vocabulary zoom: Vocabulary Anchor Chart not found."
      );

      return;
    }


    addHelpMessage(
      vocabCard
    );


    const termCards =
      findTermCards(
        vocabCard
      );


    Object.entries(
      termCards
    )
    .forEach(
      function ([term, card]) {

        makeInteractive(
          card,
          term
        );
      }
    );


    buildModal();


    console.log(
      "Day 53 vocabulary zoom ready:",
      Object.keys(termCards).length,
      "terms."
    );
  }


  // =========================================================
  // LOCATE VOCAB CARD
  // =========================================================

  function findVocabularyCard() {

    const elements =
      Array.from(
        document.querySelectorAll(
          "section, article, div"
        )
      );


    const matches =
      elements.filter(
        function (element) {

          const text =
            cleanText(
              element.innerText
            );


          return text.includes(
            "Vocabulary Anchor Chart"
          );
        }
      );


    matches.sort(
      function (a, b) {

        return (
          area(a) -
          area(b)
        );
      }
    );


    return matches.find(
      function (element) {

        const rect =
          element.getBoundingClientRect();


        return (
          rect.width > 500 &&
          rect.height > 180
        );
      }
    ) || null;
  }


  // =========================================================
  // FIND EACH SMALL TERM CARD
  // =========================================================

  function findTermCards(
    vocabCard
  ) {

    const result =
      {};


    Object.keys(VOCAB)
      .forEach(
        function (term) {

          const candidates =
            Array.from(
              vocabCard.querySelectorAll(
                "div, article, section, li"
              )
            )
            .filter(
              function (element) {

                const text =
                  cleanText(
                    element.innerText
                  )
                  .toLowerCase();


                const rect =
                  element.getBoundingClientRect();


                return (
                  (
                    text === term ||
                    text.endsWith(
                      " " + term
                    ) ||
                    text.includes(term)
                  )
                  &&
                  rect.width >= 70
                  &&
                  rect.width <= 220
                  &&
                  rect.height >= 50
                  &&
                  rect.height <= 180
                );
              }
            );


          candidates.sort(
            function (a, b) {

              return (
                area(a) -
                area(b)
              );
            }
          );


          if (
            candidates.length
          ) {

            result[term] =
              candidates[0];
          }
        }
      );


    return result;
  }


  // =========================================================
  // MAKE CARD INTERACTIVE
  // =========================================================

  function makeInteractive(
    card,
    term
  ) {

    if (
      card.dataset.vocabZoomReady ===
      "true"
    ) {
      return;
    }


    card.dataset.vocabZoomReady =
      "true";


    card.classList.add(
      "d53-vocab-clickable"
    );


    card.setAttribute(
      "role",
      "button"
    );


    card.setAttribute(
      "tabindex",
      "0"
    );


    card.setAttribute(
      "aria-label",
      "Open vocabulary card for " +
      term
    );


    card.title =
      "Click to enlarge " +
      term;


    card.addEventListener(
      "click",
      function (event) {

        /*
          Don't interfere with existing links/buttons.
        */

        if (
          event.target.closest(
            "a, button"
          )
        ) {
          return;
        }


        openModal(
          term,
          card
        );
      }
    );


    card.addEventListener(
      "keydown",
      function (event) {

        if (
          event.key === "Enter" ||
          event.key === " "
        ) {

          event.preventDefault();

          openModal(
            term,
            card
          );
        }
      }
    );
  }


  // =========================================================
  // HELP MESSAGE
  // =========================================================

  function addHelpMessage(
    vocabCard
  ) {

    if (
      vocabCard.querySelector(
        ".d53-vocab-help"
      )
    ) {
      return;
    }


    const help =
      document.createElement(
        "div"
      );


    help.className =
      "d53-vocab-help";


    help.textContent =
      "🔍 Hover over a vocabulary card to preview it. Click any word to enlarge the picture and read the definition.";


    /*
      Put the directions above the vocabulary cards
      but below the heading/introduction.
    */

    const children =
      Array.from(
        vocabCard.children
      );


    const gridCandidate =
      children.find(
        function (child) {

          return (
            child.querySelectorAll &&
            child.querySelectorAll(
              "img"
            ).length >= 3
          );
        }
      );


    if (gridCandidate) {

      vocabCard.insertBefore(
        help,
        gridCandidate
      );

    }

    else {

      const heading =
        Array.from(
          vocabCard.querySelectorAll(
            "h1,h2,h3"
          )
        )
        .find(
          element =>
            cleanText(
              element.innerText
            )
            .includes(
              "Vocabulary Anchor Chart"
            )
        );


      if (heading) {

        heading.insertAdjacentElement(
          "afterend",
          help
        );

      }

      else {

        vocabCard.prepend(
          help
        );
      }
    }
  }


  // =========================================================
  // MODAL
  // =========================================================

  function buildModal() {

    if (
      document.getElementById(
        "d53VocabModal"
      )
    ) {
      return;
    }


    const modal =
      document.createElement(
        "div"
      );


    modal.id =
      "d53VocabModal";


    modal.innerHTML = `

      <div
        class="d53-vocab-modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="d53VocabTerm"
      >

        <button
          type="button"
          class="d53-vocab-close"
          aria-label="Close vocabulary card"
        >
          ×
        </button>


        <div class="d53-vocab-modal-label">
          🔬 Science Vocabulary
        </div>


        <div
          id="d53VocabTerm"
          class="d53-vocab-modal-term"
        ></div>


        <div
          id="d53VocabImage"
          class="d53-vocab-image-box"
        ></div>


        <div class="d53-vocab-definition">

          <strong>
            Definition
          </strong>

          <span
            id="d53VocabDefinition"
          ></span>

        </div>


        <div class="d53-vocab-example">

          <strong>
            Circuit Example
          </strong>

          <span
            id="d53VocabExample"
          ></span>

        </div>


        <div class="d53-vocab-modal-tip">
          Click ×, press Escape, or click outside this card to close.
        </div>

      </div>

    `;


    document.body.appendChild(
      modal
    );


    modal
      .querySelector(
        ".d53-vocab-close"
      )
      .addEventListener(
        "click",
        closeModal
      );


    modal.addEventListener(
      "click",
      function (event) {

        if (
          event.target ===
          modal
        ) {

          closeModal();
        }
      }
    );


    document.addEventListener(
      "keydown",
      function (event) {

        if (
          event.key ===
          "Escape" &&
          modal.classList.contains(
            "d53-vocab-open"
          )
        ) {

          closeModal();
        }
      }
    );
  }


  function openModal(
    term,
    sourceCard
  ) {

    const info =
      VOCAB[term];


    if (!info) {
      return;
    }


    const modal =
      document.getElementById(
        "d53VocabModal"
      );


    if (!modal) {
      return;
    }


    document
      .getElementById(
        "d53VocabTerm"
      )
      .textContent =
        term;


    document
      .getElementById(
        "d53VocabDefinition"
      )
      .textContent =
        info.definition;


    document
      .getElementById(
        "d53VocabExample"
      )
      .textContent =
        info.example;


    const imageBox =
      document.getElementById(
        "d53VocabImage"
      );


    imageBox.innerHTML =
      "";


    /*
      Reuse the actual Science Studio vocabulary image
      that is already displayed on the small card.
    */

    const sourceImage =
      sourceCard.querySelector(
        "img"
      );


    if (sourceImage) {

      const largeImage =
        sourceImage.cloneNode(
          true
        );


      largeImage.removeAttribute(
        "width"
      );


      largeImage.removeAttribute(
        "height"
      );


      imageBox.appendChild(
        largeImage
      );

    }

    else {

      const fallback =
        document.createElement(
          "div"
        );


      fallback.className =
        "d53-vocab-fallback-icon";


      fallback.textContent =
        info.icon;


      imageBox.appendChild(
        fallback
      );
    }


    modal.classList.add(
      "d53-vocab-open"
    );


    document.body.style.overflow =
      "hidden";


    modal
      .querySelector(
        ".d53-vocab-close"
      )
      .focus();
  }


  function closeModal() {

    const modal =
      document.getElementById(
        "d53VocabModal"
      );


    if (!modal) {
      return;
    }


    modal.classList.remove(
      "d53-vocab-open"
    );


    document.body.style.overflow =
      "";
  }


  // =========================================================
  // UTILITIES
  // =========================================================

  function cleanText(
    value
  ) {

    return (
      value ||
      ""
    )
    .replace(
      /\s+/g,
      " "
    )
    .trim();
  }


  function area(
    element
  ) {

    const rect =
      element.getBoundingClientRect();


    return (
      rect.width *
      rect.height
    );
  }

})();
