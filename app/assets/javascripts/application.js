// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require bootstrap

$(function(){
  $('#submit-contact').on('click', function() {
    $('div').removeClass('has-warning has-error has-success');
    $('#alert').removeClass('alert-danger alert-success');
    
    var userNameVal = $('#user_name').val();
    var userMessageVal = $('#user_message').val();
    
    if (!userNameVal) {
      $('#user-name-div').addClass('has-error');
    } else {
      $('#user-name-div').addClass('has-success');
    }
    if (!userMessageVal) {
      $('#user-message-div').addClass('has-error');
    } else {
      $('#user-message-div').addClass('has-success');
    }
    
    if (userNameVal && userMessageVal) {
      $('#alert').addClass('alert-success');
      $('#alert').text("SUCCESS!!");
    } else {
      $('#alert').addClass('alert-danger');
      $('#alert').text("Try Again!");
    }
  });
});