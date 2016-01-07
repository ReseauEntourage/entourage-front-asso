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
        $("#success-box").removeClass("hidden");
        $("#alert-box").addClass("hidden");
      })
      .fail(function(data) {
        $("#success-box").addClass("hidden");
        $("#alert-box").removeClass("hidden");
        errors = JSON.parse(data.responseText).errors;
        $("#errors-list").html("");
        errors.forEach(function(entry) {
          $("#errors-list").append("<li>"+entry+"</li>")
        });
      })
      .always(function() {
      })
    });

    $('#registration_form').on('submit', function(event) {
      var $form = $(this);
      event.preventDefault();

      $.ajax({
        url: $form.attr('action'),
        method: $form.attr('method'),
        data: { registration_request:
          {
            organization: {
              name: $('#registration_form-1-name').val(),
              local_entity: $('#registration_form-1-local_entity').val(),
              address: $('#registration_form-1-address').val(),
              phone: $('#registration_form-1-phone').val(),
              email: $('#registration_form-1-email').val(),
              website_url: $('#registration_form-1-website_url').val(),
              description: $('#registration_form-1-description').val(),
              logo_key: $('#registration_form-1-logo_key').val(),
            },
            user: {
              first_name: $('#registration_form-2-first_name').val(),
              last_name: $('#registration_form-2-last_name').val(),
              phone: $('#registration_form-2-phone').val(),
              email: $('#registration_form-2-email').val(),
            },
          },
        },
        dataType: 'json',
      })
      .done(function(data) {
        $("#success-box").removeClass("hidden");
        $("#alert-box").addClass("hidden");
      })
      .fail(function(data) {
        $("#success-box").addClass("hidden");
        $("#alert-box").removeClass("hidden");
        organization_errors = JSON.parse(data.responseText).errors.organization;
        $("#organization-errors-list").html("");
        organization_errors.forEach(function(entry) {
          $("#organization-errors-list").append("<li>"+entry+"</li>")
        });
        
        contact_errors = JSON.parse(data.responseText).errors.user;
        $("#contact-errors-list").html("");
        contact_errors.forEach(function(entry) {
          $("#contact-errors-list").append("<li>"+entry+"</li>")
        });
      })
      .always(function() {
      })
    });
  });
})();
