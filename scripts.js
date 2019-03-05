(function () {
  var docBody         = document.body;
  var toggle          = document.getElementById('toggle');
  var metaThemeColor  = document.querySelector("meta[name=theme-color]");

  function setMetaThemeColor() {
    var pageStyle       = getComputedStyle(docBody);
    var backgroundColor = pageStyle.getPropertyValue('--background-color');
        metaThemeColor.setAttribute('content', backgroundColor);
  }


  toggle.addEventListener('change', function () {

    if ( docBody.className == '' ) {
      docBody.classList.toggle('dark');
      setMetaThemeColor();
    } else if ( docBody.className == 'dark' ) {
      docBody.classList.replace('dark', 'light');
      setMetaThemeColor();
    } else if ( docBody.className == 'light' ) {
      docBody.classList.replace('light', 'dark');
      setMetaThemeColor();
    }

    localStorage.setItem('themeType', docBody.className);
  });


  if ( localStorage.getItem('themeType') != null ) {
    var getThemeType      = localStorage.themeType;
        docBody.className = getThemeType;
    setMetaThemeColor();
    if ( localStorage.getItem('themeType') == 'dark' ) {
      toggle.checked = true;
    }
  }


  var darkThemeQuery = '(prefers-color-scheme: dark)';
  var matchMedia = window.matchMedia;
  if (matchMedia && matchMedia(darkThemeQuery).matches) {
    toggle.click();
  }

})();
