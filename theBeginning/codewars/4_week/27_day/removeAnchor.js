//Complete the function/method so that it returns the url with anything after the anchor (#) removed.

function removeUrlAnchor(url) {
  const regex = /^[^#]*/;
  return url.match(regex)[0];
}