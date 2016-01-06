;

window.SameHeightAs = function() {
  function onSameHeightAsDivs() {
    var $that = $(this),
      ignore_full = $that.data('ignore-full'),
      fixed_size = $that.data('fixed-size'),
      same_height_as_id = $that.data('same-height-as'),
      $same_height_as = $(same_height_as_id).first(),
      old_min_height = 0;

    $same_height_as.find('img').on('load', fn_onSameHeightAsDivs);
    $same_height_as.on('load', fn_onSameHeightAsDivs);

    // could not find element
    if(0 == $same_height_as.length) {
      console.debug('Could not find element');
      return true;
    }

    // disabled when element is taking full-width
    if(!ignore_full && $same_height_as.parent().width() == $same_height_as.outerWidth()) {
      console.debug('Disabled on full-width element');
      return;
    }

    $that.css('min-height', $same_height_as.height());
    if(fixed_size) {
      $that.css('height', $same_height_as.height());
    }
  }

  function fn_onSameHeightAsDivs() {
    $('div[data-same-height-as]').each(onSameHeightAsDivs);
  }

  $( document ).ready(fn_onSameHeightAsDivs);
  $( window ).resize(fn_onSameHeightAsDivs);

  fn_onSameHeightAsDivs();
};
