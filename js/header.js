const $header = document.querySelector('header');

window.addEventListener('scroll', toggleHeader, false);

function toggleHeader() {

  if (window.pageYOffset > 75) {
    $header.classList.add('headerTranslucentColor');
  }
  else {
    $header.classList.remove('headerTranslucentColor');
  }

  if (window.pageYOffset > 425) {
    $header.classList.remove('headerTranslucentColor');
    $header.classList.add('headerSolidColor');
  }
  else {
    $header.classList.remove('headerSolidColor');
  }

  //console.log(window.pageYOffset);
}
