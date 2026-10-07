(function () {
  "use strict";


  const items = [

    {
      id: "window",
      icon: "🪟",
      name: "Clear Window Glass",
      category: "transparent"
    },

    {
      id: "water",
      icon: "💧",
      name: "Clean Water",
      category: "transparent"
    },

    {
      id: "clearPlastic",
      icon: "🥤",
      name: "Clear Plastic Sheet",
      category: "transparent"
    },

    {
      id: "acrylic",
      icon: "📏",
      name: "Clear Acrylic Ruler",
      category: "transparent"
    },


    {
      id: "waxPaper",
      icon: "🧻",
      name: "Wax Paper",
      category: "translucent"
    },

    {
      id: "frostedGlass",
      icon: "🚿",
      name: "Frosted Glass",
      category: "translucent"
    },

    {
      id: "tracingPaper",
      icon: "📄",
      name: "Tracing Paper",
      category: "translucent"
    },

    {
      id: "milkJug",
      icon: "🥛",
      name: "Frosted Milk Jug Plastic",
      category: "translucent"
    },


    {
      id: "cardboard",
      icon: "📦",
      name: "Cardboard",
      category: "opaque"
    },

    {
      id: "book",
      icon: "📕",
      name: "Book",
      category: "opaque"
    },

    {
      id: "wood",
      icon: "🪵",
      name: "Wood Block",
      category: "opaque"
    },

    {
      id: "foil",
      icon: "🥫",
      name: "Aluminum Foil",
      category: "opaque"
    }

  ];


  let selectedId = null;


  const tray =
    document.getElementById(
      "lmTray"
    );


  function createItem(
    item
  ) {

    const card =
      document.createElement(
        "div"
      );


    card.className =
      "lm-item";


    card.dataset.id =
      item.id;


    card.draggable =
      true;


    card.innerHTML = `

      <span class="lm-item-icon">
        ${item.icon}
      </span>

      <span class="lm-item-name">
        ${item.name}
      </span>

    `;


    card.onclick =
      function () {

        document
          .querySelectorAll(
            ".lm-item"
          )
          .forEach(
            function (other) {

              other.classList.remove(
                "selected"
              );
            }
          );


        selectedId =
          item.id;


        card.classList.add(
          "selected"
        );
      };


    card.addEventListener(
      "dragstart",
      function (event) {

        event.dataTransfer.setData(
          "text/plain",
          item.id
        );
      }
    );


    return card;
  }


  function itemById(
    id
  ) {

    return items.find(
      function (item) {

        return item.id === id;
      }
    );
  }


  function cardById(
    id
  ) {

    return document.querySelector(
      '.lm-item[data-id="' + id + '"]'
    );
  }


  function moveItem(
    id,
    category
  ) {

    const card =
      cardById(id);


    const bin =
      document.querySelector(
        '.lm-bin[data-category="' + category + '"] .lm-dropzone'
      );


    if (
      !card
      ||
      !bin
    ) {
      return;
    }


    card.dataset.placed =
      category;


    card.classList.remove(
      "selected",
      "wrong",
      "correct"
    );


    bin.appendChild(
      card
    );


    selectedId = null;


    updateCounter();
  }


  function updateCounter() {

    const placed =
      document.querySelectorAll(
        ".lm-item[data-placed]"
      ).length;


    document
      .getElementById(
        "lmCounter"
      )
      .textContent =
      placed
      +
      " / "
      +
      items.length
      +
      " sorted";
  }


  function reset() {

    selectedId = null;


    tray.innerHTML = "";


    items.forEach(
      function (item) {

        const card =
          createItem(item);


        tray.appendChild(
          card
        );
      }
    );


    document
      .getElementById(
        "lmFeedback"
      )
      .textContent =
      "Sort all twelve objects, then check your work.";


    updateCounter();
  }


  document
    .querySelectorAll(
      ".lm-bin"
    )
    .forEach(
      function (bin) {

        const category =
          bin.dataset.category;


        bin.addEventListener(
          "click",
          function (event) {

            if (
              event.target.closest(
                ".lm-item"
              )
            ) {
              return;
            }


            if (!selectedId) {
              return;
            }


            moveItem(
              selectedId,
              category
            );
          }
        );


        bin.addEventListener(
          "dragover",
          function (event) {

            event.preventDefault();
          }
        );


        bin.addEventListener(
          "drop",
          function (event) {

            event.preventDefault();


            const id =
              event.dataTransfer.getData(
                "text/plain"
              );


            moveItem(
              id,
              category
            );
          }
        );
      }
    );


  document
    .getElementById(
      "lmReset"
    )
    .onclick =
    reset;


  document
    .getElementById(
      "lmCheck"
    )
    .onclick =
    function () {

      const placed =
        document.querySelectorAll(
          ".lm-item[data-placed]"
        );


      const feedback =
        document.getElementById(
          "lmFeedback"
        );


      if (
        placed.length !==
        items.length
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Finish sorting all 12 objects before checking.";

        return;
      }


      let correctCount = 0;


      items.forEach(
        function (item) {

          const card =
            cardById(
              item.id
            );


          const placedCategory =
            card.dataset.placed;


          card.classList.remove(
            "correct",
            "wrong"
          );


          if (
            placedCategory ===
            item.category
          ) {

            correctCount += 1;

            card.classList.add(
              "correct"
            );

          } else {

            card.classList.add(
              "wrong"
            );
          }
        }
      );


      if (
        correctCount ===
        items.length
      ) {

        feedback.style.color =
          "#087a35";


        feedback.innerHTML = `

          🎉
          <strong>
            Mission accomplished!
          </strong>

          You correctly classified all

          <strong>
            12 objects.
          </strong>

          <br><br>

          Transparent = passes clearly.

          <br>

          Translucent = some passes through but scatters.

          <br>

          Opaque = visible light does not pass through.

        `;

      } else {

        feedback.style.color =
          "#b00020";


        feedback.innerHTML = `

          You have

          <strong>
            ${correctCount} of 12
          </strong>

          correct.

          <br><br>

          Cards outlined in

          <strong>red</strong>

          need to be moved.

          Use the light rules at the top
          and try again.

        `;
      }
    };


  reset();

})();
