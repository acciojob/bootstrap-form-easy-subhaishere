$(document).ready(function() {
  // Form submission
  $('#application-form').submit(function(event) {
    event.preventDefault();
    
    // Reset validation classes
    $('.form-control').removeClass('is-invalid');
    $('.invalid-feedback').hide();
    
    // Check each field for validation
    let isValid = true;
    
    if ($('#first-name-input').val().trim() === '') {
      $('#first-name-input').addClass('is-invalid');
      $('#first-name-input').next('.invalid-feedback').show();
      isValid = false;
    }
    
    if ($('#last-name-input').val().trim() === '') {
      $('#last-name-input').addClass('is-invalid');
      $('#last-name-input').next('.invalid-feedback').show();
      isValid = false;
    }
    
    if ($('#email-input').val().trim() === '') {
      $('#email-input').addClass('is-invalid');
      $('#email-input').next('.invalid-feedback').show();
      isValid = false;
    } else if (!isValidEmail($('#email-input').val().trim())) {
      $('#email-input').addClass('is-invalid');
      $('#email-input').next('.invalid-feedback').text('Please enter a valid email address.').show();
      isValid = false;
    }
    
    if ($('#college-input').val().trim() === '') {
      $('#college-input').addClass('is-invalid');
      $('#college-input').next('.invalid-feedback').show();
      isValid = false;
    }
    
    if ($('#roll-no-input').val().trim() === '') {
      $('#roll-no-input').addClass('is-invalid');
      $('#roll-no-input').next('.invalid-feedback').show();
      isValid = false;
    }
    
    if ($('#graduation-year-input').val() === '') {
      $('#graduation-year-input').addClass('is-invalid');
      $('#graduation-year-input').next('.invalid-feedback').show();
      isValid = false;
    }
    
    if (!$('#conditions-checkbox').is(':checked')) {
      $('#conditions-checkbox').addClass('is-invalid');
      $('#conditions-checkbox').next('.invalid-feedback').show();
      isValid = false;
    }
    
    // If all fields are valid, submit the form
    if (isValid) {
      alert('Form submitted successfully!');
      // Additional actions can be performed here
    }
  });
  
  // Email validation function
  function isValidEmail(email) {
    // Simple email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});