/* Colour theme switcher: Light -> Dark -> Rainbow.
   Adds a round button to the top bar of every page that loads this file,
   and remembers the visitor's choice in their browser.
   Icons: Font Awesome Free 6.7.2 (CC BY 4.0). */
(function () {
  var THEMES = ["light", "dark", "rainbow"];
  var LABELS = { light: "Light", dark: "Dark", rainbow: "Rainbow" };
  var ICONS = {
    light: '<svg class="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>',
    dark: '<svg class="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>',
    rainbow: '<svg class="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false"><path d="M320 96C178.6 96 64 210.6 64 352l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96C0 175.3 143.3 32 320 32s320 143.3 320 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96C576 210.6 461.4 96 320 96zm0 192c-35.3 0-64 28.7-64 64l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-70.7 57.3-128 128-128s128 57.3 128 128l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-35.3-28.7-64-64-64zM160 352l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-123.7 100.3-224 224-224s224 100.3 224 224l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-88.4-71.6-160-160-160s-160 71.6-160 160z"/></svg>'
  };
  var root = document.documentElement;

  function load() { try { return localStorage.getItem("theme"); } catch (e) { return null; } }
  function save(t) { try { localStorage.setItem("theme", t); } catch (e) {} }
  function system() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function nextOf(t) { return THEMES[(THEMES.indexOf(t) + 1) % THEMES.length]; }

  var current = THEMES.indexOf(load()) >= 0 ? load() : system();
  root.setAttribute("data-theme", current);   // runs before the page is drawn, so no flash

  function render(btn) {
    var next = nextOf(current);
    btn.innerHTML = ICONS[current];
    btn.setAttribute("aria-label", "Colour theme: " + LABELS[current] + ". Switch to " + LABELS[next] + ".");
    btn.title = LABELS[current] + " theme (click for " + LABELS[next] + ")";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var bar = document.querySelector(".header-inner");
    if (!bar) return;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "theme-toggle";
    render(btn);
    btn.addEventListener("click", function () {
      current = nextOf(current);
      root.setAttribute("data-theme", current);
      save(current);
      render(btn);
    });
    bar.appendChild(btn);
  });
})();