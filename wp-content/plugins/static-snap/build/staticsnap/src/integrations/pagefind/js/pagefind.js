window.addEventListener('DOMContentLoaded', (event) => {
  // get .elementor-search-form__input
  // add search div
  //document
  //.getElementsByTagName('body')[0]
  //.insertAdjacentHTML('beforeend', '<div id="search" ></div>');

  var is_static = false;

  new PagefindUI({
    element: '#search',
    showSubResults: true,
    bundlePath: '/wp-content/uploads/static-snap/tmp/stage/pagefind/',
    basePath: '/wp-content/uploads/static-snap/tmp/stage/pagefind/',
    processResult: function (result) {
      console.log(result);
      if (!is_static) {
        // replace /wp-content/uploads/static-snap/tmp to /
        result.url = result.url.replace('/wp-content/uploads/static-snap/tmp', '');
      }
      return result;
    },
  });
});
