
function objectFit(image) {
  if ('objectFit' in document.documentElement.style === false && image.currentStyle['object-fit']) {
    image.style.background = 'url("' + image.src + '") no-repeat 50%/' + image.currentStyle['object-fit'];
    image.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + image.width + "' height='" + image.height + "'%3E%3C/svg%3E";
  }
};

let elem = document.querySelector('.repair-work-block__img');
objectFit(elem);