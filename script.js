// Nav bar and footer are defined ONCE here and injected into every page.
// Each HTML file only needs an empty <header id="site-nav"></header> and
// <footer id="site-footer"></footer>, plus <body data-page="home|televisions|about">
// so this script knows which nav link to highlight as "active".

var navHTML = `
  <a class="logo" href="index.html" title="Home">
    <img src="images/PowerIcon.png" alt="Power Icon" class="logo-image">
    <span class="logo-text">Aus<span class="logo-accent">Power</span></span>
  </a>
  <nav class="nav-links">
    <a class="nav-btn" href="index.html" data-page="home">Home</a>
    <a class="nav-btn" href="televisions.html" data-page="televisions">Televisions</a>
    <a class="nav-btn" href="about.html" data-page="about">About Us</a>
  </nav>
`;

var footerHTML = `
  <p>&copy; <span id="year"></span> Amberlyn Lim (104391342). Built for COS30045 Data Visualisation - Lab Exercise Live Demonstration T01 T02 T03.</p>
  <p class="genai-note">Some code and/or content on this site was generated with the assistance of a Generative AI tool (Claude, by Anthropic).</p>
`;

document.addEventListener('DOMContentLoaded', function () {
  // Inject the shared nav and footer markup
  var navEl = document.getElementById('site-nav');
  var footerEl = document.getElementById('site-footer');
  if (navEl) navEl.innerHTML = navHTML;
  if (footerEl) footerEl.innerHTML = footerHTML;

  // Highlight whichever nav link matches this page's data-page attribute
  var currentPage = document.body.getAttribute('data-page') || 'home';
  var activeLink = document.querySelector('.nav-btn[data-page="' + currentPage + '"]');
  if (activeLink) activeLink.classList.add('active');

  // Always start at the top of the new page (fixes nav-bar-hidden-until-scroll issue)
  window.scrollTo(0, 0);

  // Set footer year automatically
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});