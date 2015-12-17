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

    $('#contact_form').on('submit', function(event) {
      var $form = $(this);
      event.preventDefault();

      $.ajax({
        url: $form.attr('action'),
        method: $form.attr('method'),
        data: $form.serialize(),
      })
      .done(function(data) {
        alert('Message bien envoyé ! Merci')
      })
      .fail(function(data) {
        alert('Error: Le message n\'a pas été envoyé !')
      })
      .always(function() {
      })
    })
  });
})();
