(function() {

  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),
    main: document.querySelector('main'),
    header: document.querySelector('header'),
    footer: document.querySelector('footer'),

    doToggle: function(e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    },
    close: function(e) {
      this.navToggle.classList.remove('expanded');
      this.nav.classList.remove('expanded');
    }
  };

  hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
  hamburger.main.addEventListener('click', function(e) { hamburger.close(e); });
  hamburger.header.addEventListener('click', function(e) { hamburger.close(e); });
  hamburger.footer.addEventListener('click', function(e) { hamburger.close(e); });
}());