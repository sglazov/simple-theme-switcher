(function () {
  var docBody = document.body;
  var toggle  = document.getElementById('toggle');


  if ( localStorage.getItem('themeType') != null ) {
    getThemeType      = localStorage.themeType;
    docBody.className = getThemeType;
    if ( localStorage.getItem('themeType') == 'dark' ) {
      toggle.checked = true;
    }
  }


  toggle.addEventListener('change', function () {
    if ( docBody.className == '' ) {
      docBody.classList.toggle('dark');
    } else if ( docBody.className == 'dark' ) {
      docBody.classList.replace('dark', 'light');
    } else if ( docBody.className == 'light' ) {
      docBody.classList.replace('light', 'dark');
    }
    localStorage.setItem('themeType', docBody.className);
  });


  var darkThemeQuery = '(prefers-color-scheme: dark)';
  var matchMedia = window.matchMedia;
  if (matchMedia && matchMedia(darkThemeQuery).matches) {
    toggle.click();
  }

})();
