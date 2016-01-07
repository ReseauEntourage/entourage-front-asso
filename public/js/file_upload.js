var ready = function() {
  var form         = $('#registration_form');
  var fileInput    = $('#registration_form-1-logo-input');
  var submitButton = $('#registration_form-submit');
  var progressBar  = $("<div class='bar'></div>");
  var barContainer = $("<div class='progress'></div>").append(progressBar);
  fileInput.parent().after(barContainer);

  //see https://github.com/blueimp/jQuery-File-Upload/wiki/Options
  fileInput.fileupload({
      fileInput:       fileInput,
      url:             form.data('url'),
      type:            'POST',
      autoUpload:       true,
      formData:         form.data('form-data'),
      paramName:        'file', // S3 does not like nested name fields i.e. name="user[avatar_url]"
      dataType:         'XML',  // S3 returns XML if success_action_status is set to 201
      replaceFileInput: false,
      progressall: function (e, data) {
        var progress = parseInt(data.loaded / data.total * 100, 10);
        progressBar.css('width', progress + '%')
      },
      start: function (e) {
        submitButton.prop('disabled', true);

        progressBar.
          css('background', 'green').
          css('display', 'block').
          css('width', '0%').
          text("Loading...");
      },
      done: function(e, data) {
        submitButton.prop('disabled', false);
        progressBar.text("Uploading done");

        // extract key from response
        var key   = $(data.jqXHR.responseXML).find("Key").text();
        $('#registration_form-1-logo_key').val(key);
      },
      fail: function(e, data) {
        submitButton.prop('disabled', false);

        progressBar.
          css("background", "red").
          text("Failed");
      }
    });
};

$(document).ready(ready);
$(document).on('page:load', ready);
