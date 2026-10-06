(function () {
  "use strict";


  // =========================================================
  // ONLY RUN ON LESSON PAGES
  // =========================================================

  function isLessonPage() {

    const path =
      window.location.pathname;


    return (
      path.includes(
        "/first-nine-weeks/day/"
      )
      ||
      path.includes(
        "/second-nine-weeks/day/"
      )
      ||
      path.includes(
        "/2nd-nine-weeks/day/"
      )
    );
  }


  // =========================================================
  // DETERMINE STUDENT / TEACHER VIEW
  // =========================================================

  function isStudentView() {

    const params =
      new URLSearchParams(
        window.location.search
      );


    const view =
      (
        params.get("view") ||
        "student"
      )
      .toLowerCase();


    return (
      view !==
      "teacher"
    );
  }


  if (
    !isLessonPage()
    ||
    !isStudentView()
  ) {

    return;
  }


  // =========================================================
  // FIND THE VISUAL CARD CONTAINING A HEADING
  // =========================================================

  function findVisualCard(
    heading
  ) {

    let card =
      heading.closest(
        "section, article, .card, .lesson-section"
      );


    if (card) {
      return card;
    }


    let element =
      heading.parentElement;


    while (
      element &&
      element !== document.body
    ) {

      const rect =
        element.getBoundingClientRect();


      const style =
        window.getComputedStyle(
          element
        );


      const border =
        parseFloat(
          style.borderTopWidth ||
          "0"
        );


      if (
        border >= 2
        &&
        rect.width > 350
        &&
        rect.height > 70
        &&
        rect.height < 1400
      ) {

        return element;
      }


      element =
        element.parentElement;
    }


    return null;
  }


  // =========================================================
  // REMOVE GUIDED PRACTICE FROM STUDENT VIEW
  // =========================================================

  function hideGuidedPractice() {

    const headings =
      Array.from(
        document.querySelectorAll(
          "h1, h2, h3, h4, h5"
        )
      );


    headings.forEach(
      function (
        heading
      ) {

        const text =
          (
            heading.textContent ||
            ""
          )
          .replace(
            /\s+/g,
            " "
          )
          .trim()
          .toLowerCase();


        /*
          Hide sections such as:

          Guided Practice
          Guided Practice — Circuit Detective
          Guided Practice — Trace Before You Build
          Guided Practice: Science Investigation Scenario
        */

        if (
          text.startsWith(
            "guided practice"
          )
        ) {

          const card =
            findVisualCard(
              heading
            );


          if (card) {

            card.style.display =
              "none";


            card.dataset.teacherOnlyGuidedPractice =
              "true";
          }
        }
      }
    );


    /*
      Some of the older Science Studio pages have
      "Before the Lab Guided Practice Scenario"
      as plain text above the heading.
    */

    const elements =
      Array.from(
        document.querySelectorAll(
          "section, article, div"
        )
      );


    elements.forEach(
      function (
        element
      ) {

        const text =
          (
            element.innerText ||
            ""
          )
          .replace(
            /\s+/g,
            " "
          )
          .trim()
          .toLowerCase();


        if (
          text.includes(
            "before the lab guided practice scenario"
          )
          &&
          text.includes(
            "student task before the lab"
          )
          &&
          element.getBoundingClientRect().height <
            1400
        ) {

          element.style.display =
            "none";


          element.dataset.teacherOnlyGuidedPractice =
            "true";
        }
      }
    );
  }


  // =========================================================
  // RUN AFTER PAGE LOAD
  // =========================================================

  function start() {

    hideGuidedPractice();


    /*
      Many Science Studio days create sections with
      JavaScript after the initial page load.

      Watch for newly created Guided Practice cards and
      remove them automatically on student pages.
    */

    const observer =
      new MutationObserver(
        function () {

          hideGuidedPractice();
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

  }

  else {

    start();
  }

})();
