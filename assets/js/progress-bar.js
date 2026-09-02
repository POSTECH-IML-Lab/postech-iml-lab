/*
 * This JavaScript code has been adapted from the article
 * https://css-tricks.com/reading-position-indicator/ authored by Pankaj Parashar,
 * published on the website https://css-tricks.com on the 7th of May, 2014.
 * Couple of changes were made to the original code to make it compatible
 * with the `al-folio` theme.
 *
 * v1.0 migration note:
 * Keep behavior equivalent to the previous jQuery implementation, but with
 * a dependency-free runtime so it works when jQuery is not loaded.
 */

const progressBar = document.getElementById("progress");

// Local override addition (not upstream): apply the navbar-height-dependent
// setup (document.body's padding-top and the progress bar's own top offset)
// immediately, instead of waiting for `window.load` + a 50ms delay as
// upstream does below. That delay exists so images etc. finish loading
// before measuring, but the navbar's height doesn't depend on that --
// waiting meant the page's content visibly jumped down (by the navbar's
// height) shortly after first paint, on every page load, whenever the
// navbar's real height differs from the theme's hardcoded 57px CSS
// fallback (e.g. on narrow viewports where the site title wraps to two
// lines). Calling initializeProgressElement() here applies the correct
// value before the user ever sees a mismatched one. The `max`/`value` it
// also sets get a provisional value now and are corrected once
// `progressBarSetup()` runs on `window.load` below (after which they also
// keep updating on scroll/resize as before), so nothing about `max`
// accuracy is lost -- only the avoidable extra delay on the padding/top
// values is removed.
if (progressBar) {
  initializeProgressElement();
}

window.addEventListener("load", () => {
  setTimeout(progressBarSetup, 50);
});

function progressBarSetup() {
  if (!progressBar) return;

  if ("max" in document.createElement("progress")) {
    initializeProgressElement();
    document.addEventListener("scroll", () => {
      progressBar.value = getCurrentScrollPosition();
    });
    window.addEventListener("resize", initializeProgressElement);
  } else {
    resizeProgressBar();
    document.addEventListener("scroll", resizeProgressBar);
    window.addEventListener("resize", resizeProgressBar);
  }
}

function getCurrentScrollPosition() {
  return window.pageYOffset || document.documentElement.scrollTop || 0;
}

function getElementOuterHeightWithMargins(element) {
  if (!element) return 0;
  const styles = window.getComputedStyle(element);
  const marginTop = parseFloat(styles.marginTop) || 0;
  const marginBottom = parseFloat(styles.marginBottom) || 0;
  return element.getBoundingClientRect().height + marginTop + marginBottom;
}

function initializeProgressElement() {
  const navbar = document.getElementById("navbar");
  const navbarHeight = Math.round(getElementOuterHeightWithMargins(navbar));

  document.body.style.paddingTop = `${navbarHeight}px`;
  progressBar.style.top = `${navbarHeight}px`;
  progressBar.max = getDistanceToScroll();
  progressBar.value = getCurrentScrollPosition();
}

function getDistanceToScroll() {
  return Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);
}

function resizeProgressBar() {
  progressBar.style.width = `${getWidthPercentage()}%`;
}

function getWidthPercentage() {
  const distanceToScroll = getDistanceToScroll();
  if (distanceToScroll === 0) return 0;
  return (getCurrentScrollPosition() / distanceToScroll) * 100;
}
