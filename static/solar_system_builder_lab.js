(function () {
  "use strict";


  const orderItems = [

    {
      id: "mercury",
      name: "Mercury",
      kind: "planet",
      color: "#9b9188"
    },

    {
      id: "venus",
      name: "Venus",
      kind: "planet",
      color: "#d89c4a"
    },

    {
      id: "earth",
      name: "Earth",
      kind: "planet",
      color: "#3d8de8"
    },

    {
      id: "mars",
      name: "Mars",
      kind: "planet",
      color: "#c95e3f"
    },

    {
      id: "asteroid",
      name: "Asteroid Belt",
      kind: "belt"
    },

    {
      id: "jupiter",
      name: "Jupiter",
      kind: "planet",
      color: "#c99f7b"
    },

    {
      id: "saturn",
      name: "Saturn",
      kind: "planet",
      color: "#dfc779"
    },

    {
      id: "uranus",
      name: "Uranus",
      kind: "planet",
      color: "#85d6df"
    },

    {
      id: "neptune",
      name: "Neptune",
      kind: "planet",
      color: "#426bd7"
    }

  ];


  const correctOrder = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "asteroid",
    "jupiter",
    "saturn",
    "uranus",
    "neptune"
  ];


  const typeItems = [

    {
      id: "t-mercury",
      name: "Mercury",
      category: "terrestrial",
      color: "#9b9188"
    },

    {
      id: "t-venus",
      name: "Venus",
      category: "terrestrial",
      color: "#d89c4a"
    },

    {
      id: "t-earth",
      name: "Earth",
      category: "terrestrial",
      color: "#3d8de8"
    },

    {
      id: "t-mars",
      name: "Mars",
      category: "terrestrial",
      color: "#c95e3f"
    },

    {
      id: "t-jupiter",
      name: "Jupiter",
      category: "gas",
      color: "#c99f7b"
    },

    {
      id: "t-saturn",
      name: "Saturn",
      category: "gas",
      color: "#dfc779"
    },

    {
      id: "t-uranus",
      name: "Uranus",
      category: "ice",
      color: "#85d6df"
    },

    {
      id: "t-neptune",
      name: "Neptune",
      category: "ice",
      color: "#426bd7"
    }

  ];


  let selectedOrderId = null;
  let selectedTypeId = null;

  let orderComplete = false;
  let typesComplete = false;


  const orderTray =
    document.getElementById(
      "ssOrderTray"
    );


  const typeTray =
    document.getElementById(
      "ssTypeTray"
    );


  function makeOrderCard(item) {

    const card =
      document.createElement(
        "div"
      );


    card.className =
      "ss-object-card";


    card.dataset.id =
      item.id;


    card.draggable =
      true;


    if (
      item.kind === "belt"
    ) {

      card.innerHTML = `

        <span class="ss-belt-icon">
          ☄️
        </span>

        <strong>
          ${item.name}
        </strong>

      `;

    } else {

      card.innerHTML = `

        <span
          class="ss-planet-dot"
          style="background:${item.color}">
        </span>

        <strong>
          ${item.name}
        </strong>

      `;
    }


    card.onclick =
      function () {

        document
          .querySelectorAll(
            ".ss-object-card"
          )
          .forEach(
            function (other) {

              other.classList.remove(
                "selected"
              );
            }
          );


        selectedOrderId =
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


  function makeTypeCard(item) {

    const card =
      document.createElement(
        "div"
      );


    card.className =
      "ss-type-card";


    card.dataset.id =
      item.id;


    card.draggable =
      true;


    card.innerHTML = `

      <span
        class="ss-planet-dot"
        style="background:${item.color}">
      </span>

      <strong>
        ${item.name}
      </strong>

    `;


    card.onclick =
      function () {

        document
          .querySelectorAll(
            ".ss-type-card"
          )
          .forEach(
            function (other) {

              other.classList.remove(
                "selected"
              );
            }
          );


        selectedTypeId =
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


  function orderCardById(id) {

    return document.querySelector(
      '.ss-object-card[data-id="' + id + '"]'
    );
  }


  function typeCardById(id) {

    return document.querySelector(
      '.ss-type-card[data-id="' + id + '"]'
    );
  }


  function moveOrderCard(
    id,
    slotNumber
  ) {

    const card =
      orderCardById(id);


    const slot =
      document.querySelector(
        '.ss-slot[data-slot="' + slotNumber + '"] .ss-slot-zone'
      );


    if (
      !card
      ||
      !slot
    ) {
      return;
    }


    const existing =
      slot.querySelector(
        ".ss-object-card"
      );


    if (
      existing
      &&
      existing !== card
    ) {

      orderTray.appendChild(
        existing
      );


      delete existing.dataset.slot;
    }


    card.dataset.slot =
      String(slotNumber);


    card.classList.remove(
      "selected",
      "wrong",
      "correct"
    );


    slot.appendChild(
      card
    );


    selectedOrderId = null;


    updateOrderCounter();
  }


  function moveTypeCard(
    id,
    category
  ) {

    const card =
      typeCardById(id);


    const zone =
      document.querySelector(
        '.ss-type-bin[data-category="' + category + '"] .ss-type-zone'
      );


    if (
      !card
      ||
      !zone
    ) {
      return;
    }


    card.dataset.categoryPlaced =
      category;


    card.classList.remove(
      "selected",
      "wrong",
      "correct"
    );


    zone.appendChild(
      card
    );


    selectedTypeId = null;


    updateTypeCounter();
  }


  function updateOrderCounter() {

    const placed =
      document.querySelectorAll(
        ".ss-object-card[data-slot]"
      ).length;


    document
      .getElementById(
        "ssOrderCounter"
      )
      .textContent =
      placed
      +
      " / 9 placed";
  }


  function updateTypeCounter() {

    const placed =
      document.querySelectorAll(
        ".ss-type-card[data-category-placed]"
      ).length;


    document
      .getElementById(
        "ssTypeCounter"
      )
      .textContent =
      placed
      +
      " / 8 sorted";
  }


  function updateMaster() {

    document
      .getElementById(
        "ssOrderStatus"
      )
      .textContent =
      orderComplete
        ? "✅"
        : "⬜";


    document
      .getElementById(
        "ssTypeStatus"
      )
      .textContent =
      typesComplete
        ? "✅"
        : "⬜";


    const message =
      document.getElementById(
        "ssMasterMessage"
      );


    if (
      orderComplete
      &&
      typesComplete
    ) {

      message.innerHTML = `

        🏆
        <strong>
          SOLAR SYSTEM MISSION COMPLETE!
        </strong>

        <br><br>

        You correctly built the solar system
        and classified all eight planets.

        <br><br>

        <strong>
          Solar System Specialist status earned.
        </strong>

      `;

    } else {

      message.textContent =
        "Complete both missions to become a Solar System Specialist.";
    }
  }


  function resetOrder() {

    selectedOrderId = null;
    orderComplete = false;


    orderTray.innerHTML = "";


    document
      .querySelectorAll(
        ".ss-slot-zone"
      )
      .forEach(
        function (zone) {

          zone.innerHTML = "";
        }
      );


    orderItems.forEach(
      function (item) {

        orderTray.appendChild(
          makeOrderCard(item)
        );
      }
    );


    document
      .getElementById(
        "ssOrderFeedback"
      )
      .textContent =
      "Place all nine objects before checking.";


    updateOrderCounter();
    updateMaster();
  }


  function resetTypes() {

    selectedTypeId = null;
    typesComplete = false;


    typeTray.innerHTML = "";


    document
      .querySelectorAll(
        ".ss-type-zone"
      )
      .forEach(
        function (zone) {

          zone.innerHTML = "";
        }
      );


    typeItems.forEach(
      function (item) {

        typeTray.appendChild(
          makeTypeCard(item)
        );
      }
    );


    document
      .getElementById(
        "ssTypeFeedback"
      )
      .textContent =
      "Sort all eight planets before checking.";


    updateTypeCounter();
    updateMaster();
  }


  document
    .querySelectorAll(
      ".ss-slot"
    )
    .forEach(
      function (slot) {

        const slotNumber =
          Number(
            slot.dataset.slot
          );


        slot.addEventListener(
          "click",
          function (event) {

            if (
              event.target.closest(
                ".ss-object-card"
              )
            ) {
              return;
            }


            if (!selectedOrderId) {
              return;
            }


            moveOrderCard(
              selectedOrderId,
              slotNumber
            );
          }
        );


        slot.addEventListener(
          "dragover",
          function (event) {

            event.preventDefault();
          }
        );


        slot.addEventListener(
          "drop",
          function (event) {

            event.preventDefault();


            const id =
              event.dataTransfer.getData(
                "text/plain"
              );


            moveOrderCard(
              id,
              slotNumber
            );
          }
        );
      }
    );


  document
    .querySelectorAll(
      ".ss-type-bin"
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
                ".ss-type-card"
              )
            ) {
              return;
            }


            if (!selectedTypeId) {
              return;
            }


            moveTypeCard(
              selectedTypeId,
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


            moveTypeCard(
              id,
              category
            );
          }
        );
      }
    );


  document
    .getElementById(
      "ssCheckOrder"
    )
    .onclick =
    function () {

      const placed =
        document.querySelectorAll(
          ".ss-object-card[data-slot]"
        );


      const feedback =
        document.getElementById(
          "ssOrderFeedback"
        );


      if (
        placed.length !==
        9
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Place all 9 objects before checking.";

        return;
      }


      let correctCount = 0;


      correctOrder.forEach(
        function (id, index) {

          const card =
            orderCardById(id);


          card.classList.remove(
            "correct",
            "wrong"
          );


          if (
            Number(
              card.dataset.slot
            )
            === index
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
        9
      ) {

        orderComplete = true;


        feedback.style.color =
          "#087a35";


        feedback.innerHTML = `

          ✅
          <strong>
            Solar System Order Correct!
          </strong>

          <br><br>

          Mercury → Venus → Earth → Mars →
          Asteroid Belt → Jupiter → Saturn →
          Uranus → Neptune

        `;

      } else {

        orderComplete = false;


        feedback.style.color =
          "#b00020";


        feedback.innerHTML = `

          You have

          <strong>
            ${correctCount} of 9
          </strong>

          positions correct.

          <br><br>

          Red-outlined cards need to move.
          Use the planet-order pattern and try again.

        `;
      }


      updateMaster();
    };


  document
    .getElementById(
      "ssCheckTypes"
    )
    .onclick =
    function () {

      const placed =
        document.querySelectorAll(
          ".ss-type-card[data-category-placed]"
        );


      const feedback =
        document.getElementById(
          "ssTypeFeedback"
        );


      if (
        placed.length !==
        8
      ) {

        feedback.style.color =
          "#b00020";


        feedback.textContent =
          "Sort all 8 planets before checking.";

        return;
      }


      let correctCount = 0;


      typeItems.forEach(
        function (item) {

          const card =
            typeCardById(
              item.id
            );


          card.classList.remove(
            "correct",
            "wrong"
          );


          if (
            card.dataset.categoryPlaced
            ===
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
        8
      ) {

        typesComplete = true;


        feedback.style.color =
          "#087a35";


        feedback.innerHTML = `

          ✅
          <strong>
            Planet Types Correct!
          </strong>

          <br><br>

          Terrestrial:
          Mercury, Venus, Earth, Mars

          <br>

          Gas Giants:
          Jupiter, Saturn

          <br>

          Ice Giants:
          Uranus, Neptune

        `;

      } else {

        typesComplete = false;


        feedback.style.color =
          "#b00020";


        feedback.innerHTML = `

          You have

          <strong>
            ${correctCount} of 8
          </strong>

          planets classified correctly.

          <br><br>

          Red-outlined planets need to move.

        `;
      }


      updateMaster();
    };


  document
    .getElementById(
      "ssResetOrder"
    )
    .onclick =
    resetOrder;


  document
    .getElementById(
      "ssResetTypes"
    )
    .onclick =
    resetTypes;


  resetOrder();
  resetTypes();

})();
