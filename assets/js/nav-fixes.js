(function () {
  function triggerNavUpdate() {
    if (typeof window === "undefined") {
      return;
    }
    if (typeof window.dispatchEvent === "function") {
      var event;
      try {
        event = new Event("resize");
      } catch (e) {
        event = document.createEvent("UIEvents");
        event.initUIEvent("resize", true, false, window, 0);
      }
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(function () {
          window.dispatchEvent(event);
        });
      } else {
        window.dispatchEvent(event);
      }
    }
  }

  function initNavFixes() {
    // Recalculate after fonts load to avoid width jumps.
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(triggerNavUpdate).catch(function () {});
    }

    // Recalculate on theme changes (colors, borders, etc.).
    document.addEventListener("theme:changed", function () {
      triggerNavUpdate();
    });

    // Fallback: ensure update after full load.
    window.addEventListener("load", function () {
      triggerNavUpdate();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNavFixes);
  } else {
    initNavFixes();
  }
})();
