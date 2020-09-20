function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var isEnglish = true;
var lang = getParameterByName('lang')
if (lang && lang === 'es') {
  isEnglish = false;
}
  
esElements = document.getElementsByClassName(isEnglish ? 'es-text' : 'en-text')
for(var i = 0; i < esElements.length; i++) {
  esElements[i].style.display = 'none';
}
var languageToggle = function() {
  isEnglish = !isEnglish
  var classNameToHide= isEnglish ? 'es-text' : 'en-text'
  var classNameToShow= isEnglish ? 'en-text' : 'es-text'
  var elementsToHide = document.getElementsByClassName(classNameToHide)
  var elementsToShow = document.getElementsByClassName(classNameToShow)
  for(var i = 0; i < elementsToHide.length; i++) {
    elementsToHide[i].style.display = 'none';
  }
  for(var i = 0; i < elementsToShow.length; i++) {
    elementsToShow[i].style.display = '';
  }
}

var goToPageWithLang = function(link) {
  if (isEnglish === false) {
    window.location.href = link+'?lang=es'
  } else {
    window.location.href = link
  }
}