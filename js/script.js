;

(function() {
  $( document ).ready(function onDocumentReady() {
    SameHeightAs();

    $('.field[id], textarea[id]').on('focus', function() {
      $('label[for=' + this.id + ']').parents('.input-field').addClass('active')
    });
    $('.field[id], textarea[id]').on('blur', function() {
      if('' === this.value)
        $('label[for=' + this.id + ']').parents('.input-field').removeClass('active')
    });
    $('#equipe-voir-plus').on('click', function(event) {
      event.preventDefault();
      $('#equipe-plus').slideToggle();
    });
  });
})();
