;

// from http://stackoverflow.com/questions/1184624/convert-form-data-to-javascript-object-with-jquery
$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

(function() {
  $( document ).ready(function onDocumentReady() {
    SameHeightAs();

    $('.field[id], textarea[id]').on('focus change', function() {
      $('label[for=' + this.id + ']').parents('.input-field').addClass('active')
    });
    $('.field[id], textarea[id]').on('blur change', function() {
      if('' === this.value)
        $('label[for=' + this.id + ']').parents('.input-field').removeClass('active')
    });
    $('#equipe-voir-plus').on('click', function(event) {
      event.preventDefault();
      $('#equipe-plus').slideToggle()
    });

    $('#contact_form').on('submit', function(event) {
      var $form = $(this);
      event.preventDefault();

      $.ajax({
        url: $form.attr('action'),
        method: $form.attr('method'),
        data: { message: $form.serializeObject() },
        dataType: 'json',
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
