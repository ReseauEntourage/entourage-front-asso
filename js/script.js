;

(function() {
  $( document ).ready(function onDocumentReady() {
    SameHeightAs();

    $('.field[id]').on('focus', function() {
      $('label[for=' + this.id + ']').parent().addClass('active')
    });
    $('.field[id]').on('blur', function() {
      if('' === this.value)
        $('label[for=' + this.id + ']').parent().removeClass('active')
    });
  });
})();
