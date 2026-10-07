(function () {
  "use strict";


  const missions = [

    {
      icon: "➡️",
      title: "Mission 1: Aligned Openings",
      scenario:
        "A flashlight beam passes through three holes only when the holes are lined up. What evidence does this provide?",
      choices: [
        "Light naturally curves around corners.",
        "Light travels in a straight line.",
        "Light is magnetic.",
        "Light always reflects."
      ],
      answer: 1,
      explanation:
        "Correct evidence: the beam reaches the target only when the openings are aligned because light travels in a straight line."
    },


    {
      icon: "🪞",
      title: "Mission 2: Mirror Bounce",
      scenario:
        "A beam strikes a mirror and changes direction while remaining in air. What behavior occurred?",
      choices: [
        "Reflection",
        "Refraction",
        "Absorption",
        "Transmission"
      ],
      answer: 0,
      explanation:
        "Reflection occurs when light bounces from a surface such as a mirror."
    },


    {
      icon: "🥤",
      title: "Mission 3: Broken Pencil",
      scenario:
        "A straight pencil appears bent where it enters water. Which light behavior explains the apparent bend?",
      choices: [
        "Reflection",
        "Refraction",
        "Magnetism",
        "Absorption"
      ],
      answer: 1,
      explanation:
        "Light refracts as it crosses the water-air boundary before reaching the observer."
    },


    {
      icon: "🏊",
      title: "Mission 4: Shallow Pool",
      scenario:
        "The bottom of a swimming pool appears closer to the surface than its measured depth. Why?",
      choices: [
        "The pool bottom moved upward.",
        "Light refracted as it traveled from water into air.",
        "Water created extra light.",
        "The bottom became transparent."
      ],
      answer: 1,
      explanation:
        "Refraction changes the apparent position of underwater objects, making the pool appear shallower."
    },


    {
      icon: "🌈",
      title: "Mission 5: Raindrop Rainbow",
      scenario:
        "Which sequence best describes the light path that contributes to a rainbow?",
      choices: [
        "Absorb → reflect → transmit",
        "Refract in → reflect inside → refract out",
        "Reflect → conduct → absorb",
        "Transmit → magnetize → reflect"
      ],
      answer: 1,
      explanation:
        "A rainbow ray refracts entering water, reflects inside the raindrop, and refracts again as it exits."
    },


    {
      icon: "🔤",
      title: "Mission 6: ROYGBIV",
      scenario:
        "Which sequence shows the visible-spectrum colors in the correct order?",
      choices: [
        "Red, Orange, Yellow, Green, Blue, Indigo, Violet",
        "Red, Yellow, Orange, Blue, Green, Violet, Indigo",
        "Violet, Green, Blue, Yellow, Orange, Red, Indigo",
        "Orange, Red, Yellow, Green, Indigo, Blue, Violet"
      ],
      answer: 0,
      explanation:
        "ROYGBIV stands for Red, Orange, Yellow, Green, Blue, Indigo, Violet."
    },


    {
      icon: "👕",
      title: "Mission 7: Orange Shirt",
      scenario:
        "White light shines on an orange shirt. Why does the shirt appear orange?",
      choices: [
        "The shirt creates orange light.",
        "Orange light is reflected toward the eye while much of the other visible light is absorbed.",
        "Orange light is the only color in white light.",
        "Orange light is completely absorbed."
      ],
      answer: 1,
      explanation:
        "The color we see is the visible light reflected from the object toward our eyes."
    },


    {
      icon: "⬛",
      title: "Mission 8: Black Shirt",
      scenario:
        "Which statement best describes a black shirt under white light?",
      choices: [
        "It reflects all visible colors strongly.",
        "It absorbs most visible light and reflects very little.",
        "It creates black light.",
        "It transmits all visible light."
      ],
      answer: 1,
      explanation:
        "Black materials absorb most visible light and reflect relatively little visible light toward the observer."
    },


    {
      icon: "🪟",
      title: "Mission 9: Clear Glass",
      scenario:
        "You can clearly see an object through a clean glass window. How should the glass be classified?",
      choices: [
        "Opaque",
        "Translucent",
        "Transparent",
        "Absorbing"
      ],
      answer: 2,
      explanation:
        "Transparent materials allow most visible light to pass through with little scattering."
    },


    {
      icon: "🧻",
      title: "Mission 10: Wax Paper",
      scenario:
        "Light passes through wax paper, but objects behind it look blurry. How should the material be classified?",
      choices: [
        "Transparent",
        "Translucent",
        "Opaque",
        "Reflective only"
      ],
      answer: 1,
      explanation:
        "Translucent materials transmit some light but scatter it, making images appear blurry."
    },


    {
      icon: "📦",
      title: "Mission 11: Cardboard",
      scenario:
        "A flashlight shines toward cardboard, but visible light does not pass through to the other side. How should the cardboard be classified?",
      choices: [
        "Transparent",
        "Translucent",
        "Opaque",
        "Refractive"
      ],
      answer: 2,
      explanation:
        "Opaque materials do not transmit visible light through the material."
    },


    {
      icon: "🔺",
      title: "Mission 12: Prism Evidence",
      scenario:
        "White light enters a prism and separates into visible colors. Which statement is best supported?",
      choices: [
        "The prism created brand-new colors.",
        "White light already contained the visible-spectrum colors.",
        "Only red light can travel through glass.",
        "The prism changed light into sound."
      ],
      answer: 1,
      explanation:
        "The prism separates colors already contained in white light. It does not create the colors."
    }

  ];


  let current = 0;
  let correct = 0;
  let completed = 0;
  let selected = null;
  let answered = false;


  const icon =
    document.getElementById(
      "mcIcon"
    );

  const title =
    document.getElementById(
      "mcTitle"
    );

  const scenario =
    document.getElementById(
      "mcScenario"
    );

  const choices =
    document.getElementById(
      "mcChoices"
    );

  const check =
    document.getElementById(
      "mcCheck"
    );

  const next =
    document.getElementById(
      "mcNext"
    );

  const feedback =
    document.getElementById(
      "mcFeedback"
    );


  function updateDashboard() {

    document
      .getElementById(
        "mcMissionNumber"
      )
      .textContent =
      Math.min(
        current + 1,
        missions.length
      );


    document
      .getElementById(
        "mcCorrect"
      )
      .textContent =
      correct;


    document
      .getElementById(
        "mcCompleted"
      )
      .textContent =
      completed;


    document
      .getElementById(
        "mcProgressText"
      )
      .textContent =
      completed
      +
      " / "
      +
      missions.length;


    document
      .getElementById(
        "mcProgressBar"
      )
      .style.width =
      (
        completed
        /
        missions.length
        *
        100
      )
      +
      "%";
  }


  function drawMission() {

    const mission =
      missions[current];


    selected = null;
    answered = false;


    icon.textContent =
      mission.icon;


    title.textContent =
      mission.title;


    scenario.textContent =
      mission.scenario;


    choices.innerHTML =
      "";


    mission.choices.forEach(
      function (choice, index) {

        const button =
          document.createElement(
            "button"
          );


        button.className =
          "mc-choice";


        button.type =
          "button";


        button.textContent =
          String.fromCharCode(
            65 + index
          )
          +
          ". "
          +
          choice;


        button.onclick =
          function () {

            if (answered) {
              return;
            }


            choices
              .querySelectorAll(
                ".mc-choice"
              )
              .forEach(
                function (item) {

                  item.classList.remove(
                    "selected"
                  );
                }
              );


            button.classList.add(
              "selected"
            );


            selected =
              index;
          };


        choices.appendChild(
          button
        );
      }
    );


    feedback.innerHTML =
      "Select the answer that best matches the evidence.";


    check.disabled =
      false;


    next.disabled =
      true;


    next.textContent =
      current ===
      missions.length - 1
        ?
        "FINISH MISSION →"
        :
        "NEXT MISSION →";


    updateDashboard();
  }


  check.onclick =
    function () {

      if (
        selected === null
      ) {

        feedback.innerHTML =
          "Choose an answer before checking the mission.";

        return;
      }


      if (answered) {
        return;
      }


      answered = true;
      completed += 1;


      const mission =
        missions[current];


      const buttons =
        Array.from(
          choices.querySelectorAll(
            ".mc-choice"
          )
        );


      buttons[
        mission.answer
      ].classList.add(
        "correct"
      );


      if (
        selected ===
        mission.answer
      ) {

        correct += 1;


        feedback.innerHTML = `

          ✅
          <strong>
            Mission Correct!
          </strong>

          <br><br>

          ${mission.explanation}

        `;

      } else {

        buttons[
          selected
        ].classList.add(
          "wrong"
        );


        feedback.innerHTML = `

          🔍
          <strong>
            Review the Evidence.
          </strong>

          <br><br>

          ${mission.explanation}

        `;
      }


      check.disabled =
        true;


      next.disabled =
        false;


      updateDashboard();
    };


  next.onclick =
    function () {

      if (!answered) {
        return;
      }


      if (
        current <
        missions.length - 1
      ) {

        current += 1;

        drawMission();

        return;
      }


      finish();
    };


  function finish() {

    document
      .querySelector(
        ".mc-workspace"
      )
      .style.display =
      "none";


    const final =
      document.getElementById(
        "mcFinal"
      );


    final.classList.add(
      "show"
    );


    document
      .getElementById(
        "mcFinalScore"
      )
      .innerHTML = `

        You completed

        <strong>
          ${correct} of ${missions.length}
        </strong>

        missions correctly.

      `;


    const message =
      document.getElementById(
        "mcFinalMessage"
      );


    if (
      correct ===
      missions.length
    ) {

      message.innerHTML = `

        🌟
        <strong>
          PERFECT MISSION!
        </strong>

        <br><br>

        You earned

        <strong>
          LIGHT MISSION SPECIALIST
        </strong>

        status.

      `;

    } else if (
      correct >= 10
    ) {

      message.innerHTML = `

        🚀
        <strong>
          Mission Specialist!
        </strong>

        <br><br>

        You demonstrated strong understanding
        of the light unit.

      `;

    } else if (
      correct >= 8
    ) {

      message.innerHTML = `

        👍
        <strong>
          Mission Nearly Complete.
        </strong>

        <br><br>

        Review the evidence explanations
        for the missions you missed.

      `;

    } else {

      message.innerHTML = `

        🔎
        <strong>
          More Training Needed.
        </strong>

        <br><br>

        Review the Light Mission Map
        and try the twelve missions again.

      `;
    }


    updateDashboard();
  }


  document
    .getElementById(
      "mcRestart"
    )
    .onclick =
    function () {

      current = 0;
      correct = 0;
      completed = 0;
      selected = null;
      answered = false;


      document
        .querySelector(
          ".mc-workspace"
        )
        .style.display =
        "block";


      document
        .getElementById(
          "mcFinal"
        )
        .classList.remove(
          "show"
        );


      drawMission();
    };


  drawMission();

})();
