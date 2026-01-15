(function () {
  var storageKey = "theme-preference";

  function getStoredTheme() {
    try {
      return window.localStorage.getItem(storageKey);
    } catch (e) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch (e) {
      // Ignore write errors (private mode, blocked storage, etc.)
    }
  }

  function getPreferredTheme() {
    return "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  function emitThemeChanged(theme) {
    try {
      var event = new CustomEvent("theme:changed", { detail: { theme: theme } });
      document.dispatchEvent(event);
    } catch (e) {
      // Ignore if CustomEvent is unsupported
    }
  }

  function updateToggle(theme) {
    var toggle = document.querySelector("[data-theme-toggle]");
    if (!toggle) {
      return;
    }

    var isDark = theme === "dark";
    var icon = toggle.querySelector(".theme-toggle__icon");
    var label = toggle.querySelector(".theme-toggle__label");
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("title", isDark ? "Switch to light mode" : "Switch to dark mode");
    if (icon) {
      icon.textContent = isDark ? "☀️" : "🌙";
    }
    if (label) {
      label.textContent = isDark ? "Light mode" : "Dark mode";
    } else {
      toggle.textContent = isDark ? "Light mode" : "Dark mode";
    }
  }

  function setTheme(theme) {
    applyTheme(theme);
    setStoredTheme(theme);
    updateToggle(theme);
    emitThemeChanged(theme);
  }

  function init() {
    var storedTheme = getStoredTheme();
    var theme = storedTheme || getPreferredTheme();

    applyTheme(theme);
    updateToggle(theme);
    emitThemeChanged(theme);

    var toggle = document.querySelector("[data-theme-toggle]");
    if (!toggle) {
      return;
    }

    toggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme") || theme;
      var next = current === "dark" ? "light" : "dark";
      setTheme(next);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
