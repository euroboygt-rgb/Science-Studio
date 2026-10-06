(function () {
  "use strict";


  function isSecondNineWeeksLesson() {

    return (
      window.location.pathname.includes(
        "/second-nine-weeks/day/"
      )
      ||
      window.location.pathname.includes(
        "/2nd-nine-weeks/day/"
      )
    );
  }


  if (!isSecondNineWeeksLesson()) {
    return;
  }


  function cleanText(value) {

    return (
      value ||
      ""
    )
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
  }


  function findVisualCard(heading) {

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
          style.borderTopWidth || "0"
        );


      if (
        border >= 2 &&
        rect.width > 400 &&
        rect.height > 100 &&
        rect.height < 1200
      ) {

        return element;
      }


      element =
        element.parentElement;
    }


    return null;
  }


  function removeGenericSecondNineWeeksStaar() {

    const headings =
      Array.from(
        document.querySelectorAll(
          "h1, h2, h3, h4, h5"
        )
      );


    headings.forEach(
      function (heading) {

        const text =
          cleanText(
            heading.textContent
          );


        /*
          This is the old generic fallback section.
        */
        if (
          text.includes(
            "staar practice"
          )
          &&
          text.includes(
            "dok 2"
          )
          &&
          text.includes(
            "multiple choice"
          )
        ) {

          const card =
            findVisualCard(
              heading
            );


          if (card) {

            card.style.display =
              "none";


            card.dataset.mp2GenericStaarHidden =
              "true";
          }
        }
      }
    );
  }


  /*
    Run once after the page loads.
  */

  function start() {

    removeGenericSecondNineWeeksStaar();


    /*
      Some Science Studio lesson sections are created
      after the initial page load.

      Watch for later additions and remove the generic
      STAAR fallback if it appears.
    */

    const observer =
      new MutationObserver(
        function () {

          removeGenericSecondNineWeeksStaar();
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
